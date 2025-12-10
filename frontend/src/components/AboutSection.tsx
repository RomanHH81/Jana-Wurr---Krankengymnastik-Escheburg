export default function AboutSection() {
  return (
    <section id="ueber-uns" className="mt-20 space-y-4">
      <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
        Über uns
      </p>
      <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-lg shadow-emerald-100 space-y-4">
        <h2
          className="text-3xl font-semibold text-slate-900 sm:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Persönlich, familiär, ganzheitlich
        </h2>
        <p className="text-lg leading-relaxed text-slate-700">
          Seit dem Jahr 2000 befindet sich unsere kleine Praxis in Escheburg.
          Eine freundliche, familiäre Atmosphäre in lichten Räumen wurde
          geschaffen mit dem Ziel, den Menschen in seiner Ganzheit zu berühren.
        </p>
        <p className="leading-relaxed text-slate-700">
          Die ganzheitliche Sichtweise ist Basis für unsere Behandlungen, um auf
          die spezifischen, individuellen Bedürfnisse jedes Einzelnen eingehen
          zu können und ein bestmögliches Ergebnis zu erzielen. Für die
          größtmögliche Qualität unseres Wirkens legen wir viel Wert auf stetige
          Fort- und Weiterbildung.
        </p>
        <p className="leading-relaxed text-slate-700">
          Entwicklung ist ein wichtiger Punkt in unseren Behandlungen allen
          Alters. Bereits im Kindesalter wird das Fundament für das weitere
          Leben gelegt. Die körperliche Ebene ist dabei entwicklungsmorphologisch
          eng mit der geistig-seelischen Ebene verwoben.
        </p>
        <p className="leading-relaxed text-slate-700">
          Entwicklung findet schrittweise statt und ist wie ein Baukastensystem
          zu sehen. Werden Schritte übersprungen oder qualitativ nicht ausgefeilt,
          finden wir dieses später als Ausdruck in Konzentration, logischem
          Denkvermögen, psychosozialem Verhalten und Motorik wieder. Dieser rote
          Faden kann sich durch das ganze Leben ziehen, dieses dementsprechend
          prägen und beeinflussen.
        </p>
        <p className="leading-relaxed text-slate-700">
          Bewegungs- und Haltungsanalysen lassen Rückschlüsse vermuten,
          Behandlungsansätze finden und können präventiv genutzt werden.
        </p>
      </div>
    </section>
  );
}
