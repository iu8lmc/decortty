// DecoRTTY — flat glass button with a distinct armed state.
import QtQuick
import QtQuick.Controls
import DecoRTTY

Button {
    id: root

    // `armed` marks a control that is currently doing something — transmitting,
    // connected, recording. It reads at a glance across the room, which matters
    // when the alternative is transmitting without noticing.
    property bool  armed: false
    property color accentColor: Theme.primary
    property int   cornerRadius: 8

    // La larghezza minima: quella che i pannelli chiedono per allineare le
    // colonne. Il pulsante non scende mai sotto, ma cresce se il testo tradotto
    // e' piu' lungo — meglio una fila un po' piu' larga che una parola tagliata.
    property int minimumWidth: 72

    implicitHeight: 32
    implicitWidth: Math.max(minimumWidth, contentText.implicitWidth + 22)
    font.pixelSize: 13

    contentItem: Text {
        id: contentText
        text: root.text
        font: root.font
        color: root.enabled ? (root.armed ? Theme.bgDeep : Theme.textPrimary)
                            : Theme.textSecondary
        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter
        elide: Text.ElideRight
    }

    background: Rectangle {
        radius: root.cornerRadius
        color: {
            if (!root.enabled)
                return Qt.rgba(Theme.bgLight.r, Theme.bgLight.g, Theme.bgLight.b, 0.35)
            if (root.armed)
                return root.accentColor
            if (root.pressed)
                return Qt.rgba(root.accentColor.r, root.accentColor.g, root.accentColor.b, 0.45)
            if (root.hovered)
                return Qt.rgba(root.accentColor.r, root.accentColor.g, root.accentColor.b, 0.25)
            return Theme.glassOverlay
        }
        border.color: root.armed ? root.accentColor : Theme.glassBorder
        border.width: 1

        Behavior on color { ColorAnimation { duration: 140 } }
    }
}
