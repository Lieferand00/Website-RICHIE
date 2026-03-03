// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/x-www-form-urlencoded")) {
      return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
    }

    // ENV Checks (klarer Fehler, sonst nervig zu debuggen)
    const TO = process.env.CONTACT_TO_EMAIL;
    const FROM = process.env.CONTACT_FROM_EMAIL;
    const RESEND_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_KEY || !TO || !FROM) {
      return NextResponse.json(
        {
          error:
            "Server-Konfiguration fehlt. Bitte RESEND_API_KEY, CONTACT_TO_EMAIL und CONTACT_FROM_EMAIL setzen.",
        },
        { status: 500 }
      );
    }

    const raw = await req.text();
    const data = new URLSearchParams(raw);

    // Honeypot
    const bot = (data.get("bot-field") || "").trim();
    if (bot) {
      // Spam: tu so als wäre alles ok
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (data.get("name") || "").trim();
    const email = (data.get("email") || "").trim();
    const handle = (data.get("handle") || "").trim();
    const topic = (data.get("topic") || "").trim();
    const message = (data.get("message") || "").trim();

    if (!name || !email || !topic || !message) {
      return NextResponse.json({ error: "Bitte fülle alle Pflichtfelder aus." }, { status: 400 });
    }

    if (!isEmail(email)) {
      return NextResponse.json({ error: "Bitte gib eine gültige E-Mail an." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "Die Nachricht ist zu kurz." }, { status: 400 });
    }

    // HTML sicher bauen
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeHandle = escapeHtml(handle);
    const safeTopic = escapeHtml(topic);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

    await resend.emails.send({
      from: FROM,
      to: TO,          // ✅ feste Zieladresse
      replyTo: email,  // ✅ Antworten gehen an den Absender
      subject: `Neue Anfrage: ${topic} — ${name}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system; line-height: 1.5;">
          <h2 style="margin:0 0 12px;">Neue Kontaktanfrage</h2>
          <p style="margin:0 0 6px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 6px;"><strong>E-Mail:</strong> ${safeEmail}</p>
          ${safeHandle ? `<p style="margin:0 0 6px;"><strong>Handle:</strong> ${safeHandle}</p>` : ""}
          <p style="margin:0 0 12px;"><strong>Thema:</strong> ${safeTopic}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:12px 0;" />
          <p style="margin:0;">${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("CONTACT_ROUTE_ERROR:", err);
    return NextResponse.json(
      { error: "Serverfehler. Bitte später erneut versuchen." },
      { status: 500 }
    );
  }
}