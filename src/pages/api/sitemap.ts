import { GET_ALL_SLUGS_QUERY } from "@/graphql/projects"
import { gqlRequest } from "@/lib/datoCMS"
import { locales } from "@/utilities/locales"
import { NextApiRequest, NextApiResponse } from "next"

import { SitemapStream, streamToPromise } from "sitemap"
import { Readable } from "stream"

const Sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  // Paths with static urls
  const staticLinks = locales.map(locale => {
    return {
      lang: locale,
      url: locale !== "en" ? `/${locale}` : "/",
      changefreq: "monthly",
      priority: 1,
    }
  })

  // Paths with dynamic urls
  const PROJECT_SLUGS = await gqlRequest({
    query: GET_ALL_SLUGS_QUERY,
  })

  // Project urls with dynamic slugs
  const dynamicLinks = PROJECT_SLUGS.allProjects.map(
    (project: { slug: string }) => {
      return locales.map(locale => ({
        lang: locale,
        url: `/${locale}/projects/${project.slug}`,
        changefreq: "weekly",
        priority: 0.3,
      }))
    }
  )

  // Combine all links
  const links = [...staticLinks, ...dynamicLinks].flat()

  // Create a stream to write to
  const stream = new SitemapStream({
    hostname: `https://${req.headers.host}`,
  })

  res.writeHead(200, {
    "Content-Type": "application/xml",
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: Buffer) => data.toString())

  res.end(xmlString)
}

export default Sitemap
