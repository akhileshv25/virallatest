import Image from "next/image";
import { CLIENT_LOGOS } from "@/viral/viral";
import { PlayWhenVisible } from "@/viral/PlayWhenVisible";
import "./clients.css";

/* Placeholder marks, one shape each, until real logos are added */
const PLACEHOLDERS = ["circle", "square", "diamond", "bar", "ring", "slash", "dot", "notch"];

/* The strip holds its logos twice (and each half repeats them, so short
   lists still span wide screens); the loop slides by exactly half */
const HALVES = [0, 1];
const REPEATS = [0, 1];

/* Brands we work with: one slim row of client logos in their own colours
   on white, set beside the testimonials so the proof sits together. It only moves while on screen
   (PlayWhenVisible) and pauses under the pointer. Sample logos are labelled
   as such; with an empty CLIENT_LOGOS it shows placeholder marks. */
export function ClientLogos() {
  const real = CLIENT_LOGOS.length > 0;
  const samples = CLIENT_LOGOS.some((logo) => logo.sample);

  return (
    <section id="clients" aria-labelledby="vd-clients-title" className="vd-clients">
      <h2 id="vd-clients-title" className="vd-clients__title">
        Brands we work with
        {samples && <span className="vd-clients__sample">Sample logos</span>}
      </h2>

      {real && (
        <ul className="sr-only">
          {CLIENT_LOGOS.map((logo) => (
            <li key={logo.src}>
              {logo.name}
              {logo.sample && " (sample logo)"}
            </li>
          ))}
        </ul>
      )}

      <div className="vd-clients__viewport" aria-hidden="true">
        <div className="vd-clients__track">
          {HALVES.map((half) => (
            <ul key={half} className={half ? "vd-clients__half vd-clients__copy" : "vd-clients__half"}>
              {REPEATS.map((repeat) =>
                real
                  ? CLIENT_LOGOS.map((logo) => (
                      <li key={`${repeat}-${logo.src}`} className={repeat ? "vd-clients__item vd-clients__copy" : "vd-clients__item"}>
                        <Image
                          src={logo.src}
                          alt=""
                          width={Math.round((logo.width * 28) / logo.height)}
                          height={28}
                          className="vd-clients__logo"
                        />
                      </li>
                    ))
                  : PLACEHOLDERS.map((shape) => (
                      <li key={`${repeat}-${shape}`} className={repeat ? "vd-clients__item vd-clients__copy" : "vd-clients__item"}>
                        <span className="vd-clients__placeholder">
                          <span className={`vd-clients__shape vd-clients__shape--${shape}`} />
                          Client logo
                        </span>
                      </li>
                    )),
              )}
            </ul>
          ))}
        </div>
      </div>
      <PlayWhenVisible targetId="clients" />
    </section>
  );
}
