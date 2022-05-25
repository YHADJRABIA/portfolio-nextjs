import { createContext, ReactNode, useState, useEffect } from "react"

type themeContextType = {
  darkMode: boolean | null
  toggleDarkMode: () => void
}

type Props = {
  children: ReactNode
}

// Checks for user's preference.
const getPrefColorScheme = () => {
  return !window.matchMedia
    ? null
    : window.matchMedia("(prefers-color-scheme: dark)").matches
}

// Gets previously stored theme if it exists.
const getInitialMode = () => {
  const isReturningUser = "dark-mode" in localStorage // Returns true if user already used the website.
  const savedMode = localStorage.getItem("dark-mode") === "true"
  const userPrefersDark = getPrefColorScheme() // Gets user's colour preference.

  // If mode was saved ► return saved mode else get user's general preference.
  return isReturningUser ? savedMode : !!userPrefersDark
}

export const ThemeContext = createContext<themeContextType>(
  {} as themeContextType
)

export const ThemeProvider = ({ children }: Props) => {
  // The server doesn't have a localStorage so we need to ensure that we are on the browser (window)
  const [darkMode, setDarkMode] = useState<boolean | null>(null)

  // Getting theme from local storage
  useEffect(() => setDarkMode(getInitialMode), [])

  // Prefered theme stored in local storage
  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
