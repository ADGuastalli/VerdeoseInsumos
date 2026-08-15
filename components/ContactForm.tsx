"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icon";
import { SITE } from "@/lib/content";

// Formulario de contacto. Por ahora abre un mailto: prellenado como fallback sin
// backend (igual que el mockup) — ver README para conectarlo a un servicio real
// (Web3Forms / Resend / una API route propia) antes de pasar a producción.
export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `Nombre: ${nombre}\nTeléfono: ${telefono || "-"}\n\n${mensaje}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Consulta desde la web",
    )}&body=${encodeURIComponent(body)}`;
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
      >
        <Icon name="send" /> Enviar mensaje
      </button>
      <p className="form-note">
        Al enviar, se abre tu programa de correo con el mensaje ya redactado.
      </p>
    </form>
  );
}
