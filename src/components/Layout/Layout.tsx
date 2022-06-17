import { FC } from "react"
import Footer from "@/components/Layout/Footer"

// Global state management
import ContextTree from "@/context/ContextTree"

const Layout: FC = ({ children }) => {
  return (
    <ContextTree>
      <main>{children}</main>
      <Footer color="white" />
    </ContextTree>
  )
}

export default Layout
