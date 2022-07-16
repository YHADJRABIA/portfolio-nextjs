import { createElement, ReactNode } from "react"
import { Tag, TextAlign } from "@/types/ui"

interface PropTypes {
  as?: Tag
  children?: ReactNode
  className?: string
  align?: TextAlign
}

const Typography = ({ as = "p", children, className, ...props }: PropTypes) => {
  return createElement(
    as,
    {
      className: `${className}`,
      ...props,
    },
    children
  )
}

export default Typography
