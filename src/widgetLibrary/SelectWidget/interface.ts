import { SelectProps } from "@illa-design/select"
import { ValidateMessageProps } from "@/widgetLibrary/PublicSector/InvalidMessage/interface"

export interface WrappedSelectProps
  extends Omit<ValidateMessageProps, "value">,
    Pick<
      SelectProps,
      | "options"
      | "value"
      | "placeholder"
      | "disabled"
      | "loading"
      | "readOnly"
      | "showSearch"
      | "inputValue"
      | "colorScheme"
    > {
  optionConfigureMode?: "dynamic" | "static"
  showClear?: SelectProps["allowClear"]
  invalid?: boolean
  prefixIcon?: string // TODO: not support yet
  suffixIcon?: string // TODO: not support yet
  prefixText?: string // TODO: not support yet
  suffixText?: string // TODO: not support yet
  handleUpdateDsl: (value: Record<string, any>) => void
}
