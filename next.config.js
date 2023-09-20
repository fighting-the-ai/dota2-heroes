/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.opendota.com',
        port: '',
        pathname: '/apps/dota2/images/dota_react/heroes/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.stratz.com',
        port: '',
        pathname: '/images/dota2/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig