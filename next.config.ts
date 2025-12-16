import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    domains: ['p16-sign.tiktokcdn.com'],
    qualities: [25, 50, 75, 100],
  },

};

export default nextConfig;
