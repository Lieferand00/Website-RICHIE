// app/about/page.tsx
import Link from "next/link";
import { ArrowRight, Shield, Zap, Target, Dumbbell, MessageCircle } from "lucide-react";

function Tape({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex -skew-x-6 items-center rounded-md border border-white/15 bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white/85">
      <span className="skew-x-6">{children}</span>
    </span>
  );
}

function LabelPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
      {children}
    </span>
  );
}

function Card({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30">
          <Icon className="h-5 w-5 text-white/80" />
        </span>
        <h3 className="text-lg font-extrabold tracking-tight">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-white/70">{text}</p>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35),transparent)]" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#06070B] text-white selection:bg-white/20 selection:text-white">
      {/* background system */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_50%_-10%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.10] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_12px)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2260%22 height=%2260%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,7,11,0.0),rgba(6,7,11,1))]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Tape>Über mich</Tape>
              <LabelPill>Struktur</LabelPill>
              <LabelPill>Performance</LabelPill>
              <LabelPill>Harm-Reduction</LabelPill>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Ich bin Richie —
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">dein Coach für Struktur & Progress</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 -skew-x-6 bg-white/10" />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Ich helfe dir, Training, Ernährung und Umsetzung so zu strukturieren, dass Fortschritt messbar wird — ohne
              unnötigen Overload. Direkt, ehrlich, systematisch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>

          {/* Right “identity card” */}
          <div className="relative lg:col-span-5">
            <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Kurzprofil</p>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm font-extrabold text-white/90">Wofür ich stehe</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Weniger Chaos, mehr System. Du bekommst klare Prioritäten, realistische Schritte und Feedback, das du
                    sofort umsetzen kannst.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm font-extrabold text-white/90">Arbeitsweise</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Daten + Kontext + Kommunikation. Wir passen an, statt ständig neu zu erfinden.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Hinweis</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    Keine medizinische Beratung. Inhalte zu PEDs/Peptiden sind informativ (Harm-Reduction) und ersetzen
                    keine ärztliche Beratung.
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur" />
            <div className="pointer-events-none absolute -left-3 -bottom-3 h-14 w-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur" />
          </div>
        </div>
      </section>

      {/* VALUES / PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Prinzipien</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">So arbeite ich</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Kein Gelaber, kein “one size fits all”. Fokus auf das, was wirklich wirkt.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card
            icon={Target}
            title="Klarer Fokus"
            text="Wir definieren Prioritäten und machen aus vielen Optionen einen sauberen Plan."
          />
          <Card
            icon={Dumbbell}
            title="Umsetzung > Theorie"
            text="Tools, die in deinen Alltag passen. Fortschritt entsteht durch Konsistenz."
          />
          <Card
            icon={Shield}
            title="Sicher & verantwortungsvoll"
            text="Info/Harm-Reduction statt falscher Versprechen. Entscheidungen bleiben bei dir."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_10px)]" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <Tape>Ablauf</Tape>
              <LabelPill>einfach</LabelPill>
              <LabelPill>klar</LabelPill>
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">Wie eine Zusammenarbeit aussieht</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Du sollst jederzeit wissen: Wo stehen wir? Was ist der nächste Schritt?
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Start & Ziel",
                  text: "Ausgangslage, Ziel, Alltag, Hürden. Wir setzen einen realistischen Rahmen.",
                  icon: MessageCircle,
                },
                {
                  step: "02",
                  title: "Plan & Setup",
                  text: "Training/Ernährung/Protokolle so, dass es messbar & machbar ist.",
                  icon: Zap,
                },
                {
                  step: "03",
                  title: "Feedback & Anpassung",
                  text: "Check-ins, Korrekturen, Progress-Tracking — wir iterieren statt zu raten.",
                  icon: Shield,
                },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="rounded-3xl border border-white/10 bg-black/30 p-6">
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-white/55">{s.step}</span>
                      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-white/80" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_12px)]" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-black tracking-tight md:text-3xl">Lass uns kurz sprechen.</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                10–15 Minuten reichen oft schon, um zu sehen, ob es passt — und was dein nächster sinnvoller Schritt ist.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-black text-[#06070B] transition hover:translate-y-[-1px]"
              >
                Kennenlerngespräch
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/offer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-black text-white/90 transition hover:bg-white/10"
              >
                Angebote ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}