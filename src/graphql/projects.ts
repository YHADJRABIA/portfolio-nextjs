import { Locale } from "@/types/locales"
import { Project, LocalisedDescription } from "@/types/models/projects"

export const GET_ALL_PROJECTS_QUERY = `query GetAllProjects($locale: SiteLocale) {
  allProjects(orderBy: [createdAt_ASC], locale: $locale) {
    name
    _allNameLocales {
      locale
      value
    }
    image {
      responsiveImage(
        imgixParams: { fit: crop, w: "500", h: "500", auto: format }
      ) {
        width
        webpSrcSet
        title
        srcSet
        sizes
        height
        src
        bgColor
        base64
        aspectRatio
        alt
      }
    }
    _allImageLocales {
      value {
        alt
      }
      locale
    }
    url
    slug
    repo
  }
}`

export const GET_ALL_SLUGS_QUERY = `query GetAllSlugs {
  allProjects {
    slug
  }
}`

export const GET_PROJECT_BY_SLUG_QUERY = `query GetProjectBySlug($slug: String!, $locale: SiteLocale) {
  project(filter: {slug: {eq: $slug}}, locale: $locale) {
    name
    _allNameLocales {
      locale
      value
    }
    description {
      value
    }
    _allDescriptionLocales {
      locale
      value {
        value
      }
    }
    tag
    metaData {
      description
      title
      image {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
    }
  }
}`

// Return project's description in provided locale
export const getProjectDescriptionByLocale = (
  project: Project,
  locale: Locale
) =>
  project._allDescriptionLocales.find(
    (p: LocalisedDescription) => p.locale === locale
  )?.value.value ?? project.description
