// Logo real de Verdeos (provisto por el cliente, vectorizado con fondo transparente).
// Se referencia por <img> apuntando al SVG en /public/logo — simple y funciona igual
// de bien en el navbar (fondo oscuro) y en el footer (fondo oscuro), sin halos blancos.

export default function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG vectorial simple, no necesita next/image
    <img
      src="/logo/verdeos-logo.svg"
      alt="Verdeos e Insumos Agropecuarios"
      className={`logo-mark${className ? ` ${className}` : ""}`}
    />
  );
}
