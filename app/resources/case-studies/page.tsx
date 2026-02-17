import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'Case Studies | Customer Success Stories | LayersRank',
  description:
    'See how GCCs, startups, and enterprises use LayersRank to reduce panel variance, speed up hiring, and find better candidates.',
  path: '/resources/case-studies',
});

const caseStudies = [
  {
    tag: 'Enterprise / GCC',
    color: '#3b82f6',
    tagClasses: 'bg-[#3b82f6]/10 text-[#3b82f6]',
    headline: '76% Less Panel Disagreement',
    companyType: 'Fortune 500 Global Capability Center, Bangalore',
    challenge:
      'Inconsistent evaluation across interview panels. Different panels reached different conclusions about the same candidates. HQ questioned every recommendation, creating 11-day approval cycles.',
    solution:
      'Implemented LayersRank for first-round technical and behavioral assessment. Standardized evaluation criteria across all panels. Confidence scoring identified when additional probing was needed.',
    stats: [
      { value: '76%', label: 'Less panel disagreement', detail: '23% \u2192 5.5%' },
      { value: '77%', label: 'Faster HQ approval', detail: '11d \u2192 2.5d' },
      { value: '46%', label: 'Lower offer dropout', detail: '22% \u2192 12%' },
    ],
    quote:
      'For the first time, we can show HQ exactly why we recommend a candidate. The data speaks for itself.',
    quoteAuthor: 'Head of Talent Acquisition',
  },
  {
    tag: 'Startup',
    color: '#2ecc71',
    tagClasses: 'bg-[#2ecc71]/10 text-[#2ecc71]',
    headline: 'First Offer in 5 Days',
    companyType: 'Series B Fintech Startup',
    challenge:
      'Losing top candidates to competitors who moved faster. Engineering leaders spending 15+ hours per week on phone screens. 3-week average time from application to offer.',
    solution:
      'Replaced phone screens with LayersRank async assessment. Founders review 10-minute reports instead of conducting 45-minute calls. AI evaluation runs overnight, reports ready by morning.',
    stats: [
      { value: '5 days', label: 'Time to first offer', detail: 'was 21' },
      { value: '80%', label: 'Less founder screen time', detail: '15h \u2192 3h/wk' },
      { value: '82%', label: 'Offer acceptance', detail: 'was 65%' },
    ],
    quote:
      'We went from losing candidates to being the first offer on their table. That changes everything.',
    quoteAuthor: 'Co-founder & CTO',
  },
  {
    tag: 'Enterprise / IT Services',
    color: '#f39c12',
    tagClasses: 'bg-[#f39c12]/10 text-[#f39c12]',
    headline: '50,000 Candidates, Zero Pedigree Filtering',
    companyType: 'Large IT Services Company',
    challenge:
      'Filtering 50,000+ campus applicants annually using college tier as primary criterion. Missing strong talent from Tier-2 and Tier-3 colleges. Diversity goals unmet despite stated commitments.',
    solution:
      'Deployed LayersRank for campus assessment. All candidates evaluated on demonstrated capability, not college brand. Identity-blind scoring ensured fair comparison across backgrounds.',
    stats: [
      { value: '50K+', label: 'Candidates assessed', detail: 'all of them' },
      { value: '34%', label: 'Tier-2/3 hires', detail: 'was 11%' },
      { value: '\u2191', label: 'First-year performance', detail: 'improved' },
    ],
    quote:
      'We found talent we would have filtered out before we ever looked at them. That\u2019s the real win.',
    quoteAuthor: 'VP, Campus Relations',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Case Studies"
        title="Real Results from Real Teams"
        description="How engineering teams use LayersRank to hire faster, more consistently, and with confidence they can defend to leadership."
      />

      {/* ── CASE STUDY CARDS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-10">
            {caseStudies.map((study) => (
              <div
                key={study.headline}
                className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
              >
                {/* Color bar */}
                <div className="h-1.5" style={{ backgroundColor: study.color }} />

                <div className="p-6 sm:p-8 md:p-10">
                  {/* Tag + company */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${study.tagClasses}`}>
                      {study.tag}
                    </span>
                    <span className="text-sm text-ink-muted">{study.companyType}</span>
                  </div>

                  {/* Headline */}
                  <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">{study.headline}</h2>

                  {/* Challenge + Solution */}
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-ink-muted">Challenge</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-light">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-ink-muted">Solution</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-light">{study.solution}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-paper-off p-5 sm:p-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl font-extrabold text-brand-yellow sm:text-3xl">{stat.value}</p>
                        <p className="mt-1 text-xs font-medium text-ink sm:text-sm">{stat.label}</p>
                        <p className="mt-0.5 text-xs text-ink-muted">({stat.detail})</p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-8 border-l-4 border-brand-yellow pl-5">
                    <p className="text-sm italic leading-relaxed text-ink-light sm:text-base">
                      &ldquo;{study.quote}&rdquo;
                    </p>
                    <cite className="mt-2 block text-sm font-semibold not-italic text-ink">
                      &mdash; {study.quoteAuthor}
                    </cite>
                  </blockquote>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow hover:text-brand-orange"
                    >
                      Read Full Case Study
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <PageCTA
        title="Want to Be Our Next Case Study?"
        description="Start with a pilot. See results in 30 days. We\u2019ll help you document the wins."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Calculate Your ROI"
        secondaryCtaHref="/resources/roi-calculator"
      />

      {/* ── INTERNAL LINKS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { href: '/solutions/gcc', label: 'GCC Solutions', desc: 'For global capability centers' },
              { href: '/solutions/startups', label: 'Startup Solutions', desc: 'For high-growth teams' },
              { href: '/resources/sample-report', label: 'Sample Report', desc: 'See a real evaluation' },
              { href: '/pricing', label: 'Pricing', desc: 'Transparent plans' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-ink">{link.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
