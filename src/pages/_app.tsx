import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.scss"

import { useContext, useEffect } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

import * as gtag from "@/lib/gtag" // Google Analytics

import Layout from "@/components/Layout/Layout"
import { isProduction } from "@/utilities/general"
import ContextTree from "@/context/ContextTree"
import { ThemeContext } from "@/context/ThemeContext"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { isDarkTheme } = useContext(ThemeContext)

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
  switch (Component.displayName) {
    case "HomePage":
      return (
        <ContextTree>
          <Component {...pageProps} />
        </ContextTree>
      )

    case "PageNotFound":
      return <Component {...pageProps} />

    case "InternalServerError":
      return <Component {...pageProps} />

    default:
      return (
        <ContextTree>
          <Layout isDarkTheme={isDarkTheme}>
            <Component {...pageProps} />
          </Layout>
        </ContextTree>
      )
  }
}
export default MyApp
