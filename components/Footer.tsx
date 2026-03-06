import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#06070B] text-white">
      {/* subtle background system */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_1px,transparent_1px,transparent_14px)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Top Row */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-black tracking-tight">
              Richie Coaching
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Struktur. Klarheit. Fortschritt.
              <br />
              Coaching für ambitionierte Menschen,
              die nicht mehr raten wollen.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-black text-[#06070B] transition hover:translate-y-[-1px]"
              >
                Kostenloses Gespräch
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white/50">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm font-semibold text-white/70">
              <Link href="/offer" className="transition hover:text-white">
                Angebot
              </Link>
              <Link href="/about" className="transition hover:text-white">
                Über mich
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white/50">
              Rechtliches
            </h4>

            

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/50">
              Keine medizinische Beratung. Inhalte zu PEDs/Peptiden dienen ausschließlich
              Informationszwecken (Schadensminimierung) und ersetzen keine ärztliche Beratung.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs font-semibold text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Richie Coaching
          </p>

          <div className="flex items-center gap-6">
            <span>Alle Rechte vorbehalten.</span>
            <span className="hidden h-3 w-px bg-white/20 md:block" />
            <span>Made with Fokus.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}