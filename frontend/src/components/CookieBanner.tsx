"use client";

import { startTransition, useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-ack");
    startTransition(() => {
      setVisible(!accepted);
    });
    // Showing banner after mount to avoid SSR/CSR mismatch
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-ack", "all");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-ack", "necessary-only");
    setVisible(false);
  };

  const manage = () => {
    // Placeholder: would open preferences modal if present
    localStorage.setItem("cookie-ack", "manage");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 rounded-2xl border border-emerald-200 bg-white/95 p-4 shadow-xl shadow-emerald-100 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-sm text-slate-800">
          <p className="font-semibold text-slate-900">Hinweis zu Cookies</p>
          <p>
            Für eingebettete Inhalte (z. B. Google Maps) können technisch
            notwendige Cookies entstehen. Mit „Verstanden“ stimmen Sie dem zu.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            onClick={accept}
          >
            Alle akzeptieren
          </button>
          <button
            className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
            onClick={reject}
          >
            Nur notwendig
          </button>
          <button
            className="rounded-full border border-transparent bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200"
            onClick={manage}
          >
            Einstellungen
          </button>
        </div>
      </div>
    </div>
  );
}
