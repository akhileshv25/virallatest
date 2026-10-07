import { CHANNELS } from "@/viral/viral";
import "./channels.css";

/* Each half of the track holds the names twice so it spans ultra-wide
   screens; the track slides by exactly half its width for a seamless loop.
   The copies are hidden for reduced motion. */
const HALVES = [0, 1];
const REPEATS = [0, 1];

/* The channels the work runs on, as a marquee under the hero (the monz
   accreditations strip, re-cut): names set in the display type between blue
   nodes rather than borrowed logos. Hovering pauses the strip and dims all but
   the name under the pointer. CSS only. */
export function Channels() {
  return (
    <section aria-labelledby="vd-channels-title" className="vd-accred">
      <h2 id="vd-channels-title" className="vd-accred__title">
        Where your brand will show up
      </h2>

      <ul className="sr-only">
        {CHANNELS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <div aria-hidden="true" className="vd-accred__viewport">
        <div className="vd-accred__track">
          {HALVES.map((half) => (
            <ul
              key={half}
              className={half ? "vd-accred__half vd-accred__copy" : "vd-accred__half"}
            >
              {REPEATS.map((repeat) =>
                CHANNELS.map((name) => (
                  <li
                    key={`${repeat}-${name}`}
                    className={repeat ? "vd-accred__item vd-accred__copy" : "vd-accred__item"}
                  >
                    <span className="vd-channel">{name}</span>
                  </li>
                )),
              )}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
