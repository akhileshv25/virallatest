import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "@/viral/icons";
import { monaSans } from "@/viral/fonts";
import { CONTACT_HREF } from "@/viral/viral";
import { ViralContact } from "@/viral/enquire/ViralContact";
import { DIRECT_CONTACT } from "@/viral/services-page/content";
import {
  CHANNEL_MIX,
  ENGAGEMENTS,
  PROJECTS,
  RESULTS_NOTE,
  SECTORS,
  WORK_HERO,
} from "./content";
import "@/viral/tag.css";
import "./work-page.css";

const TONES = ["blue", "white", "yellow"] as const;

/* The work page in the Viral look. A black hero and a sector filter (CSS
   only: radio buttons and :has); the five projects as full-width banners
   with the name across the photo and the details beneath; then the three
   shapes an engagement takes, how the channel mix changes by sector, and
   the ask. Content is the live site's. */
export function WorkPage() {
  return (
    <main className={`${monaSans.className} vw flex-1 bg-black text-white`}>
      {/* ---------------- Hero ---------------- */}
      <section aria-labelledby="vw-title" className="vw-hero">
        <h1 id="vw-title" className="vd-tag vw-hero__title">
          <span className="vd-tag__band">Selected</span>{" "}
          <span className="vd-tag__word">work</span>
        </h1>
        <div className="vw-hero__copy">
          <p className="vw-hero__subtitle">{WORK_HERO.subtitle}</p>
          <p className="vw-hero__lead">{WORK_HERO.lead}</p>
        </div>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section aria-labelledby="vw-projects-title" className="vw-projects">
        <h2 id="vw-projects-title" className="sr-only">
          Projects
        </h2>

        <fieldset className="vw-filter">
          <legend className="vw-filter__legend">Show</legend>
          {SECTORS.map((sector) => (
            <label key={sector.id} className="vw-filter__option">
              <input
                type="radio"
                name="vw-sector"
                value={sector.id}
                id={`vw-f-${sector.id}`}
                defaultChecked={sector.id === "all"}
                className="vw-filter__input"
              />
              {sector.label}
            </label>
          ))}
        </fieldset>

        <ol className="vw-list">
          {PROJECTS.map((project, i) => (
            <li
              key={project.name}
              className="vw-project"
              data-sector={project.sector}
              style={{ "--i": i } as CSSProperties}
            >
              <article aria-labelledby={`vw-p-${i}`}>
                <figure className="vw-project__banner">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1280px) 1232px, 100vw"
                    preload={i === 0}
                    className="vw-project__img"
                  />
                  <figcaption className="vw-project__over">
                    <span className="vw-project__num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 id={`vw-p-${i}`} className="vw-project__name">
                      {project.name}
                    </h3>
                  </figcaption>
                </figure>

                <div className="vw-project__info">
                  <p className="vw-project__meta">
                    <span className="vw-project__category">{project.category}</span>
                    <span className="vw-project__year">{project.year}</span>
                  </p>

                  <div className="vw-project__body">
                    <p className="vw-project__desc">{project.description}</p>
                    <ul className="vw-project__services" aria-label="Services">
                      {project.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vw-project__visit"
                      >
                        Visit the live site
                        <ArrowUpRight aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                  </div>

                  <p className="vw-result">
                    <span className="vw-result__value">{project.result.value}</span>
                    <span className="vw-result__label">{project.result.label}</span>
                    <span className="vw-result__note">Illustrative</span>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <p className="vw-projects__note">{RESULTS_NOTE}</p>
      </section>

      {/* ---------------- Three shapes ---------------- */}
      <section aria-labelledby="vw-shapes-title" className="vw-shapes">
        <h2 id="vw-shapes-title" className="vd-tag vw-section-title">
          <span className="vd-tag__band">Three</span>{" "}
          <span className="vd-tag__word">shapes an engagement takes</span>
        </h2>
        <ol className="vw-shapes__list">
          {ENGAGEMENTS.map((shape, i) => (
            <li key={shape.name} className={`vw-shape vw-shape--${TONES[i]}`}>
              <h3 className="vw-shape__name">{shape.name}</h3>
              <p className="vw-shape__text">{shape.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- The channel mix ---------------- */}
      <section aria-labelledby="vw-mix-title" className="vw-mix">
        <header className="vw-mix__head">
          <h2 id="vw-mix-title" className="vw-mix__title">
            The channel mix changes with the business.
          </h2>
          <p className="vw-mix__intro">{CHANNEL_MIX.intro}</p>
        </header>
        <div className="vw-mix__list">
          {CHANNEL_MIX.sectors.map((sector) => (
            <article key={sector.name} className="vw-sector">
              <h3 className="vw-sector__name">{sector.name}</h3>
              <div>
                <p className="vw-sector__text">{sector.text}</p>
                <ul className="vw-sector__channels" aria-label="Channels">
                  {sector.channels.map((channel) => (
                    <li key={channel}>{channel}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="vw-mix__closing">{CHANNEL_MIX.closing}</p>
      </section>

      {/* ---------------- The ask ---------------- */}
      <section aria-labelledby="vw-next-title" className="vw-next">
        <h2 id="vw-next-title" className="vw-next__title">
          Want your brand on this page next?
        </h2>
        <div className="vw-next__actions">
          <a href={CONTACT_HREF} className="vd-tag__button vw-next__primary">
            Start a project
          </a>
          <a
            href={DIRECT_CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="vw-next__chat"
          >
            <MessageCircle aria-hidden="true" />
            Chat on WhatsApp
            <span className="sr-only"> (opens WhatsApp)</span>
          </a>
        </div>
      </section>

      <ViralContact />
    </main>
  );
}
