import { navLinks } from "@/app/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/#start" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold uppercase text-white shadow-lg shadow-emerald-200">
            JW
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
              Krankengymnastik
            </p>
            <p className="text-lg font-semibold">Jana Wurr · Escheburg</p>
          </div>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex"
          aria-label="Hauptnavigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-emerald-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          href="/#kontakt"
        >
          Termin anfragen
        </Link>
      </div>
    </header>
  );
}
