import type { CSSProperties } from "react";
import Image from "next/image";
import { services } from "@/lib/services";
import { CONTACT_HREF, SERVICES_HREF, serviceHref, serviceImage } from "@/viral/viral";
import "@/viral/tag.css";
import "./engine.css";

const COLUMNS = 4;
const ROWS = 3;

/* How far a cell's wall photo reaches past the cell on each side, so the
   photos tile the stage edge to edge: half a gap between cells, the stage's
   padding on its outer edges (engine.css). */
function reach(col: number, row: number, span = 1): CSSProperties {
  return {
    "--et": row === 0 ? "var(--pad-t)" : "var(--half)",
    "--eb": row === ROWS - 1 ? "var(--pad-b)" : "var(--half)",
    "--el": col === 0 ? "var(--pad-x)" : "var(--half)",
    "--er": col + span === COLUMNS ? "var(--pad-x)" : "var(--half)",
  } as CSSProperties;
}

/* Grid cells after the heading's two: the ten services, row by row */
const CELLS = [
  [2, 0],
  [3, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
] as const;

/* One growth engine: a pinned wall of the ten services' photos that, as you
   scroll, draws back into a grid — each photo is trimmed to its service's
   thumbnail, the heading's photo fades to reveal the copy, and each
   service's name and line write in beside its thumbnail. One 4×3 grid is
   both the wall and the finished layout. The trimming is done by four
   white covers per photo growing in from its edges (solid layers the
   compositor scales — the photos are painted once and never again), driven
   by the section's scroll timeline: no JavaScript, no per-frame paint.
   Without scroll-driven animation (or on phones, or with reduced motion)
   it's the finished grid. */
export function ViralEngine() {
  return (
    <section id="approach" aria-labelledby="vd-engine-title" className="vd-engine">
      <div className="vd-engine__stage">
        <div className="vd-engine__grid">
          <div className="vd-engine__head" style={reach(0, 0, 2)}>
            <div className="vd-engine__wall vd-engine__wall--head" aria-hidden="true">
              <Image
                src="/img/engine-head.webp"
                alt=""
                fill
                sizes="50vw"
                className="vd-engine__img"
              />
              <span className="vd-engine__label">
                <span className="vd-tag__band">One</span>{" "}
                <span className="vd-engine__label-word">Growth engine</span>
              </span>
            </div>
            <div className="vd-engine__copy">
              <h2 id="vd-engine-title" className="vd-tag vd-engine__title">
                <span className="vd-tag__band">One</span>{" "}
                <span className="vd-tag__word">Growth engine</span>
              </h2>
              <p className="vd-engine__lead">
                Content earns the search traffic, ads test the message, social
                builds the audience and analytics says where the next rupee
                goes. Each service feeds the next.
              </p>
              <div className="vd-engine__actions">
                <a className="vd-tag__button" href={SERVICES_HREF}>
                  See services
                </a>
                <a className="vd-engine__link" href={CONTACT_HREF}>
                  Start a project
                </a>
              </div>
            </div>
          </div>

          {services.map((item, i) => {
            const [col, row] = CELLS[i];
            return (
              <div key={item.slug} className="vd-engine__item" style={reach(col, row)}>
                <div className="vd-engine__wall">
                  <Image
                    src={serviceImage(item.slug)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 120px"
                    className="vd-engine__img"
                  />
                  {/* Four white covers grow in from the edges to trim the
                      photo to its thumbnail (engine.css): solid colour
                      layers the compositor scales for free, so the photo
                      itself is painted once */}
                  <span className="vd-engine__cover vd-engine__cover--t" />
                  <span className="vd-engine__cover vd-engine__cover--b" />
                  <span className="vd-engine__cover vd-engine__cover--l" />
                  <span className="vd-engine__cover vd-engine__cover--r" />
                </div>
                <div className="vd-engine__text">
                  <h3 className="vd-engine__name">
                    <a href={serviceHref(item.slug)} className="vd-engine__link-card">
                      {item.title}
                    </a>
                  </h3>
                  <p className="vd-engine__line">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
