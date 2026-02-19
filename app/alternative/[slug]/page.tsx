import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAlternative, getAllAlternativeSlugs } from '@/lib/alternatives';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, ComparisonTable } from '@/components/page-sections';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { generateFAQSchema } from '@/lib/structured-data';

export function generateStaticParams() {
  return getAllAlternativeSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const alt = getAlternative(params.slug);
  if (!alt) return {};
  return makeMetadata({
    title: alt.meta.title,
    description: alt.meta.description,
    path: `/alternative/${alt.slug}`,
  });
}

export default function AlternativePage({ params }: { params: { slug: string } }) {
  const alt = getAlternative(params.slug);
  if (!alt) notFound();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Alternative', url: '/alternative' },
    { name: `${alt.competitor} Alternative`, url: `/alternative/${alt.slug}` },
  ];

  return (
    <>
      <StructuredData
        data={generateFAQSchema(alt.faq.map((f) => ({ question: f.q, answer: f.a })))}
      />

      {/* Breadcrumbs */}
      <div className="bg-ink px-6 pt-4">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={breadcrumbs}
            className="text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-white [&_span[aria-current]]:text-white [&_svg]:text-gray-600"
          />
        </div>
      </div>

      {/* Hero */}
      <PageHero
        eyebrow={alt.hero.eyebrow}
        title={alt.hero.headline}
        description={alt.hero.subhead}
        primaryCta={alt.hero.primaryCta}
        primaryCtaHref="/demo"
        secondaryCta={alt.hero.secondaryCta}
        secondaryCtaHref="#comparison"
      />

      {/* Why Switch */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">
            Why Teams Switch from {alt.competitor}
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-light">
            {alt.whySwitch.intro}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {alt.whySwitch.reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <p className="font-semibold text-ink">{r.title}</p>
                <p className="mt-1 text-sm text-ink-light">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison */}
      <section id="comparison" className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Head-to-Head Comparison</h2>
          <div className="mt-10">
            <ComparisonTable
              headers={['Capability', alt.competitor, 'LayersRank']}
              rows={alt.comparison}
            />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            What You Get
          </p>
          <h2 className="mt-2 text-2xl font-bold">
            What You Get with LayersRank
          </h2>

          <div className="mt-10 space-y-6">
            {alt.whatYouGet.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-700 bg-white/5 p-6"
              >
                <h3 className="text-lg font-bold text-brand-yellow">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Pricing Comparison</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Competitor */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">
                {alt.pricingComparison.them.label}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                {alt.pricingComparison.them.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* Us */}
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">
                {alt.pricingComparison.us.label}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                {alt.pricingComparison.us.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {alt.pricingComparison.example && (
            <div className="mt-8 rounded-xl border border-brand-green/30 bg-brand-green/5 p-6">
              <p className="text-sm font-semibold text-ink">
                Example: {alt.pricingComparison.example.description}
              </p>
              <div className="mt-3 space-y-2">
                {alt.pricingComparison.example.rows.map((r) => (
                  <div
                    key={r.platform}
                    className="flex items-center justify-between text-sm"
                  >
                    <span
                      className={
                        r.platform === 'Savings'
                          ? 'font-bold text-brand-green'
                          : 'text-ink-light'
                      }
                    >
                      {r.platform}
                    </span>
                    <span
                      className={
                        r.platform === 'Savings'
                          ? 'text-lg font-extrabold text-brand-green'
                          : 'font-medium text-ink'
                      }
                    >
                      {r.cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Migration */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Switching Is Easy</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {alt.migration.map((m, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-lg font-bold text-brand-yellow">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-ink">{m.week}</p>
                  <p className="mt-1 text-sm text-ink-light">{m.action}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            We don&rsquo;t lock you in. If LayersRank doesn&rsquo;t work for
            you, leave anytime.
          </p>
        </div>
      </section>

      {/* Who Switches */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Who Switches</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {alt.whoSwitches.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <p className="font-semibold text-ink">{w.title}</p>
                <p className="mt-1 text-sm text-ink-light">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 max-w-3xl divide-y divide-gray-200">
            {alt.faq.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-ink">
                  {faq.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Related Pages
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {alt.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PageCTA
        title={`Ready to Switch from ${alt.competitor}?`}
        description="5 assessments free. No credit card. See how LayersRank compares with your actual candidates."
        cta="Start Free Trial"
        ctaHref="/demo"
        secondaryCta="Talk to Sales"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
