// DecoRTTY — the single radio object the interface talks to.
//
// Runs discovery once for both kinds of radio, decides which link to build when
// the operator picks one, and forwards the link's state on as its own. The
// interface binds to `radio.frequencyMhz` without ever asking whether there is a
// FlexRadio or a Yaesu behind it.
#pragma once

#include "flex/FlexDiscovery.h"
#include "flex/FlexRadioLink.h"
#include "link/GatewayLink.h"

#include <QObject>
#include <QVariantList>

#include <memory>

namespace decortty::link {

class RadioHub : public QObject {
    Q_OBJECT

    Q_PROPERTY(bool discovering READ discovering NOTIFY discoveringChanged)
    Q_PROPERTY(bool connected READ connected NOTIFY connectionChanged)
    Q_PROPERTY(QString statusText READ statusText NOTIFY statusTextChanged)
    Q_PROPERTY(QString radioName READ radioName NOTIFY connectionChanged)
    Q_PROPERTY(QVariantList radioList READ radioList NOTIFY radioListChanged)
    Q_PROPERTY(double frequencyMhz READ frequencyMhz NOTIFY sliceChanged)
    Q_PROPERTY(QString mode READ mode NOTIFY sliceChanged)
    Q_PROPERTY(bool transmitting READ transmitting NOTIFY transmittingChanged)
    Q_PROPERTY(bool canTransmit READ canTransmit NOTIFY connectionChanged)
    Q_PROPERTY(int signalStrengthDbm READ signalStrengthDbm NOTIFY metersChanged)
    // True while the connected radio is an FT-991A behind a gateway. The
    // interface uses it to label the connection honestly rather than implying
    // everything is a network SDR.
    Q_PROPERTY(bool viaGateway READ viaGateway NOTIFY connectionChanged)

public:
    explicit RadioHub(QObject* parent = nullptr);
    ~RadioHub() override;

    bool    discovering() const { return m_discovery.listening(); }
    bool    connected() const;
    QString statusText() const;
    QString radioName() const;
    QVariantList radioList() const;
    double  frequencyMhz() const;
    QString mode() const;
    bool    transmitting() const;
    bool    canTransmit() const;
    int     signalStrengthDbm() const;
    bool    viaGateway() const { return m_viaGateway; }

    Q_INVOKABLE void startDiscovery();
    Q_INVOKABLE void stopDiscovery();
    Q_INVOKABLE void connectToRadio(const QString& serial);
    // Manual connect. A gateway and a FlexRadio cannot be told apart from an
    // address alone, so the caller says which it is.
    Q_INVOKABLE void connectToAddress(const QString& address, bool gateway = false);
    Q_INVOKABLE void disconnectRadio();

    Q_INVOKABLE void setFrequencyMhz(double mhz);
    Q_INVOKABLE void setMode(const QString& mode);
    Q_INVOKABLE void setFilter(int lowHz, int highHz);
    Q_INVOKABLE void applyRttyProfile(int markHz, int shiftHz);
    Q_INVOKABLE void setTransmit(bool on);

    // Used by the engine for the transmit path.
    int sendTransmitAudio(const float* samples, int count);

signals:
    void discoveringChanged();
    void connectionChanged();
    void statusTextChanged();
    void radioListChanged();
    void sliceChanged();
    void transmittingChanged();
    void metersChanged();
    void errorOccurred(const QString& message);
    void audioReady(const std::vector<float>& samples, int frames);

private:
    void adopt(RadioLink* link, bool gateway);
    void releaseLink();

    flex::FlexDiscovery m_discovery;
    RadioLink*          m_link{nullptr};   // owned; one at a time
    bool                m_viaGateway{false};
    QString             m_idleStatus;
};

} // namespace decortty::link
