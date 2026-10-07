import type { Metadata } from "next";
import { monaSans } from "@/viral/fonts";
import { ViralFooter } from "@/viral/ViralFooter";
import { ViralHeader } from "@/viral/ViralHeader";
import { WorkPage } from "@/viral/work-page/WorkPage";

const title = "Work — Viral Digi Ventures";
const description =
  "Selected work: websites, apps and campaigns for brands in real estate, D2C and agriculture, media and technology — designed, developed and launched from Coimbatore.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
    siteName: "Viral Digi Ventures",
    locale: "en_IN",
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};

/* The work page, in the Viral design. Static, prerendered at build. */
export default function Work() {
  return (
    <>
      <ViralHeader />
      <WorkPage />
      <div className={monaSans.className}>
        <ViralFooter />
      </div>
    </>
  );
}
