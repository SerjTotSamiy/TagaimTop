/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: 'http://:slug*',
        destination: 'https://:slug*',
        permanent: true,
      },
      {
        source: 'http://www.:slug*',
        destination: 'https://:slug*',
        permanent: true,
      },
      {
        source: 'https://www.:slug*',
        destination: 'https://:slug*',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
