import Link from 'next/link';
import Image from 'next/image';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { JsonLd } from '@/components/json-ld';
import { LeadMagnetCTA } from '@/components/lead-magnet-cta';

export const metadata = makeMetadata({
  title: 'Enterprise Hiring Platform India | Tata Reliance Infosys Scale Recruitment | LayersRank',
  description:
    'Standardize hiring across business units for India\'s largest companies. Built for Indian enterprise scale: IT services, banking, manufacturing, and conglomerates hiring thousands annually.',
  path: '/solutions/enterprise',
});

const faqs = [
  {
    q: 'How do you handle our hiring volumes during peak seasons?',
    a: 'Platform scales automatically. We\'ve handled 5,000+ assessments in a single week for campus hiring seasons. No degradation, no delays. Your peak is our normal.',
  },
  {
    q: 'Can we customize assessments for different business units?',
    a: 'Yes. Each business unit can have its own role templates, scoring weights, and evaluation criteria — while still rolling up to enterprise-wide reporting and standards.',
  },
  {
    q: 'What about our existing vendor relationships?',
    a: 'LayersRank complements rather than replaces most existing tools. We integrate with your ATS, work alongside your background check vendors, and fit into your existing workflow.',
  },
  {
    q: 'How long until we see ROI?',
    a: 'Most enterprise clients see positive ROI within the first quarter of full deployment. The combination of reduced screening time, faster hiring, and lower dropout rates compounds quickly at scale.',
  },
  {
    q: 'Who manages this internally?',
    a: 'Typically a 1-2 person team in HR operations manages LayersRank enterprise deployments with support from our customer success team. We handle the technical complexity; you handle the hiring decisions.',
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

export default function EnterprisePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <PageHero
        eyebrow="Solutions / Enterprise"
        title="Enterprise Hiring for India's Largest Companies"
        description="When you're hiring 5,000+ professionals annually across multiple business units, cities, and job families, you need infrastructure that scales. LayersRank provides the evaluation backbone for India's largest employers — consistent assessment, auditable decisions, and efficiency that compounds at scale."
        primaryCta="Talk to Enterprise Sales"
        primaryCtaHref="/demo"
        secondaryCta="Download Enterprise Overview"
        secondaryCtaHref="/resources"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src="/images/solutions-enterprise-hiring.png"
              alt="Indian enterprise office with large-scale hiring operations — structured candidate assessment at scale"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* ── THE INDIAN ENTERPRISE HIRING REALITY ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Indian enterprise hiring reality</h2>
          <p className="mt-2 max-w-3xl text-lg font-medium text-ink">
            India&apos;s largest companies operate at hiring volumes that break normal processes.
          </p>

          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Infosys hired 50,000 freshers in a single year. TCS, Wipro, and HCL operate at similar
              scale. Large Indian banks onboard thousands of officers annually. Manufacturing
              conglomerates hire across dozens of plants and locations. Reliance, Tata, Mahindra, and
              Adani group companies each run hiring operations that rival mid-sized companies&apos; entire
              headcount.
            </p>
            <p>At this scale, small inefficiencies become massive costs.</p>
          </div>

          <div className="mt-8 rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
            <p className="text-sm font-semibold text-ink">The math of enterprise screening:</p>
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              {[
                { n: '30 min', label: 'Interviewer time per candidate' },
                { n: '3:1', label: 'Candidates screened per hire' },
                { n: '10,000', label: 'Hires per year' },
                { n: '₹45 Cr', label: 'Annual first-round screening cost' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-brand-red">{s.n}</p>
                  <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-light">
              And that assumes those screens are consistent. They&apos;re not. When hiring happens across
              Chennai, Bangalore, Hyderabad, Pune, NCR, and Kolkata — with different business units,
              different hiring managers, and different local practices — standardization is nearly
              impossible.
            </p>
            <p className="mt-2 text-sm font-semibold text-brand-yellow">
              The result: inconsistent quality, unpredictable outcomes, and decisions that can&apos;t
              withstand scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY INDIAN ENTERPRISES NEED DIFFERENT INFRASTRUCTURE ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why Indian enterprises need different infrastructure</h2>

          <div className="mt-10 space-y-8">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Scale That Western Tools Don&apos;t Understand</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Most enterprise hiring tools are built for Western companies hiring hundreds per year
                  with elaborate multi-round processes.
                </p>
                <p>
                  Indian enterprises hire thousands. Often tens of thousands. The economics are different.
                  The volumes are different. The candidate pools are different.
                </p>
                <p className="font-medium text-ink">
                  A tool designed for a US company making 500 careful hires doesn&apos;t work for an Indian
                  IT services company making 20,000 hires with tight margins and aggressive timelines.
                  LayersRank is built for Indian scale from the ground up.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">The IT Services Challenge</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  India&apos;s IT services industry faces unique hiring dynamics. Project-based demand
                  creates hiring spikes. A new client engagement might require 200 engineers in 60 days.
                  Bench management means you&apos;re always balancing hiring speed against utilization.
                  Attrition rates of 15-20% mean you&apos;re replacing a significant portion of your
                  workforce annually.
                </p>
                <p className="font-medium text-ink">
                  LayersRank enables rapid, high-quality evaluation. Screen 500 candidates in a week.
                  Get scored reports within 24 hours. Staff projects with people who&apos;ve actually been
                  evaluated, not just whoever applied first.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">The Conglomerate Challenge</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Large Indian business groups operate across multiple industries: technology,
                  manufacturing, retail, financial services, infrastructure. Each business unit has
                  developed its own hiring practices.
                </p>
                <p>
                  But at the group level, you need visibility. You need to know that &ldquo;strong
                  hire&rdquo; means the same thing across units. You need audit trails when questions
                  arise. You need efficiency gains that compound across the portfolio.
                </p>
                <p className="font-medium text-ink">
                  LayersRank provides consistent infrastructure with configurable evaluation criteria.
                  Same platform, same reporting, same audit trails — but tailored assessment for each
                  business unit&apos;s specific needs.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">The Banking and Financial Services Challenge</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Indian banks and NBFCs hire at volume for branch networks, back-office operations, and
                  increasingly for technology roles. Regulatory scrutiny is intense. RBI examinations,
                  internal audit requirements, and compliance obligations mean every hiring decision needs
                  documentation.
                </p>
                <p className="font-medium text-ink">
                  LayersRank provides the audit trail regulators expect. Every score traces to specific
                  evidence. Every decision is documented. When compliance asks how you evaluated 5,000
                  officer candidates, you have an answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT INDIAN ENTERPRISES NEED ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Enterprise Requirements
          </p>
          <h2 className="mt-4 text-2xl font-bold">What Indian enterprises need</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Consistency Across Locations',
                desc: 'A score of 75 in Hyderabad means the same as a 75 in Kolkata. Every candidate for a given role answers the same questions, evaluated against the same criteria, by models that don\'t vary by location or time of day.',
              },
              {
                title: 'Speed at Scale',
                desc: 'Send assessment links to 1,000 candidates on Monday. Receive scored reports by Friday. Make shortlisting decisions over the weekend. Start final rounds the following week. The limiting factor becomes your final-round capacity, not your first-round screening.',
              },
              {
                title: 'Cost Efficiency',
                desc: 'Traditional first-round screening: ₹1,500-3,000 per candidate. LayersRank assessment: ₹500-1,500 depending on volume. At 10,000 candidates per year, that\'s ₹1-2 crore in direct savings.',
              },
              {
                title: 'Integration With Indian HR Systems',
                desc: 'SAP, Oracle, Workday, or homegrown HRMS. Taleo, SuccessFactors, or something built internally. We integrate with what you have — legacy systems, custom databases, and hybrid environments.',
              },
              {
                title: 'Indian Data Residency',
                desc: 'For regulated industries and organizations with data localization policies, candidate data stays in India. AWS Mumbai region. No data leaves the country. DPDP Act compliance built in.',
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

      {/* ── ENTERPRISE DEPLOYMENT ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Enterprise deployment</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            A phased approach that proves value before scaling.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                phase: 'Phase 1',
                title: 'Pilot',
                timeline: '4-6 weeks',
                items: [
                  '1-2 high-volume roles',
                  '1-2 locations',
                  '500-1,000 candidates',
                  'Parallel evaluation alongside existing process',
                ],
                deliverable: 'Comparison showing consistency improvement, time savings, and stakeholder feedback.',
              },
              {
                phase: 'Phase 2',
                title: 'Business Unit Rollout',
                timeline: '8-12 weeks',
                items: [
                  'All major roles for that unit',
                  'All locations for that unit',
                  'Full integration with unit\'s ATS',
                  'Training for unit\'s hiring managers',
                ],
                deliverable: 'Full deployment for one business unit, documented results.',
              },
              {
                phase: 'Phase 3',
                title: 'Enterprise Expansion',
                timeline: '12-24 weeks',
                items: [
                  'Sequenced by volume and readiness',
                  'Each unit gets tailored configuration',
                  'Cross-unit reporting enabled',
                  'Enterprise-wide analytics dashboard',
                ],
                deliverable: 'Platform operating across all targeted business units.',
              },
              {
                phase: 'Phase 4',
                title: 'Optimization',
                timeline: 'Ongoing',
                items: [
                  'Quarterly reviews with HR leadership',
                  'Question performance analytics',
                  'Score calibration against job performance',
                  'New role development as needs evolve',
                ],
                deliverable: 'Continuous improvement and expanding coverage.',
              },
            ].map((p) => (
              <div key={p.phase} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">{p.phase}</p>
                  <span className="rounded-full bg-brand-yellow/10 px-2 py-0.5 text-xs font-medium text-brand-yellow">
                    {p.timeline}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">{p.title}</h3>
                <ul className="mt-3 space-y-1">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-light">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-ink-muted">
                  <span className="font-semibold">Deliverable:</span> {p.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE SECURITY ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Indian enterprise security</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Data Protection</h3>
              <ul className="mt-4 space-y-2">
                {[
                  'India data residency (AWS Mumbai region)',
                  'Encryption at rest and in transit',
                  'Regular security audits',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Access Control</h3>
              <ul className="mt-4 space-y-2">
                {[
                  'SSO integration (SAML, OAuth)',
                  'Role-based access control',
                  'Multi-factor authentication',
                  'IP restrictions available',
                  'Complete audit logging',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Enterprise IT Requirements</h3>
              <ul className="mt-4 space-y-2">
                {[
                  'We work with your IT security team',
                  'Penetration test reports available',
                  'Vendor security questionnaire completion',
                  'Dedicated security contact for enterprise clients',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE PRICING ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Pricing</p>
          <h2 className="mt-4 text-2xl font-bold">Enterprise pricing</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Volume-based pricing that makes sense at Indian enterprise scale.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Volume Pricing Table */}
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Volume Pricing</h3>
              <div className="mt-6 overflow-hidden rounded-lg border border-gray-600">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600 bg-white/5">
                      <th className="px-4 py-3 text-left text-gray-400">Annual Volume</th>
                      <th className="px-4 py-3 text-right text-gray-400">Per Assessment</th>
                      <th className="px-4 py-3 text-right text-gray-400">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { volume: '5,000 – 10,000', price: '₹1,200', note: 'Standard enterprise' },
                      { volume: '10,000 – 25,000', price: '₹900', note: 'Large enterprise' },
                      { volume: '25,000 – 50,000', price: '₹650', note: 'IT services scale' },
                      { volume: '50,000+', price: 'Custom', note: 'Mega-scale pricing' },
                    ].map((row) => (
                      <tr key={row.volume} className="border-t border-gray-700">
                        <td className="px-4 py-3 text-white">{row.volume}</td>
                        <td className="px-4 py-3 text-right font-bold text-brand-yellow">{row.price}</td>
                        <td className="px-4 py-3 text-right text-gray-400">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-6">
              <div className="rounded-xl border border-brand-yellow/30 bg-white/5 p-6">
                <h3 className="text-lg font-bold">What&apos;s Included at Enterprise Tier</h3>
                <ul className="mt-4 space-y-2">
                  {[
                    'Unlimited role templates',
                    'Dedicated implementation support',
                    'Priority support (4-hour response SLA)',
                    'Custom integrations',
                    'Quarterly business reviews',
                    'India data residency',
                    'SSO and enterprise security',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
                <h3 className="text-lg font-bold">Engagement Model</h3>
                <ul className="mt-4 space-y-2">
                  {[
                    'Annual contract with volume commitment',
                    'Quarterly invoicing in INR',
                    'No per-seat or per-user fees — pay for assessments used',
                    'Pilot program available to prove value before commitment',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Enterprise case studies</h2>

          <div className="mt-10 space-y-8">
            {/* Case Study 1: IT Services */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Large Indian IT Services Company
              </p>
              <p className="mt-2 text-sm text-ink-light">
                One of India&apos;s top-5 IT services companies hiring 15,000+ technology professionals
                annually across 8 Indian cities plus international locations.
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink-muted">The Situation</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>45-day average time from application to offer</li>
                    <li>Different evaluation standards across delivery centers</li>
                    <li>35% offer dropout rate</li>
                    <li>No standardized way to compare candidates across locations</li>
                    <li>Campus hiring consuming enormous leadership time</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-green">LayersRank Implementation</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>23 role templates covering all technology job families</li>
                    <li>Integration with internal HRMS and candidate tracking</li>
                    <li>India data residency for all candidate information</li>
                    <li>Custom analytics dashboard for HR leadership</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  { metric: '60%', label: 'Reduction in time-to-offer (45→18 days)' },
                  { metric: 'First time', label: 'Cross-location consistency measured' },
                  { metric: '37%', label: 'Reduction in offer dropouts (35%→22%)' },
                  { metric: '₹2.1 Cr', label: 'Annual screening cost savings' },
                  { metric: '70%', label: 'Reduction in campus assessment effort' },
                ].map((r) => (
                  <div key={r.label} className="text-center">
                    <p className="text-xl font-extrabold text-brand-yellow">{r.metric}</p>
                    <p className="mt-1 text-xs text-ink-muted">{r.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm italic text-ink-light">
                &ldquo;We went from &lsquo;every delivery center does their own thing&rsquo; to
                &lsquo;one standard, visible everywhere.&rsquo; When someone in Chennai says a candidate
                is strong, Bangalore knows exactly what that means now.&rdquo;
              </p>
              <p className="text-xs text-ink-muted">— HR Director</p>
            </div>

            {/* Case Study 2: Banking */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Indian Private Sector Bank
              </p>
              <p className="mt-2 text-sm text-ink-light">
                A large Indian private sector bank hiring 3,000+ officers and specialists annually
                across branch and back-office roles.
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink-muted">The Situation</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>RBI examination had flagged inconsistent hiring documentation</li>
                    <li>Different zones using different assessment approaches</li>
                    <li>No audit trail connecting hire decisions to evaluation evidence</li>
                    <li>Compliance team unable to demonstrate job-relatedness of criteria</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-green">LayersRank Implementation</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>8 role templates for different officer grades and specializations</li>
                    <li>Integration with existing Oracle HRMS</li>
                    <li>Complete audit trail for every candidate assessment</li>
                    <li>Compliance reporting dashboard</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { metric: 'Complete', label: 'Documentation for every hiring decision' },
                  { metric: 'National', label: 'Same evaluation criteria applied' },
                  { metric: 'Passed', label: 'Next RBI examination, no hiring flags' },
                  { metric: '40%', label: 'Reduction in screening time' },
                ].map((r) => (
                  <div key={r.label} className="text-center">
                    <p className="text-xl font-extrabold text-brand-yellow">{r.metric}</p>
                    <p className="mt-1 text-xs text-ink-muted">{r.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm italic text-ink-light">
                &ldquo;The regulators wanted to see how we evaluated candidates. Before LayersRank, we
                had interview notes that varied wildly. Now we have structured assessments with clear
                scoring. It&apos;s a completely different conversation with auditors.&rdquo;
              </p>
              <p className="text-xs text-ink-muted">— Chief Human Resources Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What Indian enterprise leaders ask</h2>
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
              { href: '/solutions/gcc', title: 'GCC Solutions', desc: 'For Global Capability Centers in India' },
              { href: '/solutions/campus-hiring', title: 'Campus Hiring', desc: 'High-volume graduate recruitment' },
              { href: '/solutions/india', title: 'India', desc: 'Our India-focused approach' },
              { href: '/solutions/technical-hiring', title: 'Technical Hiring', desc: 'Engineering assessment' },
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

      {/* ── Lead Magnet CTA ── */}
      <LeadMagnetCTA type="scorecard" />

      {/* ── FINAL CTA ── */}
      <PageCTA
        title="Ready for Enterprise-Scale Hiring Infrastructure?"
        description="Talk to our enterprise team about your volume, your business units, and your timeline. We'll show you exactly how LayersRank works at Indian enterprise scale."
        cta="Talk to Enterprise Sales"
        ctaHref="/demo"
        secondaryCta="Download Enterprise Overview"
        secondaryCtaHref="/resources"
        variant="gradient"
      />
    </>
  );
}
