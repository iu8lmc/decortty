// DecoRTTY — a FlexRadio, as a RadioLink.
//
// Owns the command channel and the VITA-49 data plane, and drives the sequence
// that turns "a radio answered discovery" into "audio is flowing and PTT works":
// connect, register a UDP port, create the receive and transmit audio streams,
// adopt the active slice.
//
// Everything here goes over the radio's own network protocol. There is no DAX
// device to install, no virtual audio cable to route and no serial CAT port to
// configure.
#pragma once

#include "flex/FlexApiClient.h"
#include "flex/FlexDiscovery.h"
#include "flex/FlexVitaStream.h"
#include "flex/OpusCodec.h"
#include "link/RadioLink.h"

#include <QObject>

#include <vector>

namespace decortty::flex {

// State of the slice DecoRTTY is listening to.
struct SliceState {
    int     index{-1};
    double  frequencyMhz{0.0};
    QString mode;
    int     filterLowHz{0};
    int     filterHighHz{0};
    bool    transmitSlice{false};
    bool    active{false};
};

class FlexRadioLink : public link::RadioLink {
    Q_OBJECT

public:
    explicit FlexRadioLink(QObject* parent = nullptr);
    ~FlexRadioLink() override;

    void connectToRadio(const RadioInfo& radio);
    void connectToAddress(const QHostAddress& address, quint16 port = 4992);

    // ── RadioLink ───────────────────────────────────────────────────────
    bool    isConnected() const override { return m_api.isConnected(); }
    QString statusText() const override  { return m_statusText; }
    QString radioName() const override   { return m_radio.displayName(); }
    double  frequencyMhz() const override { return m_slice.frequencyMhz; }
    QString mode() const override         { return m_slice.mode; }
    bool    isTransmitting() const override { return m_transmitting; }
    // The radio enforces Opus on client transmit audio, so without the codec
    // there is no transmit path at all.
    bool    canTransmit() const override { return m_txStreamId != 0 && m_opus.isAvailable(); }
    int     signalStrengthDbm() const override { return m_signalDbm; }

    void disconnectRadio() override;
    void setFrequencyMhz(double mhz) override;
    void setMode(const QString& mode) override;
    void setFilter(int lowHz, int highHz) override;
    void applyRttyProfile(int markHz, int shiftHz) override;
    void setTransmit(bool on) override;
    int  sendTransmitAudio(const float* samples, int count) override;

    const SliceState& slice() const { return m_slice; }
    FlexVitaStream&   stream()      { return m_vita; }

private slots:
    void onApiConnected();
    void onApiDisconnected();
    void onStatus(const QString& object, const QMap<QString, QString>& kvs);
    void onMeters(const QHash<quint16, qint16>& meters);
    void onOpusAudio(const QByteArray& payload);

private:
    void setStatusText(const QString& text);
    void bringUpStreams();
    void tearDownStreams();
    void applySliceStatus(int index, const QMap<QString, QString>& kvs);

    FlexApiClient  m_api;
    FlexVitaStream m_vita;
    OpusCodec      m_opus;

    RadioInfo  m_radio;
    SliceState m_slice;
    QString    m_statusText;

    quint32 m_rxStreamId{0};
    quint32 m_txStreamId{0};
    bool    m_transmitting{false};
    int     m_signalDbm{-140};
    quint16 m_levelMeterId{0};
};

} // namespace decortty::flex
