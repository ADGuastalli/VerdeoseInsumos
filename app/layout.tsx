import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
// Next.js procesa esta hoja global, aunque TypeScript no tenga declaraciones CSS.
// @ts-expect-error -- importación de estilos globales gestionada por Next.js.
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import BackToTop from "@/components/BackToTop";
import ScrollEffects from "@/components/ScrollEffects";
import { BRANCHES, SITE } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Insumos, asesoramiento y drones en Bahía Blanca`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_AR",
    type: "website",
  },
};

// Datos estructurados LocalBusiness/JSON-LD (pendiente detectado en la auditoría del sitio
// original). Solo se incluyen las 2 sucursales propias de Verdeos (Bahía Blanca y Villalonga);
// Pedro Luro y Coronel Suárez son distribuidores asociados (otra razón social), no locales
// propios, así que no corresponde describirlos como LocalBusiness de Verdeos.
function buildStructuredData() {
  const ownBranches = BRANCHES.filter((b) => b.company === SITE.name);
  return {
    "@context": "https://schema.org",
    "@graph": ownBranches.map((branch) => ({
      "@type": "LocalBusiness",
      name: `${SITE.name} — ${branch.name}`,
      parentOrganization: SITE.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressLocality: branch.name,
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      telephone: branch.phoneDisplay,
      email: SITE.email,
      url: SITE.url,
      description: SITE.description,
    })),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildStructuredData()),
          }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppFab />
        <BackToTop />
        <ScrollEffects />
      </body>
    </html>
  );
}
