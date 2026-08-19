import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import VideoModal from "@/components/VideoModal";
import { SITE, waLink } from "@/lib/content";

const T100_SPECS = [
  {
    icon: "droplet" as const,
    title: "100 L",
    text: "Pulverización de alto volumen y eficiencia",
  },
  {
    icon: "target" as const,
    title: "100 KG",
    text: "Gran capacidad de esparcimiento de sólidos",
  },
  {
    icon: "shield" as const,
    title: "Seguridad líder",
    text: "Sistema de seguridad líder en la industria",
  },
  {
    icon: "clipboard" as const,
    title: "100 KG",
    text: "Tu asistente de transporte a campo",
  },
  {
    icon: "clock" as const,
    title: "Carga rápida",
    text: "Económica y de ahorro de energía",
  },
  {
    icon: "send" as const,
    title: "Señal fuerte",
    text: "Sin miedo a obstrucciones en el lote",
  },
];

const MAVIC3_SPECS = [
  {
    icon: "target" as const,
    title: "20 MP + multiespectral",
    text: "Cámara RGB de 20MP y 4 cámaras multiespectrales (G/R/RE/NIR)",
  },
  {
    icon: "clock" as const,
    title: "Hasta 42 min de vuelo",
    text: "Cubre más de 2 km² de lote en un solo vuelo",
  },
  {
    icon: "leaf" as const,
    title: "Índices de vegetación",
    text: "NDVI, GNDVI, NDRE, LCI y OSAVI en tiempo real",
  },
  {
    icon: "mapPin" as const,
    title: "Precisión RTK",
    text: "Mapeo de nivel centimétrico, sin puntos de control en tierra",
  },
  {
    icon: "shield" as const,
    title: "Detección de obstáculos",
    text: "Sensores en todas las direcciones y regreso automático seguro",
  },
  {
    icon: "send" as const,
    title: "Largo alcance",
    text: "Transmisión O3 de hasta 15 km",
  },
];

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
              <div
                className="duotone light ratio ratio-16-10"
                style={{ borderRadius: 0 }}
              >
                <Image
                  src="/images/dji-mavic3-oficial.jpg"
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
              </div>
            </div>

            <div
              className="reveal card-hover service-card"
              style={{ transitionDelay: "120ms" }}
            >
              <div
                className="duotone light ratio ratio-16-10"
                style={{ borderRadius: 0 }}
              >
                <Image
                  src="/images/dji-t100-oficial.jpg"
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
            Ficha técnica del Mavic 3 Multiespectral
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="specs-panel reveal" style={{ marginBottom: 28 }}>
            <div className="specs-panel__media" style={{ order: 2 }}>
              <Image
                src="/images/dji-mavic3-oficial.jpg"
                alt="DJI Mavic 3 Multiespectral — foto oficial DJI Agriculture"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="specs-panel__body" style={{ order: 1 }}>
              <div className="eyebrow">DJI MAVIC 3 MULTISPECTRAL</div>
              <h3 className="feature-panel__title">
                Ve más, trabajá más inteligente
              </h3>
              <div className="specs-grid">
                {MAVIC3_SPECS.map((spec) => (
                  <div className="spec-item" key={spec.title}>
                    <div className="icon-circle">
                      <Icon name={spec.icon} bare />
                    </div>
                    <div>
                      <strong>{spec.title}</strong>
                      <span>{spec.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                  marginTop: 28,
                }}
              >
                <a
                  href={waLink(
                    "Hola, quiero consultar por servicio de Mapeo con el Mavic 3",
                    SITE.whatsappNumberDrones,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Icon name="whatsapp" /> Consultar por el Mavic 3
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
          <h2 className="reveal section-title">Ficha técnica del DJI T100</h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="specs-panel reveal">
            <div className="specs-panel__media">
              <Image
                src="/images/dji-t100-oficial.jpg"
                alt="DJI Agras T100 aplicando en el campo — foto oficial DJI Agriculture"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="specs-panel__body">
              <div className="eyebrow">DJI AGRAS T100</div>
              <h3 className="feature-panel__title">
                Máxima capacidad, máximo rendimiento
              </h3>
              <div className="specs-grid">
                {T100_SPECS.map((spec) => (
                  <div className="spec-item" key={spec.title}>
                    <div className="icon-circle">
                      <Icon name={spec.icon} bare />
                    </div>
                    <div>
                      <strong>{spec.title}</strong>
                      <span>{spec.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                  marginTop: 28,
                }}
              >
                <a
                  href={waLink(
                    "Hola, quiero consultar por servicio de T100 para mi campo",
                    SITE.whatsappNumberDrones,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Icon name="whatsapp" /> Consultar por el T100
                </a>
                <VideoModal
                  src="/videos/video-instructivo-t100.mp4"
                  poster="/images/dji-t100-oficial.jpg"
                  title="Video instructivo — DJI T100"
                  className="btn btn-ghost"
                  style={{ color: "var(--brand-600)" }}
                >
                  Ver video instructivo
                </VideoModal>
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
