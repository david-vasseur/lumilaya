import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p16-sign.tiktokcdn.com',
        port: '',        // pas nécessaire
        pathname: '/**', // autorise toutes les images du domaine
      },
    ],
    // qualities et formats facultatifs
    formats: ['image/avif', 'image/webp'],
    qualities: [25, 50, 75, 100],
  },

};

export default nextConfig;
