// DecoRTTY self-test — closes the loop on the DSP chain without a radio.
//
// Modulates a known text at 24 kHz exactly as the transmitter will, adds white
// noise at a measured Eb/N0, decimates to the decoder's working rate and runs
// the full receive chain. The character error rate it prints is the honest
// figure of merit for any change to the demodulator or the Viterbi stage.

#include "dsp/FirDecimator.h"
#include "dsp/FskModulator.h"
#include "dsp/AutoTuner.h"
#include "dsp/RttyDemodulator.h"
#include "dsp/RxFilters.h"
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

constexpr int kRadioRate = 24000;

// Levenshtein distance, so a decoder that drops or inserts a character is
// scored honestly instead of being counted wrong for the whole rest of the line.
int editDistance(const std::string& a, const std::string& b)
{
    std::vector<int> prev(b.size() + 1), cur(b.size() + 1);
    for (size_t j = 0; j <= b.size(); ++j)
        prev[j] = static_cast<int>(j);

    for (size_t i = 1; i <= a.size(); ++i) {
        cur[0] = static_cast<int>(i);
        for (size_t j = 1; j <= b.size(); ++j) {
            const int cost = a[i - 1] == b[j - 1] ? 0 : 1;
            cur[j] = std::min({prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost});
        }
        std::swap(prev, cur);
    }
    return prev[b.size()];
}

std::string normalise(const std::string& in)
{
    // The decoder emits CR and LF as the wire carried them; collapse whitespace
    // so the comparison measures characters, not line discipline.
    std::string out;
    bool lastSpace = false;
    for (const char c : in) {
        const bool isSpace = (c == ' ' || c == '\r' || c == '\n');
        if (isSpace) {
            if (!lastSpace && !out.empty())
                out.push_back(' ');
            lastSpace = true;
        } else {
            out.push_back(c);
            lastSpace = false;
        }
    }
    while (!out.empty() && out.back() == ' ')
        out.pop_back();
    return out;
}

struct Result {
    std::string text;
    double      cer{0.0};
    float       snrDb{0.0f};
    int         corrections{0};
};

Result runOnce(const std::string& message, float snrDb, int viterbiDepth, uint32_t seed,
               float squelchDb = -1.0f, float minQuality = -1.0f)
{
    RttyParams params;
    if (squelchDb >= 0.0f)  params.squelchDb = squelchDb;
    if (minQuality >= 0.0f) params.minFrameQuality = minQuality;

    // ── transmit ────────────────────────────────────────────────────────
    FskModulator mod(params, kRadioRate);
    mod.setDiddle(false);
    mod.setAmplitude(0.5f);
    // A short LTRS preamble is what every real station sends to let the far
    // end's timing loop settle before the text starts.
    for (int i = 0; i < 8; ++i)
        mod.enqueueCode(kBaudotLtrs);
    mod.enqueueText(message);
    // Real stations hold the line in mark/LTRS after their last character rather
    // than cutting the carrier mid-stop-bit. Without a postamble the final
    // character's stop bit would be truncated by the end of the buffer, and the
    // receiver would correctly reject it — an artefact of the test, not of the
    // decoder.
    for (int i = 0; i < 4; ++i)
        mod.enqueueCode(kBaudotLtrs);

    std::vector<float> tx;
    tx.reserve(static_cast<size_t>(kRadioRate) * 30);
    std::vector<float> block(1024);
    while (!mod.idle()) {
        mod.generate(block.data(), static_cast<int>(block.size()));
        tx.insert(tx.end(), block.begin(), block.end());
    }
    // Let the last character clear the filters.
    tx.insert(tx.end(), static_cast<size_t>(kRadioRate) / 2, 0.0f);

    // ── channel ─────────────────────────────────────────────────────────
    // Noise power is set against the signal power in the receiver's bandwidth,
    // taken here as the shift plus two bit rates — the span the two matched
    // filters actually see.
    const float signalPower = 0.5f * 0.5f * 0.5f;          // sine of amplitude 0.5
    const float noiseBw     = params.shiftHz + 2.0f * params.baud;
    const float snrLin      = std::pow(10.0f, snrDb / 10.0f);
    const float noisePsd    = signalPower / (snrLin * noiseBw);
    const float noiseSigma  = std::sqrt(noisePsd * kRadioRate * 0.5f);

    std::mt19937 rng(seed);
    std::normal_distribution<float> gauss(0.0f, noiseSigma);
    for (float& s : tx)
        s += gauss(rng);

    // ── receive ─────────────────────────────────────────────────────────
    FirDecimator decim(kRadioRate / kWorkRate, kRadioRate);
    RttyDemodulator demod(params, kWorkRate);

    ViterbiBaudot::Config vcfg;
    vcfg.depth = viterbiDepth;
    ViterbiBaudot viterbi;
    viterbi.setConfig(vcfg);

    Result result;
    std::string decoded;

    auto onChar = [&](const DecodedChar& dc) {
        decoded.push_back(dc.text);
        if (dc.corrected)
            ++result.corrections;
    };
    auto onFrame = [&](const SoftFrame& frame) {
        viterbi.push(frame, onChar);
    };

    std::vector<float> work(block.size());
    for (size_t i = 0; i < tx.size(); i += block.size()) {
        const int n = static_cast<int>(std::min(block.size(), tx.size() - i));
        const int m = decim.process(tx.data() + i, n, work.data());
        demod.process(work.data(), m, onFrame);
    }
    viterbi.flush(onChar);

    const std::string expected = normalise(message);
    const std::string got      = normalise(decoded);

    result.text  = got;
    result.snrDb = demod.snrDb();
    result.cer   = expected.empty()
                 ? 0.0
                 : static_cast<double>(editDistance(expected, got))
                       / static_cast<double>(expected.size());
    return result;
}

} // namespace

