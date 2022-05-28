// Global state
/* import { AuthProvider } from "@/context/UserContext"; */
import { ThemeProvider } from "@/context/ThemeContext"
import store from "@/redux/store"
import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"

interface PropsType {
  children: ReactNode
}

const ContextTree = ({ children }: PropsType) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ToastContainer />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default ContextTree
