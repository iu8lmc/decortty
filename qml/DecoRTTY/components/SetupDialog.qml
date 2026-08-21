// DecoRTTY — station details and macro editing.
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
    width: 620
    height: 590
    padding: 0

    background: GlassPanel { tintOpacity: 0.97 }

    contentItem: Column {
        spacing: 12

        Item { width: 1; height: 6 }

        // ── lingua ──────────────────────────────────────────────────────
        //
        // In cima e non in fondo: chi apre questa finestra perche' non capisce
        // quello che c'e' scritto deve trovarla subito, e i nomi delle lingue
        // sono scritti ciascuno nella propria — cercare "Deutsch" in un elenco
        // che dice "German" e' un ostacolo proprio per chi ha piu' bisogno.
        Row {
            x: 16
            spacing: 10

            PanelHeading {
                anchors.verticalCenter: parent.verticalCenter
                text: qsTr("LANGUAGE")
            }

            ComboBox {
                anchors.verticalCenter: parent.verticalCenter
                width: 190
                height: 30
                font.pixelSize: 12
                model: language.available
                textRole: "name"
                valueRole: "code"
                currentIndex: {
                    for (let i = 0; i < model.length; ++i)
                        if (model[i].code === language.current)
                            return i
                    return 0
                }
                onActivated: language.current = currentValue
            }

            Text {
                anchors.verticalCenter: parent.verticalCenter
                text: qsTr("changes immediately")
                color: Theme.textSecondary
                font.pixelSize: 10
            }
        }

        Rectangle {
            x: 16
            width: parent.width - 32
            height: 1
            color: Theme.glassBorder
        }

        PanelHeading {
            x: 16
            text: qsTr("STATION")
        }

        Row {
            x: 16
            spacing: 10

            QsoField {
                label: qsTr("MY CALL")
                width: 130
                text: macros.myCall
                highlight: true
                onEdited: (value) => macros.myCall = value
            }
            QsoField {
                label: qsTr("NAME")
                width: 130
                text: macros.myName
                onEdited: (value) => macros.myName = value
            }
            QsoField {
                label: qsTr("QTH")
                width: 160
                text: macros.myQth
                onEdited: (value) => macros.myQth = value
            }
        }

        Rectangle {
            x: 16
            width: parent.width - 32
            height: 1
            color: Theme.glassBorder
        }

        // ── come presentarsi a un FlexRadio ─────────────────────────────
        //
        // Di norma lo decide da se': guarda chi e' gia' collegato e, se c'e'
        // una stazione GUI, si lega a quella senza occupare un posto MultiFlex.
        // Ma l'automatismo vede solo quello che la radio racconta, e se il
        // legame riesce senza portare nessuna slice si resta collegati e
        // ciechi. Da qui lo si obbliga.
        PanelHeading {
            x: 16
            text: qsTr("FLEXRADIO")
        }

        Row {
            x: 16
            spacing: 6

            GlassButton {
                text: qsTr("BY ITSELF")
                armed: radio.flexRole === 0
                minimumWidth: 110
                implicitHeight: 26
                font.pixelSize: 11
                onClicked: radio.flexRole = 0
                ToolTip.visible: hovered
                ToolTip.delay: 700
                ToolTip.text: qsTr("Binds to the station already on the radio when there
is one, and takes the GUI role when the radio is free.")
            }
            GlassButton {
                text: qsTr("GUI STATION")
                armed: radio.flexRole === 1
                accentColor: Theme.primary
                minimumWidth: 130
                implicitHeight: 26
                font.pixelSize: 11
                onClicked: radio.flexRole = 1
                ToolTip.visible: hovered
                ToolTip.delay: 700
                ToolTip.text: qsTr("Owns its own slices, so frequency and tuning always
work — at the cost of one of the two MultiFlex seats.")
            }
            GlassButton {
                text: qsTr("SECOND CLIENT")
                armed: radio.flexRole === 2
                accentColor: Theme.secondary
                minimumWidth: 140
                implicitHeight: 26
                font.pixelSize: 11
                onClicked: radio.flexRole = 2
                ToolTip.visible: hovered
                ToolTip.delay: 700
                ToolTip.text: qsTr("Reads the slices of the station that already has the
radio, without taking a seat. If the radio shows none,
DecoRTTY goes back to being a GUI station by itself.")
            }
        }

        Text {
            x: 16
            width: parent.width - 32
            wrapMode: Text.WordWrap
            text: qsTr("Takes effect at the next connection.")
            color: Theme.textSecondary
            font.pixelSize: 10
        }

        Rectangle {
            x: 16
            width: parent.width - 32
            height: 1
            color: Theme.glassBorder
        }

        Row {
            x: 16
            width: parent.width - 32

            PanelHeading {
                anchors.verticalCenter: parent.verticalCenter
                text: qsTr("MACROS")
            }
            Item { width: parent.width - 300; height: 1 }
            Text {
                anchors.verticalCenter: parent.verticalCenter
                text: "%MYCALL% %HISCALL% %RST% %NAME% %QTH% %SERIAL% %TIME% %DATE%"
                color: Theme.textSecondary
                font.pixelSize: 9
                font.family: Theme.monoFamily
            }
        }

        ListView {
            x: 12
            width: parent.width - 24
            height: root.height - 330
            clip: true
            spacing: 5
            model: macros

            delegate: Row {
                required property int index
                required property string label
                required property string macroTemplate

                width: ListView.view.width
                spacing: 6

                Rectangle {
                    width: 96
                    height: 30
                    radius: 6
                    color: Qt.rgba(Theme.bgDeep.r, Theme.bgDeep.g, Theme.bgDeep.b, 0.85)
                    border.color: Theme.glassBorder

                    TextInput {
                        id: labelInput
                        anchors.fill: parent
                        anchors.margins: 7
                        verticalAlignment: TextInput.AlignVCenter
                        text: label
                        color: Theme.textPrimary
                        font.pixelSize: 12
                        selectByMouse: true
                        onEditingFinished: macros.setMacro(index, text, macroTemplate)
                    }
                }

                Rectangle {
                    width: parent.width - 108
                    height: 30
                    radius: 6
                    color: Qt.rgba(Theme.bgDeep.r, Theme.bgDeep.g, Theme.bgDeep.b, 0.85)
                    border.color: templateInput.activeFocus ? Theme.secondary : Theme.glassBorder

                    TextInput {
                        id: templateInput
                        anchors.fill: parent
                        anchors.margins: 7
                        verticalAlignment: TextInput.AlignVCenter
                        // CR and LF are real characters in a macro; showing them
                        // as escapes keeps the field editable in one line.
                        text: macroTemplate.replace(/\r/g, "\\r").replace(/\n/g, "\\n")
                        color: Theme.textPrimary
                        font.family: Theme.monoFamily
                        font.pixelSize: 12
                        selectByMouse: true
                        onEditingFinished: {
                            const expanded = text.replace(/\\r/g, "\r").replace(/\\n/g, "\n")
                            macros.setMacro(index, labelInput.text, expanded)
                        }
                    }
                }
            }
        }

        Row {
            x: 16
            spacing: 8

            GlassButton {
                text: qsTr("Restore defaults")
                minimumWidth: 140
                accentColor: Theme.warning
                onClicked: macros.resetToDefaults()
            }
            GlassButton {
                text: qsTr("Close")
                minimumWidth: 84
                onClicked: root.close()
            }
        }
    }
}
