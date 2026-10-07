import { Mona_Sans } from "next/font/google";

/* The new design's one typeface, defined once and shared by its header and
   hero — every call to a font function creates a separate hosted instance.
   The width axis is included for the expanded display cut. Preloading is
   keyed to the page file, so it preloads on `/` for both designs. */
export const monaSans = Mona_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
});
