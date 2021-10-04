const siteUrl = "https://yacine-hadj-rabia-portfolio-nextjs.vercel.app/";

module.exports = {
  siteUrl: process.env.SITE_URL || siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};
