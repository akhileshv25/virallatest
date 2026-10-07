import { TESTIMONIALS } from "@/viral/viral";
import { PlayWhenVisible } from "@/viral/PlayWhenVisible";
import "@/viral/tag.css";
import "./testimonials.css";

type Quote = (typeof TESTIMONIALS)[number];

const TONES = ["yellow", "white", "blue", "ink"] as const;

/* Two rows, running in opposite directions, starting at different quotes */
const ROWS: readonly (readonly Quote[])[] = [
  TESTIMONIALS,
  [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)],
];

/* Each row holds its quotes twice; the loop slides by exactly one copy */
const COPIES = [0, 1];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function QuoteCard({ item, tone }: { item: Quote; tone: string }) {
  return (
    <figure className={`vd-quote vd-quote--${tone}`}>
      {item.sample && <span className="vd-quote__sample">Sample</span>}
      <blockquote className="vd-quote__text">{item.quote}</blockquote>
      <figcaption className="vd-quote__by">
        <span className="vd-quote__mark" aria-hidden="true">
          {initials(item.name)}
        </span>
        <span className="vd-quote__who">
          <span className="vd-quote__name">{item.name}</span>
          <span className="vd-quote__role">{item.role}</span>
        </span>
      </figcaption>
      <span className="vd-quote__service">{item.service}</span>
    </figure>
  );
}

/* What clients say: quotes on sharp cards in the hero wall's tones, in two
   rows sliding opposite ways. The rows only move while the section is on
   screen (PlayWhenVisible), and off screen the browser skips rendering it
   altogether; they pause under the pointer or keyboard focus so a quote can
   be read. No images — each client is marked by their initials. Screen
   readers get the quotes once, as a list. */
export function ViralTestimonials() {
  return (
    <section id="testimonials" aria-labelledby="vd-quotes-title" className="vd-quotes">
      <div className="vd-quotes__inner">
        <h2 id="vd-quotes-title" className="vd-tag vd-quotes__title">
          <span className="vd-tag__band">Clients</span>{" "}
          <span className="vd-tag__word">on working with us</span>
        </h2>
      </div>

      <ul className="sr-only">
        {TESTIMONIALS.map((item) => (
          <li key={item.quote}>
            {item.sample && "Sample quote: "}“{item.quote}” — {item.name},{" "}
            {item.role}
          </li>
        ))}
      </ul>

      <div className="vd-quotes__rows" aria-hidden="true">
        {ROWS.map((row, r) => (
          <div
            key={r}
            className={r ? "vd-quotes__row vd-quotes__row--reverse" : "vd-quotes__row"}
          >
            <div className="vd-quotes__track">
              {COPIES.map((copy) => (
                <div
                  key={copy}
                  className={copy ? "vd-quotes__half vd-quotes__copy" : "vd-quotes__half"}
                >
                  {row.map((item, i) => (
                    <QuoteCard
                      key={item.quote}
                      item={item}
                      tone={TONES[(i + r * 2) % TONES.length]}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <PlayWhenVisible targetId="testimonials" />
    </section>
  );
}
