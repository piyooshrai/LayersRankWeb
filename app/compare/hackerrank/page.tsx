import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, ComparisonTable } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'LayersRank vs HackerRank | Beyond Coding Tests',
  description:
    'HackerRank tests if someone can code. LayersRank evaluates if they can think, communicate, and solve real problems. See the full comparison.',
  path: '/compare/hackerrank',
});

const comparisonRows = [
  { feature: 'Coding challenges', them: '✓', us: 'Optional' },
  { feature: 'Video interviews', them: '✗', us: '✓' },
  { feature: 'Behavioral assessment', them: '✗', us: '✓' },
  { feature: 'Communication evaluation', them: '✗', us: '✓' },
  { feature: 'Confidence scoring', them: '✗', us: '✓' },
  { feature: 'Non-technical roles', them: '✗', us: '✓' },
  { feature: 'Adaptive follow-up', them: '✗', us: '✓' },
];

export default function CompareHackerRankPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="LayersRank vs HackerRank"
        description="HackerRank tests if someone can code. LayersRank evaluates if they can think, communicate, and solve real problems."
      />

      {/* Comparison Table */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Feature-by-feature comparison</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            HackerRank focuses on coding proficiency. LayersRank evaluates the complete candidate.
          </p>
          <div className="mt-10">
            <ComparisonTable
              headers={['Feature', 'HackerRank', 'LayersRank']}
              rows={comparisonRows}
            />
          </div>
        </div>
      </section>

      {/* Limitation of Code-Only */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The limitation of code-only assessment</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Coding tests are useful but incomplete. Here is what they miss.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
                <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Syntax over systems thinking</h3>
              <p className="mt-2 text-sm text-ink-light">
                Coding tests measure whether someone can write correct syntax under time pressure. They
                do not measure whether someone can design a system, weigh trade-offs, or architect for
                scale.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Great coders, poor communicators</h3>
              <p className="mt-2 text-sm text-ink-light">
                A candidate who aces a LeetCode-style challenge may struggle to explain their reasoning,
                collaborate with non-technical stakeholders, or document decisions clearly.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">No signal on collaboration</h3>
              <p className="mt-2 text-sm text-ink-light">
                Coding tests are solo exercises. They provide zero signal on how a candidate handles
                disagreements, gives feedback, or works across teams -- the skills that determine
                real-world success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use What */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">When to use what</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            Both tools have a place. The question is whether you need just one signal or the full picture.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">HackerRank</p>
              <h3 className="mt-3 text-lg font-bold text-white">Pure coding skill filtering</h3>
              <p className="mt-2 text-sm text-gray-300">
                Use HackerRank when you need to verify basic coding ability at scale -- for example,
                screening hundreds of applicants for a junior engineering role where syntax fluency
                is the primary requirement.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">LayersRank</p>
              <h3 className="mt-3 text-lg font-bold text-white">Full candidate evaluation</h3>
              <p className="mt-2 text-sm text-gray-300">
                Use LayersRank when you need to evaluate the whole person -- technical depth, system
                thinking, communication, behavioral signals, and team fit. Especially critical for
                senior roles, leadership positions, and cross-functional teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Go beyond coding tests"
        description="See how LayersRank evaluates candidates across every dimension that matters. 20-minute demo."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
