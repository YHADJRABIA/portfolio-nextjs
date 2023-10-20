import { ResponsiveImageType, StructuredTextDocument } from "react-datocms"
import { Locale } from "../locales"

export type LocalisedNames = {
  locale: Locale
  value: string
}

export type LocalisedDescription = {
  locale: Locale
  value: {
    value: StructuredTextDocument
  }
}

export type Project = {
  name: string
  position: number
  _allNameLocales: LocalisedNames[]
  _allDescriptionLocales: LocalisedDescription[]
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
