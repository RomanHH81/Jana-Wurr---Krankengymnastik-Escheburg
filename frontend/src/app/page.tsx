const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#praxis", label: "Praxis" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

const services = [
  {
    title: "Krankengymnastik & Bewegungstherapie",
    description:
      "Individuelle Übungen für mehr Beweglichkeit, Stabilität und Schmerzreduktion – angepasst an Ihren Alltag.",
    tags: ["Mobilität", "Schmerzreduktion", "Alltag"],
  },
  {
    title: "Manuelle Techniken",
    description:
      "Sanfte Mobilisation und fasziale Techniken, um Spannungen zu lösen, Gelenke zu entlasten und Beweglichkeit aufzubauen.",
    tags: ["Gelenke", "Faszien", "Entlastung"],
  },
  {
    title: "Lymphdrainage & Entstauung",
    description:
      "Ruhige, präzise Griffe zur Schmerzlinderung und Abschwellung nach Verletzungen oder Operationen.",
    tags: ["Schwellungen", "Narben", "Regeneration"],
  },
  {
    title: "Reha-Begleitung & Prävention",
    description:
      "Nach Operationen oder Verletzungen begleiten wir Sie Schritt für Schritt zurück in Ihren gewohnten Rhythmus.",
    tags: ["Aufbau", "Stabilität", "Training"],
  },
  {
    title: "Atem- & Entspannungstherapie",
    description:
      "Gezielte Atemtechniken und entspannende Übungen für mehr Ruhe, bessere Versorgung und weniger Stress im Alltag.",
    tags: ["Stressreduktion", "Energie", "Balance"],
  },
  {
    title: "Hausbesuche nach Verordnung",
    description:
      "Wenn Mobilität eingeschränkt ist, kommen wir nach Absprache auch zu Ihnen in Escheburg und Umgebung.",
    tags: ["Flexibel", "Individuell", "Wohnortnah"],
  },
];

const values = [
  {
    title: "Zeit für Ihre Geschichte",
    description:
      "Wir hören zu, bevor wir behandeln – damit Therapieplan und Ziele wirklich zu Ihnen passen.",
  },
  {
    title: "Klarer Behandlungsplan",
    description:
      "Transparente Schritte, damit Sie wissen, was heute passiert und was als Nächstes folgt.",
  },
  {
    title: "Alltagstaugliche Übungen",
    description:
      "Übungen, die Sie zuhause oder im Büro umsetzen können und die nicht an übermorgen scheitern.",
  },
];

const steps = [
  {
    title: "Ankommen & Befund",
    description:
      "Gemeinsam klären wir Beschwerden, Ziele und Alltagssituationen. Befunde oder Arztberichte gern mitbringen.",
  },
  {
    title: "Therapie & Training",
    description:
      "Behandlung auf der Liege, aktive Übungen und manuelle Techniken – abgestimmt auf Ihr Tempo.",
  },
  {
    title: "Nachsorge & Begleitung",
    description:
      "Kurze Check-ins, angepasste Übungen und Tipps für den Alltag sichern Ihren Fortschritt.",
  },
];

const faqs = [
  {
    question: "Brauche ich ein Rezept?",
    answer:
      "Mit Rezept sind Kassen- und Privatbehandlungen möglich. Selbstzahler-Leistungen sind nach Absprache ebenfalls machbar.",
  },
  {
    question: "Was sollte ich mitbringen?",
    answer:
      "Bequeme Kleidung, vorhandene Befunde oder Arztberichte und gern ein kleines Handtuch. So können wir gezielt starten.",
  },
  {
    question: "Bieten Sie Hausbesuche an?",
    answer:
      "Ja, wenn eine ärztliche Verordnung vorliegt oder wir dies im Vorgespräch vereinbaren. Bitte sprechen Sie uns an.",
  },
  {
    question: "Wie erreiche ich die Praxis?",
    answer:
      "Die Kontaktdaten und Anfahrt bitte noch ergänzen. Parkmöglichkeiten und ÖPNV-Hinweise können im Kontaktbereich ergänzt werden.",
  },
];

