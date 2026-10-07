import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Styles arrive inside the HTML instead of as render-blocking requests.
    // The site's CSS is small (~15 KB gzipped) and most visits are first
    // visits, which is the case this helps.
    inlineCss: true,
  },
  images: {
    // AVIF first (smallest), WebP for browsers without it
    formats: ["image/avif", "image/webp"],
    // Optimized images are keyed by their source, which doesn't change in
    // place — keep them a month instead of the 4-hour default
    minimumCacheTTL: 60 * 60 * 24 * 31,
    // The Unsplash photos — the exact query too, so nobody can use the
    // optimizer to resize arbitrary Unsplash URLs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        search: "?auto=format&fit=crop&w=900&q=90",
      },
    ],
  },
};

export default nextConfig;
