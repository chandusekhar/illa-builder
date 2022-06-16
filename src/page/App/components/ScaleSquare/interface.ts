import { HTMLAttributes } from "react"
import { ComponentNode } from "@/redux/currentApp/editor/components/componentsState"
import { BarPosition } from "@/page/App/components/ScaleSquare/style"

export type ScaleSquareType = "error" | "normal"

export interface ScaleSquareProps extends HTMLAttributes<HTMLDivElement> {
  componentNode: ComponentNode
  h: number
  w: number
  onClientXYChange: (
    clientX: number,
    clientY: number,
    barPosition: BarPosition,
  ) => void
}