// ── auto-centratura ─────────────────────────────────────────────────────────
//
// Il caso che conta non e' il segnale al centro del passa-banda: e' quello che
// arriva mentre si guarda altrove. Qui si accende la radio sulla frequenza
// sbagliata, o nel verso sbagliato, e si misura se il programma ci arriva da
// solo e quanto tempo ci mette.
struct AutoTuneTrial {
    bool        moved{false};
    float       finalMark{0.0f};
    bool        finalReverse{false};
    double      seconds{0.0};     // quando e' arrivato l'aggancio
    int         copies{0};        // quante volte il messaggio e' uscito intero
    int         actions{0};       // quante volte ha toccato la sintonia
};

AutoTuneTrial autoTuneTrial(float trueMark, bool trueReverse,
                            float startMark, bool startReverse,
                            float snrDb, int repeats = 6, bool enable = true)
{
    const std::string message = "CQ CQ DE DL0TST DL0TST K ";

    // ── il segnale come sarebbe in aria ─────────────────────────────────
    RttyParams txParams;
    txParams.markHz  = trueMark;
    txParams.reverse = trueReverse;

    FskModulator mod(txParams, kRadioRate);
    mod.setDiddle(false);
    mod.setAmplitude(0.5f);
    for (int i = 0; i < 8; ++i)
        mod.enqueueCode(kBaudotLtrs);
    for (int r = 0; r < repeats; ++r)
        mod.enqueueText(message);
    for (int i = 0; i < 4; ++i)
        mod.enqueueCode(kBaudotLtrs);

    std::vector<float> tx;
    std::vector<float> block(1024);
    while (!mod.idle()) {
        mod.generate(block.data(), static_cast<int>(block.size()));
        tx.insert(tx.end(), block.begin(), block.end());
    }
    tx.insert(tx.end(), static_cast<size_t>(kRadioRate) / 2, 0.0f);

    const float signalPower = 0.5f * 0.5f * 0.5f;
    const float noiseBw     = txParams.shiftHz + 2.0f * txParams.baud;
    const float snrLin      = std::pow(10.0f, snrDb / 10.0f);
    const float noisePsd    = signalPower / (snrLin * noiseBw);
    const float noiseSigma  = std::sqrt(noisePsd * kRadioRate * 0.5f);
    std::mt19937 rng(20260820u);
    std::normal_distribution<float> gauss(0.0f, noiseSigma);
    for (float& v : tx)
        v += gauss(rng);

    // ── il ricevitore, che parte dove gli si dice ───────────────────────
    RttyParams rxParams;
    rxParams.markHz  = startMark;
    rxParams.reverse = startReverse;

    FirDecimator    decim(kRadioRate / kWorkRate, kRadioRate);
    RttyDemodulator demod(rxParams, kWorkRate);

    AutoTuner tuner;
    tuner.setEnabled(enable);
    tuner.setRange(400.0f, 2600.0f);

    ViterbiBaudot::Config vcfg;
    vcfg.depth = 4;
    ViterbiBaudot viterbi;
    viterbi.setConfig(vcfg);

    std::string decoded;
    auto onChar  = [&](const DecodedChar& dc) { decoded.push_back(dc.text); };
    auto onFrame = [&](const SoftFrame& f) { viterbi.push(f, onChar); };

    AutoTuneTrial trial;
    trial.finalMark    = startMark;
    trial.finalReverse = startReverse;

    // L'auto-centratura viene interrogata quattro volte al secondo, come nel
    // programma: piu' spesso non servirebbe, perche' lo spettro medio si
    // rinnova ogni quarto di secondo.
    const int    step      = kRadioRate / 4;
    double       elapsed   = 0.0;
    std::vector<float> work(static_cast<size_t>(step));

    for (size_t i = 0; i < tx.size(); i += static_cast<size_t>(step)) {
        const int n = static_cast<int>(std::min<size_t>(static_cast<size_t>(step), tx.size() - i));
        const int m = decim.process(tx.data() + i, n, work.data());
        demod.process(work.data(), m, onFrame);
        elapsed += static_cast<double>(n) / kRadioRate;

        if (demod.locked() && trial.seconds <= 0.0)
            trial.seconds = elapsed;

        const AutoTuner::Decision decision = tuner.update(demod, rxParams, 0.25);
        if (decision.changed) {
            rxParams.markHz  = decision.markHz;
            rxParams.reverse = decision.reverse;
            demod.setParams(rxParams);
            trial.moved = true;
            ++trial.actions;
        }
    }
    viterbi.flush(onChar);

    trial.finalMark    = rxParams.markHz;
    trial.finalReverse = rxParams.reverse;

    const std::string expected = normalise(message);
    const std::string got      = normalise(decoded);
    for (size_t at = got.find(expected); at != std::string::npos;
         at = got.find(expected, at + 1))
        ++trial.copies;
    return trial;
}

