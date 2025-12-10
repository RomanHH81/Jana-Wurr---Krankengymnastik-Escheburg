import CheckIcon from "@/components/CheckIcon";
import {
  expectationItems,
  quickFacts,
} from "@/app/data";

export default function HeroSection() {
  return (
    <section
      id="start"
      className="space-y-8 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl shadow-emerald-100/60 backdrop-blur md:p-12"
    >
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
          Physiotherapie in Escheburg
        </p>
        <h1
          className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Beweglich werden. Sicher fühlen.
        </h1>
        <p className="text-lg leading-relaxed text-slate-700">
          In unserer Praxis verbinden wir moderne Krankengymnastik, manuelle
          Techniken und ruhige Übungsräume. So finden wir gemeinsam den Weg, der
          zu Ihrem Körper und Ihrem Alltag passt.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            href="#kontakt"
          >
            Termin anfragen
          </a>
          <a
            className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-300"
            href="#leistungen"
          >
            Leistungen entdecken
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {quickFacts.map((fact) => (
            <div
              key={fact.title}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100"
            >
              <p className="text-sm font-semibold text-emerald-800">
                {fact.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-8 shadow-lg shadow-emerald-100">
        <p className="text-sm font-semibold text-emerald-700">Was Sie erwartet</p>
        <div className="mt-4 space-y-3 text-slate-700">
          {expectationItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-emerald-100 p-1">
                <CheckIcon />
              </div>
              <p className="leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
