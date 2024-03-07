/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    BE_BASE_URL: process.env.BE_BASE_URL,
    CONTACTFORM: process.env.CONTACTFORM,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        port: '8080',
        hostname: 'theartcode-be-app-x8t4f.ondigitalocean.app',
      },
      {
        protocol: 'https',
        port: '8080',
        hostname: '**.ondigitalocean.app',
      },
      {
        protocol: 'http',
        port: '1337',
        hostname: 'localhost',
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
    // prependData: `@import "~@styles/variables.scss";`,
  },
};

export default nextConfig;
