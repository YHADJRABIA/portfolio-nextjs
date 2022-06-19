export const GET_ALL_PROJECTS_QUERY = `query GetAllProjects {
  allProjects(orderBy: [createdAt_ASC]) {
    name
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

export const GET_PROJECT_BY_SLUG_QUERY = `query GetProjectBySlug($slug: String!) {
  project(filter: {slug: {eq: $slug}}) {
    name
    description {
      value
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