// Quante volte l'auto-centratura tocca la sintonia quando in banda non c'e'
// RTTY. E' la meta' del problema che conta: una funzione che insegue il rumore
// e' peggio che non averla, perche' porta via la sintonia proprio mentre
// l'operatore aspetta che qualcuno chiami.
int autoTuneFalseMoves(float seconds, float carrierHz, float carrierAmp, uint32_t seed)
{
    RttyParams params;
    const int total = static_cast<int>(seconds * kRadioRate);

    std::mt19937 rng(seed);
    std::normal_distribution<float> gauss(0.0f, 0.05f);

    FirDecimator    decim(kRadioRate / kWorkRate, kRadioRate);
    RttyDemodulator demod(params, kWorkRate);

    AutoTuner tuner;
    tuner.setEnabled(true);
    tuner.setRange(400.0f, 2600.0f);

    const int step = kRadioRate / 4;
    std::vector<float> block(static_cast<size_t>(step)), work(static_cast<size_t>(step));

    int moves = 0;
    for (int done = 0; done < total; done += step) {
        for (int i = 0; i < step; ++i) {
            const double t = static_cast<double>(done + i) / kRadioRate;
            block[static_cast<size_t>(i)] = gauss(rng);
            if (carrierAmp > 0.0f) {
                block[static_cast<size_t>(i)] += carrierAmp *
                    static_cast<float>(std::sin(2.0 * 3.14159265358979 * carrierHz * t));
            }
        }
        const int m = decim.process(block.data(), step, work.data());
        demod.process(work.data(), m, [](const SoftFrame&) {});

        const AutoTuner::Decision decision = tuner.update(demod, params, 0.25);
        if (decision.changed) {
            ++moves;
            params.markHz  = decision.markHz;
            params.reverse = decision.reverse;
            demod.setParams(params);
        }
    }
    return moves;
}

