// DecoRTTY — waterfall, spectrum trace and tone markers.
//
// Clicking places the mark tone, which is how tuning is meant to work: point at
// the signal rather than nudge a frequency box until the text stops being
// garbage.
import QtCore
import QtQuick
import QtQuick.Controls
import DecoRTTY
import DecoRTTY.components

GlassPanel {
    id: root

    // 8 kHz working rate, 2048-point transform.
    readonly property real binHz: 8000 / 2048

    // ── come si guarda la banda ─────────────────────────────────────────
    //
    // Gli estremi della scala non sono fissi ma appoggiati al fondo di banda
    // misurato dal decodificatore. Con due valori fissi la stessa antenna
    // mostra una banda tutta nera la mattina e tutta accesa la sera, e
    // l'operatore passa il tempo a rincorrere il guadagno invece di ascoltare.
    property int  zoomLevel: 0        // 0 tutta la banda · 1 attorno ai toni · 2 stretto
    property int  paletteIndex: 0
    property real floorOffsetDb: 0    // dove comincia il colore, sopra il fondo
    // Quanti dB dal buio al bianco. Ventotto e non quaranta: in banda un
    // segnale utilizzabile sta dai dieci ai venticinque dB sopra il fondo, e
    // con una scala piu' larga di cosi' finisce tutto nel blu scuro — il
    // display resta tecnicamente corretto e praticamente inutile.
    property real spanDb: 28
    property int  speedDivider: 1     // 1 = tutte le righe, 2 = una su due…
    property bool showViewControls: false

    // Il centro della coppia di toni: e' li' che si guarda quando si stringe.
    readonly property real toneCentreHz: rtty.markHz - rtty.shiftHz / 2
    readonly property real viewStartHz: zoomLevel === 0 ? 500
                                      : Math.max(300, toneCentreHz - (zoomLevel === 1 ? 400 : 170))
    readonly property real viewEndHz: zoomLevel === 0 ? 3000
                                    : Math.min(3800, toneCentreHz + (zoomLevel === 1 ? 400 : 170))

    Column {
        anchors.fill: parent
        anchors.margins: 10
        spacing: 6

        Item {
            width: parent.width
            height: 24

            PanelHeading {
                text: "SPECTRUM"
                anchors.left: parent.left
                anchors.verticalCenter: parent.verticalCenter
            }

            Row {
                anchors.right: parent.right
                anchors.verticalCenter: parent.verticalCenter
                spacing: 8

                Text {
                    anchors.verticalCenter: parent.verticalCenter
                    text: "mark " + rtty.markHz.toFixed(0) + " Hz · shift " + rtty.shiftHz.toFixed(0) + " Hz"
                    color: Theme.textSecondary
                    font.pixelSize: 11
                    // Su una finestra stretta sparisce il testo, non i comandi.
                    visible: parent.parent.width > 560
                }

                    GlassButton {
                    text: "VISTA"
                    armed: root.showViewControls
                    accentColor: Theme.textSecondary
                    implicitWidth: 56
                    implicitHeight: 22
                    font.pixelSize: 10
                    onClicked: root.showViewControls = !root.showViewControls
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Zoom, tavolozza, luminosita' e velocita'\n"
                                  + "della cascata."
                }

            // Centratura su richiesta: un colpo solo, adesso. E' il gesto che
                // sostituisce il girare la manopola guardando il waterfall.
                GlassButton {
                    text: "CENTRA"
                    accentColor: Theme.primary
                    implicitWidth: 66
                    implicitHeight: 22
                    font.pixelSize: 10
                    onClicked: rtty.centreOnSignal()
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Cerca la coppia di toni in banda e ci porta\n"
                                  + "sopra la sintonia. Una volta sola."
                }

                GlassButton {
                    text: "AUTO"
                    armed: rtty.autoTuneEnabled
                    accentColor: Theme.success
                    implicitWidth: 56
                    implicitHeight: 22
                    font.pixelSize: 10
                    onClicked: rtty.autoTuneEnabled = !rtty.autoTuneEnabled
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Cerca da sola quando non si sta copiando nulla,\n"
                                  + "e prova anche il verso. Mentre il decodificatore\n"
                                  + "e' agganciato non tocca niente."
                }

                GlassButton {
                    text: "AFC"
                    armed: rtty.afcEnabled
                    accentColor: Theme.secondary
                    implicitWidth: 52
                    implicitHeight: 22
                    font.pixelSize: 10
                    onClicked: rtty.afcEnabled = !rtty.afcEnabled
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Insegue la deriva del segnale gia' agganciato,\n"
                                  + "entro qualche decina di hertz."
                }

                GlassButton {
                    text: "REV"
                    armed: rtty.reverse
                    accentColor: Theme.warning
                    implicitWidth: 52
                    implicitHeight: 22
                    font.pixelSize: 10
                    onClicked: rtty.reverse = !rtty.reverse
                }
            }
        }

        // ── controlli della vista, a scomparsa ──────────────────────────
        Row {
            width: parent.width
            height: root.showViewControls ? 24 : 0
            visible: root.showViewControls
            spacing: 6

            GlassButton {
                text: root.zoomLevel === 0 ? "banda" : (root.zoomLevel === 1 ? "±400" : "±170")
                implicitWidth: 62
                implicitHeight: 22
                font.pixelSize: 10
                accentColor: Theme.primary
                armed: root.zoomLevel > 0
                onClicked: root.zoomLevel = (root.zoomLevel + 1) % 3
                ToolTip.visible: hovered
                ToolTip.delay: 700
                ToolTip.text: "Quanta banda mostrare. Stretto attorno ai toni si\n"
                              + "vedono i singoli bit; larga si vede chi chiama."
            }

            GlassButton {
                text: ["DECO", "GRIGI", "FUOCO"][root.paletteIndex]
                implicitWidth: 62
                implicitHeight: 22
                font.pixelSize: 10
                accentColor: Theme.secondary
                onClicked: root.paletteIndex = (root.paletteIndex + 1) % 3
            }

            GlassButton {
                text: "vel " + root.speedDivider + "x"
                implicitWidth: 56
                implicitHeight: 22
                font.pixelSize: 10
                onClicked: root.speedDivider = root.speedDivider >= 4 ? 1 : root.speedDivider * 2
                ToolTip.visible: hovered
                ToolTip.delay: 700
                ToolTip.text: "Quanto in fretta scorre. Piu' lento tiene in vista\n"
                              + "un pezzo di banda piu' lungo."
            }

            Text {
                anchors.verticalCenter: parent.verticalCenter
                text: "luce"
                color: Theme.textSecondary
                font.pixelSize: 10
            }
            Slider {
                anchors.verticalCenter: parent.verticalCenter
                width: 84
                height: 18
                from: -6; to: 20
                value: root.floorOffsetDb
                onMoved: root.floorOffsetDb = value
            }

            Text {
                anchors.verticalCenter: parent.verticalCenter
                text: "contrasto"
                color: Theme.textSecondary
                font.pixelSize: 10
            }
            Slider {
                anchors.verticalCenter: parent.verticalCenter
                width: 84
                height: 18
                from: 15; to: 70
                value: root.spanDb
                onMoved: root.spanDb = value
            }

            Text {
                anchors.verticalCenter: parent.verticalCenter
                text: "fondo " + rtty.spectrumFloorDb.toFixed(0) + " dB"
                color: Theme.textSecondary
                font.pixelSize: 10
                font.family: Theme.monoFamily
            }
        }

        // Live spectrum trace above the waterfall: the instantaneous view that
        // shows the two tones as distinct peaks while you tune.
        Canvas {
            id: trace
            width: parent.width
            height: Math.max(46, root.height * 0.22)
            clip: true

            property var bins: []

            onPaint: {
                const ctx = getContext("2d")
                ctx.reset()
                if (!bins || bins.length === 0)
                    return

                const startHz = waterfall.startHz
                const endHz = waterfall.endHz
                const spanHz = endHz - startHz
                const minDb = waterfall.minDb
                const maxDb = waterfall.maxDb

                // Passband shading between the two tones.
                const markX = (rtty.markHz - startHz) / spanHz * width
                const spaceX = (rtty.markHz - rtty.shiftHz - startHz) / spanHz * width
                ctx.fillStyle = Qt.rgba(Theme.accent.r, Theme.accent.g, Theme.accent.b, 0.10)
                ctx.fillRect(Math.min(markX, spaceX), 0, Math.abs(markX - spaceX), height)

                ctx.beginPath()
                for (let x = 0; x < width; ++x) {
                    const hz = startHz + (x / width) * spanHz
                    const bin = Math.round(hz / root.binHz)
                    const db = (bin >= 0 && bin < bins.length) ? bins[bin] : minDb
                    // Trattenuta dentro il riquadro: un segnale che supera il
                    // fondoscala si appiattisce in cima invece di uscire e
                    // farsi tagliare dal bordo del pannello.
                    const y = Math.max(1, Math.min(height - 1,
                                  height - (db - minDb) / (maxDb - minDb) * height))
                    if (x === 0)
                        ctx.moveTo(x, y)
                    else
                        ctx.lineTo(x, y)
                }
                ctx.strokeStyle = Theme.secondary
                ctx.lineWidth = 1.2
                ctx.stroke()

                // Tone markers on top, so they are never hidden by the trace.
                // Il notch, dove e' inserito: una riga rossa dice all'operatore
                // che quella fetta di banda e' stata tolta di mezzo.
                if (rtty.notchEnabled) {
                    const nx = (rtty.notchHz - startHz) / spanHz * width
                    ctx.strokeStyle = Theme.error
                    ctx.lineWidth = 1.5
                    ctx.beginPath()
                    ctx.moveTo(nx, 0)
                    ctx.lineTo(nx, height)
                    ctx.stroke()
                }

                ctx.strokeStyle = Theme.accent
                ctx.lineWidth = 1
                for (const mx of [markX, spaceX]) {
                    ctx.beginPath()
                    ctx.moveTo(mx, 0)
                    ctx.lineTo(mx, height)
                    ctx.stroke()
                }
            }
        }

        Waterfall {
            id: waterfall
            width: parent.width
            height: Math.max(40, parent.height - trace.height - freqScale.height - 40
                    - (root.showViewControls ? 30 : 0))

            startHz: root.viewStartHz
            endHz: root.viewEndHz
            // Ancorata al fondo misurato, non a due estremi fissi.
            minDb: rtty.spectrumFloorDb + root.floorOffsetDb
            maxDb: rtty.spectrumFloorDb + root.floorOffsetDb + root.spanDb
            markHz: rtty.markHz
            shiftHz: rtty.shiftHz
            markerColor: Theme.accent
            colorMap: root.paletteIndex
            notchHz: rtty.notchHz
            notchEnabled: rtty.notchEnabled

            MouseArea {
                anchors.fill: parent
                acceptedButtons: Qt.LeftButton | Qt.RightButton
                cursorShape: Qt.CrossCursor

                onClicked: (mouse) => {
                    const hz = waterfall.frequencyAt(mouse.x)
                    if (mouse.modifiers & Qt.ControlModifier) {
                        // Ctrl+clic piazza il notch: si punta la portante che
                        // disturba invece di cercarne la frequenza a mano.
                        rtty.notchHz = hz
                        rtty.notchEnabled = true
                        return
                    }
                    if (mouse.button === Qt.LeftButton) {
                        // Left click puts MARK where you pointed.
                        rtty.markHz = hz
                    } else {
                        // Right click centres the pair on the point, which is
                        // what you want when you can see both tones.
                        rtty.markHz = hz + rtty.shiftHz / 2
                    }
                }
            }
        }

        // Frequency scale.
        Item {
            id: freqScale
            width: parent.width
            height: 14

            Repeater {
                // I riferimenti seguono la fetta di banda mostrata: con lo zoom
                // stretto, "500 1000 1500" non cadrebbe piu' da nessuna parte.
                model: {
                    const a = root.viewStartHz, b = root.viewEndHz
                    const step = (b - a) > 1500 ? 500 : ((b - a) > 500 ? 200 : 50)
                    const out = []
                    for (let hz = Math.ceil(a / step) * step; hz <= b; hz += step)
                        out.push(hz)
                    return (freqScale.width > 520 || out.length < 5)
                           ? out : out.filter((_, i) => i % 2 === 0)
                }
                delegate: Text {
                    required property int modelData
                    x: (modelData - waterfall.startHz) / (waterfall.endHz - waterfall.startHz)
                       * freqScale.width - width / 2
                    text: modelData
                    color: Theme.textSecondary
                    font.pixelSize: 9
                }
            }
        }
    }

    property int frameCount: 0

    // Come si guarda la banda e' una scelta dell'operatore, non un dettaglio da
    // rifare a ogni avvio.
    Settings {
        category: "waterfall"
        property alias zoomLevel: root.zoomLevel
        property alias paletteIndex: root.paletteIndex
        property alias floorOffsetDb: root.floorOffsetDb
        property alias spanDb: root.spanDb
        property alias speedDivider: root.speedDivider
    }

    Connections {
        target: rtty
        function onSpectrumUpdated() {
            const spectrum = rtty.spectrum()
            // La traccia si ridisegna sempre — e' un'istantanea e deve essere
            // viva sotto le dita mentre si sintonizza. Della cascata invece si
            // possono saltare righe: rallentarla allunga il pezzo di banda che
            // resta in vista, senza togliere risoluzione all'analisi.
            trace.bins = spectrum
            trace.requestPaint()

            root.frameCount = (root.frameCount + 1) % root.speedDivider
            if (root.frameCount === 0)
                waterfall.pushSpectrum(spectrum, root.binHz)
        }
    }
}
