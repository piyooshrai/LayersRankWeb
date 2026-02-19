import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getHireRole, getAllHireRoleSlugs } from '@/lib/hire-roles';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, ComparisonTable } from '@/components/page-sections';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { generateFAQSchema } from '@/lib/structured-data';

export function generateStaticParams() {
  return getAllHireRoleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const role = getHireRole(params.slug);
  if (!role) return {};
  return makeMetadata({
    title: role.meta.title,
    description: role.meta.description,
    path: `/hire/${role.slug}`,
  });
}

export default function HireRolePage({ params }: { params: { slug: string } }) {
  const role = getHireRole(params.slug);
  if (!role) notFound();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Hire', url: '/hire' },
    { name: role.hero.eyebrow.replace('HIRE ', '').replace(/S$/, ''), url: `/hire/${role.slug}` },
  ];

  return (
    <>
      <StructuredData
        data={generateFAQSchema(role.faq.map((f) => ({ question: f.q, answer: f.a })))}
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
        eyebrow={role.hero.eyebrow}
        title={role.hero.headline}
        description={role.hero.subhead}
        primaryCta={role.hero.primaryCta}
        primaryCtaHref="/demo"
        secondaryCta={role.hero.secondaryCta}
        secondaryCtaHref="/resources/question-bank"
      />

      {/* Hiring Challenge */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Hiring Challenge</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            {role.challenge.intro.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-ink">Common Hiring Mistakes</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {role.challenge.mistakes.map((m) => (
                <div
                  key={m.title}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <p className="font-semibold text-ink">{m.title}</p>
                  <p className="mt-1 text-sm text-ink-light">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Evaluate */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
            Evaluation Framework
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink">What LayersRank Evaluates</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {role.dimensions.map((dim) => (
              <div
                key={dim.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink">{dim.name}</h3>
                  <span className="rounded-full bg-brand-yellow/10 px-3 py-1 text-sm font-bold text-brand-yellow">
                    {dim.weight}
                  </span>
                </div>
                <div className="mt-4 space-y-4">
                  {dim.areas.map((area) => (
                    <div key={area.name}>
                      <p className="font-medium text-ink">{area.name}</p>
                      <ul className="mt-1 space-y-1">
                        {area.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-ink-light"
                          >
                            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Questions */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Sample Questions
          </p>
          <h2 className="mt-2 text-2xl font-bold">
            Sample Assessment Questions
          </h2>

          <div className="mt-10 space-y-6">
            {role.questions.map((q, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-700 bg-white/5 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-xs font-bold text-brand-yellow">
                    {i + 1}
                  </span>
                  <div>
                    <span className="mb-2 inline-block rounded-full border border-gray-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {q.type}
                    </span>
                    <p className="text-[15px] font-medium text-white">
                      {q.question}
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                      <span className="font-medium text-brand-yellow">
                        What this reveals:
                      </span>{' '}
                      {q.reveals}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/resources/question-bank"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Get All 50 Questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Evaluation Criteria</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            What separates strong candidates from weak ones across each competency.
          </p>

          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper-off">
                  <th className="px-6 py-4 text-left font-semibold text-ink">
                    Competency
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-green">
                    What Great Looks Like
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-red">
                    Red Flags
                  </th>
                </tr>
              </thead>
              <tbody>
                {role.criteria.map((c) => (
                  <tr key={c.competency} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">
                      {c.competency}
                    </td>
                    <td className="px-6 py-4 text-ink-light">{c.great}</td>
                    <td className="px-6 py-4 text-ink-muted">{c.redFlags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 space-y-4 md:hidden">
            {role.criteria.map((c) => (
              <div
                key={c.competency}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <p className="font-semibold text-ink">{c.competency}</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-brand-green">Great:</span>{' '}
                    <span className="text-ink-light">{c.great}</span>
                  </div>
                  <div>
                    <span className="font-medium text-brand-red">
                      Red flags:
                    </span>{' '}
                    <span className="text-ink-muted">{c.redFlags}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How It Works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {role.howItWorks.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-lg font-bold text-brand-yellow">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-ink">{step.step}</p>
                  <p className="mt-1 text-sm text-ink-light">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-ink-muted">
            Time to first assessment: under 10 minutes
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Pricing</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper-off">
                  <th className="px-6 py-4 text-left font-semibold text-ink">
                    Plan
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">
                    Per Assessment
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-ink-muted">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {role.pricing.map((p) => (
                  <tr key={p.plan} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">{p.plan}</td>
                    <td className="px-6 py-4 font-bold text-brand-yellow">
                      {p.price}
                    </td>
                    <td className="px-6 py-4 text-ink-muted">{p.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            Start Free Trial &mdash; 5 assessments included
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl divide-y divide-gray-200">
            {role.faq.map((faq) => (
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

      {/* Related Roles & Resources */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Related Roles
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {role.relatedRoles.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
                  >
                    {r.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Related Resources
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {role.relatedResources.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
                  >
                    {r.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PageCTA
        title={`Ready to Hire Better?`}
        description="5 assessments free. No credit card. See the difference structured evaluation makes."
        cta="Start Free Trial"
        ctaHref="/demo"
        secondaryCta="Talk to Sales"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
