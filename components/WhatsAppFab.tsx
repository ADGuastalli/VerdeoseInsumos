"use client";

import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { waLink } from "@/lib/content";

// En /contacto ya hay una tarjeta de WhatsApp grande y dedicada arriba de todo:
// el botón flotante ahí es redundante, así que se oculta solo en esa página.
export default function WhatsAppFab() {
  const pathname = usePathname();
  const hidden = pathname.startsWith("/contacto");

  return (
    <a
      href={waLink("Hola! Quiero consultar sobre insumos y servicios de Verdeos.")}
      target="_blank"
      rel="noopener noreferrer"
      className={`fab-whatsapp pulse${hidden ? " fab-hidden" : ""}`}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <Icon name="whatsapp" />
    </a>
  );
}
