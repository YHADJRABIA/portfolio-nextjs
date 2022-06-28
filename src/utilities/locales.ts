import { Locale } from "@/types/locales"

export const locales = ["en", "fr", "ru", "sv"]

// Used to generate dynamic paths in SSG for all locales in all slugs
export const generateLocalisedPaths = (
  data: { slug: string }[],
  locales: Locale[]
) => {
  return data
    .map((element: { slug: string }) => {
      return locales.map(locale => ({
        params: { slug: element.slug },
        locale,
      }))
    })
    .flat() // Flatten array to avoid nested arrays
}
