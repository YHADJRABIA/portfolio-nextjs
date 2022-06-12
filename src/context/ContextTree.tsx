// Global state
/* import { AuthProvider } from "@/context/UserContext"; */
import { ThemeProvider } from "@/context/ThemeContext"
import store from "@/redux/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"

interface PropTypes {
  children: ReactNode
}

// TODO: Wrap with StrapiApolloProvider when Strapi is deployed
const ContextTree = ({ children }: PropTypes) => {
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
