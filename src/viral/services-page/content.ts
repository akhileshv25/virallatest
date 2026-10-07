/* The services page's content, taken from the agency's live services page
   (viral-digi-ventures.vercel.app/services) and kept word for word. Slugs
   match src/lib/data/services.ts and the live page's anchors. The live
   site's own FAQ says its performance figures are illustrative, so stats
   that report results carry `illustrative: true` and say so on the page. */

export type ServiceDetail = {
  slug: string;
  name: string;
  tagline: string;
  stat: { value: string; label: string; illustrative: boolean };
  problem: string;
  approach: string;
  included: readonly string[];
  cta: string;
};

export const SERVICES_HERO = {
  title: "What we do",
  subtitle: "Every discipline your growth needs, under one roof.",
  lead: "From the first Google search to the final ‘Buy Now’ click — search, social, paid, creative, web and app. One team, one timeline.",
};

export const SERVICE_DETAILS: readonly ServiceDetail[] = [
  {
    slug: "seo",
    name: "Search Engine Optimization",
    tagline: "So good, you own the first page.",
    stat: { value: "+248%", label: "organic traffic", illustrative: true },
    problem: "You're invisible for the searches that would actually send you customers.",
    approach:
      "We start with a technical audit that finds what's holding you back, then build a content and authority engine around the keywords your buyers actually type.",
    included: [
      "Technical SEO audit & fixes",
      "Keyword & intent mapping",
      "Content strategy & on-page optimisation",
      "Authority & link building",
      "Local SEO for Coimbatore & beyond",
    ],
    cta: "Start with search",
  },
  {
    slug: "sem-ppc",
    name: "Search Engine Marketing (SEM & PPC)",
    tagline: "Every rupee, fully accounted for.",
    stat: { value: "−41%", label: "cost per lead", illustrative: true },
    problem: "You're spending on ads but can't tell which rupee turned into a sale.",
    approach:
      "We build high-intent campaigns across Google, Meta and Shopping, wire up conversion tracking end to end, and optimise toward revenue — not clicks.",
    included: [
      "Google Ads, Meta & Shopping campaigns",
      "Conversion tracking & attribution",
      "Landing page & offer testing",
      "Budget pacing & bid strategy",
      "Weekly performance reporting",
    ],
    cta: "Start with search",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    tagline: "Content people actually stop for.",
    stat: { value: "100M+", label: "views delivered", illustrative: true },
    problem:
      "You post consistently and still hear crickets. Reach is flat, engagement is polite at best.",
    approach:
      "We build a platform-native strategy around hooks, formats and cadence that your audience actually responds to.",
    included: [
      "Channel strategy & content calendar",
      "Platform-native content formats",
      "Community management",
      "Influencer & collaboration campaigns",
      "Growth & engagement reporting",
    ],
    cta: "Start with social",
  },
  {
    slug: "social-creatives",
    name: "Social Media Creatives & Design",
    tagline: "Design that stops the scroll, before the caption even loads.",
    stat: { value: "3×", label: "more engagement", illustrative: true },
    problem:
      "Your feed looks fine but forgettable. Nothing stops the thumb, nothing is unmistakably you.",
    approach:
      "Our in-house design team speaks every platform's visual language. We build reels, carousels, motion and A/B-ready ad sets.",
    included: [
      "Reels & short-form video",
      "Static & carousel design",
      "Motion graphics & animation",
      "A/B-ready ad creative sets",
      "Brand identity system for social",
    ],
    cta: "Start with social",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    tagline: "Revenue, running on autopilot.",
    stat: { value: "38%", label: "average open rate", illustrative: true },
    problem:
      "Your list is a sunk cost. New subscribers go cold, one-time buyers never come back.",
    approach:
      "We design lifecycle flows — welcome, abandoned cart, post-purchase, win-back — plus a broadcast calendar.",
    included: [
      "Lifecycle & automation flows",
      "Broadcast campaign calendar",
      "List segmentation & growth",
      "Template & copy design",
      "Deliverability & performance tuning",
    ],
    cta: "Start with email",
  },
  {
    slug: "content-strategy",
    name: "Content Strategy & Copywriting",
    tagline: "Built for humans, loved by algorithms.",
    stat: { value: "1st page", label: "target rankings", illustrative: false },
    problem:
      "Your content is either invisible to Google or unreadable to humans — rarely both at once.",
    approach:
      "We build an editorial strategy mapped to search intent, then write copy that earns rankings and actually reads like a person wrote it.",
    included: [
      "Editorial & content strategy",
      "SEO-led copywriting",
      "Website & landing page copy",
      "Blog & long-form content",
      "Brand voice & messaging",
    ],
    cta: "Start with content",
  },
  {
    slug: "analytics-reporting",
    name: "Analytics & Reporting",
    tagline: "Outcomes, not vanity metrics.",
    stat: { value: "4.2×", label: "blended ROAS", illustrative: true },
    problem:
      "Your reports are full of numbers and empty of answers. Impressions are up, likes are up, and nobody can say whether any of it made money.",
    approach:
      "We build real-time dashboards that connect every view, click and conversion back to revenue.",
    included: [
      "Real-time revenue dashboards",
      "Full-funnel attribution setup",
      "Conversion & event tracking",
      "Channel performance analysis",
      "Monthly strategy reviews",
    ],
    cta: "Start with analytics",
  },
  {
    slug: "web-development",
    name: "Website Design & Development",
    tagline: "Websites that work as hard as you do.",
    stat: { value: "4 wks", label: "concept to launch", illustrative: false },
    problem: "Your website looks dated, loads slowly, and quietly turns visitors away.",
    approach:
      "We design pixel-perfect, mobile-first interfaces and build them on React, Next.js or WordPress — fast, SEO-ready and built to scale.",
    included: [
      "Custom, brand-aligned UI/UX",
      "Figma-to-code precision builds",
      "React, Next.js & WordPress development",
      "Cloud hosting with SSL & CDN",
      "Maintenance, updates & support",
    ],
    cta: "Start with website",
  },
  {
    slug: "app-development",
    name: "Mobile App Development",
    tagline: "Apps that turn customers into regulars.",
    stat: { value: "iOS + Android", label: "one codebase", illustrative: false },
    problem: "You need an app but dread the cost, the timeline and the maintenance treadmill.",
    approach:
      "We design around how your users actually behave, then ship native-feel cross-platform apps from a single codebase.",
    included: [
      "iOS & Android cross-platform apps",
      "User-behaviour-led UI/UX design",
      "App Store Optimisation (ASO)",
      "Store launch: copy, screenshots, keywords",
      "Post-launch updates & support",
    ],
    cta: "Start with mobile",
  },
  {
    slug: "hosting-maintenance",
    name: "Hosting & Maintenance",
    tagline: "Fast, safe and online — without you thinking about it.",
    stat: { value: "99.9%", label: "uptime guarantee", illustrative: false },
    problem: "Your site is one plugin update or traffic spike away from going down.",
    approach:
      "We host on blazing-fast cloud infrastructure with SSL and CDN, then handle updates, security patches, performance monitoring.",
    included: [
      "Cloud hosting with SSL & CDN",
      "99.9% uptime monitoring",
      "Security patches & backups",
      "Performance monitoring",
      "Priority support",
    ],
    cta: "Start with hosting",
  },
];

