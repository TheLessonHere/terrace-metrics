"use client";

import { useEffect } from "react";

/**
 * Lightweight intersection-observer reveal. Adds a class to elements with
 * `data-reveal` once they enter the viewport, so CSS can fade them in.
 * GSAP handles richer animations elsewhere; this is for blanket fade-ups.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-revealed");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
