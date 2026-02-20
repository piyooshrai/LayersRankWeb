import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, FeatureCard, FeatureGrid } from '@/components/page-sections';
import { ProductMockup } from '@/components/product-mockup';

export const metadata = makeMetadata({
  title: 'Interview Question Bank | LayersRank',
  description:
    'Role-specific assessment questions mapped to competencies and validated for reliability. Browse by role, level, and skill across technical, behavioral, and contextual dimensions.',
  path: '/product/question-bank',
});

const roleCategories = [
  {
    category: 'Engineering',
    roles: [
      'Software Engineer',
      'Frontend Engineer',
      'Backend Engineer',
      'Full Stack Engineer',
      'DevOps Engineer',
      'QA Engineer',
      'Data Engineer',
      'ML Engineer',
    ],
    color: 'bg-brand-yellow',
  },
  {
    category: 'Product',
    roles: ['Product Manager', 'Product Designer', 'UX Researcher'],
    color: 'bg-brand-orange',
  },
  {
    category: 'Data',
    roles: ['Data Scientist', 'Data Analyst', 'Business Analyst'],
    color: 'bg-brand-green',
  },
  {
    category: 'Leadership',
    roles: ['Engineering Manager', 'Director of Engineering', 'VP of Engineering'],
    color: 'bg-brand-red',
  },
  {
    category: 'Operations',
    roles: ['Project Manager', 'Scrum Master', 'Technical Writer'],
    color: 'bg-ink',
  },
];

const questionAnatomy = [
  {
    label: 'Question Text',
    description:
      'The interview question itself, written in plain language and tested for clarity across candidate populations.',
    accent: 'border-brand-yellow',
  },
  {
    label: 'Competency Tags',
    description:
      'Each question maps to one or more competencies — problem solving, communication, system design, leadership — so you know exactly what signal you are capturing.',
    accent: 'border-brand-orange',
  },
  {
    label: 'Difficulty Level',
    description:
      'Calibrated across Junior, Mid, Senior, and Staff tiers so candidates are assessed at the appropriate level of expectation.',
    accent: 'border-brand-red',
  },
  {
    label: 'Expected Answer Rubric',
    description:
      'A structured rubric with criteria for Below Expectations, Meets Expectations, and Exceeds Expectations, including concrete examples for each tier.',
    accent: 'border-brand-green',
  },
  {
    label: 'Scoring Criteria',
    description:
      'Weighted dimensions that determine how the response is evaluated, ensuring consistent scoring across interviewers and sessions.',
    accent: 'border-brand-yellow',
  },
  {
    label: 'Follow-Up Triggers',
    description:
      'Conditional follow-up questions that activate when confidence is low or when the candidate\'s response opens a deeper line of inquiry.',
    accent: 'border-brand-orange',
  },
];

const customFeatures = [
  {
    title: 'Guided Question Builder',
    description:
      'Step-by-step interface to create custom questions. Define the competency, set the difficulty, and the system guides you through writing an effective prompt with a clear rubric.',
  },
  {
    title: 'AI-Suggested Rubrics',
    description:
      'Paste your question and let the system generate a scoring rubric based on thousands of validated assessment patterns. Refine it, approve it, and deploy.',
  },
  {
    title: 'Test Before Deploying',
    description:
      'Run your custom question through a simulated interview to see how scoring works before it reaches a single candidate. Catch ambiguity early.',
  },
  {
    title: 'Question Performance Analytics',
    description:
      'Track how each question performs in production: score distribution, discrimination index, confidence levels, and candidate feedback signals.',
  },
];

export default function QuestionBankPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Product"
        title="Questions Designed for Signal"
        description="Every question is mapped to a competency, calibrated to a level, and validated for reliability. No filler. No gotchas. Just structured signal."
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ProductMockup type="question-bank" />
        </div>
      </section>

      {/* Browse by Role */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Browse by role</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Over 1,000 vetted questions organized by function, role, and seniority level.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roleCategories.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${cat.color}`} />
                  <h3 className="text-lg font-bold text-ink">{cat.category}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {cat.roles.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-2 text-sm text-ink-light"
                    >
                      <svg
                        className="h-3.5 w-3.5 shrink-0 text-ink-muted"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Question Anatomy */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Anatomy of a question</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Every question in the library is more than a prompt. It is a complete assessment instrument.
          </p>
          <div className="mt-10 space-y-4">
            {questionAnatomy.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl border-l-4 ${item.accent} bg-white p-6 shadow-sm`}
              >
                <h3 className="text-lg font-bold text-ink">{item.label}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Questions */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Build your own questions</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            The library is the starting point. When you need something specific to your
            organization, the guided builder helps you create questions that meet the same
            quality standard.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {customFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-bold text-brand-yellow">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Explore the question library"
        description="See how structured questions lead to better signal and faster, fairer hiring decisions."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
