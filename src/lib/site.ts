/* The site's public origin, for canonical URLs, the sitemap and robots.txt.
   Set NEXT_PUBLIC_SITE_URL once the domain is live; on Vercel it falls back
   to the project's production domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
