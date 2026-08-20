#include "flex/FlexApiClient.h"

#include <QUuid>

namespace decortty::flex {

QMap<QString, QString> parseKeyValues(const QString& body)
{
    QMap<QString, QString> kvs;
    for (const QString& token : body.split(QLatin1Char(' '), Qt::SkipEmptyParts)) {
        const int eq = token.indexOf(QLatin1Char('='));
        if (eq > 0)
            kvs.insert(token.left(eq), token.mid(eq + 1));
    }
    return kvs;
}

FlexApiClient::FlexApiClient(QObject* parent)
    : QObject(parent)
{
    connect(&m_socket, &QTcpSocket::connected,    this, &FlexApiClient::onConnected);
    connect(&m_socket, &QTcpSocket::disconnected, this, &FlexApiClient::onDisconnected);
    connect(&m_socket, &QTcpSocket::readyRead,    this, &FlexApiClient::onReadyRead);
    connect(&m_socket, &QTcpSocket::errorOccurred, this, &FlexApiClient::onSocketError);

    // The radio drops a client it has not heard from. A ping every 5 s is what
    // SmartSDR itself uses.
    m_keepalive.setInterval(5000);
    connect(&m_keepalive, &QTimer::timeout, this, &FlexApiClient::onKeepalive);

    m_clientId = QUuid::createUuid().toString(QUuid::WithoutBraces);
}

FlexApiClient::~FlexApiClient()
{
    if (m_socket.state() != QAbstractSocket::UnconnectedState)
        m_socket.abort();
}

void FlexApiClient::setState(LinkState state)
{
    if (m_state == state)
        return;
    m_state = state;
    emit stateChanged(state);
}

void FlexApiClient::connectToRadio(const RadioInfo& radio)
{
    connectToHost(radio.address, radio.port);
}

void FlexApiClient::connectToHost(const QHostAddress& address, quint16 port)
{
    disconnectFromRadio();
    setState(LinkState::Connecting);
    m_socket.connectToHost(address, port);
}

void FlexApiClient::disconnectFromRadio()
{
    m_keepalive.stop();
    m_pending.clear();
    m_buffer.clear();
    m_handle = 0;
    if (m_socket.state() != QAbstractSocket::UnconnectedState) {
        m_socket.disconnectFromHost();
        if (m_socket.state() != QAbstractSocket::UnconnectedState)
            m_socket.waitForDisconnected(500);
    }
    setState(LinkState::Disconnected);
}

quint32 FlexApiClient::send(const QString& command, Reply reply)
{
    if (m_socket.state() != QAbstractSocket::ConnectedState)
        return 0;

    const quint32 seq = ++m_sequence;
    if (reply)
        m_pending.insert(seq, std::move(reply));

    const QString line = QStringLiteral("C%1|%2\n").arg(seq).arg(command);
    m_socket.write(line.toUtf8());
    return seq;
}

void FlexApiClient::onConnected()
{
    setState(LinkState::Handshaking);
    // Nothing is sent yet: the radio speaks first with V and H lines, and the
    // handshake starts once the handle has been assigned.
}

void FlexApiClient::onDisconnected()
{
    m_keepalive.stop();
    m_pending.clear();
    m_handle = 0;
    setState(LinkState::Disconnected);
    emit disconnected();
}

void FlexApiClient::onSocketError(QAbstractSocket::SocketError)
{
    emit errorOccurred(m_socket.errorString());
    if (m_state == LinkState::Connecting || m_state == LinkState::Handshaking)
        setState(LinkState::Failed);
}

void FlexApiClient::onKeepalive()
{
    send(QStringLiteral("ping"));
}

void FlexApiClient::onReadyRead()
{
    m_buffer.append(m_socket.readAll());

    int newline;
    while ((newline = m_buffer.indexOf('\n')) >= 0) {
        const QString line = QString::fromUtf8(m_buffer.left(newline)).trimmed();
        m_buffer.remove(0, newline + 1);
        if (!line.isEmpty())
            processLine(line);
    }
}

void FlexApiClient::processLine(const QString& line)
{
    const QChar kind = line.at(0);
    const QString rest = line.mid(1);

    switch (kind.toLatin1()) {
    case 'V':
        m_version = rest;
        break;

    case 'H':
        m_handle = rest.toUInt(nullptr, 16);
        runHandshake();
        break;

    case 'R': {
        // R<seq>|<hex result>|<body>
        const int bar1 = rest.indexOf(QLatin1Char('|'));
        if (bar1 < 0)
            break;
        const quint32 seq = rest.left(bar1).toUInt();
        const int bar2 = rest.indexOf(QLatin1Char('|'), bar1 + 1);
        const QString codeText = bar2 > 0 ? rest.mid(bar1 + 1, bar2 - bar1 - 1)
                                          : rest.mid(bar1 + 1);
        const QString body = bar2 > 0 ? rest.mid(bar2 + 1) : QString();
        const int code = codeText.toInt(nullptr, 16);

        const auto handler = m_pending.take(seq);
        if (handler)
            handler(code, body);
        break;
    }

    case 'S': {
        // S<handle>|<object> <k=v> …
        const int bar = rest.indexOf(QLatin1Char('|'));
        if (bar < 0)
            break;
        const QString body = rest.mid(bar + 1);

        // The object name can be one or two tokens ("slice 0", "transmit"),
        // which is settled by whether the second token carries an '='.
        const QStringList parts = body.split(QLatin1Char(' '), Qt::SkipEmptyParts);
        if (parts.isEmpty())
            break;

        int nameTokens = 1;
        if (parts.size() > 1 && !parts.at(1).contains(QLatin1Char('=')))
            nameTokens = 2;

        const QString object = QStringList(parts.mid(0, nameTokens)).join(QLatin1Char(' '));
        const QString kvBody = QStringList(parts.mid(nameTokens)).join(QLatin1Char(' '));
        emit statusReceived(object, parseKeyValues(kvBody));
        break;
    }

    case 'M': {
        // M<8 hex digits>|<text> — the top two bits of the number are severity.
        const int bar = rest.indexOf(QLatin1Char('|'));
        if (bar < 0)
            break;
        const quint32 code = rest.left(bar).toUInt(nullptr, 16);
        const quint32 severity = (code >> 30) & 0x03u;
        emit radioMessage(rest.mid(bar + 1), severity >= 2);
        break;
    }

    default:
        break;
    }
}

void FlexApiClient::runHandshake()
{
    // Order matters and mirrors what FlexLib does: identify the program, then
    // register as a GUI client, then subscribe. Registering before identifying
    // makes the radio ignore later client settings.
    send(QStringLiteral("client program DecoRTTY"));

    send(QStringLiteral("client gui %1").arg(m_clientId),
         [this](int code, const QString& body) {
             if (code != 0) {
                 emit errorOccurred(tr("The radio refused the client registration (code 0x%1)")
                                        .arg(code, 0, 16));
                 setState(LinkState::Failed);
                 return;
             }
             if (!body.trimmed().isEmpty())
                 m_clientId = body.trimmed();

             send(QStringLiteral("client station %1").arg(m_stationName));
             send(QStringLiteral("keepalive enable"));

             // Subscriptions. Slice and transmit carry everything RTTY needs
             // (frequency, mode, filter, PTT state); meter gives the S-meter.
             send(QStringLiteral("sub slice all"));
             send(QStringLiteral("sub tx all"));
             send(QStringLiteral("sub meter all"));
             send(QStringLiteral("sub audio all"));
             send(QStringLiteral("sub radio all"));
             send(QStringLiteral("sub client all"));

             m_keepalive.start();
             setState(LinkState::Connected);
             emit connected();
         });
}

} // namespace decortty::flex
