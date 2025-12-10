export default function KontaktSection() {
  return (
    <section
      id="kontakt"
      className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
    >
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
          Praxis Jana Wurr · Weidenkamp 2 · 21039 Escheburg. Die Praxis ist
          behindertengerecht eingerichtet. Termine vergeben wir nach
          Vereinbarung – gern auch über den Anrufbeantworter.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
            <p className="text-sm text-slate-500">Telefon</p>
            <p className="text-lg font-semibold text-slate-900">04152 805599</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
            <p className="text-sm text-slate-500">E-Mail</p>
            <p className="text-lg font-semibold text-slate-900">
              mail@praxis-escheburg.de
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
            <p className="text-sm text-slate-500">Adresse</p>
            <p className="text-lg font-semibold text-slate-900">
              Rehmenkoppel 28, 21039 Escheburg
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
            href="mailto:mail@praxis-escheburg.de"
          >
            E-Mail senden
          </a>
          <a
            className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-300"
            href="#start"
          >
            Zurück zum Anfang
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-white/80 bg-white/90 p-4 shadow-lg shadow-emerald-100">
        <div className="flex h-full items-center justify-center overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/40 shadow-inner shadow-emerald-100">
          <iframe
            title="Anfahrt Praxis Jana Wurr"
            src="https://www.google.com/maps?q=Rehmenkoppel+28+21039+Escheburg&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            className="border-0 max-w-[640px]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
