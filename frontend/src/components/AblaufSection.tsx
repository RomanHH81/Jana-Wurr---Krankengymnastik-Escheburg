import { steps } from "@/app/data";

export default function AblaufSection() {
  return (
    <section id="ablauf" className="mt-20 space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
          Ablauf
        </p>
        <h2
          className="text-3xl font-semibold text-slate-900 sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Von Termin zu Termin mit Plan
        </h2>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
          Jede Behandlung hat einen roten Faden. Das gibt Sicherheit – für Sie
          und für Ihren Fortschritt.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative h-full rounded-3xl border border-white/80 bg-white/90 p-6 shadow-md shadow-emerald-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white shadow-md shadow-emerald-200">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-700">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
