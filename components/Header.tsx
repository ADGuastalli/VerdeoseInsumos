"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { NAV_ITEMS, waLink } from "@/lib/content";

// Mapea la ruta actual a la key de nav activa (solo para los 4 links de página real;
// los anclas de una sola sección en Inicio —Cultivos/Sucursales— no se resaltan).
function activeKeyFor(pathname: string): string | null {
  if (pathname === "/") return null;
  if (pathname.startsWith("/servicios")) return "servicios";
  if (pathname.startsWith("/drones")) return "drones";
  if (pathname.startsWith("/contacto")) return "contacto";
  return null;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeKey = activeKeyFor(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú mobile al cambiar de ruta.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="container navbar">
          <Link href="/" className="navbar__brand">
            <Logo />
            <span className="navbar__name">
              Verdeos e Insumos
              <br />
              <span>Agropecuarios</span>
            </span>
          </Link>
          <nav className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={activeKey === item.key ? "nav-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="navbar__right">
            <a
              href={waLink("Hola! Quiero consultar sobre insumos y servicios de Verdeos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
            >
              <Icon name="whatsapp" /> WhatsApp
            </a>
            <button
              className="burger"
              aria-label="Abrir menú"
              onClick={() => setMenuOpen(true)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="mobile-menu__top">
          <span className="font-display" style={{ fontWeight: 700 }}>
            Menú
          </span>
          <button
            className="mobile-menu__close"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
          >
            <Icon name="x" />
          </button>
        </div>
        <nav className="mobile-menu__nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={activeKey === item.key ? "nav-active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={waLink("Hola! Quiero consultar sobre insumos y servicios de Verdeos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="accent"
            onClick={() => setMenuOpen(false)}
          >
            Escribir por WhatsApp →
          </a>
        </nav>
      </div>
    </>
  );
}
