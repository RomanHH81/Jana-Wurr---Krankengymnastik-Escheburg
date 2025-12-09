import { navLinks } from "@/app/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Krankengymnastik Jana Wurr · Escheburg
          </p>
          <p className="text-sm text-slate-600">
            Moderne Physiotherapie, klare Abläufe, persönlicher Kontakt.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
