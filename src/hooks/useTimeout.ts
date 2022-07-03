import { useEffect, useRef } from "react"
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

// Shortcut for setTimeout and clearTimeout, callback function is executed after the delay
// Note that 0 is a valid delay value
export const useTimeout = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback)

  // Remembers latest callback if changed
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Setting up the timeout then clearing it on unmount
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (!delay && delay !== 0) return

    const id = setTimeout(() => savedCallback.current(), delay)

    return () => clearTimeout(id)
  }, [delay])
}
