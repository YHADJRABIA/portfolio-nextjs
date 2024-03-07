import { Locale } from "./locales"

export type ContextProps = {
  locale: Locale
  preview: boolean
}

export interface DarkTheme {
  isDarkTheme: boolean
}
