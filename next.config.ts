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
  async redirects() {
    return [
      {
        source: '/Karolio-CV-EN.pdf',
        destination: '/Karolis-Cibiras-CV.pdf',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/Karolis-Cibiras-CV.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Karolis-Cibiras-CV.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
