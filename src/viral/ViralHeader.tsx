import { Header } from "@/viral/Header";
import { monaSans } from "@/viral/fonts";
import { ViralLogo } from "@/viral/ViralLogo";
import { CONTACT_HREF, VIRAL_NAV } from "@/viral/viral";

/* The shared header's pill, scroll behaviour and mobile menu, carrying the
   Viral Digi wordmark, nav and signal blue in Mona Sans — expanded from lg up
   only, as in the monz design. */
export function ViralHeader({
  links = VIRAL_NAV,
}: {
  links?: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <Header
      name="Viral Digi Ventures"
      logo={<ViralLogo className="text-[26px] text-white md:text-[30px]" />}
      links={links}
      cta={{ label: "Start a project", href: CONTACT_HREF }}
      ctaClassName="bg-[#2340FF] text-white hover:bg-[#1A30D1]"
      className={`${monaSans.className} lg:[font-stretch:125%]`}
    />
  );
}
