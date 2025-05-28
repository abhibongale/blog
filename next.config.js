import NextConfig from 'next';

const nextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',

};

export default nextConfig;