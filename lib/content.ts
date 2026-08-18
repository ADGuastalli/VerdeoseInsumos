// Contenido centralizado del sitio.
// Editar estos datos alcanza para actualizar textos, teléfonos y direcciones
// en todo el sitio (más adelante esto se puede migrar a un CMS sin código).

export const SITE = {
  name: "Verdeos e Insumos Agropecuarios SRL",
  shortName: "Verdeos e Insumos",
  url: "https://verdeoseinsumos.com",
  description:
    "Insumos agrícolas, asesoramiento técnico y aplicación con drones en Bahía Blanca y la región.",
  whatsappNumber: "5492914428412", // con código de país, sin "+" ni espacios (formato wa.me) — consultas generales
  // Número aparte para todo lo relacionado al servicio de Drones (botones dentro de /drones
  // y del panel de Drones en /servicios).
  whatsappNumberDrones: "5492920447514",
  email: "agrocebolla@gmail.com",
  address: "Bahía Blanca, Buenos Aires",
};

export function waLink(message: string, number: string = SITE.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export type NavItem = {
  label: string;
  href: string; // ruta real o ancla en Inicio (ej: "/#cultivos")
  key: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Servicios", href: "/servicios", key: "servicios" },
  { label: "Drones", href: "/drones", key: "drones" },
  { label: "Cultivos", href: "/#cultivos", key: "cultivos" },
  { label: "Sucursales", href: "/#sucursales", key: "sucursales" },
  { label: "Contacto", href: "/contacto", key: "contacto" },
];

export type Crop = {
  name: string;
  icon: "wheat" | "corn" | "onion" | "sunflower";
  image: string;
};

export const CROPS: Crop[] = [
  {
    name: "Trigo",
    icon: "wheat",
    image: "/images/cultivo-trigo.jpg",
  },
  {
    name: "Maíz",
    icon: "corn",
    image: "/images/cultivo-maiz.jpg",
  },
  {
    name: "Cebolla",
    icon: "onion",
    image: "/images/cultivo-cebolla.jpg",
  },
  {
    name: "Girasol",
    icon: "sunflower",
    image: "/images/cultivo-girasol.jpg",
  },
  {
    name: "Cebada",
    icon: "wheat",
    image: "/images/cultivo-cebada.jpg",
  },
];

export type Branch = {
  name: string;
  badge?: string;
  company: string;
  address: string;
  hours?: string;
  phoneDisplay: string;
  phoneHref: string; // tel: link
  mapQuery: string; // dirección para el link "Cómo llegar"
};

export const BRANCHES: Branch[] = [
  {
    name: "Bahía Blanca",
    badge: "CASA CENTRAL",
    company: "Verdeos e Insumos Agropecuarios SRL",
    address: "Don Bosco 3195",
    phoneDisplay: "+54 9 291 488-2691",
    phoneHref: "tel:+5492914882691",
    mapQuery: "Don Bosco 3195, Bahía Blanca, Buenos Aires",
  },
  {
    name: "Villalonga",
    company: "Verdeos e Insumos Agropecuarios SRL",
    address: "Don Bosco y Bv Patagones",
    phoneDisplay: "02928-492561",
    phoneHref: "tel:02928492561",
    mapQuery: "Don Bosco y Bv Patagones, Villalonga, Buenos Aires",
  },
  {
    name: "Pedro Luro",
    company: "Agrodistribuciones Calbete",
    address: "Ruta 3, km 808",
    phoneDisplay: "02928-411686",
    phoneHref: "tel:02928411686",
    mapQuery: "Ruta 3 km 808, Pedro Luro, Buenos Aires",
  },
  {
    name: "Coronel Suárez",
    company: "Peumayén Agropecuaria",
    address: "Av. Sixto Rodríguez 1698",
    phoneDisplay: "02926-423647",
    phoneHref: "tel:02926423647",
    mapQuery: "Av. Sixto Rodríguez 1698, Coronel Suárez, Buenos Aires",
  },
];

export const OFFICES = {
  bahiaBlanca: {
    badge: "CASA CENTRAL",
    name: "Bahía Blanca",
    address: "Don Bosco 3195 – Bahía Blanca",
    phoneDisplay: "+54 9 291 488-2691",
    phoneHref: "tel:+5492914882691",
    email: "agrocebolla@gmail.com",
  },
  villalonga: {
    badge: "SUCURSAL",
    name: "Villalonga",
    address: "Don Bosco y Bv Patagones – Villalonga",
    hours: "Lun a Vie (8-12 hs / 15-19 hs)\nSáb (8-12 hs)",
    phoneDisplay: "+54 9 2928-492561",
    phoneHref: "tel:+542928492561",
    email: "verdeos@hotmail.com",
  },
};

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Don+Bosco+3195,+Bah%C3%ADa+Blanca,+Argentina&output=embed";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/verdeoseinsumos",
  instagram: "https://instagram.com/verdeoseinsumos",
  whatsapp: `https://wa.me/${"5492914428412"}`,
};
