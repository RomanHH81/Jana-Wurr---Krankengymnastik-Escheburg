export const metadata = {
  title: "Impressum | Krankengymnastik Jana Wurr",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 py-8">
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
    </div>
  );
}
