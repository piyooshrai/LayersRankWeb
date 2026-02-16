import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'Sample Candidate Report | LayersRank',
  description:
    'See a full candidate evaluation report with scores, confidence levels, and evidence trails. Understand exactly what a LayersRank report delivers.',
  path: '/resources/sample-report',
});

const dimensions = [
  { label: 'Technical', score: 87, confidence: 94, color: 'bg-brand-green' },
  { label: 'System Design', score: 72, confidence: 68, color: 'bg-brand-orange' },
  { label: 'Behavioral', score: 91, confidence: 89, color: 'bg-brand-green' },
  { label: 'Communication', score: 78, confidence: 82, color: 'bg-brand-yellow' },
];

const strengths = [
  'Exceptional grasp of distributed systems and microservices patterns with clear articulation of trade-offs',
  'Demonstrated strong ownership mindset with concrete examples of driving projects through ambiguity',
  'Outstanding behavioral responses showing empathy, accountability, and structured conflict resolution',
  'Clear, concise communication style with well-organized answers across all question formats',
];

const concerns = [
  'System design confidence is below threshold (68%) -- adaptive follow-up was triggered and partially resolved the gap',
  'Limited experience articulating cross-functional collaboration in large-org contexts',
];

export default function SampleReportPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="See a Real Candidate Report"
        description="Full candidate evaluation report with scores, confidence levels, and evidence trails. This is what your hiring managers will see."
      />

      {/* Interactive Report */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Report Header */}
            <div className="border-b border-gray-200 bg-ink p-6 text-white md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                    Candidate Report
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold">Priya Sharma</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Senior Backend Engineer &middot; Requisition #7294
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Assessment completed Feb 10, 2026
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-4 py-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                    <span className="text-sm font-bold text-brand-green">Strong Hire</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-4xl font-extrabold text-brand-yellow">82</p>
                    <p className="text-xs text-gray-400">Overall Score /100</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-lg font-bold text-white">83%</p>
                    <p className="text-xs text-gray-400">Overall Confidence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dimension Scores */}
            <div className="border-b border-gray-200 p-6 md:p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Dimension Scores
              </h4>
              <div className="mt-6 space-y-5">
                {dimensions.map((dim) => (
                  <div key={dim.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-ink">{dim.label}</span>
                      <span className="text-ink-muted">
                        {dim.score}/100 &middot;{' '}
                        <span
                          className={
                            dim.confidence >= 80
                              ? 'font-medium text-brand-green'
                              : dim.confidence >= 70
                                ? 'font-medium text-brand-yellow'
                                : 'font-medium text-brand-orange'
                          }
                        >
                          {dim.confidence}% confidence
                        </span>
                      </span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${dim.color}`}
                        style={{ width: `${dim.score}%` }}
                      />
                    </div>
                    {/* Confidence indicator bar */}
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-50">
                      <div
                        className="h-full rounded-full bg-ink/20"
                        style={{ width: `${dim.confidence}%` }}
                      />
                    </div>
                    <p className="mt-1 text-right text-xs text-ink-muted">
                      confidence {dim.confidence}%
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Concerns */}
            <div className="grid border-b border-gray-200 md:grid-cols-2">
              <div className="border-b border-gray-200 p-6 md:border-b-0 md:border-r md:p-8">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Key Strengths
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-ink-light">
                  {strengths.map((strength, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Concerns
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-ink-light">
                  {concerns.map((concern, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Integrity Summary */}
            <div className="border-b border-gray-200 p-6 md:p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Integrity Summary
              </h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-paper-off p-4 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                    <span className="text-xs font-semibold text-brand-green">Pass</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">Response consistency</p>
                </div>
                <div className="rounded-lg bg-paper-off p-4 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                    <span className="text-xs font-semibold text-brand-green">Pass</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">Timing patterns</p>
                </div>
                <div className="rounded-lg bg-paper-off p-4 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                    <span className="text-xs font-semibold text-brand-green">Pass</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">Originality check</p>
                </div>
                <div className="rounded-lg bg-paper-off p-4 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                    <span className="text-xs font-semibold text-brand-green">High</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">Authenticity confidence</p>
                </div>
              </div>
            </div>

            {/* Report Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-paper-off px-6 py-4 md:px-8">
              <p className="text-xs text-ink-muted">
                Generated by LayersRank &middot; Report ID: LR-2026-07294-PS
              </p>
              <p className="text-xs text-ink-muted">
                Confidential &middot; For authorized reviewers only
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Get reports like this for your candidates"
        description="Every candidate evaluated with structured scoring, confidence levels, and evidence trails."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
