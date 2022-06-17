import { ReactNode, useContext } from "react"
import Footer from "@/components/Layout/Footer"

import cn from "classnames"
import { ThemeContext } from "@/context/ThemeContext"
import Nav from "./Nav"

interface PropTypes {
  children: ReactNode
}

const Layout = ({ children }: PropTypes) => {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <>
      <Nav />
      <main className={cn({ "dark-theme": darkTheme })}>{children}</main>
      <Footer color="white" />
    </>
  )
}

export default Layout
