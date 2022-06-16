// Styles
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.scss"

// React & Next hooks
import { useEffect } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"

import * as gtag from "@/lib/gtag" // Google Analytics

import Layout from "@/components/Layout/Layout"
import { isProduction } from "@/utilities/general"

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
  switch (Component.displayName) {
    case "HomePage":
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
    case "PageNotFound":
      return <Component {...pageProps} />

    default:
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
  }
}
export default MyApp
