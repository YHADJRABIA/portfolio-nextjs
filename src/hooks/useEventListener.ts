import { RefObject, useEffect, useRef } from "react"

export const useEventListener = (
  eventName: string,
  handler: (event: MouseEvent) => void,
  element?: RefObject<HTMLElement>
) => {
  // Create a ref that stores handler
  const savedHandler = useRef<Function>()

  useEffect(() => {
    // Define the listening target
    const targetElement: HTMLElement | Window = element?.current || window
    if (!(targetElement && targetElement.addEventListener)) return

    // Update saved handler if necessary
    if (savedHandler.current !== handler) savedHandler.current = handler

    // Create event listener that calls handler function stored in ref
    const eventListener = (event: Event) => {
      if (savedHandler?.current) savedHandler.current(event)
    }

    targetElement.addEventListener(eventName, eventListener)

    // Remove listener on unmount
    return () => targetElement.removeEventListener(eventName, eventListener)
  }, [eventName, element, handler])
}