// Characters printed from noise alone. On the air this is what makes a decoder
// unpleasant: a receiver left on a quiet frequency should print nothing at all,
// and the aggregate CER above cannot see this failure because it only ever
// measures runs that contain a signal.
int falseCharacters(float seconds, uint32_t seed, float squelchDb, float minQuality)
{
    RttyParams params;
    if (squelchDb >= 0.0f)  params.squelchDb = squelchDb;
    if (minQuality >= 0.0f) params.minFrameQuality = minQuality;

    const int total = static_cast<int>(seconds * kRadioRate);
    std::mt19937 rng(seed);
    // Noise at roughly the level a signal would have, so the AGC settles where
    // it would in service rather than in some quiet corner.
    std::normal_distribution<float> gauss(0.0f, 0.05f);

    FirDecimator   decim(kRadioRate / kWorkRate, kRadioRate);
    RttyDemodulator demod(params, kWorkRate);
    ViterbiBaudot::Config vcfg;
    vcfg.depth = 0;
    ViterbiBaudot viterbi;
    viterbi.setConfig(vcfg);

    int printed = 0;
    auto onChar = [&](const DecodedChar& dc) { if (dc.text > ' ') ++printed; };

    std::vector<float> block(1024), work(1024);
    for (int done = 0; done < total; done += static_cast<int>(block.size())) {
        for (float& v : block)
            v = gauss(rng);
        const int m = decim.process(block.data(), static_cast<int>(block.size()), work.data());
        demod.process(work.data(), m, [&](const SoftFrame& f) { viterbi.push(f, onChar); });
    }
    viterbi.flush(onChar);
    return printed;
}

// The transmit chain as it actually runs through the gateway: the modulator's
// 24 kHz output is interpolated to the codec's 48 kHz, quantised to the 16 bits
// a sound card takes, then decimated back for the decoder. Each of those steps
// can quietly ruin an FSK signal — an interpolator without a filter puts images
// either side of the tones, and clipping at the quantiser spreads them across
// the band. Testing modulator-to-demodulator at one rate would never show it.
double transmitChainCer(const std::string& message, float amplitude)
{
    RttyParams params;

    FskModulator mod(params, kWorkRate * 3);   // 24 kHz, the wire rate
    mod.setDiddle(false);
    mod.setAmplitude(amplitude);
    for (int i = 0; i < 8; ++i) mod.enqueueCode(kBaudotLtrs);
    mod.enqueueText(message);
    for (int i = 0; i < 4; ++i) mod.enqueueCode(kBaudotLtrs);

    FirInterpolator up(2, 48000);      // gateway: 24 kHz → codec 48 kHz
    FirDecimator    down(2, 48000);    // codec 48 kHz → 24 kHz
    FirDecimator    work(3, 24000);    // 24 kHz → decoder 8 kHz
    RttyDemodulator demod(params, kWorkRate);
    ViterbiBaudot   viterbi;
    ViterbiBaudot::Config vcfg;
    vcfg.depth = 0;
    viterbi.setConfig(vcfg);

    std::string decoded;
    auto onChar = [&](const DecodedChar& dc) { decoded.push_back(dc.text); };

    std::vector<float> block(512), upBuf(1024), downBuf(1024), workBuf(1024);
    while (!mod.idle()) {
        mod.generate(block.data(), static_cast<int>(block.size()));
        const int n48 = up.process(block.data(), static_cast<int>(block.size()), upBuf.data());
        // Through 16-bit PCM, clipping exactly as the sound card would.
        for (int i = 0; i < n48; ++i) {
            const float c = std::clamp(upBuf[i], -1.0f, 1.0f);
            upBuf[i] = static_cast<float>(static_cast<int16_t>(std::lround(c * 32767.0f))) / 32768.0f;
        }
        const int n24 = down.process(upBuf.data(), n48, downBuf.data());
        const int n8  = work.process(downBuf.data(), n24, workBuf.data());
        demod.process(workBuf.data(), n8, [&](const SoftFrame& f) { viterbi.push(f, onChar); });
    }
    viterbi.flush(onChar);

    const std::string expected = normalise(message);
    const std::string got      = normalise(decoded);
    return expected.empty() ? 0.0
                            : static_cast<double>(editDistance(expected, got)) / expected.size();
}

// The modulator must finish. With the diddle on it deliberately never does —
// it keeps sending LTRS to hold the far end in sync while the operator types —
// and that is exactly what left the transmitter keyed after a macro: nothing
// ever considered the transmission over. This pins both behaviours down.
bool modulatorTerminates(bool diddle, double& seconds, float& peak)
{
    RttyParams params;
    FskModulator mod(params, 24000);
    // La sequenza esatta dell'engine: prima si accoda, poi si azzera e si
    // configura il diddle, poi si genera. L'ordine conta — un reset dopo
    // l'accodamento che svuotasse la coda produrrebbe silenzio, ed e' il tipo di
    // guasto che si vede solo mettendo alla prova la sequenza vera.
    mod.enqueueText("CQ CQ DE IU8LMC K");
    mod.enqueueCode(kBaudotLtrs);
    mod.enqueueCode(kBaudotLtrs);
    mod.reset();
    mod.setDiddle(diddle);
    mod.setAmplitude(0.35f);

    std::vector<float> block(1024);
    long long produced = 0;
    peak = 0.0f;
    const long long limit = 24000LL * 30;   // 30 s: ben oltre il testo
    while (!mod.idle() && produced < limit) {
        mod.generate(block.data(), static_cast<int>(block.size()));
        for (float v : block)
            peak = std::max(peak, std::abs(v));
        produced += static_cast<long long>(block.size());
    }
    seconds = produced / 24000.0;
    return mod.idle();
}

