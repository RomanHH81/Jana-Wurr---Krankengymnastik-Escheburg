import { prepared, values } from "@/app/data";
import CheckIcon from "@/components/CheckIcon";

export default function PraxisSection() {
  return (
    <section id="praxis" className="mt-20 space-y-6">
      <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
        Praxis
      </p>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="flex h-full flex-col rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-emerald-100">
          <div className="space-y-3">
            <h2
              className="text-3xl font-semibold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              So arbeiten wir zusammen
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Wir nehmen uns Zeit, erklären transparent und gestalten jede
              Einheit mit Ihnen. Moderne Physiotherapie heißt für uns: zuhören,
              anpassen, dranbleiben.
            </p>
          </div>
          <div className="mt-6 grid gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="h-full rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-inner shadow-emerald-100"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-slate-700">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-emerald-100">
          <div className="space-y-3">
            <h2
              className="text-3xl font-semibold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Gut vorbereitet
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Drei kurze Hinweise, damit der Termin entspannt starten kann.
            </p>
          </div>
          <div className="mt-6 grid gap-4">
            {prepared.map((item) => (
              <div
                key={item.title}
                className="h-full rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-inner shadow-emerald-100"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
