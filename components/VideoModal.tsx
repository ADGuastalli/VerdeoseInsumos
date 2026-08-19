"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "@/components/Icon";

// Botón + ventana emergente (lightbox) para reproducir un video.
// Uso:
//   <VideoModal src="/videos/instructivo-t100.mp4" title="Cómo funciona el DJI T100">
//     Ver video instructivo
//   </VideoModal>
//
// El <video> solo se monta cuando el modal está abierto, para no cargar el
// archivo de más en la primera visita a la página.
//
// El popup se renderiza con un portal directo a document.body: si se dibujara
// dentro del div que lo contiene (ej. la ficha técnica del T100, que tiene la
// clase .reveal con "transform" para la animación de scroll), ese ancestro se
// convierte en el "contenedor" del position:fixed y, si además tiene
// overflow:hidden, recorta el video — se notaba sobre todo con el video
// vertical del T100, que perdía los extremos de arriba y abajo.
export default function VideoModal({
  src,
  poster,
  title,
  children,
  className,
  style,
}: {
  src: string;
  poster?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? "btn btn-primary"}
        style={style}
      >
        <Icon name="play" /> {children}
      </button>

      {open &&
        mounted &&
        createPortal(
          <div
            className="video-modal__backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div className="video-modal__box">
              <button
                type="button"
                className="video-modal__close"
                aria-label="Cerrar video"
                onClick={() => setOpen(false)}
              >
                <Icon name="x" bare />
              </button>
              <video
                src={src}
                poster={poster}
                controls
                autoPlay
                playsInline
                className="video-modal__video"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
