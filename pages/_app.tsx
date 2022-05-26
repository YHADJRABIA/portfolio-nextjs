// Styles
import "react-toastify/dist/ReactToastify.css"
import "../styles/app.scss"

// React & Next hooks
import React, { useEffect } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

// Global state
import { Provider } from "react-redux"
import store from "../redux/store"
/* import { AuthProvider } from "../context/UserContext"; */
import { ThemeProvider } from "../context/ThemeContext"

import * as gtag from "../lib/gtag" // Google Analytics

// Components
import { ToastContainer } from "react-toastify"
import Layout from "../components/Layout/Layout"
import Footer from "../components/Footer/Footer"
import { isProduction } from "../utilities/general"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* Analytics for production only */
      if (isProduction) gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  // Applying different layouts depending on page
  switch (Component.name) {
    case "HomePage":
      return (
        <Provider store={store}>
          <ThemeProvider>
            <ToastContainer />
            <Component {...pageProps} />
            <Footer color="fff" />
          </ThemeProvider>
        </Provider>
      )
    case "PageNotFound":
      return (
        <>
          <Component {...pageProps} />
          <Footer color="#f2f2f5" />
        </>
      )

    default:
      return (
        <Provider store={store}>
          <ThemeProvider>
            <Layout>
              <ToastContainer />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      )
  }
}
export default MyApp
