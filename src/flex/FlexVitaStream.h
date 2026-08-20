// DecoRTTY — the VITA-49 data plane.
//
// One UDP socket carries every stream the radio sends this client: receive
// audio, meters, and (when asked for) panadapter bins. The radio learns where to
// send them from the `client udpport` command, which is why a single socket is
// both necessary and sufficient — there is no DAX device, no virtual audio
// cable and no second transport anywhere in the path.
#pragma once

#include "flex/VitaPacket.h"

#include <QHash>
#include <QHostAddress>
#include <QObject>
#include <QUdpSocket>

#include <vector>

namespace decortty::flex {

class FlexVitaStream : public QObject {
    Q_OBJECT

public:
    explicit FlexVitaStream(QObject* parent = nullptr);

    // Bind a local UDP port. Pass 0 to let the OS choose, which is the normal
    // case; the caller then registers boundPort() with the radio.
    bool start(quint16 preferredPort = 0);
    void stop();

    quint16 boundPort() const { return m_socket.localPort(); }
    bool    isRunning() const { return m_socket.state() == QAbstractSocket::BoundState; }

    // Where transmit packets go. Set once the radio address is known.
    void setRadioEndpoint(const QHostAddress& address, quint16 port = 4992);

    // Only packets on these stream IDs are treated as our audio. Zero disables
    // the filter, which is what the first seconds after `stream create` need:
    // audio can start arriving before the reply carrying the ID does.
    void setAudioStreamId(quint32 id)    { m_audioStreamId = id; }
    void setTransmitStreamId(quint32 id) { m_txStreamId = id; }
    quint32 audioStreamId() const    { return m_audioStreamId; }
    quint32 transmitStreamId() const { return m_txStreamId; }

    // Send one already-encoded Opus frame as a VITA-49 packet on the transmit
    // stream. Returns false when no transmit stream has been created.
    bool sendOpusFrame(const QByteArray& opus);

    // ── counters, for the diagnostics panel ─────────────────────────────
    quint64 packetsReceived() const { return m_packets; }
    quint64 bytesReceived() const   { return m_bytes; }
    quint64 packetsLost() const     { return m_lost; }
    quint64 packetsSent() const     { return m_sent; }

signals:
    // Interleaved stereo float at 24 kHz, already byte-swapped and scaled.
    // `frames` is the number of stereo frames, so samples.size() == frames * 2.
    void audioReceived(const std::vector<float>& samples, int frames);
    // Opus payload, to be handed to the decoder by the owner (which holds the
    // codec, so this class stays free of the dependency).
    void opusReceived(const QByteArray& payload);
    // Radio meters: raw values keyed by meter id, still in wire units.
    void metersReceived(const QHash<quint16, qint16>& meters);
    void errorOccurred(const QString& message);

private slots:
    void onDatagrams();

private:
    void handleAudio(const VitaPacket& packet);
    void handleMeters(const VitaPacket& packet);
    void trackSequence(const VitaPacket& packet);

    QUdpSocket   m_socket;
    QHostAddress m_radioAddress;
    quint16      m_radioPort{4992};

    quint32 m_audioStreamId{0};
    quint32 m_txStreamId{0};
    quint8  m_txPacketCount{0};

    QHash<quint32, quint8> m_lastSeq;
    quint64 m_packets{0};
    quint64 m_bytes{0};
    quint64 m_lost{0};
    quint64 m_sent{0};

    std::vector<float> m_scratch;
};

} // namespace decortty::flex
