import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import useTranslation from "next-translate/useTranslation"
import styles from "./ThemeToggler.module.scss"

const ThemeToggler = () => {
  const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext)
  const { t } = useTranslation("common")

  return (
    <div className={styles.themeToggler}>
      <i
        className={`fas ${isDarkTheme ? "fa-sun" : "fa-moon"}`}
        data-testid="dark-theme"
        title={t("navNames.theme")}
        onClick={toggleDarkTheme}
      ></i>
    </div>
  )
}

export default ThemeToggler
