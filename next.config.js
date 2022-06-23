/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com', 'cdn.jsdelivr.net']
  },
  typescript: {
    ignoreBuildErrors: true
  }
}
