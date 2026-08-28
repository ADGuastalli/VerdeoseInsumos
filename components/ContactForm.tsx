"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icon";

// Formulario de contacto. Envía el mensaje por email a través de Web3Forms
// (servicio gratuito, sin backend propio que mantener) directo a la casilla
// configurada en https://web3forms.com con la access key de abajo.
//
// SETUP (una sola vez):
// 1. Entrar a https://web3forms.com con agrocebolla@gmail.com
// 2. Crear un "Access Key" gratis (queda asociado a ese mail: ahí llegan los envíos)
// 3. Copiar la key y pegarla en .env.local como:
//      NEXT_WEB3FORMS_KEY=tu-key-aca
//    (y agregar la misma variable en Vercel/donde despliegues, en Settings > Environment Variables)

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DESTINATION_EMAIL = "agrocebolla@gmail.com";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      // Falta configurar la access key — ver instrucciones arriba.
      console.error("Falta NEXT_WEB3FORMS_KEY en las variables de entorno.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          to: DESTINATION_EMAIL,
          subject: "Consulta desde la web — Verdeos e Insumos",
          from_name: nombre,
          nombre,
          telefono: telefono || "-",
          mensaje,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setNombre("");
        setTelefono("");
        setMensaje("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3
        style={{ fontWeight: 700, color: "var(--brand-900)", marginBottom: 18 }}
      >
        Formulario de contacto
      </h3>
      <div className="form-group">
        <label className="form-label" htmlFor="cf-name">
          Nombre completo *
        </label>
        <input
          className="form-control"
          type="text"
          id="cf-name"
          name="nombre"
          placeholder="Nombre y apellido"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="cf-phone">
          Teléfono
        </label>
        <input
          className="form-control"
          type="tel"
          id="cf-phone"
          name="telefono"
          placeholder="Tu teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="cf-msg">
          Mensaje *
        </label>
        <textarea
          className="form-control"
          id="cf-msg"
          name="mensaje"
          placeholder="Contanos qué necesitás"
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
        disabled={status === "sending"}
      >
        <Icon name="send" />
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="form-note" style={{ color: "var(--brand-600)" }}>
          ¡Mensaje enviado! Te vamos a responder a la brevedad.
        </p>
      )}
      {status === "error" && (
        <p className="form-note" style={{ color: "#c0392b" }}>
          Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp.
        </p>
      )}
      {status === "idle" && (
        <p className="form-note">
          Al enviar, tu mensaje llega directo a nuestro correo.
        </p>
      )}
    </form>
  );
}
