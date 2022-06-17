import { useContext } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import About from "@/components/About"
import Projects from "@/components/Projects/Projects"
import Skills from "@/components/Skills/Skills"
import Contact from "@/components/Contact"
import Header from "@/components/Layout/Header"
import Nav from "@/components/Layout/Nav"

import cn from "classnames"

import { ThemeContext } from "@/context/ThemeContext"

import SeparatorSVG from "@/svgs/SeparatorSVG" // Wave separating sections

import useTranslation from "next-translate/useTranslation" // Translation
import SEO from "@/components/SEO/SEO"

const HomePage: NextPage = () => {
  const { t } = useTranslation("meta")

  const { darkTheme } = useContext(ThemeContext)

  return (
    <>
      <Head>
        <SEO
          title={t("title")}
          description={t("description")}
          keywords="Yacine Hadj Rabia, portfolio, ReactJS, NodeJS, NextJS, TypeScript, JavaScript, Sass"
          ogTitle={t("title")}
          ogDescription={t("description")}
        />
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
      <main className={cn({ "dark-theme": darkTheme })}>
        <About />
        <SeparatorSVG direction="down" />
        <Skills />
        <SeparatorSVG direction="up" />
        <Projects />
        <SeparatorSVG direction="down" />
        <Contact />
      </main>
    </>
  )
}

HomePage.displayName = "HomePage"

export default HomePage
