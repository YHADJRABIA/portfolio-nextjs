import type { NextPage } from "next"

// Next tags
import Head from "next/head"

// Components
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Header from "@/components/Header/Header"
import Nav from "@/components/Header/Nav"

import cn from "classnames"

// Theme
import { ThemeContext } from "@/context/ThemeContext"

// SVG
import SeparatorSVG from "@/svgs/SeparatorSVG" // Wave separating sections

import useTranslation from "next-translate/useTranslation" // Translation
import { useContext } from "react"
import { GET_ALL_SKILLS_QUERY } from "@/graphql/skills"
import { apolloClient } from "@/lib/apolloClient"

// TODO: update typing
const HomePage: NextPage = ({ skills }: any) => {
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
      <main className={cn({ "dark-mode": darkMode })}>
        <About />
        <SeparatorSVG darkMode={darkMode} direction="down" />
        <Skills data={skills.data} />
        <SeparatorSVG darkMode={darkMode} direction="up" />
        <Projects />
        <SeparatorSVG darkMode={darkMode} direction="down" />
        <Contact />
      </main>
    </>
  )
}

HomePage.displayName = "HomePage"

export default HomePage

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({ query: GET_ALL_SKILLS_QUERY })

  // To weed out Apollo's annoying __typename property
  const { __typename, ...rest } = data.skills

  return {
    props: {
      skills: rest,
    },
  }
}
