// DecoRTTY — decoder controls.
//
// The presets cover what is actually on the air; the individual controls are
// there for the rest. Everything takes effect immediately, because tuning a
// marginal signal is an interactive business.
//
// La colonna e' stretta e corta, e questi comandi non ci stanno tutti: scorrono.
// Ma uno scorrimento che non si vede non esiste — chi guarda il pannello legge
// un elenco tagliato a meta' e conclude che il programma e' rotto. Per questo la
// barra sta sempre in vista invece di comparire al passaggio del mouse, e i
// comandi sono stretti quanto basta perche' ne resti fuori il meno possibile.
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
        anchors.rightMargin: 4        // la barra occupa il resto
        clip: true
        contentWidth: availableWidth

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
            spacing: 7

            // ── standard presets ────────────────────────────────────────────
            Grid {
                width: parent.width
                columns: 2
                spacing: 4

                Repeater {
                    model: [{ label: "45.45 / 170", baud: 45.45, shift: 170 },
                            { label: "50 / 170",    baud: 50.0,  shift: 170 },
                            { label: "75 / 170",    baud: 75.0,  shift: 170 },
                            { label: "45.45 / 850", baud: 45.45, shift: 850 }]
                    delegate: GlassButton {
                        required property var modelData
                        text: modelData.label
                        implicitWidth: (controls.width - 4) / 2
                        implicitHeight: 24
                        font.pixelSize: 10
                        armed: Math.abs(rtty.baud - modelData.baud) < 0.1
                               && Math.abs(rtty.shiftHz - modelData.shift) < 1
                        onClicked: { rtty.baud = modelData.baud; rtty.shiftHz = modelData.shift }
                    }
                }
            }

            LabelledSlider {
                width: parent.width
                label: "Mark"
                suffix: " Hz"
                from: 500; to: 3000; stepSize: 1
                value: rtty.markHz
                onMoved: (v) => rtty.markHz = v
            }

            LabelledSlider {
                width: parent.width
                label: "Shift"
                suffix: " Hz"
                from: 20; to: 1000; stepSize: 1
                value: rtty.shiftHz
                onMoved: (v) => rtty.shiftHz = v
            }

            LabelledSlider {
                width: parent.width
                label: "Squelch"
                suffix: " dB"
                from: 0; to: 20; stepSize: 0.5
                decimals: 1
                value: rtty.squelchDb
                onMoved: (v) => rtty.squelchDb = v
            }

            // ── error correction depth ──────────────────────────────────────
            Column {
                width: parent.width
                spacing: 3

                Row {
                    width: parent.width
                    Text {
                        text: "Correzione"
                        color: Theme.textSecondary
                        font.pixelSize: 11
                    }
                    Item { width: parent.width - 150; height: 1 }
                    Text {
                        text: rtty.correctionDepth === 0
                              ? "off"
                              : rtty.correctionDepth + " ch · " +
                                (rtty.correctionDepth / rtty.baud * 7.5).toFixed(1) + " s"
                        color: Theme.textPrimary
                        font.pixelSize: 11
                        font.family: Theme.monoFamily
                    }
                }

                Row {
                    spacing: 4

                    GlassButton {
                        text: "Off"
                        implicitWidth: (controls.width - 8) / 3
                        implicitHeight: 23
                        font.pixelSize: 10
                        armed: rtty.correctionDepth === 0
                        onClicked: rtty.correctionDepth = 0
                    }
                    GlassButton {
                        text: "Normale"
                        implicitWidth: (controls.width - 8) / 3
                        implicitHeight: 23
                        font.pixelSize: 10
                        armed: rtty.correctionDepth > 0 && rtty.correctionDepth <= 6
                        onClicked: rtty.correctionDepth = 4
                    }
                    GlassButton {
                        text: "Profonda"
                        implicitWidth: (controls.width - 8) / 3
                        implicitHeight: 23
                        font.pixelSize: 10
                        armed: rtty.correctionDepth > 6
                        onClicked: rtty.correctionDepth = 10
                    }
                }
            }

            Row {
                width: parent.width
                spacing: 4

                GlassButton {
                    text: "USOS"
                    implicitWidth: (controls.width - 4) / 2
                    implicitHeight: 24
                    font.pixelSize: 10
                    armed: rtty.unshiftOnSpace
                    accentColor: Theme.secondary
                    onClicked: rtty.unshiftOnSpace = !rtty.unshiftOnSpace
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Unshift on space — recupera un FIGS/LTRS perduto, ma\n"
                                  + "spezza i gruppi lunghi di cifre come le serie di numeri."
                }

                GlassButton {
                    text: "Set radio"
                    implicitWidth: (controls.width - 4) / 2
                    implicitHeight: 24
                    font.pixelSize: 10
                    enabled: radio.connected
                    accentColor: Theme.success
                    onClicked: radio.applyRttyProfile(rtty.markHz, rtty.shiftHz)
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Mette la radio in DIGU e stringe il filtro sui toni."
                }
            }
        }
    }
}
