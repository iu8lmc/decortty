// DecoRTTY — registro dei collegamenti.
//
// Il collegamento si registra dai campi che sono già compilati in alto, così
// annotarlo costa un tasto e non una trascrizione. Il file ADIF si riscrive a
// ogni riga: un programma che si chiude male non porta via la serata.
import QtQuick
import QtQuick.Controls
import DecoRTTY
import DecoRTTY.components

Dialog {
    id: root

    modal: true
    visible: false
    closePolicy: Popup.CloseOnEscape | Popup.CloseOnPressOutside
    anchors.centerIn: Overlay.overlay
    width: 720
    height: 520
    padding: 0

    background: GlassPanel { tintOpacity: 0.97 }

    contentItem: Column {
        spacing: 10

        Item { width: 1; height: 6 }

        Row {
            x: 16
            width: parent.width - 32
            spacing: 10

            PanelHeading {
                anchors.verticalCenter: parent.verticalCenter
                text: "LOG"
            }
            Text {
                anchors.verticalCenter: parent.verticalCenter
                text: qsoLog.count + (qsoLog.count === 1 ? " collegamento" : " collegamenti")
                color: Theme.textSecondary
                font.pixelSize: 11
            }
            Item { width: parent.width - 420; height: 1 }
            Text {
                anchors.verticalCenter: parent.verticalCenter
                text: qsoLog.logPath
                color: Theme.textSecondary
                font.pixelSize: 9
                elide: Text.ElideLeft
                width: 260
            }
        }

        // ── riga di registrazione ───────────────────────────────────────
        Rectangle {
            x: 12
            width: parent.width - 24
            height: 58
            radius: 8
            color: Theme.glassOverlay
            border.color: Theme.glassBorder

            Row {
                anchors.left: parent.left
                anchors.leftMargin: 10
                anchors.verticalCenter: parent.verticalCenter
                spacing: 8

                QsoField {
                    label: "CALL"
                    width: 110
                    text: macros.hisCall
                    highlight: true
                    onEdited: (value) => macros.hisCall = value
                }
                QsoField {
                    label: "RST INV"
                    width: 60
                    text: macros.rstSent
                    onEdited: (value) => macros.rstSent = value
                }
                QsoField {
                    id: rstRcvd
                    label: "RST RIC"
                    width: 60
                    text: "599"
                }
                QsoField { id: opName; label: "NOME"; width: 100 }
                QsoField { id: opQth;  label: "QTH";  width: 110 }

                GlassButton {
                    anchors.verticalCenter: parent.verticalCenter
                    text: "Registra"
                    accentColor: Theme.success
                    implicitWidth: 92
                    implicitHeight: 30
                    enabled: macros.hisCall.length > 0
                    onClicked: {
                        if (qsoLog.addQso(macros.hisCall, macros.rstSent, rstRcvd.text,
                                          opName.text, opQth.text, radio.frequencyMhz)) {
                            // Pronti per il prossimo: il numero progressivo avanza
                            // e i campi del corrispondente si svuotano.
                            macros.incrementSerial()
                            macros.hisCall = ""
                            opName.text = ""
                            opQth.text = ""
                        }
                    }
                }
            }
        }

        // ── avviso duplicato ────────────────────────────────────────────
        Rectangle {
            x: 12
            width: parent.width - 24
            height: visible ? 26 : 0
            visible: macros.hisCall.length > 2 && qsoLog.timesWorked(macros.hisCall) > 0
            radius: 6
            color: Qt.rgba(Theme.warning.r, Theme.warning.g, Theme.warning.b, 0.18)
            border.color: Theme.warning

            Text {
                anchors.centerIn: parent
                text: "Gia' collegato: " + macros.hisCall + " — ultimo " + qsoLog.lastWorked(macros.hisCall)
                color: Theme.warning
                font.pixelSize: 11
            }
        }

        // ── elenco ──────────────────────────────────────────────────────
        ListView {
            id: view
            x: 12
            width: parent.width - 24
            height: root.height - 230
            clip: true
            model: qsoLog
            spacing: 2
            verticalLayoutDirection: ListView.BottomToTop   // l'ultimo in cima

            delegate: Rectangle {
                required property int index
                required property date start
                required property string call
                required property string rstSent
                required property string rstReceived
                required property string name
                required property real frequencyMhz

                width: view.width
                height: 26
                radius: 4
                color: index % 2 ? "transparent" : Qt.rgba(1, 1, 1, 0.03)

                Row {
                    anchors.left: parent.left
                    anchors.leftMargin: 8
                    anchors.verticalCenter: parent.verticalCenter
                    spacing: 14

                    Text {
                        text: Qt.formatDateTime(start, "dd MMM hh:mm") + "Z"
                        color: Theme.textSecondary
                        font.pixelSize: 11
                        font.family: Theme.monoFamily
                        width: 110
                    }
                    Text {
                        text: call
                        color: Theme.accent
                        font.pixelSize: 12
                        font.family: Theme.monoFamily
                        font.bold: true
                        width: 100
                    }
                    Text {
                        text: frequencyMhz > 0 ? frequencyMhz.toFixed(3) : "—"
                        color: Theme.secondary
                        font.pixelSize: 11
                        font.family: Theme.monoFamily
                        width: 80
                    }
                    Text {
                        text: rstSent + " / " + rstReceived
                        color: Theme.textPrimary
                        font.pixelSize: 11
                        font.family: Theme.monoFamily
                        width: 80
                    }
                    Text {
                        text: name
                        color: Theme.textSecondary
                        font.pixelSize: 11
                    }
                }
            }
        }

        Row {
            x: 16
            spacing: 8

            GlassButton {
                text: "Esporta ADIF"
                implicitWidth: 116
                accentColor: Theme.primary
                onClicked: qsoLog.exportAdif()
            }
            GlassButton {
                text: "Chiudi"
                implicitWidth: 84
                onClicked: root.close()
            }
        }
    }
}
