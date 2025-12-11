export default function LegalLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
      <a
        href="/impressum"
        className="rounded-full border border-emerald-200 bg-white px-4 py-2 font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
        aria-label="Impressum anzeigen"
      >
        Impressum
      </a>
      <a
        href="/datenschutz"
        className="rounded-full border border-emerald-200 bg-white px-4 py-2 font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
        aria-label="Datenschutzhinweise anzeigen"
      >
        Datenschutz
      </a>
      <a
        href="/barrierefreiheit"
        className="rounded-full border border-emerald-200 bg-white px-4 py-2 font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
        aria-label="Barrierefreiheit anzeigen"
      >
        Barrierefreiheit
      </a>
    </div>
  );
}
