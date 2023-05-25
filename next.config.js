/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.discordapp.com",
      "cdn.jsdelivr.net",
      "site-assets.fontawesome.com",
      "seeklogo.com",
      "resources.jetbrains.com",
      "media.discordapp.net",
      "i.scdn.co",
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
