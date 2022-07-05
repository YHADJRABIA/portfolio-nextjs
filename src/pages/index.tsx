import type { NextPage } from "next"
import About from "@/components/About"
import Projects from "@/components/Projects/Projects"
import Skills from "@/components/Skills/Skills"
import Contact from "@/components/Contact"

import SeparatorSVG from "@/svgs/SeparatorSVG" // Wave separating sections

import useTranslation from "next-translate/useTranslation"
import SEO from "@/components/SEO/SEO"

import Layout from "@/components/Layout/Layout"
import Hero from "@/components/Hero/Hero"

import { GET_ALL_PROJECTS_QUERY } from "@/graphql/projects"
import { gqlRequest } from "@/lib/datoCMS"
import { Project } from "@/types/models/projects"
import { ContextProps } from "@/types/context"

interface PropTypes {
  data: { allProjects: Project[] }
}

const HomePage: NextPage<PropTypes> = ({ data }: PropTypes) => {
  const { t } = useTranslation("meta")
  const projects = data?.allProjects

  return (
    <>
      <SEO
        title={t("title")}
        description={t("description")}
        keywords="YHR, Yacine Hadj Rabia, portfolio, ReactJS, NodeJS, NextJS, TypeScript, JavaScript, Sass"
        ogTitle={t("title")}
        ogDescription={t("description")}
      >
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
      </SEO>

      <Hero />
      <Layout>
        <About />
        <SeparatorSVG direction="down" />
        <Skills />
        <SeparatorSVG direction="up" />
        <Projects data={projects} />
        <SeparatorSVG direction="down" />
        <Contact />
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ locale, preview }: ContextProps) => {
  const data = await gqlRequest({
    query: GET_ALL_PROJECTS_QUERY,
    variables: { locale },
    includeDrafts: preview,
  })
  return {
    props: { data },
    revalidate: 3600, // Updates cache every hour with new CMS content
  }
}

HomePage.displayName = "HomePage"

export default HomePage
