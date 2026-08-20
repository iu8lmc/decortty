// DecoRTTY — inietta un file WAV in un dispositivo di uscita scelto per nome.
//
// Serve per provare la catena di ricezione senza radio: si manda un segnale noto
// su un cavo audio virtuale, il gateway lo raccoglie dall'altro capo, e si
// misura cosa arriva a schermo. I riproduttori comuni suonano sul dispositivo
// predefinito di Windows e basta, che per una prova ripetibile non va bene —
// cambiare il dispositivo predefinito del sistema per fare un test significa
// interferire con tutto il resto di quello che l'operatore sta facendo.

#include <QAudioFormat>
#include <QAudioSink>
#include <QBuffer>
#include <QCommandLineParser>
#include <QCoreApplication>
#include <QFile>
#include <QGuiApplication>
#include <QMediaDevices>
#include <QTextStream>
#include <QTimer>

#include <cstring>

namespace {

// Lettore WAV essenziale: PCM 16 bit, che e' quello che producono i nostri
// strumenti. Non e' un decodificatore generico e non pretende di esserlo.
bool readWav(const QString& path, QByteArray& pcm, int& sampleRate, int& channels,
             QString& error)
{
    QFile file(path);
    if (!file.open(QIODevice::ReadOnly)) {
        error = file.errorString();
        return false;
    }
    const QByteArray all = file.readAll();
    if (all.size() < 44 || !all.startsWith("RIFF") || all.mid(8, 4) != "WAVE") {
        error = QStringLiteral("non e' un file WAV");
        return false;
    }

    int pos = 12;
    int bits = 0;
    while (pos + 8 <= all.size()) {
        const QByteArray id = all.mid(pos, 4);
        quint32 size = 0;
        std::memcpy(&size, all.constData() + pos + 4, 4);
        const int body = pos + 8;
        if (id == "fmt ") {
            quint16 ch = 0, bps = 0;
            quint32 rate = 0;
            std::memcpy(&ch,   all.constData() + body + 2, 2);
            std::memcpy(&rate, all.constData() + body + 4, 4);
            std::memcpy(&bps,  all.constData() + body + 14, 2);
            channels   = ch;
            sampleRate = static_cast<int>(rate);
            bits       = bps;
        } else if (id == "data") {
            pcm = all.mid(body, static_cast<int>(size));
        }
        pos = body + static_cast<int>(size) + (size & 1);
    }

    if (pcm.isEmpty() || bits != 16) {
        error = QStringLiteral("serve PCM a 16 bit (trovati %1)").arg(bits);
        return false;
    }
    return true;
}

} // namespace

int main(int argc, char* argv[])
{
    QGuiApplication app(argc, argv);
    app.setApplicationName(QStringLiteral("decortty-inject"));

    QCommandLineParser parser;
    parser.setApplicationDescription(
        QStringLiteral("Manda un file WAV a un dispositivo di uscita scelto per nome."));
    parser.addHelpOption();
    parser.addPositionalArgument(QStringLiteral("file"), QStringLiteral("Il file WAV da suonare."));

    const QCommandLineOption deviceOption(QStringLiteral("device"),
                                          QStringLiteral("Dispositivo di uscita, cercato come sottostringa."),
                                          QStringLiteral("nome"));
    const QCommandLineOption loopOption(QStringLiteral("loop"),
                                        QStringLiteral("Ripeti finche' non lo si ferma."));
    const QCommandLineOption listOption(QStringLiteral("list"),
                                        QStringLiteral("Elenca i dispositivi di uscita ed esci."));
    parser.addOption(deviceOption);
    parser.addOption(loopOption);
    parser.addOption(listOption);
    parser.process(app);

    QTextStream out(stdout);

    if (parser.isSet(listOption)) {
        for (const QAudioDevice& device : QMediaDevices::audioOutputs())
            out << device.description() << "\n";
        out.flush();
        return 0;
    }

    if (parser.positionalArguments().isEmpty()) {
        out << "manca il file WAV\n";
        out.flush();
        return 1;
    }

    QByteArray pcm;
    int  rate = 0, channels = 0;
    QString error;
    if (!readWav(parser.positionalArguments().first(), pcm, rate, channels, error)) {
        out << "non posso leggere il file: " << error << "\n";
        out.flush();
        return 1;
    }

    QAudioDevice chosen = QMediaDevices::defaultAudioOutput();
    if (parser.isSet(deviceOption)) {
        const QString hint = parser.value(deviceOption);
        bool found = false;
        for (const QAudioDevice& device : QMediaDevices::audioOutputs()) {
            if (device.description().contains(hint, Qt::CaseInsensitive)) {
                chosen = device;
                found  = true;
                break;
            }
        }
        if (!found) {
            out << "nessun dispositivo contiene \"" << hint << "\"\n";
            out.flush();
            return 1;
        }
    }

    QAudioFormat format;
    format.setSampleRate(rate);
    format.setChannelCount(channels);
    format.setSampleFormat(QAudioFormat::Int16);
    if (!chosen.isFormatSupported(format)) {
        out << "il dispositivo non accetta " << rate << " Hz a " << channels << " canali\n";
        out.flush();
        return 1;
    }

    out << "suono " << parser.positionalArguments().first() << " su "
        << chosen.description() << " — " << rate << " Hz, " << channels << " canali, "
        << (pcm.size() / (2.0 * channels * rate)) << " s\n";
    out.flush();

    auto* buffer = new QBuffer(&pcm);
    buffer->open(QIODevice::ReadOnly);

    auto* sink = new QAudioSink(chosen, format);
    const bool loop = parser.isSet(loopOption);

    QObject::connect(sink, &QAudioSink::stateChanged, [&](QAudio::State state) {
        if (state != QAudio::IdleState)
            return;
        if (!loop) {
            app.quit();
            return;
        }
        buffer->seek(0);
        sink->start(buffer);
    });

    sink->start(buffer);
    return app.exec();
}
