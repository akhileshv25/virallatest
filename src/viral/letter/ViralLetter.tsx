import { monaSans } from "@/viral/fonts";
import "./letter.css";

/* The VIRAL chapter: the word rises into place, four lanes of service
   photos drift through its letters as the ground turns charcoal, then the
   statement fades in (letter.css, CSS scroll-driven). Set in the
   wordmark's heavy, wide cut instead of Arial — the font goes inline, since
   the chapter's own font rule out-ranks a font class. */
export function ViralLetter() {
  return (
    <section
      aria-labelledby="vd-letter-title"
      className="block block--letter vd-letter"
      style={{ fontFamily: monaSans.style.fontFamily }}
    >
      <div className="letter__wrapper">
        <h2 id="vd-letter-title" className="letter__type">
          <span className="letter__word vd-letter__word">Viral</span>
        </h2>
        <div className="letter__content">
          <p className="letter__description">
            A Coimbatore-born agency, built for brands that want to lead — not
            follow.
          </p>
        </div>
      </div>
    </section>
  );
}
