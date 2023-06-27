/** @type {import('next').NextConfig} */

const nextConfig = {
  // 깃허브 레포 이름
  // basePath: "/react-joara-front",
  reactStrictMode: false,
  images: {
    domains: ['cdn.myanimelist.net'],

    // FIXME 이미지 설정
    // unoptimized: true,
    remotePatterns: [
      // https://cdn.myanimelist.net/r/100x140/images/anime/1296/96987.webp?s=cd7c77a89344f323491c43a8ae3f172d
      {
        protocol: "http",
        hostname: "cdn.myanimelist.net",
        port: "",
        pathname: "/r/100x140/images/*",
      },
    ],
  },
};

module.exports = nextConfig;
