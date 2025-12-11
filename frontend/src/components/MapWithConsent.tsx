"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export default function MapWithConsent() {
  const { ready, canUseOptional, openBanner } = useCookieConsent();

  if (!ready) {
    return (
      <div className="flex h-[360px] w-full items-center justify-center text-sm text-slate-500">
        Karte wird vorbereitet …
      </div>
    );
  }

  if (!canUseOptional) {
    return (
      <div className="flex h-[360px] w-full flex-col items-center justify-center gap-3 px-4 text-center text-sm leading-relaxed text-slate-800">
        <p className="max-w-md">
          Die Google-Maps-Karte wird erst nach Ihrer Zustimmung zu optionalen
          Cookies geladen.
        </p>
        <button
          type="button"
          onClick={openBanner}
          className="rounded-full border border-emerald-200 bg-white px-4 py-2 font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
        >
          Cookie-Einstellungen öffnen
        </button>
      </div>
    );
  }

  return (
    <iframe
      title="Anfahrt Praxis Jana Wurr"
      src="https://www.google.com/maps?q=Rehmenkoppel+28+21039+Escheburg&output=embed"
      width="100%"
      height="360"
      loading="lazy"
      className="border-0 max-w-[640px]"
      allowFullScreen
    />
  );
}
