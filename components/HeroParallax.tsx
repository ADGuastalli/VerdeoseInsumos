"use client";

import { useEffect } from "react";

// Efecto parallax sutil en los blobs decorativos del hero de Inicio.
// Se monta solo dentro del hero de la home (ver app/page.tsx).
export default function HeroParallax() {
  useEffect(() => {
    const heroSection = document.getElementById("inicio");
    if (!heroSection) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroSection.querySelectorAll<HTMLElement>(".blob").forEach((b, i) => {
          b.style.transform = `translateY(${y * (0.15 + i * 0.05)}px)`;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
