import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { waLink, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Drones",
  description:
    "Mapeo con Mavic 3 y pulverización, fertilización y siembra con DJI T100 — aplicación con drones en Bahía Blanca y la región.",
};

export default function DronesPage() {
  return (
    <>
      <section
        className="hero"
        style={{ minHeight: "auto", padding: "150px 0 90px" }}
      >
        <div className="hero__bg">
          <div className="duotone" style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/images/hero-drone.jpg"
              alt="Mapeo y aplicación con drones"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="noise" />
          <div
            className="blob"
            style={{
              width: 380,
              height: 380,
              background: "var(--brand-400)",
              top: -80,
              left: -80,
            }}
          />
        </div>
        <div className="container" style={{ position: "relative" }}>
          <div className="reveal hero__badge">
            <span className="hero__badge-dot" /> DRONES
          </div>
          <h1
            className="reveal hero__title"
            style={{ transitionDelay: "80ms", maxWidth: 640 }}
          >
            Mapeo y aplicación con <span className="accent">drones</span>
          </h1>
          <p
            className="reveal hero__subtitle"
            style={{ transitionDelay: "160ms" }}
          >
            Contamos con un Mavic 3 para mapeo y un DJI T100 para pulverización,
            fertilización y siembra.
          </p>
          <div
            className="reveal hero__actions"
            style={{ transitionDelay: "240ms", marginBottom: 0 }}
          >
            <a
              href={waLink(
                "Hola, quiero consultar por servicio de Drones",
                SITE.whatsappNumberDrones,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <Icon name="whatsapp" /> Consultar aplicación con drones
            </a>
          </div>
        </div>
      </section>

      <section
        className="section--tight"
        style={{
          background: "var(--brand-100)",
          textAlign: "center",
          paddingBottom: 0,
        }}
      >
        <div className="container">
          <h2 className="reveal section-title">¿Qué hacemos con drones?</h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="drones-product-grid">
            <div className="reveal card-hover service-card">
              <div className=" ratio ratio-16-10" style={{ borderRadius: 0 }}>
                <Image
                  src="/images/drone_mapeo.webp"
                  alt="Mavic 3 — dron compacto para mapeo aéreo"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-card__body">
                <h3
                  className="service-card__title"
                  style={{ textAlign: "center" }}
                >
                  Mavic 3
                </h3>
                <ul className="check-list">
                  <li>
                    <Icon name="check" /> Mapeo
                  </li>
                  <li>
                    <Icon name="check" /> Detección de manchones y fallas de
                    cultivo
                  </li>
                  <li>
                    <Icon name="check" /> Seguimiento de la evolución del lote
                  </li>
                </ul>
                <a
                  href={waLink(
                    "Hola, quiero consultar por servicio de Mapeo",
                    SITE.whatsappNumberDrones,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 8,
                  }}
                >
                  <Icon name="whatsapp" /> Consultar relevamiento
                </a>
              </div>
            </div>

            <div
              className="reveal card-hover service-card"
              style={{ transitionDelay: "120ms" }}
            >
              <div className="ratio ratio-16-10" style={{ borderRadius: 0 }}>
                <Image
                  src="/images/dji-t100-campo.jpg"
                  alt="DJI T100 — dron de carga con tanque, para pulverización, fertilización y siembra"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-card__body">
                <h3
                  className="service-card__title"
                  style={{ textAlign: "center" }}
                >
                  DJI T100
                </h3>
                <ul className="check-list">
                  <li>
                    <Icon name="check" /> Pulverización (herbicidas, fungicidas,
                    insecticidas, fertilizantes)
                  </li>
                  <li>
                    <Icon name="check" /> Fertilización de sólidos
                  </li>
                  <li>
                    <Icon name="check" /> Siembra
                  </li>
                </ul>
                <a
                  href={waLink(
                    "Hola, quiero consultar por servicio de T100",
                    SITE.whatsappNumberDrones,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 8,
                  }}
                >
                  <Icon name="whatsapp" /> Consultar aplicación
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section--tight"
        style={{
          background: "var(--brand-100)",
          textAlign: "center",
          paddingBottom: 0,
        }}
      >
        <div className="container">
          <h2 className="reveal section-title">
            Ventajas de aplicar con drones
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="advantages-grid">
            <ul className="reveal check-list">
              <li>
                <Icon name="check" /> <strong>Mayor precisión</strong>&nbsp;en
                la aplicación
              </li>
              <li>
                <Icon name="check" /> <strong>Sin pisoteo</strong>&nbsp;del
                cultivo
              </li>
              <li>
                <Icon name="check" /> <strong>Rapidez</strong>&nbsp;operativa
              </li>
            </ul>
            <ul
              className="reveal check-list"
              style={{ transitionDelay: "120ms" }}
            >
              <li>
                <Icon name="check" /> Aplicación en{" "}
                <strong>lotes difíciles</strong>
              </li>
              <li>
                <Icon name="check" /> Siembras <strong>sobre cultivo</strong>
              </li>
              <li>
                <Icon name="check" />{" "}
                <strong>Fertilizaciones específicas</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section--tight"
        style={{
          background: "var(--brand-100)",
          textAlign: "center",
          paddingBottom: 0,
        }}
      >
        <div className="container">
          <h2 className="reveal section-title">
            Nuestro proceso de aplicación con drones
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="process-wrap">
            <div className="process-line" />
            <div className="process-grid">
              <div className="reveal">
                <div className="step-number">1</div>
                <h3 className="step-title">Nos consultás por WhatsApp</h3>
                <p className="step-text">
                  Nos escribís y te hacemos las preguntas pertinentes para tener
                  la mayor precisión a la hora de analizar el lote.
                </p>
              </div>
              <div className="reveal" style={{ transitionDelay: "140ms" }}>
                <div className="step-number">2</div>
                <h3 className="step-title">Evaluamos situación del lote</h3>
                <p className="step-text">
                  Con los datos proporcionados procedemos a realizar la
                  evaluación técnica del lote, siempre a cargo de un{" "}
                  <strong>Ingeniero Agrónomo matriculado</strong>.
                </p>
              </div>
              <div className="reveal" style={{ transitionDelay: "280ms" }}>
                <div className="step-number">3</div>
                <h3 className="step-title">Coordinamos la aplicación</h3>
                <p className="step-text">
                  Aplicación precisa, segura y <strong>registrada</strong>,
                  siguiendo receta agronómica, condiciones ambientales óptimas y
                  criterios técnicos profesionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
