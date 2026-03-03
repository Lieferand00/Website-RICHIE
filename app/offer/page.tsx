// app/offer/page.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Shield } from "lucide-react";

const mainOfferIncludes = [
  "Individuelle PED- & Peptide-Beratung (Informativ / Schadensminimierung)",
  "Individuelle Protokolle (ziel- & kontextbasiert)",
  "Ernährungspläne (alltagstauglich, messbar)",
  "Trainingspläne (Progression & Struktur)",
  "Supplement-Stacks / Beratung",
  "Ausführungskorrekturen (z. B. Video-Feedback möglich)",
  "24/7 Erreichbarkeit (Whatsapp/Discord)",
  "Progressionsübersichten & regelmäßige Check-ins",
];

const miniOffers = [
  {
    title: "Trainingsplan",
    price: "10€",
    subtitle: "Ein klarer Plan, der funktioniert.",
    points: [
      "Ziel-orientierter Trainingsplan",
      "Übungsauswahl & Volumen-Struktur",
      "Progressionslogik (einfach umsetzbar)",
      "Kurz erklärt: worauf du achten musst",
    ],
    cta: "Trainingsplan anfragen",
  },
  {
    title: "PED / Peptide Beratungscall",
    price: "20€",
    subtitle: "Kurz. Klar. Direkt umsetzbar.",
    points: [
      "45–60 Minuten Call",
      "Fragen, Risiken, Vorgehen (individuell)",
      "Kontext: Ziel, Erfahrung, Lifestyle",
      "Zum Schluss: klare Next Steps",
    ],
    cta: "Call anfragen",
  },
];

function Tape({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex -skew-x-6 items-center rounded-md border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white/85">
      <span className="skew-x-6">{children}</span>
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
      {desc ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">{desc}</p> : null}
    </div>
  );
}

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-[#06070B] text-white">
      {/* Background: stripes + noise, no blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_-10%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_12px)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2260%22 height=%2260%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,7,11,0.0),rgba(6,7,11,1))]" />
      </div>

      {/* Simple header (optional) */}
      

      {/* Page Intro */}
      <section className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
        <SectionTitle
          eyebrow="Angebot"
          title={
            <>
              Wähle deinen{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Start</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 -skew-x-6 bg-white/10" />
              </span>
              .
            </>
          }
        />
      </section>

      {/* 1:1 Coaching (Hauptkategorie) */}
      <section id="coaching" className="mx-auto max-w-6xl px-6 pt-10 md:pt-12">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
          {/* inner texture */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_10px)]" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: pitch */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <Tape>Hauptkategorie</Tape>
                <span className="rounded-full border border-white/15 bg-white px-3 py-1 text-xs font-black text-[#06070B]">
                  70€ / monatlich
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">1:1 Coaching</h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                Voller Support – individuell und zielgerichtet. Für Leute, die nicht raten, sondern Fortschritt planbar machen wollen.
              </p>

              {/* progress compare (simpler & bold) */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black text-white/90">Fortschritt</p>
                  <p className="text-xs font-semibold text-white/55">ohne vs. mit Coaching</p>
                </div>

                <div className="mt-5 space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-white/60">Ohne Coaching</span>
                      <span className="text-xs font-black text-white/70">35%</span>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <div className="h-3 w-[35%] bg-white/25" />
                    </div>
                    <p className="mt-2 text-xs text-white/55">Viele Baustellen, wenig System.</p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-white/60">Mit Coaching</span>
                      <span className="text-xs font-black text-white">80%</span>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <div className="h-3 w-[80%] bg-white/80" />
                    </div>
                    <p className="mt-2 text-xs text-white/55">Plan + Feedback — nächste Schritte sind klar.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#06070B] transition hover:translate-y-[-1px]"
                >
                  1:1 Coaching anfragen
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white/90 transition hover:bg-white/10"
                >
                  Kurze Frage stellen
                </Link>
              </div>

              {/* How it works */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-black/30">
                    <Zap className="h-4 w-4 text-white/80" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Ablauf</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      Ziel & Ausgangslage → Plan → Umsetzung mit Feedback → Anpassung anhand von Daten & Fortschritt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: includes (clean list) */}
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-white/90">Inbegriffen</p>
                <Tape>1:1</Tape>
              </div>

              <ul className="mt-5 grid gap-3 text-sm text-white/80">
                {mainOfferIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white/70" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="flex items-start gap-3">
                 <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Disclaimer</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      Keine medizinische Beratung. Inhalte zu PEDs/Peptiden sind informativ (Harm-Reduction) und ersetzen keine ärztliche Beratung.
                      Entscheidungen triffst du eigenverantwortlich.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Für wen ist das?</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Wenn du Struktur willst, Feedback ernst nimmst und Fortschritt messbar machen willst — ohne dein Leben umzukrempeln.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini offers (unter dem Hauptangebot) */}
      <section id="mini" className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:pt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Einzelangebote</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">Zwei Optionen zum Einstieg</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
              Wenn du erstmal testen willst: kleiner Einsatz, klarer Output.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {miniOffers.map((o) => (
            <div
              key={o.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              {/* top tear */}
              <div className="pointer-events-none absolute -top-10 left-0 right-0 h-24 rotate-[-6deg] bg-white/5" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-black tracking-tight">{o.title}</h4>
                  <p className="mt-2 text-sm text-white/70">{o.subtitle}</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white px-3 py-1 text-xs font-black text-[#06070B]">
                  {o.price}
                </span>
              </div>

              <ul className="relative mt-5 space-y-2 text-sm text-white/80">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-6">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#06070B] transition hover:translate-y-[-1px]"
                >
                  {o.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>

              <p className="relative mt-3 text-xs text-white/55">
                Hinweis: keine medizinische Beratung (nur Information / Schadensminimierung).
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}