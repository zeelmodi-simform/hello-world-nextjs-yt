/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/',
  //       // permanent: true // 308 Status Code
  //       permanent: false // 307 Status Code
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
