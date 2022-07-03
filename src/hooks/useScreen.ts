import { isClient } from "@/utilities/general"
import { useState } from "react"
import { useEventListener } from "./useEventListener"
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

// Returns window.screen object — this also get updated on screen resize
export const useScreen = () => {
  const getScreen = () => {
    return isClient && window.screen ? window.screen : undefined
  }

  const [screen, setScreen] = useState<Screen | undefined>(getScreen())

  const handleSize = () => setScreen(getScreen())

  useEventListener("resize", handleSize)

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  return screen
}