const quickFacts = [
  {
    title: "Persönliche 1:1 Betreuung",
    description: "Therapiezeit ohne Hektik und mit klarer Abstimmung.",
  },
  {
    title: "Ruhige Praxis in Escheburg",
    description: "Kurze Wege aus der Umgebung und eine entspannte Atmosphäre.",
  },
  {
    title: "Termine nach Vereinbarung",
    description: "Wir finden Zeitfenster, die zu Ihrem Alltag passen.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-slate-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-[-12rem] -z-10 transform-gpu blur-3xl"
        aria-hidden
      >
        <div className="mx-auto h-64 max-w-5xl bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-100 opacity-70" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold uppercase text-white shadow-lg shadow-emerald-200">
              JW
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
                Krankengymnastik
              </p>
              <p className="text-lg font-semibold">Jana Wurr · Escheburg</p>
            </div>
          </div>
          <nav
            className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex"
            aria-label="Hauptnavigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-emerald-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            href="#kontakt"
          >
            Termin anfragen
          </a>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-16">
        <section
          id="start"
          className="grid gap-10 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl shadow-emerald-100/60 backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-12"
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
              Techniken und ruhige Übungsräume. So finden wir gemeinsam den
              Weg, der zu Ihrem Körper und Ihrem Alltag passt.
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

          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-8 shadow-lg shadow-emerald-100">
              <p className="text-sm font-semibold text-emerald-700">
                Was Sie erwartet
              </p>
              <div className="mt-4 space-y-3 text-slate-700">
                {[
                  "Ruhige Atmosphäre und klare Kommunikation",
                  "Therapiepläne, die wir gemeinsam festlegen",
                  "Übungen, die im Alltag funktionieren",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-emerald-100 p-1">
                      <CheckIcon />
                    </div>
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white/70 p-4 text-sm text-slate-700 shadow-inner">
                <p className="font-semibold text-emerald-800">
                  Hinweis zu Kontaktdaten
                </p>
                <p className="mt-2 leading-relaxed">
                  Telefon, E-Mail und genaue Adresse bitte noch ergänzen, damit
                  Patienten direkt buchen oder den Weg finden können.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                Wir kombinieren aktive Übungen, manuelle Techniken und
                verständliche Erklärungen. So entsteht ein Plan, der Ihnen
                Sicherheit gibt – vom ersten Termin bis zur Nachsorge.
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
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-semibold text-emerald-700">
                    ·
                  </div>
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
              </div>
            ))}
          </div>
        </section>

        <section
          id="praxis"
          className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-emerald-100">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
              Praxis
            </p>
            <h2
              className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              So arbeiten wir zusammen
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Wir nehmen uns Zeit, erklären transparent und gestalten jede
              Einheit mit Ihnen. Moderne Physiotherapie heißt für uns: zuhören,
              anpassen, dranbleiben.
            </p>
            <div className="mt-6 space-y-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-inner shadow-emerald-100"
                >
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
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-7 shadow-lg shadow-emerald-100">
              <p className="text-sm font-semibold text-emerald-700">
                Gut vorbereitet
              </p>
              <div className="mt-4 space-y-4 text-slate-700">
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Termine</p>
                  <p className="text-lg font-semibold text-slate-900">
                    Nach Vereinbarung
                  </p>
                  <p className="mt-1 text-sm">
                    Öffnungszeiten und Kontakt bitte ergänzen.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Unterlagen</p>
                  <p className="text-lg font-semibold text-slate-900">
                    Rezept & Befunde
                  </p>
                  <p className="mt-1 text-sm">
                    Helfen, schneller zur passenden Behandlung zu kommen.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Mitbringen</p>
                  <p className="text-lg font-semibold text-slate-900">
                    Bequeme Kleidung
                  </p>
                  <p className="mt-1 text-sm">
                    Für aktive Übungen und einen angenehmen Ablauf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              Jede Behandlung hat einen roten Faden. Das gibt Sicherheit – für
              Sie und für Ihren Fortschritt.
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

        <section
          id="kontakt"
          className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-emerald-100">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
              Kontakt
            </p>
            <h2
              className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Termin vereinbaren
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Hier können Telefonnummer, E-Mail und Öffnungszeiten ergänzt
              werden. So erreichen Patienten schnell den passenden Ansprechpartner.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
                <p className="text-sm text-slate-500">Telefon</p>
                <p className="text-lg font-semibold text-slate-900">
                  Bitte Nummer ergänzen
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
                <p className="text-sm text-slate-500">E-Mail</p>
                <p className="text-lg font-semibold text-slate-900">
                  Bitte E-Mail ergänzen
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
                <p className="text-sm text-slate-500">Adresse</p>
                <p className="text-lg font-semibold text-slate-900">
                  Praxisanschrift eintragen
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm shadow-emerald-100">
                <p className="text-sm text-slate-500">Öffnungszeiten</p>
                <p className="text-lg font-semibold text-slate-900">
                  Nach Vereinbarung
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                href="mailto:"
              >
                Jetzt Kontakt ergänzen
              </a>
              <a
                className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-300"
                href="#start"
              >
                Zurück zum Anfang
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-emerald-100">
            <div className="h-full rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-6 text-slate-700">
              <p className="text-sm font-semibold text-emerald-800">
                Platz für Karte oder Foto
              </p>
              <p className="mt-2 leading-relaxed">
                Hier kann eine Anfahrtskarte oder ein Praxisfoto eingebunden
                werden, sobald die finalen Kontaktdaten feststehen.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Krankengymnastik Jana Wurr · Escheburg
            </p>
            <p className="text-sm text-slate-600">
              Moderne Physiotherapie, klare Abläufe, persönlicher Kontakt.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-emerald-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
