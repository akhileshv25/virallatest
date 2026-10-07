"use client";

import { useEffect } from "react";

/* Marks a section `data-near` once it comes within a viewport of the
   screen, so CSS can start heavy backgrounds (photos) then rather than with
   the page. Renders nothing; the section stays a server component. */
export function MarkNear({ targetId }: { targetId: string }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.setAttribute("data-near", "");
        observer.disconnect();
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetId]);

  return null;
}
