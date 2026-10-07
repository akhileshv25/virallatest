import { ViralServices } from "./ViralServices";

/* The services row on its own root. On wide screens the section pins and
   the row pans sideways with the page scroll, its cards sweeping in first —
   CSS scroll-driven (services.css), no JavaScript. On phones it's a
   swipeable row. */
export function ViralServicesScene() {
  return (
    <div id="vd-services" className="sticky-grid-scroll">
      <ViralServices />
    </div>
  );
}
