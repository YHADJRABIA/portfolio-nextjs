import { useEffect, useState } from "react"

interface KeyProp {
  key: string
}

// Returns true as long as the provided key is pressed down
const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: KeyProp) => {
    if (key === targetKey) setKeyPressed(true)
  }

  const upHandler = ({ key }: KeyProp) => {
    if (key === targetKey) setKeyPressed(false)
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)

    return () => {
      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
    }
  }, [])

  return keyPressed
}
export default useKeyPress
