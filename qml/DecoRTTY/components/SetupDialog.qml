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
    height: 520
    padding: 0

    background: GlassPanel { tintOpacity: 0.97 }

    contentItem: Column {
        spacing: 12

        Item { width: 1; height: 6 }

        PanelHeading {
            x: 16
            text: "STATION"
        }

        Row {
            x: 16
            spacing: 10

            QsoField {
                label: "MY CALL"
                width: 130
                text: macros.myCall
                highlight: true
                onEdited: (value) => macros.myCall = value
            }
            QsoField {
                label: "NAME"
                width: 130
                text: macros.myName
                onEdited: (value) => macros.myName = value
            }
            QsoField {
                label: "QTH"
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

        Row {
            x: 16
            width: parent.width - 32

            PanelHeading {
                anchors.verticalCenter: parent.verticalCenter
                text: "MACROS"
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
            height: root.height - 260
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
                text: "Restore defaults"
                implicitWidth: 140
                accentColor: Theme.warning
                onClicked: macros.resetToDefaults()
            }
            GlassButton {
                text: "Close"
                implicitWidth: 84
                onClicked: root.close()
            }
        }
    }
}
