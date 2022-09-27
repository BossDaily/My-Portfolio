/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com', 'cdn.jsdelivr.net', 'site-assets.fontawesome.com', 'seeklogo.com', 'resources.jetbrains.com', 'media.discordapp.net'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    ignoreBuildErrors: true
  }
}
