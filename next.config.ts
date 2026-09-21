import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/Karolio-CV-EN.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Karolis-Cibiras-CV-EN.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
