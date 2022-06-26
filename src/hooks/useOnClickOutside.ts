import { RefObject } from "react"

import useEventListener from "./useEventListener"

type Handler = (event: MouseEvent) => void

// Calls a handler function whenever the referenced HTML element is clicked outside of
// Requires a ref to the element to listen to
function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
  useEventListener(mouseEvent, event => {
    const el = ref?.current

    // Do nothing if referenced element or its children are clicked
    if (!el || el.contains(event.target as Node)) return

    handler(event)
  })
}

export default useOnClickOutside
