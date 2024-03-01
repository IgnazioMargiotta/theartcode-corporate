/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    BE_BASE_URL: process.env.BE_BASE_URL,
  },
  images: {
    domains: [
      'theartcode-be-app-x8t4f.ondigitalocean.app',
      'localhost',
      'monkfish-app-tt33s.ondigitalocean.app',
      'vibra.studio',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        port: '8080',
        hostname: 'theartcode-be-app-x8t4f.ondigitalocean.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost:1337',
      },
      {
        protocol: 'https',
        port: '8080',
        hostname: 'monkfish-app-tt33s.ondigitalocean.app',
      },
      {
        protocol: 'https',
        port: '8080',
        hostname: 'vibra.studio',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~@styles/variables.scss";`,
  },
};

export default nextConfig;
