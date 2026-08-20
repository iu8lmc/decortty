// DecoRTTY wavtool — generate and decode RTTY WAV files.
//
// Exists so the decoder can be compared against another program on identical
// input. Generating the test signal with our own modulator makes the comparison
// cut both ways: if MMTTY reads the file, our transmitter is standard-conforming;
// if we read a file MMTTY generated, our receiver is.
//
//   wavtool gen <file.wav> <snr_db> ["text"]   write a test transmission
//   wavtool decode <file.wav>                  decode one, and report

#include "dsp/FirDecimator.h"
#include "dsp/FskModulator.h"
#include "dsp/RttyDemodulator.h"
#include "dsp/ViterbiBaudot.h"

#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <random>
#include <string>
#include <vector>

using namespace decortty::dsp;

namespace {

constexpr int kWavRate = 48000;   // what a sound card and MMTTY both accept

#pragma pack(push, 1)
struct WavHeader {
    char     riff[4]{'R','I','F','F'};
    uint32_t fileSize{0};
    char     wave[4]{'W','A','V','E'};
    char     fmt[4]{'f','m','t',' '};
    uint32_t fmtSize{16};
    uint16_t format{1};          // PCM
    uint16_t channels{1};
    uint32_t sampleRate{kWavRate};
    uint32_t byteRate{kWavRate * 2};
    uint16_t blockAlign{2};
    uint16_t bitsPerSample{16};
    char     data[4]{'d','a','t','a'};
    uint32_t dataSize{0};
};
#pragma pack(pop)

bool writeWav(const std::string& path, const std::vector<float>& samples)
{
    std::FILE* f = std::fopen(path.c_str(), "wb");
    if (!f)
        return false;

    WavHeader h;
    h.dataSize = static_cast<uint32_t>(samples.size() * 2);
    h.fileSize = h.dataSize + sizeof(WavHeader) - 8;
    std::fwrite(&h, sizeof(h), 1, f);

    std::vector<int16_t> pcm(samples.size());
    for (size_t i = 0; i < samples.size(); ++i) {
        const float c = std::clamp(samples[i], -1.0f, 1.0f);
        pcm[i] = static_cast<int16_t>(std::lround(c * 32767.0f));
    }
    std::fwrite(pcm.data(), 2, pcm.size(), f);
    std::fclose(f);
    return true;
}

bool readWav(const std::string& path, std::vector<float>& samples, int& rate)
{
    std::FILE* f = std::fopen(path.c_str(), "rb");
    if (!f)
        return false;

    WavHeader h;
    if (std::fread(&h, sizeof(h), 1, f) != 1) {
        std::fclose(f);
        return false;
    }
    if (std::memcmp(h.riff, "RIFF", 4) != 0 || std::memcmp(h.wave, "WAVE", 4) != 0) {
        std::fclose(f);
        return false;
    }
    rate = static_cast<int>(h.sampleRate);
    const int channels = std::max<uint16_t>(1, h.channels);

    std::vector<int16_t> pcm(h.dataSize / 2);
    const size_t got = std::fread(pcm.data(), 2, pcm.size(), f);
    std::fclose(f);

    // Fold to mono: a file recorded from a stereo card carries the same signal
    // twice, and taking one channel would throw away 3 dB for nothing.
    samples.resize(got / static_cast<size_t>(channels));
    for (size_t i = 0; i < samples.size(); ++i) {
        float sum = 0.0f;
        for (int c = 0; c < channels; ++c)
            sum += static_cast<float>(pcm[i * channels + c]) / 32768.0f;
        samples[i] = sum / channels;
    }
    return true;
}

int generate(const std::string& path, float snrDb, const std::string& text, bool reverse,
             float markHz)
{
    RttyParams params;
    // Swaps which tone carries mark. Useful when the receiving program has
    // locked the opposite polarity: the signal is just as valid, and it lets
    // the two ends meet without touching the other program's settings.
    params.reverse = reverse;
    if (markHz > 0.0f)
        params.markHz = markHz;
    FskModulator mod(params, kWavRate);
    mod.setDiddle(false);
    mod.setAmplitude(0.5f);

    // Long LTRS preamble: every RTTY program wants a run of idle to lock onto,
    // and MMTTY in particular needs its AFC to settle before the text starts.
    for (int i = 0; i < 24; ++i)
        mod.enqueueCode(kBaudotLtrs);
    mod.enqueueText(text);
    for (int i = 0; i < 8; ++i)
        mod.enqueueCode(kBaudotLtrs);

    std::vector<float> audio;
    // A second of quiet at each end so a decoder has somewhere to settle.
    audio.assign(kWavRate, 0.0f);

    std::vector<float> block(1024);
    while (!mod.idle()) {
        mod.generate(block.data(), static_cast<int>(block.size()));
        audio.insert(audio.end(), block.begin(), block.end());
    }
    audio.insert(audio.end(), kWavRate, 0.0f);

    if (snrDb < 60.0f) {
        const float signalPower = 0.5f * 0.5f * 0.5f;
        const float noiseBw     = params.shiftHz + 2.0f * params.baud;
        const float snrLin      = std::pow(10.0f, snrDb / 10.0f);
        const float noisePsd    = signalPower / (snrLin * noiseBw);
        const float sigma       = std::sqrt(noisePsd * kWavRate * 0.5f);

        std::mt19937 rng(20260820u);
        std::normal_distribution<float> gauss(0.0f, sigma);
        for (float& s : audio)
            s = std::clamp(s + gauss(rng), -1.0f, 1.0f);
    }

    if (!writeWav(path, audio)) {
        std::printf("cannot write %s\n", path.c_str());
        return 1;
    }
    std::printf("wrote %s — %.1f s, %.0f dB SNR, %d Hz\n",
                path.c_str(), audio.size() / double(kWavRate), snrDb, kWavRate);
    std::printf("  %.2f baud, %.0f Hz shift, mark %.0f Hz%s\n",
                params.baud, params.shiftHz, params.markHz, reverse ? ", invertito" : "");
    std::printf("  text: %s\n", text.c_str());
    return 0;
}

int decode(const std::string& path, bool reverse, float markHz)
{
    std::vector<float> audio;
    int rate = 0;
    if (!readWav(path, audio, rate)) {
        std::printf("cannot read %s\n", path.c_str());
        return 1;
    }
    if (rate % kWorkRate != 0) {
        std::printf("%s is %d Hz; need a multiple of %d\n", path.c_str(), rate, kWorkRate);
        return 1;
    }

    RttyParams params;
    params.reverse = reverse;
    if (markHz > 0.0f)
        params.markHz = markHz;
    FirDecimator decim(rate / kWorkRate, rate);
    RttyDemodulator demod(params, kWorkRate);
    ViterbiBaudot viterbi;

    std::string text;
    int frames = 0;
    auto onChar = [&](const DecodedChar& dc) { text.push_back(dc.text); ++frames; };

    std::vector<float> work(audio.size() / (rate / kWorkRate) + 4);
    const int produced = decim.process(audio.data(), static_cast<int>(audio.size()), work.data());
    demod.process(work.data(), produced, [&](const SoftFrame& f) { viterbi.push(f, onChar); });
    viterbi.flush(onChar);

    std::printf("%s — %.1f s at %d Hz\n", path.c_str(), audio.size() / double(rate), rate);
    std::printf("  characters: %d   locked: %s   measured baud: %.2f   AFC: %+.1f Hz\n",
                frames, demod.locked() ? "yes" : "no", demod.measuredBaud(), demod.afcOffsetHz());
    std::printf("  text: %s\n", text.c_str());
    return 0;
}

} // namespace

