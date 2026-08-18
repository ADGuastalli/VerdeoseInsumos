import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import HeroParallax from "@/components/HeroParallax";
import { BRANCHES, CROPS, waLink } from "@/lib/content";

export default function InicioPage() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero__bg">
          <div className="duotone" style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/images/hero-drone.jpg"
              alt="Drone agrícola de carga aplicando sobre el cultivo"
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
              width: 420,
              height: 420,
              background: "var(--brand-400)",
              top: -80,
              left: -80,
            }}
          />
          <div
            className="blob"
            style={{
              width: 380,
              height: 380,
              background: "var(--sand-400)",
              bottom: 0,
              right: 0,
              animationDelay: "-6s",
            }}
          />
        </div>
        <HeroParallax />

        <div className="container hero__grid">
          <div className="hero__content">
            <div className="reveal hero__badge">
              <span className="hero__badge-dot" /> Bahía Blanca · Villalonga ·
              Pedro Luro · Coronel Suárez
            </div>
            <h1
              className="reveal hero__title"
              style={{ transitionDelay: "80ms" }}
            >
              Insumos agrícolas, asesoramiento técnico y{" "}
              <span className="accent">aplicación con drones</span>
            </h1>
            <p
              className="reveal hero__subtitle"
              style={{ transitionDelay: "160ms" }}
            >
              Agroquímicos, semillas y fertilizantes de primeras marcas, con
              atención directa a campo en toda la región.
            </p>
            <div
              className="reveal hero__actions"
              style={{ transitionDelay: "240ms" }}
            >
              <a
                href={waLink(
                  "Hola! Quiero consultar sobre insumos y servicios de Verdeos.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <Icon name="whatsapp" /> Consultar por WhatsApp
              </a>
              <Link href="/servicios" className="btn btn-ghost">
                Ver servicios <Icon name="arrowRight" />
              </Link>
            </div>
            <div
              className="reveal hero__stats"
              style={{ transitionDelay: "320ms" }}
            >
              <div>
                <div className="stat-num counter" data-target={4}>
                  0
                </div>
                <div className="stat-label">Localidades en la región</div>
              </div>
              <div>
                <div className="stat-num counter" data-target={5}>
                  0
                </div>
                <div className="stat-label">Cultivos principales</div>
              </div>
              <div>
                <div className="stat-num counter" data-target={3}>
                  0
                </div>
                <div className="stat-label">Servicios integrados</div>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div
              className="reveal-scale float-y"
              style={{ position: "relative" }}
            >
              <div
                className="duotone ligh ratio ratio-4-5"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                <Image
                  src="/images/hero-visual-trigo.jpg"
                  alt="Campo de trigo listo para trabajar"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="hero__float-card">
                <span className="icon-circle sm" style={{ marginBottom: 0 }}>
                  <Icon name="target" bare />
                </span>
                <div>
                  <strong>Aplicación de precisión</strong>
                  <small>Cobertura pareja, menos deriva</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/servicios" className="scroll-cue">
          Descubrí más <Icon name="chevronDown" className="bounce" />
        </Link>
      </section>

      {/* SERVICIOS (teaser, ver página completa en /servicios) */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="reveal eyebrow">NUESTROS SERVICIOS</div>
            <h2
              className="reveal section-title"
              style={{ transitionDelay: "80ms" }}
            >
              Todo lo que tu campo necesita, en un solo lugar
            </h2>
          </div>

          <div className="services-grid">
            <div className="reveal card-hover service-card">
              <div className="ratio ratio-16-10" style={{ borderRadius: 0 }}>
                <Image
                  src="/images/insumos.jpg"
                  alt="Agroquímicos, semillas y fertilizantes"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-card__body">
                <div className="icon-circle">
                  <Icon name="leaf" bare />
                </div>
                <h3 className="service-card__title">Insumos agrícolas</h3>
                <p className="service-card__text">
                  Agroquímicos, semillas y fertilizantes de primeras marcas, con
                  disponibilidad y respaldo.
                </p>
                <Link href="/servicios" className="service-card__link">
                  Conocer más <Icon name="arrowRight" />
                </Link>
              </div>
            </div>

            <div
              className="reveal card-hover service-card"
              style={{ transitionDelay: "120ms" }}
            >
              <div className="ratio ratio-16-10" style={{ borderRadius: 0 }}>
                <Image
                  src="/images/asesoramiento-campo.jpg"
                  alt="Asesoramiento agronómico en campo"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-card__body">
                <div className="icon-circle">
                  <Icon name="clipboard" bare />
                </div>
                <h3 className="service-card__title">
                  Asesoramiento agronómico
                </h3>
                <p className="service-card__text">
                  Recomendaciones técnicas adaptadas a cultivo, zona y objetivo
                  productivo.
                </p>
                <Link href="/servicios" className="service-card__link">
                  Conocer más <Icon name="arrowRight" />
                </Link>
              </div>
            </div>

            <div
              className="reveal card-hover service-card"
              style={{ transitionDelay: "240ms" }}
            >
              <div className="ratio ratio-16-10" style={{ borderRadius: 0 }}>
                <Image
                  src="/images/dji-t100-campo.jpg"
                  alt="DJI T100 aplicando sobre el cultivo"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-card__body">
                <div className="icon-circle">
                  <Icon name="drone" bare />
                </div>
                <h3 className="service-card__title">Aplicación con drones</h3>
                <p className="service-card__text">
                  Aplicaciones precisas, seguras y eficientes con tecnología de
                  drones.
                </p>
                <Link href="/drones" className="service-card__link">
                  Ver el servicio <Icon name="arrowRight" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASÍ TRABAJAMOS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <div className="reveal eyebrow">CÓMO TRABAJAMOS</div>
            <h2
              className="reveal section-title"
              style={{ transitionDelay: "80ms" }}
            >
              De la consulta a la aplicación, en tres pasos
            </h2>
          </div>

          <div className="process-wrap">
            <div className="process-line" />
            <div className="process-grid">
              <div className="reveal">
                <div className="step-number">1</div>
                <div
                  className="duotone light ratio ratio-4-3"
                  style={{ marginBottom: 20 }}
                >
                  <Image
                    src="/images/paso1-whatsapp.jpg"
                    alt="Contacto por WhatsApp"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="step-title">Nos escribís por WhatsApp</h3>
                <p className="step-text">
                  Contanos cultivo, zona y qué necesitás.
                </p>
              </div>
              <div className="reveal" style={{ transitionDelay: "140ms" }}>
                <div className="step-number">2</div>
                <div
                  className="duotone light ratio ratio-4-3"
                  style={{ marginBottom: 20 }}
                >
                  <Image
                    src="/images/paso2-analisis.jpg"
                    alt="Análisis de la situación productiva"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="step-title">
                  Analizamos tu situación productiva
                </h3>
                <p className="step-text">
                  Evaluamos alternativas técnicas y comerciales según tu cultivo
                  y problemática.
                </p>
              </div>
              <div className="reveal" style={{ transitionDelay: "280ms" }}>
                <div className="step-number">3</div>
                <div
                  className="duotone light ratio ratio-4-3"
                  style={{ marginBottom: 20 }}
                >
                  <Image
                    src="/images/paso3-aplicacion.jpg"
                    alt="Aplicación con drones en el campo"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="step-title">
                  Recomendamos, entregamos y aplicamos
                </h3>
                <p className="step-text">
                  Asesoramiento + disponibilidad + aplicación precisa con
                  drones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTIVOS */}
      <section id="cultivos" className="section section--dark">
        <div className="noise" />
        <div className="container" style={{ position: "relative" }}>
          <div className="section-head">
            <div className="reveal eyebrow">CULTIVOS</div>
            <h2
              className="reveal section-title"
              style={{ transitionDelay: "80ms" }}
            >
              Cultivos que asesoramos y abastecemos
            </h2>
          </div>
          <div className="crops-grid">
            {CROPS.map((crop, i) => (
              <div
                key={crop.name}
                className="reveal-scale card-hover crop-card ratio ratio-3-4"
                style={i > 0 ? { transitionDelay: `${i * 100}ms` } : undefined}
              >
                <div className="">
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="crop-card__label">
                  <Icon name={crop.icon} /> {crop.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRONES (teaser, ver página completa en /drones) */}
      <section className="section section--alt">
        <div className="container drones-grid">
          <div className="reveal-scale drones-visual">
            <div
              className="duotone ratio ratio-4-3"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Image
                src="/images/drones-campo.jpg"
                alt="DJI T100 en aplicación de precisión, con tanque y brazos de pulverización"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="drones-float">
              <div className="drones-float__title">
                <span
                  className="icon-circle sand sm"
                  style={{ marginBottom: 0 }}
                >
                  <Icon name="droplet" bare />
                </span>
                <strong>Menor deriva</strong>
              </div>
              <p>Aplicación dirigida que cuida el lote y sus bordes.</p>
            </div>
          </div>
          <div>
            <div className="reveal eyebrow">TECNOLOGÍA DRONES</div>
            <h2
              className="reveal section-title"
              style={{ transitionDelay: "80ms", marginBottom: 24 }}
            >
              Aplicaciones precisas, seguras y eficientes
            </h2>
            <p
              className="reveal"
              style={{
                transitionDelay: "140ms",
                color: "rgba(8,46,23,.65)",
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 8,
              }}
            >
              Sumamos tecnología de aplicación con drones a nuestro servicio de
              insumos y asesoramiento, para llegar a cada lote con precisión —
              incluso en condiciones donde la maquinaria convencional no puede
              entrar.
            </p>

            <div className="benefits-grid">
              <div
                className="reveal benefit"
                style={{ transitionDelay: "180ms" }}
              >
                <span className="icon-circle sm" style={{ marginBottom: 0 }}>
                  <Icon name="target" bare />
                </span>
                <div>
                  <strong>Precisión</strong>
                  <br />
                  <span>Cobertura pareja lote a lote</span>
                </div>
              </div>
              <div
                className="reveal benefit"
                style={{ transitionDelay: "240ms" }}
              >
                <span className="icon-circle sm" style={{ marginBottom: 0 }}>
                  <Icon name="shield" bare />
                </span>
                <div>
                  <strong>Seguridad</strong>
                  <br />
                  <span>Menor exposición del operario</span>
                </div>
              </div>
              <div
                className="reveal benefit"
                style={{ transitionDelay: "300ms" }}
              >
                <span className="icon-circle sm" style={{ marginBottom: 0 }}>
                  <Icon name="clock" bare />
                </span>
                <div>
                  <strong>Velocidad</strong>
                  <br />
                  <span>Mayor rendimiento por jornada</span>
                </div>
              </div>
              <div
                className="reveal benefit"
                style={{ transitionDelay: "360ms" }}
              >
                <span className="icon-circle sm" style={{ marginBottom: 0 }}>
                  <Icon name="droplet" bare />
                </span>
                <div>
                  <strong>Cuidado del suelo</strong>
                  <br />
                  <span>Sin compactación de maquinaria</span>
                </div>
              </div>
            </div>

            <div
              className="reveal"
              style={{
                transitionDelay: "420ms",
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                alignItems: "center",
              }}
            >
              <Link href="/drones" className="btn btn-primary">
                Ver todo sobre Drones <Icon name="arrowRight" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SUCURSALES */}
      <section id="sucursales" className="section">
        <div className="container">
          <div className="section-head">
            <div className="reveal eyebrow">DÓNDE ESTAMOS</div>
            <h2
              className="reveal section-title"
              style={{ transitionDelay: "80ms" }}
            >
              Sucursales y asociados en la región
            </h2>
          </div>

          <div
            className="reveal ratio card-hover"
            style={{
              maxWidth: 640,
              margin: "0 auto 48px",
              aspectRatio: "16/10",
              position: "relative",
            }}
          >
            <span
              className="badge"
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                zIndex: 2,
                background: "var(--brand-100)",
                color: "var(--brand-600)",
              }}
            >
              CASA CENTRAL
            </span>
            <Image
              src="/fotos/local-bahia-blanca.jpg"
              alt="Local de Verdeos e Insumos Agropecuarios en Bahía Blanca"
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="branches-grid">
            {BRANCHES.map((branch, i) => (
              <div
                key={branch.name}
                className="reveal branch-card"
                style={i > 0 ? { transitionDelay: `${i * 100}ms` } : undefined}
              >
                {branch.badge && (
                  <span
                    className="badge"
                    style={{
                      marginBottom: 16,
                      display: "inline-block",
                      background: "var(--brand-100)",
                      color: "var(--brand-600)",
                    }}
                  >
                    {branch.badge}
                  </span>
                )}
                <div className="icon-circle">
                  <Icon name="mapPin" bare />
                </div>
                <h3>{branch.name}</h3>
                <div className="sub">{branch.company}</div>
                <p className="addr">{branch.address}</p>
                {branch.hours && (
                  <p
                    className="addr"
                    style={{ fontSize: ".78rem", opacity: 0.75 }}
                  >
                    {branch.hours}
                  </p>
                )}
                <a href={branch.phoneHref} className="phone">
                  {branch.phoneDisplay}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    branch.mapQuery,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="go"
                >
                  Cómo llegar <Icon name="arrowRight" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-whatsapp" className="cta-section section--dark">
        <div className="noise" />
        <div
          className="blob"
          style={{
            width: 500,
            height: 500,
            background: "var(--brand-500)",
            bottom: -160,
            left: "33%",
            animationDelay: "-3s",
          }}
        />
        <div
          className="container"
          style={{ maxWidth: 720, position: "relative" }}
        >
          <div className="reveal eyebrow" style={{ textAlign: "center" }}>
            ATENCIÓN DIRECTA POR WHATSAPP
          </div>
          <h2
            className="reveal section-title"
            style={{ transitionDelay: "80ms", textAlign: "center" }}
          >
            ¿Consultamos tu campo?
          </h2>
          <div
            style={{
              textAlign: "center",
              marginTop: 8,
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
            }}
          >
            <a
              href={waLink(
                "Hola! Quiero consultar sobre insumos y servicios de Verdeos.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal btn btn-accent"
              style={{
                transitionDelay: "160ms",
                fontSize: "1.05rem",
                padding: "17px 34px",
              }}
            >
              <Icon name="whatsapp" style={{ width: 24, height: 24 }} /> Enviar
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="reveal btn btn-ghost"
              style={{ transitionDelay: "200ms", fontSize: "1.05rem" }}
            >
              o completá el formulario <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
