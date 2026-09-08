import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-row">
              <Logo />
              <span className="font-display" style={{ fontWeight: 700 }}>
                {SITE.name}
              </span>
            </div>
            <p className="desc">{SITE.description}</p>
            <p className="desc" style={{ fontWeight: 600, opacity: 0.85 }}>
              Más de 30 años acompañando al productor de la región.
            </p>
            <div className="footer__social">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <Icon name="facebook" bare />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <Icon name="instagram" bare />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" bare />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="social-btn"
                aria-label="Email"
              >
                <Icon name="mail" bare />
              </a>
            </div>
          </div>
          <div>
            <h4>Navegación</h4>
            <div className="footer__col">
              {NAV_ITEMS.map((item) => (
                <Link key={item.key} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Contacto</h4>
            <div className="footer__col">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.whatsappNumber}
              </a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <span>{SITE.address}</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            Copyright © {year} {SITE.name}. Todos los derechos reservados.
          </span>
          <Link href="/politica-de-privacidad">Política de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
