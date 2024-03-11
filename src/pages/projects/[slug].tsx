import { getIconBySlug } from "@/data/skills"
import { Locale } from "@/types/locales"
import { Project } from "@/types/models/projects"
import { NextPage } from "next"
import cn from "classnames"
import useTranslation from "next-translate/useTranslation"

import styles from "./[slug].module.scss"
import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"
import SEO from "@/components/SEO/SEO"
import { websiteUrl } from "@/utilities/general"
import { useRouter } from "next/router"
import { gqlRequest } from "@/lib/datoCMS"
import {
  GET_ALL_PROJECTS_QUERY,
  GET_PROJECT_BY_SLUG_QUERY,
} from "@/graphql/projects"
import { StructuredText } from "react-datocms"
import { generateLocalisedPaths } from "@/utilities/locales"
import { ContextProps } from "@/types/context"

interface PropTypes {
  project: Project
}

interface StaticPropTypes {
  locales: Locale[]
  preview: boolean
}

interface ParamsTypes extends ContextProps {
  params: { slug: string }
}

const ProjectPage: NextPage<PropTypes> = ({ project }: PropTypes) => {
  const { locale, asPath } = useRouter()
  const { t } = useTranslation("project")
  const { isDarkTheme } = useContext(ThemeContext)

  const skills = project.tag
  const currentUrl = `${websiteUrl}/${locale}${asPath}`

  const icons = skills.map(skill => getIconBySlug(skill)?.icon ?? "")

  const hasName = project.name.length

  return (
    <>
      <SEO
        title={project.metaData.title}
        description={project.metaData.description}
        keywords={skills.join(", ")}
        ogTitle={project.metaData.title}
        ogDescription={project.metaData.description}
        ogImage={project.metaData.image.src}
        ogUrl={currentUrl}
      />

      <section
        className={cn(styles.projectPage, {
          [styles.darkTheme]: isDarkTheme,
        })}
      >
        {hasName && <h1 className={styles.title}>{project.name}</h1>}
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
            <h2 className={styles.descriptionTitle}>{t("description")}</h2>

            <StructuredText data={project.description} />
          </div>
        </div>
      </section>
    </>
  )
}

// Runs during build time only & can only work with getStaticProps
// Gets locales from context to generate multilanguage pages for each project
export const getStaticPaths = async ({ locales, preview }: StaticPropTypes) => {
  const data = await gqlRequest({
    query: GET_ALL_PROJECTS_QUERY,
    includeDrafts: preview,
  })
  const paths = generateLocalisedPaths(data.allProjects, locales)

  return {
    paths,
    fallback: false, // TODO: Set it to true or "blocking" when ready to generate new pages on the fly (after better error handling)
  }
}

export const getStaticProps = async ({
  params,
  locale,
  preview,
}: ParamsTypes) => {
  const data = await gqlRequest({
    query: GET_PROJECT_BY_SLUG_QUERY,
    variables: { slug: params.slug, locale },
    includeDrafts: preview,
  })

  return {
    props: { project: data.project },
    revalidate: 3600, // Purge the cache & re-generate the page every hour to update the content without needing to rebuild the site
  }
}

export default ProjectPage
