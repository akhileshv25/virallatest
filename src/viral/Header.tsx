"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

type HeaderLink = { label: string; href: string };

const NAV_LINKS: readonly HeaderLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const DEFAULT_CTA: HeaderLink = { label: "Start a project", href: "/contact" };

/* Site-internal CTAs go through the router (without prefetching: the CTA
   sits in the viewport on every page, and "/contact" doesn't exist yet, so
   each load spent a request on a 404); anything else (e.g. a WhatsApp chat)
   opens in a new tab. */
function CtaLink({
  cta,
  className,
  onClick,
}: {
  cta: HeaderLink;
  className: string;
  onClick?: () => void;
}) {
  if (cta.href.startsWith("/") || cta.href.startsWith("#")) {
    return (
      <Link
        href={cta.href}
        prefetch={false}
        onClick={onClick}
        className={className}
      >
        {cta.label}
      </Link>
    );
  }
  return (
    <a
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {cta.label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/* `className` lands on the outer <header>, so another design can restyle
   the whole bar (e.g. the new design swaps in its own font); `name` is the
   wordmark, and its first letter fills the logo badge. A design with its own
   `logo` renders that instead, with `name` as the home link's accessible
   name. `links`, `cta` (null hides the button), `ctaClassName` and
   `badgeClassName` let a design bring its own nav and colours — the defaults
   are the current design's. */
export function Header({
  className = "",
  name = "ViralDigi",
  logo,
  links = NAV_LINKS,
  cta = DEFAULT_CTA,
  ctaClassName = "bg-[#1a73e8] text-white hover:bg-[#3286f0]",
  badgeClassName = "bg-gradient-to-br from-indigo-500 to-indigo-300 text-black",
}: {
  className?: string;
  name?: string;
  logo?: ReactNode;
  links?: readonly HeaderLink[];
  cta?: HeaderLink | null;
  ctaClassName?: string;
  badgeClassName?: string;
}) {
  /* Scrolling turns the bar into a pill by changing paint and compositing
     only — background, border, shadow and a translate — never its width or
     padding, so the switch causes no layout work and no layout shift. The
     pill is plain translucent black: a backdrop blur would make the GPU
     re-blur everything scrolling under it, every frame. */
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 md:px-6 ${className}`}
    >
      <div
        className={`mx-auto flex h-16 max-w-4xl items-center justify-between rounded-full border px-5 transition-[background-color,border-color,box-shadow,translate] duration-300 md:h-[4.5rem] md:px-6 ${
          scrolled
            ? "translate-y-3 border-white/10 bg-black/85 shadow-lg shadow-black/40 md:translate-y-4"
            : "translate-y-0 border-transparent bg-transparent shadow-none"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={logo ? name : undefined}
          className="flex items-center gap-2.5"
        >
          {logo ?? (
            <>
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${badgeClassName}`}
              >
                {name.charAt(0).toUpperCase()}
              </span>
              <span className="text-lg font-bold tracking-tight text-white md:text-xl">
                {name}
              </span>
            </>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {cta && (
            <CtaLink
              cta={cta}
              className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:inline-flex ${ctaClassName}`}
            />
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-5 w-5"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`mx-3 grid overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-lg shadow-black/40 transition-[grid-template-rows,margin-top,opacity] duration-300 ease-out md:hidden ${
          open
            ? "mt-2 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] border-transparent opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-3 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            {cta && (
              <CtaLink
                cta={cta}
                onClick={() => setOpen(false)}
                className={`mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${ctaClassName}`}
              />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
