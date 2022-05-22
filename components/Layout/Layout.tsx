import React, { FC } from "react"
import Footer from "../Footer/Footer"

// Global state
import { Provider } from "react-redux"
import store from "../../redux/store"
import { AuthProvider } from "../../context/UserContext"

const Layout: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <main>{children}</main>
        <Footer color="#fff" />
      </AuthProvider>
    </Provider>
  )
}

export default Layout
