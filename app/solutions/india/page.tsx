import Link from 'next/link';
import Image from 'next/image';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'India Hiring Platform | Engineering Recruitment Bangalore Hyderabad Pune | LayersRank',
  description:
    'Standardize hiring across Bangalore, Hyderabad, Pune, NCR, and Chennai. Built for Indian tech hiring: regional data residency, INR pricing, and understanding of the Indian talent landscape.',
  path: '/solutions/india',
});

const faqs = [
  {
    q: 'Do you support hiring in Tier-2 and Tier-3 cities?',
    a: 'Yes, fully. Our platform works on mobile with low bandwidth. We\'ve successfully supported assessments in cities across India, not just the major tech hubs.',
  },
  {
    q: 'What about candidates whose English isn\'t perfect?',
    a: 'We evaluate content and thinking, not grammatical perfection. Candidates who communicate clearly in Indian English score well. We\'re assessing whether they can do the job, not whether they sound like native speakers.',
  },
  {
    q: 'Can we use LayersRank for lateral hiring and campus hiring with the same platform?',
    a: 'Yes. Same platform, different configurations. Campus assessments can use different questions and scoring than experienced-hire assessments. You get consistency in approach while accommodating different hiring contexts.',
  },
  {
    q: 'How do you handle Indian holidays and assessment scheduling?',
    a: 'Assessment windows are configurable. Avoid launching during Diwali or other major holidays if you want high completion rates. We can advise on optimal timing based on regional calendars.',
  },
  {
    q: 'Is support available in IST?',
    a: 'Yes. Our India team provides support during IST business hours. For urgent issues, 24/7 support is available on Scale and Enterprise plans.',
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

export default function IndiaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <PageHero
        eyebrow="Solutions / India"
        title="Built for How India Hires"
        description="LayersRank isn't an American product localized for India. It's built for the Indian tech ecosystem: understanding of the college tier system, regional talent variations, realistic INR pricing, and infrastructure that works in Tier-2 cities. Standardize hiring across Bangalore, Hyderabad, Pune, NCR, and Chennai."
        primaryCta="Start Free Trial"
        primaryCtaHref="/signup"
        secondaryCta="Book an India Demo"
        secondaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src="/images/solutions-india-tech-office.png"
              alt="Indian tech professionals in modern Bangalore office using structured hiring platform for engineering recruitment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* ── WHY INDIA IS DIFFERENT ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why India is different</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Hiring in India isn&apos;t just &ldquo;hiring in a different geography.&rdquo; The ecosystem has
            distinct characteristics that generic global platforms don&apos;t understand.
          </p>

          <div className="mt-10 space-y-8">
            {/* College Tier System */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">The College Tier System</h3>
              <p className="mt-2 text-sm text-ink-light">
                India&apos;s engineering education creates stratified talent pools that don&apos;t exist elsewhere.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    tier: 'Tier-1',
                    colleges: 'IITs, NITs, BITS, IIITs, top state universities',
                    pct: '2-3%',
                    note: 'Heavily recruited, premium expectations, high competing offers.',
                  },
                  {
                    tier: 'Tier-2',
                    colleges: 'Good private universities, strong regional colleges, older IITs',
                    pct: '10-15%',
                    note: 'Solid fundamentals, less competition, better offer acceptance rates.',
                  },
                  {
                    tier: 'Tier-3',
                    colleges: 'Thousands of engineering colleges of varying quality',
                    pct: '80%+',
                    note: 'Hidden talent exists but harder to identify. Low brand recognition.',
                  },
                ].map((t) => (
                  <div key={t.tier} className="rounded-lg border border-gray-200 bg-white p-5">
                    <p className="font-mono text-sm font-bold text-brand-yellow">{t.tier}</p>
                    <p className="mt-1 text-xs text-ink-muted">{t.colleges}</p>
                    <p className="mt-2 text-2xl font-extrabold text-ink">{t.pct}</p>
                    <p className="text-xs text-ink-muted">of engineering graduates</p>
                    <p className="mt-2 text-sm text-ink-light">{t.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm font-medium text-ink">
                LayersRank evaluates what candidates can actually do, and our team understands the Indian
                landscape. Our question libraries account for Indian engineering curriculum. Our benchmarks
                reflect Indian candidate populations.
              </p>
            </div>

            {/* Regional Talent Variations */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Regional Talent Variations</h3>
              <p className="mt-2 text-sm text-ink-light">
                Tech hiring in India isn&apos;t uniform. Each hub has different characteristics.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    city: 'Bangalore',
                    desc: 'Startup ecosystem, product companies, fierce competition for senior talent. Candidates expect equity, flexibility, and interesting problems. Offer dropouts to better-funded competitors are common.',
                  },
                  {
                    city: 'Hyderabad',
                    desc: 'Strong GCC presence, enterprise tech, growing startup scene. More stable talent pool, lower attrition than Bangalore. Growing as a destination for candidates priced out of Bangalore.',
                  },
                  {
                    city: 'Pune',
                    desc: 'Automotive tech, enterprise IT, emerging product companies. Technical talent with different specialization patterns. Strong educational institutions in the region.',
                  },
                  {
                    city: 'NCR',
                    desc: 'Mixed ecosystem — fintech, e-commerce, IT services. Different cultural expectations around work style. Candidate motivations vary significantly by sub-region.',
                  },
                  {
                    city: 'Chennai',
                    desc: 'IT services heritage, growing product presence. Strong technical fundamentals from regional institutions. Different communication styles than other regions.',
                  },
                ].map((c) => (
                  <div key={c.city} className="rounded-lg border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="font-bold text-ink">{c.city}</p>
                    </div>
                    <p className="mt-2 text-sm text-ink-light">{c.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-light">
                A platform that treats &ldquo;India&rdquo; as a single market misses these variations.
                LayersRank allows region-specific configuration while maintaining consistency in evaluation standards.
              </p>
            </div>

            {/* Notice Period Reality */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">The Notice Period Reality</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Indian employment typically involves 60-90 day notice periods, much longer than Western
                  markets. Candidates start interviewing 3+ months before they can join. Multiple offers
                  accumulate. Accepted offers frequently don&apos;t convert to joins.
                </p>
                <p>
                  Offer dropout rates of 20-30% are normal. For competitive roles, dropouts can exceed 40%.
                </p>
                <p className="font-medium text-ink">
                  LayersRank helps in two ways: faster evaluation reduces time-in-process (candidates with
                  faster offers are more likely to accept), and our commitment signal detection identifies
                  candidates who are genuinely ready to move versus those collecting offers for leverage.
                </p>
              </div>
            </div>

            {/* Infrastructure Realities */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Infrastructure Realities</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Not every candidate has reliable broadband and a quiet home office. Candidates in Tier-2
                  and Tier-3 cities may have intermittent connectivity. Shared living situations make video
                  interviews difficult. Mobile internet is sometimes more reliable than fixed broadband.
                </p>
                <p className="font-medium text-ink">
                  LayersRank works on mobile devices. Low-bandwidth mode handles poor connectivity.
                  Interviews auto-save and can be resumed. We don&apos;t inadvertently filter out talented
                  candidates because they don&apos;t have the &ldquo;right&rdquo; interview setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIA-SPECIFIC FEATURES ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">India-specific features</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'INR Pricing',
                desc: 'No currency conversion games. No "India pricing" that\'s actually US pricing converted at unfavorable rates. Our India pricing is designed for Indian market economics. Startups can afford structured assessment. GCCs get volume pricing that makes sense relative to Indian salary costs.',
              },
              {
                title: 'India Data Residency',
                desc: 'For organizations with data localization requirements, candidate data stays in India. Our India deployment uses AWS Mumbai region with no data transfer outside the country. Compliance with Indian data protection regulations (including the upcoming DPDP Act) is built in, not bolted on.',
              },
              {
                title: 'Regional Language Considerations',
                desc: 'While assessments are currently in English, we understand that English proficiency varies and isn\'t always correlated with technical ability. Our evaluation weights substance over polish. Candidates who express ideas clearly in Indian English aren\'t penalized. Hindi and regional language support is on our roadmap for 2026.',
              },
              {
                title: 'Indian Tech Stack Familiarity',
                desc: 'Our question libraries include technologies common in Indian engineering: Java and Spring ecosystems dominant in IT services, Python and Node.js in product companies, specific frameworks popular in Indian development shops. We\'re not asking about technologies that exist only in Silicon Valley.',
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING ACROSS INDIAN CITIES ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">National Reach</p>
          <h2 className="mt-4 text-2xl font-bold">Hiring across Indian cities</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            LayersRank enables you to hire nationally while maintaining local relevance.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="font-bold text-brand-yellow">Consistent Evaluation, Regional Nuance</h3>
              <p className="mt-2 text-sm text-gray-300">
                A Senior Backend Engineer in Bangalore should meet the same bar as one in Hyderabad.
                But compensation expectations differ. Candidate motivations differ. LayersRank lets you
                use the same assessment framework nationally while accounting for regional differences.
              </p>
            </div>
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="font-bold text-brand-yellow">Expanding Beyond Your Base</h3>
              <p className="mt-2 text-sm text-gray-300">
                With async structured assessment, geography matters less. You can evaluate candidates in
                Chennai without a Chennai presence. Assess Pune talent without campus visits. Instead of
                competing fiercely for Bangalore engineers, find qualified candidates across India.
              </p>
            </div>
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="font-bold text-brand-yellow">Remote Work Enablement</h3>
              <p className="mt-2 text-sm text-gray-300">
                India&apos;s tech sector has adopted hybrid and remote work more than many markets.
                Structured assessment is inherently remote-friendly. Candidates anywhere in India can
                complete the same interview on the same terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIAN MARKET SEGMENTS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Indian market segments</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'GCCs (Global Capability Centers)',
                stat: '1,600+',
                statLabel: 'GCCs in India employing 1.5M+ professionals',
                points: [
                  'Consistency across Indian cities for multi-location GCCs',
                  'Audit-ready reports for global HQ approval processes',
                  'Integration with enterprise systems (Workday, SAP SuccessFactors)',
                  'Scale economics for GCC volume',
                ],
                link: '/solutions/gcc',
                linkLabel: 'See GCC Solutions',
              },
              {
                title: 'Indian Startups',
                stat: 'Fast',
                statLabel: 'Competing for talent against well-funded competitors',
                points: [
                  'Pricing that fits startup budgets (not enterprise pricing with "startup discount")',
                  'Speed that competes with larger companies',
                  'Quality evaluation without a recruiting team',
                ],
                link: '/solutions/startups',
                linkLabel: 'See Startup Solutions',
              },
              {
                title: 'IT Services Companies',
                stat: '10,000+',
                statLabel: 'Engineers hired annually, primarily from campus',
                points: [
                  'Campus-scale assessment (10,000+ candidates per season)',
                  'Pedigree-neutral evaluation that expands talent pool',
                  'Cost per assessment that works at services-firm margins',
                ],
                link: '/solutions/campus-hiring',
                linkLabel: 'See Campus Hiring',
              },
              {
                title: 'Indian Product Companies',
                stat: 'Quality',
                statLabel: 'Competing on volume and quality simultaneously',
                points: [
                  'Assessment for product-company-relevant skills',
                  'Competitive speed against larger companies',
                  'Evaluation that identifies candidates who want product work',
                ],
                link: '/solutions/technical-hiring',
                linkLabel: 'See Technical Hiring',
              },
            ].map((segment) => (
              <div key={segment.title} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <h3 className="text-lg font-bold text-ink">{segment.title}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-brand-yellow">{segment.stat}</span>
                  <span className="text-xs text-ink-muted">{segment.statLabel}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {segment.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink-light">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href={segment.link} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow hover:underline">
                  {segment.linkLabel}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDIA PRICING ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">India pricing</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            All prices in INR. No currency conversion. No dollar-denominated contracts.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {/* Startup */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Startup</p>
              <div className="mt-4 flex items-baseline gap-1">
                <p className="text-3xl font-extrabold text-ink">&#x20B9;2,500</p>
                <p className="text-sm text-ink-muted">/ interview</p>
              </div>
              <ul className="mt-6 space-y-2">
                {['Up to 25 interviews/month', 'Standard question library', '24-hour turnaround', 'Email support'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth */}
            <div className="rounded-xl border-2 border-brand-yellow bg-white p-6 relative">
              <div className="absolute -top-3 left-6 rounded-full bg-brand-yellow px-3 py-0.5 text-xs font-bold text-ink">Popular</div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Growth</p>
              <div className="mt-4 flex items-baseline gap-1">
                <p className="text-3xl font-extrabold text-ink">&#x20B9;2,000</p>
                <p className="text-sm text-ink-muted">/ interview</p>
              </div>
              <ul className="mt-6 space-y-2">
                {['Up to 100 interviews/month', 'Full library + custom questions', '12-hour turnaround', 'Slack + email support'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scale */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Scale</p>
              <div className="mt-4 flex items-baseline gap-1">
                <p className="text-3xl font-extrabold text-ink">&#x20B9;1,500</p>
                <p className="text-sm text-ink-muted">/ interview</p>
              </div>
              <ul className="mt-6 space-y-2">
                {['Unlimited interviews', 'All features', 'Same-day turnaround', 'Dedicated success manager'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">GCC / Enterprise</p>
              <div className="mt-4">
                <p className="text-3xl font-extrabold text-ink">Custom</p>
                <p className="text-sm text-ink-muted">based on volume</p>
              </div>
              <ul className="mt-6 space-y-2">
                {['India data residency', 'Enterprise security (SSO, audit logs)', 'Implementation support', 'Quarterly business reviews'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS IN INDIA ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Success in India</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                quote: 'We were losing 40% of our offers to better-funded competitors. LayersRank cut our time-to-offer from 3 weeks to 5 days. Our acceptance rate improved 25%. The candidates who said yes were the ones who valued our speed and process.',
                role: 'VP Engineering, Series C B2B SaaS',
                city: 'Bangalore',
              },
              {
                quote: 'Cross-city consistency was our biggest problem. Bangalore and Hyderabad panels were effectively running different hiring processes. LayersRank gave us one standard. Now when we compare candidates across cities, we\'re actually comparing apples to apples.',
                role: 'Talent Acquisition Director, Fortune 500 GCC',
                city: 'Hyderabad',
              },
              {
                quote: 'We used to visit 50 colleges and filter by brand. Now we assess 10,000 candidates from 200 colleges. Our hiring quality improved because we\'re selecting on capability, not college name. We found amazing candidates at colleges we\'d never heard of.',
                role: 'Campus Hiring Head, Large IT Services Company',
                city: 'Pan-India',
              },
              {
                quote: 'As a Chennai-based company, we were always second choice for Bangalore candidates. With LayersRank, we started finding excellent candidates locally — people who didn\'t want to relocate but had equivalent skills. Our local candidate pool is deeper than we realized.',
                role: 'CTO, Seed-Stage Fintech',
                city: 'Chennai',
              },
            ].map((t) => (
              <div key={t.role} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="text-sm italic leading-relaxed text-ink-light">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-ink">— {t.role}</p>
                  </div>
                  <span className="rounded-full bg-brand-yellow/10 px-2 py-0.5 text-xs font-medium text-brand-yellow">{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GETTING STARTED ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Getting started in India</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: '1',
                title: 'Free Trial',
                desc: '5 free interviews. No credit card. See how it works with real candidates.',
              },
              {
                n: '2',
                title: 'Pilot Program',
                desc: 'Run 50-100 candidates through LayersRank alongside your existing process. Compare results.',
              },
              {
                n: '3',
                title: 'Implementation Support',
                desc: 'For GCCs and enterprises, our India team provides local configuration, training, and integration.',
              },
              {
                n: '4',
                title: 'Local Support',
                desc: 'India-based customer success team. Support during IST business hours. Understanding of Indian hiring.',
              },
            ].map((step) => (
              <div key={step.n} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">
                  {step.n}
                </div>
                <h3 className="mt-3 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-xs text-ink-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-paper py-20">
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
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Related</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/solutions/gcc', title: 'GCC Solutions', desc: 'Global Capability Centers in India' },
              { href: '/solutions/startups', title: 'Startups', desc: 'Indian startup hiring' },
              { href: '/solutions/campus-hiring', title: 'Campus Hiring', desc: 'Graduate recruitment at scale' },
              { href: '/solutions/middle-east', title: 'Middle East', desc: 'Regional expansion from India' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
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
        title="Hiring in India? Let's Talk."
        description="See how LayersRank works for Indian tech hiring. Demo tailored to your cities, your roles, your scale."
        cta="Start Free Trial"
        ctaHref="/signup"
        secondaryCta="Book an India Demo"
        secondaryCtaHref="/demo"
        variant="gradient"
      />
    </>
  );
}
