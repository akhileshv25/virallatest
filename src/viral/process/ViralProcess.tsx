import type { CSSProperties } from "react";
import { CONTACT_HREF, PROCESS } from "@/viral/viral";
import { LANDMARKS } from "./landmarks";
import "@/viral/tag.css";
import "./process.css";

/* Each landmark's colour, escalating toward growth: ink, blue, then gold */
const TONES = ["ink", "ink", "blue", "blue", "yellow"] as const;

/* How tall each landmark stands on the chart, as a share of its height.
   Stepped, not to scale — at true scale Pisa would be a speck beside the
   Burj; the real heights are printed under each one. */
const HEIGHTS = [30, 42, 62, 80, 100];

/* The trend line across the landmarks' tips, in a 0–100 box (x at the five
   columns' centres, y down from the top) */
const TREND = HEIGHTS.map((h, i) => `${10 + i * 20},${100 - h}`).join(" ");

/* How we work, as a skyline: the five steps as five real landmarks, each
   taller than the last — Pisa, Qutub Minar, the Eiffel Tower, the Empire
   State Building, the Burj Khalifa — standing on one ground line, with the trend
   line and nodes (the hero's network) across their tips and each step's
   words beneath. On wide screens they rise in turn as the section scrolls
   in (CSS scroll-driven, transform only); on phones each step is a row with
   its landmark beside it. The finished skyline is the base. */
export function ViralProcess() {
  return (
    <section id="process" aria-labelledby="vd-process-title" className="vd-steps">
      <div className="vd-steps__inner">
        <header className="vd-steps__head">
          <h2 id="vd-process-title" className="vd-tag vd-steps__title">
            <span className="vd-tag__band">How</span>{" "}
            <span className="vd-tag__word">we work</span>
          </h2>
          <div>
            <p className="vd-steps__lead">
              Five steps, each built on the one before — from a leaning start
              to the top of the skyline. Every brief starts with an audit, so
              the plan is built on what your numbers say.
            </p>
            <a className="vd-tag__button vd-steps__cta" href={CONTACT_HREF}>
              Book the audit
            </a>
          </div>
        </header>

        <div className="vd-steps__chart">
          <svg
            className="vd-steps__trend"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline points={TREND} />
          </svg>

          <ol className="vd-steps__list">
            {PROCESS.map((step, i) => {
              const landmark = LANDMARKS[i];
              return (
                <li
                  key={step.title}
                  className={`vd-step vd-step--${TONES[i]}`}
                  style={{ "--s": i, "--h": `${HEIGHTS[i]}%` } as CSSProperties}
                >
                  <div className="vd-step__site" aria-hidden="true">
                    <svg
                      className="vd-step__building"
                      viewBox={landmark.viewBox}
                      preserveAspectRatio="xMidYMax meet"
                      fill="currentColor"
                    >
                      {landmark.shape}
                    </svg>
                    <span className="vd-step__node" />
                  </div>
                  <div className="vd-step__text">
                    <span className="vd-step__num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="vd-step__title">{step.title}</h3>
                    <p className="vd-step__line">{step.line}</p>
                    <p className="vd-step__landmark">
                      {landmark.name}, <strong>{landmark.metres} m</strong>
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
