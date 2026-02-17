import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Middle East Tech Hiring | UAE Saudi Arabia Qatar Recruitment | LayersRank',
  description:
    'Structured hiring for the Middle East tech ecosystem. Evaluate global talent pools fairly for Dubai, Abu Dhabi, Riyadh, and Doha positions. Multi-timezone, multilingual-ready assessment.',
  path: '/solutions/middle-east',
});

const faqs = [
  {
    q: 'Do you support Arabic language assessments?',
    a: 'Not currently, but it\'s on our roadmap. English remains the dominant language for technology hiring in the Middle East. We can prioritize Arabic support for enterprise customers with specific requirements.',
  },
  {
    q: 'How do you handle Saudization/Nationalization requirements?',
    a: 'LayersRank evaluates candidates consistently regardless of nationality. For roles with nationalization requirements, you can configure different thresholds or evaluation criteria for national vs. international candidates while using the same underlying assessment framework.',
  },
  {
    q: 'What about candidates who don\'t have reliable internet?',
    a: 'Our platform works on mobile with low-bandwidth mode. Candidates can pause and resume if connectivity drops. We\'ve successfully supported assessments in regions with infrastructure challenges.',
  },
  {
    q: 'Can we assess candidates for attitude toward relocation?',
    a: 'Yes. Our contextual questions can probe relocation readiness: reasons for considering the move, understanding of Gulf work culture, logistics preparation. These responses factor into contextual dimension scoring.',
  },
  {
    q: 'Do you support right-to-left languages in the interface?',
    a: 'Not currently. English interface only for now. RTL support is planned alongside Arabic content support.',
  },
  {
    q: 'What\'s your data residency for Middle East customers?',
    a: 'By default, European data centers. We can discuss Middle East or dedicated deployment for organizations with specific regulatory requirements.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function MiddleEastPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <PageHero
        eyebrow="Solutions / Middle East"
        title="Hire Global Talent for Middle East Roles"
        description="Middle East tech is booming — but finding talent means evaluating candidates from India, Pakistan, Egypt, Europe, and beyond. LayersRank provides structured assessment that works across time zones, cultures, and candidate backgrounds. Consistent evaluation for Dubai, Abu Dhabi, Riyadh, and Doha."
        primaryCta="Book a Middle East Demo"
        primaryCtaHref="/demo"
        secondaryCta="See Platform Overview"
        secondaryCtaHref="/product"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Dubai skyline with modern tech office" search="dubai business district modern tech office skyline" />
        </div>
      </section>

      {/* ── THE MIDDLE EAST HIRING LANDSCAPE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Middle East hiring landscape</h2>
          <p className="mt-2 max-w-3xl text-lg font-medium text-ink">
            The Middle East technology sector is growing faster than local talent supply can match.
          </p>

          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              UAE, Saudi Arabia, Qatar, and other Gulf states are investing heavily in technology
              transformation. Vision 2030, Smart Dubai, NEOM, and similar initiatives require thousands
              of technology professionals that the region doesn&apos;t have domestically.
            </p>
            <p className="font-medium text-ink">
              The result: Middle East tech hiring is fundamentally international.
            </p>
            <p>
              Companies in Dubai source from India, Pakistan, Egypt, Eastern Europe, and Southeast Asia.
              Saudi firms recruit globally while navigating Saudization requirements. Qatari organizations
              build teams from dozens of nationalities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Multi-Source Talent Pools',
                desc: 'Your candidate pipeline includes engineers from Mumbai, Lahore, Cairo, Bucharest, and Manila. Each market has different educational systems, different experience profiles, and different baseline expectations. A degree from IIT means something different than a degree from LUMS means something different than a degree from Cairo University.',
                highlight: 'You need evaluation based on what candidates can actually do, not proxies that only work within a single market.',
              },
              {
                title: 'Timezone and Logistics Challenges',
                desc: 'Coordinating interviews with candidates in IST, PKT, EET, and EET+ while your team works in GST creates scheduling nightmares. Phone screens at 7am or 9pm. Interviews that get rescheduled repeatedly.',
                highlight: 'Async assessment eliminates this. Candidates complete on their own time. Your team reviews during your working hours.',
              },
              {
                title: 'Relocation Assessment',
                desc: 'Most candidates are relocating for Middle East roles. You\'re not just evaluating technical fit — you\'re evaluating whether someone will successfully uproot their life for this opportunity. Will they actually show up after accepting? Will they adapt to the Gulf environment?',
                highlight: 'Structured assessment reveals motivation and commitment signals that informal conversations miss.',
              },
              {
                title: 'Visa and Compliance Considerations',
                desc: 'Hiring decisions in the Middle East have immigration implications. Sponsoring the wrong candidate is expensive — visa costs, relocation packages, housing allowances, and the operational disruption when hires don\'t work out.',
                highlight: 'Better evaluation means fewer expensive mistakes.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
                <p className="mt-2 text-sm font-medium text-brand-yellow">{item.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW LAYERSRANK SERVES MIDDLE EAST HIRING ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How LayersRank serves Middle East hiring</h2>

          <div className="mt-10 space-y-8">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Consistent Cross-Border Evaluation</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Whether a candidate sits in Bangalore, Karachi, or Kiev, they complete the same
                  assessment with the same questions and the same evaluation criteria.
                </p>
                <p className="font-medium text-ink">
                  You can directly compare an Indian engineer with an Egyptian engineer with a Polish
                  engineer — not based on where they studied or who they worked for, but based on
                  demonstrated capability. This levels the playing field while maintaining your quality
                  standards.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Async by Default</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  No scheduling coordination. Candidates receive a link and complete on their schedule.
                  Whether they&apos;re in IST, EET, or your own GST, the process is the same.
                </p>
                <p className="font-medium text-ink">
                  Reports arrive in your inbox. You review during your working hours. Decisions happen
                  without anyone waking up early or staying up late.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Commitment Signal Detection</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Relocation hiring has higher stakes. You want candidates who are genuinely committed
                  to moving, not using your offer to negotiate at their current job or collecting options
                  &ldquo;just in case.&rdquo;
                </p>
                <p>Our contextual evaluation probes motivation explicitly:</p>
                <ul className="ml-4 space-y-1 text-sm text-ink-light">
                  <li>Why this role in this location?</li>
                  <li>What research have they done about living in the Gulf?</li>
                  <li>What&apos;s their realistic timeline for relocation?</li>
                  <li>Are they relocating alone or with family, and what does that logistics look like?</li>
                </ul>
                <p className="font-medium text-ink">
                  Generic answers (&ldquo;exciting opportunity&rdquo;) score lower than specific answers
                  demonstrating genuine preparation for the move.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Multilingual-Ready</h3>
              <p className="mt-4 text-sm text-ink-light">
                While most tech hiring is in English, our platform architecture supports future Arabic
                and other language options. Assessment interface, candidate communications, and reports
                can be configured for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MIDDLE EAST MARKET SEGMENTS ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Markets</p>
          <h2 className="mt-4 text-2xl font-bold">Middle East market segments</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'UAE Tech Companies',
                desc: 'Dubai and Abu Dhabi host growing technology ecosystems — fintech, e-commerce, logistics tech, and government digital services. UAE companies compete for talent against global tech giants with regional offices and against higher-salary opportunities in the US and Europe. Speed and candidate experience matter.',
              },
              {
                title: 'Saudi Vision 2030 Initiatives',
                desc: 'Saudi Arabia\'s economic diversification drives massive technology investment. NEOM, Red Sea Project, and sector-specific digitalization create unprecedented hiring demand. Saudization requirements add complexity — you need to evaluate both international candidates and Saudi nationals.',
              },
              {
                title: 'Qatar Tech and World Cup Legacy',
                desc: 'Qatar\'s technology sector expanded significantly for World Cup infrastructure. That capability now supports ongoing digital transformation initiatives. International hiring competes with local Qatari and regional talent development.',
              },
              {
                title: 'Regional Corporate Headquarters',
                desc: 'Many multinationals locate regional headquarters in Dubai or other Gulf cities. These operations hire for regional scope — managing teams across Middle East, Africa, and sometimes South Asia. Enterprise-grade security, compliance features, and integration with global HR systems matter.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-600 bg-white/5 p-6">
                <h3 className="font-bold text-brand-yellow">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOURCING MIDDLE EAST TALENT ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Sourcing Middle East talent</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Understanding where your candidates come from — and what that means for evaluation.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                region: 'India & Pakistan',
                desc: 'The largest talent source for Gulf technology roles. Large English-speaking populations, strong technical education systems, established diaspora communities in the Gulf. LayersRank\'s deep experience with Indian hiring translates directly. We understand Indian college tiers, experience patterns, and evaluation considerations.',
              },
              {
                region: 'Egypt & MENA',
                desc: 'Growing source of technology talent, especially for Arabic-language product roles or positions requiring regional market understanding. Technical fundamentals may require different assessment approaches than South Asian markets. LayersRank\'s configurable question libraries can account for different educational backgrounds.',
              },
              {
                region: 'Eastern Europe',
                desc: 'Ukraine, Poland, Romania, and nearby markets offer strong technical talent, often with European work style expectations. Timezone alignment with Middle East is better than with South Asian markets. Relocation considerations differ (EU freedom of movement means different commitment dynamics).',
              },
              {
                region: 'Southeast Asia',
                desc: 'Philippines, Indonesia, Malaysia, and Vietnam provide technical talent at various levels, often with strong English skills and customer-facing capabilities. Different markets within Southeast Asia have different characteristics that assessment should account for.',
              },
            ].map((item) => (
              <div key={item.region} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-ink">{item.region}</h3>
                </div>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION FOR MIDDLE EAST ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Implementation for Middle East</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Deployment Options',
                desc: 'Standard deployment works for most Middle East organizations. Data can reside in our European or Asian regions depending on your preference. For organizations with specific data residency requirements (UAE data protection regulations, Saudi PDPL), we can discuss dedicated deployment options.',
              },
              {
                title: 'Support Coverage',
                desc: 'Our team provides support coverage aligned with Gulf business hours (GST/AST). For enterprise customers, extended support hours are available. Implementation support includes configuration, training, and integration assistance.',
              },
              {
                title: 'Integration With Middle East HR Systems',
                desc: 'We integrate with global HR and ATS systems commonly used by Middle East operations: SAP SuccessFactors, Oracle HCM, Workday. For regional systems, API access enables custom integration. Candidate data flows where you need it.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MIDDLE EAST PRICING ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Pricing</p>
          <h2 className="mt-4 text-2xl font-bold">Middle East pricing</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Regional pricing: premium relative to India, competitive relative to Western markets. USD
            pricing with no currency conversion surprises. Invoicing available in USD or AED.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              {
                plan: 'Starter',
                price: '$50',
                features: ['Standard question library', '24-hour turnaround', 'Email support'],
              },
              {
                plan: 'Growth',
                price: '$40',
                features: ['Full library + custom questions', '12-hour turnaround', 'Slack + email support'],
                highlight: true,
              },
              {
                plan: 'Scale',
                price: '$30',
                features: ['All features', 'Same-day turnaround', 'Dedicated success manager'],
              },
              {
                plan: 'Enterprise',
                price: 'Custom',
                features: ['Data residency options', 'Enterprise security', 'Implementation support', 'Quarterly business reviews'],
              },
            ].map((tier) => (
              <div
                key={tier.plan}
                className={`rounded-xl p-6 ${
                  tier.highlight
                    ? 'border-2 border-brand-yellow bg-white/10'
                    : 'border border-gray-600 bg-white/5'
                }`}
              >
                {tier.highlight && (
                  <div className="mb-3 inline-block rounded-full bg-brand-yellow px-3 py-0.5 text-xs font-bold text-ink">
                    Popular
                  </div>
                )}
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-gray-400">{tier.plan}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <p className="text-3xl font-extrabold text-brand-yellow">{tier.price}</p>
                  {tier.price !== 'Custom' && <p className="text-sm text-gray-400">/ interview</p>}
                </div>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gray-600 bg-white/5 p-6">
            <h3 className="font-bold">Enterprise Considerations</h3>
            <p className="mt-2 text-sm text-gray-300">
              Large Middle East organizations often have specific procurement requirements: local entity
              invoicing, specific payment terms, particular compliance documentation. We work with Middle
              East enterprises regularly and can accommodate regional business practices.
            </p>
          </div>
        </div>
      </section>

      {/* ── CASE EXAMPLE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Case example</h2>

          <div className="mt-10 rounded-xl border border-gray-200 bg-paper-off p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
              Dubai Fintech
            </p>
            <p className="mt-2 text-sm text-ink-light">
              A Dubai-based fintech hiring 40 engineers across mobile, backend, and data roles.
              Candidate pool: India (60%), Pakistan (15%), Eastern Europe (15%), other markets (10%).
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-ink-muted">Challenges Before LayersRank</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-light">
                  <li>Phone screens across 5+ time zones requiring evening and early morning calls</li>
                  <li>Difficulty comparing candidates from different backgrounds fairly</li>
                  <li>30% offer dropout rate (candidates accepting then not relocating)</li>
                  <li>8-week average time from application to offer</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-green">After LayersRank</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-light">
                  <li>Async assessment eliminated timezone scheduling</li>
                  <li>Standardized evaluation made cross-background comparison possible</li>
                  <li>Commitment signal detection reduced offer dropout to 18%</li>
                  <li>Time-to-offer reduced to 3.5 weeks</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { metric: 'Zero', label: 'Timezone scheduling conflicts' },
                { metric: '40%', label: 'Reduction in offer dropouts' },
                { metric: '56%', label: 'Faster time-to-offer' },
                { metric: 'Fair', label: 'Cross-background comparison' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <p className="text-2xl font-extrabold text-brand-yellow">{r.metric}</p>
                  <p className="mt-1 text-xs text-ink-muted">{r.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm italic text-ink-light">
              &ldquo;We used to spend half our interview time just figuring out baseline — is this
              person competent? With LayersRank, that&apos;s answered before we ever talk to them. Our
              interviews focus on fit and depth, not screening.&rdquo;
            </p>
            <p className="text-xs text-ink-muted">— Hiring Manager</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Frequently asked questions</h2>
          <div className="mt-12 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-ink">
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

      {/* ── INTERNAL LINKS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Related</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/solutions/gcc', title: 'GCC Solutions', desc: 'For GCC-scale operations in the Gulf' },
              { href: '/solutions/india', title: 'India', desc: 'Primary talent source for Middle East tech' },
              { href: '/solutions/enterprise', title: 'Enterprise', desc: 'Large organization capabilities' },
              { href: '/product/integrity-detection', title: 'Integrity Detection', desc: 'Assessment validity for high-stakes hiring' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-gray-200 bg-paper-off p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">{link.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{link.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <PageCTA
        title="Hiring for the Middle East? Let's Talk."
        description="See how LayersRank handles the unique challenges of Gulf tech hiring: global talent pools, timezone complexity, and relocation commitment. Demo tailored to your market."
        cta="Book a Middle East Demo"
        ctaHref="/demo"
        secondaryCta="Download Platform Overview"
        secondaryCtaHref="/resources"
        variant="gradient"
      />
    </>
  );
}
