import { useState } from "react"

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success

/**
 * Copies referenced text to browser's clipboard
 */
export const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = async text => {
    // If browser doesn't support clipboard API
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported")
      return false
    }

    // Attempts to save text to clipboard then – if succesfully saved – in component's state
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn("Copy failed", error)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}
