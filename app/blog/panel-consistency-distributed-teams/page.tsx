import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Interview Panel Consistency | Measuring Inter-Scorer Agreement | LayersRank',
  description:
    'Interview panels disagree 15-25% of the time on the same candidates. Here\u2019s how to measure and improve inter-scorer agreement across distributed teams.',
  path: '/blog/panel-consistency-distributed-teams',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Inter-Scorer Agreement: Measuring Panel Consistency Across Distributed Teams',
  description:
    'Interview panels disagree 15-25% of the time on the same candidates. Here\u2019s how to measure and improve inter-scorer agreement across distributed teams.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'interview panel consistency',
    'inter-scorer agreement',
    'interviewer calibration',
    'panel variance',
    'distributed hiring teams',
  ],
};

export default function PanelConsistencyBlogPost() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <time dateTime="2026-02">February 2026</time>
            <span aria-hidden="true">&middot;</span>
            <span>6 min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>LayersRank Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Inter-Scorer Agreement: Measuring Panel Consistency Across Distributed Teams
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            If two separate panels independently evaluated the same candidate, how often would they reach the
            same conclusion? If you don&rsquo;t know the answer, you don&rsquo;t actually know how reliable
            your hiring process is.
          </p>
        </div>
      </section>

      {/* ── WHAT IS INTER-SCORER AGREEMENT? ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Is Inter-Scorer Agreement?</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Inter-scorer agreement measures how consistently different evaluators reach the same conclusions about
              the same candidates. It&rsquo;s the most direct measure of whether your interview process is producing
              reliable signals&nbsp;&mdash; or just noise.
            </p>
            <p>Think of it in three levels:</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* Perfect Agreement */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-green">100%</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Perfect Agreement</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every panel reaches the same conclusion on every candidate. Theoretically ideal but essentially
                impossible with subjective evaluations.
              </p>
            </div>
            {/* No Agreement */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-red">50%</p>
              <h3 className="mt-2 text-lg font-bold text-ink">No Agreement</h3>
              <p className="mt-2 text-sm text-ink-light">
                Panels agree only at chance level&nbsp;&mdash; effectively coin flips. Your interview process is
                adding zero signal to random guessing.
              </p>
            </div>
            {/* Typical */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-orange">75&ndash;85%</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Typical Range</h3>
              <p className="mt-2 text-sm text-ink-light">
                Most organizations land here&nbsp;&mdash; meaning 15&ndash;25% of decisions are effectively arbitrary,
                determined by which panel a candidate happened to get.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base font-semibold text-ink md:text-lg">
            At 75% agreement, roughly 1 in 4 hiring decisions is determined by panel assignment&nbsp;&mdash; not
            candidate quality.
          </p>
        </div>
      </section>

      {/* ── WHY DISTRIBUTED TEAMS MAKE IT WORSE ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Why Distributed Teams Make It Worse</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Panel inconsistency is a challenge for any organization. But when your interviewers are spread
              across offices, cities, or time zones, five specific factors amplify the problem:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">No shared physical calibration</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Co-located teams naturally calibrate through hallway conversations, post-interview debriefs, and
                  overhearing each other&rsquo;s feedback. Distributed teams lose all of these informal alignment
                  mechanisms.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Regional drift</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Over time, different offices develop subtly different hiring bars. The Bangalore team&rsquo;s
                  &ldquo;strong yes&rdquo; might look different from the Hyderabad team&rsquo;s &ldquo;strong
                  yes.&rdquo; Without active monitoring, these standards silently diverge.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Different interviewer pools</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Each location draws from its own set of interviewers with different technical backgrounds,
                  professional experiences, and personal preferences. These differences directly translate into
                  scoring variance.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Asynchronous coordination</h3>
                <p className="mt-1 text-sm text-ink-light">
                  When panel members are in different time zones, decisions get made in isolation. One evaluator
                  submits feedback at 9&nbsp;AM IST; another reviews at 3&nbsp;PM EST. There&rsquo;s no real-time
                  discussion to resolve disagreements or clarify ambiguities.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-ink">Scale pressure</h3>
                <p className="mt-1 text-sm text-ink-light">
                  High-volume distributed hiring means more junior interviewers joining panels, more fatigue from
                  back-to-back sessions, and less time for calibration exercises. Consistency is the first casualty
                  of speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEASURING YOUR CURRENT STATE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Measuring Your Current State</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Before you can improve consistency, you need to know where you stand. Here are four practical methods
              for measuring inter-scorer agreement:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Method 1 */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Double-Blind Evaluation</h3>
              <p className="mt-2 text-sm text-ink-light">
                Have two independent panels evaluate the same candidate without knowing the other panel&rsquo;s
                results. Compare conclusions afterward. This is the cleanest measurement but also the most
                expensive&nbsp;&mdash; it doubles your interviewer load for sampled candidates.
              </p>
              <p className="mt-3 text-xs font-medium text-brand-green">Best for: Gold-standard calibration</p>
            </div>
            {/* Method 2 */}
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Shadow Scoring</h3>
              <p className="mt-2 text-sm text-ink-light">
                A second evaluator observes or reviews interview recordings and scores independently. Less
                disruptive than double-blind since the candidate only goes through the process once, but the shadow
                scorer still provides an independent data point.
              </p>
              <p className="mt-3 text-xs font-medium text-brand-blue">Best for: Ongoing monitoring</p>
            </div>
            {/* Method 3 */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Standardized Reference Candidates</h3>
              <p className="mt-2 text-sm text-ink-light">
                Use recorded interviews that all evaluators score. Since the &ldquo;candidate&rdquo; is identical
                for everyone, any score variance is purely evaluator variance. Great for identifying individual
                interviewers who are calibrated too high or too low.
              </p>
              <p className="mt-3 text-xs font-medium text-brand-orange">Best for: Interviewer training</p>
            </div>
            {/* Method 4 */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Statistical Analysis</h3>
              <p className="mt-2 text-sm text-ink-light">
                Analyze historical patterns without running new experiments. Look for score distributions by
                interviewer, rejection rate correlations across panels, and decision reversal rates on appeal.
                Less precise but uses data you already have.
              </p>
              <p className="mt-3 text-xs font-medium text-brand-yellow">Best for: Quick baseline assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO CALCULATE AGREEMENT ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How to Calculate Agreement</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Two metrics give you complementary views of panel consistency. Start with simple percent agreement
              for an intuitive baseline, then use Cohen&rsquo;s Kappa for a statistically rigorous measure.
            </p>
          </div>

          {/* Simple Percent Agreement */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold text-ink">Simple Percent Agreement</h3>
            <div className="mt-4 rounded-lg bg-ink p-4">
              <p className="font-mono text-sm text-brand-yellow md:text-base">
                Agreement&nbsp;=&nbsp;Same&nbsp;decisions&nbsp;/&nbsp;Total&nbsp;comparisons
              </p>
            </div>
            <p className="mt-4 text-sm text-ink-light">
              <strong className="text-ink">Example:</strong> You run 100 double-blind comparisons. In 78 cases,
              both panels reached the same pass/fail conclusion. Your simple agreement rate
              is&nbsp;<span className="font-mono font-semibold text-ink">78 / 100 = 78%</span>.
            </p>
            <p className="mt-2 text-sm text-ink-light">
              Simple and intuitive, but doesn&rsquo;t account for agreement that would happen by chance alone. If
              you reject 80% of candidates, two random panels would agree ~68% of the time just by luck.
            </p>
          </div>

          {/* Cohen's Kappa */}
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold text-ink">Cohen&rsquo;s Kappa (&kappa;)</h3>
            <div className="mt-4 rounded-lg bg-ink p-4">
              <p className="font-mono text-sm text-brand-yellow md:text-base">
                &kappa;&nbsp;=&nbsp;(P<sub>observed</sub>&nbsp;&minus;&nbsp;P<sub>chance</sub>)&nbsp;/&nbsp;(1&nbsp;&minus;&nbsp;P<sub>chance</sub>)
              </p>
            </div>
            <p className="mt-4 text-sm text-ink-light">
              Kappa corrects for chance agreement, giving you a truer picture of how much your process adds
              beyond random noise. Here&rsquo;s the standard interpretation scale:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-2 pr-4 font-semibold text-ink">&kappa; Range</th>
                    <th className="pb-2 font-semibold text-ink">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="text-ink-light">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-mono">0.00&ndash;0.20</td>
                    <td className="py-2">Slight agreement</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-mono">0.21&ndash;0.40</td>
                    <td className="py-2">Fair agreement</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-mono">0.41&ndash;0.60</td>
                    <td className="py-2">Moderate agreement</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-mono">0.61&ndash;0.80</td>
                    <td className="py-2">Substantial agreement</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono">0.81&ndash;1.00</td>
                    <td className="py-2">Almost perfect agreement</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm font-medium text-ink">
              Target: &kappa;&nbsp;&gt;&nbsp;0.60 (substantial agreement). Most companies without active calibration
              programs land at&nbsp;<span className="font-mono">0.40&ndash;0.55</span>&nbsp;&mdash; moderate at best.
            </p>
          </div>
        </div>
      </section>

      {/* ── IMPROVING AGREEMENT: STRUCTURAL APPROACHES ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Improving Agreement: Structural Approaches</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Improving inter-scorer agreement isn&rsquo;t about getting evaluators to think alike. It&rsquo;s about
              ensuring they&rsquo;re evaluating the same things, using the same criteria, with the same understanding
              of what &ldquo;good&rdquo; looks like.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">Standardized Questions</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Every panel asks the same core questions in the same order. Improvised questions are the single
                  largest source of panel variance&nbsp;&mdash; different questions produce different signals, making
                  cross-panel comparison meaningless.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Explicit Rubrics</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Define what a 3/5 vs. a 4/5 actually looks like with concrete behavioral examples. Vague rubrics
                  like &ldquo;demonstrates strong problem-solving&rdquo; leave too much room for interpretation. Spell
                  out exactly what &ldquo;strong&rdquo; means for each dimension.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Structured Feedback Forms</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Replace free-text feedback with structured forms that require scores on specific dimensions before
                  allowing an overall recommendation. This forces evaluators to think through each criterion rather
                  than going with gut feel.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Cross-Location Calibration</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Run monthly calibration sessions where interviewers from different locations review the same
                  recorded interview and compare scores. Discuss disagreements openly. This is the single most
                  effective intervention for distributed teams.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-ink">Variance Monitoring</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Track agreement metrics continuously, not just during occasional audits. When a specific
                  interviewer or location starts drifting, intervene early. Monthly dashboards showing agreement
                  rates by team and individual create accountability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                6
              </span>
              <div>
                <h3 className="font-bold text-ink">Panel Composition</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Intentionally mix panel members across locations and experience levels. Pair newer interviewers
                  with calibrated veterans. Rotate panel assignments so no single location dominates the evaluation
                  of any candidate pool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY-ENABLED CONSISTENCY ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Technology-Enabled Consistency</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Structural improvements help, but technology can fundamentally change the consistency equation. Here
              are three ways:
            </p>
          </div>

          <div className="mt-10 space-y-10">
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Automated First-Round Evaluation</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  AI-driven first-round assessments produce zero variance by design. The same candidate gets the
                  same evaluation regardless of time zone, interviewer mood, or panel composition. This doesn&rsquo;t
                  replace human judgment for final decisions&nbsp;&mdash; it creates a consistent baseline that human
                  panels can build on.
                </p>
                <p className="font-medium text-ink">
                  Result: Perfect first-round consistency across every location, every time.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">Confidence Scoring</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  Not all evaluations are created equal. Confidence scoring distinguishes a &ldquo;clearly
                  strong&rdquo; candidate from a &ldquo;maybe strong&rdquo; candidate. When an evaluation comes with
                  low confidence, it flags the need for additional review rather than letting an uncertain assessment
                  drive the final decision.
                </p>
                <p className="font-medium text-ink">
                  Result: Panels focus their energy on ambiguous cases where human judgment adds the most value.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-brand-blue pl-6">
              <h3 className="text-lg font-bold text-ink">Audit Trails</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  When every evaluation produces a detailed, transparent record of how the candidate was assessed,
                  you can see exactly where panels diverge. Was it the technical assessment? The communication
                  evaluation? The cultural fit dimension? Audit trails let you pinpoint the source of disagreement
                  and address it directly.
                </p>
                <p className="font-medium text-ink">
                  Result: Targeted calibration on the specific dimensions that drive the most variance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT GOOD LOOKS LIKE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Good Looks Like</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Use this table to benchmark your current state and set realistic targets:
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 pr-4 font-semibold text-ink">Metric</th>
                  <th className="pb-3 pr-4 font-semibold text-brand-red">Poor</th>
                  <th className="pb-3 pr-4 font-semibold text-brand-orange">Okay</th>
                  <th className="pb-3 pr-4 font-semibold text-brand-green">Good</th>
                  <th className="pb-3 font-semibold text-brand-blue">Excellent</th>
                </tr>
              </thead>
              <tbody className="text-ink-light">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-ink">Simple agreement</td>
                  <td className="py-3 pr-4 font-mono">&lt;&thinsp;70%</td>
                  <td className="py-3 pr-4 font-mono">70&ndash;80%</td>
                  <td className="py-3 pr-4 font-mono">80&ndash;90%</td>
                  <td className="py-3 font-mono">&gt;&thinsp;90%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-ink">Cohen&rsquo;s Kappa</td>
                  <td className="py-3 pr-4 font-mono">&lt;&thinsp;0.40</td>
                  <td className="py-3 pr-4 font-mono">0.40&ndash;0.60</td>
                  <td className="py-3 pr-4 font-mono">0.60&ndash;0.80</td>
                  <td className="py-3 font-mono">&gt;&thinsp;0.80</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-ink">Score variance (%)</td>
                  <td className="py-3 pr-4 font-mono">&gt;&thinsp;15</td>
                  <td className="py-3 pr-4 font-mono">10&ndash;15</td>
                  <td className="py-3 pr-4 font-mono">5&ndash;10</td>
                  <td className="py-3 font-mono">&lt;&thinsp;5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Process Indicators</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li>&bull; Calibration sessions held monthly across all locations</li>
                <li>&bull; Standardized rubrics updated quarterly with concrete examples</li>
                <li>&bull; Agreement metrics reviewed at every hiring retrospective</li>
                <li>&bull; New interviewers shadow 5+ sessions before evaluating independently</li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Outcome Indicators</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li>&bull; No statistically significant difference in pass rates across locations</li>
                <li>&bull; Decision reversal rate on appeal below 10%</li>
                <li>&bull; New-hire performance distribution consistent regardless of evaluating panel</li>
                <li>&bull; Candidate feedback scores uniform across interview locations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PAYOFF ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Payoff</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Investing in inter-scorer agreement isn&rsquo;t just a statistical exercise. It delivers four concrete
              benefits:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Fairness Increases</h3>
              <p className="mt-2 text-sm text-ink-light">
                When panels agree 90%+ of the time, candidates get evaluated on their actual abilities&nbsp;&mdash; not
                on which panel they happened to draw. Every candidate deserves the same bar, regardless of which
                office or time zone their evaluators sit in.
              </p>
            </div>
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Quality Improves</h3>
              <p className="mt-2 text-sm text-ink-light">
                Consistent panels make fewer mistakes in both directions. Fewer strong candidates rejected by a
                harsh panel, fewer weak candidates passed by a lenient one. Your hiring bar becomes a real bar,
                not a range.
              </p>
            </div>
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Efficiency Improves</h3>
              <p className="mt-2 text-sm text-ink-light">
                Consistent first-round evaluations mean fewer candidates need to be re-evaluated, fewer decisions get
                escalated, and fewer appeals overturn original outcomes. The process moves faster when people trust
                the results.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Trust Increases</h3>
              <p className="mt-2 text-sm text-ink-light">
                When you can tell a hiring manager &ldquo;our panels agree 85% of the time on the same
                candidates,&rdquo; that&rsquo;s a credible, verifiable claim. It transforms your hiring process from
                an opaque gut-feel exercise into a measurable, defensible system.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base font-semibold text-ink md:text-lg">
            &ldquo;85% inter-scorer agreement&rdquo; isn&rsquo;t just a number. It&rsquo;s proof that your process
            works.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Ready to Measure Your Panel Consistency?</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              LayersRank provides built-in inter-scorer agreement metrics, automated calibration tools, and
              transparent audit trails&nbsp;&mdash; so you always know how reliable your evaluations are.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/resources/sample-report"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-center font-semibold text-ink hover:bg-brand-orange"
            >
              View Sample Report
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border border-ink px-6 py-3 text-center font-medium text-ink hover:bg-ink hover:text-white"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED READING ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-ink">Related reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/reduce-interviewer-bias-india', label: 'Reduce Bias', desc: 'Practical strategies to reduce interviewer bias in India' },
              { href: '/blog/confidence-intervals-matter', label: 'Confidence Intervals', desc: 'Why confidence levels change hiring decisions' },
              { href: '/science/explainability', label: 'Explainability Science', desc: 'How transparent scoring builds trust' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-ink">{link.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
