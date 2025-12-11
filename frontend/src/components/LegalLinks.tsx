"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";

export default function LegalLinks() {
  const { openBanner } = useCookieConsent();

  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
      <Link
        href="/impressum"
        className="rounded-full border border-emerald-200 bg-white px-4 py-2 font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
        aria-label="Impressum anzeigen"
      >
        Impressum
      </Link>
      <Link
        href="/datenschutz"
        className="rounded-full border border-emerald-200 bg-white px-4 py-2 font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
        aria-label="Datenschutzhinweise anzeigen"
      >
        Datenschutz
      </Link>
      <button
        type="button"
        onClick={openBanner}
        className="rounded-full border border-transparent px-3 py-2 font-semibold text-emerald-800 underline decoration-emerald-200 underline-offset-4 transition hover:-translate-y-0.5 hover:text-emerald-900"
        aria-label="Cookie-Einstellungen anpassen"
      >
        Cookie-Einstellungen ändern
      </button>
    </div>
  );
}
