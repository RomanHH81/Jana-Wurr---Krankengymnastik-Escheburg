import { alternativeMethods, insuranceServices } from "@/app/data";

export default function ServicesSection() {
  return (
    <section id="leistungen" className="mt-20 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
            Leistungen
          </p>
          <h2
            className="text-3xl font-semibold text-slate-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Therapiebausteine für Ihren Alltag
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            Wir kombinieren aktive Übungen, manuelle Techniken und verständliche
            Erklärungen. So entsteht ein Plan, der Ihnen Sicherheit gibt – vom
            ersten Termin bis zur Nachsorge.
          </p>
        </div>
        <span className="hidden rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm md:inline-flex">
          Mit Rezept · privat · nach Absprache auch Selbstzahler
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-md shadow-emerald-50">
          <h3 className="text-xl font-semibold text-slate-900">
            Kassenärztliche Leistungen
          </h3>
          <p className="mt-2 text-slate-700">
            Aus dem Heilmittelkatalog bieten wir diese Behandlungen an:
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {insuranceServices.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-emerald-50/60 px-3 py-2 text-sm text-emerald-900 shadow-inner shadow-emerald-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-md shadow-emerald-50">
          <h3 className="text-xl font-semibold text-slate-900">
            Alternative Behandlungsmöglichkeiten
          </h3>
          <p className="mt-2 text-slate-700">
            Ganzheitlicher Ansatz, um die Selbstheilungskräfte von Körper, Geist
            und Seele anzuregen.
          </p>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
            <p>
              Ziel dieser Methoden ist es, Disharmonien der drei Säulen zu
              erkennen und auszugleichen. Schmerzen verstehen wir oft als Signal
              für ein Ungleichgewicht; frühzeitig gegenzusteuern kann
              langfristige Beschwerden vermeiden.
            </p>
            <p>
              Werden Entwicklungsschritte übersprungen, zeigt sich das später in
              Konzentration, Motorik und Verhalten. Mit diesen Methoden lassen
              sich Blockaden lösen und Ressourcen stärken.
            </p>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {alternativeMethods.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-emerald-50/60 px-3 py-2 text-sm text-emerald-900 shadow-inner shadow-emerald-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
