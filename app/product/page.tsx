import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Product | LayersRank',
  description:
    'See how LayersRank standardizes intake, interview scoring, confidence checks, and shortlist reporting across ATS and interview systems.',
  path: '/product',
});

const workflow = [
  {
    number: '01',
    title: 'Intake & Role Setup',
    description: 'Define role dimensions, scoring rubrics, and question frameworks before interviews begin.',
  },
  {
    number: '02',
    title: 'Signal Capture',
    description: 'Candidates respond via video, text, or MCQ. Every response captured consistently.',
  },
  {
    number: '03',
    title: 'Structured Scoring',
    description: 'Multi-model evaluation scores each dimension with explicit evidence mapping.',
  },
  {
    number: '04',
    title: 'Confidence Check',
    description: 'System flags low-confidence scores and triggers adaptive follow-up questions.',
  },
  {
    number: '05',
    title: 'Decision Trail',
    description: 'Every rating maps to evidence, reviewer input, and confidence level for full auditability.',
  },
  {
    number: '06',
    title: 'Shortlist Export',
    description: 'Ranked candidates with dossiers ready for leadership review and HQ approval.',
  },
];

const features = [
  {
    id: 'structured-interviews',
    title: 'Structured Interviews',
    description: 'Role-specific question frameworks that ensure every candidate is evaluated on the same dimensions. Support for video, text, and MCQ formats.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'confidence-scoring',
    title: 'Confidence Scoring',
    description: 'Every score comes with a confidence band. Know when evidence is strong and when more signal is needed before making a decision.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'adaptive-followup',
    title: 'Adaptive Follow-Up',
    description: 'When confidence is low, the system generates targeted follow-up questions. No more guessing — every decision reaches high confidence.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 'integrity',
    title: 'Integrity Detection',
    description: 'Flag response inconsistencies, copied answers, and unusual patterns automatically. Protect evaluation quality at scale.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'reports',
    title: 'Audit-Ready Reports',
    description: 'Generate candidate dossiers with scores, confidence bands, evidence trails, and verdict summaries for leadership review.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'question-bank',
    title: 'Question Bank',
    description: '1,000+ vetted role-specific questions across technical, behavioral, and contextual dimensions. Filter by role, level, and skill.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect with your ATS, HRIS, coding platforms, and video interview tools. Keep your existing stack, add decision intelligence.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Product</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            A hiring workflow designed for consistent decisions.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            From intake to shortlist export, every step is structured, scored, and confidence-checked.
          </p>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">End-to-end workflow</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step) => (
              <div key={step.number} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="font-mono text-xs text-ink-muted">{step.number}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Platform capabilities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.id} id={feature.id} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Diagrams */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">System architecture</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Signal Fusion Map</h3>
              <div className="mt-4 flex flex-col gap-3">
                {['ATS Data', 'Interview Scorecards', 'Coding Assessments', 'References'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-brand-yellow" />
                    <span className="text-sm text-ink-light">{item}</span>
                    <div className="flex-1 border-b border-dashed border-gray-300" />
                    <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                ))}
                <div className="mt-2 rounded-lg bg-ink p-3 text-center text-sm font-medium text-white">
                  Unified Decision View
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Confidence & Ranking Pipeline</h3>
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Raw Scores', width: '100%', color: 'bg-gray-300' },
                  { label: 'Confidence Weighting', width: '85%', color: 'bg-brand-orange' },
                  { label: 'Uncertainty Detection', width: '70%', color: 'bg-brand-yellow' },
                  { label: 'Adaptive Resolution', width: '90%', color: 'bg-brand-green' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-ink-muted">
                      <span>{item.label}</span>
                    </div>
                    <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
                <div className="mt-2 rounded-lg bg-brand-green/10 p-3 text-center text-sm font-medium text-brand-green">
                  High-Confidence Ranked Shortlist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold text-ink">See it in action</h2>
          <p className="mt-2 text-ink-light">20-minute demo. No commitment.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demo" className="rounded-lg bg-ink px-6 py-3 font-semibold text-white hover:bg-ink-light">
              Book a Demo
            </Link>
            <Link href="/science" className="rounded-lg border-2 border-ink/20 px-6 py-3 font-medium text-ink hover:border-ink/40">
              Read the Science
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
