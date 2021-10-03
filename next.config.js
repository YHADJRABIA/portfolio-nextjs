/** @type {import('next').NextConfig} */
require("dotenv").config({ path: __dirname + "/config/.env.local" });
const path = require("path");
const nextTranslate = require("next-translate");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "flagcdn.com"], // Enables use of Cloudinary images
  },

  ...nextTranslate(), // Refers to i18n.json
};
