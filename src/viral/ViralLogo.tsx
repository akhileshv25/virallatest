import "./viral-logo.css";

/* The Viral Digi Ventures wordmark, set in the monz logo's grammar: VIRAL in
   Mona Sans at its heaviest and widest, its full stop the hero's blue node,
   with DIGI VENTURES under it on a slanted band. `variant="word"` is VIRAL
   alone, for use inline in a sentence. Decorative — the surrounding link or
   text carries the accessible name. Size it by setting font-size on it. */
export function ViralLogo({
  className = "",
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "word";
}) {
  return (
    <span className={`vd-logo ${className}`} aria-hidden="true">
      <span className="vd-logo__mark">
        Viral<span className="vd-logo__dot" />
      </span>
      {variant === "full" && (
        <>
          {" "}
          <span className="vd-logo__tag">
            <span className="vd-logo__band">Digi</span>{" "}
            <span className="vd-logo__rest">Ventures</span>
          </span>
        </>
      )}
    </span>
  );
}
