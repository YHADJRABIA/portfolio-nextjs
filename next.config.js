/** @type {import('next').NextConfig} */
require("dotenv").config({ path: `${__dirname}/config/.env.local` })
const path = require("path")
const nextTranslate = require("next-translate")

module.exports = {
  reactStrictMode: true, // Development mode only – highlights potential problems.
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "utilities.scss";`, // Scss code that'd be prepended to every single scss file.
  },
  images: {
    remotePatterns: [ // Enables use of images from external URLs
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '', // For security reasons: keep empty instead of omiting it, else defaults to ** (wildcard)
        pathname: '', // Same as the above
      },
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        port: '',
        pathname: '',
      },
    ],
  },
  webpack(config) {
    // Allows use of SVGs as dynamic component without being compelled to use Next Image
    config.module.rules.push({
      test: /\.svg$/, // If file is SVG...
      issuer: /\.[jt]sx?$/, // ...and is used in a .js/ts or .jsx/tsx file...
      use: ["@svgr/webpack"], // use SVGR
    })

    return config
  },

  // Redirects sitemap.xml to /api/sitemap
  // eslint-disable-next-line require-await
  rewrites: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
    },
  ],

  ...nextTranslate(), // Refers to i18n.json
}
