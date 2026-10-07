import type { CSSProperties } from "react";
import Image from "next/image";

/* The hero's background: four full-height panels, each a slow carousel of
   three photos sliding in from the right (hero.css), the four staggered so
   the change travels across the screen. Each panel is captioned with the
   area it stands for. CSS only. On phones only the first panel shows, still. */
const PANELS: ReadonlyArray<{ label: string; photos: readonly string[] }> = [
  {
    label: "Search & Ads",
    photos: [
      "/img/services/analytics-reporting.jpg",
      "/img/services/sem-ppc.jpg",
      "/img/services/seo.jpg",
    ],
  },
  {
    label: "Social & Creative",
    photos: [
      "/img/services/social-creatives.jpg",
      "/img/work/media.jpg",
      "/img/services/social-media-marketing.jpg",
    ],
  },
  {
    label: "Web & Apps",
    photos: [
      "/img/services/app-development.jpg",
      "/img/work/tech.jpg",
      "/img/work/realestate.jpg",
    ],
  },
  {
    label: "Content & Email",
    photos: [
      "/img/services/email-marketing.jpg",
      "/img/work/agro.jpg",
      "/img/services/content-strategy.jpg",
    ],
  },
];

export function HeroPanels() {
  return (
    <div className="vd-panels" aria-hidden="true">
      {PANELS.map(({ label, photos }, p) => (
        <div
          key={label}
          className="vd-panel"
          style={{ "--p": p } as CSSProperties}
        >
          {/* In order of appearance; `--i` sets each photo's turn */}
          {photos.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              /* Preload only the first panel's first photo — the one phones
                 show, and the LCP image everywhere; the others load eagerly
                 but don't take bandwidth from it on a slow connection */
              priority={i === 0 && p === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="(min-width: 768px) 25vw, 100vw"
              className="vd-panel__img"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
          <p className="vd-panel__label">
            <span>{String(p + 1).padStart(2, "0")}</span>
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
