export const metadata = {
  title: "Barrierefreiheit | Krankengymnastik Jana Wurr",
};

export default function BarrierefreiheitPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Barrierefreiheit</h1>
        <p className="text-slate-700">
          Wir orientieren uns an den WCAG 2.1 AA und den Anforderungen des BFSG
          (European Accessibility Act / EN 301 549), um die Website möglichst
          barrierearm bereitzustellen.
        </p>
      </div>

      <section className="space-y-2 rounded-2xl bg-white/80 p-4 shadow-inner shadow-emerald-50">
        <h2 className="text-lg font-semibold text-slate-900">Aktueller Stand</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-700">
          <li>Klare Überschriftenstruktur und semantisches HTML.</li>
          <li>Feste Navigation im Seitenkopf, konsistente Fokus-Reihenfolge.</li>
          <li>Ausreichende Kontraste und sichtbare Links/Buttons.</li>
          <li>Textalternativen für dekorative Icons nicht erforderlich.</li>
        </ul>
      </section>

      <section className="space-y-2 rounded-2xl bg-white/80 p-4 shadow-inner shadow-emerald-50">
        <h2 className="text-lg font-semibold text-slate-900">
          Rechtlicher Hinweis (EAA/BFSG/WCAG)
        </h2>
        <p className="text-slate-700">
          Grundlage sind u. a. der European Accessibility Act (Richtlinie
          2019/882), die Web Accessibility Directive (2016/2102) und in
          Deutschland das Barrierefreiheitsstärkungsgesetz (BFSG, ab 28. Juni
          2025 für bestimmte private Anbieter). Als Maßstab dienen WCAG 2.1 AA /
          EN 301 549. Kleinstunternehmen können ausgenommen sein; prüfen Sie
          bitte Ihre konkrete Verpflichtung.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl bg-white/80 p-4 shadow-inner shadow-emerald-50">
        <h2 className="text-lg font-semibold text-slate-900">Geplante Verbesserungen</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-700">
          <li>Detail-Review der Seiten per Screenreader-Test.</li>
          <li>Prüfung zusätzlicher Kontrast-Anpassungen für einzelne Elemente.</li>
          <li>Ausbau der Cookie-Präferenzen für noch granularere Steuerung.</li>
        </ul>
      </section>

      <section className="space-y-2 rounded-2xl bg-white/80 p-4 shadow-inner shadow-emerald-50">
        <h2 className="text-lg font-semibold text-slate-900">Feedback & Kontakt</h2>
        <p className="text-slate-700">
          Sollten Ihnen Barrieren auffallen oder benötigen Sie Inhalte in einem
          anderen Format, kontaktieren Sie uns bitte. Wir antworten zeitnah.
        </p>
        <p className="text-slate-700">
          Jana Wurr · Rehmenkoppel 28, 21039 Escheburg · Telefon: 04152 805599 ·
          E-Mail: mail@praxis-escheburg.de
        </p>
      </section>

      <p className="text-sm text-slate-600">
        Stand der Erklärung: {new Date().getFullYear()}
      </p>
    </div>
  );
}