/* "What the numbers mean before we quote them" */
export const DEFINITIONS = [
  {
    term: "Blended ROAS",
    meaning: "Total revenue divided by total ad spend across every channel, not per-campaign ROAS.",
  },
  {
    term: "Cost per qualified lead",
    meaning: "Spend divided by leads that met the qualification the client defined — not raw form fills.",
  },
  {
    term: "Organic traffic growth",
    meaning:
      "Non-paid sessions to pages that carry commercial intent, measured against the same period a year earlier.",
  },
  {
    term: "Reach and views",
    meaning: "A distribution metric, reported as distribution. Views demonstrate that content travels.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Tracking before spend",
    line: "Conversion tracking, event definitions and attribution are wired and validated before the first campaign goes live.",
  },
  {
    title: "The same numbers we act on",
    line: "Reporting shows the figures used to make decisions, including the tests that failed.",
  },
  {
    title: "Attribution, stated honestly",
    line: "Multi-touch journeys cannot be resolved to a single cause with certainty.",
  },
] as const;

/* "Before you get in touch" */
export const SERVICES_FAQS = [
  {
    q: "How much does a digital marketing engagement cost?",
    a: "There is no flat rate, because the work isn't flat. Every proposal states the deliverables, the timeline and the fee before anything starts.",
  },
  {
    q: "How long before we see results?",
    a: "It depends entirely on the channel. Paid media produces measurable data within days. SEO typically takes three to six months.",
  },
  {
    q: "Do you work with businesses outside Coimbatore?",
    a: "Yes. The studio is based in Coimbatore and works with clients across India. Engagements run remotely.",
  },
  {
    q: "Do I have to take every service?",
    a: "No. Plenty of engagements are one discipline.",
  },
  {
    q: "Who owns the website, ad accounts and data?",
    a: "You do. Ad accounts, analytics properties, domains and the codebase are set up under your ownership.",
  },
  {
    q: "What do you need from us to start?",
    a: "Access to whatever already exists — the site, analytics, ad accounts, past reporting — plus someone on your side who can approve creative.",
  },
  {
    q: "How is performance reported?",
    a: "Against revenue and qualified leads, not impressions. Conversion tracking is wired before spend starts.",
  },
  {
    q: "Are the results shown on this site real?",
    a: "The performance figures shown across this site are illustrative unless a page says otherwise.",
  },
] as const;

/* The live site's direct contact routes */
export const DIRECT_CONTACT = {
  phone: "+91 98945 28157",
  tel: "tel:+919894528157",
  whatsapp: "https://wa.me/919894528157",
  email: "hello@viraldigiventures.in",
  location: "Coimbatore, Tamil Nadu, India",
};
