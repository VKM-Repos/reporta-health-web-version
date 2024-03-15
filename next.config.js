/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
});
module.exports = nextConfig;

// module.exports = {
//   nextConfig,
//   images: {
//     loader: "akamai",
//     path: "/",
//   },
// };
