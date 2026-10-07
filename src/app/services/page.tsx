import type { Metadata } from "next";
import { ViralHeader } from "@/viral/ViralHeader";
import { ViralFooter } from "@/viral/ViralFooter";
import { ServicesPage } from "@/viral/services-page/ServicesPage";
import { monaSans } from "@/viral/fonts";

const title = "Services — Viral Digi Ventures";
const description =
  "Every discipline your growth needs, under one roof: SEO, paid search, social media, social creative, email, content, analytics, websites, apps, and hosting — one team in Coimbatore.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    siteName: "Viral Digi Ventures",
    locale: "en_IN",
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};


/* The services page, in the Viral design. Static, prerendered at build. */
export default function Services() {
  return (
    <>
      <ViralHeader />
      <ServicesPage />
      <div className={monaSans.className}>
        <ViralFooter />
      </div>
    </>
  );
}
