import "react-toastify/dist/ReactToastify.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag"; // Google Analytics

// Components
import { ToastContainer } from "react-toastify";
import Layout from "../components/Layout";
import Footer from "../components/Footer/Footer";

const isProduction = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* Use analytics only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Applying different layouts depending on page
  switch (Component.name) {
    case "HomePage":
      return (
        <>
          <ToastContainer />
          <Component {...pageProps} />
          <Footer color="fff" />
        </>
      );
    case "PageNotFound":
      return (
        <>
          <Component {...pageProps} />
          <Footer color="#f2f2f5" />
        </>
      );

    default:
      return (
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      );
  }
}
export default MyApp;
