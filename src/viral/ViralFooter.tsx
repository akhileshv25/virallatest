import { ViralLogo } from "@/viral/ViralLogo";
import { CONTACT_HREF, VIRAL_NAV } from "@/viral/viral";

/* A plain close on the black ground: the wordmark, where the agency is from,
   the page's sections again and the one action. */
export function ViralFooter({
  links = VIRAL_NAV,
}: {
  links?: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <footer className="border-t border-white/15 bg-black px-5 pt-14 pb-24 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <ViralLogo className="text-[34px]" />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/65">
            A digital marketing agency from Coimbatore. SEO, ads, social,
            content, email, analytics, websites and apps.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-white/75 hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_HREF}
            className="rounded-[2px] bg-[#2340FF] px-5 py-3 font-semibold hover:bg-[#1A30D1]"
          >
            Start a project
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-[13px] text-white/60">
        © {new Date().getFullYear()} Viral Digi Ventures
      </p>
    </footer>
  );
}
