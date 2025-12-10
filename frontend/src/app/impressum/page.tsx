export const metadata = {
  title: "Impressum | Krankengymnastik Jana Wurr",
};

import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-4">
      <h1 className="text-3xl font-semibold text-slate-900">Impressum</h1>
      <p className="text-slate-700">
        Praxis Jana Wurr · Rehmenkoppel 28 · 21039 Escheburg · Telefon:
        04152 805599 · E-Mail: mail@praxis-escheburg.de
      </p>
      <p className="text-sm text-slate-600">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Jana Wurr, Anschrift
        wie oben.
      </p>
      <p className="text-sm text-slate-600">
        Hinweis: Eingebettete Inhalte wie Google Maps können personenbezogene
        Daten verarbeiten. Details siehe Datenschutz.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
