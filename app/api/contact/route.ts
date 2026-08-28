import { NextResponse } from "next/server";

// API route del servidor: recibe el POST del formulario de contacto y lo
// reenvía a Web3Forms usando la access key guardada como variable de entorno
// del lado del servidor (sin prefijo NEXT_PUBLIC_, así nunca queda expuesta
// en el navegador).
//
// SETUP en Vercel: Project Settings > Environment Variables
//   Nombre:  WEB3FORMS_KEY
//   Valor:   la key que te dio web3forms.com (cuenta creada con agrocebolla@gmail.com)
// Guardar, y en el próximo deploy ya queda activa. Localmente, ponela en
// .env.local con el mismo nombre.

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DESTINATION_EMAIL = "agrocebolla@gmail.com";

export async function POST(req: Request) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey) {
    console.error(
      "Falta NEXT_PUBLIC_WEB3FORMS_KEY en las variables de entorno del servidor.",
    );
    return NextResponse.json(
      { success: false, message: "Configuración incompleta del servidor." },
      { status: 500 },
    );
  }

  let body: { nombre?: string; telefono?: string; mensaje?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Cuerpo inválido." },
      { status: 400 },
    );
  }

  const { nombre, telefono, mensaje } = body;

  if (!nombre || !mensaje) {
    return NextResponse.json(
      { success: false, message: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }

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

    if (!data.success) {
      return NextResponse.json(
        { success: false, message: "Web3Forms rechazó el envío." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error enviando a Web3Forms:", err);
    return NextResponse.json(
      { success: false, message: "Error de red al enviar." },
      { status: 500 },
    );
  }
}
