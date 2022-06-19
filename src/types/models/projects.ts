import { ResponsiveImageType, StructuredTextDocument } from "react-datocms"

export type Project = {
  name: string
  image: { responsiveImage: ResponsiveImageType }
  description: { value: StructuredTextDocument }
  url?: string
  repo?: string
  tag: string[]
  slug: string
  metaData: {
    title: string
    description: string
    image: { src: string }
  }
}
