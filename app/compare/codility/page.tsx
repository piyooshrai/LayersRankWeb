import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, ComparisonTable } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'LayersRank vs Codility | Technical Screening Comparison 2025',
  description:
    'Codility tests coding execution. LayersRank evaluates engineering capability. Compare technical screening approaches, pricing, and coverage for hiring engineers.',
  path: '/compare/codility',
});

export default function CompareCodilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare / vs Codility"
        title="Technical Screening Should Test More Than Code Execution"
        description="Codility tells you if candidates can solve algorithm problems. LayersRank tells you if they can design systems, debug production issues, and communicate technical decisions. Same goal — hiring great engineers. Different approach."
        primaryCta="Compare Approaches"
        primaryCtaHref="#quick-comparison"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      {/* Quick Comparison */}
      <section id="quick-comparison" className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Quick Comparison</h2>

          <div className="mt-10">
            <ComparisonTable
              headers={['Aspect', 'Codility', 'LayersRank']}
              rows={[
                {
                  feature: 'Starting Price',
                  them: '$1,200/year (120 invites)',
                  us: '₹2,500/interview (~$30)',
                },
                {
                  feature: 'Pricing Model',
                  them: 'Annual subscription + invites',
                  us: 'Per-interview',
                },
                {
                  feature: 'What it measures',
                  them: 'Code execution, algorithms',
                  us: 'Full engineering capability',
                },
                {
                  feature: 'Question types',
                  them: 'Coding tasks, MCQ',
                  us: 'Video, text, MCQ',
                },
                {
                  feature: 'System design',
                  them: 'Limited',
                  us: '✓ Full',
                },
                {
                  feature: 'Behavioral assessment',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'Communication skills',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'Confidence scoring',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'Adaptive follow-up',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'Live interviews',
                  them: '✓ (CodeLive)',
                  us: 'Roadmap',
                },
                {
                  feature: 'India data residency',
                  them: '✗',
                  us: '✓',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Pricing Breakdown</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Codility Pricing */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Codility Pricing (Published 2025)</h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-paper-off">
                      <th className="px-4 py-2 text-left font-semibold text-ink">Plan</th>
                      <th className="px-4 py-2 text-left font-semibold text-ink">Annual Cost</th>
                      <th className="px-4 py-2 text-left font-semibold text-ink">Includes</th>
                      <th className="px-4 py-2 text-left font-semibold text-ink-muted">
                        Per-Invite
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Starter</td>
                      <td className="px-4 py-2 text-ink">$1,200</td>
                      <td className="px-4 py-2 text-ink-muted">120 invites, 1 user</td>
                      <td className="px-4 py-2 text-ink-muted">$10.00</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Scale</td>
                      <td className="px-4 py-2 text-ink">$5,000&ndash;6,000</td>
                      <td className="px-4 py-2 text-ink-muted">25/mo (300/yr), 3 users</td>
                      <td className="px-4 py-2 text-ink-muted">$16.67&ndash;20.00</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Custom</td>
                      <td className="px-4 py-2 text-ink">Negotiated</td>
                      <td className="px-4 py-2 text-ink-muted">Unlimited invites</td>
                      <td className="px-4 py-2 text-ink-muted">Varies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-1 text-sm text-ink-muted">
                <p>Unused invites expire (no rollover)</p>
                <p>SSO, premium proctoring require Custom plan</p>
                <p>1 invite = 1 candidate assessment</p>
              </div>
            </div>

            {/* LayersRank Pricing */}
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">LayersRank Pricing</h3>
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
                      <td className="px-4 py-2 font-bold text-brand-yellow">₹2,500 (~$30)</td>
                      <td className="px-4 py-2 text-ink-muted">Up to 25/month</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Growth</td>
                      <td className="px-4 py-2 font-bold text-brand-yellow">₹2,000 (~$24)</td>
                      <td className="px-4 py-2 text-ink-muted">Up to 100/month</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Scale</td>
                      <td className="px-4 py-2 font-bold text-brand-yellow">₹1,500 (~$18)</td>
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
              <p className="mt-4 text-sm font-medium text-ink">
                No annual commitment. No expiring invites. Pay for what you use.
              </p>
            </div>
          </div>

          {/* Cost Comparison Scenarios */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-ink">Cost Comparison by Volume</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* Scenario 1 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Small Team
                </p>
                <p className="mt-1 text-lg font-bold text-ink">100 assessments/year</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm text-ink-muted">Codility (Starter)</p>
                    <p className="text-lg font-bold text-ink">$1,200/year</p>
                    <p className="text-xs text-ink-muted">$12/assessment &middot; 20 invites wasted</p>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-sm text-brand-yellow">LayersRank (Starter)</p>
                    <p className="text-lg font-bold text-ink">~$3,000/year</p>
                    <p className="text-xs text-ink-muted">~$30/assessment &middot; complete evaluation</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-paper-off p-3">
                  <p className="text-xs text-ink-light">
                    <span className="font-medium text-ink">Verdict:</span> Codility cheaper for
                    coding-only. LayersRank includes behavioral + system design.
                  </p>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Growing Team
                </p>
                <p className="mt-1 text-lg font-bold text-ink">300 assessments/year</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm text-ink-muted">Codility (Scale)</p>
                    <p className="text-lg font-bold text-ink">$5,000&ndash;6,000/year</p>
                    <p className="text-xs text-ink-muted">$17&ndash;20/assessment</p>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-sm text-brand-yellow">LayersRank (Growth)</p>
                    <p className="text-lg font-bold text-ink">~$7,200/year</p>
                    <p className="text-xs text-ink-muted">~$24/assessment &middot; complete evaluation</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-paper-off p-3">
                  <p className="text-xs text-ink-light">
                    <span className="font-medium text-ink">Verdict:</span> Similar cost per
                    assessment. LayersRank provides complete evaluation vs. coding-only.
                  </p>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  High Volume
                </p>
                <p className="mt-1 text-lg font-bold text-ink">1,000 assessments/year</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm text-ink-muted">Codility (Custom)</p>
                    <p className="text-lg font-bold text-ink">$15,000&ndash;25,000+/year</p>
                    <p className="text-xs text-ink-muted">$15&ndash;25/assessment</p>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-sm text-brand-yellow">LayersRank (Scale)</p>
                    <p className="text-lg font-bold text-ink">~$18,000/year</p>
                    <p className="text-xs text-ink-muted">~$18/assessment &middot; complete evaluation</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-paper-off p-3">
                  <p className="text-xs text-ink-light">
                    <span className="font-medium text-ink">Verdict:</span> Comparable pricing at
                    scale. LayersRank delivers more complete assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Codility Does Well */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What Codility Does Well</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Code Execution Testing</h3>
              <p className="mt-2 text-sm text-ink-light">
                Codility&rsquo;s core strength is testing whether candidates can write working code.
                Their library includes 1,800+ coding challenges across algorithms, data structures,
                and specific technology domains. Candidates write real code in a real IDE. The code
                runs against test cases. Clear signal: does this person&rsquo;s code work?
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Live Technical Interviews (CodeLive)</h3>
              <p className="mt-2 text-sm text-ink-light">
                Codility&rsquo;s CodeLive product provides a shared coding environment for live
                technical interviews. Interviewer and candidate can see the same IDE, collaborate on
                problems, and communicate via video. Useful for final-round technical deep-dives.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Proctoring and Integrity</h3>
              <p className="mt-2 text-sm text-ink-light">
                Codility offers plagiarism detection, browser lockdown, and AI-assisted proctoring to
                ensure candidates complete assessments independently.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Established Enterprise Presence</h3>
              <p className="mt-2 text-sm text-ink-light">
                Companies like Tesla, Unity, and Zalando use Codility. They&rsquo;ve proven their
                platform works at scale for technical hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Codility Falls Short */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Gaps
          </p>
          <h2 className="mt-4 text-2xl font-bold">Where Codility Falls Short</h2>

          <div className="mt-10 space-y-6">
            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
                <svg
                  className="h-5 w-5 text-brand-red"
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
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Coding Only</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Codility is a coding assessment platform. It doesn&rsquo;t evaluate system design
                  capability, technical communication, behavioral competencies, collaboration
                  patterns, debugging methodology, or trade-off reasoning. You get signal on one
                  dimension (code writing) and nothing on others.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
                <svg
                  className="h-5 w-5 text-brand-red"
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
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">No Soft Skills Assessment</h3>
                <p className="mt-2 text-sm text-gray-300">
                  From Codility&rsquo;s own marketing: they focus on &ldquo;technical skills.&rdquo;
                  That&rsquo;s not a criticism &mdash; it&rsquo;s their scope. But engineering
                  effectiveness requires skills beyond code execution.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
                <svg
                  className="h-5 w-5 text-brand-red"
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
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">No Confidence Scoring</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Codility tells you a candidate scored 78%. It doesn&rsquo;t tell you how confident
                  that score is, whether their evaluators agreed, or where ambiguity exists.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
                <svg
                  className="h-5 w-5 text-brand-red"
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
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Invite Expiration</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Unused Codility invites expire at the end of your billing cycle. If your hiring is
                  seasonal or unpredictable, you may pay for capacity you don&rsquo;t use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What LayersRank Does Differently */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What LayersRank Does Differently</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <h3 className="text-lg font-bold text-ink">Complete Engineer Evaluation</h3>
              <p className="mt-2 text-sm text-ink-light">
                LayersRank assesses across three dimensions:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-white p-3">
                  <p className="text-sm font-medium text-ink">Technical</p>
                  <p className="text-xs text-ink-muted">
                    System design, debugging approach, technical depth, trade-off reasoning
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="text-sm font-medium text-ink">Behavioral</p>
                  <p className="text-xs text-ink-muted">
                    Collaboration, communication, feedback response, conflict navigation
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="text-sm font-medium text-ink">Contextual</p>
                  <p className="text-xs text-ink-muted">
                    Role understanding, motivation, career trajectory
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-ink">
                One assessment, complete picture.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Video and Text Responses</h3>
              <p className="mt-2 text-sm text-ink-light">
                LayersRank supports video, text, and MCQ question types. This allows evaluation of
                communication skills, not just code execution.
              </p>
              <p className="mt-3 text-sm text-ink-light">
                When someone explains their system design approach on video, you learn things you
                can&rsquo;t learn from test case pass rates.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Confidence-Weighted Scoring</h3>
              <p className="mt-2 text-sm text-ink-light">
                LayersRank doesn&rsquo;t just produce scores. It produces scores with confidence
                intervals.
              </p>
              <div className="mt-3 rounded-lg bg-paper-off p-3">
                <p className="font-mono text-sm text-ink">
                  &ldquo;Technical: 78 &plusmn; 4, 89% confidence&rdquo;
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  tells you much more than &ldquo;Technical: 78%&rdquo;
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Adaptive Follow-Up</h3>
              <p className="mt-2 text-sm text-ink-light">
                When LayersRank detects ambiguity (models disagree about a response), it generates
                targeted follow-up questions. This resolves uncertainty and produces more reliable
                assessments. Codility delivers static assessments &mdash; every candidate gets the
                same questions regardless of how they respond.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 md:col-span-2">
              <h3 className="text-lg font-bold text-ink">Pay-Per-Use Pricing</h3>
              <p className="mt-2 text-sm text-ink-light">
                No annual subscription. No expiring invites. Pay for the interviews you conduct. If
                you hire less one month, you pay less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Feature Comparison Matrix</h2>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-lg font-bold text-ink">Assessment Capabilities</h3>
              <div className="mt-4">
                <ComparisonTable
                  headers={['Capability', 'Codility', 'LayersRank']}
                  rows={[
                    {
                      feature: 'Coding execution tests',
                      them: '✓ Full (1,800+ challenges)',
                      us: 'MCQ only',
                    },
                    {
                      feature: 'System design assessment',
                      them: 'Limited',
                      us: '✓ Full',
                    },
                    { feature: 'Video responses', them: '✗', us: '✓' },
                    { feature: 'Text responses', them: 'Limited', us: '✓ Full' },
                    { feature: 'MCQ questions', them: '✓', us: '✓' },
                    { feature: 'Behavioral assessment', them: '✗', us: '✓' },
                    {
                      feature: 'Communication evaluation',
                      them: '✗',
                      us: '✓',
                    },
                    { feature: 'Adaptive questioning', them: '✗', us: '✓' },
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">Evaluation Quality</h3>
              <div className="mt-4">
                <ComparisonTable
                  headers={['Feature', 'Codility', 'LayersRank']}
                  rows={[
                    { feature: 'AI-powered scoring', them: '✓', us: '✓' },
                    { feature: 'Confidence levels', them: '✗', us: '✓' },
                    { feature: 'Score intervals', them: '✗', us: '✓' },
                    { feature: 'Explainable scores', them: 'Limited', us: 'Full' },
                    { feature: 'Multi-model evaluation', them: '✗', us: '✓' },
                    { feature: 'Plagiarism detection', them: '✓', us: '✓' },
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">Platform Features</h3>
              <div className="mt-4">
                <ComparisonTable
                  headers={['Feature', 'Codility', 'LayersRank']}
                  rows={[
                    { feature: 'Live interviews', them: '✓ CodeLive', us: 'Roadmap' },
                    { feature: 'Async interviews', them: 'Limited', us: '✓ Full' },
                    { feature: 'ATS integrations', them: '✓ 40+', us: '✓ Major ATSs' },
                    { feature: 'API access', them: '✓', us: '✓' },
                    { feature: 'Custom branding', them: '✓', us: '✓' },
                    { feature: 'SSO', them: 'Custom plan', us: 'Enterprise' },
                  ]}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use Case Comparison */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Use Case Comparison</h2>

          <div className="mt-10 space-y-6">
            {[
              {
                title: 'Hiring Junior Developers (Algorithm-Heavy)',
                codility: {
                  verdict: 'Strong choice',
                  points: [
                    'Tests algorithm implementation directly',
                    'Clear pass/fail signal',
                    'Lower cost per assessment',
                  ],
                },
                layersrank: {
                  verdict: 'Adequate',
                  points: [
                    'Tests reasoning about algorithms',
                    'Nuanced assessment',
                    'Higher cost, more coverage',
                  ],
                },
                recommendation:
                  'Codility if you want pure coding filter. LayersRank if you also want behavioral signal.',
              },
              {
                title: 'Hiring Senior Engineers (System Design + Leadership)',
                codility: {
                  verdict: 'Limited coverage',
                  points: [
                    'Coding tests less relevant',
                    'No behavioral assessment',
                    'No communication evaluation',
                  ],
                },
                layersrank: {
                  verdict: 'Strong choice',
                  points: [
                    'System design focus',
                    'Full behavioral coverage',
                    'Communication assessed',
                  ],
                },
                recommendation:
                  "LayersRank. Senior roles require skills Codility doesn't measure.",
              },
              {
                title: 'Hiring Full-Stack Engineers (Breadth)',
                codility: {
                  verdict: 'Good for coding verification',
                  points: [
                    'Multiple language support',
                    'Test case validation',
                  ],
                },
                layersrank: {
                  verdict: 'Good for complete picture',
                  points: [
                    'Role-based assessment',
                    'Reasoning evaluation',
                  ],
                },
                recommendation:
                  'Consider both — Codility for coding verification, LayersRank for complete assessment.',
              },
              {
                title: 'Campus Hiring (High Volume)',
                codility: {
                  verdict: 'Efficient coding filter',
                  points: ['Low cost per test', 'Scale proven'],
                },
                layersrank: {
                  verdict: 'Complete graduate assessment',
                  points: ['Higher cost, more signal', 'Scale proven'],
                },
                recommendation:
                  'Codility as filter → LayersRank for qualified candidates.',
              },
            ].map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-ink">{useCase.title}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-paper-off p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Codility &mdash; {useCase.codility.verdict}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {useCase.codility.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-ink-light">
                          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-brand-yellow/20 bg-brand-yellow/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                      LayersRank &mdash; {useCase.layersrank.verdict}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {useCase.layersrank.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-ink-light">
                          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  <span className="font-medium text-ink">Recommendation:</span>{' '}
                  <span className="text-ink-light">{useCase.recommendation}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Approach */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Best of Both
          </p>
          <h2 className="mt-4 text-2xl font-bold">Combined Approach</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            Many organizations use Codility and LayersRank together:
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow/10 text-sm font-bold text-brand-yellow">
                1
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">Codility Coding Screen</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>Quick coding test</li>
                <li>Filter candidates who can&rsquo;t code at all</li>
                <li>Low cost, high throughput</li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow/20 text-sm font-bold text-brand-yellow">
                2
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">
                LayersRank Complete Assessment
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-300">
                <li>Full evaluation of coding-qualified candidates</li>
                <li>Technical depth, behavioral, contextual</li>
                <li>Confidence-weighted scores</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-gray-700 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white">The Economics</h3>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p>
                1,000 applicants &rarr; 400 pass Codility coding filter ($10 &times; 1,000 =
                $10,000)
              </p>
              <p>
                &rarr; 400 complete LayersRank assessment (₹1,500 &times; 400 = ₹6,00,000 =
                ~$7,200)
              </p>
              <p className="mt-2 font-medium text-white">
                Total: ~$17,200 for complete assessment funnel
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white/5 p-4">
                <p className="text-sm font-medium text-brand-yellow">
                  When combined approach makes sense:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-300">
                  <li>Very high application volume</li>
                  <li>Roles where coding ability is table stakes</li>
                  <li>Budget allows for two-stage assessment</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white/5 p-4">
                <p className="text-sm font-medium text-gray-400">
                  When single tool makes sense:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-300">
                  <li>Moderate volume where efficiency matters</li>
                  <li>Complete assessment in single step preferred</li>
                  <li>Budget constraints require choosing one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switching from Codility */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Switching from Codility</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            If you&rsquo;re currently using Codility and considering LayersRank:
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold text-ink">What You&rsquo;re Adding</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                {[
                  'Behavioral assessment',
                  'Communication evaluation',
                  'System design depth',
                  'Confidence scoring',
                  'Adaptive follow-up',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">What You&rsquo;re Changing</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                {[
                  'From timed coding execution to video/text responses',
                  'From test case pass/fail to AI evaluation',
                  'From invite subscription to per-interview pricing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">What You&rsquo;re Trading Off</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                {[
                  'Less emphasis on algorithm implementation',
                  'No live coding environment (yet)',
                  'Different candidate experience',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 max-w-3xl rounded-xl border border-gray-200 bg-paper-off p-6">
            <h3 className="text-lg font-bold text-ink">Migration Approach</h3>
            <div className="mt-4 space-y-3">
              {[
                'Run parallel pilot for 2-3 months',
                'Compare outcomes (hire quality, candidate feedback)',
                'Decide on combined vs. replacement approach',
                'Adjust based on results',
              ].map((step, i) => (
                <div key={step} className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-xs font-bold text-brand-yellow">
                    {i + 1}
                  </div>
                  <p className="text-sm text-ink-light">{step}</p>
                </div>
              ))}
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
                q: 'Does LayersRank test if candidates can actually write code?',
                a: "Not with timed code execution. We assess coding knowledge through MCQ and text questions about code behavior, optimization, and best practices. If you need to verify actual code writing, pair with Codility or add a coding exercise to final rounds.",
              },
              {
                q: 'Is Codility better for pure technical screening?',
                a: "For coding execution specifically, yes. Codility's strength is verifying that code works. LayersRank's strength is evaluating whether someone can think like an engineer. These overlap but aren't identical.",
              },
              {
                q: 'Which has better candidate experience?',
                a: 'Different, not better or worse. Some candidates prefer coding tests (familiar, clear expectations). Some prefer video interviews (feel evaluated on real skills). Candidate feedback on both is mixed.',
              },
              {
                q: 'Can I use both tools?',
                a: 'Yes. Many organizations use Codility for initial coding filter and LayersRank for complete assessment. The tools complement rather than conflict.',
              },
              {
                q: 'Which is better for non-engineering technical roles?',
                a: "LayersRank. Data analysts, product managers with technical background, technical writers — these roles require skills Codility doesn't measure.",
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
              href="/compare/hirevue"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              vs HireVue &rarr;
            </Link>
            <Link
              href="/solutions/technical-hiring"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Technical Hiring &rarr;
            </Link>
            <Link
              href="/product/confidence-scoring"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Confidence Scoring &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PageCTA
        title="Technical Screening That Goes Beyond Code"
        description="See how LayersRank evaluates system thinking, communication, and collaboration alongside technical skills."
        cta="See Sample Assessment"
        ctaHref="/demo"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
