import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'Case Studies | LayersRank',
  description:
    'See how hiring teams use LayersRank to improve quality and speed. Real results from Fortune 500 GCCs, fast-growing startups, and global enterprises.',
  path: '/resources/case-studies',
});

const caseStudies = [
  {
    tag: 'GCC',
    tagColor: 'bg-brand-yellow/10 text-brand-yellow',
    title: 'How a Fortune 500 GCC Reduced Time-to-Shortlist by 40%',
    summary:
      'A Fortune 500 Global Capability Center hiring 500+ engineers per quarter across Bangalore, Hyderabad, and Pune struggled with cross-city consistency. Different interviewers, different standards, different outcomes. LayersRank standardized their evaluation process without slowing throughput.',
    stats: [
      { value: '40%', label: 'Faster shortlisting' },
      { value: '500+', label: 'Hires per quarter' },
      { value: '3', label: 'Cities standardized' },
    ],
  },
  {
    tag: 'Startup',
    tagColor: 'bg-brand-green/10 text-brand-green',
    title: 'How a Series B Startup Scaled from 20 to 100 Engineers',
    summary:
      'A Series B startup needed to 5x their engineering team in 12 months without sacrificing quality. Their founding engineers were spending 30% of their time on interviews. LayersRank gave them structure without slowing down their velocity.',
    stats: [
      { value: '5x', label: 'Team growth' },
      { value: '70%', label: 'Less engineer time on screens' },
      { value: '12 mo', label: 'Scaling timeline' },
    ],
  },
  {
    tag: 'Enterprise',
    tagColor: 'bg-brand-orange/10 text-brand-orange',
    title: 'How an Enterprise Standardized Global Hiring',
    summary:
      'A multinational enterprise with multiple business units across 8 countries needed consistent candidate evaluation. Each BU had its own process, making internal mobility and cross-team comparison impossible. LayersRank unified their hiring framework.',
    stats: [
      { value: '8', label: 'Countries unified' },
      { value: '60%', label: 'Faster cross-BU comparison' },
      { value: '1', label: 'Unified framework' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Customer Success Stories"
        description="See how hiring teams use LayersRank to improve quality and speed."
      />

      {/* Case Study Cards */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Card Header */}
                <div className="p-6 pb-0">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${study.tagColor}`}
                  >
                    {study.tag}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-ink">
                    {study.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-6">
                  <p className="text-sm text-ink-light">{study.summary}</p>
                </div>

                {/* Stats Row */}
                <div className="border-t border-gray-100 px-6 py-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-xl font-extrabold text-brand-yellow">{stat.value}</p>
                        <p className="mt-0.5 text-xs text-ink-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="border-t border-gray-100 p-6 pt-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow hover:text-brand-orange"
                  >
                    Read Case Study
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Get results like these"
        description="See how LayersRank can transform your hiring process. 20-minute demo, no commitment."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
