// DecoRTTY FT-991A gateway — console front end.
//
// Run it on the PC the radio is plugged into. DecoRTTY (on this machine or any
// other on the network) then finds it by discovery and treats it as a VITA-49
// radio.

#include "gateway/Ft991Gateway.h"

#include <QCommandLineParser>
#include <QSerialPortInfo>
#include <QDateTime>
#include <QDir>
#include <QFile>
#include <QCoreApplication>
#include <QGuiApplication>
#include <QTextStream>
#include <QTimer>

#include <cstdio>

#ifdef Q_OS_WIN
#  include <windows.h>
#else
#  include <csignal>
#endif

namespace {

// Il processo con questo identificatore e' ancora vivo?
//
// Serve per non sopravvivere a chi ci ha avviato. Un gateway orfano non e' solo
// un processo di troppo: tiene occupata la porta CAT e la scheda audio, e se
// DecoRTTY se ne va male mentre la radio trasmette resta con il PTT premuto.
bool processAlive(qint64 pid)
{
    if (pid <= 0)
        return true;
#ifdef Q_OS_WIN
    const HANDLE handle = OpenProcess(SYNCHRONIZE, FALSE, static_cast<DWORD>(pid));
    if (!handle)
        return false;
    const bool alive = WaitForSingleObject(handle, 0) == WAIT_TIMEOUT;
    CloseHandle(handle);
    return alive;
#else
    return ::kill(static_cast<pid_t>(pid), 0) == 0;
#endif
}

} // namespace

using namespace decortty::gateway;

