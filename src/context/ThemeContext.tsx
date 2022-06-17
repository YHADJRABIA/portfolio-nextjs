import { createContext, ReactNode, useState, useEffect } from "react"

type themeContextType = {
  darkTheme: boolean
  toggleDarkTheme: () => void
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
  const isReturningUser = "dark-theme" in localStorage // Returns true if user already used the website.
  const savedMode = localStorage.getItem("dark-theme") === "true"
  const userPrefersDark = getPrefColorScheme() // Gets user's colour preference.

  // If mode was saved ► return saved mode else get user's general preference.
  return isReturningUser ? savedMode : !!userPrefersDark
}

export const ThemeContext = createContext<themeContextType>(
  {} as themeContextType
)

export const ThemeProvider = ({ children }: Props) => {
  // The server doesn't have a localStorage so we need to ensure that we are on the browser (window)
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  // Getting theme from local storage
  useEffect(() => setDarkTheme(getInitialMode), [])

  // Prefered theme stored in local storage
  useEffect(() => {
    localStorage.setItem("dark-theme", JSON.stringify(darkTheme))
  }, [darkTheme])

  const toggleDarkTheme = () => setDarkTheme(!darkTheme)

  return (
    <ThemeContext.Provider value={{ darkTheme: darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
