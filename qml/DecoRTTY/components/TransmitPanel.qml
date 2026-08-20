// DecoRTTY — transmit: macros, the type-ahead buffer and PTT.
//
// Typing goes on the air as it is entered, the way a teleprinter worked, but the
// buffer is always visible so the operator can see how far behind the
// transmitter is — at 45 baud a sentence takes several seconds to clear.
import QtQuick
import QtQuick.Controls
import DecoRTTY
import DecoRTTY.components

GlassPanel {
    id: root

    Column {
        anchors.fill: parent
        anchors.margins: 10
        spacing: 8

        // ── macro row ───────────────────────────────────────────────────
        Flow {
            width: parent.width
            spacing: 6

            Repeater {
                model: macros

                delegate: GlassButton {
                    required property int index
                    required property string label
                    required property string expanded

                    text: (index < 9 ? "F" + (index + 1) + "  " : "") + label
                    implicitHeight: 28
                    font.pixelSize: 11
                    accentColor: Theme.primary
                    enabled: radio.canTransmit
                    onClicked: rtty.transmitText(expanded)

                    ToolTip.visible: hovered
                    ToolTip.delay: 600
                    ToolTip.text: expanded
                }
            }
        }

        Rectangle {
            width: parent.width
            height: 1
            color: Theme.glassBorder
        }

        // ── type-ahead ──────────────────────────────────────────────────
        Row {
            width: parent.width
            spacing: 8

            Rectangle {
                width: parent.width - 210
                height: 52
                radius: 8
                color: Qt.rgba(Theme.bgMedium.r, Theme.bgMedium.g, Theme.bgMedium.b, 0.85)
                border.color: input.activeFocus ? Theme.secondary : Theme.glassBorder
                border.width: 1

                ScrollView {
                    anchors.fill: parent
                    anchors.margins: 8

                    TextArea {
                        id: input
                        placeholderText: radio.canTransmit
                                         ? qsTr("Type here — Enter sends the line")
                                         : qsTr("Connect a radio to transmit")
                        color: Theme.textPrimary
                        placeholderTextColor: Theme.textSecondary
                        font.family: Theme.monoFamily
                        font.pixelSize: 14
                        wrapMode: TextArea.Wrap
                        background: null
                        enabled: radio.canTransmit

                        Keys.onReturnPressed: (event) => {
                            // Shift+Enter inserts a line without sending, for
                            // composing a longer over before committing to it.
                            if (event.modifiers & Qt.ShiftModifier) {
                                input.insert(input.cursorPosition, "\n")
                                return
                            }
                            if (input.text.length > 0) {
                                rtty.transmitText(input.text + "\r\n")
                                input.clear()
                            }
                        }
                    }
                }
            }

            Column {
                spacing: 6

                GlassButton {
                    text: rtty.transmitting ? qsTr("TRANSMITTING") : qsTr("TRANSMIT")
                    armed: rtty.transmitting
                    accentColor: Theme.error
                    minimumWidth: 194
                    implicitHeight: 32
                    font.pixelSize: 13
                    font.bold: true
                    enabled: radio.canTransmit
                    onClicked: rtty.transmitting ? rtty.stopTransmit(false) : rtty.startTransmit()
                }

                Row {
                    spacing: 6

                    GlassButton {
                        text: qsTr("Abort")
                        accentColor: Theme.error
                        minimumWidth: 62
                        implicitHeight: 26
                        font.pixelSize: 11
                        enabled: rtty.transmitting
                        onClicked: rtty.abortTransmit()
                    }

                    GlassButton {
                        text: qsTr("Clear")
                        minimumWidth: 60
                        implicitHeight: 26
                        font.pixelSize: 11
                        onClicked: input.clear()
                    }

                    // How much is still waiting to go out.
                    Rectangle {
                        width: 54
                        height: 26
                        radius: 6
                        color: Theme.glassOverlay
                        border.color: Theme.glassBorder

                        Text {
                            anchors.centerIn: parent
                            text: rtty.transmitQueueLength + " ch"
                            color: rtty.transmitQueueLength > 0 ? Theme.warning : Theme.textSecondary
                            font.pixelSize: 11
                            font.family: Theme.monoFamily
                        }
                    }

                    // Transmit audio level. Set it so the radio's ALC barely
                    // moves: on AFSK an ALC that is acting is an ALC that is
                    // splattering the signal across the band.
                    Rectangle {
                        width: 74
                        height: 26
                        radius: 6
                        color: Theme.glassOverlay
                        border.color: Theme.glassBorder

                        Text {
                            anchors.left: parent.left
                            anchors.leftMargin: 7
                            anchors.verticalCenter: parent.verticalCenter
                            text: "LVL"
                            color: Theme.textSecondary
                            font.pixelSize: 9
                            font.bold: true
                        }

                        Text {
                            anchors.right: parent.right
                            anchors.rightMargin: 7
                            anchors.verticalCenter: parent.verticalCenter
                            text: Math.round(rtty.transmitLevel * 100)
                            color: rtty.transmitLevel > 0.6 ? Theme.warning : Theme.textPrimary
                            font.pixelSize: 11
                            font.family: Theme.monoFamily
                        }

                        MouseArea {
                            anchors.fill: parent
                            cursorShape: Qt.SizeVerCursor
                            // Drag up and down to set it, like a rig's own knob.
                            onWheel: (wheel) => {
                                const step = wheel.angleDelta.y > 0 ? 0.02 : -0.02
                                rtty.transmitLevel = rtty.transmitLevel + step
                            }
                            property real startY: 0
                            property real startLevel: 0
                            onPressed: (mouse) => { startY = mouse.y; startLevel = rtty.transmitLevel }
                            onPositionChanged: (mouse) => {
                                if (!pressed) return
                                rtty.transmitLevel = startLevel + (startY - mouse.y) * 0.01
                            }
                        }

                        ToolTip.visible: rtty.transmitLevel > 0.6
                        ToolTip.text: qsTr("High enough to drive the ALC — check the meter.")
                    }
                }
            }
        }
    }

    // Function keys fire macros, which is how every RTTY program works and what
    // an operator's hands already expect.
    Shortcut { sequence: "F1"; onActivated: root.fireMacro(0) }
    Shortcut { sequence: "F2"; onActivated: root.fireMacro(1) }
    Shortcut { sequence: "F3"; onActivated: root.fireMacro(2) }
    Shortcut { sequence: "F4"; onActivated: root.fireMacro(3) }
    Shortcut { sequence: "F5"; onActivated: root.fireMacro(4) }
    Shortcut { sequence: "F6"; onActivated: root.fireMacro(5) }
    Shortcut { sequence: "F7"; onActivated: root.fireMacro(6) }
    Shortcut { sequence: "F8"; onActivated: root.fireMacro(7) }
    Shortcut { sequence: "Esc"; onActivated: rtty.abortTransmit() }

    function fireMacro(index) {
        if (!radio.canTransmit)
            return
        // expandAt returns an empty string for a row that does not exist, so
        // there is no need to ask the model how many macros it holds.
        const text = macros.expandAt(index)
        if (text.length > 0)
            rtty.transmitText(text)
    }
}