// L'eco di trasmissione deve dire la verita'. Le cifre e le lettere
// condividono gli stessi codici a cinque bit — '5' e 'T' sono entrambi 10000 —
// e distinguerle dipende solo dallo stato di shift. Se l'eco usa lo shift
// sbagliato, l'operatore legge IUILMC al posto di IU8LMC e TOO al posto di 599,
// e crede che la radio stia trasmettendo il nominativo di qualcun altro.
bool transmitEchoMatches(const std::string& text, std::string& echoed)
{
    RttyParams params;
    FskModulator mod(params, 24000);
    mod.enqueueText(text);
    mod.enqueueCode(kBaudotLtrs);
    mod.reset();
    mod.setDiddle(false);

    echoed.clear();
    std::vector<float> block(1024);
    while (!mod.idle()) {
        mod.generate(block.data(), static_cast<int>(block.size()));
        if (const char c = mod.takeEchoChar())
            echoed.push_back(c);
    }
    return echoed == text;
}

// Il caso che i filtri anti-QRM devono risolvere: una portante ferma dentro la
// banda dei toni. Il rivelatore lavora sul rapporto fra mark e space, quindi una
// portante che cade in uno dei due lo tiene alto per sempre e la decodifica
// muore — per quanto selettivo sia il filtro adattato.
double cerWithCarrier(const std::string& message, float carrierHz, float carrierAmp,
                      bool bandpass, bool notch, bool lms, float lmsDelayBits = 0.5f)
{
    RttyParams params;
    params.bandpassEnabled = bandpass;
    params.notchEnabled    = notch;
    params.notchHz         = carrierHz;
    params.lmsEnabled      = lms;

    FskModulator mod(params, kRadioRate);
    mod.setDiddle(false);
    mod.setAmplitude(0.5f);
    for (int i = 0; i < 8; ++i) mod.enqueueCode(kBaudotLtrs);
    mod.enqueueText(message);
    for (int i = 0; i < 4; ++i) mod.enqueueCode(kBaudotLtrs);

    std::vector<float> tx;
    std::vector<float> block(1024);
    while (!mod.idle()) {
        mod.generate(block.data(), static_cast<int>(block.size()));
        tx.insert(tx.end(), block.begin(), block.end());
    }

    // La portante, piu' un po' di rumore perche' la scena resti realistica.
    std::mt19937 rng(4242);
    std::normal_distribution<float> gauss(0.0f, 0.02f);
    for (size_t i = 0; i < tx.size(); ++i) {
        const double t = static_cast<double>(i) / kRadioRate;
        tx[i] += carrierAmp * static_cast<float>(std::sin(2.0 * 3.14159265358979 * carrierHz * t));
        tx[i] += gauss(rng);
    }

    FirDecimator    decim(kRadioRate / kWorkRate, kRadioRate);
    RttyDemodulator demod(params, kWorkRate);
    ViterbiBaudot   viterbi;

    ToneBandpass  bpf;
    NotchFilter   nf;
    LmsCanceller  lmsFilter;
    if (bandpass) bpf.configure(params.centreHz(), params.bandpassWidthHz, kWorkRate);
    if (notch)    nf.configure(carrierHz, params.notchWidthHz, kWorkRate);
    if (lms)      lmsFilter.configure(32, 0.004f,
                                      static_cast<int>(params.samplesPerBit(kWorkRate) * lmsDelayBits));

    std::string decoded;
    auto onChar = [&](const DecodedChar& dc) { decoded.push_back(dc.text); };

    std::vector<float> work(block.size());
    for (size_t i = 0; i < tx.size(); i += block.size()) {
        const int n = static_cast<int>(std::min(block.size(), tx.size() - i));
        const int m = decim.process(tx.data() + i, n, work.data());
        if (bandpass) bpf.process(work.data(), m, work.data());
        if (notch)    nf.process(work.data(), m, work.data());
        if (lms)      lmsFilter.process(work.data(), m, work.data());
        demod.process(work.data(), m, [&](const SoftFrame& f) { viterbi.push(f, onChar); });
    }
    viterbi.flush(onChar);

    const std::string expected = normalise(message);
    const std::string got      = normalise(decoded);
    return expected.empty() ? 0.0
                            : static_cast<double>(editDistance(expected, got)) / expected.size();
}

