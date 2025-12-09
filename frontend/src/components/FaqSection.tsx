import { faqs } from "@/app/data";

export default function FaqSection() {
  return (
    <section id="faq" className="mt-20 space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
          FAQ
        </p>
        <h2
          className="text-3xl font-semibold text-slate-900 sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Häufige Fragen
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-md shadow-emerald-50"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {item.question}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-700">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
