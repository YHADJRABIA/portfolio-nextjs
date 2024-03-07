import { isClient } from "@/utilities/general"
import { useEffect, useLayoutEffect } from "react"

// Returns useLayoutEffect if on browser or useEffect if on server
export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect
