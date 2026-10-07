import type { Metadata } from "next";
import { ViralHeader } from "@/viral/ViralHeader";
import { ViralHome } from "@/viral/ViralHome";

const title = "Viral Digi Ventures — Digital marketing agency in Coimbatore";
const description =
  "SEO, paid search, social media, creative, email, content, analytics, websites and apps from one Coimbatore team, planned together so each service feeds the next.";

/* The homepage. Static, so it's prerendered once at build time. */
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Viral Digi Ventures",
    locale: "en_IN",
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};

export default function ViralHomePage() {
  return (
    <>
      <ViralHeader />
      <ViralHome />
    </>
  );
}
