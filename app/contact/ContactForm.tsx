"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "error";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check (client-side)
    const bot = String(formData.get("bot-field") || "");
    if (bot.trim()) {
      setStatus("idle");
      router.push("/contact/thanks");
      return;
    }

    const body = new URLSearchParams();
    for (const [k, v] of formData.entries()) body.append(k, String(v));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) {
        let msg = "Ups – hat nicht geklappt. Bitte versuch’s nochmal.";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {}
        setStatus("error");
        setError(msg);
        return;
      }

      setStatus("idle");
      router.push("/contact/thanks");
    } catch {
      setStatus("error");
      setError("Netzwerkfehler – bitte erneut versuchen.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot */}
      <div className="hidden">
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Max Mustermann" required />
        <Field label="E-Mail" name="email" type="email" placeholder="max@mail.de" required />
      </div>

      <Field label="Thema" name="topic" placeholder="Coaching / Trainingsplan / Call..." required />

      <Textarea
        label="Nachricht"
        name="message"
        placeholder="Kurz: Ziel, aktueller Stand, was blockiert?"
        required
      />

      {error ? <p className="text-sm font-semibold text-red-300">{error}</p> : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#06070B] transition hover:translate-y-[-1px] disabled:opacity-60"
      >
        {status === "loading" ? "Sende..." : "Erstgespräch anfragen"}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>

      <p className="text-xs leading-relaxed text-white/55">
        Antwort meist innerhalb von 24–48h. Keine medizinische Beratung (nur Information / Schadensminimierung).
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-white/80">{label}</span>
      <div className="mt-2 rounded-2xl border border-white/10 bg-black/30 transition focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/10">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl bg-transparent px-5 py-3.5 text-sm text-white placeholder:text-white/30 outline-none"
        />
      </div>
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-white/80">{label}</span>
      <div className="mt-2 rounded-2xl border border-white/10 bg-black/30 transition focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/10">
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={7}
          className="w-full resize-none rounded-2xl bg-transparent px-5 py-3.5 text-sm text-white placeholder:text-white/30 outline-none"
        />
      </div>
    </label>
  );
}