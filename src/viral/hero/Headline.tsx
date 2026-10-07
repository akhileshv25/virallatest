import { HERO_TITLE_ID } from "@/viral/viral";

/* "Made to spread." — the full stop is a blue dot. A screen-reader-only "."
   keeps the real sentence. Both lines are forced, so a late font swap can
   change their width but never the line count. */
export function Headline() {
  return (
    <h1 id={HERO_TITLE_ID} className="vd-h1">
      <span className="block">Made to</span>{" "}
      <span className="block whitespace-nowrap">
        spread
        <span className="sr-only">.</span>
        <span className="vd-anchor" aria-hidden="true" />
      </span>
    </h1>
  );
}
