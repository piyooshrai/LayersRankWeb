import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { CostCalculator } from './cost-calculator';
import { LeadMagnetCTA } from '@/components/lead-magnet-cta';

export const metadata = makeMetadata({
  title: 'Pricing | LayersRank - AI-Powered Candidate Evaluation',
  description:
    'Simple per-interview pricing. No annual contracts. No seat licenses. Pay for what you use. Plans starting at ₹1,500 per assessment.',
  path: '/pricing',
});

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'LayersRank Pricing',
  description:
    'Simple per-interview pricing. No annual contracts. No seat licenses. Pay for what you use.',
  keywords:
    'LayersRank pricing, interview assessment cost, hiring tool pricing, per interview pricing, candidate evaluation cost',
  provider: {
    '@type': 'Organization',
    name: 'LayersRank',
    url: 'https://www.layersrank.com',
  },
};

/* ── Icon helpers ──────────────────────────────────────────── */

function CheckIcon({ className = 'h-5 w-5 text-brand-green' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

/* ── Plan comparison data ──────────────────────────────────── */

interface ComparisonCategory {
  category: string;
  rows: { feature: string; starter: boolean | string; growth: boolean | string; enterprise: boolean | string }[];
}

const comparisonData: ComparisonCategory[] = [
  {
    category: 'Pricing',
    rows: [
      { feature: 'Price per assessment', starter: '₹2,500', growth: '₹2,000', enterprise: 'Custom' },
      { feature: 'Minimum commitment', starter: 'None', growth: 'None', enterprise: 'Annual' },
    ],
  },
  {
    category: 'Assessment Features',
    rows: [
      { feature: 'Video responses', starter: true, growth: true, enterprise: true },
      { feature: 'Text responses', starter: true, growth: true, enterprise: true },
      { feature: 'MCQ questions', starter: true, growth: true, enterprise: true },
      { feature: 'AI evaluation', starter: true, growth: true, enterprise: true },
      { feature: 'Confidence scoring', starter: true, growth: true, enterprise: true },
      { feature: 'Adaptive follow-up', starter: false, growth: true, enterprise: true },
      { feature: 'Integrity detection', starter: 'Basic', growth: 'Full', enterprise: 'Full' },
    ],
  },
  {
    category: 'Configuration',
    rows: [
      { feature: 'Role templates', starter: '3', growth: 'Unlimited', enterprise: 'Unlimited' },
      { feature: 'Custom questions', starter: false, growth: true, enterprise: true },
      { feature: 'Custom rubrics', starter: false, growth: true, enterprise: true },
      { feature: 'Question development', starter: false, growth: false, enterprise: true },
    ],
  },
  {
    category: 'Integrations',
    rows: [
      { feature: 'Email invitations', starter: true, growth: true, enterprise: true },
      { feature: 'ATS integration', starter: false, growth: 'Standard', enterprise: 'Custom' },
      { feature: 'API access', starter: false, growth: false, enterprise: true },
      { feature: 'SSO/SAML', starter: false, growth: false, enterprise: true },
    ],
  },
  {
    category: 'Team & Access',
    rows: [
      { feature: 'Users', starter: '3', growth: '10', enterprise: 'Unlimited' },
      { feature: 'Team collaboration', starter: 'Basic', growth: 'Full', enterprise: 'Full' },
      { feature: 'Role-based permissions', starter: false, growth: true, enterprise: true },
      { feature: 'Audit logs', starter: false, growth: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    rows: [
      { feature: 'Email support', starter: true, growth: true, enterprise: true },
      { feature: 'Chat support', starter: false, growth: true, enterprise: true },
      { feature: 'Phone support', starter: false, growth: false, enterprise: true },
      { feature: 'Dedicated CSM', starter: false, growth: false, enterprise: true },
      { feature: 'SLA', starter: false, growth: false, enterprise: 'Custom' },
    ],
  },
  {
    category: 'Data & Compliance',
    rows: [
      { feature: 'Data retention', starter: '12 mo', growth: '24 mo', enterprise: 'Custom' },
      { feature: 'India data residency', starter: true, growth: true, enterprise: true },
      { feature: 'Compliance reports', starter: false, growth: false, enterprise: true },
      { feature: 'Custom DPA', starter: false, growth: false, enterprise: true },
    ],
  },
];

/* ── Volume discount data ──────────────────────────────────── */

const volumeDiscounts = [
  { range: '1\u201349 assessments', starter: '₹2,500', growth: '₹2,000', enterprise: '\u2014' },
  { range: '50\u201399 assessments', starter: '₹2,250', growth: '₹1,900', enterprise: '\u2014' },
  { range: '100\u2013249 assessments', starter: '₹2,000', growth: '₹1,800', enterprise: 'Custom' },
  { range: '250\u2013499 assessments', starter: '₹1,800', growth: '₹1,600', enterprise: 'Custom' },
  { range: '500+ assessments', starter: 'Contact us', growth: 'Contact us', enterprise: 'Custom' },
];

/* ── FAQ data ──────────────────────────────────────────────── */

const faqs = [
  {
    q: 'What counts as one assessment?',
    a: 'One candidate completing one assessment. If you invite a candidate and they complete the questions, that\u2019s one assessment. Incomplete assessments (candidate didn\u2019t start or didn\u2019t finish) are not charged.',
  },
  {
    q: 'What if a candidate needs to retake an assessment?',
    a: 'Retakes count as new assessments. However, we offer free retakes for technical issues on our end (system errors, etc.).',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'No minimums on Starter or Growth. Enterprise typically requires an annual commitment, but we\u2019re flexible based on your situation.',
  },
  {
    q: 'Can I switch plans?',
    a: 'Yes, anytime. Upgrade takes effect immediately. Downgrade takes effect at the start of your next billing period.',
  },
  {
    q: 'Do you offer discounts for startups?',
    a: 'Yes. Early-stage startups (Seed to Series A) get 25% off Growth pricing for the first year. Contact us with your funding details.',
  },
  {
    q: 'Do you offer discounts for nonprofits?',
    a: 'Yes. Registered nonprofits get 40% off any plan. Contact us with documentation.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Credit/debit cards, bank transfer (NEFT/RTGS), and invoicing for Enterprise customers. All prices are in INR. GST extra where applicable.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. 5 free assessments on any plan, no credit card required. You can evaluate the full product before committing.',
  },
  {
    q: 'What\u2019s your refund policy?',
    a: 'Unused assessments can be refunded within 30 days of purchase. After 30 days, unused assessments remain available but are non-refundable.',
  },
  {
    q: 'Can I buy assessment packs?',
    a: 'Yes. Pre-purchase packs of 50, 100, or 250 assessments at volume discount rates. Packs are valid for 12 months.',
  },
  {
    q: 'How does billing work?',
    a: 'Starter and Growth: Pay-as-you-go (charged per assessment) or prepaid packs. Enterprise: Monthly or quarterly invoicing based on usage.',
  },
  {
    q: 'Do you charge for users/seats?',
    a: 'No. Users are unlimited on Enterprise and capped at 10 on Growth, but there\u2019s no per-seat fee. Your cost is purely based on assessments.',
  },
];

/* ── Page component ────────────────────────────────────────── */

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Pricing</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Simple Pricing. No&nbsp;Surprises.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 md:text-lg">
            Pay per assessment. No annual contracts. No seat licenses. No hidden fees.
            Start with 5&nbsp;free assessments to see if LayersRank works for you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/demo"
              className="rounded-lg bg-brand-yellow px-8 py-3 font-semibold text-ink hover:bg-brand-orange"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border border-gray-500 px-8 py-3 font-medium text-white hover:border-white hover:bg-white/5"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pricing Philosophy ───────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Why per-assessment pricing?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-light md:text-lg">
            <p>
              Most hiring tools charge $35,000&ndash;50,000/year whether you use them or not.
              That works for Fortune&nbsp;500 companies with predictable hiring volumes and unlimited budgets.
            </p>
            <p className="font-semibold text-ink">It doesn&rsquo;t work for everyone else.</p>
            <p>
              LayersRank charges per assessment. Hire 10 people this quarter? Pay for 10
              assessments worth of evaluations. Hiring freeze next quarter? Pay nothing.
            </p>
            <p>
              Your costs scale with your actual hiring, not with a contract someone signed 18&nbsp;months ago.
            </p>
          </div>
        </div>
      </section>

      {/* ── Plan Cards ───────────────────────────────────── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Starter */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">Starter</p>
              <h3 className="mt-2 text-xl font-bold text-ink">For small teams testing structured hiring</h3>
              <p className="mt-4">
                <span className="font-mono text-3xl font-extrabold text-ink">&nbsp;2,500</span>
                <span className="ml-1 text-sm text-ink-muted">/ assessment</span>
              </p>

              <Link
                href="/demo"
                className="mt-6 block rounded-lg border-2 border-brand-yellow py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-brand-yellow/10"
              >
                Start Free Trial
              </Link>
              <p className="mt-2 text-center text-xs text-ink-muted">5 assessments free, no credit card</p>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">What&rsquo;s included</p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Full candidate assessment (video, text, MCQ)',
                    'AI evaluation with confidence scoring',
                    'Detailed candidate report',
                    '3 role templates',
                    'Email support',
                    'Data retention: 12 months',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-light">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-paper-off p-4">
                <p className="text-xs font-semibold text-ink-muted">Best for:</p>
                <ul className="mt-2 space-y-1 text-xs text-ink-light">
                  <li>&bull; Startups hiring &lt;50/year</li>
                  <li>&bull; Teams piloting structured interviews</li>
                  <li>&bull; Founders doing their own recruiting</li>
                </ul>
              </div>
            </div>

            {/* Growth — Featured */}
            <div className="relative rounded-2xl border-2 border-brand-yellow bg-white p-8">
              <div className="absolute -top-3 left-6 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-ink">
                Most Popular
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">Growth</p>
              <h3 className="mt-2 text-xl font-bold text-ink">For scaling teams with consistent hiring</h3>
              <p className="mt-4">
                <span className="font-mono text-3xl font-extrabold text-ink">&nbsp;2,000</span>
                <span className="ml-1 text-sm text-ink-muted">/ assessment</span>
              </p>
              <p className="mt-1 text-xs text-brand-green">20% savings vs Starter</p>

              <Link
                href="/demo"
                className="mt-6 block rounded-lg bg-brand-yellow py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-brand-orange"
              >
                Start Free Trial
              </Link>
              <p className="mt-2 text-center text-xs text-ink-muted">5 assessments free</p>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Everything in Starter, plus</p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Unlimited role templates',
                    'Custom question library',
                    'Adaptive follow-up questions',
                    'ATS integration (Greenhouse, Lever, Freshteam)',
                    'Team collaboration (up to 10 users)',
                    'Priority email + chat support',
                    'Data retention: 24 months',
                    'Basic analytics dashboard',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-light">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-brand-yellow/5 p-4">
                <p className="text-xs font-semibold text-ink-muted">Volume discounts:</p>
                <ul className="mt-2 space-y-1 text-xs text-ink-light">
                  <li>&bull; 100+ assessments/quarter: &nbsp;1,800/assessment</li>
                  <li>&bull; 250+ assessments/quarter: &nbsp;1,600/assessment</li>
                </ul>
              </div>

              <div className="mt-4 rounded-lg bg-paper-off p-4">
                <p className="text-xs font-semibold text-ink-muted">Best for:</p>
                <ul className="mt-2 space-y-1 text-xs text-ink-light">
                  <li>&bull; Series A&ndash;C startups</li>
                  <li>&bull; Teams hiring 50&ndash;200/year</li>
                  <li>&bull; Companies with dedicated recruiters</li>
                </ul>
              </div>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-ink-muted">Enterprise</p>
              <h3 className="mt-2 text-xl font-bold text-ink">For organizations with complex requirements</h3>
              <p className="mt-4">
                <span className="font-mono text-3xl font-extrabold text-ink">Custom</span>
              </p>
              <p className="mt-1 text-xs text-ink-muted">Typically &nbsp;1,200&ndash;1,500/assessment at volume</p>

              <Link
                href="/demo"
                className="mt-6 block rounded-lg bg-ink py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-ink-light"
              >
                Talk to Sales
              </Link>
              <p className="mt-2 text-center text-xs text-ink-muted">Custom quote within 24 hours</p>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Everything in Growth, plus</p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Unlimited users',
                    'SSO/SAML authentication',
                    'Custom integrations (API access)',
                    'Dedicated customer success manager',
                    'Custom SLAs',
                    'Advanced analytics + benchmarking',
                    'Data retention: Custom',
                    'India data residency (Mumbai)',
                    'Audit logs + compliance reports',
                    'Custom question development',
                    'Onboarding + training program',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-light">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-paper-off p-4">
                <p className="text-xs font-semibold text-ink-muted">Best for:</p>
                <ul className="mt-2 space-y-1 text-xs text-ink-light">
                  <li>&bull; GCCs hiring 200+/year</li>
                  <li>&bull; Enterprise with compliance requirements</li>
                  <li>&bull; Organizations needing custom workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plan Comparison Table ────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Detailed Plan Comparison</h2>

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper-off">
                  <th className="px-6 py-4 text-left font-semibold text-ink">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-ink">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand-yellow">Growth</th>
                  <th className="px-6 py-4 text-center font-semibold text-ink">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((cat) => (
                  <>
                    <tr key={`cat-${cat.category}`} className="border-t border-gray-200 bg-gray-50">
                      <td colSpan={4} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink-muted">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-gray-100">
                        <td className="px-6 py-3 font-medium text-ink">{row.feature}</td>
                        <td className="px-6 py-3 text-center">
                          <span className="inline-flex justify-center">{renderCell(row.starter)}</span>
                        </td>
                        <td className="px-6 py-3 text-center">
                          <span className="inline-flex justify-center">{renderCell(row.growth)}</span>
                        </td>
                        <td className="px-6 py-3 text-center">
                          <span className="inline-flex justify-center">{renderCell(row.enterprise)}</span>
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 space-y-6 md:hidden">
            {comparisonData.map((cat) => (
              <div key={cat.category}>
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{cat.category}</p>
                <div className="mt-3 space-y-3">
                  {cat.rows.map((row) => (
                    <div key={row.feature} className="rounded-xl border border-gray-200 bg-white p-4">
                      <p className="font-semibold text-ink">{row.feature}</p>
                      <div className="mt-3 space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-ink-muted">Starter</span>
                          <span className="inline-flex items-center">{renderCell(row.starter)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-brand-yellow">Growth</span>
                          <span className="inline-flex items-center">{renderCell(row.growth)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-ink-muted">Enterprise</span>
                          <span className="inline-flex items-center">{renderCell(row.enterprise)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost Calculator ──────────────────────────────── */}
      <section id="calculator" className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Cost Calculator</p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Estimate Your Investment
          </h2>
          <div className="mt-10">
            <CostCalculator />
          </div>
        </div>
      </section>

      {/* ── Hiring Cost Calculator CTA ──────────────────── */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/resources/roi-calculator"
            className="block rounded-2xl border-2 border-brand-yellow/20 bg-brand-yellow/5 p-6 transition-colors hover:border-brand-yellow/40 md:p-8"
          >
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/20">
                <svg className="h-7 w-7 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Free Tool</p>
                <p className="mt-1 text-lg font-bold text-ink">How Much Are Bad Hires Costing You?</p>
                <p className="mt-1 text-sm text-ink-light">
                  Calculate the true cost of mis-hires and see how structured interviews reduce it by 40&ndash;60%.
                </p>
              </div>
              <span className="shrink-0 rounded-lg bg-brand-yellow px-4 py-2 text-sm font-semibold text-ink">
                Calculate Now &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Why Per-Assessment Pricing ───────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Why Per-Assessment Pricing
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* vs Annual Contracts */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">vs. Annual Contracts</h3>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">The problem</p>
                <ul className="mt-2 space-y-2 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Pay for 12 months whether you hire or not
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Hiring freezes = wasted budget
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Overpay in slow quarters, feel squeezed in busy quarters
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Renewal negotiations are adversarial
                  </li>
                </ul>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">Per-assessment pricing</p>
                <ul className="mt-2 space-y-2 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Costs match actual usage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Scale up or down freely
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    No wasted budget during slow periods
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Aligned incentives (we succeed when you hire well)
                  </li>
                </ul>
              </div>
            </div>

            {/* vs Per-Seat */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">vs. Per-Seat Pricing</h3>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">The problem</p>
                <ul className="mt-2 space-y-2 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Adding a hiring manager costs money
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Restricts who can access candidate data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Creates artificial bottlenecks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Punishes growing teams
                  </li>
                </ul>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">Per-assessment pricing</p>
                <ul className="mt-2 space-y-2 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Unlimited users on Growth and Enterprise
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Everyone who needs access has access
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    No gatekeeping on collaboration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Team size doesn&rsquo;t affect cost
                  </li>
                </ul>
              </div>
            </div>

            {/* vs Contact Us */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">vs. &ldquo;Contact&nbsp;Us&rdquo; Pricing</h3>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">The problem</p>
                <ul className="mt-2 space-y-2 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Wastes everyone&rsquo;s time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Signals enterprise-only positioning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Creates power imbalance in negotiations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    You can&rsquo;t budget without a sales call
                  </li>
                </ul>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">Transparent pricing</p>
                <ul className="mt-2 space-y-2 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Know costs upfront
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Self-serve for smaller teams
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Budget accurately
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Sales conversations focus on fit, not price discovery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Volume Discounts ─────────────────────────────── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Volume Discounts</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Volume is calculated quarterly. Discounts apply automatically.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="px-6 py-4 text-left font-semibold text-ink">Quarterly Volume</th>
                  <th className="px-6 py-4 text-center font-semibold text-ink">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand-yellow">Growth</th>
                  <th className="px-6 py-4 text-center font-semibold text-ink">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {volumeDiscounts.map((row) => (
                  <tr key={row.range} className="border-t border-gray-200">
                    <td className="px-6 py-3 font-medium text-ink">{row.range}</td>
                    <td className="px-6 py-3 text-center text-ink-light">{row.starter}</td>
                    <td className="px-6 py-3 text-center font-medium text-ink">{row.growth}</td>
                    <td className="px-6 py-3 text-center text-ink-light">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 space-y-3 md:hidden">
            {volumeDiscounts.map((row) => (
              <div key={row.range} className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="font-semibold text-ink">{row.range}</p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Starter</span>
                    <span className="text-ink-light">{row.starter}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-brand-yellow">Growth</span>
                    <span className="font-medium text-ink">{row.growth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Enterprise</span>
                    <span className="text-ink-light">{row.enterprise}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-ons ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Add-ons</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-sm text-brand-yellow">&nbsp;50,000 one-time</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Custom Question Development</h3>
              <p className="mt-3 text-sm text-ink-light">
                Our team develops custom questions and rubrics for your specific roles.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Role analysis workshop
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  10&ndash;15 custom questions per role
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Validation against your hiring criteria
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Quarterly refresh included for 12 months
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-sm text-brand-yellow">&nbsp;1,00,000 one-time</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Dedicated Implementation</h3>
              <p className="mt-3 text-sm text-ink-light">
                White-glove onboarding for enterprise deployments.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Integration setup with your ATS
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  SSO configuration
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Admin and user training (up to 20 people)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Process design consultation
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  90-day hypercare support
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-sm text-brand-yellow">&nbsp;25,000/year</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Extended Data Retention</h3>
              <p className="mt-3 text-sm text-ink-light">
                Keep assessment data beyond standard retention.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Unlimited retention period
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Full data export on demand
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Compliance-ready archival
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Frequently Asked Questions</h2>

          <div className="mt-8 max-w-3xl divide-y divide-gray-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-ink md:text-lg">
                  {faq.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-light">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compare to Alternatives ──────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Compare to Alternatives</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* vs HireVue */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">vs. HireVue</h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Starting price</td>
                      <td className="px-3 py-2 text-ink-muted">$35,000/year (~&nbsp;29&nbsp;lakh)</td>
                      <td className="px-3 py-2 text-brand-green">&nbsp;2,500/assessment</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Model</td>
                      <td className="px-3 py-2 text-ink-muted">Annual contract</td>
                      <td className="px-3 py-2 text-brand-green">Per assessment</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Confidence scoring</td>
                      <td className="px-3 py-2 text-ink-muted">No</td>
                      <td className="px-3 py-2 text-brand-green">Yes</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">India data residency</td>
                      <td className="px-3 py-2 text-ink-muted">No</td>
                      <td className="px-3 py-2 text-brand-green">Yes</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium text-ink">Minimum commitment</td>
                      <td className="px-3 py-2 text-ink-muted">12 months</td>
                      <td className="px-3 py-2 text-brand-green">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link
                href="/compare/hirevue"
                className="mt-4 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                Full comparison &rarr;
              </Link>
            </div>

            {/* vs HackerRank */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">vs. HackerRank</h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Focus</td>
                      <td className="px-3 py-2 text-ink-muted">Coding tests</td>
                      <td className="px-3 py-2 text-brand-green">Complete evaluation</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">What it measures</td>
                      <td className="px-3 py-2 text-ink-muted">Can they code?</td>
                      <td className="px-3 py-2 text-brand-green">Can they engineer?</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Behavioral assessment</td>
                      <td className="px-3 py-2 text-ink-muted">No</td>
                      <td className="px-3 py-2 text-brand-green">Yes</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Confidence scoring</td>
                      <td className="px-3 py-2 text-ink-muted">No</td>
                      <td className="px-3 py-2 text-brand-green">Yes</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium text-ink">Price/assessment</td>
                      <td className="px-3 py-2 text-ink-muted">&nbsp;1,200&ndash;1,600 (coding only)</td>
                      <td className="px-3 py-2 text-brand-green">&nbsp;1,500&ndash;2,500 (complete)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link
                href="/compare/hackerrank"
                className="mt-4 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                Full comparison &rarr;
              </Link>
            </div>

            {/* vs Phone Screens */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">vs. Phone Screens</h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Interviewer time</td>
                      <td className="px-3 py-2 text-ink-muted">45&ndash;60 min/candidate</td>
                      <td className="px-3 py-2 text-brand-green">10 min/candidate</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Consistency</td>
                      <td className="px-3 py-2 text-ink-muted">15&ndash;25% variance</td>
                      <td className="px-3 py-2 text-brand-green">&lt;5% variance</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Scheduling</td>
                      <td className="px-3 py-2 text-ink-muted">Required</td>
                      <td className="px-3 py-2 text-brand-green">No (async)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-ink">Documentation</td>
                      <td className="px-3 py-2 text-ink-muted">Manual notes</td>
                      <td className="px-3 py-2 text-brand-green">Automatic reports</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium text-ink">Cost at 500/year</td>
                      <td className="px-3 py-2 text-ink-muted">~&nbsp;18.75 lakh</td>
                      <td className="px-3 py-2 text-brand-green">~&nbsp;9 lakh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link
                href="/compare/traditional"
                className="mt-4 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                Full comparison &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security & Compliance ────────────────────────── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">Security &amp; Compliance</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Data Residency</h3>
              <p className="mt-3 text-sm text-ink-light">
                All customer data stored in India (AWS Mumbai region).
                No data leaves India unless explicitly configured.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Compliance</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  SOC 2 Type II (in progress)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  ISO 27001 aligned
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  DPDP Act compliant
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  GDPR compliant for EU candidates
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Security</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Encryption at rest and in transit
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Regular penetration testing
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Role-based access controls
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  Audit logging on Enterprise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get Started ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <h3 className="text-lg font-bold text-ink">Start Free Trial</h3>
              <p className="mt-2 text-sm text-ink-light">
                5 assessments free. No credit card required. See LayersRank in action with your actual candidates.
              </p>
              <Link
                href="/demo"
                className="mt-4 inline-block rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <h3 className="text-lg font-bold text-ink">Talk to Sales</h3>
              <p className="mt-2 text-sm text-ink-light">
                Custom pricing, enterprise requirements, or just want to talk through your situation?
                Our team responds within 24&nbsp;hours.
              </p>
              <Link
                href="/demo"
                className="mt-4 inline-block rounded-lg border-2 border-ink px-6 py-3 font-semibold text-ink hover:bg-ink hover:text-white"
              >
                Talk to Sales
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <h3 className="text-lg font-bold text-ink">See a Demo</h3>
              <p className="mt-2 text-sm text-ink-light">
                Watch LayersRank in action. 30-minute walkthrough of the platform, reports, and analytics.
              </p>
              <Link
                href="/demo"
                className="mt-4 inline-block rounded-lg border-2 border-ink px-6 py-3 font-semibold text-ink hover:bg-ink hover:text-white"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Internal Links ───────────────────────────────── */}
      <section className="bg-paper-off py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">Related Pages</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/resources/roi-calculator"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              ROI Calculator &rarr;
            </Link>
            <Link
              href="/resources/sample-report"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Sample Report &rarr;
            </Link>
            <Link
              href="/solutions/gcc"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              GCC Solutions &rarr;
            </Link>
            <Link
              href="/solutions/startups"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Startup Solutions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lead Magnet CTA ────────────────────────────────── */}
      <LeadMagnetCTA type="roi" />

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="gradient-cta py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Start Hiring Better Today</h2>
          <p className="mt-2 text-ink-light">
            5 free assessments. No credit card. No commitment. See if LayersRank works for you.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/demo"
              className="rounded-lg bg-ink px-8 py-4 font-semibold text-white hover:bg-ink-light"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border-2 border-ink/20 px-8 py-4 font-medium text-ink hover:border-ink/40"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
