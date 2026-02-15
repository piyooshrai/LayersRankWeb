import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Pricing | LayersRank',
  description:
    'Growth and Enterprise tiers for confidence-weighted hiring and auditable candidate ranking.',
  path: '/pricing',
});

const capabilities = [
  { name: 'Structured Interviews', growth: true, enterprise: true },
  { name: 'Confidence Scoring', growth: true, enterprise: true },
  { name: 'Adaptive Follow-Up', growth: 'Limited', enterprise: true },
  { name: 'Candidate Reports', growth: 'Standard', enterprise: 'Audit-ready dossiers' },
  { name: 'Question Bank', growth: '500+ questions', enterprise: '1,000+ questions' },
  { name: 'Panel Calibration', growth: false, enterprise: true },
  { name: 'Multi-City Consistency', growth: false, enterprise: true },
  { name: 'ATS Integration', growth: true, enterprise: true },
  { name: 'HRIS Integration', growth: false, enterprise: true },
  { name: 'API Access', growth: false, enterprise: true },
  { name: 'Dedicated Support', growth: 'Email', enterprise: 'Dedicated CSM' },
  { name: 'Hiring Volume', growth: 'Up to 500/quarter', enterprise: 'Unlimited' },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  );
}

function renderCell(value: boolean | string) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <XIcon />;
  return <span className="text-sm text-ink-light">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Pricing</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Simple pricing. Serious outcomes.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Choose the plan that fits your hiring volume and needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Growth */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">Growth</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink">For startups</h2>
              <p className="mt-2 text-ink-light">
                Structured scoring and confidence-based ranking for emerging hiring teams.
              </p>
              <p className="mt-6 font-mono text-sm text-ink-muted">Custom pricing based on volume</p>
              <Link
                href="/demo"
                className="mt-6 block rounded-lg border-2 border-brand-yellow py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-brand-yellow/10"
              >
                Contact Sales
              </Link>
              <ul className="mt-8 space-y-3">
                {['Structured interviews', 'Confidence scoring', 'Standard reports', 'ATS integration', 'Email support'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-light">
                      <CheckIcon />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Enterprise */}
            <div className="relative rounded-2xl border-2 border-brand-yellow bg-white p-8">
              <div className="absolute -top-3 left-6 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-ink">
                Most Popular
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">Enterprise</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink">For GCC & MNC</h2>
              <p className="mt-2 text-ink-light">
                Full platform with advanced calibration, multi-city consistency, and HQ-grade reporting.
              </p>
              <p className="mt-6 font-mono text-sm text-ink-muted">Custom pricing based on volume</p>
              <Link
                href="/demo"
                className="mt-6 block rounded-lg bg-brand-yellow py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-brand-orange"
              >
                Book a Demo
              </Link>
              <ul className="mt-8 space-y-3">
                {[
                  'Everything in Growth',
                  'Adaptive follow-up',
                  'Panel calibration',
                  'Multi-city consistency',
                  'Audit-ready dossiers',
                  'API access',
                  'Dedicated CSM',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-light">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-ink">Detailed comparison</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="px-6 py-4 text-left font-semibold text-ink">Capability</th>
                  <th className="px-6 py-4 text-center font-semibold text-ink">Growth</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand-yellow">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((cap) => (
                  <tr key={cap.name} className="border-t border-gray-100">
                    <td className="px-6 py-3 font-medium text-ink">{cap.name}</td>
                    <td className="px-6 py-3 text-center">{renderCell(cap.growth)}</td>
                    <td className="px-6 py-3 text-center">{renderCell(cap.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold text-ink">Not sure which plan is right?</h2>
          <p className="mt-2 text-ink-light">Talk to our team. We&apos;ll help you find the right fit.</p>
          <Link
            href="/demo"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink px-8 py-4 font-semibold text-white hover:bg-ink-light"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
