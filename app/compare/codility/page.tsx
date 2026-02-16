import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, ComparisonTable } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata = makeMetadata({
  title: 'LayersRank vs Codility | Complete Candidate Evaluation',
  description:
    'Codility measures coding speed. LayersRank measures whether someone can actually do the job. See how the two platforms compare.',
  path: '/compare/codility',
});

const comparisonRows = [
  { feature: 'Timed coding tasks', them: '✓', us: 'Optional' },
  { feature: 'Video interviews', them: '✗', us: '✓' },
  { feature: 'Behavioral assessment', them: '✗', us: '✓' },
  { feature: 'Communication evaluation', them: '✗', us: '✓' },
  { feature: 'Confidence scoring', them: '✗', us: '✓' },
  { feature: 'Non-technical roles', them: '✗', us: '✓' },
  { feature: 'Adaptive follow-up', them: '✗', us: '✓' },
  { feature: 'Plagiarism detection', them: '✓', us: '✓' },
];

export default function CompareCodilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="LayersRank vs Codility"
        description="Codility measures coding speed. LayersRank measures whether someone can actually do the job."
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Complete evaluation vs code-only testing" search="coding assessment platform comparison" />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Feature-by-feature comparison</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Codility excels at timed coding tasks. LayersRank evaluates every dimension that predicts job success.
          </p>
          <div className="mt-10">
            <ComparisonTable
              headers={['Feature', 'Codility', 'LayersRank']}
              rows={comparisonRows}
            />
          </div>
        </div>
      </section>

      {/* Speed vs Depth */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Speed tests miss what matters</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Timed coding challenges optimize for speed. Real engineering work optimizes for correctness,
            communication, and long-term thinking.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
                <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Time pressure distorts signal</h3>
              <p className="mt-2 text-sm text-ink-light">
                Under strict time limits, candidates optimize for passing tests, not writing clean,
                maintainable code. You learn who is fastest, not who is best.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">No design thinking</h3>
              <p className="mt-2 text-sm text-ink-light">
                Codility tests ask candidates to solve isolated problems. They never reveal how
                someone approaches ambiguous requirements, makes architectural choices, or
                communicates trade-offs.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Excludes non-technical roles</h3>
              <p className="mt-2 text-sm text-ink-light">
                Product managers, designers, analysts, and operations leaders cannot be evaluated
                through coding challenges. Codility serves one function; LayersRank serves the
                entire hiring pipeline.
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
            Different stages, different tools. Know when each one adds value.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Codility</p>
              <h3 className="mt-3 text-lg font-bold text-white">Early-stage coding screen</h3>
              <p className="mt-2 text-sm text-gray-300">
                Use Codility when you need a quick, automated gate to verify baseline coding ability
                before investing in deeper evaluation. Works best for high-volume junior roles
                where coding fluency is table stakes.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">LayersRank</p>
              <h3 className="mt-3 text-lg font-bold text-white">Complete candidate evaluation</h3>
              <p className="mt-2 text-sm text-gray-300">
                Use LayersRank when you need to understand the whole candidate -- technical depth,
                problem-solving approach, communication style, and behavioral fit. Essential for
                mid-to-senior hires, cross-functional roles, and any position where collaboration
                matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Evaluate the whole candidate"
        description="Move beyond timed coding tests. See how LayersRank captures the full picture. 20-minute demo."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
