import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "malamiromba.com",
          },
        ],
        destination: "https://techinhausa.org/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.malamiromba.com",
          },
        ],
        destination: "https://techinhausa.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
