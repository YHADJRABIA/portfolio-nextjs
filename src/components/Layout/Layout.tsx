import { ReactNode, useContext } from "react"
import Footer from "@/components/Layout/Footer"
import cn from "classnames"
import { ThemeContext } from "@/context/ThemeContext"
import Nav from "./Nav"

interface PropTypes {
  children: ReactNode
}

const Layout = ({ children }: PropTypes) => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <>
      <Nav />
      <main className={cn({ "dark-theme": isDarkTheme })}>{children}</main>
      <Footer color="white" isDarkTheme={isDarkTheme} />
    </>
  )
}

export default Layout
