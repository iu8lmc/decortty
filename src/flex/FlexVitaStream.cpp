#include "flex/FlexVitaStream.h"

#include <QNetworkDatagram>
#include <QVariant>
#include <QtEndian>

#include <cstring>

namespace decortty::flex {

FlexVitaStream::FlexVitaStream(QObject* parent)
    : QObject(parent)
{
    connect(&m_socket, &QUdpSocket::readyRead, this, &FlexVitaStream::onDatagrams);
}

bool FlexVitaStream::start(quint16 preferredPort)
{
    stop();
    if (!m_socket.bind(QHostAddress::AnyIPv4, preferredPort)) {
        emit errorOccurred(tr("Cannot open the VITA-49 UDP socket: %1").arg(m_socket.errorString()));
        return false;
    }
    // A whole second of 24 kHz stereo audio, so a stalled event loop drops
    // nothing recoverable.
    m_socket.setSocketOption(QAbstractSocket::ReceiveBufferSizeSocketOption, QVariant(1 << 20));
    m_lastSeq.clear();
    return true;
}

void FlexVitaStream::stop()
{
    m_socket.close();
    m_audioStreamId = 0;
    m_txStreamId    = 0;
    m_lastSeq.clear();
}

void FlexVitaStream::setRadioEndpoint(const QHostAddress& address, quint16 port)
{
    m_radioAddress = address;
    m_radioPort    = port;
}

void FlexVitaStream::onDatagrams()
{
    while (m_socket.hasPendingDatagrams()) {
        const QNetworkDatagram dgram = m_socket.receiveDatagram();
        const QByteArray data = dgram.data();

        VitaPacket packet;
        if (!parseVitaPacket(data, packet))
            continue;

        ++m_packets;
        m_bytes += static_cast<quint64>(data.size());
        trackSequence(packet);

        switch (packet.classId.flexClass()) {
        case FlexClass::IfNarrow:
        case FlexClass::DaxAudioReducedBw:
            handleAudio(packet);
            break;
        case FlexClass::Opus:
            if (m_audioStreamId == 0 || packet.streamId == m_audioStreamId) {
                emit opusReceived(QByteArray(reinterpret_cast<const char*>(packet.payload),
                                             packet.payloadBytes));
            }
            break;
        case FlexClass::Meter:
            handleMeters(packet);
            break;
        default:
            break;
        }
    }
}

void FlexVitaStream::trackSequence(const VitaPacket& packet)
{
    // The 4-bit packet count wraps every 16 packets; a gap means the network
    // dropped something, which for audio is an audible click worth reporting.
    const auto it = m_lastSeq.constFind(packet.streamId);
    if (it != m_lastSeq.constEnd()) {
        const quint8 expected = static_cast<quint8>((*it + 1) & 0x0F);
        if (packet.packetCount != expected) {
            const int gap = (static_cast<int>(packet.packetCount) - static_cast<int>(expected) + 16) % 16;
            m_lost += static_cast<quint64>(gap);
        }
    }
    m_lastSeq.insert(packet.streamId, packet.packetCount);
}

void FlexVitaStream::handleAudio(const VitaPacket& packet)
{
    if (m_audioStreamId != 0 && packet.streamId != m_audioStreamId)
        return;
    if (packet.payloadBytes <= 0)
        return;

    const bool reduced = packet.classId.flexClass() == FlexClass::DaxAudioReducedBw;

    if (reduced) {
        // int16 mono, big-endian. Duplicated into both channels so the rest of
        // the pipeline sees one format.
        const int frames = packet.payloadBytes / 2;
        m_scratch.resize(static_cast<size_t>(frames) * 2);
        for (int i = 0; i < frames; ++i) {
            const qint16 raw = qFromBigEndian<qint16>(packet.payload + i * 2);
            const float  v   = static_cast<float>(raw) / 32768.0f;
            m_scratch[static_cast<size_t>(i) * 2]     = v;
            m_scratch[static_cast<size_t>(i) * 2 + 1] = v;
        }
        emit audioReceived(m_scratch, frames);
        return;
    }

    // float32 stereo, big-endian: the uncompressed remote-audio format.
    const int values = packet.payloadBytes / 4;
    const int frames = values / 2;
    if (frames <= 0)
        return;

    m_scratch.resize(static_cast<size_t>(frames) * 2);
    for (int i = 0; i < frames * 2; ++i) {
        // Read as an integer and reinterpret: the wire order is big-endian and
        // the host may not be, so a straight float load would be wrong.
        const quint32 bits = qFromBigEndian<quint32>(packet.payload + i * 4);
        float value;
        std::memcpy(&value, &bits, sizeof(value));
        m_scratch[static_cast<size_t>(i)] = value;
    }
    emit audioReceived(m_scratch, frames);
}

void FlexVitaStream::handleMeters(const VitaPacket& packet)
{
    QHash<quint16, qint16> meters;
    const int count = packet.payloadBytes / 4;
    meters.reserve(count);
    for (int i = 0; i < count; ++i) {
        const quint16 id    = qFromBigEndian<quint16>(packet.payload + i * 4);
        const qint16  value = qFromBigEndian<qint16>(packet.payload + i * 4 + 2);
        meters.insert(id, value);
    }
    if (!meters.isEmpty())
        emit metersReceived(meters);
}

bool FlexVitaStream::sendOpusFrame(const QByteArray& opus)
{
    if (m_txStreamId == 0 || m_radioAddress.isNull() || opus.isEmpty())
        return false;

    const QByteArray packet = buildFlexDataPacket(m_txStreamId, FlexClass::Opus,
                                                  opus, m_txPacketCount);
    m_txPacketCount = static_cast<quint8>((m_txPacketCount + 1) & 0x0F);

    const qint64 written = m_socket.writeDatagram(packet, m_radioAddress, m_radioPort);
    if (written == packet.size()) {
        ++m_sent;
        return true;
    }
    return false;
}

} // namespace decortty::flex
