import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, FeatureCard, FeatureGrid } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'Structured Interviews That Scale | LayersRank',
  description:
    'Replace inconsistent phone screens with standardized assessments. Video, text, and multiple-choice formats with role-specific question banks.',
  path: '/product/structured-interviews',
});

const questionTypes = [
  {
    title: 'Video Responses',
    description:
      'Candidates record timed video answers to behavioral and situational questions. Reviewers see body language, communication clarity, and depth of thought without scheduling a single call.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Text Responses',
    description:
      'Open-ended written responses for technical explanations, case analyses, and problem breakdowns. Ideal for roles that require clear written communication and structured thinking.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Multiple Choice',
    description:
      'Scenario-based questions with carefully crafted distractors that test judgment, not trivia. Each option maps to a scoring rubric so evaluation is automatic and consistent.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const roleCategories = [
  { name: 'Software Engineering', count: '200+ questions' },
  { name: 'Product Management', count: '150+ questions' },
  { name: 'Data & Analytics', count: '120+ questions' },
  { name: 'Sales & Business Development', count: '100+ questions' },
  { name: 'Customer Success', count: '90+ questions' },
  { name: 'Operations & Finance', count: '80+ questions' },
  { name: 'Marketing', count: '75+ questions' },
  { name: 'People & HR', count: '70+ questions' },
  { name: 'Design & UX', count: '85+ questions' },
];

const candidateFeatures = [
  {
    title: 'No Scheduling Required',
    description:
      'Candidates complete assessments on their own time, within the window you set. No back-and-forth calendar coordination.',
  },
  {
    title: 'Mobile-Friendly',
    description:
      'Every question type works seamlessly on mobile devices. Candidates can respond from anywhere without downloading an app.',
  },
  {
    title: 'Practice Questions',
    description:
      'A warm-up question lets candidates get comfortable with the format before the scored assessment begins.',
  },
  {
    title: 'Clear Expectations',
    description:
      'Candidates see the number of questions, estimated time, and format up front. No surprises, no hidden gotchas.',
  },
];

const recruiterFeatures = [
  {
    title: 'Review 10x Faster',
    description:
      'Structured responses with AI-generated summaries let you review a candidate in under two minutes instead of a 30-minute phone screen.',
  },
  {
    title: 'Side-by-Side Comparison',
    description:
      'Compare candidates on the same dimensions with standardized scoring. No more apples-to-oranges evaluation across different interviewers.',
  },
  {
    title: 'AI Summaries',
    description:
      'Each response gets a concise summary highlighting key strengths, concerns, and evidence. Skim the summary, dive into the detail when needed.',
  },
  {
    title: 'One-Click Shortlist',
    description:
      'Move top candidates forward with a single click. Scores, summaries, and evidence travel with them through every stage.',
  },
];

export default function StructuredInterviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Structured Interviews That Scale"
        description="Replace inconsistent phone screens with standardized assessments that evaluate every candidate on the same dimensions. Video, text, and multiple-choice formats -- all scored against role-specific rubrics."
      />

      {/* Question Types */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Three question types. One consistent process.</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Choose the format that matches the signal you need. Mix and match within a single assessment.
          </p>
          <div className="mt-10">
            <FeatureGrid>
              {questionTypes.map((qt) => (
                <FeatureCard key={qt.title} title={qt.title} description={qt.description} icon={qt.icon} />
              ))}
            </FeatureGrid>
          </div>
        </div>
      </section>

      {/* Question Bank */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Role-specific questions. Ready to use.</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Over 1,000 vetted questions across technical, behavioral, and situational dimensions.
            Filter by role, level, and skill to build assessments in minutes.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roleCategories.map((role) => (
              <div
                key={role.name}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5"
              >
                <span className="font-medium text-ink">{role.name}</span>
                <span className="rounded-full bg-brand-yellow/10 px-3 py-1 text-xs font-semibold text-brand-yellow">
                  {role.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Experience */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Candidate experience that respects their time</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            A better candidate experience means better signal. When candidates feel respected, they give more authentic, thoughtful responses.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {candidateFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                  <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Recruiters */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">For Recruiters</p>
          <h2 className="mt-4 text-2xl font-bold">Your review workflow, accelerated</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            Structured interviews generate structured data. That means faster reviews, better comparisons, and fewer hours spent on phone screens that go nowhere.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {recruiterFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-700 bg-white/5 p-6">
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Start structuring your interviews"
        description="See how standardized assessments replace inconsistent phone screens. 20-minute demo, no commitment."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
