// DecoRTTY — main window.
import QtQuick
import QtQuick.Controls
import QtQuick.Layouts
import DecoRTTY
import DecoRTTY.components

ApplicationWindow {
    id: window

    // Sized against the screen rather than assumed: on a 200% display the
    // logical desktop is half what the pixel count suggests, and a window that
    // does not fit gets squeezed until the layout collapses on itself.
    width: Math.min(1360, Screen.desktopAvailableWidth - 60)
    height: Math.min(880, Screen.desktopAvailableHeight - 60)
    // A 200% display leaves roughly 960x490 logical points to work with, so the
    // floor has to fit that rather than what a desktop-sized screen offers.
    minimumWidth: 760
    minimumHeight: 440
    visible: true
    title: "DecoRTTY — " + (radio.connected ? radio.radioName : "not connected")
    color: Theme.bgDeep

    // A single quiet gradient behind everything, so the glass panels have
    // something to sit on rather than floating on flat black.
    Rectangle {
        anchors.fill: parent
        gradient: Gradient {
            GradientStop { position: 0.0; color: Theme.bgDeep }
            GradientStop { position: 0.55; color: Qt.darker(Theme.bgMedium, 1.25) }
            GradientStop { position: 1.0; color: Theme.bgDeep }
        }
    }

    header: HeaderBar {
        onRadioDialogRequested: radioDialog.open()
        onSettingsRequested: setupDialog.open()
        onLogRequested: logDialog.open()
    }

    // Il log si apre anche da tastiera: durante un contest la mano non lascia
    // la tastiera per andare a cercare un pulsante.
    Shortcut { sequence: "Ctrl+L"; onActivated: logDialog.open() }
    Shortcut { sequence: "Ctrl+R"; onActivated: radioDialog.open() }

    footer: StatusBar {}

    ColumnLayout {
        anchors.fill: parent
        anchors.margins: 8
        spacing: 8

        // ── spettro e testo a sinistra, strumenti a destra ──────────────
        //
        // La colonna degli strumenti corre per tutta l'altezza invece di stare
        // sotto il waterfall. Schiacciata li' sotto le restavano poche decine di
        // pixel, e i comandi del decodificatore si leggevano a meta': un elenco
        // tagliato, senza modo evidente di arrivare al resto.
        RowLayout {
            Layout.fillWidth: true
            Layout.fillHeight: true
            spacing: 10

            ColumnLayout {
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.minimumWidth: 320
                spacing: 8

                WaterfallPanel {
                    Layout.fillWidth: true
                    Layout.preferredHeight: Math.max(150, window.height * 0.26)
                    Layout.minimumHeight: 110
                }

                ReceivePanel {
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                    Layout.minimumHeight: 90
                }
            }

            ColumnLayout {
                Layout.preferredWidth: 258
                Layout.minimumWidth: 220
                Layout.maximumWidth: 300
                Layout.fillHeight: true
                spacing: 10

                TuningScope {
                    Layout.fillWidth: true
                    Layout.preferredHeight: Math.max(130, window.height * 0.18)
                    Layout.minimumHeight: 104
                }

                // Decoder e filtri condividono la colonna: si passa dall'uno
                // all'altro, perche' i filtri servono solo quando la banda e'
                // affollata e tenerli sempre a vista ruberebbe spazio al resto.
                TabBar {
                    id: sideTabs
                    Layout.fillWidth: true
                    Layout.preferredHeight: 26
                    background: null

                    Repeater {
                        model: [qsTr("DECODER"), qsTr("FILTERS")]
                        delegate: TabButton {
                            required property int index
                            required property string modelData
                            height: 26
                            contentItem: Text {
                                text: modelData
                                color: sideTabs.currentIndex === index ? Theme.accent
                                                                       : Theme.textSecondary
                                font.pixelSize: 10
                                font.bold: true
                                font.letterSpacing: 1.1
                                horizontalAlignment: Text.AlignHCenter
                                verticalAlignment: Text.AlignVCenter
                            }
                            background: Rectangle {
                                color: sideTabs.currentIndex === index
                                       ? Qt.rgba(Theme.accent.r, Theme.accent.g, Theme.accent.b, 0.15)
                                       : "transparent"
                                radius: 6
                                border.color: sideTabs.currentIndex === index
                                              ? Theme.accent : "transparent"
                                border.width: 1
                            }
                        }
                    }
                }

                StackLayout {
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                    currentIndex: sideTabs.currentIndex

                    DecoderPanel {}
                    FilterPanel {}
                }
            }
        }

        // ── transmit along the bottom ───────────────────────────────────
        TransmitPanel {
            Layout.fillWidth: true
            Layout.preferredHeight: 132
            Layout.minimumHeight: 104
        }
    }

    RadioDialog { id: radioDialog }
    SetupDialog { id: setupDialog }
    LogDialog   { id: logDialog }

    // Errors from anywhere in the stack surface in one place rather than being
    // logged where nobody reads them.
    Rectangle {
        id: toast

        property string message: ""

        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom: parent.bottom
        anchors.bottomMargin: 60
        width: Math.min(toastText.implicitWidth + 32, window.width - 80)
        height: 40
        radius: 8
        color: Qt.rgba(Theme.error.r, Theme.error.g, Theme.error.b, 0.92)
        opacity: 0
        visible: opacity > 0

        Text {
            id: toastText
            anchors.centerIn: parent
            text: toast.message
            color: "#FFFFFF"
            font.pixelSize: 12
            elide: Text.ElideRight
            width: Math.min(implicitWidth, window.width - 112)
        }

        SequentialAnimation {
            id: toastAnimation
            NumberAnimation { target: toast; property: "opacity"; to: 1.0; duration: 160 }
            PauseAnimation { duration: 4200 }
            NumberAnimation { target: toast; property: "opacity"; to: 0.0; duration: 400 }
        }

        function show(message) {
            toast.message = message
            toastAnimation.restart()
        }
    }

    Connections {
        target: radio
        function onErrorOccurred(message) { toast.show(message) }
    }

    // The engine has its own failures to report — a transmission that hit the
    // time limit, most importantly.
    Connections {
        target: rtty
        function onErrorOccurred(message) { toast.show(message) }
    }
}
