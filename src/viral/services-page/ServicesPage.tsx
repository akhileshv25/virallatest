import type { CSSProperties } from "react";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "@/viral/icons";
import { monaSans } from "@/viral/fonts";
import { serviceImage } from "@/viral/viral";
import { ViralContact } from "@/viral/enquire/ViralContact";
import { ViralFaq } from "@/viral/faq/ViralFaq";
import {
  DEFINITIONS,
  DIRECT_CONTACT,
  PRINCIPLES,
  SERVICES_FAQS,
  SERVICES_HERO,
  SERVICE_DETAILS,
} from "./content";
import "@/viral/tag.css";
import "./services-page.css";

const number = (i: number) => String(i + 1).padStart(2, "0");

/* The hero's photo at rest: a team at work, from the current design's
   Unsplash set (the exact query next.config.ts allows) */
const HERO_PHOTO =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=90";

/* A service's photo as a CSS background, through the image optimizer. Set
   only while its index entry is hovered or focused (services-page.css), so
   each one downloads the first time it's wanted, not with the page. */
const swapImage = (slug: string) =>
  `url("/_next/image?url=${encodeURIComponent(serviceImage(slug))}&w=1200&q=75")`;

/* Each service's view timeline, named so the rail can follow it */
const timeline = (slug: string) => `--vs-${slug}`;

/* The services page in the Viral look. A black hero over a photo, with the
   full index — hovering a service brings up its photo behind it;
   then the ten services on white beside a sticky rail that lights up the
   one you're reading (CSS scroll-driven: each service names its view
   timeline, and the rail's links animate on it); then how the numbers are
   measured, the FAQ and the enquiry form. Content is the live site's. */
export function ServicesPage() {
  return (
    <main className={`${monaSans.className} flex-1 bg-black text-white`}>
      {/* ---------------- Hero and index ---------------- */}
      <section aria-labelledby="vs-title" className="vs-hero">
        <div className="vs-hero__bg" aria-hidden="true">
          <Image
            src={HERO_PHOTO}
            alt=""
            fill
            preload
            sizes="100vw"
            className="vs-hero__img"
          />
        </div>
        <div className="vs-hero__inner">
          <div className="vs-hero__copy">
            <h1 id="vs-title" className="vd-tag vs-hero__title">
              <span className="vd-tag__band">What</span>{" "}
              <span className="vd-tag__word">we do</span>
            </h1>
            <p className="vs-hero__subtitle">{SERVICES_HERO.subtitle}</p>
            <p className="vs-hero__lead">{SERVICES_HERO.lead}</p>
          </div>
          <nav aria-label="Services" className="vs-index">
            <ol className="vs-index__list">
              {SERVICE_DETAILS.map((service, i) => (
                <li key={service.slug} className="vs-index__item">
                  <a href={`#${service.slug}`} className="vs-index__link">
                    <span className="vs-index__num">{number(i)}</span>
                    {service.name}
                  </a>
                  <span
                    className="vs-hero__swap"
                    aria-hidden="true"
                    style={{ "--img": swapImage(service.slug) } as CSSProperties}
                  />
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* ---------------- The ten services ---------------- */}
      <div
        id="services-list"
        className="vs-body"
        style={
          {
            timelineScope: SERVICE_DETAILS.map((s) => timeline(s.slug)).join(", "),
          } as CSSProperties
        }
      >
        <nav aria-label="Jump to a service" className="vs-rail">
          <ol className="vs-rail__list">
            {SERVICE_DETAILS.map((service, i) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="vs-rail__link"
                  style={{ "--tl": timeline(service.slug) } as CSSProperties}
                >
                  <span className="vs-rail__num">{number(i)}</span>
                  {service.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="vs-list">
          {SERVICE_DETAILS.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-title`}
              className="vs-service"
              style={{ viewTimelineName: timeline(service.slug) } as CSSProperties}
            >
              <header className="vs-service__head">
                <span className="vs-service__num">{number(i)}</span>
                <h2 id={`${service.slug}-title`} className="vs-service__name">
                  {service.name}
                </h2>
                <p className="vs-service__tagline">{service.tagline}</p>
              </header>

              <div className="vs-service__grid">
                <figure className="vs-service__media">
                  <Image
                    src={serviceImage(service.slug)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 26vw, 90vw"
                    className="vs-service__img"
                  />
                  <figcaption className="vs-stat">
                    <span className="vs-stat__value">{service.stat.value}</span>
                    <span className="vs-stat__label">{service.stat.label}</span>
                    {service.stat.illustrative && (
                      <span className="vs-stat__note">Illustrative</span>
                    )}
                  </figcaption>
                </figure>

                <div className="vs-service__body">
                  <div className="vs-service__pair">
                    <div>
                      <h3 className="vs-service__label">The problem</h3>
                      <p className="vs-service__text">{service.problem}</p>
                    </div>
                    <div>
                      <h3 className="vs-service__label">How we fix it</h3>
                      <p className="vs-service__text">{service.approach}</p>
                    </div>
                  </div>

                  <h3 className="vs-service__label">What&apos;s included</h3>
                  <ul className="vs-service__included">
                    {service.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a href="#contact" className="vd-tag__button vs-service__cta">
                    {service.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ---------------- What the numbers mean ---------------- */}
      <section id="numbers" aria-labelledby="vs-numbers-title" className="vs-numbers">
        <div className="vs-numbers__inner">
          <header className="vs-numbers__head">
            <h2 id="vs-numbers-title" className="vd-tag vs-numbers__title">
              <span className="vd-tag__band">What</span>{" "}
              <span className="vd-tag__word">the numbers mean</span>
            </h2>
            <p className="vs-numbers__lead">
              …before we quote them. The figures on this site are illustrative
              unless a page says otherwise; this is how real ones are measured.
            </p>
          </header>

          <dl className="vs-numbers__defs">
            {DEFINITIONS.map(({ term, meaning }) => (
              <div key={term} className="vs-def">
                <dt className="vs-def__term">{term}</dt>
                <dd className="vs-def__meaning">{meaning}</dd>
              </div>
            ))}
          </dl>

          <ul className="vs-numbers__principles">
            {PRINCIPLES.map(({ title, line }) => (
              <li key={title} className="vs-principle">
                <h3 className="vs-principle__title">{title}</h3>
                <p className="vs-principle__line">{line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ViralFaq
        items={SERVICES_FAQS}
        lead="Before you get in touch. Anything else, ask us in the form below."
      />

      {/* ---------------- Talk directly ---------------- */}
      <section aria-label="Contact us directly" className="vs-direct">
        <p className="vs-direct__title">Rather talk it through?</p>
        <ul className="vs-direct__list">
          <li>
            <a
              href={DIRECT_CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="vs-direct__link"
            >
              <MessageCircle aria-hidden="true" />
              Chat on WhatsApp
              <span className="sr-only"> (opens WhatsApp)</span>
            </a>
          </li>
          <li>
            <a href={DIRECT_CONTACT.tel} className="vs-direct__link">
              <Phone aria-hidden="true" />
              {DIRECT_CONTACT.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${DIRECT_CONTACT.email}`} className="vs-direct__link">
              <Mail aria-hidden="true" />
              {DIRECT_CONTACT.email}
            </a>
          </li>
        </ul>
      </section>

      <ViralContact />
    </main>
  );
}
