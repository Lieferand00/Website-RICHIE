// app/page.tsx
import Link from "next/link";
import { Heart, Star, Smile, ArrowRight, Shield, Zap, Timer } from "lucide-react";

const highlights = [
  {
    title: "Klarheit in 1 Session",
    text: "Wir bringen dein Thema auf den Punkt und definieren einen konkreten Fokus – ohne Umwege.",
    icon: Zap,
  },
  {
    title: "Premium Struktur",
    text: "Ein klarer Rahmen + Tools, die du sofort im Alltag anwenden kannst (statt reiner Theorie).",
    icon: Shield,
  },
  {
    title: "Souverän auftreten",
    text: "Kommunikation, Grenzen, Entscheidungen: Du wirst sicherer – sichtbar und spürbar.",
    icon: Timer,
  },
];

const offerCards = [
  {
    badge: "Hauptangebot",
    title: "1:1 Coaching",
    price: "70€ / Monat",
    desc: "Vollbetreuung mit Plan, Feedback & Umsetzung – angepasst an deinen Alltag.",
    bullets: [
      "Individuelle PED/Peptide Info (Harm-Reduction)",
      "Protokolle, Ernährungs- & Trainingspläne",
      "Supplement-Stacks / Beratung",
      "Ausführungskorrekturen & Feedback",
      "24/7 Erreichbarkeit + Progressionsübersichten",
    ],
    cta: "Zum 1:1 Coaching",
    href: "/offer",
    featured: true,
  },
  {
    badge: "Unterkategorie",
    title: "Trainingsplan",
    price: "10€",
    desc: "Ein klarer Plan mit Progressionslogik – easy umzusetzen.",
    bullets: ["Zielorientierter Trainingsplan", "Übungsauswahl & Volumen", "Progressionslogik", "Kurz erklärt: Fokus-Punkte"],
    cta: "Trainingsplan ansehen",
    href: "/offer",
    featured: false,
  },
  {
    badge: "Unterkategorie",
    title: "PED / Peptide Beratungscall",
    price: "20€",
    desc: "20–30 Minuten Q&A – kurz, klar, umsetzbar (informativ / harm-reduction).",
    bullets: ["Call 20–30 Min", "Risiken & Vorgehen besprechen", "Kontext: Ziel, Erfahrung, Lifestyle", "Klare Next Steps"],
    cta: "Call ansehen",
    href: "/offer",
    featured: false,
  },
];

function LabelPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
      {children}
    </span>
  );
}

function Tape({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex -skew-x-6 items-center rounded-md border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white/85">
      <span className="skew-x-6">{children}</span>
    </span>
  );
}

