import type { CSSProperties } from "react";
import Image from "next/image";
import { services } from "@/lib/services";
import { monaSans } from "@/viral/fonts";
import { CONTACT_HREF, DELIVERABLES, serviceHref, serviceImage } from "@/viral/viral";
import "@/viral/scroll/sticky-grid-scroll.css";
import "@/viral/tag.css";
import "./services.css";

/* The ten services as monz's panning course row (MonzCourses), as a chapter
   of ViralStory: the story's pan markup, styles (sticky-grid-scroll.css) and
   scroll choreography (services.css): the cards fly in and the row pans sideways in a
   slow wave, stopping on the last service. Each card carries the service's
   name, what it does, and what it hands over; the title holds still at the
   foot of the stage, set like the wordmark's tag, with the section's one
   button beside it. Each card opens its service on the services page. */
export function ViralServices() {
  return (
        <section
          id="services"
          aria-labelledby="vd-services-title"
          className="block block--pan vd-courses"
        >
          <div className="pan__wrapper">
            <ul className="pan__track" role="list">
              {services.map((item, i) => (
                <li
                  className="pan__item vd-course"
                  key={item.slug}
                  style={{ "--i": i } as CSSProperties}
                >
                  <Image
                    src={serviceImage(item.slug)}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 60vw, 320px"
                    className="pan__image"
                  />
                  <a
                    href={serviceHref(item.slug)}
                    className="vd-course__cover"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  <div className="vd-course__panel">
                    <h3 className="vd-course__title">
                      <a href={serviceHref(item.slug)} className="vd-course__link">
                        {item.title}
                      </a>
                    </h3>
                    <p className="vd-course__line">{item.description}</p>
                    <ul className="vd-course__tools" aria-label="Includes">
                      {DELIVERABLES[item.slug]?.map((thing) => (
                        <li key={thing} className="vd-course__tool">
                          {thing}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <div className={`vd-courses__foot ${monaSans.className}`}>
              <div className={`vd-courses__heading ${monaSans.className}`}>
                <h2 id="vd-services-title" className="pan__title">
                  <span className="vd-tag__band">Ten</span>{" "}
                  <span className="vd-tag__word">Services</span>
                </h2>
                <a href={CONTACT_HREF} className="vd-tag__button">
                  Start a project
                </a>
              </div>
              <p className="pan__description">
                Search, social, ads, content and the sites and apps they lead
                to — run by one team, so nothing gets lost between agencies.
              </p>
            </div>
          </div>
        </section>
  );
}