// Classify the errors instead of just counting them. A decoder losing whole
// characters needs different work from one flipping bits, and the aggregate CER
// cannot tell the two apart.
void diagnose(const std::string& message, float snrDb)
{
    const Result r = runOnce(message, snrDb, 0, 4242u);
    const std::string a = normalise(message);
    const std::string b = r.text;

    std::vector<std::vector<int>> d(a.size() + 1, std::vector<int>(b.size() + 1, 0));
    for (size_t i = 0; i <= a.size(); ++i) d[i][0] = static_cast<int>(i);
    for (size_t j = 0; j <= b.size(); ++j) d[0][j] = static_cast<int>(j);
    for (size_t i = 1; i <= a.size(); ++i)
        for (size_t j = 1; j <= b.size(); ++j)
            d[i][j] = std::min({d[i - 1][j] + 1, d[i][j - 1] + 1,
                                d[i - 1][j - 1] + (a[i - 1] == b[j - 1] ? 0 : 1)});

    int sub = 0, ins = 0, del = 0;
    size_t i = a.size(), j = b.size();
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && d[i][j] == d[i - 1][j - 1] + (a[i - 1] == b[j - 1] ? 0 : 1)) {
            if (a[i - 1] != b[j - 1]) ++sub;
            --i; --j;
        } else if (j > 0 && d[i][j] == d[i][j - 1] + 1) {
            ++ins; --j;
        } else {
            ++del; --i;
        }
    }
    std::printf("  %5.1f dB : %2d substitutions  %2d insertions  %2d deletions\n",
                snrDb, sub, ins, del);
}

