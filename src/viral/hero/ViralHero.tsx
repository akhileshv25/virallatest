import { services } from "@/lib/services";
import { ViralLogo } from "@/viral/ViralLogo";
import { HERO_LEAD, HERO_TITLE_ID } from "@/viral/viral";
import { Headline } from "./Headline";
import { HeroActions } from "./HeroActions";
import { HeroPanels } from "./HeroPanels";
import "./hero.css";

/* The hero: a full-screen background of four photo panels, each slowly
   cycling (HeroPanels), under a dark scrim and the message — location pill,
   "Made to spread.", the agency's line signed with the wordmark and the two
   actions. No client JavaScript. */
export function ViralHero() {
  return (
    <section aria-labelledby={HERO_TITLE_ID} className="vd-hero">
      <HeroPanels />
      <div className="vd-scrim" aria-hidden="true" />

      <div className="vd-hero__inner">
        <div className="vd-content vd-rise">
          <p className="vd-pill">
            <span className="vd-pill__text">
              A digital marketing agency from
            </span>{" "}
            <span className="vd-pill__chip">
              <svg
                className="vd-pill__pin"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              Coimbatore
            </span>
          </p>
          <Headline />
          {/* The line signs off with the VIRAL wordmark; "with" and the
              wordmark never wrap apart, and screen readers hear the name */}
          <p className="vd-lead">
            {HERO_LEAD}{" "}
            <span className="vd-lead__brand">
              with
              <ViralLogo variant="word" className="vd-lead__logo" />
              <span className="sr-only"> Viral Digi Ventures</span>
            </span>
          </p>
          <HeroActions />
          {/* The panels are decorative, so the services are listed here */}
          <ul className="sr-only">
            {services.map(({ slug, title, description }) => (
              <li key={slug}>
                {title}: {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
