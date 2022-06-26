import { useEffect, useState } from "react"

// Equivalent to testing if typeof window !== "undefined"
// Used to prevent errors when running on the server

export const useIsClient = (): boolean => {
  const [isClient, setClient] = useState(false)

  useEffect(() => setClient(true), [])

  return isClient
}
