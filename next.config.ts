import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Ini akan memaksa Vercel meneruskan binaan walaupun ada ralat TypeScript!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
