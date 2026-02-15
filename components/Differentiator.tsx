const traditionalProblems = [
  'Single score per candidate, no confidence level',
  'Black-box AI with no explanation',
  'Same questions regardless of uncertainty',
  'No way to detect panel disagreement',
  'Score averages that hide noise',
  'Reports that don\'t help leadership decide',
];

const layersrankBenefits = [
  'Score + confidence indicator for every dimension',
  'Explainable evidence trail for each rating',
  'Adaptive follow-up when confidence is low',
  'Panel calibration and disagreement detection',
  'Ranked shortlist weighted by decision confidence',
  'Audit-ready reports leadership can approve faster',
];

export function Differentiator() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            The Difference
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Not another ATS. A decision engine.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Traditional hiring tools give you scores. LayersRank gives you confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Traditional Tools */}
          <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/20">
                <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-300">Traditional Tools</h3>
            </div>
            <ul className="space-y-4">
              {traditionalProblems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-red/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  <span className="text-sm text-gray-400">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LayersRank */}
          <div className="rounded-2xl border border-brand-yellow/30 bg-brand-yellow/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/20">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">LayersRank</h3>
            </div>
            <ul className="space-y-4">
              {layersrankBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
