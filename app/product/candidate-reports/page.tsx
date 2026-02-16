import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, FeatureCard, FeatureGrid } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'Reports That Drive Decisions | LayersRank',
  description:
    'Structured interview scorecards and hiring decision summaries that give hiring managers clear recommendations backed by evidence, not walls of data.',
  path: '/product/candidate-reports',
});

const reportSections = [
  {
    number: '01',
    title: 'Summary Header',
    description:
      'Candidate name, role applied for, interview date, overall composite score, and a clear verdict — Advance, Hold, or Decline — displayed at a glance.',
  },
  {
    number: '02',
    title: 'Dimension Scores',
    description:
      'Separate scores for Technical Proficiency, Behavioral Competence, and Contextual Fit, each with confidence bands and evidence counts.',
  },
  {
    number: '03',
    title: 'Key Strengths & Concerns',
    description:
      'AI-distilled highlights: the strongest signals in favor and the most significant risk factors, with direct links to the supporting evidence.',
  },
  {
    number: '04',
    title: 'Question-by-Question Breakdown',
    description:
      'Every question asked, the candidate\'s response summary, the rubric applied, the score assigned, and the confidence level for that score.',
  },
  {
    number: '05',
    title: 'Integrity Summary',
    description:
      'Flags for response inconsistencies, timing anomalies, potential copied answers, and overall authenticity confidence rating.',
  },
  {
    number: '06',
    title: 'Transcript Access',
    description:
      'Full interview transcript with timestamps, searchable by keyword, and annotated with scoring touchpoints for complete auditability.',
  },
];

const exportOptions = [
  {
    title: 'PDF Export',
    description:
      'Generate polished, branded PDF reports ready for hiring committee review. Includes all scores, evidence, and verdict summary in a print-friendly format.',
  },
  {
    title: 'ATS Integration',
    description:
      'Push report summaries, scores, and verdicts directly into your applicant tracking system. No copy-paste, no context switching.',
  },
  {
    title: 'API Access',
    description:
      'Retrieve report data programmatically via REST API. Build custom dashboards, feed into internal analytics, or trigger downstream workflows.',
  },
  {
    title: 'Bulk Export for Compliance',
    description:
      'Export all candidate reports for a requisition in a single archive. Structured for EEOC, OFCCP, and internal audit requirements.',
  },
];

export default function CandidateReportsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Product"
        title="Reports That Drive Decisions"
        description="Not a wall of data. A clear recommendation with the evidence to back it up."
      />

      {/* Report Sections Walkthrough */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What every report includes</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Six structured sections that take a hiring manager from overview to evidence in under two minutes.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportSections.map((section) => (
              <div
                key={section.number}
                className="rounded-xl border border-gray-200 bg-paper-off p-6"
              >
                <p className="font-mono text-xs font-bold text-brand-yellow">
                  {section.number}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{section.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Sample report preview</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            A real report structure showing how scores, confidence, and evidence come together.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Report Header Mockup */}
            <div className="border-b border-gray-200 bg-ink p-6 text-white">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                    Candidate Report
                  </p>
                  <h3 className="mt-1 text-xl font-bold">Alex Morgan</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Senior Software Engineer &middot; Requisition #4821
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-4 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                    <span className="text-sm font-semibold text-brand-green">Advance</span>
                  </div>
                  <p className="mt-2 text-2xl font-extrabold text-brand-yellow">87</p>
                  <p className="text-xs text-gray-400">Overall Score</p>
                </div>
              </div>
            </div>

            {/* Dimension Scores Mockup */}
            <div className="border-b border-gray-200 p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Dimension Scores
              </h4>
              <div className="mt-4 space-y-4">
                {[
                  { label: 'Technical Proficiency', score: 91, confidence: 'High', color: 'bg-brand-green' },
                  { label: 'Behavioral Competence', score: 84, confidence: 'High', color: 'bg-brand-yellow' },
                  { label: 'Contextual Fit', score: 79, confidence: 'Medium', color: 'bg-brand-orange' },
                ].map((dim) => (
                  <div key={dim.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink">{dim.label}</span>
                      <span className="text-ink-muted">
                        {dim.score}/100 &middot;{' '}
                        <span
                          className={
                            dim.confidence === 'High'
                              ? 'text-brand-green'
                              : 'text-brand-orange'
                          }
                        >
                          {dim.confidence} confidence
                        </span>
                      </span>
                    </div>
                    <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${dim.color}`}
                        style={{ width: `${dim.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Concerns Mockup */}
            <div className="grid border-b border-gray-200 md:grid-cols-2">
              <div className="border-b border-gray-200 p-6 md:border-b-0 md:border-r">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Key Strengths
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Strong system design reasoning with clear trade-off articulation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Demonstrated ownership mindset in behavioral scenarios
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Deep familiarity with distributed systems at scale
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Concerns
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Contextual fit score below threshold — limited GCC market awareness
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    One adaptive follow-up triggered on collaboration scenarios
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Mockup */}
            <div className="flex items-center justify-between bg-paper-off px-6 py-4">
              <p className="text-xs text-ink-muted">
                Generated by LayersRank &middot; Interview completed Jan 14, 2026
              </p>
              <p className="text-xs text-ink-muted">Report ID: LR-2026-04821-AM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Options */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Export and integrate</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Get reports where they need to go, in the format that works for your team.
          </p>
          <div className="mt-10">
            <FeatureGrid>
              {exportOptions.map((option) => (
                <FeatureCard
                  key={option.title}
                  title={option.title}
                  description={option.description}
                />
              ))}
            </FeatureGrid>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Get reports that make decisions easier"
        description="See how LayersRank turns interview data into clear, actionable recommendations."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Download Sample Report"
        secondaryCtaHref="/resources/sample-report"
      />
    </>
  );
}
