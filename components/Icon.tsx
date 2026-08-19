// Sistema de íconos inline (SVG a mano, sin dependencias externas).
// Uso: <Icon name="whatsapp" />

const PATHS: Record<string, string> = {
  menu: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
  x: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  arrowRight: '<line x1="4" y1="12" x2="19" y2="12"/><path d="M13 6l6 6-6 6"/>',
  leaf: '<path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16z"/><path d="M8 20C8 14 12 8 18 6"/>',
  clipboard:
    '<rect x="6" y="4" width="12" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 13l2.2 2.2L15.5 11"/>',
  drone:
    '<circle cx="12" cy="12" r="2.1"/><line x1="12" y1="12" x2="5" y2="5"/><line x1="12" y1="12" x2="19" y2="5"/><line x1="12" y1="12" x2="5" y2="19"/><line x1="12" y1="12" x2="19" y2="19"/><circle cx="5" cy="5" r="2.3"/><circle cx="19" cy="5" r="2.3"/><circle cx="5" cy="19" r="2.3"/><circle cx="19" cy="19" r="2.3"/>',
  wheat:
    '<line x1="12" y1="22" x2="12" y2="4"/><path d="M12 6l-3-2M12 6l3-2M12 9l-3-2M12 9l3-2M12 12l-3-2M12 12l3-2M12 15l-3-2M12 15l3-2"/>',
  corn: '<path d="M12 3c4 0 6 4 6 9s-2 9-6 9-6-4-6-9 2-9 6-9z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="8.5" y1="10" x2="15.5" y2="10"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8.5" y1="16" x2="15.5" y2="16"/><line x1="9" y1="19" x2="15" y2="19"/>',
  onion:
    '<path d="M12 3v3"/><path d="M6 12c0-4 3-6 6-6s6 2 6 6-3 9-6 9-6-5-6-9z"/><path d="M9 8c1 3 1 8 0 12M15 8c-1 3-1 8 0 12" opacity="0.5"/>',
  sunflower:
    '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="19" r="1.5"/><circle cx="5" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="7.3" cy="7.3" r="1.5"/><circle cx="16.7" cy="7.3" r="1.5"/><circle cx="7.3" cy="16.7" r="1.5"/><circle cx="16.7" cy="16.7" r="1.5"/>',
  mapPin:
    '<path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  whatsapp:
    '<path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z"/><path d="M8.3 8.4c-.3 1 .2 2.4 1.6 3.8 1.4 1.4 2.8 1.9 3.8 1.6.5-.2 1-.9 1.1-1.4l-1.9-1.1-.6.8c-.6-.3-1.4-1-1.8-1.7l.8-.6-1.1-1.9c-.5.1-1.3.5-1.9 1.5z" fill="currentColor" stroke="none"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/>',
  facebook:
    '<path d="M14 21v-7h2.2l.4-3H14V9.3c0-.9.2-1.6 1.6-1.6H17V4.9C16.6 4.8 15.6 4.7 14.5 4.7c-2.4 0-4 1.5-4 4.2V11H8v3h2.5v7H14z" fill="currentColor" stroke="none"/>',
  target:
    '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none"/>',
  shield:
    '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M8.5 12.5l2.3 2.3L16 9.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  droplet: '<path d="M12 2s7 8 7 13a7 7 0 11-14 0c0-5 7-13 7-13z"/>',
  check: '<path d="M5 13l4 4L19 7"/>',
  phone:
    '<path d="M4.5 4.5c0-1 .8-1.8 1.8-1.8h1.6l1.8 4.4-1.8 1.8c1 2.6 3 4.6 5.6 5.6l1.8-1.8 4.4 1.8v1.6c0 1-.8 1.8-1.8 1.8C9.8 18 4.5 12.7 4.5 4.5z"/>',
  send: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none"/>',
};

export type IconName = keyof typeof PATHS;

export default function Icon({
  name,
  className,
  style,
  bare = false,
}: {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
  /** Renderiza el <svg> sin el wrapper .icon — para usarlo dentro de .icon-circle o
   * .social-btn, que en el diseño original ya se encargan de tamaño/centrado ellos mismos. */
  bare?: boolean;
}) {
  const inner = PATHS[name];
  if (!inner) return null;
  const svg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={bare ? style : undefined}
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
  if (bare) return svg;
  return (
    <span className={`icon${className ? ` ${className}` : ""}`} style={style}>
      {svg}
    </span>
  );
}
