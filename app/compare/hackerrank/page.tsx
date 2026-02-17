import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, ComparisonTable } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'LayersRank vs HackerRank | Beyond Coding Tests | Comparison 2025',
  description:
    "HackerRank tests if candidates can code. LayersRank evaluates if they can think, communicate, and solve real problems. Compare coding tests vs. full-stack candidate evaluation.",
  path: '/compare/hackerrank',
});

export default function CompareHackerRankPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare / vs HackerRank"
        title="Coding Tests Don't Tell You If Someone Can Engineer"
        description="HackerRank tells you if candidates can write code that passes test cases. It doesn't tell you if they can design systems, debug production issues, communicate technical decisions, or collaborate with a team. LayersRank evaluates the complete engineer."
        primaryCta="See the Difference"
        primaryCtaHref="#fundamental-difference"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      {/* The Fundamental Difference */}
      <section id="fundamental-difference" className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Fundamental Difference</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            HackerRank and LayersRank solve different problems.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                HackerRank answers
              </p>
              <p className="mt-2 text-xl font-bold text-ink">Can this person write code?</p>
            </div>
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
                LayersRank answers
              </p>
              <p className="mt-2 text-xl font-bold text-ink">
                Can this person be an effective engineer?
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="text-ink-light">
              These are not the same question.
            </p>
            <p className="mt-4 text-ink-light">
              Writing code is a necessary skill for engineering roles. But it&rsquo;s not sufficient.
              The engineers who struggle on your team usually aren&rsquo;t struggling because they
              can&rsquo;t code. They struggle because they can&rsquo;t:
            </p>
            <ul className="mt-4 space-y-2 text-ink-light">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                Break down ambiguous problems into tractable pieces
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                Design systems that scale and don&rsquo;t fall over
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                Communicate technical decisions to non-technical stakeholders
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                Incorporate feedback without getting defensive
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                Debug issues they&rsquo;ve never seen before using systematic approaches
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                Make trade-offs when there&rsquo;s no perfect answer
              </li>
            </ul>
            <p className="mt-4 font-medium text-ink">
              HackerRank doesn&rsquo;t measure any of this. LayersRank does.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Quick Comparison</h2>

          <div className="mt-10">
            <ComparisonTable
              headers={['Aspect', 'HackerRank', 'LayersRank']}
              rows={[
                {
                  feature: 'What it measures',
                  them: 'Code execution',
                  us: 'Engineering capability',
                },
                {
                  feature: 'Question types',
                  them: 'Coding challenges, MCQ',
                  us: 'Video, text, MCQ, coding',
                },
                {
                  feature: 'Evaluation method',
                  them: 'Test case pass/fail',
                  us: 'Multi-model AI with confidence',
                },
                {
                  feature: 'Communication assessed',
                  them: '✗',
                  us: '✓',
                },
                {
                  feature: 'System design assessed',
                  them: 'Limited',
                  us: '✓',
                },
                {
                  feature: 'Behavioral competencies',
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
                  feature: 'Pricing model',
                  them: 'Per-attempt subscription',
                  us: 'Per-interview',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Pricing Comparison</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* HackerRank Pricing */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">HackerRank Pricing (Published)</h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-paper-off">
                      <th className="px-4 py-2 text-left font-semibold text-ink">Plan</th>
                      <th className="px-4 py-2 text-left font-semibold text-ink">Monthly</th>
                      <th className="px-4 py-2 text-left font-semibold text-ink">Annual</th>
                      <th className="px-4 py-2 text-left font-semibold text-ink-muted">Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Starter</td>
                      <td className="px-4 py-2 text-ink">$199</td>
                      <td className="px-4 py-2 text-ink">$1,990</td>
                      <td className="px-4 py-2 text-ink-muted">120 attempts/year</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Pro</td>
                      <td className="px-4 py-2 text-ink">$449</td>
                      <td className="px-4 py-2 text-ink">$4,490</td>
                      <td className="px-4 py-2 text-ink-muted">300 attempts/year</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Enterprise</td>
                      <td className="px-4 py-2 text-ink">Custom</td>
                      <td className="px-4 py-2 text-ink">Custom</td>
                      <td className="px-4 py-2 text-ink-muted">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Additional attempts: $15&ndash;20 each. Unused attempts expire (no rollover).
              </p>
              <div className="mt-4 space-y-1 rounded-lg bg-paper-off p-4">
                <p className="text-sm text-ink-light">
                  <span className="font-medium text-ink">Starter (using all 120):</span> $16.58 per
                  assessment
                </p>
                <p className="text-sm text-ink-light">
                  <span className="font-medium text-ink">Pro (using all 300):</span> $14.97 per
                  assessment
                </p>
                <p className="text-sm text-ink-light">
                  <span className="font-medium text-ink">Overages:</span> $15&ndash;20 each
                </p>
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
                      <td className="px-4 py-2 text-ink-muted">Full evaluation</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Growth</td>
                      <td className="px-4 py-2 font-bold text-brand-yellow">₹2,000 (~$24)</td>
                      <td className="px-4 py-2 text-ink-muted">Full evaluation</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 font-medium text-ink">Scale</td>
                      <td className="px-4 py-2 font-bold text-brand-yellow">₹1,500 (~$18)</td>
                      <td className="px-4 py-2 text-ink-muted">Full evaluation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-lg border border-brand-green/30 bg-brand-green/5 p-4">
                <p className="text-sm font-medium text-ink">Key difference:</p>
                <p className="mt-1 text-sm text-ink-light">
                  HackerRank assesses one skill (coding). LayersRank assesses multiple dimensions
                  (technical, behavioral, contextual) in a single interview.
                </p>
              </div>
            </div>
          </div>

          {/* Cost Per Complete Assessment */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-ink">Cost Per Complete Assessment</h3>
            <p className="mt-2 text-sm text-ink-muted">
              To get equivalent coverage with HackerRank, you&rsquo;d need multiple tools.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  HackerRank (Coding Only)
                </p>
                <p className="mt-3 text-2xl font-extrabold text-ink">$45&ndash;100</p>
                <p className="text-sm text-ink-muted">per candidate for complete assessment</p>
                <div className="mt-4 space-y-2 text-sm text-ink-light">
                  <p>Coding test: ~$15&ndash;20/candidate</p>
                  <p>+ Video interview tool: +$20&ndash;50/candidate</p>
                  <p>+ Behavioral assessment: +$10&ndash;30/candidate</p>
                </div>
              </div>
              <div className="rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
                  LayersRank (Complete Evaluation)
                </p>
                <p className="mt-3 text-2xl font-extrabold text-ink">₹1,500&ndash;2,500</p>
                <p className="text-sm text-ink-muted">(~$18&ndash;30) per candidate</p>
                <div className="mt-4 text-sm text-ink-light">
                  <p>
                    Technical reasoning, system design, communication, behavioral competencies, role
                    fit.
                  </p>
                  <p className="mt-2 font-medium text-ink">
                    Single assessment, complete picture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What HackerRank Measures */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What HackerRank Measures</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Let&rsquo;s be specific about what HackerRank tests.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Algorithm Implementation</h3>
              <p className="mt-2 text-sm text-ink-light">
                Given a problem description and test cases, can the candidate write code that
                produces correct output? This measures syntax knowledge, algorithm recall,
                problem-solving under time pressure, and ability to translate requirements to code.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Data Structure Usage</h3>
              <p className="mt-2 text-sm text-ink-light">
                Does the candidate choose appropriate data structures and use them correctly?
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Code Efficiency</h3>
              <p className="mt-2 text-sm text-ink-light">
                Does the solution meet time and space complexity requirements?
              </p>
            </div>
          </div>

          {/* What HackerRank Does NOT Measure */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-ink">What HackerRank Does NOT Measure</h3>
            <p className="mt-2 text-sm text-ink-muted">
              These unmeasured skills often matter more for job performance than algorithm
              implementation.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
              {[
                'System design ability',
                'Debugging methodology',
                'Technical communication',
                'Trade-off reasoning',
                'Collaboration approach',
                'Stakeholder management',
                'Code review capability',
                'Architectural thinking',
                'Learning orientation',
                'Motivation and fit',
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-brand-red"
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
                  <span className="text-sm text-ink">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What LayersRank Measures */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Three Dimensions
          </p>
          <h2 className="mt-4 text-2xl font-bold">What LayersRank Measures</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            LayersRank evaluates across three dimensions with multiple question types.
          </p>

          <div className="mt-10 space-y-8">
            {/* Technical */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                Technical Dimension (What They Know and Can Do)
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">System Design</p>
                  <p className="mt-1 text-sm italic text-gray-400">
                    &ldquo;Walk through how you&rsquo;d design a notification service for 10M daily
                    users.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Evaluates architectural thinking, scale reasoning, trade-off consideration
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">Technical Depth</p>
                  <p className="mt-1 text-sm italic text-gray-400">
                    &ldquo;Explain when you&rsquo;d choose eventual vs. strong consistency.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Evaluates conceptual understanding, practical application
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">Debugging Methodology</p>
                  <p className="mt-1 text-sm italic text-gray-400">
                    &ldquo;You get a 3am page for increased latency. Walk through your first 30
                    minutes.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Evaluates systematic problem-solving, operational maturity
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">Code Reasoning (optional)</p>
                  <p className="mt-1 text-sm text-gray-300">
                    MCQ and text questions about code behavior, optimization, and best practices.
                    Evaluates knowledge without timed implementation pressure.
                  </p>
                </div>
              </div>
            </div>

            {/* Behavioral */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                Behavioral Dimension (How They Work)
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">Collaboration</p>
                  <p className="mt-1 text-sm italic text-gray-400">
                    &ldquo;Tell me about working with a product manager who had different
                    priorities.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Evaluates cross-functional effectiveness, conflict navigation
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">Communication</p>
                  <p className="mt-1 text-sm italic text-gray-400">
                    &ldquo;Explain a complex technical concept to a non-technical
                    stakeholder.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Evaluates translation ability, audience awareness
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">Feedback Response</p>
                  <p className="mt-1 text-sm italic text-gray-400">
                    &ldquo;Tell me about receiving critical feedback on your technical
                    approach.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Evaluates coachability, self-awareness
                  </p>
                </div>
              </div>
            </div>

            {/* Contextual */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                Contextual Dimension (Role and Motivation Fit)
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">Role Understanding</p>
                  <p className="mt-1 text-sm italic text-gray-400">
                    &ldquo;What do you think will be the biggest challenges in this role?&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Evaluates research, intentionality, realistic expectations
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="font-medium text-white">Motivation</p>
                  <p className="mt-1 text-sm italic text-gray-400">
                    &ldquo;What specifically attracted you to this role versus other
                    opportunities?&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Evaluates commitment signals, genuine interest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The "Great Coder, Terrible Engineer" Problem */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">
            The &ldquo;Great Coder, Terrible Engineer&rdquo; Problem
          </h2>

          <div className="mt-8 max-w-3xl space-y-4 text-ink-light">
            <p>Every engineering organization has experienced this:</p>
            <p>
              You hire someone who aced every coding test. Top scores on HackerRank. Crushed the
              algorithm interviews. Clearly smart.
            </p>
            <p className="font-medium text-ink">Six months later, they&rsquo;re struggling.</p>
            <p>
              The code they write works but is unmaintainable. They can&rsquo;t explain their design
              decisions to the team. They get defensive when code review suggestions come in. They
              solve the wrong problems because they don&rsquo;t clarify requirements. They know
              algorithms but not systems.
            </p>
            <p className="font-medium text-ink">How did your process miss this?</p>
            <p>
              It missed it because your process only measured coding ability. Coding ability is
              necessary but not sufficient for engineering effectiveness.
            </p>
          </div>

          <div className="mt-8 max-w-3xl rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
            <p className="font-medium text-ink">
              LayersRank catches these gaps in first-round assessment:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-light">
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
                <span>
                  <span className="font-medium text-ink">Can they explain their thinking?</span>{' '}
                  (Video responses reveal this)
                </span>
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
                <span>
                  <span className="font-medium text-ink">
                    Do they consider system-level concerns?
                  </span>{' '}
                  (System design questions reveal this)
                </span>
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
                <span>
                  <span className="font-medium text-ink">How do they handle ambiguity?</span>{' '}
                  (Adaptive follow-up reveals this)
                </span>
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
                <span>
                  <span className="font-medium text-ink">
                    Do they have collaboration examples?
                  </span>{' '}
                  (Behavioral questions reveal this)
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm font-medium text-ink">
              The &ldquo;great coder, terrible engineer&rdquo; passes HackerRank and fails
              LayersRank &mdash; because LayersRank measures what actually matters for the job.
            </p>
          </div>
        </div>
      </section>

      {/* When Each Makes Sense */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* When HackerRank Makes Sense */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">When HackerRank Makes Sense</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-medium text-ink">
                    You&rsquo;re hiring competitive programmers
                  </p>
                  <p className="mt-1 text-sm text-ink-light">
                    If the job is literally writing algorithms &mdash; competitive programming,
                    algorithmic trading, specific CS research &mdash; then HackerRank measures
                    exactly what you need.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">
                    You need to filter massive volume on coding basics
                  </p>
                  <p className="mt-1 text-sm text-ink-light">
                    If you receive 10,000 applications and need to quickly filter to candidates who
                    can code at all, HackerRank is an efficient gate. But recognize it&rsquo;s a
                    filter, not an evaluation.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">
                    You&rsquo;re supplementing, not replacing, other assessment
                  </p>
                  <p className="mt-1 text-sm text-ink-light">
                    HackerRank + video interviews + behavioral assessment can work. But you&rsquo;re
                    paying for and coordinating three tools instead of one.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">
                    Your roles are purely individual contributor with minimal collaboration
                  </p>
                  <p className="mt-1 text-sm text-ink-light">
                    Some roles genuinely involve sitting alone and writing code. If that&rsquo;s the
                    actual job, coding tests might suffice.
                  </p>
                </div>
              </div>
            </div>

            {/* When LayersRank Makes Sense */}
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">When LayersRank Makes Sense</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-medium text-ink">
                    You&rsquo;re hiring engineers who work on teams
                  </p>
                  <p className="mt-1 text-sm text-ink-light">
                    Most engineering is collaborative. System design, code review, cross-functional
                    communication &mdash; these matter. LayersRank measures them.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">
                    You want complete first-round assessment
                  </p>
                  <p className="mt-1 text-sm text-ink-light">
                    Instead of coding test + video interview + behavioral screen (three tools, three
                    costs, three candidate touchpoints), get complete coverage in one LayersRank
                    assessment.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">
                    You&rsquo;ve been burned by &ldquo;great coders, terrible engineers&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-ink-light">
                    If your HackerRank top scorers haven&rsquo;t consistently become your best
                    engineers, the signal isn&rsquo;t working. LayersRank measures different signals.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">You&rsquo;re hiring senior engineers</p>
                  <p className="mt-1 text-sm text-ink-light">
                    Senior roles require judgment, communication, and system thinking more than
                    algorithm implementation. LayersRank&rsquo;s emphasis aligns with senior role
                    requirements.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-ink">
                    You want confidence-weighted assessment
                  </p>
                  <p className="mt-1 text-sm text-ink-light">
                    HackerRank says &ldquo;passed&rdquo; or &ldquo;failed.&rdquo; LayersRank says
                    &ldquo;78 &plusmn; 4, 87% confidence.&rdquo; You know when to trust the signal.
                  </p>
                </div>
              </div>
            </div>
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
            Some organizations use both tools at different stages:
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow/10 text-sm font-bold text-brand-yellow">
                1
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">HackerRank Coding Filter</h3>
              <p className="mt-2 text-sm text-gray-300">
                Quick coding test to verify basic code writing ability. Low cost, high throughput.
                Filter out candidates who can&rsquo;t code at all.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow/20 text-sm font-bold text-brand-yellow">
                2
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">
                LayersRank Full Assessment
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Complete evaluation of candidates who passed the coding filter. Technical depth,
                behavioral competencies, contextual fit, with confidence scoring.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-gray-700 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white">The Math</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-medium text-brand-yellow">Combined approach:</p>
                <div className="mt-2 space-y-1 text-sm text-gray-300">
                  <p>100 applicants &rarr; 40 pass HackerRank filter ($15 &times; 100 = $1,500)</p>
                  <p>
                    &rarr; 40 complete LayersRank assessment (₹2,000 &times; 40 = ₹80,000 = ~$960)
                  </p>
                  <p className="mt-2 font-medium text-white">
                    Total: ~$2,460 for complete assessment of 40 qualified candidates
                  </p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-400">LayersRank only:</p>
                <div className="mt-2 space-y-1 text-sm text-gray-300">
                  <p>
                    100 applicants &rarr; 100 complete LayersRank assessment (₹2,000 &times; 100 =
                    ₹2,00,000 = ~$2,400)
                  </p>
                  <p className="mt-2 text-gray-400">
                    Similar cost, but HackerRank pre-filter saves assessment time
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Combined approach uses HackerRank&rsquo;s strength (cheap filtering) and
              LayersRank&rsquo;s strength (complete evaluation).
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Experience */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Candidate Experience Comparison</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">HackerRank Experience</h3>
              <p className="mt-3 text-sm text-ink-muted">
                Candidates report mixed feelings about HackerRank:
              </p>
              <div className="mt-4">
                <p className="text-sm font-medium text-brand-green">Positive:</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Practice problems available
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Clear pass/fail feedback on test cases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Familiar to many candidates
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-brand-red">Negative:</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Time pressure creates anxiety
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Doesn&rsquo;t reflect real work (when do you implement quicksort on the job?)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Feels like a test, not a conversation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    Some strong candidates refuse to do timed coding tests
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border-2 border-brand-yellow/30 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">LayersRank Experience</h3>
              <p className="mt-3 text-sm text-ink-muted">Candidates report:</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
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
                  Appreciation for async flexibility
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
                  Feeling evaluated on real skills
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
                  Opportunity to demonstrate thinking, not just syntax
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
                  Adaptive follow-up feels fair (chance to clarify)
                </li>
              </ul>

              <div className="mt-6 space-y-3 rounded-lg bg-brand-green/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink">Found assessment &ldquo;fair&rdquo; or &ldquo;very fair&rdquo;</span>
                  <span className="text-lg font-bold text-brand-green">78%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink">
                    Said it &ldquo;helped demonstrate my experience&rdquo;
                  </span>
                  <span className="text-lg font-bold text-brand-green">81%</span>
                </div>
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
                q: 'Can LayersRank evaluate coding ability at all?',
                a: "Yes. We support MCQ questions about code behavior, text questions about implementation approaches, and coding-adjacent reasoning questions. What we don't do is timed whiteboard-style coding exercises. If you need that, HackerRank is better suited.",
              },
              {
                q: 'What if we need to verify candidates can actually write code?',
                a: "Add a small coding exercise to your final round after LayersRank assessment. Or use HackerRank as a filter before LayersRank. Don't assume that because someone can code algorithms under time pressure, they can be an effective engineer.",
              },
              {
                q: 'Is LayersRank harder to pass than HackerRank?',
                a: "Different, not harder. Some candidates who ace HackerRank struggle with LayersRank (can't articulate their thinking, weak behavioral examples). Some candidates who struggle with HackerRank excel at LayersRank (strong reasoning, just rusty on algorithm implementation). The tests measure different things.",
              },
              {
                q: 'What about plagiarism/cheating?',
                a: "HackerRank has plagiarism detection and proctoring. LayersRank tracks behavioral signals (paste events, tab switches, typing patterns) and evaluates response authenticity. Both approaches work. LayersRank's adaptive follow-up is an additional check — cheaters struggle to answer clarifying questions about responses they didn't genuinely produce.",
              },
              {
                q: 'Which is better for campus hiring?',
                a: 'For pure coding filter at massive scale, HackerRank is efficient. For complete assessment including communication and behavioral evaluation, LayersRank is more comprehensive. Many GCCs use HackerRank as initial filter → LayersRank for full assessment of filtered candidates.',
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
              href="/compare/hirevue"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              vs HireVue &rarr;
            </Link>
            <Link
              href="/compare/codility"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              vs Codility &rarr;
            </Link>
            <Link
              href="/solutions/technical-hiring"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Technical Hiring &rarr;
            </Link>
            <Link
              href="/product/structured-interviews"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Structured Interviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PageCTA
        title="Hire Engineers, Not Just Coders"
        description="See how LayersRank evaluates the complete picture — technical depth, system thinking, communication, and collaboration."
        cta="See Sample Assessment"
        ctaHref="/demo"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
