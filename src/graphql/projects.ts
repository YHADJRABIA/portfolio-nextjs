export const GET_ALL_PROJECTS_QUERY = `query GetAllProjects($locale: SiteLocale) {
  allProjects(orderBy: [createdAt_ASC], locale: $locale) {
    name
    position
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
