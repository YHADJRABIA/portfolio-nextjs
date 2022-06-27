import { useEffect, useState } from "react"

const DEFAULT_DEBOUNCE_TIME = 500 // in ms

// Limits the rate at which a callback is called, to prevent application lag due to too many re-renders.
export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(value),
      delay || DEFAULT_DEBOUNCE_TIME
    )

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
