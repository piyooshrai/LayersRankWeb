import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Recruitment Agency Software | LayersRank',
  description:
    'Submit scored, ranked candidates that clients actually interview. LayersRank helps staffing firms and recruitment agencies screen candidates with structured assessments instead of resume reviews.',
  path: '/solutions/agencies',
});

export default function AgenciesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Recruitment Agencies"
        title="Submit Candidates Your Clients Will Actually Interview"
        description="Stop sending resumes and hoping for the best. With LayersRank, every candidate you submit comes with a structured score, ranked against the role requirements — so your clients see evidence, not just CVs."
        primaryCta="Partner with LayersRank"
        primaryCtaHref="/demo"
      />

      {/* Agency Benefits — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why Agencies Choose LayersRank</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Recruitment agencies compete on submission quality. LayersRank gives you the evidence
            layer that turns candidate profiles into data-backed recommendations.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">82</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Quantified Submissions</h3>
              <p className="mt-2 text-sm text-ink-light">
                Replace &ldquo;strong candidate&rdquo; with &ldquo;82 out of 100.&rdquo; Every
                submission includes a structured score across role-relevant dimensions, giving
                clients a clear reason to schedule an interview instead of parking your profile in
                a review queue.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Faster Client Decisions</h3>
              <p className="mt-2 text-sm text-ink-light">
                Clients spend less time reviewing when candidates arrive pre-scored and ranked.
                Hiring managers can compare submissions directly instead of reading through stacks
                of resumes, which means faster feedback loops and shorter time-to-fill.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Reduced Placement Churn</h3>
              <p className="mt-2 text-sm text-ink-light">
                Structured assessments improve role-fit accuracy, which means fewer early exits and
                replacement guarantees triggered. Better placements protect your margins and build
                long-term client trust.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">White-Label Option</h3>
              <p className="mt-2 text-sm text-ink-light">
                Present LayersRank assessments under your own brand. Candidates see your agency
                identity throughout the screening process, and clients receive reports with your
                branding — reinforcing your expertise at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How It Works for Agencies</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Configure Role Assessment',
                description:
                  'Set up a structured assessment for each client role. Choose from pre-built templates or customize dimensions to match the job description.',
              },
              {
                step: '02',
                title: 'Send to Candidates',
                description:
                  'Invite candidates to complete the assessment. They respond via video, text, or MCQ depending on the dimension being evaluated.',
              },
              {
                step: '03',
                title: 'Submit Ranked Shortlist',
                description:
                  'Share a scored, ranked shortlist with your client. Each candidate includes a summary score, dimension breakdowns, and confidence indicators.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="font-mono text-sm font-bold text-brand-yellow">{item.step}</p>
                <h3 className="mt-3 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Metrics — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">The Numbers That Matter</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Agencies using structured candidate scoring report measurable improvements in
            submission-to-interview conversion and placement quality.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { metric: '3x', label: 'Higher submission-to-interview rate' },
              { metric: '40%', label: 'Faster client decision turnaround' },
              { metric: '60%', label: 'Reduction in early placement churn' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-brand-yellow">{stat.metric}</p>
                <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Partner with LayersRank"
        description="Differentiate your agency with data-backed candidate submissions. Let us show you how."
        cta="Become a Partner"
        ctaHref="/demo"
      />
    </>
  );
}