int main(int argc, char* argv[])
{
    // QGuiApplication rather than QCoreApplication: the Qt Multimedia backend
    // wants a GUI application object even when nothing is displayed.
    QGuiApplication app(argc, argv);
    app.setApplicationName(QStringLiteral("decortty-ft991"));
    app.setOrganizationName(QStringLiteral("Decodium"));
    app.setApplicationVersion(QStringLiteral(DECORTTY_VERSION));

    QCommandLineParser parser;
    parser.setApplicationDescription(
        QStringLiteral("Presents a Yaesu FT-991A on the network as a VITA-49 radio, so\n"
                       "DecoRTTY can use it over the same transport as a FlexRadio."));
    parser.addHelpOption();
    parser.addVersionOption();

    const QCommandLineOption portOption({QStringLiteral("p"), QStringLiteral("cat-port")},
                                        QStringLiteral("CAT serial port (the Enhanced CP2105 port)."),
                                        QStringLiteral("port"), QStringLiteral("COM5"));
    const QCommandLineOption baudOption(QStringLiteral("cat-baud"),
                                        QStringLiteral("CAT baud rate, matching menu 031."),
                                        QStringLiteral("baud"), QStringLiteral("38400"));
    const QCommandLineOption noCatOption(QStringLiteral("no-cat"),
                                         QStringLiteral("Do not open the serial port: receive audio only."));
    const QCommandLineOption inOption(QStringLiteral("audio-in"),
                                      QStringLiteral("Capture device name, matched as a substring."),
                                      QStringLiteral("name"), QStringLiteral("USB Audio CODEC"));
    const QCommandLineOption outOption(QStringLiteral("audio-out"),
                                       QStringLiteral("Playback device name, matched as a substring."),
                                       QStringLiteral("name"), QStringLiteral("USB Audio CODEC"));
    const QCommandLineOption udpOption(QStringLiteral("udp-port"),
                                       QStringLiteral("UDP port for VITA-49 data and control."),
                                       QStringLiteral("port"), QStringLiteral("4993"));
    const QCommandLineOption nameOption(QStringLiteral("name"),
                                        QStringLiteral("Station name shown to clients."),
                                        QStringLiteral("name"), QStringLiteral("FT-991A"));
    const QCommandLineOption callOption(QStringLiteral("callsign"),
                                        QStringLiteral("Callsign shown to clients."),
                                        QStringLiteral("call"));
    const QCommandLineOption listOption(QStringLiteral("list-devices"),
                                        QStringLiteral("List audio devices and serial ports, then exit."));
    const QCommandLineOption parentOption(QStringLiteral("parent-pid"),
                                          QStringLiteral("Shut down when this process exits."),
                                          QStringLiteral("pid"), QStringLiteral("0"));

    parser.addOption(portOption);
    parser.addOption(baudOption);
    parser.addOption(noCatOption);
    parser.addOption(inOption);
    parser.addOption(outOption);
    parser.addOption(udpOption);
    parser.addOption(nameOption);
    parser.addOption(callOption);
    parser.addOption(listOption);
    parser.addOption(parentOption);
    parser.process(app);

    QTextStream out(stdout);

    if (parser.isSet(listOption)) {
        // Prefissi fissi a inizio riga: questo elenco lo legge anche DecoRTTY,
        // che avvia il gateway con --list-devices per riempire i menu delle
        // impostazioni. Cosi' quello che l'operatore sceglie e' esattamente
        // quello che il gateway vedra' quando aprira' i dispositivi.
        for (const QString& name : CodecAudio::captureDevices())
            out << "IN\t" << name << "\n";
        for (const QString& name : CodecAudio::playbackDevices())
            out << "OUT\t" << name << "\n";
        for (const QSerialPortInfo& info : QSerialPortInfo::availablePorts()) {
            const QString label = info.description().isEmpty() ? info.manufacturer()
                                                               : info.description();
            out << "COM\t" << info.portName() << "\t" << label << "\n";
        }
        out.flush();
        return 0;
    }

    // Un file di log accanto all'eseguibile. Avviato con un doppio clic il
    // gateway non ha una console da guardare, e quando qualcosa non trasmette è
    // esattamente allora che serve sapere cosa è successo.
    QFile logFile(QCoreApplication::applicationDirPath() + QStringLiteral("/decortty-ft991.log"));
    logFile.open(QIODevice::WriteOnly | QIODevice::Truncate | QIODevice::Text);
    QTextStream logStream(&logFile);

    Ft991Gateway gateway;
    QObject::connect(&gateway, &Ft991Gateway::log, [&out, &logStream](const QString& message) {
        const QString stamped =
            QDateTime::currentDateTime().toString(QStringLiteral("HH:mm:ss ")) + message;
        out << stamped << "\n";
        out.flush();
        logStream << stamped << "\n";
        logStream.flush();
    });

    Ft991Gateway::Config config;
    config.catPort      = parser.value(portOption);
    config.catBaud      = parser.value(baudOption).toInt();
    config.catEnabled   = !parser.isSet(noCatOption);
    config.captureHint  = parser.value(inOption);
    config.playbackHint = parser.value(outOption);
    config.dataPort     = static_cast<quint16>(parser.value(udpOption).toUShort());
    config.stationName  = parser.value(nameOption);
    config.callsign     = parser.value(callOption);
    // Il numero del processo padre fa anche da parola d'ordine per lo
    // spegnimento: chi ci ha avviati lo conosce, e chi passa di la' no.
    const qint64 parentPid = parser.value(parentOption).toLongLong();
    if (parentPid > 0)
        config.shutdownToken = QString::number(parentPid);

    out << "DecoRTTY FT-991A gateway " << DECORTTY_VERSION << "\n";
    out.flush();

    if (!gateway.start(config))
        return 1;

    // Una riga di stato in forma fissa, per chi ci legge invece di guardarci.
    // Il testo del log e' fatto per una persona e cambia; questa no. La porta
    // CAT che non si apre e' il caso che conta: il gateway prosegue in sola
    // ricezione, e chi ci ha avviati deve poterlo dire all'operatore invece di
    // mostrare un tranquillo "in ascolto".
    out << "STATUS\tcat="
        << (!config.catEnabled ? "off" : (gateway.catOpen() ? "open" : "busy"))
        << "\tport=" << config.catPort << "\n";
    out.flush();

    // Drop PTT and release the radio cleanly on Ctrl-C rather than leaving the
    // transmitter keyed.
    QObject::connect(&app, &QCoreApplication::aboutToQuit, [&gateway] { gateway.stop(); });

    // Avviati da DecoRTTY, si chiude con DecoRTTY. Il controllo e' a intervalli
    // invece che su un segnale perche' deve funzionare anche quando il padre non
    // ha avuto modo di avvisare: un crash, o l'utente che lo termina a forza.
    QObject::connect(&gateway, &Ft991Gateway::shutdownRequested, &app, &QCoreApplication::quit);

    QTimer parentWatch;
    if (parentPid > 0) {
        out << "Parent process " << parentPid << ": will exit with it\n";
        out.flush();
        QObject::connect(&parentWatch, &QTimer::timeout, [parentPid, &gateway, &parentWatch] {
            if (processAlive(parentPid))
                return;
            // Da qui in poi nessuno ci sorveglia. Che si chiuda davvero lo
            // decide il gateway, che sa se qualcun altro lo sta usando.
            parentWatch.stop();
            gateway.requestShutdown();
        });
        parentWatch.start(1000);
    }

    return app.exec();
}
