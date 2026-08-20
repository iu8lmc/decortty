// DecoRTTY — choose a radio.
//
// The list is whatever answered the discovery broadcast. A radio already in use
// by another client is still offered: FlexRadio's MultiFlex lets a second client
// share it, and refusing to show it would hide a perfectly workable setup.
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
    width: 520
    height: 470
    padding: 0

    background: GlassPanel {
        tintOpacity: 0.97
    }

    // Il pannello si apre solo se chiesto: nell'uso normale il gateway parte da
    // solo all'avvio e non c'e' niente da guardare.
    property bool showGateway: false

    contentItem: Column {
        spacing: 10

        Item { width: 1; height: 4 }

        // ── gateway locale ───────────────────────────────────────────────
        Rectangle {
            x: 12
            width: parent.width - 24
            height: root.showGateway ? 118 : 38
            radius: 8
            color: Theme.glassOverlay
            border.color: Theme.glassBorder
            clip: true

            Behavior on height { NumberAnimation { duration: 140; easing.type: Easing.OutCubic } }

            Row {
                id: gwHeader
                anchors.left: parent.left
                anchors.leftMargin: 12
                anchors.right: parent.right
                anchors.rightMargin: 12
                anchors.top: parent.top
                anchors.topMargin: 9
                spacing: 8

                Rectangle {
                    anchors.verticalCenter: parent.verticalCenter
                    width: 8; height: 8; radius: 4
                    // Verde solo quando comanda davvero la radio; ambra quando
                    // e' in piedi ma senza CAT, che e' meta' del mestiere.
                    color: !gateway.enabled ? Theme.textSecondary
                         : gateway.catOnline ? Theme.success
                         : gateway.running   ? Theme.warning
                                             : Theme.error
                }
                Text {
                    anchors.verticalCenter: parent.verticalCenter
                    text: "GATEWAY FT-991A"
                    color: Theme.textPrimary
                    font.pixelSize: 11
                    font.bold: true
                    font.letterSpacing: 1
                }
                Text {
                    anchors.verticalCenter: parent.verticalCenter
                    text: gateway.status
                    color: Theme.textSecondary
                    font.pixelSize: 10
                    width: Math.max(0, parent.width - 268)
                    elide: Text.ElideRight
                }
                GlassButton {
                    anchors.verticalCenter: parent.verticalCenter
                    text: gateway.enabled ? "attivo" : "spento"
                    armed: gateway.enabled
                    accentColor: Theme.success
                    implicitWidth: 62
                    implicitHeight: 22
                    font.pixelSize: 10
                    onClicked: gateway.enabled = !gateway.enabled
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Se attivo, il gateway si apre all'avvio e si\n"
                                  + "chiude con il programma. Spegnilo se la radio\n"
                                  + "e' su un altro PC."
                }
                GlassButton {
                    anchors.verticalCenter: parent.verticalCenter
                    text: root.showGateway ? "chiudi" : "regola"
                    implicitWidth: 58
                    implicitHeight: 22
                    font.pixelSize: 10
                    onClicked: {
                        root.showGateway = !root.showGateway
                        if (root.showGateway)
                            gateway.refreshDevices()
                    }
                }
            }

            Grid {
                anchors.top: gwHeader.bottom
                anchors.topMargin: 10
                anchors.left: parent.left
                anchors.leftMargin: 12
                columns: 4
                columnSpacing: 8
                rowSpacing: 6
                visible: root.showGateway

                Text {
                    anchors.verticalCenter: undefined
                    text: "CAT"
                    color: Theme.textSecondary
                    font.pixelSize: 10
                    height: 26
                    verticalAlignment: Text.AlignVCenter
                }
                ComboBox {
                    width: 150
                    height: 26
                    font.pixelSize: 11
                    editable: true
                    model: gateway.serialPorts
                    editText: gateway.catPort
                    // Nella lista la porta e' seguita dalla descrizione del
                    // dispositivo; al gateway va solo il nome.
                    onActivated: gateway.catPort = currentText.split("  ")[0]
                    onAccepted: gateway.catPort = editText.trim()
                }

                Text {
                    text: "Audio in"
                    color: Theme.textSecondary
                    font.pixelSize: 10
                    height: 26
                    verticalAlignment: Text.AlignVCenter
                }
                ComboBox {
                    width: 200
                    height: 26
                    font.pixelSize: 11
                    editable: true
                    model: gateway.captureDevices
                    editText: gateway.audioIn
                    onActivated: gateway.audioIn = currentText
                    onAccepted: gateway.audioIn = editText.trim()
                }

                GlassButton {
                    text: "Riavvia"
                    implicitWidth: 70
                    implicitHeight: 26
                    font.pixelSize: 10
                    accentColor: Theme.warning
                    enabled: gateway.enabled
                    onClicked: gateway.restart()
                    ToolTip.visible: hovered
                    ToolTip.delay: 700
                    ToolTip.text: "Da usare dopo aver cambiato porta o dispositivo."
                }
                Item { width: 80; height: 26 }

                Text {
                    text: "Audio out"
                    color: Theme.textSecondary
                    font.pixelSize: 10
                    height: 26
                    verticalAlignment: Text.AlignVCenter
                }
                ComboBox {
                    width: 200
                    height: 26
                    font.pixelSize: 11
                    editable: true
                    model: gateway.playbackDevices
                    editText: gateway.audioOut
                    onActivated: gateway.audioOut = currentText
                    onAccepted: gateway.audioOut = editText.trim()
                }
            }
        }

        Row {
            x: 16
            width: parent.width - 32
            spacing: 10

            PanelHeading {
                text: "RADIOS ON THE NETWORK"
                anchors.verticalCenter: parent.verticalCenter
            }

            Item { width: parent.width - 320; height: 1 }

            BusyIndicator {
                anchors.verticalCenter: parent.verticalCenter
                width: 16; height: 16
                running: radio.discovering && listView.count === 0
            }

            Text {
                anchors.verticalCenter: parent.verticalCenter
                text: listView.count + " found"
                color: Theme.textSecondary
                font.pixelSize: 10
            }
        }

        ListView {
            id: listView
            x: 12
            width: parent.width - 24
            height: root.height - 168 - (root.showGateway ? 122 : 42)
            clip: true
            spacing: 5
            model: radio.radioList

            delegate: Rectangle {
                required property var modelData

                width: listView.width
                height: 58
                radius: 8
                color: mouse.containsMouse
                       ? Qt.rgba(Theme.primary.r, Theme.primary.g, Theme.primary.b, 0.25)
                       : Theme.glassOverlay
                border.color: mouse.containsMouse ? Theme.primary : Theme.glassBorder
                border.width: 1

                Behavior on color { ColorAnimation { duration: 120 } }

                Column {
                    anchors.left: parent.left
                    anchors.leftMargin: 12
                    anchors.verticalCenter: parent.verticalCenter
                    spacing: 2

                    Text {
                        text: modelData.name
                        color: Theme.textPrimary
                        font.pixelSize: 14
                        font.bold: true
                    }
                    Text {
                        text: modelData.model + "  ·  " + modelData.address
                              + "  ·  v" + modelData.version
                        color: Theme.textSecondary
                        font.pixelSize: 10
                        font.family: Theme.monoFamily
                    }
                }

                // Says how this radio is reached. A gateway is an FT-991A on the
                // far end of a USB cable, not a network SDR, and the operator
                // should be able to see which is which.
                Rectangle {
                    visible: modelData.gateway || modelData.inUse
                    anchors.right: parent.right
                    anchors.rightMargin: 12
                    anchors.verticalCenter: parent.verticalCenter
                    width: inUseText.width + 14
                    height: 20
                    radius: 10
                    color: modelData.gateway
                           ? Qt.rgba(Theme.secondary.r, Theme.secondary.g, Theme.secondary.b, 0.2)
                           : Qt.rgba(Theme.warning.r, Theme.warning.g, Theme.warning.b, 0.2)
                    border.color: modelData.gateway ? Theme.secondary : Theme.warning
                    border.width: 1

                    Text {
                        id: inUseText
                        anchors.centerIn: parent
                        text: modelData.gateway ? "gateway" : "MultiFlex"
                        color: modelData.gateway ? Theme.secondary : Theme.warning
                        font.pixelSize: 9
                        font.bold: true
                    }
                }

                MouseArea {
                    id: mouse
                    anchors.fill: parent
                    hoverEnabled: true
                    onClicked: {
                        radio.connectToRadio(modelData.serial)
                        root.close()
                    }
                }
            }

            // Empty state that says what to check, rather than an empty box.
            Column {
                anchors.centerIn: parent
                visible: listView.count === 0
                spacing: 6

                Text {
                    anchors.horizontalCenter: parent.horizontalCenter
                    text: "No radio has answered yet"
                    color: Theme.textSecondary
                    font.pixelSize: 13
                }
                Text {
                    anchors.horizontalCenter: parent.horizontalCenter
                    text: "Radios announce themselves on UDP 4992.\n"
                          + "Check the radio is on the same subnet, or enter its address below."
                    color: Theme.textSecondary
                    font.pixelSize: 10
                    horizontalAlignment: Text.AlignHCenter
                    opacity: 0.75
                }
            }
        }

        // ── manual entry, for a routed or VPN connection ─────────────────
        Row {
            x: 12
            width: parent.width - 24
            spacing: 8

            Rectangle {
                width: parent.width - 268
                height: 32
                radius: 6
                color: Qt.rgba(Theme.bgDeep.r, Theme.bgDeep.g, Theme.bgDeep.b, 0.85)
                border.color: manualInput.activeFocus ? Theme.secondary : Theme.glassBorder
                border.width: 1

                TextInput {
                    id: manualInput
                    anchors.fill: parent
                    anchors.margins: 8
                    verticalAlignment: TextInput.AlignVCenter
                    color: Theme.textPrimary
                    font.family: Theme.monoFamily
                    font.pixelSize: 13
                    selectByMouse: true

                    Text {
                        anchors.fill: parent
                        verticalAlignment: Text.AlignVCenter
                        visible: manualInput.text.length === 0
                        text: "192.168.1.50"
                        color: Theme.textSecondary
                        font: manualInput.font
                        opacity: 0.5
                    }
                }
            }

            GlassButton {
                id: gatewayToggle
                text: "gateway"
                // An address alone cannot say whether it is a FlexRadio or a
                // gateway, so the operator does.
                armed: false
                accentColor: Theme.secondary
                implicitWidth: 76
                implicitHeight: 32
                font.pixelSize: 11
                onClicked: armed = !armed
            }

            GlassButton {
                text: "Connect"
                implicitWidth: 84
                implicitHeight: 32
                accentColor: Theme.success
                enabled: manualInput.text.length > 0
                onClicked: {
                    radio.connectToAddress(manualInput.text, gatewayToggle.armed)
                    root.close()
                }
            }

            GlassButton {
                text: "Close"
                implicitWidth: 74
                implicitHeight: 32
                onClicked: root.close()
            }
        }

        Item { width: 1; height: 4 }
    }
}
