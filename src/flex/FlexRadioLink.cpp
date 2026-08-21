#include "flex/FlexRadioLink.h"

#include <QTimer>

#include <QVariantMap>

#include <cmath>

namespace decortty::flex {

FlexRadioLink::FlexRadioLink(QObject* parent)
    : link::RadioLink(parent)
{
    connect(&m_api, &FlexApiClient::connected,     this, &FlexRadioLink::onApiConnected);
    connect(&m_api, &FlexApiClient::disconnected,  this, &FlexRadioLink::onApiDisconnected);
    // Legati a una stazione gia' presente: l'operatore deve saperlo, perche'
    // cambia dove si guarda — la slice e' quella di SmartSDR, non una nostra.
    connect(&m_api, &FlexApiClient::boundToStation, this, [this](const QString& station) {
        m_boundStation = station;
        setStatusText(tr("Sharing %1 with %2").arg(m_radio.displayName(), station));
        emit connectionChanged();
    });
    connect(&m_api, &FlexApiClient::statusReceived, this, &FlexRadioLink::onStatus);
    connect(&m_api, &FlexApiClient::errorOccurred, this, &FlexRadioLink::errorOccurred);
    connect(&m_api, &FlexApiClient::radioMessage, this,
            [this](const QString& text, bool isError) {
                if (isError)
                    emit errorOccurred(text);
            });

    connect(&m_vita, &FlexVitaStream::audioReceived, this, &FlexRadioLink::audioReady);
    connect(&m_vita, &FlexVitaStream::opusReceived,  this, &FlexRadioLink::onOpusAudio);
    connect(&m_vita, &FlexVitaStream::metersReceived, this, &FlexRadioLink::onMeters);
    connect(&m_vita, &FlexVitaStream::errorOccurred, this, &FlexRadioLink::errorOccurred);

    setStatusText(tr("Disconnected"));
}

FlexRadioLink::~FlexRadioLink()
{
    if (m_api.isConnected())
        tearDownStreams();
}

void FlexRadioLink::setStatusText(const QString& text)
{
    if (m_statusText == text)
        return;
    m_statusText = text;
    emit statusTextChanged();
}






void FlexRadioLink::connectToRadio(const RadioInfo& radio)
{
    m_radio = radio;
    setStatusText(tr("Connecting to %1…").arg(radio.displayName()));
    m_api.connectToRadio(radio);
}

void FlexRadioLink::connectToAddress(const QHostAddress& address, quint16 port)
{
    // Manual connect, for a radio on another subnet where broadcasts do not
    // reach — a VPN or a routed shack network.
    m_radio = RadioInfo{};
    m_radio.address = address;
    m_radio.port    = port;
    m_radio.model   = address.toString();
    setStatusText(tr("Connecting to %1…").arg(address.toString()));
    m_api.connectToHost(address, port);
}

void FlexRadioLink::disconnectRadio()
{
    if (m_transmitting)
        setTransmit(false);
    tearDownStreams();
    m_api.disconnectFromRadio();
}

void FlexRadioLink::onApiConnected()
{
    setStatusText(tr("Connected to %1").arg(m_radio.displayName()));
    bringUpStreams();
    armSliceWatch();
    emit connectionChanged();
}

void FlexRadioLink::onApiDisconnected()
{
    m_rxStreamId = 0;
    m_txStreamId = 0;
    m_slice      = SliceState{};
    m_sliceWatch.stop();
    m_vita.stop();

    if (m_relinkAsGui) {
        // La disconnessione era voluta: si torna subito, questa volta come
        // stazione GUI.
        m_relinkAsGui = false;
        setStatusText(tr("Reconnecting to %1…").arg(m_radio.displayName()));
        emit connectionChanged();
        QTimer::singleShot(300, this, [this] { m_api.connectToRadio(m_radio); });
        return;
    }

    setStatusText(tr("Disconnected"));
    emit connectionChanged();
    emit sliceChanged();
}

void FlexRadioLink::armSliceWatch()
{
    // Solo da client secondario: da stazione GUI le slice sono nostre e se non
    // ce ne sono e' perche' non ne abbiamo ancora create.
    if (m_api.boundTo().isEmpty())
        return;

    m_sliceWatch.setSingleShot(true);
    // Quattro secondi. La radio manda gli stati subito dopo l'abbonamento; se
    // dopo tutto questo tempo non e' arrivata nemmeno una slice, non arrivera'.
    m_sliceWatch.setInterval(4000);
    disconnect(&m_sliceWatch, nullptr, this, nullptr);
    connect(&m_sliceWatch, &QTimer::timeout, this, [this] {
        if (m_slice.index >= 0 || m_api.boundTo().isEmpty())
            return;
        emit errorOccurred(tr("Bound to %1 but the radio shows no slice — "
                              "reconnecting as a GUI station")
                               .arg(m_api.boundTo()));
        m_api.setRole(flex::FlexApiClient::Role::Gui);
        m_relinkAsGui = true;
        m_api.disconnectFromRadio();
    });
    m_sliceWatch.start();
}

void FlexRadioLink::bringUpStreams()
{
    if (!m_vita.start()) {
        emit errorOccurred(tr("Could not open the audio transport"));
        return;
    }
    m_vita.setRadioEndpoint(m_radio.address, m_radio.port);

    // Tell the radio where to send everything. Until this lands, no VITA-49
    // traffic arrives at all.
    m_api.send(QStringLiteral("client udpport %1").arg(m_vita.boundPort()),
               [this](int code, const QString&) {
                   if (code != 0) {
                       emit errorOccurred(tr("The radio rejected the UDP port registration"));
                       return;
                   }

                   // Receive audio, uncompressed. This is the stream SmartSDR
                   // itself uses for headphone audio — no DAX channel involved.
                   m_api.send(QStringLiteral("stream create type=remote_audio_rx compression=none"),
                              [this](int rxCode, const QString& body) {
                                  if (rxCode != 0) {
                                      // Da client secondario la radio potrebbe
                                      // non concedere il flusso audio. Non e'
                                      // stato possibile verificarlo su un
                                      // apparato vero, quindi invece di
                                      // affermare che funziona si prevede il
                                      // caso: si ritenta prendendo il ruolo
                                      // GUI, che l'audio lo ottiene di sicuro —
                                      // al prezzo di un posto MultiFlex.
                                      if (!m_api.boundTo().isEmpty()) {
                                          emit errorOccurred(
                                              tr("The radio will not give audio to a bound client — "
                                                 "reconnecting as a GUI station"));
                                          m_api.setRole(flex::FlexApiClient::Role::Gui);
                                          m_relinkAsGui = true;
                                          m_api.disconnectFromRadio();
                                          return;
                                      }
                                      emit errorOccurred(tr("Could not create the receive audio stream"));
                                      return;
                                  }
                                  m_rxStreamId = body.trimmed().toUInt(nullptr, 16);
                                  m_vita.setAudioStreamId(m_rxStreamId);
                                  setStatusText(tr("Receiving from %1").arg(m_radio.displayName()));
                              });

                   // Transmit audio. The radio enforces Opus on this stream.
                   if (m_opus.isAvailable()) {
                       m_api.send(QStringLiteral("stream create type=remote_audio_tx compression=opus"),
                                  [this](int txCode, const QString& body) {
                                      if (txCode != 0) {
                                          emit errorOccurred(tr("Could not create the transmit audio stream"));
                                          return;
                                      }
                                      m_txStreamId = body.trimmed().toUInt(nullptr, 16);
                                      m_vita.setTransmitStreamId(m_txStreamId);
                                      emit connectionChanged();
                                  });
                   }
               });
}

void FlexRadioLink::tearDownStreams()
{
    if (m_rxStreamId)
        m_api.send(QStringLiteral("stream remove 0x%1").arg(m_rxStreamId, 8, 16, QLatin1Char('0')));
    if (m_txStreamId)
        m_api.send(QStringLiteral("stream remove 0x%1").arg(m_txStreamId, 8, 16, QLatin1Char('0')));
    m_rxStreamId = 0;
    m_txStreamId = 0;
    m_vita.stop();
}

void FlexRadioLink::onStatus(const QString& object, const QMap<QString, QString>& kvs)
{
    if (object.startsWith(QLatin1String("slice "))) {
        const int index = object.mid(6).toInt();
        applySliceStatus(index, kvs);
        return;
    }

    if (object == QLatin1String("transmit")) {
        const auto it = kvs.constFind(QStringLiteral("mox"));
        if (it != kvs.constEnd()) {
            const bool on = (*it == QLatin1String("1"));
            if (on != m_transmitting) {
                m_transmitting = on;
                emit transmittingChanged();
            }
        }
        return;
    }

    if (object == QLatin1String("meter")) {
        // Meter definitions arrive keyed by id: "<id>.nam=LEVEL", "<id>.src=SLC".
        // The S-meter is the slice's LEVEL meter.
        for (auto it = kvs.constBegin(); it != kvs.constEnd(); ++it) {
            if (!it.key().endsWith(QLatin1String(".nam")) || it.value() != QLatin1String("LEVEL"))
                continue;
            const QString idText = it.key().section(QLatin1Char('.'), 0, 0);
            const QString srcKey = idText + QStringLiteral(".src");
            if (kvs.value(srcKey) == QLatin1String("SLC"))
                m_levelMeterId = static_cast<quint16>(idText.toUInt());
        }
    }
}

void FlexRadioLink::applySliceStatus(int index, const QMap<QString, QString>& kvs)
{
    // Adopt the first slice that is in use, and stay with it afterwards.
    const bool inUse = kvs.value(QStringLiteral("in_use"), QStringLiteral("1")) == QLatin1String("1");
    if (m_slice.index < 0 && inUse) {
        m_slice.index = index;
        m_sliceWatch.stop();   // il legame ha portato quello che doveva
    }
    if (index != m_slice.index)
        return;

    if (!inUse) {
        m_slice = SliceState{};
        emit sliceChanged();
        return;
    }

    bool changed = false;
    const auto number = [&kvs](const QString& key, auto& target, auto convert) {
        const auto it = kvs.constFind(key);
        if (it == kvs.constEnd())
            return false;
        bool ok = false;
        const auto value = convert(*it, ok);
        if (!ok || value == target)
            return false;
        target = value;
        return true;
    };

    changed |= number(QStringLiteral("RF_frequency"), m_slice.frequencyMhz,
                      [](const QString& s, bool& ok) { return s.toDouble(&ok); });
    changed |= number(QStringLiteral("filter_lo"), m_slice.filterLowHz,
                      [](const QString& s, bool& ok) { return s.toInt(&ok); });
    changed |= number(QStringLiteral("filter_hi"), m_slice.filterHighHz,
                      [](const QString& s, bool& ok) { return s.toInt(&ok); });

    const auto modeIt = kvs.constFind(QStringLiteral("mode"));
    if (modeIt != kvs.constEnd() && *modeIt != m_slice.mode) {
        m_slice.mode = *modeIt;
        changed = true;
    }

    const auto txIt = kvs.constFind(QStringLiteral("tx"));
    if (txIt != kvs.constEnd())
        m_slice.transmitSlice = (*txIt == QLatin1String("1"));

    m_slice.active = true;
    if (changed)
        emit sliceChanged();
}

void FlexRadioLink::onMeters(const QHash<quint16, qint16>& meters)
{
    if (m_levelMeterId == 0)
        return;
    const auto it = meters.constFind(m_levelMeterId);
    if (it == meters.constEnd())
        return;
    // dBm meters are sent as sixteenths of a dB times eight — in practice, the
    // raw value divided by 128.
    const int dbm = static_cast<int>(std::lround(static_cast<double>(*it) / 128.0));
    if (dbm != m_signalDbm) {
        m_signalDbm = dbm;
        emit metersChanged();
    }
}

void FlexRadioLink::onOpusAudio(const QByteArray& payload)
{
    // A routed or SmartLink session compresses the receive audio. Decoding it
    // here means the rest of the program never learns the difference.
    std::vector<float> pcm = m_opus.decode(payload);
    if (pcm.empty())
        return;
    const int frames = static_cast<int>(pcm.size() / 2);
    emit audioReady(pcm, frames);
}

void FlexRadioLink::setFrequencyMhz(double mhz)
{
    if (m_slice.index < 0)
        return;
    m_api.send(QStringLiteral("slice tune %1 %2 autopan=0")
                   .arg(m_slice.index)
                   .arg(mhz, 0, 'f', 6));
}

void FlexRadioLink::setMode(const QString& mode)
{
    if (m_slice.index < 0)
        return;
    m_api.send(QStringLiteral("slice set %1 mode=%2").arg(m_slice.index).arg(mode.toUpper()));
}

void FlexRadioLink::setFilter(int lowHz, int highHz)
{
    if (m_slice.index < 0)
        return;
    m_api.send(QStringLiteral("filt %1 %2 %3").arg(m_slice.index).arg(lowHz).arg(highHz));
}

void FlexRadioLink::applyRttyProfile(int markHz, int shiftHz)
{
    if (m_slice.index < 0)
        return;

    setMode(QStringLiteral("DIGU"));

    // Pass the two tones with about 100 Hz of margin either side. Tighter than
    // this and AFC has nowhere to track; wider and the decoder sees needless
    // adjacent-signal energy.
    const int spaceHz = markHz - shiftHz;
    const int low     = std::max(50, spaceHz - 100);
    const int high    = markHz + 100;
    setFilter(low, high);
}

void FlexRadioLink::setTransmit(bool on)
{
    if (!m_api.isConnected())
        return;
    if (on && !canTransmit()) {
        emit errorOccurred(tr("Transmit is unavailable: no Opus transmit stream"));
        return;
    }
    // PTT over the radio's own protocol. No CAT port, no RTS/DTR line, and it
    // reports back through transmit status so the UI follows the radio rather
    // than assuming.
    m_api.send(QStringLiteral("xmit %1").arg(on ? 1 : 0));
}

int FlexRadioLink::sendTransmitAudio(const float* samples, int count)
{
    if (m_txStreamId == 0 || count <= 0)
        return 0;

    int sent = 0;
    for (const QByteArray& frame : m_opus.encodeMono(samples, count)) {
        if (m_vita.sendOpusFrame(frame))
            ++sent;
    }
    return sent;
}

} // namespace decortty::flex