function StatChip({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-sm font-extrabold tracking-tight text-white">{k}</p>
      <p className="text-xs font-semibold text-white/60">{v}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06070B] text-white selection:bg-white/20 selection:text-white">
      {/* New background system: noise + stripes + spotlight (no blobs) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* subtle top spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_-10%,rgba(255,255,255,0.10),transparent_60%)]" />
        {/* diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_12px)]" />
        {/* noise */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2260%22 height=%2260%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />
        {/* bottom fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,7,11,0.0),rgba(6,7,11,1))]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left / headline */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Tape>1:1 Coaching</Tape>
              <LabelPill>Premium Struktur</LabelPill>
              <LabelPill>Fokus auf Umsetzung</LabelPill>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Klarheit, die du{" "}
              <span className="relative inline-block">
                <span className="relative z-10">spürst</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 -skew-x-6 bg-white/10" />
              </span>{" "}
              — und die bleibt.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Für Menschen, die nicht mehr raten wollen. Wir machen aus Komplexität eine klare Richtung — mit Struktur,
              Empathie und einem Plan, der wirklich umsetzbar ist.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white px-6 py-3 text-sm font-extrabold text-[#06070B] shadow-[0_18px_70px_rgba(255,255,255,0.12)] transition hover:translate-y-[-1px]"
              >
                Kostenloses Kennenlerngespräch
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/offer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-extrabold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Angebot ansehen
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <StatChip k="24–48h" v="Antwortzeit" />
              <StatChip k="3–6" v="Sessions typisch" />
              <StatChip k="100%" v="vertraulich" />
            </div>
          </div>

          {/* Right / bento board */}
          <div className="relative lg:col-span-5">
            <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Session Blueprint</p>
                  <h2 className="mt-2 text-xl font-extrabold tracking-tight">Von „Chaos“ zu „Nächster Schritt“.</h2>
                </div>
                <Tape>-</Tape>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Anfrage → Gespräch → Plan → Umsetzung → Feedback → Ziel.
                  </p>
                 
                </div>

                    {/* Progress: Vergleich */}
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between">
            <p className="text-sm font-extrabold text-white/90">Progress Vergleich</p>
            <p className="text-xs font-semibold text-white/55">Ohne vs. mit Coaching</p>
            </div>

            <div className="mt-4 space-y-4">
            {/* OHNE */}
            <div>
            <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-white/60">Ohne Coaching</span>
            <span className="text-xs font-black text-white/70">35%</span>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="h-3 w-[35%] bg-white/30" />
            </div>

            <p className="mt-2 text-xs font-semibold text-white/55">
            Viel probieren, wenig Richtung — Fortschritt kommt, aber ungleichmäßig.
            </p>
            </div>

    {/* MIT */}
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-white/60">Mit Coaching</span>
        <span className="text-xs font-black text-white">80%</span>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <div className="h-3 w-[80%] bg-white/80" />
      </div>

      <p className="mt-2 text-xs font-semibold text-white/55">
        Klarer Plan + Feedback — du weißt immer, was der nächste Schritt ist.
      </p>
    </div>
   </div>
 </div>

                <Link
                  href="/offer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-extrabold text-[#06070B] transition hover:translate-y-[-1px]"
                >
                  Angebot ansehen
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>

                <p className="text-center text-xs font-semibold text-white/55">
                  Unverbindlich • klare Empfehlung, auch wenn’s nicht passt
                </p>
              </div>
            </div>

            {/* little corner accents */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur" />
            <div className="pointer-events-none absolute -left-3 -bottom-3 h-14 w-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur" />
          </div>
        </div>

        {/* Highlights (new style) */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30">
                    <Icon className="h-5 w-5 text-white/80" />
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight">{h.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">{h.text}</p>

                {/* accent line */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35),transparent)]" />
              </div>
            );
          })}
        </div>
      </section>

     

      {/* OFFERS */}
      <section className="mx-auto max-w-6xl px-6 pt-2 md:pt-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Angebote</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
              Wähle dein Paket —{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Start heute</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 -skew-x-6 bg-white/10" />
              </span>
              .
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Einstieg mit Plan/Call oder volle Begleitung im 1:1 Coaching. Alle Details findest du auf der Angebotsseite.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {offerCards.map((o) => (
            <div
              key={o.title}
              className={[
                "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur",
                o.featured ? "md:-translate-y-2" : "",
              ].join(" ")}
            >
              {/* top “tear” highlight */}
              <div className="pointer-events-none absolute -top-10 left-0 right-0 h-24 rotate-[-6deg] bg-white/5" />

              <div className="relative flex items-start justify-between gap-4">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white/70">
                  {o.badge}
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white px-3 py-1 text-xs font-black text-[#06070B]">
                  {o.price}
                </span>
              </div>

              <h3 className="relative mt-3 text-xl font-black tracking-tight">{o.title}</h3>
              <p className="relative mt-2 text-sm text-white/70">{o.desc}</p>

              <ul className="relative mt-5 space-y-2 text-sm text-white/80">
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-6">
                <Link
                  href={o.href}
                  className={[
                    "group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black transition",
                    o.featured
                      ? "bg-white text-[#06070B] hover:translate-y-[-1px]"
                      : "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10",
                  ].join(" ")}
                >
                  {o.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-5 text-xs font-semibold text-white/65">
          Disclaimer: Keine medizinische Beratung. Inhalte zu PEDs/Peptiden dienen nur Informationszwecken und Harm-Reduction
          und ersetzen nicht Ärzt:innen.
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-14 md:pt-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_12px)]" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-black tracking-tight md:text-3xl">Ready? Dann geh direkt zum Angebot.</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                Dort findest du alle Details zu 1:1 Coaching (70€/Monat), Trainingsplan (10€) und Beratungscall (20€).
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/offer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-black text-[#06070B] transition hover:translate-y-[-1px]"
              >
                Zur Angebotsseite
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-black text-white/90 transition hover:bg-white/10"
              >
                Kurze Frage stellen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}