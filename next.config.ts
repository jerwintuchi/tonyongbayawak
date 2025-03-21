import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/py/:path*",  // Next.js API route
        destination: "http://127.0.0.1:8000/:path*", // FastAPI server
      },
    ];
  },
};

export default nextConfig;
