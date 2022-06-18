import { ResponsiveImageType } from "react-datocms"

export type Project = {
  name: string
  image: { responsiveImage: ResponsiveImageType }
  description: string
  url?: string
  repo?: string
  tags: string[]
  slug: string
}
