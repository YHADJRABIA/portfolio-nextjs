import { locales } from "@/utilities/locales"
import { NextApiRequest, NextApiResponse } from "next"

import { SitemapStream, streamToPromise } from "sitemap"
import { Readable } from "stream"

const Sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  const links = locales.map(locale => {
    return {
      lang: locale,
      url: locale !== "en" ? `/${locale}` : "/",
      changefreq: "monthly",
      priority: 1,
    }
  })

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  res.writeHead(200, {
    "Content-Type": "application/xml",
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: Buffer) => data.toString())

  res.end(xmlString)
}

export default Sitemap
