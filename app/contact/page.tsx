// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { ArrowDown, Clock, MessageSquare, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | Richie Coaching",
  description: "Erstgespräch anfragen – Richie meldet sich in der Regel innerhalb von 24–48h.",
};

function Tape({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex -skew-x-6 items-center rounded-md border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white/85">
      <span className="skew-x-6">{children}</span>
    </span>
  );
}

function Stat({ icon: Icon, k, v }: { icon: React.ComponentType<{ className?: string }>; k: string; v: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-black/30">
        <Icon className="h-4 w-4 text-white/80" />
      </span>
      <div>
        <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">{k}</p>
        <p className="text-sm font-extrabold text-white/90">{v}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#06070B] text-white selection:bg-white/20 selection:text-white">
      {/* background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_-10%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_12px)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2260%22 height=%2260%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,7,11,0.0),rgba(6,7,11,1))]" />
      </div>

      <section className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: poster copy */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tape>Kontakt</Tape>
              <Tape>Richie</Tape>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Sag kurz,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">was du willst</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 -skew-x-6 bg-white/10" />
              </span>
              .
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Ziel + Kontext reichen. Richie meldet sich schnell — und sagt dir ehrlich, ob und wie er helfen kann.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Stat icon={Clock} k="Antwort" v=">24h" />
              <Stat icon={MessageSquare} k="Format" v="kurz & klar" />
              <Stat icon={Sparkles} k="Ziel" v="Next Steps" />
              <Stat icon={ArrowDown} k="Dauer" v="~ 2 Minuten" />
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Was hilft mir bei der Antwort?</p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  Ziel (z.B. Aufbau, Diät, Performance, Gesundheit)
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  Stand jetzt (Training/Ernährung, was läuft gut / nicht gut)
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  Was blockiert (Zeit, Plan, Motivation, Struktur)
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: form box */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
              {/* highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(600px_220px_at_50%_0%,rgba(255,255,255,0.14),transparent_70%)]" />
              {/* stripes */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_10px)]" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Formular</p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Erstgespräch anfragen</h2>
                    <p className="mt-2 text-sm text-white/70">
                      Kurz halten — aber so, dass ich dich richtig einsortieren kann.
                    </p>
                  </div>
                  <span className="hidden rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/70 md:inline-flex">
                    Richie Coaching
                  </span>
                </div>

                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Ablauf</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[
                  { t: "1) Anfrage", d: "Ziel + Kontext" },
                  { t: "2) Antwort", d: "Next Steps" },
                  { t: "3) Start", d: "wenn’s passt" },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-sm font-extrabold text-white/90">{x.t}</p>
                    <p className="mt-1 text-sm text-white/70">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5 text-xs font-semibold text-white/60">
              Hinweis: Keine medizinische Beratung. Inhalte zu PEDs/Peptiden dienen nur Informationszwecken (Schadensminimierung)
              und ersetzen nicht Ärzt:innen.
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}