import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, ComparisonTable } from '@/components/page-sections';
import { SavingsCalculator } from './savings-calculator';

export const metadata = makeMetadata({
  title: 'LayersRank vs HireVue | HireVue Alternative for India | Comparison 2025',
  description:
    "Compare LayersRank and HireVue for video interviewing. HireVue starts at $35,000/year. LayersRank starts at \u20B92,500/interview with confidence scoring and India focus.",
  path: '/compare/hirevue',
});

export default function CompareHireVuePage() {
  return (
    <>
      <PageHero
        eyebrow="Compare / vs HireVue"
        title="HireVue Pricing Doesn't Make Sense for India"
        description="HireVue costs $35,000-50,000+ per year — built for Fortune 500 US enterprises. LayersRank delivers structured video interviews with confidence scoring starting at ₹2,500 per interview. Same async video capability. Better evaluation methodology. Pricing that works in India."
        primaryCta="Calculate Your Savings"
        primaryCtaHref="#savings-calculator"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      {/* Quick Comparison */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Quick Comparison</h2>

          <div className="mt-10">
            <ComparisonTable
              headers={['Feature', 'HireVue', 'LayersRank']}
              rows={[
                {
                  feature: 'Starting Price',
                  them: '$35,000/year (~₹29 lakh)',
                  us: '₹2,500/interview',
                },
                {
                  feature: 'Pricing Model',
                  them: 'Annual contract, enterprise only',
                  us: 'Pay-per-interview',
                },
                {
                  feature: 'Minimum Commitment',
                  them: '12 months',
                  us: 'None',
                },
                {
                  feature: 'Async Video Interviews',
                  them: '✓',
                  us: '✓',
                },
                {
                  feature: 'AI Scoring',
                  them: 'Proprietary, unexplained',
                  us: 'Confidence-weighted, explainable',
                },
                {
                  feature: 'Confidence Levels',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'Adaptive Follow-Up',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'India Data Residency',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'INR Pricing',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'Indian Market Focus',
                  them: '✗',
                  us: '✓',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Reality Check */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Pricing Reality Check</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* HireVue Pricing */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">HireVue Pricing</h3>
              <p className="mt-3 text-sm text-ink-light">
                HireVue is an enterprise platform with enterprise pricing. According to publicly
                available data from vendor comparison sites (Vendr, GetApp, TrustRadius):
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  Minimum annual cost: $35,000 (~₹29 lakh)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  Average annual cost: $50,000 (~₹42 lakh)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  Maximum reported: $145,000 (~₹1.2 crore)
                </li>
              </ul>
              <p className="mt-4 text-sm text-ink-muted">
                HireVue doesn&rsquo;t publish per-interview pricing. You pay the annual fee
                regardless of how many interviews you conduct.
              </p>
              <div className="mt-4 space-y-2 rounded-lg bg-paper-off p-4">
                <p className="text-sm text-ink-light">
                  <span className="font-medium text-ink">500 interviews/year:</span> $70&ndash;100
                  per interview minimum
                </p>
                <p className="text-sm text-ink-light">
                  <span className="font-medium text-ink">100 interviews/year:</span>{' '}
                  $350&ndash;500 per interview
                </p>
              </div>
            </div>

            {/* LayersRank Pricing */}
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">LayersRank Pricing</h3>
              <p className="mt-3 text-sm text-ink-light">
                Transparent per-interview pricing. No annual commitment. No minimum spend. Pay for
                what you use.
              </p>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-paper-off">
                      <th className="px-4 py-2 text-left font-semibold text-ink">Plan</th>
                      <th className="px-4 py-2 text-left font-semibold text-ink">Per Interview</th>
                      <th className="px-4 py-2 text-left font-semibold text-ink-muted">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Starter</td>
                      <td className="px-4 py-2 font-bold text-brand-yellow">₹2,500</td>
                      <td className="px-4 py-2 text-ink-muted">Up to 25/month</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Growth</td>
                      <td className="px-4 py-2 font-bold text-brand-yellow">₹2,000</td>
                      <td className="px-4 py-2 text-ink-muted">Up to 100/month</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Scale</td>
                      <td className="px-4 py-2 font-bold text-brand-yellow">₹1,500</td>
                      <td className="px-4 py-2 text-ink-muted">Unlimited</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Enterprise</td>
                      <td className="px-4 py-2 font-bold text-brand-yellow">Custom</td>
                      <td className="px-4 py-2 text-ink-muted">Volume discounts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* The Math */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-6">
              <p className="text-sm font-semibold text-ink">For 500 interviews per year:</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-muted">HireVue</span>
                  <span className="font-medium text-ink-muted">₹29+ lakh</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink">LayersRank (Growth)</span>
                  <span className="font-bold text-ink">₹10 lakh</span>
                </div>
                <div className="border-t border-brand-green/30 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-green">You save</span>
                    <span className="text-lg font-extrabold text-brand-green">₹19+ lakh/year</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-6">
              <p className="text-sm font-semibold text-ink">For 100 interviews per year:</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-muted">HireVue</span>
                  <span className="font-medium text-ink-muted">₹29+ lakh</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink">LayersRank (Starter)</span>
                  <span className="font-bold text-ink">₹2.5 lakh</span>
                </div>
                <div className="border-t border-brand-green/30 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-green">You save</span>
                    <span className="text-lg font-extrabold text-brand-green">₹26+ lakh/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section id="savings-calculator" className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Savings Calculator</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Calculate your potential savings by switching from HireVue to LayersRank.
          </p>

          <div className="mt-10">
            <SavingsCalculator />
          </div>
        </div>
      </section>

      {/* What HireVue Does Well */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What HireVue Does Well</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Let&rsquo;s be fair about where HireVue excels.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Market Leadership</h3>
              <p className="mt-2 text-sm text-ink-light">
                HireVue pioneered video interviewing. They&rsquo;ve been in market since 2004 and
                have served Fortune 100 companies for over two decades. They have deep enterprise
                experience and understand large-scale deployment.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Scale and Reliability</h3>
              <p className="mt-2 text-sm text-ink-light">
                HireVue handles massive interview volumes across 180+ countries. Their
                infrastructure is battle-tested. If you&rsquo;re a global enterprise conducting
                hundreds of thousands of interviews, they&rsquo;ve proven they can handle it.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Enterprise Features</h3>
              <p className="mt-2 text-sm text-ink-light">
                HireVue offers full enterprise capabilities: SSO, advanced integrations, compliance
                certifications, and dedicated support. For US-based Fortune 500 companies, they
                check all the procurement boxes.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Game-Based Assessments</h3>
              <p className="mt-2 text-sm text-ink-light">
                HireVue offers psychometric games that assess cognitive abilities through interactive
                exercises. This is a different approach than text or video responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where LayersRank Is Different */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Key Differences
          </p>
          <h2 className="mt-4 text-2xl font-bold">Where LayersRank Is Different</h2>

          <div className="mt-10 space-y-8">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                Confidence Scoring, Not Just Scores
              </h3>
              <p className="mt-3 text-gray-300">
                HireVue produces scores. LayersRank produces scores with confidence levels.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    HireVue
                  </p>
                  <p className="mt-2 font-mono text-gray-300">
                    &ldquo;This candidate scored 74.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-brand-yellow/30 bg-brand-yellow/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                    LayersRank
                  </p>
                  <p className="mt-2 font-mono text-white">
                    &ldquo;This candidate scored 74 &plusmn; 4, 89% confidence.&rdquo;
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                The difference matters. A 74 where models strongly agree is reliable. A 74 where
                models disagree is shaky. You need to know which you&rsquo;re dealing with. HireVue
                doesn&rsquo;t tell you. LayersRank does.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">Explainable Evaluation</h3>
              <p className="mt-3 text-gray-300">
                HireVue&rsquo;s AI is proprietary and largely unexplained. They produce scores, but
                explaining exactly why a candidate received a particular score is difficult.
              </p>
              <p className="mt-3 text-gray-300">
                LayersRank is fully explainable. Every score traces to specific evidence. You can see
                which questions contributed, how each model evaluated responses, and why the final
                number is what it is.
              </p>
              <p className="mt-3 text-sm text-gray-400">
                This matters for compliance, for candidate feedback, and for improving your hiring
                process.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">Adaptive Follow-Up</h3>
              <p className="mt-3 text-gray-300">
                HireVue delivers static assessments. Every candidate answers the same questions and
                that&rsquo;s it.
              </p>
              <p className="mt-3 text-gray-300">
                LayersRank detects uncertainty. When our models disagree about a response, we
                generate a targeted follow-up question to clarify. This resolves ambiguity and
                produces more reliable scores.
              </p>
              <p className="mt-3 text-sm text-gray-400">
                Static interviews can&rsquo;t probe ambiguous responses. Adaptive interviews can.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">India-First Design</h3>
              <p className="mt-3 text-gray-300">
                HireVue is built for US enterprises and adapted for other markets. LayersRank is
                built for India:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  INR pricing that makes sense for Indian economics
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  India data residency
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  Question libraries reflecting Indian engineering curriculum
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  Understanding of Indian hiring patterns (college tiers, notice periods, offer
                  dynamics)
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                This isn&rsquo;t localization. It&rsquo;s native design for the Indian market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Feature Deep-Dive</h2>

          <div className="mt-10 space-y-10">
            {/* Video Interview Capabilities */}
            <div>
              <h3 className="text-lg font-bold text-ink">Video Interview Capabilities</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Both platforms handle core video interviewing well. The differences are in evaluation
                methodology, not video capture.
              </p>
              <div className="mt-4">
                <ComparisonTable
                  headers={['Capability', 'HireVue', 'LayersRank']}
                  rows={[
                    {
                      feature: 'Async (on-demand) interviews',
                      them: '✓',
                      us: '✓',
                    },
                    {
                      feature: 'Live interviews',
                      them: '✓',
                      us: 'Roadmap',
                    },
                    { feature: 'Mobile-friendly', them: '✓', us: '✓' },
                    {
                      feature: 'Candidate retakes',
                      them: '✓ (configurable)',
                      us: '✓ (configurable)',
                    },
                    { feature: 'Time limits', them: '✓', us: '✓' },
                    { feature: 'Practice mode', them: '✓', us: '✓' },
                  ]}
                />
              </div>
            </div>

            {/* AI and Scoring */}
            <div>
              <h3 className="text-lg font-bold text-ink">AI and Scoring</h3>
              <p className="mt-2 text-sm text-ink-muted">
                LayersRank&rsquo;s evaluation methodology is fundamentally different &mdash; and we
                believe better.
              </p>
              <div className="mt-4">
                <ComparisonTable
                  headers={['Capability', 'HireVue', 'LayersRank']}
                  rows={[
                    { feature: 'AI-powered scoring', them: '✓', us: '✓' },
                    { feature: 'Confidence levels', them: '✗', us: '✓' },
                    { feature: 'Score intervals', them: '✗', us: '✓' },
                    { feature: 'Multi-model evaluation', them: 'Unknown', us: '✓' },
                    { feature: 'Explainable scores', them: 'Limited', us: 'Full' },
                    { feature: 'Adaptive questioning', them: '✗', us: '✓' },
                  ]}
                />
              </div>
            </div>

            {/* Text and MCQ */}
            <div>
              <h3 className="text-lg font-bold text-ink">Text and MCQ Questions</h3>
              <p className="mt-2 text-sm text-ink-muted">
                HireVue is primarily a video platform. LayersRank treats video, text, and MCQ as
                equal question types with appropriate evaluation for each.
              </p>
              <div className="mt-4">
                <ComparisonTable
                  headers={['Capability', 'HireVue', 'LayersRank']}
                  rows={[
                    { feature: 'Text-based responses', them: 'Limited', us: 'Full' },
                    { feature: 'MCQ questions', them: 'Limited', us: 'Full' },
                    { feature: 'Mixed question types', them: 'Limited', us: 'Full' },
                  ]}
                />
              </div>
            </div>

            {/* Integrations */}
            <div>
              <h3 className="text-lg font-bold text-ink">Integrations</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Both platforms integrate with major ATS systems. HireVue has more integrations
                overall due to longer market presence.
              </p>
              <div className="mt-4">
                <ComparisonTable
                  headers={['System', 'HireVue', 'LayersRank']}
                  rows={[
                    { feature: 'Workday', them: '✓', us: '✓' },
                    { feature: 'SAP SuccessFactors', them: '✓', us: '✓' },
                    { feature: 'Oracle Taleo', them: '✓', us: '✓' },
                    { feature: 'Greenhouse', them: '✓', us: '✓' },
                    { feature: 'Lever', them: '✓', us: '✓' },
                    { feature: 'Custom API', them: '✓', us: '✓' },
                  ]}
                />
              </div>
            </div>

            {/* Compliance and Security */}
            <div>
              <h3 className="text-lg font-bold text-ink">Compliance and Security</h3>
              <div className="mt-4">
                <ComparisonTable
                  headers={['Certification', 'HireVue', 'LayersRank']}
                  rows={[
                    { feature: 'SOC 2 Type II', them: '✓', us: '✓' },
                    { feature: 'ISO 27001', them: '✓', us: 'Aligned' },
                    { feature: 'GDPR', them: '✓', us: '✓' },
                    { feature: 'FedRAMP', them: '✓', us: '✗' },
                    { feature: 'India Data Residency', them: '✗', us: '✓' },
                  ]}
                />
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                HireVue has FedRAMP certification for US government work. LayersRank has India data
                residency for Indian compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use What */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Who Should Use HireVue</h3>
              <p className="mt-3 text-sm text-ink-light">
                HireVue may be the right choice if:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                  You&rsquo;re a US-based Fortune 500 company with a $50K+ annual budget for video
                  interviewing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                  You need FedRAMP certification for government contracts
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                  You&rsquo;re already integrated with HireVue and switching costs are high
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                  You conduct 10,000+ interviews annually and need proven massive-scale
                  infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                  You primarily hire in the US and Europe
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Who Should Use LayersRank</h3>
              <p className="mt-3 text-sm text-ink-light">
                LayersRank is the right choice if:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  You&rsquo;re hiring in India (GCC, startup, enterprise, or agency)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  You want per-interview pricing without annual commitments
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  You need confidence levels, not just scores
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  You want explainable AI you can audit and understand
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  You need India data residency
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  You&rsquo;re conducting 50&ndash;5,000 interviews per year
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  You can&rsquo;t justify $35,000+ annual spend for video interviewing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Switching from HireVue */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Switching from HireVue</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            If you&rsquo;re currently using HireVue and considering LayersRank:
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold text-ink">Migration Path</h3>
              <div className="mt-4 space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-sm font-bold text-brand-yellow">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-ink">Parallel pilot</p>
                    <p className="text-sm text-ink-light">
                      Run LayersRank alongside HireVue for 2&ndash;3 months
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-sm font-bold text-brand-yellow">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-ink">Compare results</p>
                    <p className="text-sm text-ink-light">
                      See how LayersRank assessments align with your hiring outcomes
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-sm font-bold text-brand-yellow">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-ink">Gradual transition</p>
                    <p className="text-sm text-ink-light">
                      Move roles one at a time as your HireVue contract allows
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-sm font-bold text-brand-yellow">
                    4
                  </div>
                  <div>
                    <p className="font-medium text-ink">Full switch</p>
                    <p className="text-sm text-ink-light">
                      Transition completely when contract renews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">What Transfers</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Question concepts (you&rsquo;ll rebuild in LayersRank format)
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Role definitions and competency frameworks
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Integration patterns with your ATS
                </li>
              </ul>

              <h3 className="mt-8 text-lg font-bold text-ink">What Doesn&rsquo;t Transfer</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Historical interview data (stays in HireVue)
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  HireVue-specific question formats
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Game-based assessment content
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">Timeline</h3>
              <div className="mt-4 rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="text-sm text-ink-light">
                  Most organizations can run a meaningful LayersRank pilot within{' '}
                  <span className="font-semibold text-ink">4 weeks</span>.
                </p>
                <p className="mt-3 text-sm text-ink-light">
                  Full transition typically happens at{' '}
                  <span className="font-semibold text-ink">HireVue contract renewal</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Frequently Asked Questions</h2>

          <div className="mt-8 max-w-3xl divide-y divide-gray-200">
            {[
              {
                q: 'Is LayersRank as reliable as HireVue at scale?',
                a: "LayersRank is designed for GCC and enterprise scale (5,000-50,000 interviews/year). We may not yet match HireVue's proven capacity for 100,000+ concurrent candidates, but for typical Indian enterprise volumes, we scale well.",
              },
              {
                q: 'Can LayersRank do everything HireVue does?',
                a: "Not everything. HireVue has features we don't (live interviews, game-based assessments, 20 years of enterprise features). We have features they don't (confidence scoring, adaptive follow-up, India data residency). The question is which features matter for your use case.",
              },
              {
                q: 'Why is LayersRank so much cheaper?',
                a: 'Different market focus, different cost structure. HireVue prices for US enterprise procurement with high-touch sales and support. LayersRank prices for Indian market economics with efficient operations. We\'re not "cheap HireVue" — we\'re appropriately priced for our market.',
              },
              {
                q: 'What if I need live interviews?',
                a: 'Live interviewing is on our roadmap. Currently, we focus on async interviews which handle most first-round use cases. If you need live technical interviews now, consider pairing LayersRank (first-round) with a live interview tool (final rounds).',
              },
              {
                q: 'How do I convince my procurement team to switch?',
                a: 'Start with the cost comparison. ₹19-32 lakh annual savings gets attention. Then demonstrate value through a pilot. Procurement teams respond to evidence.',
              },
            ].map((faq) => (
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
                <p className="mt-3 text-[15px] leading-relaxed text-ink-light">{faq.a}</p>
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
            <Link
              href="/compare/hackerrank"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              vs HackerRank &rarr;
            </Link>
            <Link
              href="/compare/codility"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              vs Codility &rarr;
            </Link>
            <Link
              href="/science/confidence-scoring"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Confidence Scoring &rarr;
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PageCTA
        title="Pay for Interviews, Not Enterprise Contracts"
        description="Calculate your savings and see how LayersRank compares. No commitment required."
        cta="Calculate Your Savings"
        ctaHref="#savings-calculator"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
