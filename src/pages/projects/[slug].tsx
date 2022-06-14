import { getAllSlugs, getProjectBySlug } from "@/data/projects"
import { Locale } from "@/types/locales"
import { Project } from "@/types/projects"
import { NextPage } from "next"

import styles from "./[slug].module.scss"

interface PropTypes {
  project: Project
}

interface StaticPropTypes {
  locales: Locale[]
}

interface ParamsTypes {
  params: { slug: string }
}

const ProjectPage: NextPage<PropTypes> = ({ project }: PropTypes) => {
  return <h1 className={styles.title}>{project.name}</h1>
}

// Runs during build time only & can only work with getStaticProps
// Gets locales from context to generate multilanguage pages for each project
export const getStaticPaths = ({ locales }: StaticPropTypes) => {
  const paths = getAllSlugs()
    .map(project => {
      return locales.map(locale => ({
        params: { slug: project },
        locale,
      }))
    })
    .flat() // Flatten array to avoid nested arrays

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = ({ params }: ParamsTypes) => {
  const project = getProjectBySlug(params.slug)
  return {
    props: { project },
  }
}

export default ProjectPage
