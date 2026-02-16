import Link from 'next/link';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Campus Recruitment Software India | LayersRank',
  description:
    'Screen thousands of graduates and shortlist the best with structured assessments. LayersRank helps companies run fair, scalable campus hiring across Indian colleges and universities.',
  path: '/solutions/campus-hiring',
});

export default function CampusHiringPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Campus Hiring"
        title="Screen 10,000 Graduates. Shortlist the Top 100."
        description="Campus hiring in India means finding signal in volume. LayersRank replaces gut-feel filtering with structured assessments that rank every candidate on aptitude, communication, and role-fit — regardless of which college they attended."
        primaryCta="Scale Your Campus Hiring"
        primaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Indian college students at campus drive" search="indian college students interview" />
        </div>
      </section>

      {/* Campus Challenges — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Campus Hiring Challenges</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Every campus season, companies face the same problems: too many applicants, too little
            signal, and too much reliance on shortcuts.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
                <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Volume Overwhelm</h3>
              <p className="mt-2 text-sm text-ink-light">
                Thousands of applications arrive in a compressed timeline. Recruiters cannot
                meaningfully evaluate each candidate, so shortcuts become the default screening
                mechanism — at the cost of quality.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">No Work History to Evaluate</h3>
              <p className="mt-2 text-sm text-ink-light">
                Fresh graduates have little or no professional experience. Traditional resume
                screening fails because there is nothing meaningful to screen. You need a way to
                assess potential, not just past performance.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Pedigree Bias</h3>
              <p className="mt-2 text-sm text-ink-light">
                Too many hiring processes use college brand as a proxy for candidate quality. This
                excludes talented graduates from tier-2 and tier-3 colleges and narrows talent pools
                unnecessarily.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Inconsistent Campus-to-Campus Evaluation</h3>
              <p className="mt-2 text-sm text-ink-light">
                Different teams visit different campuses with different expectations and different
                scoring standards. A candidate rated highly at one college drive may not have been
                evaluated the same way at another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How LayersRank Helps — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How LayersRank Helps</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            A structured, scalable approach to campus screening that finds the best candidates
            regardless of where they studied.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Standardized Assessments</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every candidate — whether from an IIT, an NIT, or a local engineering college —
                takes the same structured assessment. Consistent evaluation criteria mean fair
                comparison across the entire applicant pool.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Aptitude + Communication + Role-Fit</h3>
              <p className="mt-2 text-sm text-ink-light">
                Go beyond coding tests. LayersRank assesses aptitude, communication clarity, and
                role-specific fit using a mix of video, text, and MCQ formats — giving you a
                complete picture of each graduate.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Ranked Shortlists, Not Alphabetical Lists</h3>
              <p className="mt-2 text-sm text-ink-light">
                Instead of sifting through spreadsheets sorted by name or college, your recruitment
                team receives a ranked shortlist ordered by composite score. The top 100 out of
                10,000 are immediately visible.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Fair Evaluation Regardless of College Brand</h3>
              <p className="mt-2 text-sm text-ink-light">
                LayersRank evaluates what candidates can do, not where they studied. This
                pedigree-neutral approach expands your reachable talent pool and supports more
                inclusive, defensible hiring practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Metrics — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Built for Campus Scale</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            LayersRank handles the volume that campus hiring demands, without compromising on
            assessment quality.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { metric: '10,000+', label: 'Candidates per campus drive' },
              { metric: '48hrs', label: 'Average time from assessment to ranked shortlist' },
              { metric: '100%', label: 'Consistent scoring across every campus' },
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
        title="Scale Your Campus Hiring"
        description="See how LayersRank helps you screen thousands and shortlist the best. 20-minute demo."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
