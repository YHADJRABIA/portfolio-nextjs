import "react-toastify/dist/ReactToastify.css";
import "../styles/app.scss";

import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  // Applying different layouts depending on page
  switch (Component.name) {
    case "HomePage":
      return (
        <>
          <Header />
          <Nav />
          <ToastContainer />
          <Component {...pageProps} />
          <Footer />
        </>
      );
    case "PageNotFound":
      return (
        <>
          <Component {...pageProps} />
          <Footer />
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
