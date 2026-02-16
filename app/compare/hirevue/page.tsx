import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata = makeMetadata({
  title: 'LayersRank vs HireVue | Comparison',
  description:
    'Compare LayersRank with HireVue for structured hiring. See how confidence-weighted scoring and adaptive follow-up outperform traditional video interviews.',
  path: '/compare/hirevue',
});

const comparison = [
  {
    category: 'Scoring Approach',
    hirevue: 'Single AI score per candidate',
    layersrank: 'Score + confidence band per dimension',
  },
  {
    category: 'Transparency',
    hirevue: 'Black-box AI assessment',
    layersrank: 'Explainable evidence trail for every rating',
  },
  {
    category: 'Uncertainty Handling',
    hirevue: 'No uncertainty detection',
    layersrank: 'Adaptive follow-up when confidence is low',
  },
  {
    category: 'Panel Calibration',
    hirevue: 'Not available',
    layersrank: 'Built-in interviewer calibration and disagreement detection',
  },
  {
    category: 'Bias Controls',
    hirevue: 'Basic EEOC compliance',
    layersrank: 'Pedigree-neutral evaluation with structured dimensions',
  },
  {
    category: 'Report Quality',
    hirevue: 'Basic candidate summary',
    layersrank: 'Audit-ready dossier with confidence indicators',
  },
  {
    category: 'GCC / India Support',
    hirevue: 'Limited regional focus',
    layersrank: 'Built for GCC scale across Bangalore, Hyderabad, Pune, NCR',
  },
  {
    category: 'Question Adaptivity',
    hirevue: 'Fixed question set',
    layersrank: 'Questions adapt based on detected uncertainty',
  },
];

export default function CompareHireVuePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Compare</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            LayersRank vs HireVue
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            HireVue records video interviews and runs AI assessments. LayersRank evaluates with
            confidence bands, adaptive follow-up, and audit-ready reports that leadership can trust.
          </p>
        </div>
      </section>

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Side-by-side platform comparison" search="software comparison evaluation" />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper-off">
                  <th className="px-6 py-4 text-left font-semibold text-ink">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink-muted">HireVue</th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-yellow">LayersRank</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.category} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">{row.category}</td>
                    <td className="px-6 py-4 text-ink-muted">{row.hirevue}</td>
                    <td className="px-6 py-4 text-ink">
                      <div className="flex items-start gap-2">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {row.layersrank}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why teams switch from HireVue to LayersRank</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 font-bold text-ink">Confidence, not just scores</h3>
              <p className="mt-2 text-sm text-ink-light">
                HireVue gives you a number. LayersRank tells you how much to trust that number with
                measurable confidence bands.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 font-bold text-ink">Explainable decisions</h3>
              <p className="mt-2 text-sm text-ink-light">
                No black-box AI. Every score maps to observed evidence, structured criteria, and
                reviewer input. Fully auditable.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mt-4 font-bold text-ink">Adaptive, not static</h3>
              <p className="mt-2 text-sm text-ink-light">
                When a score is uncertain, LayersRank asks targeted follow-up questions instead
                of leaving you to guess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold text-ink">See the difference for yourself</h2>
          <p className="mt-2 text-ink-light">20-minute demo comparing LayersRank to your current tool.</p>
          <Link
            href="/demo"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink px-8 py-4 font-semibold text-white hover:bg-ink-light"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
