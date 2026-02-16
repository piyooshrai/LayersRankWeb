import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata = makeMetadata({
  title: 'Structured vs Unstructured Interviews | LayersRank',
  description:
    'Unstructured interviews feel natural but produce inconsistent results. Learn why structured assessments predict job performance better and how LayersRank makes them easy.',
  path: '/compare/traditional-interviews',
});

const stats = [
  { value: '0.20', label: 'Validity of unstructured interviews', sublabel: 'on a 0-1 scale' },
  { value: '0.51', label: 'Validity of structured interviews', sublabel: 'on a 0-1 scale' },
  { value: '74%', label: 'Interviewer disagreement', sublabel: 'on the same candidate' },
  { value: '4x', label: 'Higher mis-hire cost', sublabel: 'vs structured process' },
];

export default function CompareTraditionalInterviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Why Phone Screens Fail"
        description="Unstructured interviews feel natural but produce inconsistent results. Research shows they are one of the weakest predictors of job performance."
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Structured vs unstructured interview comparison" search="structured interview professional evaluation" />
        </div>
      </section>

      {/* The Evidence */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The evidence is clear</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Decades of industrial-organizational psychology research show that unstructured
            interviews have low predictive validity. The data is not ambiguous.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200 bg-paper-off p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-brand-yellow">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{stat.label}</p>
                <p className="mt-1 text-xs text-ink-muted">{stat.sublabel}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold text-ink">Why this matters for your team</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-light">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                Two interviewers assessing the same candidate often reach opposite conclusions,
                leading to decisions based on who had the &ldquo;better&rdquo; interviewer rather
                than who is the better candidate.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                Unstructured interviews introduce bias around pedigree, communication style, and
                affinity -- factors that correlate with background, not performance.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                The cost of a mis-hire is estimated at 1.5-3x the annual salary. Inconsistent
                evaluation directly inflates this risk.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Structured Means */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What &ldquo;structured&rdquo; actually means</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Structure is not about rigidity. It is about consistency, comparability, and fairness.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Same questions for every candidate</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every candidate for the same role answers the same core questions. This eliminates
                the variable of question difficulty and makes comparison meaningful.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Defined scoring rubric</h3>
              <p className="mt-2 text-sm text-ink-light">
                Responses are evaluated against pre-defined criteria, not gut feel. Reviewers know
                what &ldquo;good&rdquo; looks like before they see the first answer.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Multiple data points</h3>
              <p className="mt-2 text-sm text-ink-light">
                Decisions draw on scores across technical, behavioral, and contextual dimensions --
                not a single overall impression formed in the first five minutes.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Comparable results</h3>
              <p className="mt-2 text-sm text-ink-light">
                Because every candidate is measured on the same scale, you can rank, compare, and
                defend your decisions with data -- not anecdotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LayersRank Approach */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">The LayersRank Approach</p>
          <h2 className="mt-4 text-2xl font-bold">Structure without the overhead</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            LayersRank gives you the rigor of structured interviews without requiring your team to
            build rubrics, train interviewers, or standardize manually.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-2xl font-extrabold text-brand-yellow">01</p>
              <h3 className="mt-3 font-bold text-white">Pre-built question banks</h3>
              <p className="mt-2 text-sm text-gray-300">
                Over 1,000 vetted questions organized by role, level, and dimension. Select and
                deploy in minutes.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-2xl font-extrabold text-brand-yellow">02</p>
              <h3 className="mt-3 font-bold text-white">AI-assisted scoring</h3>
              <p className="mt-2 text-sm text-gray-300">
                Every response is scored against a structured rubric with AI-generated summaries.
                Reviewers validate, not create from scratch.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-2xl font-extrabold text-brand-yellow">03</p>
              <h3 className="mt-3 font-bold text-white">Confidence indicators</h3>
              <p className="mt-2 text-sm text-gray-300">
                Every score includes a confidence level. When confidence is low, adaptive follow-up
                questions are triggered automatically.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-2xl font-extrabold text-brand-yellow">04</p>
              <h3 className="mt-3 font-bold text-white">Audit trails</h3>
              <p className="mt-2 text-sm text-gray-300">
                Every decision is traceable -- from question asked, to response given, to score
                assigned, to reviewer who validated. Fully defensible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Move from gut feel to structured decisions"
        description="Replace inconsistent phone screens with a process you can trust and defend. 20-minute demo."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
