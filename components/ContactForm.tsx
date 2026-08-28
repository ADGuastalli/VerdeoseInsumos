"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icon";

// Formulario de contacto. Envía el mensaje DIRECTO desde el navegador a
// Web3Forms, que lo reenvía por email a agrocebolla@gmail.com.
//
// Nota: probamos hacerlo vía una API route propia (servidor), pero Web3Forms
// tiene protección de Cloudflare que bloquea pedidos servidor-a-servidor
// (los de Vercel no pasan el challenge). El uso soportado y documentado por
// Web3Forms es justamente este: llamar a su API directo desde el cliente con
// la access key visible — está diseñada para eso, no es un secreto.
//
// SETUP (una sola vez):
// 1. Entrar a https://web3forms.com con agrocebolla@gmail.com
// 2. Crear un "Access Key" gratis (queda asociado a ese mail: ahí llegan los envíos)
// 3. Confirmar el mail de verificación que manda Web3Forms a esa casilla
// 4. Copiar la key y pegarla en Vercel (Project Settings > Environment
//    Variables) como NEXT_PUBLIC_WEB3FORMS_KEY, y en .env.local para local.
//    El prefijo NEXT_PUBLIC_ es obligatorio: sin él, Next.js no la expone en
//    el navegador y el envío nunca va a funcionar.

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DESTINATION_EMAIL = "agrocebolla@gmail.com";

type Status = "idle" | "sending" | "success" | "error";

// Acepta espacios, guiones, paréntesis y un "+" inicial (ej: +54 9 291 415-0000),
// pero exige entre 8 y 15 dígitos reales — suficiente para filtrar errores de
// tipeo (letras, números incompletos) sin rechazar formatos válidos de AR.
const PHONE_REGEX = /^\+?[\d\s()-]{8,20}$/;

function validatePhone(value: string): string | null {
  if (!value.trim()) return null; // el teléfono es opcional
  const digitCount = value.replace(/\D/g, "").length;
  if (!PHONE_REGEX.test(value) || digitCount < 8 || digitCount > 15) {
    return "Revisá el número: debe tener solo dígitos (y opcionalmente +, espacios o guiones), entre 8 y 15 números.";
  }
  return null;
}

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  function handlePhoneChange(value: string) {
    setTelefono(value);
    if (phoneError) setPhoneError(validatePhone(value));
  }

  function handlePhoneBlur() {
    setPhoneError(validatePhone(telefono));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const err = validatePhone(telefono);
    if (err) {
      setPhoneError(err);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error(
        "Falta NEXT_PUBLIC_WEB3FORMS_KEY en las variables de entorno.",
      );
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
        console.error("Web3Forms rechazó el envío:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Error enviando a Web3Forms:", err);
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
          placeholder="Ej: 291 415-0000"
          value={telefono}
          onChange={(e) => handlePhoneChange(e.target.value)}
          onBlur={handlePhoneBlur}
          aria-invalid={phoneError ? "true" : "false"}
          aria-describedby={phoneError ? "cf-phone-error" : undefined}
          style={phoneError ? { borderColor: "#c0392b" } : undefined}
        />
        {phoneError && (
          <p
            id="cf-phone-error"
            className="form-note"
            style={{ color: "#c0392b", marginTop: 6 }}
          >
            {phoneError}
          </p>
        )}
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
