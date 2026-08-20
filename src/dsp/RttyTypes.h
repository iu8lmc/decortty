// DecoRTTY — shared RTTY parameter and result types.
#pragma once

#include "dsp/Baudot.h"

#include <cmath>
#include <cstdint>
#include <string>
#include <vector>

namespace decortty::dsp {

// Working sample rate of the whole decode chain. The radio hands us 24 kHz
// audio; decimating by 3 gives 8 kHz, which is 176.02 samples per RTTY bit at
// 45.45 baud — plenty of resolution for the timing loop and cheap enough to run
// a dozen parallel decoders.
inline constexpr int   kWorkRate  = 8000;
inline constexpr float kDefaultMarkHz  = 2125.0f;
inline constexpr float kDefaultShiftHz = 170.0f;
inline constexpr float kDefaultBaud    = 45.45f;

// Come si riempie il tempo fra un carattere e il successivo mentre si scrive
// dal vivo. LTRS è la scelta classica: tiene agganciato il decodificatore
// all'altro capo e non stampa nulla.
enum class DiddleMode : uint8_t {
    None,     // silenzio: la portante resta, il decodificatore remoto si sgancia
    Ltrs,     // il riempimento tradizionale
    Blank,    // NULL: invisibile anche su una telescrivente meccanica
};

struct RttyParams {
    float markHz{kDefaultMarkHz};
    float shiftHz{kDefaultShiftHz};
    float baud{kDefaultBaud};
    // 1, 1.5 o 2 bit. L'amatoriale usa 1.5; le reti commerciali e le stazioni
    // meteo spesso 2, e con lo stop sbagliato il framing scivola di continuo.
    float stopBits{1.5f};
    // Bit di dati per carattere: 5 è Baudot. 7 e 8 servono per l'ASCII, che
    // qualche stazione utility usa ancora.
    int   dataBits{5};
    // 0 = nessuna, 1 = pari, 2 = dispari, 3 = sempre 1, 4 = sempre 0.
    int   parity{0};
    bool  reverse{false};          // swap mark and space (LSB/USB mismatch)
    bool  unshiftOnSpace{true};
    FiguresSet figuresSet{FiguresSet::US};

    // Automatic frequency control: track the pair of tones as the operator
    // drifts, within +/- afcRangeHz of the nominal centre.
    bool  afcEnabled{true};
    float afcRangeHz{75.0f};

    // ── filtri di ingresso contro il QRM ────────────────────────────────
    // Passa-banda attorno alla coppia di toni. Largo abbastanza da lasciarli
    // passare interi con il margine dell'AFC.
    bool  bandpassEnabled{false};
    float bandpassWidthHz{500.0f};
    // Notch su una frequenza indicata dall'operatore.
    bool  notchEnabled{false};
    float notchHz{0.0f};
    float notchWidthHz{80.0f};
    // Cancellatore adattivo delle portanti.
    bool  lmsEnabled{false};

    // Accetta i caratteri il cui bit di stop non ha letto mark. Serve su segnali
    // molto distorti, dove il framing è l'unica cosa a cedere: si guadagna
    // qualche carattere in più al prezzo di qualche riga di spazzatura.
    bool  ignoreFramingErrors{false};

    // Squelch. Without one, band noise alone frames perfectly good-looking
    // characters and fills the receive window with garbage between overs. The
    // measure is the ratio between the stronger and the weaker tone filter: a
    // real FSK signal drives them far apart, noise leaves them alike.
    bool  squelchEnabled{true};
    // Modest, because the real rejection is done by requiring the decoder to
    // lock before it prints anything. The squelch only keeps the framing from
    // grinding away on dead air.
    float squelchDb{4.0f};
    // Minimum per-frame confidence to print at all. The squelch gates on tone
    // separation, which is a property of the last bit or two; this gates on how
    // well the whole character held together. Noise happily produces the odd
    // clean-looking bit pair, but it very rarely produces seven bits with good
    // framing, so this is what stops band noise from writing prose.
    float minFrameQuality{0.45f};

    float spaceHz() const { return markHz - shiftHz; }
    float centreHz() const { return markHz - shiftHz * 0.5f; }
    float samplesPerBit(int rate = kWorkRate) const {
        return static_cast<float>(rate) / baud;
    }
    // Bit sul filo per ogni carattere: start + dati + eventuale parità + stop.
    float bitsPerCharacter() const {
        return 1.0f + static_cast<float>(dataBits) + (parity ? 1.0f : 0.0f) + stopBits;
    }
};

// One received character frame, still undecided: the five data bits as
// log-likelihood ratios (positive = mark = logical 1), plus the evidence that
// the framing itself was real.
//
// The LLRs are referred to the measured noise, not normalised per bit. That
// distinction is what makes the downstream Viterbi stage worth having: a bit
// corrupted by noise comes through with a SMALL magnitude, so context is
// allowed to overrule it, whereas a per-bit normalised soft value would report
// the same confident nonsense the hard slicer already produced.
struct SoftFrame {
    float   bitLlr[5]{};
    float   startConfidence{0.0f};  // how cleanly the start bit read as space
    float   stopConfidence{0.0f};   // how cleanly the stop bits read as mark
    float   snrDb{0.0f};
    int64_t sampleIndex{0};         // position in the input stream
    uint8_t hardCode{0};            // the plain hard-decision 5-bit code

    // A single 0..1 figure of merit used for display and for the squelch.
    // Framing evidence counts as much as bit confidence: a frame whose stop bit
    // read as space is suspect no matter how clean its five data bits looked.
    float quality() const
    {
        float bitSum = 0.0f;
        for (const float llr : bitLlr) {
            const float mag = llr < 0.0f ? -llr : llr;
            // tanh(llr/2) is the probability of being right, mapped to 0..1.
            bitSum += std::tanh(0.5f * mag);
        }
        const float bitAvg  = bitSum / 5.0f;
        const float framing = 0.5f * (startConfidence + (stopConfidence > 0.0f ? stopConfidence : 0.0f));
        const float q = 0.6f * bitAvg + 0.4f * framing;
        return q < 0.0f ? 0.0f : (q > 1.0f ? 1.0f : q);
    }
};

// A decoded character on its way to the screen.
struct DecodedChar {
    char    text{0};
    uint8_t code{0};
    float   quality{0.0f};
    bool    corrected{false};   // the Viterbi stage overrode the hard decision
    int64_t sampleIndex{0};
};

} // namespace decortty::dsp
