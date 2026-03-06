import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().min(2, "Name zu kurz"),
  email: z.string().email("Ungültige E-Mail"),
  discord: z.string().optional(),
  topic: z.string().min(2, "Thema zu kurz"),
  message: z.string().min(3, "Nachricht zu kurz"),
  "bot-field": z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    const raw = await req.text();

    if (!contentType.includes("application/x-www-form-urlencoded")) {
      return NextResponse.json({ ok: false, error: "Falscher Content-Type" }, { status: 415 });
    }

    const params = new URLSearchParams(raw);
    const data = Object.fromEntries(params.entries());

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const first = parsed.error.issues?.[0]?.message ?? "Ungültige Eingaben";
      return NextResponse.json({ ok: false, error: first }, { status: 400 });
    }

    // Honeypot
    if (parsed.data["bot-field"]?.trim()) return NextResponse.json({ ok: true });

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const key = process.env.RESEND_API_KEY;

    if (!to || !from || !key) {
      return NextResponse.json(
        { ok: false, error: "Server ENV fehlt (CONTACT_TO_EMAIL/CONTACT_FROM_EMAIL/RESEND_API_KEY)" },
        { status: 500 }
      );
    }

    const resend = new Resend(key);
    const { name, email, discord, topic, message } = parsed.data;

    const result = await resend.emails.send({
      from,
      to, // feste Zieladresse
      replyTo: email,
      subject: `Neue Anfrage: ${topic} — ${name}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Discord: ${discord?.trim() ? discord.trim() : "-"}`,
        `Thema: ${topic}`,
        "",
        "Nachricht:",
        message,
      ].join("\n"),
    });

    if (result?.error) {
      return NextResponse.json(
        { ok: false, error: `Resend Fehler: ${result.error.message || "unknown"}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
 } catch (e: unknown) {
  console.error("CONTACT_ROUTE_ERROR:", e);

  const message =
    e instanceof Error ? e.message : "unknown";

  return NextResponse.json(
    { ok: false, error: `Serverfehler: ${message}` },
    { status: 500 }
  );
}
}