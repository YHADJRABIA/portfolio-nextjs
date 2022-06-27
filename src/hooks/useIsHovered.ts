import { RefObject, useState } from "react"

import { useEventListener } from "./useEventListener"

// Returns true as long as mouse is hovered over referenced HTML element
export const useHover = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
): boolean => {
  const [value, setValue] = useState(false)

  const handleMouseEnter = () => setValue(true)
  const handleMouseLeave = () => setValue(false)

  useEventListener("mouseenter", handleMouseEnter, elementRef)
  useEventListener("mouseleave", handleMouseLeave, elementRef)

  return value
}
