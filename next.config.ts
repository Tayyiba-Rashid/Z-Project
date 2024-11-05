import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Enables standalone mode for server functions
};

export default nextConfig;
