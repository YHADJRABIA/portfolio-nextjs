import { useEffect, useState } from "react"

interface KeyProp {
  key: string
}

// TODO: Make type sturdier — targetKey should be a single letter instead of a string

// Returns true as long as the provided key is pressed down
export const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false)

  const keyHandler = ({ key }: KeyProp) => {
    const keyIsPressed = key.toLowerCase() === targetKey.toLowerCase() // True if pressed, false if released
    setKeyPressed(keyIsPressed)
  }


  useEffect(() => {
    window.addEventListener("keydown", keyHandler)
    window.addEventListener("keyup", keyHandler)

    return () => {
      window.removeEventListener("keydown", keyHandler)
      window.removeEventListener("keyup", keyHandler)
    }
  }, [])

  return keyPressed
}
