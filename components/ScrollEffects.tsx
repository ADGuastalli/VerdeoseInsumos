"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Monta los IntersectionObservers de "reveal on scroll" y de contadores animados.
// Se re-escanea el DOM en cada cambio de ruta (usePathname como dependencia) porque
// el layout no se remonta entre páginas — solo cambia el contenido de la página.
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => revealIo.observe(el));

    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.target);
          let cur = 0;
          const step = Math.max(1, Math.round(target / 30));
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(t);
            }
            el.textContent = String(cur);
          }, 40);
          counterIo.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".counter").forEach((el) => counterIo.observe(el));

    return () => {
      revealIo.disconnect();
      counterIo.disconnect();
    };
  }, [pathname]);

  return null;
}
