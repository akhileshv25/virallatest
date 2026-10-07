import type { CSSProperties } from "react";
import Image from "next/image";
import { CONTACT_HREF, WORK } from "@/viral/viral";
import "@/viral/tag.css";
import "./cases.css";

/* Each industry's type card takes one of the hero wall's tones */
const TONES = ["yellow", "blue", "white", "ink", "yellow"] as const;

/* Brands we've built, in the hero wall's language: one column per industry,
   a sharp photo card and a type card in yellow, blue, white or ink, swapping
   places column to column so the grid reads as a checkerboard. On wide
   screens it arrives tilted like the wall and straightens as you scroll, the
   columns rising from alternate sides — CSS scroll-driven, transform only.
   Phones, reduced motion and browsers without scroll-driven animation get
   the finished grid. */
export function ViralCases() {
  return (
    <section id="work" aria-labelledby="vd-cases-title" className="vd-cases">
      <div className="vd-cases__inner">
        <header className="vd-cases__head">
          <h2 id="vd-cases-title" className="vd-tag vd-cases__title">
            <span className="vd-tag__band">Brands</span>{" "}
            <span className="vd-tag__word">we&apos;ve built</span>
          </h2>
          <p className="vd-cases__lead">
            Real estate, D2C, hospitality, media and technology — what we made
            for each, and the services that did the work.
          </p>
        </header>

        <ul className="vd-cases__grid" role="list">
          {WORK.map((item, i) => (
            <li
              key={item.industry}
              className={i % 2 ? "vd-case vd-case--flip" : "vd-case"}
              style={{ "--i": i } as CSSProperties}
            >
              <figure className="vd-case__photo">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="vd-case__img"
                />
                <figcaption className="vd-case__industry">{item.industry}</figcaption>
              </figure>
              <article className={`vd-case__card vd-case__card--${TONES[i]}`}>
                <h3 className="vd-case__title">{item.title}</h3>
                <p className="vd-case__brief">{item.brief}</p>
                <ul className="vd-case__services" aria-label="Services">
                  {item.services.map((name) => (
                    <li key={name} className="vd-case__service">
                      {name}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        <p className="vd-cases__close">
          Your brand next?{" "}
          <a className="vd-tag__button vd-cases__cta" href={CONTACT_HREF}>
            Start a project
          </a>
          <a className="vd-cases__all" href="/work">
            See all work
          </a>
        </p>
      </div>
    </section>
  );
}
