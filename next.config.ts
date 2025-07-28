import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.10minuteschool.com'],
  },
  // Enable standalone output for Docker
  output: 'standalone',
  // Optimize for production
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
