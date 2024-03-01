import SwitchWidgetIcon from "@/assets/widgetCover/switch.svg?react"
import i18n from "@/i18n/config"
import { RESIZE_DIRECTION, WidgetConfig } from "@/widgetLibrary/interface"

export const SWITCH_WIDGET_CONFIG: WidgetConfig = {
  displayName: "switch",
  widgetName: i18n.t("widget.switch.name"),
  h: 3,
  w: 5,
  type: "SWITCH_WIDGET",
  icon: <SwitchWidgetIcon />,
  keywords: ["Switch", "开关"],
  sessionType: "SELECT",
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  version: 0,
  defaults: {
    label: "Label",
    labelAlign: "left",
    labelPosition: "left",
    labelWidth: "{{33}}",
    labelFull: "{{true}}",
  },
}