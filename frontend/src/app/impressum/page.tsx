export const metadata = {
  title: "Impressum | Krankengymnastik Jana Wurr",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Impressum</h1>
        <p className="text-slate-700">
          Jana Wurr · Physiopraxis · Rehmenkoppel 28 · 21039 Escheburg
        </p>
      </div>

      <section className="space-y-2 rounded-2xl bg-white/80 p-4 shadow-inner shadow-emerald-50">
        <h2 className="text-lg font-semibold text-slate-900">Kontakt</h2>
        <p className="text-slate-700">Telefon: 04152 805599</p>
        <p className="text-slate-700">Telefax: 04152 805599</p>
        <p className="text-slate-700">E-Mail: mail@praxis-escheburg.de</p>
      </section>

      <section className="space-y-2 rounded-2xl bg-white/80 p-4 shadow-inner shadow-emerald-50">
        <h2 className="text-lg font-semibold text-slate-900">
          Berufsbezeichnung und berufsrechtliche Regelungen
        </h2>
        <p className="text-slate-700">Berufsbezeichnung: Physiotherapeut</p>
      </section>

      <section className="space-y-2 rounded-2xl bg-white/80 p-4 shadow-inner shadow-emerald-50">
        <h2 className="text-lg font-semibold text-slate-900">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p className="text-slate-700">
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

      <p className="text-sm text-slate-600">Quelle: e-recht24.de</p>
    </div>
  );
}
