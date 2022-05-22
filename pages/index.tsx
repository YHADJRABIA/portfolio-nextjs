import type { NextPage } from "next"

// Next tags
import Head from "next/head" // For better SEO

// Components
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Header from "../components/Header/Header"
import Nav from "../components/Header/Nav"

// Theme
import { ThemeContext } from "../context/ThemeContext"

// SVG
import SeparatorSVG from "../resources/SeparatorSVG" // Wave separating sections

import useTranslation from "next-translate/useTranslation" // Translation
import { useContext } from "react"

declare global {
  interface Window {
    grecaptcha: any
  }
}

const HomePage: NextPage = () => {
  const { t } = useTranslation("meta")

  const { darkMode } = useContext(ThemeContext)

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta
          name="keywords"
          content="Yacine Hadj Rabia, portfolio, ReactJS, NodeJS, NextJS, TypeScript, JavaScript, Sass"
        />
        <meta name="author" content="Yacine Hadj Rabia" />

        {/* Open Graph */}

        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/yhr-mern-app/image/upload/v1633269542/projects/N%C3%A4kten_qg7vym.jpg"
        />
        <meta property="og:url" content="https://yhadjrabia.vercel.app/" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Header />
      <Nav />
      <main className={darkMode ? "dark-mode" : ""}>
        <About />
        <SeparatorSVG
          darkMode={darkMode}
          d="M0,256L60,229.3C120,203,240,149,360,154.7C480,160,600,224,720,240C840,256,960,224,1080,208C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
        <Skills />
        <SeparatorSVG
          darkMode={darkMode}
          d="M0,96L40,96C80,96,160,96,240,101.3C320,107,400,117,480,144C560,171,640,213,720,202.7C800,192,880,128,960,101.3C1040,75,1120,85,1200,112C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
        <Projects />
        <SeparatorSVG
          darkMode={darkMode}
          d="M0,256L60,229.3C120,203,240,149,360,154.7C480,160,600,224,720,240C840,256,960,224,1080,208C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
        <Contact />
      </main>
    </>
  )
}

export default HomePage
