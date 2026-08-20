// DecoRTTY — modern RTTY for FlexRadio, over VITA-49.

#include "app/GatewaySupervisor.h"
#include "app/Language.h"
#include "app/MacroModel.h"
#include "app/QsoLog.h"
#include "app/ReceiveTextModel.h"
#include "app/RttyEngine.h"
#include "app/WaterfallItem.h"
#include "link/RadioHub.h"

#include <QGuiApplication>
#include <QIcon>
#include <QQmlApplicationEngine>
#include <QQmlContext>
#include <QQuickStyle>
#include <QSet>
#include <QSettings>
#include <QTimer>

using namespace decortty;

int main(int argc, char* argv[])
{
    QGuiApplication app(argc, argv);
    app.setApplicationName(QStringLiteral("DecoRTTY"));
    app.setOrganizationName(QStringLiteral("Decodium"));
    app.setApplicationVersion(QStringLiteral(DECORTTY_VERSION));
    // Icona della finestra e della barra delle applicazioni. Quella
    // dell'eseguibile arriva dalla risorsa .rc; questa serve a Qt a runtime.
    app.setWindowIcon(QIcon(QStringLiteral(":/decortty.png")));

    // Basic style: the interface paints its own surfaces, and a platform style
    // would fight the glass panels rather than help them.
    QQuickStyle::setStyle(QStringLiteral("Basic"));

    QSettings settings;

    app::Language language;
    link::RadioHub radio;
    app::RttyEngine     engine;
    app::GatewaySupervisor gateway;
    app::ReceiveTextModel receiveText;
    app::MacroModel     macros;
    app::QsoLog         qsoLog;

    macros.load(settings);
    engine.attachRadio(&radio);

    // Il gateway si apre e si chiude con l'applicazione: chi ha la radio
    // attaccata a questo PC lancia un programma solo.
    gateway.setEnabled(settings.value(QStringLiteral("gateway/enabled"), true).toBool());
    gateway.setCatPort(settings.value(QStringLiteral("gateway/catPort"),
                                      QStringLiteral("COM5")).toString());
    gateway.setAudioIn(settings.value(QStringLiteral("gateway/audioIn"),
                                      QStringLiteral("USB Audio CODEC")).toString());
    gateway.setAudioOut(settings.value(QStringLiteral("gateway/audioOut"),
                                       QStringLiteral("USB Audio CODEC")).toString());
    gateway.setUdpPort(settings.value(QStringLiteral("gateway/udpPort"), 4993).toInt());
    gateway.setAutoConnect(settings.value(QStringLiteral("gateway/autoConnect"), true).toBool());
    gateway.setCallsign(macros.myCall());

    // Decoded and transmitted characters both flow into the one receive window,
    // so the operator reads the QSO as a conversation.
    QObject::connect(&engine, &app::RttyEngine::characterDecoded,
                     &receiveText, [&receiveText](const QString& text, double quality, bool corrected) {
                         if (!text.isEmpty())
                             receiveText.appendCharacter(text.at(0), quality, corrected);
                     });
    QObject::connect(&engine, &app::RttyEngine::characterTransmitted,
                     &receiveText, [&receiveText](const QString& text) {
                         if (!text.isEmpty())
                             receiveText.appendTransmitted(text.at(0));
                     });

    // Restore the operator's decoder settings.
    engine.setMarkHz(settings.value(QStringLiteral("rtty/markHz"), 2125.0).toDouble());
    engine.setShiftHz(settings.value(QStringLiteral("rtty/shiftHz"), 170.0).toDouble());
    engine.setBaud(settings.value(QStringLiteral("rtty/baud"), 45.45).toDouble());
    engine.setReverse(settings.value(QStringLiteral("rtty/reverse"), false).toBool());
    engine.setUnshiftOnSpace(settings.value(QStringLiteral("rtty/usos"), true).toBool());
    engine.setAfcEnabled(settings.value(QStringLiteral("rtty/afc"), true).toBool());
    engine.setAutoTuneEnabled(settings.value(QStringLiteral("rtty/autoTune"), true).toBool());
    engine.setSquelchDb(settings.value(QStringLiteral("rtty/squelchDb"), 4.0).toDouble());
    engine.setCorrectionDepth(settings.value(QStringLiteral("rtty/correctionDepth"), 4).toInt());
    engine.setTransmitLevel(settings.value(QStringLiteral("rtty/transmitLevel"), 0.35).toDouble());
    engine.setStopBits(settings.value(QStringLiteral("rtty/stopBits"), 1.5).toDouble());
    engine.setDataBits(settings.value(QStringLiteral("rtty/dataBits"), 5).toInt());
    engine.setParity(settings.value(QStringLiteral("rtty/parity"), 0).toInt());
    engine.setFiguresSet(settings.value(QStringLiteral("rtty/figuresSet"), 0).toInt());
    engine.setIgnoreFramingErrors(settings.value(QStringLiteral("rtty/ignoreFraming"), false).toBool());
    engine.setBandpassEnabled(settings.value(QStringLiteral("rtty/bandpass"), false).toBool());
    engine.setBandpassWidthHz(settings.value(QStringLiteral("rtty/bandpassWidth"), 500.0).toDouble());
    engine.setLmsEnabled(settings.value(QStringLiteral("rtty/lms"), false).toBool());
    engine.setDiddleMode(settings.value(QStringLiteral("rtty/diddleMode"), 1).toInt());
    engine.setCharacterWaitBits(settings.value(QStringLiteral("rtty/charWait"), 0.0).toDouble());

    QObject::connect(&app, &QGuiApplication::aboutToQuit, [&] {
        settings.setValue(QStringLiteral("rtty/markHz"), engine.markHz());
        settings.setValue(QStringLiteral("rtty/shiftHz"), engine.shiftHz());
        settings.setValue(QStringLiteral("rtty/baud"), engine.baud());
        settings.setValue(QStringLiteral("rtty/reverse"), engine.reverse());
        settings.setValue(QStringLiteral("rtty/usos"), engine.unshiftOnSpace());
        settings.setValue(QStringLiteral("rtty/afc"), engine.afcEnabled());
        settings.setValue(QStringLiteral("rtty/autoTune"), engine.autoTuneEnabled());
        settings.setValue(QStringLiteral("rtty/squelchDb"), engine.squelchDb());
        settings.setValue(QStringLiteral("rtty/correctionDepth"), engine.correctionDepth());
        settings.setValue(QStringLiteral("rtty/transmitLevel"), engine.transmitLevel());
        settings.setValue(QStringLiteral("rtty/stopBits"), engine.stopBits());
        settings.setValue(QStringLiteral("rtty/dataBits"), engine.dataBits());
        settings.setValue(QStringLiteral("rtty/parity"), engine.parity());
        settings.setValue(QStringLiteral("rtty/figuresSet"), engine.figuresSet());
        settings.setValue(QStringLiteral("rtty/ignoreFraming"), engine.ignoreFramingErrors());
        settings.setValue(QStringLiteral("rtty/bandpass"), engine.bandpassEnabled());
        settings.setValue(QStringLiteral("rtty/bandpassWidth"), engine.bandpassWidthHz());
        settings.setValue(QStringLiteral("rtty/lms"), engine.lmsEnabled());
        settings.setValue(QStringLiteral("rtty/diddleMode"), engine.diddleMode());
        settings.setValue(QStringLiteral("rtty/charWait"), engine.characterWaitBits());
        settings.setValue(QStringLiteral("gateway/enabled"), gateway.enabled());
        settings.setValue(QStringLiteral("gateway/catPort"), gateway.catPort());
        settings.setValue(QStringLiteral("gateway/audioIn"), gateway.audioIn());
        settings.setValue(QStringLiteral("gateway/audioOut"), gateway.audioOut());
        settings.setValue(QStringLiteral("gateway/udpPort"), gateway.udpPort());
        settings.setValue(QStringLiteral("gateway/autoConnect"), gateway.autoConnect());
        settings.setValue(QStringLiteral("ui/language"), language.current());
        qsoLog.exportAdif();
        macros.save(settings);
        // Scrittura immediata. QSettings tiene i valori in memoria e li versa su
        // disco quando gli pare — di norma alla distruzione. Se la chiusura si
        // interrompe prima, la serata di regolazioni se ne va senza lasciare
        // traccia, ed e' successo davvero: al riavvio squelch, correzione e
        // auto-centratura erano tornati com'erano ore prima.
        settings.sync();
        // Prima si molla la radio — che sgancia il PTT — e solo dopo si chiude
        // il gateway, altrimenti si toglierebbe di mezzo chi deve eseguire
        // l'ordine.
        radio.disconnectRadio();
        gateway.stop();
    });

    // La lingua prima di ogni altra cosa: le stringhe tradotte devono essere in
    // circolo quando il QML viene caricato, altrimenti la prima schermata esce
    // in inglese e si sistema solo al riavvio.
    language.attachEngine(nullptr);
    language.setCurrent(settings.value(QStringLiteral("ui/language")).toString());

    QQmlApplicationEngine qml;
    language.attachEngine(&qml);
    qml.rootContext()->setContextProperty(QStringLiteral("radio"), &radio);
    qml.rootContext()->setContextProperty(QStringLiteral("rtty"), &engine);
    qml.rootContext()->setContextProperty(QStringLiteral("receiveText"), &receiveText);
    qml.rootContext()->setContextProperty(QStringLiteral("macros"), &macros);
    qml.rootContext()->setContextProperty(QStringLiteral("qsoLog"), &qsoLog);
    qml.rootContext()->setContextProperty(QStringLiteral("gateway"), &gateway);
    qml.rootContext()->setContextProperty(QStringLiteral("language"), &language);
    qml.rootContext()->setContextProperty(QStringLiteral("appVersion"),
                                          QStringLiteral(DECORTTY_VERSION));

    QObject::connect(&qml, &QQmlApplicationEngine::objectCreationFailed, &app,
                     [] { QCoreApplication::exit(-1); }, Qt::QueuedConnection);

    qml.loadFromModule("DecoRTTY", "Main");
    if (qml.rootObjects().isEmpty())
        return -1;

    // Start looking for radios straight away: by the time the operator has
    // read the window, the list is already populated.
    radio.startDiscovery();

    // Un gateway e' gia' in ascolto? Il suo annuncio arriva entro un secondo, e
    // in quel caso non se ne avvia un secondo sulla stessa radio.
    auto gatewayOnAir = [&radio] {
        for (const QVariant& entry : radio.radioList()) {
            if (entry.toMap().value(QStringLiteral("gateway")).toBool())
                return true;
        }
        return false;
    };
    auto startGatewayIfNeeded = [&gateway, gatewayOnAir] {
        gateway.startUnlessPresent(gatewayOnAir());
    };

    // Un momento di ascolto prima di decidere.
    QTimer::singleShot(1500, &app, startGatewayIfNeeded);

    // E se il gateway sparisce mentre siamo aperti — chiuso a mano, o portato
    // via da un'altra istanza che si e' chiusa — si rimette in piedi. Il
    // controllo passa dallo stesso discovery dell'avvio, cosi' un gateway che e'
    // solo momentaneamente muto non ne fa nascere un secondo.
    auto* reviveTimer = new QTimer(&app);
    reviveTimer->setInterval(15000);
    QObject::connect(reviveTimer, &QTimer::timeout, &app, [&, startGatewayIfNeeded] {
        if (radio.connected() || gateway.isRunning() || !gateway.enabled())
            return;
        startGatewayIfNeeded();
    });
    reviveTimer->start();

    // Connessione automatica al gateway appena si annuncia. Si tenta una volta
    // per stazione: se la radio e' spenta o la porta CAT e' occupata, l'errore
    // va letto una volta, non ripetuto a ogni annuncio.
    auto* attempted = new QSet<QString>;
    QObject::connect(&radio, &link::RadioHub::radioListChanged, &app, [&, attempted] {
        if (!gateway.autoConnect() || radio.connected())
            return;
        for (const QVariant& entry : radio.radioList()) {
            const QVariantMap map = entry.toMap();
            if (!map.value(QStringLiteral("gateway")).toBool())
                continue;
            const QString serial = map.value(QStringLiteral("serial")).toString();
            if (attempted->contains(serial))
                continue;
            attempted->insert(serial);
            radio.connectToRadio(serial);
            return;
        }
    });

    return app.exec();
}
