import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, FeatureCard, FeatureGrid } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'Scores You Can Actually Trust | LayersRank',
  description:
    'Confidence-weighted scoring that tells you not just how a candidate performed, but how certain the system is about it. Stop making decisions on shaky data.',
  path: '/product/confidence-scoring',
});

const dimensionScores = [
  { dimension: 'Technical Depth', score: 4.2, confidence: 'High', band: '4.0 - 4.4', color: 'bg-brand-green' },
  { dimension: 'Communication', score: 3.8, confidence: 'High', band: '3.6 - 4.0', color: 'bg-brand-green' },
  { dimension: 'Problem Solving', score: 3.1, confidence: 'Low', band: '2.4 - 3.8', color: 'bg-brand-red' },
  { dimension: 'Leadership', score: 3.5, confidence: 'Medium', band: '3.1 - 3.9', color: 'bg-brand-orange' },
  { dimension: 'Domain Knowledge', score: 4.0, confidence: 'High', band: '3.8 - 4.2', color: 'bg-brand-green' },
];

const whyItMatters = [
  {
    title: 'Defensible Decisions',
    description:
      'Every hiring decision maps to scores with explicit confidence levels. When leadership asks why a candidate was advanced or rejected, you have evidence with certainty attached.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Identify Who Needs Deeper Evaluation',
    description:
      'Low-confidence scores surface candidates who gave ambiguous or incomplete answers. Instead of guessing, route them for adaptive follow-up or a second review.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Full Audit Trail',
    description:
      'Confidence bands, model agreement rates, and evidence citations are logged for every score. Meet compliance requirements and reduce legal risk with transparent, auditable evaluations.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function ConfidenceScoringPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Scores You Can Actually Trust"
        description="Most scoring systems give you a number. LayersRank gives you a number plus a confidence level -- so you know when evidence is strong and when more signal is needed before making a decision."
      />

      {/* The Problem with Flat Scores */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The problem with flat scores</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            A single average hides disagreement. Two models might rate a candidate 4.5 and 2.5, giving an average
            of 3.5 -- the same score as two models that both rated 3.5. The average is identical, but the signal quality
            is completely different.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Scenario A */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Scenario A</p>
              <p className="mt-3 text-lg font-bold text-ink">Average: 3.5</p>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-ink-muted">
                    <span>Model 1</span>
                    <span className="font-mono">4.5</span>
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-brand-green" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-ink-muted">
                    <span>Model 2</span>
                    <span className="font-mono">2.5</span>
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-brand-red" style={{ width: '50%' }} />
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-brand-red/10 px-4 py-2 text-sm font-medium text-brand-red">
                High disagreement. Low confidence.
              </div>
            </div>

            {/* Scenario B */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Scenario B</p>
              <p className="mt-3 text-lg font-bold text-ink">Average: 3.5</p>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-ink-muted">
                    <span>Model 1</span>
                    <span className="font-mono">3.5</span>
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-brand-green" style={{ width: '70%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-ink-muted">
                    <span>Model 2</span>
                    <span className="font-mono">3.5</span>
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-brand-green" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green">
                Full agreement. High confidence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Confidence Scoring Works */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How confidence scoring works</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Three layers of validation ensure every score is backed by real certainty.
          </p>
          <div className="mt-10">
            <FeatureGrid>
              <FeatureCard
                title="Multiple Models Evaluate"
                description="Every candidate response is scored by multiple independent models. Each model evaluates the same rubric dimensions, producing parallel ratings that can be compared."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />
              <FeatureCard
                title="Agreement Check"
                description="The system measures inter-rater reliability across all model outputs. High agreement means the signal is clear. Low agreement flags uncertainty that needs resolution."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <FeatureCard
                title="Confidence Output"
                description="Each dimension score is published with a confidence band -- a range that reflects how certain the system is. Narrow bands mean strong evidence. Wide bands mean more signal is needed."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              />
            </FeatureGrid>
          </div>
        </div>
      </section>

      {/* What You See in Reports */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What you see in reports</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Every candidate report includes dimension-level scores with confidence bands. At a glance, you know where signal is strong and where follow-up is warranted.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper-off">
                  <th className="px-6 py-4 text-left font-semibold text-ink">Dimension</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">Score</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">Confidence</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">Band</th>
                </tr>
              </thead>
              <tbody>
                {dimensionScores.map((row) => (
                  <tr key={row.dimension} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">{row.dimension}</td>
                    <td className="px-6 py-4 font-mono text-ink">{row.score.toFixed(1)}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${row.color}`}
                      >
                        {row.confidence}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-ink-muted">{row.band}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            Problem Solving shows a wide confidence band (2.4 - 3.8), indicating model disagreement. This candidate would automatically receive adaptive follow-up questions on this dimension.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Why This Matters</p>
          <h2 className="mt-4 text-2xl font-bold">Confidence changes how you decide</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            When you know how certain a score is, you stop treating all numbers equally. High-confidence scores drive
            decisions. Low-confidence scores drive investigation.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyItMatters.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-700 bg-white/5 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="See confidence scoring in action"
        description="Watch how confidence bands change the way you evaluate candidates. 20-minute demo, no commitment."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Download Sample Report"
        secondaryCtaHref="/resources/sample-report"
      />
    </>
  );
}
