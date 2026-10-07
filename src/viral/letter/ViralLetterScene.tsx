import { MarkNear } from "@/viral/MarkNear";
import { ViralLetter } from "./ViralLetter";

/* The VIRAL word on its own root. On wide screens the section pins: the
   word rises, its photo lanes drift and the ground turns charcoal as the
   page scrolls — CSS scroll-driven (letter.css), no JavaScript. On phones
   it's the finished frame. MarkNear starts the photos once the section is
   a viewport away. */
export function ViralLetterScene() {
  return (
    <>
      <div id="vd-letter" className="sticky-grid-scroll">
        <ViralLetter />
      </div>
      <MarkNear targetId="vd-letter" />
    </>
  );
}
