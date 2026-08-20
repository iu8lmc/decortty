// DecoRTTY — filtri di ingresso e parametri RTTY avanzati.
//
// Tutto ciò che serve quando la banda è affollata o la stazione all'altro capo
// non segue lo standard amatoriale. Nessuno di questi controlli serve in un
// collegamento normale, ed è per questo che stanno qui e non nel pannello
// principale.
import QtQuick
import QtQuick.Controls
import DecoRTTY
import DecoRTTY.components

GlassPanel {
    id: root

    ScrollView {
        id: scroller
        anchors.fill: parent
        anchors.margins: 8
        anchors.rightMargin: 4
        clip: true
        contentWidth: availableWidth

        // Come nel pannello del decodificatore: la barra resta in vista, perche'
        // un elenco tagliato senza indizi si legge come un guasto.
        ScrollBar.vertical: ScrollBar {
            policy: ScrollBar.AlwaysOn
            width: 7
            contentItem: Rectangle {
                implicitWidth: 7
                radius: 3.5
                color: parent.pressed ? Theme.accent
                                      : Qt.rgba(Theme.primary.r, Theme.primary.g,
                                                Theme.primary.b, 0.65)
            }
            background: Rectangle {
                implicitWidth: 7
                radius: 3.5
                color: Qt.rgba(Theme.bgDeep.r, Theme.bgDeep.g, Theme.bgDeep.b, 0.6)
            }
        }

        Column {
            id: controls
            width: root.width - 27
            spacing: 8

            // ── anti-QRM ────────────────────────────────────────────────
            PanelHeading { text: "FILTRI" }

            Row {
                width: parent.width
                spacing: 5

                GlassButton {
                    text: "BPF"
                    implicitWidth: (controls.width - 10) / 3
                    implicitHeight: 26
                    font.pixelSize: 11
                    armed: rtty.bandpassEnabled
                    accentColor: Theme.secondary
                    onClicked: rtty.bandpassEnabled = !rtty.bandpassEnabled
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Passa-banda attorno ai due toni: scarta tutto\n"
                                  + "cio' che sta fuori prima del rivelatore."
                }
                GlassButton {
                    text: "NOTCH"
                    implicitWidth: (controls.width - 10) / 3
                    implicitHeight: 26
                    font.pixelSize: 11
                    armed: rtty.notchEnabled
                    accentColor: Theme.warning
                    onClicked: rtty.notchEnabled = !rtty.notchEnabled
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Cancella una frequenza. Ctrl+clic sul waterfall\n"
                                  + "per piazzarlo sulla portante che disturba."
                }
                GlassButton {
                    text: "LMS"
                    implicitWidth: (controls.width - 10) / 3
                    implicitHeight: 26
                    font.pixelSize: 11
                    armed: rtty.lmsEnabled
                    accentColor: Theme.accent
                    onClicked: rtty.lmsEnabled = !rtty.lmsEnabled
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Cancellatore adattivo: toglie da se' le portanti\n"
                                  + "ferme. Su segnali deboli puo' mangiarsi anche\n"
                                  + "il RTTY — provalo e ascolta."
                }
            }

            LabelledSlider {
                width: parent.width
                visible: rtty.bandpassEnabled
                label: "Larghezza BPF"
                suffix: " Hz"
                from: 200; to: 1200; stepSize: 25
                value: rtty.bandpassWidthHz
                onMoved: (v) => rtty.bandpassWidthHz = v
            }

            LabelledSlider {
                width: parent.width
                visible: rtty.notchEnabled
                label: "Notch"
                suffix: " Hz"
                from: 300; to: 3000; stepSize: 5
                value: rtty.notchHz
                onMoved: (v) => rtty.notchHz = v
            }

            Rectangle { width: parent.width; height: 1; color: Theme.glassBorder }

            // ── parametri di trama ──────────────────────────────────────
            PanelHeading { text: "TRAMA" }

            Row {
                width: parent.width
                spacing: 5

                Text {
                    anchors.verticalCenter: parent.verticalCenter
                    text: "Stop"
                    color: Theme.textSecondary
                    font.pixelSize: 11
                    width: 40
                }
                Repeater {
                    model: [{ label: "1", value: 1.0 },
                            { label: "1.5", value: 1.5 },
                            { label: "2", value: 2.0 }]
                    delegate: GlassButton {
                        required property var modelData
                        text: modelData.label
                        implicitWidth: (controls.width - 60) / 3
                        implicitHeight: 24
                        font.pixelSize: 10
                        armed: Math.abs(rtty.stopBits - modelData.value) < 0.1
                        onClicked: rtty.stopBits = modelData.value
                    }
                }
            }

            Row {
                width: parent.width
                spacing: 5

                Text {
                    anchors.verticalCenter: parent.verticalCenter
                    text: "Bit"
                    color: Theme.textSecondary
                    font.pixelSize: 11
                    width: 40
                }
                Repeater {
                    model: [5, 7, 8]
                    delegate: GlassButton {
                        required property int modelData
                        text: modelData + ""
                        implicitWidth: (controls.width - 60) / 3
                        implicitHeight: 24
                        font.pixelSize: 10
                        armed: rtty.dataBits === modelData
                        onClicked: rtty.dataBits = modelData
                        ToolTip.visible: hovered
                        ToolTip.delay: 700
                        ToolTip.text: modelData === 5 ? "Baudot: il RTTY amatoriale"
                                                      : "ASCII: qualche stazione utility"
                    }
                }
            }

            Row {
                width: parent.width
                spacing: 5

                Text {
                    anchors.verticalCenter: parent.verticalCenter
                    text: "Par."
                    color: Theme.textSecondary
                    font.pixelSize: 11
                    width: 40
                }
                Repeater {
                    model: [{ label: "no", value: 0 },
                            { label: "pari", value: 1 },
                            { label: "disp", value: 2 }]
                    delegate: GlassButton {
                        required property var modelData
                        text: modelData.label
                        implicitWidth: (controls.width - 60) / 3
                        implicitHeight: 24
                        font.pixelSize: 10
                        armed: rtty.parity === modelData.value
                        onClicked: rtty.parity = modelData.value
                    }
                }
            }

            Row {
                width: parent.width
                spacing: 5

                GlassButton {
                    text: rtty.figuresSet === 0 ? "FIG US" : "FIG ITA2"
                    implicitWidth: (controls.width - 5) / 2
                    implicitHeight: 26
                    font.pixelSize: 11
                    accentColor: Theme.primary
                    armed: rtty.figuresSet === 1
                    onClicked: rtty.figuresSet = rtty.figuresSet === 0 ? 1 : 0
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Set figure: US ha BELL e apostrofo dove\n"
                                  + "ITA2 mette apostrofo e BELL scambiati."
                }
                GlassButton {
                    text: "NO FRAME"
                    implicitWidth: (controls.width - 5) / 2
                    implicitHeight: 26
                    font.pixelSize: 11
                    accentColor: Theme.warning
                    armed: rtty.ignoreFramingErrors
                    onClicked: rtty.ignoreFramingErrors = !rtty.ignoreFramingErrors
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Stampa anche i caratteri col bit di stop sbagliato:\n"
                                  + "qualche carattere in piu' su segnali distorti,\n"
                                  + "qualche riga di spazzatura in cambio."
                }
            }

            Rectangle { width: parent.width; height: 1; color: Theme.glassBorder }

            // ── trasmissione ────────────────────────────────────────────
            PanelHeading { text: "TRASMISSIONE" }

            Row {
                width: parent.width
                spacing: 5

                Text {
                    anchors.verticalCenter: parent.verticalCenter
                    text: "Fill"
                    color: Theme.textSecondary
                    font.pixelSize: 11
                    width: 40
                }
                Repeater {
                    model: [{ label: "off", value: 0 },
                            { label: "LTRS", value: 1 },
                            { label: "blank", value: 2 }]
                    delegate: GlassButton {
                        required property var modelData
                        text: modelData.label
                        implicitWidth: (controls.width - 60) / 3
                        implicitHeight: 24
                        font.pixelSize: 10
                        armed: rtty.diddleMode === modelData.value
                        onClicked: rtty.diddleMode = modelData.value
                        ToolTip.visible: hovered
                        ToolTip.delay: 700
                        ToolTip.text: "Cosa mandare fra un carattere e l'altro\n"
                                      + "mentre scrivi dal vivo."
                    }
                }
            }

            LabelledSlider {
                width: parent.width
                label: "Attesa fra caratteri"
                suffix: " bit"
                from: 0; to: 3; stepSize: 0.5
                decimals: 1
                value: rtty.characterWaitBits
                onMoved: (v) => rtty.characterWaitBits = v
            }
        }
    }
}
