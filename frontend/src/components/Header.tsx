"use client";

import { navLinks } from "@/app/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    const onResize = () => {
      const w = window.innerWidth;
      setWidth(w);
      if (w >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Mobile toggle: <=767 px */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 md:hidden"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold uppercase text-white shadow-lg shadow-emerald-200">
            JW
          </div>
          {width !== null && width >= 641 && (
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
                Krankengymnastik
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Jana Wurr
              </p>
            </div>
          )}
        </button>

        {/* Desktop / Tablet logo */}
        <Link
          href="/#start"
          className="hidden items-center gap-3 md:flex"
          aria-label="Startseite"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold uppercase text-white shadow-lg shadow-emerald-200">
            JW
          </div>
          <div className="hidden leading-tight lg:flex">
            <p className="text-sm uppercase tracking-[0.18em] text-emerald-700">
              Krankengymnastik
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Jana Wurr · Escheburg
            </p>
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
          className="rounded-full bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          href="/#kontakt"
        >
          Termin anfragen
        </Link>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/80 bg-white/95 shadow-lg shadow-emerald-100`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-sm font-medium text-slate-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 transition hover:bg-emerald-50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
