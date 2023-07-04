/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://nextjs-starter.netlify.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/api" }],
  },
  // ...other options
};
