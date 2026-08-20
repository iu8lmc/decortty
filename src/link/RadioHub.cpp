#include "link/RadioHub.h"

#include <QVariantMap>

namespace decortty::link {

RadioHub::RadioHub(QObject* parent)
    : QObject(parent)
    , m_idleStatus(tr("Disconnected"))
{
    connect(&m_discovery, &flex::FlexDiscovery::radioFound,   this, &RadioHub::radioListChanged);
    connect(&m_discovery, &flex::FlexDiscovery::radioUpdated, this, &RadioHub::radioListChanged);
    connect(&m_discovery, &flex::FlexDiscovery::radioLost,    this, &RadioHub::radioListChanged);
    connect(&m_discovery, &flex::FlexDiscovery::errorOccurred, this, &RadioHub::errorOccurred);
}

RadioHub::~RadioHub()
{
    releaseLink();
}

// ── state, forwarded from whichever link is live ────────────────────────────

bool    RadioHub::connected() const  { return m_link && m_link->isConnected(); }
QString RadioHub::sharedWith() const
{
    return m_link ? m_link->sharedWith() : QString();
}

QString RadioHub::statusText() const { return m_link ? m_link->statusText() : m_idleStatus; }
QString RadioHub::radioName() const  { return m_link ? m_link->radioName() : QString(); }
double  RadioHub::frequencyMhz() const { return m_link ? m_link->frequencyMhz() : 0.0; }
QString RadioHub::mode() const       { return m_link ? m_link->mode() : QString(); }
bool    RadioHub::transmitting() const { return m_link && m_link->isTransmitting(); }
bool    RadioHub::canTransmit() const  { return m_link && m_link->canTransmit(); }
int     RadioHub::signalStrengthDbm() const { return m_link ? m_link->signalStrengthDbm() : -140; }

QVariantList RadioHub::radioList() const
{
    QVariantList list;
    for (const flex::RadioInfo& radio : m_discovery.radios()) {
        QVariantMap entry;
        entry.insert(QStringLiteral("serial"),  radio.serial);
        entry.insert(QStringLiteral("model"),   radio.model);
        entry.insert(QStringLiteral("name"),    radio.displayName());
        entry.insert(QStringLiteral("address"), radio.address.toString());
        entry.insert(QStringLiteral("version"), radio.version);
        entry.insert(QStringLiteral("inUse"),   radio.inUse);
        entry.insert(QStringLiteral("gateway"), radio.isGateway);
        entry.insert(QStringLiteral("clients"), radio.guiClients);
        list.append(entry);
    }
    return list;
}

// ── discovery ───────────────────────────────────────────────────────────────

void RadioHub::startDiscovery()
{
    if (m_discovery.start()) {
        m_idleStatus = tr("Looking for radios…");
        emit statusTextChanged();
        emit discoveringChanged();
    }
}

void RadioHub::stopDiscovery()
{
    m_discovery.stop();
    emit discoveringChanged();
}

// ── link lifecycle ──────────────────────────────────────────────────────────

void RadioHub::releaseLink()
{
    if (!m_link)
        return;
    m_link->disconnectRadio();
    m_link->deleteLater();
    m_link = nullptr;
    m_viaGateway = false;
}

void RadioHub::adopt(RadioLink* link, bool gateway)
{
    releaseLink();
    m_link = link;
    m_viaGateway = gateway;

    // Everything the link reports becomes ours. Re-emitting rather than letting
    // QML bind to the link directly is what keeps the interface from having to
    // rebind every time the operator changes radio.
    connect(link, &RadioLink::connectionChanged,  this, &RadioHub::connectionChanged);
    connect(link, &RadioLink::statusTextChanged,  this, &RadioHub::statusTextChanged);
    connect(link, &RadioLink::sliceChanged,       this, &RadioHub::sliceChanged);
    connect(link, &RadioLink::transmittingChanged, this, &RadioHub::transmittingChanged);
    connect(link, &RadioLink::metersChanged,      this, &RadioHub::metersChanged);
    connect(link, &RadioLink::errorOccurred,      this, &RadioHub::errorOccurred);
    connect(link, &RadioLink::audioReady,         this, &RadioHub::audioReady);

    emit connectionChanged();
    emit statusTextChanged();
}

void RadioHub::connectToRadio(const QString& serial)
{
    for (const flex::RadioInfo& radio : m_discovery.radios()) {
        if (radio.serial != serial)
            continue;

        if (radio.isGateway) {
            auto* link = new GatewayLink(this);
            adopt(link, true);
            link->connectToGateway(radio);
        } else {
            auto* link = new flex::FlexRadioLink(this);
            adopt(link, false);
            link->connectToRadio(radio);
        }
        return;
    }
    emit errorOccurred(tr("Radio %1 is no longer on the network").arg(serial));
}

void RadioHub::connectToAddress(const QString& address, bool gateway)
{
    const QHostAddress host(address);
    if (host.isNull()) {
        emit errorOccurred(tr("'%1' is not a valid address").arg(address));
        return;
    }

    if (gateway) {
        auto* link = new GatewayLink(this);
        adopt(link, true);
        link->connectToAddress(host, 4993);
    } else {
        auto* link = new flex::FlexRadioLink(this);
        adopt(link, false);
        link->connectToAddress(host);
    }
}

void RadioHub::disconnectRadio()
{
    releaseLink();
    m_idleStatus = m_discovery.listening() ? tr("Looking for radios…") : tr("Disconnected");
    emit connectionChanged();
    emit statusTextChanged();
    emit sliceChanged();
}

// ── control, forwarded ──────────────────────────────────────────────────────

void RadioHub::setFrequencyMhz(double mhz)
{
    if (m_link) m_link->setFrequencyMhz(mhz);
}

void RadioHub::setMode(const QString& mode)
{
    if (m_link) m_link->setMode(mode);
}

void RadioHub::setFilter(int lowHz, int highHz)
{
    if (m_link) m_link->setFilter(lowHz, highHz);
}

void RadioHub::applyRttyProfile(int markHz, int shiftHz)
{
    if (m_link) m_link->applyRttyProfile(markHz, shiftHz);
}

void RadioHub::setTransmit(bool on)
{
    if (!m_link)
        return;
    if (on && !m_link->canTransmit()) {
        emit errorOccurred(tr("Transmit is unavailable on this connection"));
        return;
    }
    m_link->setTransmit(on);
}

int RadioHub::sendTransmitAudio(const float* samples, int count)
{
    return m_link ? m_link->sendTransmitAudio(samples, count) : 0;
}

} // namespace decortty::link
