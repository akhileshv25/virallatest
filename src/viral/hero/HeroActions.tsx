import { CONTACT_HREF, SERVICES_HREF } from "@/viral/viral";

/* A share icon: one node passing to two. Its links redraw when the button is
   hovered (hero.css). */
function ShareGlyph() {
  return (
    <svg className="vd-glyph" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <line className="vd-glyph__link" x1={4} y1={10} x2={16} y2={4} pathLength={1} />
      <line className="vd-glyph__link" x1={4} y1={10} x2={16} y2={16} pathLength={1} />
      <circle className="vd-glyph__node" cx={4} cy={10} r={3} />
      <circle className="vd-glyph__node vd-glyph__node--far" cx={16} cy={4} r={2.5} />
      <circle className="vd-glyph__node vd-glyph__node--far" cx={16} cy={16} r={2.5} />
    </svg>
  );
}

/* The hero's actions: "Start a project" goes to the enquiry form; "See
   services" becomes a design tool's selection box on hover (CSS only). */
export function HeroActions() {
  return (
    <div className="vd-actions">
      <a href={CONTACT_HREF} className="vd-cta vd-cta--primary">
        <ShareGlyph />
        Start a project
      </a>
      <a href={SERVICES_HREF} className="vd-cta vd-cta--secondary">
        See services
      </a>
    </div>
  );
}
