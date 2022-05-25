const { SitemapStream, streamToPromise } = require("sitemap")
const { Readable } = require("stream")

const Sitemap = async (req, res) => {
  // An array with your links
  const links = [
    { lang: "en", url: "/", changefreq: "weekly", priority: 1 },
    { lang: "fr", url: "/fr", changefreq: "weekly", priority: 1 },
    { lang: "sv", url: "/sv", changefreq: "weekly", priority: 1 },
    { lang: "ru", url: "/ru", changefreq: "weekly", priority: 1 },
  ]

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  res.writeHead(200, {
    "Content-Type": "application/xml",
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then(data => data.toString())

  res.end(xmlString)
}

export default Sitemap
