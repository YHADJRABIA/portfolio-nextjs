/** @type {import('next').NextConfig} */
require("dotenv").config({ path: `${__dirname}/config/.env.local` })
const path = require("path")
const nextTranslate = require("next-translate")

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "utilities.scss";`, // Scss code that'd be prepended to every single scss file.
  },
  images: {
    domains: ["res.cloudinary.com", "flagcdn.com"], // Enables use of images from external URLs
  },
  webpack(config) {
    // Allows use of SVGs as dynamic component without being compelled to use Next Image
    config.module.rules.push({
      test: /\.svg$/, // If file is SVG...
      use: ["@svgr/webpack"], // use SVGR
    })

    return config
  },

  ...nextTranslate(), // Refers to i18n.json
}
