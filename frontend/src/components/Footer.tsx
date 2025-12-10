import LegalLinks from "@/components/LegalLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm shadow-emerald-50">
          <p className="text-sm font-semibold text-slate-900">
            Krankengymnastik Jana Wurr · Escheburg
          </p>
          <p className="text-sm text-slate-600">
            Moderne Physiotherapie, klare Abläufe, persönlicher Kontakt.
          </p>
        </div>
        <LegalLinks />
      </div>
    </footer>
  );
}
