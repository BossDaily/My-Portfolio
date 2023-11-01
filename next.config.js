/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "**.discordapp.net" },
      { hostname: "**.discord.com" },
      { hostname: "**.discordapp.com" },
      { hostname: "**.jetbrains.com" },
      { hostname: "**.jsdelivr.net" },
      { hostname: "seeklogo.com" },
      { hostname: "**.fontawesome.com" },
      { hostname: "**.scdn.co" },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
