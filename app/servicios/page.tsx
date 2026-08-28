import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SITE, waLink } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Insumos agrícolas, asesoramiento agronómico y aplicación con drones — los tres pilares de Verdeos, explicados en detalle.",
};

export default function ServiciosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="noise" />
        <div
          className="blob"
          style={{
            width: 380,
            height: 380,
            background: "var(--brand-400)",
            top: -100,
            right: -60,
          }}
        />
        <div className="container">
          <div className="reveal eyebrow">NUESTROS SERVICIOS</div>
          <h1
            className="reveal hero__title"
            style={{
              transitionDelay: "80ms",
              fontSize: "clamp(2rem,4vw,2.8rem)",
            }}
          >
            Todo lo que tu campo necesita, en un solo lugar
          </h1>
          <p
            className="reveal hero__subtitle"
            style={{ transitionDelay: "140ms", maxWidth: 600 }}
          >
            Insumos, asesoramiento y aplicación con drones — los tres pilares de
            Verdeos, explicados en detalle.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          {/* INSUMOS */}
          <div className="feature-panel reveal">
            <div className="feature-panel__body" style={{ order: 1 }}>
              <div className="eyebrow">01 · INSUMOS AGRÍCOLAS</div>
              <h2 className="feature-panel__title">Insumos agrícolas</h2>
              <p className="feature-panel__lead">
                Comercializamos agroquímicos, semillas y fertilizantes de
                primeras marcas, con disponibilidad y respaldo técnico.
              </p>
              <div className="feature-panel__focus">
                Trabajamos con foco en:
              </div>
              <ul className="check-list">
                <li>
                  <Icon name="check" /> Correcta elección de productos
                </li>
                <li>
                  <Icon name="check" /> Eficiencia productiva
                </li>
                <li>
                  <Icon name="check" /> Logística y entrega a campo
                </li>
              </ul>
              <p className="feature-panel__closing">
                Nuestro objetivo es que cada insumo tenga sentido dentro del
                sistema productivo.
              </p>
              <a
                href={waLink(
                  "Hola, quiero consultar por insumos",
                  SITE.whatsappNumber,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Icon name="whatsapp" /> Consultar por WhatsApp
              </a>
            </div>
            <div className="feature-panel__media" style={{ order: 2 }}>
              <Image
                src="/images/insumos.jpg"
                alt="Insumos agrícolas: agroquímicos, semillas y fertilizantes"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* ASESORAMIENTO */}
          <div
            className="feature-panel reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="feature-panel__media" style={{ order: 1 }}>
              <Image
                src="/images/asesoramiento-campo.jpg"
                alt="Asesoramiento agronómico en campo"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="feature-panel__body" style={{ order: 2 }}>
              <div className="eyebrow">02 · ASESORAMIENTO AGRONÓMICO</div>
              <h2 className="feature-panel__title">Asesoramiento agronómico</h2>
              <p className="feature-panel__lead">
                Con más de 30 años de trayectoria en el rubro, brindamos
                asesoramiento técnico adaptado a cada cultivo, ambiente y
                objetivo productivo.
              </p>
              <div className="feature-panel__focus">Nos especializamos en:</div>
              <ul className="check-list">
                <li>
                  <Icon name="check" /> Cultivo de cebolla, trigo, maíz, girasol
                  y cebada
                </li>
                <li>
                  <Icon name="check" /> Orden de agregado al tanque y mezclas
                </li>
                <li>
                  <Icon name="check" /> Diversidad de soluciones y productos
                </li>
              </ul>
              <p className="feature-panel__closing">
                Buscamos decisiones simples, eficientes y sustentables en el
                tiempo.
              </p>
              <a
                href={waLink(
                  "Hola, quiero consultar por asesoramiento",
                  SITE.whatsappNumber,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Icon name="whatsapp" /> Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* DRONES */}
          <div
            className="feature-panel reveal"
            style={{ transitionDelay: "200ms", marginBottom: 0 }}
          >
            <div className="feature-panel__body" style={{ order: 1 }}>
              <div className="eyebrow">03 · APLICACIÓN CON DRONES</div>
              <h2 className="feature-panel__title">Aplicación con drones</h2>
              <p className="feature-panel__lead">
                Nuevo servicio de pulverización, fertilización, siembra y mapeo
                con dron T100 y Mavic 3.
              </p>
              <div className="feature-panel__focus">
                Este servicio es ideal para:
              </div>
              <ul className="check-list">
                <li>
                  <Icon name="check" /> Lotes difíciles
                </li>
                <li>
                  <Icon name="check" /> Aplicaciones dirigidas
                </li>
                <li>
                  <Icon name="check" /> Situaciones donde la maquinaria
                  tradicional no es eficiente
                </li>
              </ul>
              <p className="feature-panel__closing">
                Tecnología aplicada al campo, con criterio técnico.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <a
                  href={waLink(
                    "Hola, quiero consultar por servicio de Drones",
                    SITE.whatsappNumberDrones,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Icon name="whatsapp" /> Consultar por WhatsApp
                </a>
                <Link
                  href="/drones"
                  className="btn btn-ghost"
                  style={{ color: "var(--brand-600)" }}
                >
                  Ver página de Drones <Icon name="arrowRight" />
                </Link>
              </div>
            </div>
            <div className="feature-panel__media" style={{ order: 2 }}>
              <Image
                src="/images/dji-t100-oficial.jpg"
                alt="Drone agrícola DJI T100 dispersando sobre el cultivo"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
