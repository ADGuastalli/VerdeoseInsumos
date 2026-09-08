import type { Metadata } from "next";
import { SITE, OFFICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo Verdeos e Insumos Agropecuarios SRL recolecta, usa y protege tus datos personales, incluyendo el uso de WhatsApp Business.",
};

const LAST_UPDATED = "8 de septiembre de 2026";

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingBottom: 64 }}>
        <div className="noise" />
        <div
          className="blob"
          style={{
            width: 340,
            height: 340,
            background: "var(--brand-400)",
            top: -100,
            left: -60,
          }}
        />
        <div className="container">
          <div className="reveal eyebrow">LEGALES</div>
          <h1
            className="reveal hero__title"
            style={{
              transitionDelay: "80ms",
              fontSize: "clamp(2rem,4vw,2.8rem)",
            }}
          >
            Política de Privacidad
          </h1>
          <p
            className="reveal hero__subtitle"
            style={{ transitionDelay: "140ms", maxWidth: 640 }}
          >
            Última actualización: {LAST_UPDATED}
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            className="reveal"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              color: "rgba(18,36,26,.85)",
              fontSize: "1.02rem",
              lineHeight: 1.7,
            }}
          >
            <p>
              En <strong>{SITE.name}</strong> (&ldquo;Verdeos&rdquo;,
              &ldquo;nosotros&rdquo;) respetamos tu privacidad y nos
              comprometemos a proteger los datos personales que nos compartís
              cuando visitás este sitio web ({SITE.url}), completás nuestro
              formulario de contacto, o te comunicás con nosotros por WhatsApp —
              incluyendo a través de nuestro asistente virtual automatizado.
              Esta política explica qué información recolectamos, para qué la
              usamos, con quién la compartimos y qué derechos tenés sobre ella.
            </p>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                1. Quiénes somos
              </h2>
              <p>
                {SITE.name} es una empresa dedicada a la venta de insumos
                agrícolas, asesoramiento técnico y aplicación con drones, con
                casa central en {OFFICES.bahiaBlanca.address} y sucursal en{" "}
                {OFFICES.villalonga.address}. Para cualquier consulta sobre esta
                política o sobre tus datos personales podés escribirnos a{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  style={{ color: "var(--brand-600)", fontWeight: 600 }}
                >
                  {SITE.email}
                </a>{" "}
                o por WhatsApp al{" "}
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--brand-600)", fontWeight: 600 }}
                >
                  {SITE.whatsappNumber}
                </a>
                .
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                2. Qué datos recolectamos
              </h2>
              <p style={{ marginBottom: 12 }}>
                Dependiendo de cómo interactúes con nosotros, podemos
                recolectar:
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <li>
                  <strong>Datos de contacto:</strong> nombre, número de teléfono
                  y correo electrónico, cuando completás el formulario de
                  contacto del sitio o nos escribís por WhatsApp.
                </li>
                <li>
                  <strong>Datos comerciales:</strong> CUIT y código de cliente,
                  cuando usás nuestro asistente de WhatsApp para consultar tu
                  saldo de cuenta corriente. Estos datos se validan contra
                  nuestro sistema de gestión (Tango) únicamente para responder
                  tu consulta.
                </li>
                <li>
                  <strong>Contenido de tus mensajes:</strong> el texto que le
                  escribís a nuestro asistente de WhatsApp (por ejemplo, el
                  nombre de un producto que consultás, o el motivo de una
                  consulta de asesoramiento o de drones), para poder
                  interpretarlo y darte una respuesta o derivarte con la persona
                  correcta de nuestro equipo.
                </li>
                <li>
                  <strong>Respuestas a encuestas:</strong> si respondés la
                  encuesta de satisfacción que te enviamos después de resolver
                  una consulta.
                </li>
                <li>
                  <strong>Datos técnicos básicos:</strong> como con cualquier
                  sitio web, nuestro proveedor de hosting puede registrar
                  información técnica estándar (por ejemplo, dirección IP y tipo
                  de navegador) con fines de seguridad y funcionamiento del
                  sitio. No usamos cookies de seguimiento publicitario ni
                  analítica de terceros que identifique a las personas.
                </li>
              </ul>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                3. Para qué usamos tus datos
              </h2>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <li>
                  Responder tus consultas sobre productos, saldo de cuenta,
                  asesoramiento agronómico o servicio de drones.
                </li>
                <li>
                  Derivarte con el asesor comercial o técnico correspondiente
                  cuando hace falta atención personalizada.
                </li>
                <li>
                  Llevar un registro interno de las consultas atendidas, para
                  seguimiento comercial y mejora del servicio.
                </li>
                <li>
                  Enviarte, opcionalmente, una breve encuesta de satisfacción
                  sobre la atención recibida.
                </li>
                <li>
                  Cumplir con obligaciones legales, impositivas y comerciales
                  que nos correspondan como empresa.
                </li>
              </ul>
              <p style={{ marginTop: 12 }}>
                No usamos tus datos para enviarte publicidad no solicitada ni
                los utilizamos con fines distintos a los descritos en esta
                política.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                4. Uso de WhatsApp Business
              </h2>
              <p>
                Nuestro asistente virtual funciona sobre la plataforma WhatsApp
                Business de Meta. Cuando nos escribís por ese canal, tu número
                de teléfono y el contenido de la conversación son procesados por
                Meta conforme a su propia{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--brand-600)", fontWeight: 600 }}
                >
                  Política de Privacidad de WhatsApp
                </a>
                , además de esta política. Del lado de Verdeos, esas
                conversaciones son gestionadas mediante un flujo de
                automatización (n8n) alojado en infraestructura propia, que
                interpreta tu mensaje y consulta nuestras planillas y sistemas
                internos para poder responderte.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                5. Con quién compartimos tus datos
              </h2>
              <p style={{ marginBottom: 12 }}>
                No vendemos ni alquilamos tus datos personales a terceros. Solo
                los compartimos con:
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <li>
                  <strong>Meta / WhatsApp Business Platform:</strong> como
                  proveedor del canal de mensajería a través del cual nos
                  escribís.
                </li>
                <li>
                  <strong>Nuestros proveedores tecnológicos</strong> (Google
                  Sheets, alojamiento en la nube donde corre nuestro flujo de
                  automatización), que actúan exclusivamente como procesadores
                  de datos por nuestra cuenta, bajo nuestras instrucciones.
                </li>
                <li>
                  <strong>Personal de Verdeos</strong> (asesores comerciales,
                  técnicos y administrativos) que necesita acceder a tu consulta
                  para poder atenderte.
                </li>
                <li>
                  <strong>Autoridades competentes</strong>, únicamente cuando
                  estemos legalmente obligados a hacerlo.
                </li>
              </ul>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                6. Cuánto tiempo conservamos tus datos
              </h2>
              <p>
                Conservamos los registros de consultas y conversaciones mientras
                sea necesario para los fines comerciales y de atención al
                cliente descritos en esta política, o mientras la ley nos
                obligue a conservarlos (por ejemplo, por motivos impositivos o
                contables). Podés pedirnos la eliminación de tus datos en
                cualquier momento, según se explica en el punto 7.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                7. Tus derechos
              </h2>
              <p>
                De acuerdo con la Ley 25.326 de Protección de Datos Personales
                de la República Argentina, tenés derecho a acceder, rectificar,
                actualizar o solicitar la eliminación de tus datos personales.
                También podés retirar tu consentimiento u oponerte a un uso
                determinado en cualquier momento. Para ejercer cualquiera de
                estos derechos, escribinos a{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  style={{ color: "var(--brand-600)", fontWeight: 600 }}
                >
                  {SITE.email}
                </a>
                . La Agencia de Acceso a la Información Pública, en su carácter
                de Órgano de Control de la Ley 25.326, tiene la atribución de
                atender las denuncias y reclamos que se interpongan con relación
                al incumplimiento de las normas sobre protección de datos
                personales.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                8. Seguridad
              </h2>
              <p>
                Tomamos medidas razonables para proteger tus datos frente a
                accesos no autorizados, pérdida o uso indebido. Sin embargo,
                ningún sistema de transmisión o almacenamiento de datos es 100%
                seguro, por lo que no podemos garantizar una seguridad absoluta.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                9. Menores de edad
              </h2>
              <p>
                Nuestros productos y servicios están dirigidos a personas
                mayores de 18 años. No recolectamos intencionalmente datos de
                menores de edad.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                10. Cambios a esta política
              </h2>
              <p>
                Podemos actualizar esta política de tanto en tanto para reflejar
                cambios en nuestras prácticas o por motivos legales u
                operativos. La fecha de la última actualización figura al
                principio de esta página. Te recomendamos revisarla
                periódicamente.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontWeight: 700,
                  color: "var(--brand-900)",
                  marginBottom: 12,
                  fontSize: "1.3rem",
                }}
              >
                11. Contacto
              </h2>
              <p>
                Si tenés preguntas sobre esta Política de Privacidad o sobre el
                tratamiento de tus datos personales, escribinos a{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  style={{ color: "var(--brand-600)", fontWeight: 600 }}
                >
                  {SITE.email}
                </a>{" "}
                o acercate a nuestra casa central en{" "}
                {OFFICES.bahiaBlanca.address}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
