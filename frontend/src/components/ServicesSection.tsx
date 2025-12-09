import { services } from "@/app/data";

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

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex h-full flex-col justify-between rounded-2xl border border-white/70 bg-white/90 p-6 shadow-md shadow-emerald-50 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="leading-relaxed text-slate-700">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
