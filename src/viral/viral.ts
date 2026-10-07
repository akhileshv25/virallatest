import { services } from "@/lib/services";

/* Content for the Viral Digi Ventures designs: the monz theme and components
   carrying the agency's own services, process and copy. Nothing here is a
   made-up number or client — the proof is the work on offer. */

export const HERO_TITLE_ID = "vd-hero-title";

/* The agency's line from the current homepage, signed off with the wordmark */
export const HERO_LEAD = "Grow your brand's digital presence, effortlessly";

/* A service by slug; a mistyped slug throws at build time (the pages are
   prerendered) instead of rendering an empty card */
export function service(slug: string) {
  const found = services.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown service: ${slug}`);
  return found;
}

export const serviceImage = (slug: string) => `/img/services/${slug}.jpg`;

/* Short names for the hero wall's type cards, where the full titles don't
   fit at card size */
export const SHORT_NAMES: Record<string, string> = {
  seo: "SEO",
  "sem-ppc": "PPC",
  "social-media-marketing": "Social",
  "social-creatives": "Creative",
  "email-marketing": "Email",
  "content-strategy": "Content",
  "analytics-reporting": "Analytics",
  "web-development": "Web",
  "app-development": "Apps",
  "hosting-maintenance": "Hosting",
};

/* What each service hands over, shown as chips on its card */
export const DELIVERABLES: Record<string, readonly string[]> = {
  seo: ["Audit", "On-page", "Local SEO", "Links"],
  "sem-ppc": ["Google Ads", "Shopping", "Landing pages"],
  "social-media-marketing": ["Instagram", "Facebook", "LinkedIn", "YouTube"],
  "social-creatives": ["Posts", "Reels", "Stories", "Ads"],
  "email-marketing": ["Lifecycle", "Campaigns", "Automation"],
  "content-strategy": ["Calendar", "Blogs", "Video scripts"],
  "analytics-reporting": ["GA4", "Dashboards", "Monthly review"],
  "web-development": ["Next.js", "WordPress", "Shopify"],
  "app-development": ["iOS", "Android", "Cross-platform"],
  "hosting-maintenance": ["Hosting", "Monitoring", "Updates"],
};

/* Channels the services plan, build and run on — named in type, not logos */
export const CHANNELS = [
  "Google Search",
  "Google Ads",
  "Instagram",
  "Facebook",
  "YouTube",
  "LinkedIn",
  "WhatsApp",
  "Shopify",
  "WordPress",
  "Google Analytics",
  "App Store",
  "Google Play",
] as const;

/* How a brief becomes growth: the agency's five steps, in order */
export const PROCESS = [
  {
    title: "Deep audit",
    line: "What's working, what isn't, and where the money leaks — across your site, search, social and ads.",
  },
  {
    title: "Strategy",
    line: "The plan in writing: who to reach, on which channels, with what message and budget.",
  },
  {
    title: "Build",
    line: "The site, app, funnel and creative the plan needs, made in-house.",
  },
  {
    title: "Paid amplification",
    line: "Search and social campaigns that put the work in front of people ready to buy.",
  },
  {
    title: "Growth dashboard",
    line: "Every number in one view, reviewed with you each month, then tuned and repeated.",
  },
] as const;

/* Photos from the current design's Unsplash set (AttentionGrid) — the exact
   query next.config.ts allows through the image optimizer */
const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=90`;

/* Brands we've built: the industries the current design names ("Real
   estate, D2C, hospitality, media and technology"), each with the work and
   the services behind it. TODO before launch: swap each for a real case
   study — client, what was made, and the result in numbers. */
export const WORK = [
  {
    industry: "Real estate",
    title: "Enquiries that turn into site visits",
    brief:
      "Project launch sites, Google and Meta lead campaigns and walkthrough reels, with every enquiry traced back to the ad that brought it.",
    services: ["Web development", "Paid search", "Social creative", "Analytics"],
    image: unsplash("1496442226666-8d4d0e62e6e9"),
    alt: "City towers lit up at dusk",
  },
  {
    industry: "D2C",
    title: "A store that sells while you sleep",
    brief:
      "Shopify storefronts, shopping campaigns and the email flows that bring first-time buyers back for a second order.",
    services: ["Web development", "Paid search", "Email marketing"],
    image: unsplash("1560769629-975ec94e6a86"),
    alt: "A pair of trainers on a white plinth",
  },
  {
    industry: "Hospitality",
    title: "Tables and rooms, booked direct",
    brief:
      "Menus and offers made for Instagram, local search that puts you on the map, and booking straight from the post.",
    services: ["Social media", "SEO", "Social creative"],
    image: unsplash("1556745757-8d76bdb6984b"),
    alt: "A card payment at a café counter",
  },
  {
    industry: "Media",
    title: "An audience you own",
    brief:
      "Editorial calendars, short-form video and search-friendly articles that grow subscribers instead of renting reach.",
    services: ["Content strategy", "Social media", "SEO"],
    image: unsplash("1611162616475-46b635cb6868"),
    alt: "A glowing red play button",
  },
  {
    industry: "Technology",
    title: "Products explained, demos booked",
    brief:
      "Product sites and apps, LinkedIn and search campaigns, and a dashboard that shows which channel brings the demos.",
    services: ["Web development", "App development", "Paid search", "Analytics"],
    image: unsplash("1505740420928-5e560c06d30e"),
    alt: "Black headphones on a yellow background",
  },
] as const;

/* Client quotes for the testimonial marquee. These are SAMPLES, marked as
   such on the page: replace each with a real, approved quote — the client's
   words, name and role — and set `sample: false` (or drop the field). */
export const TESTIMONIALS = [
  {
    quote: "We finally know which ads bring enquiries and which just burn budget.",
    name: "Client name",
    role: "Marketing head, real estate developer",
    service: "Paid search",
    sample: true,
  },
  {
    quote: "Our store, our emails and our ads are run by one team now. Nothing falls between the cracks.",
    name: "Client name",
    role: "Founder, D2C brand",
    service: "Web development",
    sample: true,
  },
  {
    quote: "Bookings come straight from Instagram. The posts look like us, not like a template.",
    name: "Client name",
    role: "Owner, café and restaurant",
    service: "Social creative",
    sample: true,
  },
  {
    quote: "The monthly report takes five minutes to read and always ends with what changes next.",
    name: "Client name",
    role: "Director, technology company",
    service: "Analytics",
    sample: true,
  },
  {
    quote: "Our articles rank, and the people reading them now subscribe.",
    name: "Client name",
    role: "Editor, digital media brand",
    service: "SEO",
    sample: true,
  },
  {
    quote: "They audited everything first and told us what not to spend on. That's when we trusted them.",
    name: "Client name",
    role: "Co-founder, consumer app",
    service: "Strategy",
    sample: true,
  },
] as const;

/* Client logos for the strip under the hero: transparent PNG or SVG files in
   /public/clients, used with the client's permission. The ones below are
   SAMPLES — made-up wordmarks in /public/clients/sample, flagged `sample` so
   the strip says so. Replace them with real client logos and drop the flag
   (and the sample folder). */
export const CLIENT_LOGOS: ReadonlyArray<{
  name: string;
  src: string;
  width: number;
  height: number;
  sample?: boolean;
}> = [
  { name: "acme", src: "/clients/sample/acme.svg", width: 118, height: 40, sample: true },
  { name: "lumen", src: "/clients/sample/lumen.svg", width: 135, height: 40, sample: true },
  { name: "orbit", src: "/clients/sample/orbit.svg", width: 135, height: 40, sample: true },
  { name: "kite", src: "/clients/sample/kite.svg", width: 118, height: 40, sample: true },
  { name: "fernly", src: "/clients/sample/fernly.svg", width: 152, height: 40, sample: true },
  { name: "novacorp", src: "/clients/sample/novacorp.svg", width: 186, height: 40, sample: true },
  { name: "atlaso", src: "/clients/sample/atlaso.svg", width: 152, height: 40, sample: true },
  { name: "pulseq", src: "/clients/sample/pulseq.svg", width: 152, height: 40, sample: true },
];

export const BUDGETS = [
  "Under ₹25,000 a month",
  "₹25,000 – ₹1,00,000 a month",
  "Over ₹1,00,000 a month",
  "Not sure yet",
] as const;

/* The site-wide menu, the same on every page: pages by path, homepage
   sections by "/#…" (so they work from any page), and the enquiry form —
   on every page — by "#contact" */
export const VIRAL_NAV = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/#approach" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT_HREF = "#contact";
/* The services page, and one service's section on it */
export const SERVICES_HREF = "/services";
export const serviceHref = (slug: string) => `${SERVICES_HREF}#${slug}`;
