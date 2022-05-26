declare global {
  interface Window {
    grecaptcha: { reset: () => void }
  }
}

export {}
