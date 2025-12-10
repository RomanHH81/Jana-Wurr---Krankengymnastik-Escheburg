export const metadata = {
  title: "Datenschutz | Krankengymnastik Jana Wurr",
};

import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-4">
      <h1 className="text-3xl font-semibold text-slate-900">Datenschutz</h1>
      <p className="text-slate-700">
        Wir verarbeiten personenbezogene Daten nur im Rahmen der gesetzlichen
        Vorgaben. Verantwortlich: Jana Wurr, Rehmenkoppel 28, 21039 Escheburg,
        Telefon: 04152 805599, E-Mail: mail@praxis-escheburg.de.
      </p>
      <p className="text-slate-700">
        Für die Nutzung von Google Maps (eingebettet auf der Kontaktseite) kann
        Google personenbezogene Daten verarbeiten (z. B. IP-Adresse, Standort,
        Gerätedaten). Durch Laden der Karte werden diese Daten an Google
        übertragen. Wenn Sie dies nicht wünschen, nutzen Sie bitte die
        Kontaktmöglichkeiten ohne die Karte oder deaktivieren die Anzeige in
        Ihren Browser-Einstellungen.
      </p>
      <p className="text-slate-700">
        Weitere Daten (z. B. Server-Logs) werden nur zur Sicherstellung des
        technischen Betriebs verarbeitet. Auf Tracking- oder Marketing-Cookies
        verzichten wir; Cookies werden nur für technisch notwendige Zwecke
        (z. B. Cookie-Banner-Einstellung) gesetzt.
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
