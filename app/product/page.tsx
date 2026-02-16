import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Structured Interview Platform | LayersRank',
  description:
    'LayersRank transforms first-round interviews into a standardized, high-signal decision engine. Evaluate candidates across technical, behavioral, and contextual dimensions with confidence scores.',
  path: '/product',
});

const workflow = [
  { number: '01', title: 'Candidate Receives Link', description: 'Invite candidates to complete a structured interview on their own schedule — no coordination needed.' },
  { number: '02', title: 'Video, Text & MCQ Answers', description: 'Candidates answer role-specific questions via video, text, and MCQ in a single session.' },
  { number: '03', title: 'Multi-Model AI Scoring', description: 'Multiple AI models independently score each response across defined dimensions.' },
  { number: '04', title: 'Uncertainty Detection', description: 'When models disagree, the system flags uncertainty instead of hiding it behind averages.' },
  { number: '05', title: 'Adaptive Follow-Up', description: 'Low-confidence scores trigger clarifying questions — in real-time during the interview.' },
  { number: '06', title: 'Confident Ranked Report', description: 'Recruiter receives a ranked shortlist with scores, confidence bands, and evidence trails.' },
];

const capabilities = [
  {
    id: 'structured-interviews',
    href: '/product/structured-interviews',
    title: 'Structured Interviews',
    description: 'Role-specific questions via video, text, MCQ. No scheduling required.',
  },
  {
    id: 'confidence-scoring',
    href: '/product/confidence-scoring',
    title: 'Confidence-Weighted Scoring',
    description: 'Every score includes a confidence level. Know when to trust the signal.',
  },
  {
    id: 'adaptive-followup',
    href: '/product/adaptive-questioning',
    title: 'Adaptive Follow-Up',
    description: 'When models disagree, AI asks clarifying questions in real-time.',
  },
  {
    id: 'integrity',
    href: '/product/integrity-detection',
    title: 'Integrity Detection',
    description: 'Paste tracking, tab switches, typing patterns. Know what\'s authentic.',
  },
  {
    id: 'reports',
    href: '/product/candidate-reports',
    title: 'Decision Reports',
    description: 'Audit-ready dossiers with scores, confidence bands, and verdict summaries.',
  },
  {
    id: 'question-bank',
    href: '/product/question-bank',
    title: 'Question Bank',
    description: '1,000+ vetted role-specific questions across technical, behavioral, and contextual dimensions.',
  },
];

const integrations = [
  'Workday', 'Greenhouse', 'Lever', 'SAP SuccessFactors',
  'Oracle Taleo', 'iCIMS', 'SmartRecruiters', 'Custom API',
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Product</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Structured Interviews. Confident Decisions.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            LayersRank transforms first-round interviews into a standardized, high-signal decision
            engine. Evaluate candidates across technical, behavioral, and contextual dimensions —
            with confidence scores, not guesswork.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/demo" className="rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange">
              Book a Demo
            </Link>
            <Link href="/resources/sample-report" className="rounded-lg border border-gray-500 px-6 py-3 font-medium text-white hover:border-white hover:bg-white/5">
              See Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview Flow */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-ink">One platform. Every hiring signal.</h2>
            <p className="mt-4 text-ink-light">From candidate invite to confident shortlist — here&apos;s what happens.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step) => (
              <div key={step.number} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <span className="font-mono text-2xl font-bold text-gray-200">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Core capabilities</h2>
          <p className="mt-2 text-ink-light">Each capability links to a detailed page.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <Link
                key={cap.id}
                href={cap.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">{cap.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{cap.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Works with your existing stack</h2>
          <p className="mt-2 text-ink-light">Push candidates in, pull reports out. Full API access for custom workflows.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {integrations.map((name) => (
              <div key={name} className="flex h-14 items-center rounded-lg border border-gray-200 bg-paper-off px-6">
                <span className="font-mono text-sm font-medium text-ink-light">{name}</span>
              </div>
            ))}
          </div>
          <Link href="/product/integrations" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-yellow hover:text-brand-orange">
            View all integrations
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* System Diagrams */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">System architecture</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
              <h3 className="text-lg font-bold">Signal Fusion Map</h3>
              <div className="mt-4 flex flex-col gap-3">
                {['ATS Data', 'Interview Scorecards', 'Coding Assessments', 'References'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-brand-yellow" />
                    <span className="text-sm text-gray-300">{item}</span>
                    <div className="flex-1 border-b border-dashed border-gray-600" />
                    <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                ))}
                <div className="mt-2 rounded-lg bg-brand-yellow/10 p-3 text-center text-sm font-medium text-brand-yellow">
                  Unified Decision View
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
              <h3 className="text-lg font-bold">Confidence & Ranking Pipeline</h3>
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Raw Scores', width: '100%', color: 'bg-gray-500' },
                  { label: 'Confidence Weighting', width: '85%', color: 'bg-brand-orange' },
                  { label: 'Uncertainty Detection', width: '70%', color: 'bg-brand-yellow' },
                  { label: 'Adaptive Resolution', width: '90%', color: 'bg-brand-green' },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="text-xs text-gray-400">{item.label}</span>
                    <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-700">
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
          <h2 className="text-2xl font-bold text-ink">See LayersRank in action</h2>
          <p className="mt-2 text-ink-light">20-minute demo. No commitment.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demo" className="rounded-lg bg-ink px-8 py-4 font-semibold text-white hover:bg-ink-light">
              Book a Demo
            </Link>
            <Link href="/resources/sample-report" className="rounded-lg border-2 border-ink/20 px-8 py-4 font-medium text-ink hover:border-ink/40">
              See Sample Report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
