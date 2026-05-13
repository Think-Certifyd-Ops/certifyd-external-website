"use client";

import { useEffect } from "react";

/**
 * Reveals .reveal elements on scroll and triggers the .stack-layers assembly.
 * Mirrors the inline script from the static mockup. Mount once at the bottom
 * of any marketing page that uses .reveal or #stackLayers.
 */
export function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const stackLayers = document.getElementById("stackLayers");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));

    let so: IntersectionObserver | undefined;
    if (stackLayers) {
      so = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              stackLayers.classList.add("visible");
              so?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      so.observe(stackLayers);
    }

    return () => {
      io.disconnect();
      so?.disconnect();
    };
  }, []);

  return null;
}