int main(int argc, char** argv)
{
    if (argc >= 4 && std::string(argv[1]) == "gen") {
        // Gli argomenti dopo il rapporto segnale-rumore sono opzionali e in
        // ordine libero: "rev" inverte i toni, "mark=1445" sposta il segnale
        // altrove in banda, e quello che resta e' il testo.
        std::string text;
        bool  reverse = false;
        float markHz  = 0.0f;
        for (int i = 4; i < argc; ++i) {
            const std::string arg = argv[i];
            if (arg == "rev")
                reverse = true;
            else if (arg.rfind("mark=", 0) == 0)
                markHz = std::stof(arg.substr(5));
            else if (text.empty())
                text = arg;
        }
        if (text.empty()) {
            text = "CQ CQ CQ DE IU8LMC IU8LMC IU8LMC PSE K "
                   "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG 1234567890 "
                   "UR RST 599 599 QTH ROMA NAME MARIO 73 ES GL SK";
        }
        return generate(argv[2], std::stof(argv[3]), text, reverse, markHz);
    }
    if (argc >= 3 && std::string(argv[1]) == "decode") {
        bool  reverse = false;
        float markHz  = 0.0f;
        for (int i = 3; i < argc; ++i) {
            const std::string arg = argv[i];
            if (arg == "rev")
                reverse = true;
            else if (arg.rfind("mark=", 0) == 0)
                markHz = std::stof(arg.substr(5));
        }
        return decode(argv[2], reverse, markHz);
    }

    std::printf("usage:\n");
    std::printf("  wavtool gen <file.wav> <snr_db> [\"text\"] [rev] [mark=Hz]\n");
    std::printf("  wavtool decode <file.wav> [rev] [mark=Hz]\n");
    return 1;
}
