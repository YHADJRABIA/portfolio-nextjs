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
          <Nav />
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      );
  }
}
export default MyApp;
