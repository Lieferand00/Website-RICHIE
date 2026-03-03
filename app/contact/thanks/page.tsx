// app/contact/thanks/page.tsx
import Link from "next/link";
import ContactForm from "../ContactForm";
export const metadata = {
  title: "Danke | Richie Coaching",
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[#06070B] text-white">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Danke! ✅</h1>
        <p className="mt-4 text-white/70">
          Richie hat deine Nachricht erhalten und meldet sich in der Regel innerhalb von 24–48 Stunden.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-extrabold text-white/90 transition hover:bg-white/10"
          >
            Zur Startseite
          </Link>
          <Link
            href="/offer"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-[#06070B] transition hover:translate-y-[-1px]"
          >
            Angebot ansehen →
          </Link>
        </div>
      </div>
    </main>
  );
}