"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieBanner() {
  const {
    ready,
    bannerVisible,
    acceptAll,
    acceptNecessary,
  } = useCookieConsent();

  // Avoid hydration mismatch and only show when explicitly requested or needed.
  if (!ready || !bannerVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white/95 p-5 shadow-xl shadow-emerald-100 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="space-y-2 text-sm leading-relaxed text-slate-800">
          <p className="text-base font-semibold text-slate-900">
            Wir verwenden Cookies
          </p>
          <p>
            Wir setzen technisch notwendige Cookies, um die Seite bereitzustellen.
            Optionale Dienste (z. B. Tracking) werden erst nach Zustimmung geladen
            und können jederzeit widerrufen werden.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-emerald-800">
            <Link
              href="/datenschutz"
              className="underline decoration-emerald-300 decoration-2 underline-offset-4 transition hover:text-emerald-900"
            >
              Datenschutzerklärung
            </Link>
            <span className="text-slate-300">·</span>
            <Link
              href="/impressum"
              className="underline decoration-emerald-300 decoration-2 underline-offset-4 transition hover:text-emerald-900"
            >
              Impressum
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <button
            className="inline-flex w-full min-w-[190px] items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700 sm:w-[220px]"
            onClick={acceptAll}
          >
            Alle akzeptieren
          </button>
          <button
            className="inline-flex w-full min-w-[190px] items-center justify-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 sm:w-[220px]"
            onClick={acceptNecessary}
          >
            Nur notwendige Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
