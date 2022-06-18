import { Project } from "@/types/models/projects"

export const GET_ALL_PROJECTS_QUERY = `query GetAllProjects {
  allProjects(orderBy: [createdAt_ASC]) {
    name
    description
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
    metaData(locale: en) {
      description
      title
      twitterCard
      image {
        url
        responsiveImage {
          alt
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
        }
      }
    }
  }
}`

export const getAllSlugs = (projects: Project[]) =>
  projects.map(project => project.slug)

export const getProjectBySlug = (projects: Project[], slug: string) =>
  projects.find(project => project.slug === slug)
