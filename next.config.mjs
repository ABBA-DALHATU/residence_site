/** @type {import('next').NextConfig} */

//add this to the next.config.mjs file because vercel was complaining about the prisma client
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        "prisma",
        "@prisma/client",
      ];
    }
    return config;
  },
};

export default nextConfig;
