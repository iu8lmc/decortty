// DecoRTTY — a slider that shows its value where you are already looking.
import QtQuick
import QtQuick.Controls
import DecoRTTY

Column {
    id: root

    property string label: ""
    property string suffix: ""
    property real   from: 0
    property real   to: 100
    property real   stepSize: 1
    property real   value: 0
    property int    decimals: 0

    signal moved(real value)

    spacing: 2

    Row {
        width: parent.width

        Text {
            text: root.label
            color: Theme.textSecondary
            font.pixelSize: 11
        }
        Item { width: parent.width - 150; height: 1 }
        Text {
            text: root.value.toFixed(root.decimals) + root.suffix
            color: Theme.textPrimary
            font.pixelSize: 11
            font.family: Theme.monoFamily
        }
    }

    Slider {
        id: slider
        width: parent.width
        height: 18
        from: root.from
        to: root.to
        stepSize: root.stepSize
        value: root.value

        onMoved: root.moved(value)

        background: Rectangle {
            x: slider.leftPadding
            y: slider.topPadding + slider.availableHeight / 2 - height / 2
            width: slider.availableWidth
            height: 3
            radius: 1.5
            color: Qt.rgba(Theme.bgDeep.r, Theme.bgDeep.g, Theme.bgDeep.b, 0.9)

            Rectangle {
                width: slider.visualPosition * parent.width
                height: parent.height
                radius: 1.5
                color: Theme.primary
            }
        }

        handle: Rectangle {
            x: slider.leftPadding + slider.visualPosition * (slider.availableWidth - width)
            y: slider.topPadding + slider.availableHeight / 2 - height / 2
            width: 12
            height: 12
            radius: 6
            color: slider.pressed ? Theme.secondary : Theme.textPrimary
            border.color: Theme.primary
            border.width: 1
        }
    }
}
