# Verdeos e Insumos Agropecuarios — sitio web (Next.js)

Rediseño del sitio de **Verdeos e Insumos Agropecuarios SRL** (verdeoseinsumos.com), migrado desde
el mockup HTML aprobado a un proyecto real de **Next.js 15 (App Router) + TypeScript**, listo para
editar en VS Code y desplegar.

## Requisitos

- [Node.js](https://nodejs.org) 20 o superior (probado con Node 22).
- npm (incluido con Node). También funciona con yarn/pnpm si preferís.

## Poner el proyecto en marcha

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). Los cambios que hagas en `app/` o
`components/` se recargan solos.

> **Importante:** la primera vez que corras `npm run dev` o `npm run build`, Next.js necesita
> conectarse a Google Fonts (`fonts.googleapis.com`) para descargar Manrope e Inter y
> auto-hospedarlas dentro del proyecto (así el sitio final no depende de Google en cada visita).
> Esto requiere que la máquina donde corrés el comando tenga acceso normal a internet — en tu PC
> o en Vercel esto funciona sin hacer nada especial.

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción localmente
npm run lint    # ESLint
```

## Estructura del proyecto

```
app/
  layout.tsx          Layout raíz: fuentes, metadata, header/footer/fab, JSON-LD
  globals.css          Todo el sistema de diseño (colores, botones, secciones, animaciones)
  page.tsx              Inicio ("/")
  servicios/page.tsx    Servicios ("/servicios")
  drones/page.tsx        Drones ("/drones")
  contacto/page.tsx      Contacto ("/contacto")
  sitemap.ts / robots.ts  SEO técnico
components/
  Header.tsx            Nav + menú mobile (con estado de scroll y ruta activa)
  Footer.tsx
  Logo.tsx               El logo real de la empresa (SVG con fondo transparente)
  Icon.tsx                Sistema de íconos inline (sin librerías externas)
  WhatsAppFab.tsx        Botón flotante (se oculta en /contacto)
  BackToTop.tsx
  ContactForm.tsx        Formulario de contacto (ver "Pendientes" abajo)
  ScrollEffects.tsx      Animaciones al hacer scroll + contadores animados
  HeroParallax.tsx        Efecto parallax del hero de Inicio
lib/
  content.ts              Todos los datos reales del sitio en un solo lugar: teléfonos,
                           direcciones, sucursales, cultivos, links de WhatsApp, etc.
public/
  logo/                   Logo real de la empresa (SVG vectorial + PNG de respaldo)
```

### Editar contenido rápido

La mayoría de los textos "de negocio" (teléfonos, direcciones, horarios, sucursales, cultivos)
están centralizados en **`lib/content.ts`** — cambiar un dato ahí lo actualiza en todas las
páginas donde aparece (nav, footer, tarjetas de sucursales, JSON-LD, etc.), sin tener que buscarlo
página por página.

El resto del copy (títulos, párrafos) está directamente en cada `app/**/page.tsx`, en español,
fácil de ubicar y editar.

## Qué se migró del mockup

Este proyecto es una traducción 1:1 del mockup HTML ya aprobado (mismo diseño, mismos textos,
mismas animaciones), reestructurado como una app Next.js real:

- Las 4 páginas del mockup (Inicio/Servicios/Drones/Contacto) ahora son **rutas reales** de
  Next.js en vez de un router simulado con JavaScript.
- Todo el CSS del mockup se portó tal cual a `app/globals.css` — mismo look & feel, cero cambios
  visuales.
- Las fuentes (Manrope + Inter) ahora se cargan con `next/font/google`, que las auto-hospeda y
  optimiza (mejor performance que el `<link>` a Google Fonts del mockup).
- Las imágenes usan `next/image` (carga diferida, tamaños responsivos automáticos).
- Se agregaron `sitemap.xml`, `robots.txt` y datos estructurados JSON-LD (`LocalBusiness`) para
  las 2 sucursales propias — mejoras de SEO que estaban pendientes en el sitio original (ver el
  documento de auditoría).
- Corregido un detalle menor: el contador de "Cultivos principales" en el hero decía 4 pero
  siempre hubo 5 cultivos listados (Trigo, Maíz, Cebolla, Girasol, Cebada) — ya muestra 5.

## Pendientes antes de pasar a producción

1. **Fotos reales.** Las fotos de drones e insumos son de stock (Pexels/Unsplash, licencia
   gratuita) elegidas para que se parezcan a los equipos reales — el DJI T100 (drone grande, con
   tanque) y el Mavic 3 (drone chico, para mapeo). No son fotos de los equipos de la empresa.
   Cuando tengan fotos/videos propios, hay que reemplazar las URLs en `lib/content.ts` (cultivos)
   y en cada `app/**/page.tsx` (el resto de las imágenes), y lo ideal es copiarlas a `public/` y
   usarlas como imagen local en vez de enlazarlas desde Pexels/Unsplash.
2. **Formulario de contacto.** Hoy `components/ContactForm.tsx` abre un `mailto:` prellenado (no
   depende de ningún servicio de terceros, pero requiere que el visitante tenga un cliente de
   correo configurado). Para un formulario que envíe el mensaje directamente sin abrir el mail,
   hay dos caminos simples:
   - Un servicio externo gratuito como [Web3Forms](https://web3forms.com) o
     [Formspree](https://formspree.io) (solo hay que pegar un endpoint).
   - Una [API Route](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
     propia en `app/api/contacto/route.ts` que mande el mail con [Resend](https://resend.com) u
     otro proveedor — sin depender de terceros para alojarlo, como se había propuesto.
3. **Dominio y hosting.** El sitio está listo para desplegarse en
   [Vercel](https://vercel.com) (gratis para este tamaño de sitio) apuntando el dominio
   `verdeoseinsumos.com`. Alternativa sin costo similar: Netlify o Cloudflare Pages, ambos
   soportan Next.js.
4. **Editar contenido sin código.** La idea original era sumar un panel tipo
   [Decap CMS](https://decapcms.org) para que se pueda actualizar el sitio sin tocar código. Es un
   paso aparte, no incluido todavía en este proyecto — mientras tanto, editar `lib/content.ts` y
   los archivos en `app/**/page.tsx` a mano cubre el mismo objetivo.
5. **Verde del logo vs. verde del sitio.** El logo real usa un verde levemente distinto
   (`#268716`) al verde de marca del sitio (`#188642`, definido en `app/globals.css` como
   `--brand-500`). Quedó así a propósito hasta confirmar con la empresa si prefieren unificarlos.

## Desplegar en Vercel

1. Subí este proyecto a un repositorio de GitHub (o GitLab/Bitbucket).
2. Entrá a [vercel.com/new](https://vercel.com/new), importá el repositorio — Vercel detecta
   Next.js automáticamente, no hace falta configurar nada.
3. Una vez desplegado, andá a la configuración del proyecto en Vercel → Domains y agregá
   `verdeoseinsumos.com`, siguiendo las instrucciones para apuntar el DNS del dominio (esto se
   hace donde hayan comprado el dominio, ej. NIC Argentina).

## Créditos de imágenes (stock, temporales)

Fotos de Pexels (fotógrafa Magda Ehlers, licencia gratuita) y Unsplash (licencia gratuita) — ver
punto 1 de "Pendientes" arriba.
