export default function KontaktSection() {
  return (
    <section id="kontakt" className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-emerald-100">
        <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
          Kontakt
        </p>
        <h2
          className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Termin vereinbaren
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          Hier können Telefonnummer, E-Mail und Öffnungszeiten ergänzt werden.
          So erreichen Patienten schnell den passenden Ansprechpartner.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
            <p className="text-sm text-slate-500">Telefon</p>
            <p className="text-lg font-semibold text-slate-900">
              Bitte Nummer ergänzen
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
            <p className="text-sm text-slate-500">E-Mail</p>
            <p className="text-lg font-semibold text-slate-900">
              Bitte E-Mail ergänzen
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
            <p className="text-sm text-slate-500">Adresse</p>
            <p className="text-lg font-semibold text-slate-900">
              Praxisanschrift eintragen
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
            <p className="text-sm text-slate-500">Öffnungszeiten</p>
            <p className="text-lg font-semibold text-slate-900">
              Nach Vereinbarung
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            href="mailto:"
          >
            Jetzt Kontakt ergänzen
          </a>
          <a
            className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-300"
            href="#start"
          >
            Zurück zum Anfang
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-emerald-100">
        <div className="h-full rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-6 text-slate-700">
          <p className="text-sm font-semibold text-emerald-800">
            Platz für Karte oder Foto
          </p>
          <p className="mt-2 leading-relaxed">
            Hier kann eine Anfahrtskarte oder ein Praxisfoto eingebunden werden,
            sobald die finalen Kontaktdaten feststehen.
          </p>
        </div>
      </div>
    </section>
  );
}
