// Canale ionosferico per le prove — modello di Watterson.
//
// Il banco di prova finora ha misurato tutto in rumore bianco, e il rumore
// bianco non è la banda. Su HF quello che ammazza il RTTY non è il rumore: è il
// cammino multiplo. Due percorsi che arrivano con un paio di millisecondi di
// differenza si sommano con fase diversa a ogni frequenza, e con uno
// spostamento di 170 Hz capita continuamente che un tono sia in somma e l'altro
// in opposizione — il famoso fading selettivo. Un decodificatore che in AWGN
// legge a 3 dB può benissimo cadere a pezzi lì, e finché non lo si misura non
// lo si sa.
//
// Il modello è quello che il CCIR ha standardizzato per queste prove (rapporto
// 520): due percorsi indipendenti, ciascuno con guadagno complesso gaussiano
// che varia lentamente, e un ritardo relativo. Le tre condizioni convenzionali:
//
//     buona     0.5 ms di ritardo, 0.1 Hz di allargamento Doppler
//     media     1.0 ms,            0.5 Hz
//     scarsa    2.0 ms,            1.0 Hz
//
// Una nota di onestà sull'implementazione: lo spettro Doppler qui è quello di
// un filtro a un polo, non la gaussiana della definizione formale. La differenza
// si vede sulle code della distribuzione, non sul comportamento del
// decodificatore, e in cambio il simulatore sta in cinquanta righe invece che in
// cinquecento.
#pragma once

#include <cmath>
#include <complex>
#include <cstddef>
#include <random>
#include <vector>

namespace decortty::test {

// kPi non e' garantito dallo standard e MinGW non lo definisce con -std=c++20.
inline constexpr double kPi = 3.14159265358979323846;

struct HfChannel {
    float delayMs{1.0f};
    float spreadHz{0.5f};
    // Un solo percorso: serve a verificare che il simulatore, ridotto al minimo,
    // non tolga nulla da sé.
    bool  singlePath{false};
};

inline const HfChannel kCcirGood{0.5f, 0.1f, false};
inline const HfChannel kCcirModerate{1.0f, 0.5f, false};
inline const HfChannel kCcirPoor{2.0f, 1.0f, false};

// Trasformatore di Hilbert: serve il segnale analitico, perché un guadagno
// complesso applicato a un segnale reale non ha senso. Ordine dispari, risposta
// antisimmetrica, finestra di Hamming.
inline std::vector<float> hilbertKernel(int taps)
{
    std::vector<float> h(static_cast<size_t>(taps), 0.0f);
    const int mid = taps / 2;
    for (int i = 0; i < taps; ++i) {
        const int n = i - mid;
        if (n % 2 == 0)
            continue;
        const double ideal  = 2.0 / (kPi * n);
        const double window = 0.54 - 0.46 * std::cos(2.0 * kPi * i / (taps - 1));
        h[static_cast<size_t>(i)] = static_cast<float>(ideal * window);
    }
    return h;
}

// Processo di fading: rumore gaussiano complesso passato in un filtro a un polo
// la cui banda è l'allargamento Doppler.
class FadingTap {
public:
    FadingTap(float spreadHz, int rate, uint32_t seed)
        : m_rng(seed)
        , m_gauss(0.0f, 1.0f)
    {
        // Costante di tempo del polo: un fading a 0.5 Hz cambia carattere in
        // circa due secondi, che è l'ordine di grandezza giusto.
        m_alpha = static_cast<float>(1.0 - std::exp(-2.0 * kPi * spreadHz / rate));
        // Normalizzazione a potenza unitaria: senza, un allargamento più stretto
        // darebbe un segnale più debole e si finirebbe per misurare il guadagno
        // del filtro invece del comportamento del canale.
        m_scale = std::sqrt(2.0f / std::max(1e-6f, m_alpha * (2.0f - m_alpha)));
        for (int i = 0; i < 4 * rate; ++i)   // si lascia assestare
            next();
    }

    std::complex<float> next()
    {
        const std::complex<float> drive(m_gauss(m_rng), m_gauss(m_rng));
        m_state += m_alpha * (drive - m_state);
        return m_state * m_scale * 0.7071f;
    }

private:
    std::mt19937                    m_rng;
    std::normal_distribution<float> m_gauss;
    std::complex<float>             m_state{0.0f, 0.0f};
    float                           m_alpha{0.0f};
    float                           m_scale{1.0f};
};

// Fa passare il segnale attraverso la ionosfera simulata. La potenza media in
// uscita è la stessa dell'ingresso, così il rapporto segnale-rumore resta quello
// che il chiamante crede di aver impostato.
inline void applyHfChannel(std::vector<float>& audio, const HfChannel& channel,
                           int rate, uint32_t seed)
{
    if (audio.empty())
        return;

    constexpr int kTaps = 127;
    const std::vector<float> hilbert = hilbertKernel(kTaps);
    const int mid = kTaps / 2;

    // Segnale analitico: la parte reale è il segnale ritardato di metà filtro,
    // l'immaginaria è la sua trasformata di Hilbert.
    const size_t n = audio.size();
    std::vector<std::complex<float>> analytic(n, {0.0f, 0.0f});
    for (size_t i = 0; i < n; ++i) {
        float imag = 0.0f;
        for (int k = 0; k < kTaps; ++k) {
            const long idx = static_cast<long>(i) - k;
            if (idx >= 0)
                imag += hilbert[static_cast<size_t>(k)] * audio[static_cast<size_t>(idx)];
        }
        const long centre = static_cast<long>(i) - mid;
        const float real  = centre >= 0 ? audio[static_cast<size_t>(centre)] : 0.0f;
        analytic[i] = {real, imag};
    }

    FadingTap tap1(channel.spreadHz, rate, seed);
    FadingTap tap2(channel.spreadHz, rate, seed ^ 0x9E3779B9u);
    const size_t delay = static_cast<size_t>(channel.delayMs * 1e-3f * rate);

    double inPower = 0.0, outPower = 0.0;
    for (size_t i = 0; i < n; ++i) {
        inPower += static_cast<double>(audio[i]) * audio[i];

        std::complex<float> out = tap1.next() * analytic[i];
        const std::complex<float> g2 = tap2.next();
        if (!channel.singlePath && i >= delay)
            out += g2 * analytic[i - delay];

        audio[i] = out.real();
        outPower += static_cast<double>(audio[i]) * audio[i];
    }

    if (outPower > 0.0) {
        const float gain = static_cast<float>(std::sqrt(inPower / outPower));
        for (float& v : audio)
            v *= gain;
    }
}

} // namespace decortty::test
