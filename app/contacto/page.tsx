import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { MAP_EMBED_SRC, OFFICES, waLink } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribinos por WhatsApp o dejanos tu mensaje. Casa central en Bahía Blanca (Don Bosco 3195) y sucursal en Villalonga.",
};

export default function ContactoPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingBottom: 64 }}>
        <div className="noise" />
        <div
          className="blob"
          style={{
            width: 360,
            height: 360,
            background: "var(--brand-400)",
            top: -100,
            left: -60,
          }}
        />
        <div className="container">
          <div className="reveal eyebrow">CONTACTO</div>
          <h1
            className="reveal hero__title"
            style={{
              transitionDelay: "80ms",
              fontSize: "clamp(2rem,4vw,2.8rem)",
            }}
          >
            ¡Cualquier consulta o cotización!
          </h1>
          <p
            className="reveal hero__subtitle"
            style={{ transitionDelay: "140ms", maxWidth: 600 }}
          >
            Escribinos por WhatsApp o dejanos tu mensaje — te respondemos a la
            brevedad.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="contact-grid">
            <div className="reveal">
              <div className="whatsapp-cta-card">
                <div
                  className="icon-circle"
                  style={{ background: "var(--brand-500)", color: "#fff" }}
                >
                  <Icon name="whatsapp" bare />
                </div>
                <a
                  href={waLink("Hola, quiero consultar o cotizar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Enviar WhatsApp
                </a>
                <p>¡Cualquier consulta o cotización!</p>
              </div>

              <ContactForm />
            </div>

            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <div className="office-card">
                <span
                  className="badge office-card__badge"
                  style={{
                    background: "var(--brand-100)",
                    color: "var(--brand-600)",
                  }}
                >
                  {OFFICES.bahiaBlanca.badge}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "var(--brand-900)",
                    marginBottom: 14,
                  }}
                >
                  {OFFICES.bahiaBlanca.name}
                </h3>
                <div className="office-row">
                  <Icon name="mapPin" />
                  <div>{OFFICES.bahiaBlanca.address}</div>
                </div>
                <div className="office-row">
                  <Icon name="phone" />
                  <div>
                    <a href={OFFICES.bahiaBlanca.phoneHref}>
                      {OFFICES.bahiaBlanca.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="office-row">
                  <Icon name="mail" />
                  <div>
                    <a href={`mailto:${OFFICES.bahiaBlanca.email}`}>
                      {OFFICES.bahiaBlanca.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="divider" style={{ margin: "32px 0" }}>
                <div className="map-frame">
                  <iframe
                    src={MAP_EMBED_SRC}
                    loading="lazy"
                    title="Mapa — Don Bosco 3195, Bahía Blanca"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="office-card">
                <span
                  className="badge office-card__badge"
                  style={{
                    background: "var(--brand-100)",
                    color: "var(--brand-600)",
                  }}
                >
                  {OFFICES.villalonga.badge}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "var(--brand-900)",
                    marginBottom: 14,
                  }}
                >
                  {OFFICES.villalonga.name}
                </h3>
                <div className="office-row">
                  <Icon name="mapPin" />
                  <div>{OFFICES.villalonga.address}</div>
                </div>
                <div className="office-row">
                  <Icon name="clock" />
                  <div style={{ whiteSpace: "pre-line" }}>
                    {OFFICES.villalonga.hours}
                  </div>
                </div>
                <div className="office-row">
                  <Icon name="phone" />
                  <div>
                    <a href={OFFICES.villalonga.phoneHref}>
                      {OFFICES.villalonga.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="office-row">
                  <Icon name="mail" />
                  <div>
                    <a href={`mailto:${OFFICES.villalonga.email}`}>
                      {OFFICES.villalonga.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
