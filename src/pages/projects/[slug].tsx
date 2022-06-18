import { getAllSlugs, getProjectBySlug } from "@/data/projects"
import { getIconBySlug } from "@/data/skills"
import { Locale } from "@/types/locales"
import { Project } from "@/types/projects"
import { NextPage } from "next"
import cn from "classnames"
import useTranslation from "next-translate/useTranslation"

import styles from "./[slug].module.scss"
import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"
import SEO from "@/components/SEO/SEO"
import { websiteUrl } from "@/utilities/general"
import { useRouter } from "next/router"

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
  const { t } = useTranslation("project")
  const skills = project.tags
  const { darkTheme } = useContext(ThemeContext)
  const { locale, asPath } = useRouter()
  const currentUrl = `${websiteUrl}/${locale}${asPath}`

  const icons = skills.map(skill => getIconBySlug(skill)?.icon ?? "")

  return (
    <>
      <SEO
        title={project.name}
        description={project.description}
        keywords={skills.join(", ")}
        ogTitle={project.name}
        ogDescription={project.description}
        ogImage={project.img}
        ogUrl={currentUrl}
      />

      <section
        className={cn(styles.projectPage, {
          [styles.darkTheme]: darkTheme,
        })}
      >
        <h1 className={styles.title}>{project.name}</h1>
        <div className={styles.projectContainer}>
          <div className={styles.technologiesContainer}>
            <h2 className={styles.technologiesTitle}>{t("technologies")}</h2>
            <div className={styles.iconsContainer}>
              {icons.map(
                (icon, id) =>
                  icon && (
                    <i
                      key={id}
                      title={skills[id]}
                      className={cn(icon, styles.icon)}
                    ></i>
                  )
              )}
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.descriptionTitle}> {t("description")}</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
        </div>
      </section>
    </>
  )
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
