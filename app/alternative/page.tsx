import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = makeMetadata({
  title: 'LayersRank Alternatives Hub | Compare Hiring Assessment Tools',
  description:
    'Compare LayersRank against HireVue, HackerRank, Codility, Mettl, and TestGorilla. See feature-by-feature breakdowns, pricing, and which tool fits your hiring workflow.',
  path: '/alternative',
});

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Alternatives', url: '/alternative' },
];

const alternatives = [
  {
    slug: 'hirevue',
    name: 'HireVue',
    tagline: 'Enterprise video interviewing at enterprise pricing',
    differentiator: 'LayersRank delivers structured AI interviews at per-assessment pricing — no $35K annual contracts.',
  },
  {
    slug: 'hackerrank',
    name: 'HackerRank',
    tagline: 'Coding assessments without behavioral evaluation',
    differentiator: 'LayersRank combines technical and behavioral scoring in one structured interview — no separate tool stack.',
  },
  {
    slug: 'codility',
    name: 'Codility',
    tagline: 'Code screening without confidence scoring',
    differentiator: 'LayersRank adds explainable confidence intervals to technical assessment, not just pass/fail outputs.',
  },
  {
    slug: 'mettl',
    name: 'Mettl',
    tagline: 'Broad assessment platform, limited AI explanation',
    differentiator: 'LayersRank is built on fuzzy-logic scoring with full evidence trails — every decision is auditable.',
  },
  {
    slug: 'testgorilla',
    name: 'TestGorilla',
    tagline: 'Pre-employment tests without structured interviews',
    differentiator: 'LayersRank uses structured behavioral interviews with adaptive follow-up, not static multiple-choice tests.',
  },
];

export default function AlternativeHubPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />

      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <Breadcrumbs items={breadcrumbItems} withSchema={false} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Alternatives
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            How LayersRank Compares
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            Structured AI interviews with confidence scoring and explainable output.
            See how LayersRank stacks up against the tools your team is already considering.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange"
            >
              Try Free &mdash; 5 Assessments
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Alternatives grid */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-ink md:text-2xl">
            Detailed Comparisons
          </h2>
          <p className="mt-2 text-sm text-ink-light">
            Each page covers features, pricing, ideal use cases, and a direct verdict.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((alt) => (
              <Link
                key={alt.slug}
                href={`/alternative/${alt.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                  LayersRank vs.
                </p>
                <h3 className="mt-1 text-lg font-bold text-ink group-hover:text-brand-yellow">
                  {alt.name}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{alt.tagline}</p>
                <p className="mt-3 text-sm text-ink-light">{alt.differentiator}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                  Compare
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why LayersRank */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-ink md:text-2xl">
            What sets LayersRank apart
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Confidence-weighted scoring',
                body: 'Every competency score includes a Bayesian confidence interval. You know not just the score but how certain the model is.',
              },
              {
                title: 'Explainable output',
                body: 'Each score links to the specific responses that drove it. No black-box verdicts.',
              },
              {
                title: 'Pedigree-neutral evaluation',
                body: 'Models cannot see names, photos, colleges, or company names. Responses are evaluated on their own merit.',
              },
              {
                title: 'Pay-per-assessment pricing',
                body: 'No annual contracts, no seat licenses, no minimum commitments. 5 free assessments to start.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-paper-off p-5">
                <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            See it in practice
          </h2>
          <p className="mt-3 text-gray-300">
            5 free assessments. No credit card. No annual commitment.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
