import type { NextPage } from "next"
import Head from "next/head"
import About from "@/components/About"
import Projects from "@/components/Projects/Projects"
import Skills from "@/components/Skills/Skills"
import Contact from "@/components/Contact"

import SeparatorSVG from "@/svgs/SeparatorSVG" // Wave separating sections

import useTranslation from "next-translate/useTranslation"
import SEO from "@/components/SEO/SEO"

import Layout from "@/components/Layout/Layout"
import Hero from "@/components/Hero/Hero"

const HomePage: NextPage = () => {
  const { t } = useTranslation("meta")

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

      <Hero />
      <Layout>
        <About />
        <SeparatorSVG direction="down" />
        <Skills />
        <SeparatorSVG direction="up" />
        <Projects />
        <SeparatorSVG direction="down" />
        <Contact />
      </Layout>
    </>
  )
}

HomePage.displayName = "HomePage"

export default HomePage