int main(int argc, char** argv)
{
    const std::string message =
        argc > 1 ? argv[1]
                 : "CQ CQ DE IU8LMC IU8LMC K UR RST 599 599 QTH ROMA NAME MARIO 73";

    std::printf("DecoRTTY DSP self-test\n");
    std::printf("message : %s\n", message.c_str());
    std::printf("params  : 45.45 baud, 170 Hz shift, mark 2125 Hz, %d Hz work rate\n\n", kWorkRate);

    std::printf("%-8s %-10s %-10s %-10s\n", "SNR dB", "hard CER", "vit CER", "fixes");
    std::printf("-------------------------------------------\n");

    bool allGoodClean = true;
    for (const float snr : {20.0f, 12.0f, 6.0f, 3.0f, 0.0f, -3.0f}) {
        // Averaging over a few noise seeds keeps a single unlucky draw from
        // dominating the number at the low-SNR end.
        double hardSum = 0.0, vitSum = 0.0;
        int    fixes   = 0;
        constexpr int kTrials = 3;
        for (int t = 0; t < kTrials; ++t) {
            hardSum += runOnce(message, snr, 0, 1234u + static_cast<uint32_t>(t)).cer;
            const Result v = runOnce(message, snr, 6, 1234u + static_cast<uint32_t>(t));
            vitSum += v.cer;
            fixes  += v.corrections;
        }
        const double hardCer = hardSum / kTrials;
        const double vitCer  = vitSum / kTrials;
        std::printf("%-8.1f %-10.3f %-10.3f %-10d\n", snr, hardCer, vitCer, fixes);
        if (snr >= 12.0f && vitCer > 0.02)
            allGoodClean = false;
    }

    // Tuning sweep: the squelch and the confidence gate trade false characters
    // on noise against real characters lost in a weak signal. Neither number
    // alone can choose the setting.
    std::printf("\nsquelch tuning — false chars per 20 s of noise vs CER with signal\n");
    std::printf("%-9s %-9s %-12s %-10s %-10s\n", "squelch", "quality", "false/20s", "CER 6dB", "CER 3dB");
    std::printf("---------------------------------------------------------\n");
    for (const float squelch : {2.0f, 4.0f, 6.0f, 8.0f}) {
        for (const float quality : {0.0f, 0.45f}) {
            int    falseChars = 0;
            double cer6 = 0.0, cer3 = 0.0;
            for (int t = 0; t < 3; ++t) {
                falseChars += falseCharacters(20.0f, 900u + static_cast<uint32_t>(t), squelch, quality);
                cer6 += runOnce(message, 6.0f, 0, 1234u + static_cast<uint32_t>(t), squelch, quality).cer;
                cer3 += runOnce(message, 3.0f, 0, 1234u + static_cast<uint32_t>(t), squelch, quality).cer;
            }
            std::printf("%-9.1f %-9.2f %-12.1f %-10.3f %-10.3f\n",
                        squelch, quality, falseChars / 3.0, cer6 / 3, cer3 / 3);
        }
    }

    std::printf("\ntransmit chain through the gateway resamplers\n");
    std::printf("%-12s %-10s\n", "amplitude", "CER");
    std::printf("-----------------------\n");
    for (const float amplitude : {0.25f, 0.5f, 0.9f, 1.4f}) {
        const double cer = transmitChainCer(message, amplitude);
        std::printf("%-12.2f %-10.3f%s\n", amplitude, cer,
                    amplitude > 1.0f ? "   (deliberately clipped)" : "");
    }

    std::printf("\nfiltri anti-QRM: portante a 2050 Hz, fra i due toni\n");
    std::printf("%-24s %-10s\n", "filtri", "CER");
    std::printf("-----------------------------------\n");
    {
        struct Case { const char* name; bool bpf, notch, lms; };
        const Case cases[] = {
            {"nessuno",        false, false, false},
            {"passa-banda",    true,  false, false},
            {"notch",          false, true,  false},
            {"LMS adattivo",   false, false, true },
            {"banda + notch",  true,  true,  false},
        };
        for (const Case& c : cases) {
            const double cer = cerWithCarrier(message, 2050.0f, 0.45f, c.bpf, c.notch, c.lms);
            std::printf("%-24s %-10.3f\n", c.name, cer);
        }

        // Il ritardo di decorrelazione decide che cosa il filtro considera
        // prevedibile: troppo corto e si mangia il RTTY, troppo lungo e non
        // riconosce più la portante. Se nessun valore aiuta, il filtro non serve
        // a questo modo e va detto, invece di lasciarlo come opzione inutile.
        std::printf("\n  LMS, al variare del ritardo di decorrelazione:\n");
        for (const float bits : {0.25f, 0.5f, 1.0f, 2.0f, 4.0f, 8.0f}) {
            const double cer = cerWithCarrier(message, 2050.0f, 0.45f, false, false, true, bits);
            std::printf("    %.2f bit   CER %.3f\n", bits, cer);
        }

        // E il passa-banda contro un disturbo davvero fuori banda, che è il caso
        // per cui esiste.
        std::printf("\n  portante FUORI banda, a 2600 Hz:\n");
        std::printf("    senza filtri   CER %.3f\n",
                    cerWithCarrier(message, 2600.0f, 0.45f, false, false, false));
        std::printf("    passa-banda    CER %.3f\n",
                    cerWithCarrier(message, 2600.0f, 0.45f, true, false, false));
    }

    std::printf("\ntransmit echo — what the operator sees while sending\n");
    {
        const char* cases[] = {
            "CQ CQ DE IU8LMC IU8LMC K",
            "UR RST 599 599 QTH ROMA",
            "TEST 1234567890 DE IU8LMC",
        };
        for (const char* text : cases) {
            std::string echoed;
            const bool ok = transmitEchoMatches(text, echoed);
            std::printf("  %-13s %s\n", ok ? "ok" : "SBAGLIATO:", ok ? text : echoed.c_str());
            if (!ok)
                std::printf("  %-13s %s\n", "atteso:", text);
        }
    }

    std::printf("\ntransmitter end-of-over behaviour\n");
    {
        double withDiddle = 0.0, withoutDiddle = 0.0;
        float  peakPlain = 0.0f, peakDiddle = 0.0f;
        const bool endsPlain  = modulatorTerminates(false, withoutDiddle, peakPlain);
        const bool endsDiddle = modulatorTerminates(true, withDiddle, peakDiddle);
        std::printf("  diddle off: %-11s after %5.1f s   peak %.3f   (a macro must end here)\n",
                    endsPlain ? "stops" : "NEVER STOPS", withoutDiddle, peakPlain);
        std::printf("  diddle on : %-11s after %5.1f s   peak %.3f   (hand typing stays up)\n",
                    endsDiddle ? "stops" : "never stops", withDiddle, peakDiddle);
        if (peakPlain < 0.1f)
            std::printf("  *** FAIL: nessun audio — il trasmettitore manderebbe silenzio ***\n");
        if (!endsPlain || endsDiddle)
            std::printf("  *** FAIL: the transmitter would be left keyed ***\n");
    }

    std::printf("\nauto-centratura — la radio accesa sulla frequenza sbagliata\n");
    std::printf("  %-34s %-9s %-7s %s\n", "situazione", "arriva a", "verso", "esito");
    std::printf("  ------------------------------------------------------------------\n");
    {
        struct Case {
            const char* label;
            float       trueMark;
            bool        trueReverse;
            float       startMark;
            bool        startReverse;
        };
        // Il terzo caso e' quello insidioso: due coppie distanti esattamente uno
        // spostamento condividono un tono, e una ricerca ingenua si accontenta.
        const Case cases[] = {
            {"gia' centrata (non deve muoversi)", 2125.0f, false, 2125.0f, false},
            {"segnale 680 Hz piu' in basso",      1445.0f, false, 2125.0f, false},
            {"segnale a uno shift di distanza",   2295.0f, false, 2125.0f, false},
            {"segnale in banda bassa",            1275.0f, false, 2125.0f, false},
            {"verso invertito",                   2125.0f, true,  2125.0f, false},
            {"fuori frequenza E al contrario",    1445.0f, true,  2125.0f, false},
        };

        int failures = 0;
        for (const Case& c : cases) {
            const AutoTuneTrial t = autoTuneTrial(c.trueMark, c.trueReverse,
                                                  c.startMark, c.startReverse, 12.0f);
            const bool ok = t.copies > 0;
            if (!ok)
                ++failures;
            std::printf("  %-34s %7.1f   %-7s %s (%d copie, %d interventi, aggancio a %.1f s)\n",
                        c.label, t.finalMark, t.finalReverse ? "rev" : "dir",
                        ok ? "letto" : "MUTO", t.copies, t.actions, t.seconds);
        }

        // Senza auto-centratura, gli stessi segnali non si leggono affatto: e'
        // il confronto che dice se serve a qualcosa o si limita a non nuocere.
        const AutoTuneTrial off = autoTuneTrial(1445.0f, false, 2125.0f, false, 12.0f, 6, false);
        std::printf("  %-34s %7.1f   %-7s %s (%d copie)\n",
                    "  ...lo stesso, con auto spenta", off.finalMark,
                    off.finalReverse ? "rev" : "dir",
                    off.copies > 0 ? "letto" : "muto", off.copies);

        if (failures)
            std::printf("  *** %d casi non recuperati ***\n", failures);

        // Il rovescio: con che facilita' si muove quando non c'e' niente da
        // trovare. Zero e' l'unica risposta accettabile.
        std::printf("\n  spostamenti indebiti in 30 s di banda senza RTTY:\n");
        const int onNoise   = autoTuneFalseMoves(30.0f, 0.0f, 0.0f, 991u);
        const int onCarrier = autoTuneFalseMoves(30.0f, 1800.0f, 0.30f, 992u);
        const int onPair    = autoTuneFalseMoves(30.0f, 1500.0f, 0.15f, 993u);
        std::printf("    solo rumore          %d\n", onNoise);
        std::printf("    portante forte       %d\n", onCarrier);
        std::printf("    portante debole      %d\n", onPair);
        if (onNoise || onCarrier || onPair)
            std::printf("  *** insegue quello che non deve ***\n");
    }

    std::printf("\nerror taxonomy (hard decision):\n");
    for (const float snr : {12.0f, 6.0f, 3.0f})
        diagnose(message, snr);

    std::printf("\nsample decode at 6 dB:\n  %s\n", runOnce(message, 6.0f, 6, 7u).text.c_str());
    std::printf("sample decode at 20 dB (viterbi):\n  %s\n", runOnce(message, 20.0f, 6, 7u).text.c_str());
    std::printf("sample decode at 20 dB (hard)   :\n  %s\n", runOnce(message, 20.0f, 0, 7u).text.c_str());

    if (!allGoodClean) {
        std::printf("\nFAIL: strong-signal decode is not clean\n");
        return 1;
    }
    std::printf("\nPASS\n");
    return 0;
}
