/* The work page's content, taken from the agency's live work page
   (viral-digi-ventures.vercel.app/work) and kept word for word; images are
   the live site's own, in /public/img/work. The live page states its
   case-study numbers are illustrative, and so does this one. */

export type Sector = "real-estate" | "d2c" | "media" | "technology";

export type Project = {
  name: string;
  category: string;
  sector: Sector;
  year: number;
  services: readonly string[];
  description: string;
  result: { value: string; label: string };
  image: string;
  alt: string;
  url?: string;
};

export const WORK_HERO = {
  subtitle: "Brands we've built, grown and shipped.",
  lead: "A snapshot of websites, apps and campaigns we've designed, developed and launched — from Coimbatore to the rest of India.",
};

export const SECTORS: ReadonlyArray<{ id: Sector | "all"; label: string }> = [
  { id: "all", label: "All work" },
  { id: "real-estate", label: "Real estate" },
  { id: "d2c", label: "D2C" },
  { id: "media", label: "Media" },
  { id: "technology", label: "Technology" },
];

export const PROJECTS: readonly Project[] = [
  {
    name: "Thiruvathirai Real Estate",
    category: "Real Estate",
    sector: "real-estate",
    year: 2024,
    services: ["Website", "SEO", "Paid Media"],
    description:
      "A conversion-first property platform with location landing pages engineered to rank — and a lead engine behind every listing.",
    result: { value: "+186%", label: "qualified enquiries" },
    image: "/img/work/realestate.jpg",
    alt: "A modern white villa with a pool",
    url: "https://thiruvathiradevelopers.in/",
  },
  {
    name: "Adiyogi Agro",
    category: "D2C · Agriculture",
    sector: "d2c",
    year: 2024,
    services: ["Brand", "Social Creatives", "E-commerce"],
    description:
      "A farm-to-shelf D2C brand rebuilt from identity to storefront, with a social creative system that made the feed unmistakable.",
    result: { value: "3.4×", label: "blended ROAS" },
    image: "/img/work/agro.jpg",
    alt: "Two people shaking hands across a wheat field",
    url: "https://adiyogiagroequipments.com/",
  },
  {
    name: "UTSAV Apartments",
    category: "Real Estate",
    sector: "real-estate",
    year: 2023,
    services: ["Website", "App", "Campaigns"],
    description:
      "A launch campaign and booking experience for a flagship residential project — from teaser reels to a resident-facing app.",
    result: { value: "48h", label: "brief to first draft" },
    image: "/img/work/utsav.jpg",
    alt: "An apartment building against an evening sky",
  },
  {
    name: "SVP Media",
    category: "Media & Production",
    sector: "media",
    year: 2023,
    services: ["Website", "Content", "SEO"],
    description:
      "A portfolio-grade website and content engine for a production house — fast, editorial, and built to showcase the work.",
    result: { value: "+248%", label: "organic traffic" },
    image: "/img/work/media.jpg",
    alt: "A film clapperboard held up in the desert",
    url: "https://svpmediasolutions.com/",
  },
  {
    name: "Thinkbucket Technology",
    category: "Technology",
    sector: "technology",
    year: 2025,
    services: ["Website", "Brand", "SEO"],
    description:
      "A corporate site for a technology services company — sharp positioning, clean UI and a lead-first page structure.",
    result: { value: "4 wks", label: "concept to launch" },
    image: "/img/work/tech.jpg",
    alt: "A laptop glowing in the dark",
    url: "https://thinkbuckettechnology.com/",
  },
];

export const RESULTS_NOTE =
  "Case-study numbers shown are illustrative — real client results on request.";

/* "Three shapes an engagement takes" */
export const ENGAGEMENTS = [
  {
    name: "Launch",
    text: "A brand with a product and no digital presence. Identity, site, tracking and the first campaigns get built together so launch day has a funnel behind it rather than just a homepage.",
  },
  {
    name: "Rebuild",
    text: "An existing site that converts badly or ranks nowhere. The audit comes first, then a rebuild that keeps the equity worth keeping and fixes the structure underneath it.",
  },
  {
    name: "Scale",
    text: "Marketing that already works and needs more of it. Spend gets attributed properly, creative gets tested at volume, and organic is built up so growth stops being rented.",
  },
] as const;

/* "The channel mix changes with the business." */
export const CHANNEL_MIX = {
  intro:
    "What actually changes between sectors is which channel carries the demand, how long the buying cycle runs, and which number is worth optimising toward.",
  closing:
    "Not on this list? The diagnostic is the same either way — where the demand already is, what it costs to reach, and what happens after the click.",
  sectors: [
    {
      name: "Real Estate",
      text: "Long consideration windows and high ticket sizes. The work is location-page SEO that ranks for project and locality searches, plus lead capture that qualifies before a site visit is booked — because the expensive failure here is sales time spent on unqualified walk-ins, not a low click count.",
      channels: ["Location SEO", "Paid search", "Landing pages", "CRM handoff"],
    },
    {
      name: "D2C and Agriculture",
      text: "Margin is the constraint, so blended ROAS is the number that matters rather than channel-level ROAS. Creative volume drives it: a steady supply of tested ad concepts, a recognisable brand system, and a storefront that does not lose the sale at checkout.",
      channels: ["Paid social", "Creative testing", "E-commerce build", "Email"],
    },
    {
      name: "Media and Production",
      text: "Portfolio is the product, so the site has to load fast while carrying heavy visual work — the usual tension. Organic search on service and craft terms compounds, and reels and short-form double as both marketing and proof of capability.",
      channels: ["SEO", "Performance-first build", "Social creatives"],
    },
    {
      name: "Technology and SaaS",
      text: "Buyers self-educate before they ever fill in a form, so content built around the problem they are searching — not the product's feature list — is what earns the pipeline. Attribution matters more here than anywhere else, because the path from first read to signed contract is long and multi-touch.",
      channels: ["Content strategy", "Technical SEO", "Analytics", "Web and app build"],
    },
    {
      name: "Local Service Businesses",
      text: "Most of the demand is already there and already searching — it is a question of being the result they find. That means the map pack, a consistent business profile, review velocity, and pages that answer the specific service-plus-locality query rather than a generic homepage.",
      channels: ["Local SEO", "Google Business Profile", "Reviews", "Paid search"],
    },
  ],
} as const;
