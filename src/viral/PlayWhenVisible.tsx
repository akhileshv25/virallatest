"use client";

import { useEffect } from "react";

/* Marks a section `data-active` while any of it is on screen, and removes
   the mark when it leaves — CSS keys its looping animations to it, so they
   only run while someone can see them. Renders nothing; the section stays a
   server component beside it. */
export function PlayWhenVisible({ targetId }: { targetId: string }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      el.toggleAttribute("data-active", entry.isIntersecting);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetId]);

  return null;
}
