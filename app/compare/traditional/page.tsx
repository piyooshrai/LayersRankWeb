import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { TimeSavingsCalculator, CostSavingsCalculator } from './calculators';

export const metadata = makeMetadata({
  title:
    'LayersRank vs Traditional Phone Screens | Automated Interview Screening | LayersRank',
  description:
    'Replace time-consuming phone screens with structured async interviews. Calculate your interviewer time savings and cost reduction with LayersRank vs. manual screening.',
  path: '/compare/traditional',
});

/* ------------------------------------------------------------------ */
/*  Reusable pieces                                                   */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
      {children}
    </p>
  );
}

function StepCard({
  num,
  title,
  lines,
}: {
  num: number;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-sm font-bold text-brand-yellow">
          {num}
        </span>
        <h3 className="font-bold text-ink">{title}</h3>
      </div>
      <ul className="mt-3 space-y-1 text-sm text-ink-light">
        {lines.map((l) => (
          <li key={l}>&rarr; {l}</li>
        ))}
      </ul>
    </div>
  );
}

function StatBlock({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
      <p className="text-xs text-ink-muted">{label}</p>
      <p
        className={`mt-1 text-lg font-bold ${muted ? 'text-ink-muted' : 'text-ink'}`}
      >
        {value}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function CompareTraditionalPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Compare / vs Traditional"
        title="Your Senior Engineers Shouldn't Be Phone Screening"
        description="Traditional first-round screening costs 45–60 minutes of interviewer time per candidate. At ₹1,500/hour for senior engineers, that's ₹1,125–1,500 per screen — before you even know if someone is qualified. LayersRank delivers structured evaluation in 24 hours without blocking anyone's calendar."
        primaryCta="Calculate Your Time Savings"
        primaryCtaHref="#time-calculator"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      {/* ── THE TRADITIONAL SCREENING PROBLEM ───────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>The Traditional Screening Problem</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Here&rsquo;s how most companies screen candidates today
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StepCard
              num={1}
              title="Resume Review"
              lines={[
                'Recruiter spends 2–3 min per resume',
                '100 applicants = 3–5 hours of recruiter time',
              ]}
            />
            <StepCard
              num={2}
              title="Phone Screen Scheduling"
              lines={[
                'Back-and-forth to find time',
                '2–3 emails/messages per candidate',
                '3–5 days to schedule',
              ]}
            />
            <StepCard
              num={3}
              title="Phone Screen Execution"
              lines={[
                'Interviewer spends 30–45 min per call',
                '30 screens = 15–22 hours of interviewer time',
              ]}
            />
            <StepCard
              num={4}
              title="Phone Screen Documentation"
              lines={[
                'Interviewer writes notes, makes recommendation',
                '10–15 minutes per candidate',
                '30 screens = 5–7.5 hours additional',
              ]}
            />
            <StepCard
              num={5}
              title="Decision & Communication"
              lines={[
                'Discuss borderline cases, notify candidates',
                'Variable but significant time',
              ]}
            />
          </div>

          {/* Totals */}
          <div className="mt-10 rounded-xl border-2 border-gray-300 bg-paper-off p-6">
            <h3 className="font-bold text-ink">Total for 30 phone screens</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatBlock label="Interviewer time" value="20–30 hrs" />
              <StatBlock label="Recruiter time" value="10–15 hrs" />
              <StatBlock label="Calendar blocked" value="2–3 weeks" />
              <StatBlock label="Time-to-decision" value="3–4 weeks" />
            </div>
          </div>

          {/* Hidden costs callout */}
          <div className="mt-10 rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-8">
            <h3 className="text-xl font-bold text-ink">The Hidden Costs</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
              Your interviewers aren&rsquo;t professional interviewers. They&rsquo;re
              engineers, product managers, designers. Every hour they spend on phone
              screens is an hour they&rsquo;re not shipping product.
            </p>
            <p className="mt-3 text-[15px] font-semibold text-ink">
              If your senior engineer costs ₹1,500/hour fully loaded, 25 hours of
              phone screens ={' '}
              <span className="text-brand-yellow">₹37,500 in engineering time.</span>
            </p>
            <p className="mt-2 text-sm italic text-ink-muted">
              For candidates who don&rsquo;t move forward.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE LAYERSRANK ALTERNATIVE ──────────────────────────── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>The LayersRank Alternative</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Replace phone screens with structured async assessment
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <StepCard
              num={1}
              title="Assessment Link Sent"
              lines={[
                'Recruiter sends LayersRank link to qualified applicants',
                '2 minutes per candidate (bulk send available)',
                '100 applicants = 30 minutes recruiter time',
              ]}
            />
            <StepCard
              num={2}
              title="Candidates Complete Assessment"
              lines={[
                'Candidates answer at their convenience',
                'No scheduling required',
                '2–3 day completion window',
              ]}
            />
            <StepCard
              num={3}
              title="AI Evaluation"
              lines={[
                'LayersRank scores responses automatically',
                'No interviewer time required',
                'Reports ready within 24 hours',
              ]}
            />
            <StepCard
              num={4}
              title="Review & Decision"
              lines={[
                'Hiring manager reviews scored reports',
                '5–10 minutes per report (vs. 45–60 min per call)',
                'Clear recommendation with confidence levels',
              ]}
            />
          </div>

          {/* Totals */}
          <div className="mt-10 rounded-xl border-2 border-brand-green/30 bg-brand-green/5 p-6">
            <h3 className="font-bold text-ink">Total for 30 assessments</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatBlock label="Interviewer time" value="2.5–5 hrs" />
              <StatBlock label="Recruiter time" value="2–3 hrs" />
              <StatBlock label="Calendar blocked" value="0 hours" />
              <StatBlock label="Time-to-decision" value="1 week" />
            </div>
            <p className="mt-4 text-center text-lg font-bold text-brand-green">
              Time savings: 70–80%
            </p>
          </div>
        </div>
      </section>

      {/* ── TIME SAVINGS CALCULATOR ─────────────────────────────── */}
      <section id="time-calculator" className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Time Savings Calculator</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Calculate how much interviewer time you&rsquo;d save
          </h2>
          <div className="mt-10">
            <TimeSavingsCalculator />
          </div>
        </div>
      </section>

      {/* ── COST SAVINGS CALCULATOR ─────────────────────────────── */}
      <section id="cost-calculator" className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Cost Savings Calculator</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Convert time savings to rupees
          </h2>
          <div className="mt-10">
            <CostSavingsCalculator />
          </div>
        </div>
      </section>

      {/* ── THE QUALITY ADJUSTMENT ──────────────────────────────── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
            The Quality Adjustment
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Traditional phone screens have a problem: inconsistency
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-gray-300">
            Research shows{' '}
            <span className="font-bold text-white">
              15–25% variance between interviewers
            </span>{' '}
            evaluating the same candidate. Your &ldquo;pass&rdquo; might be my
            &ldquo;fail.&rdquo;
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                Cost of False Negatives
              </h3>
              <p className="mt-1 text-sm text-gray-400">Good candidates rejected</p>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-300">
                If inconsistent screening rejects 10% of qualified candidates, and your
                average hire generates{' '}
                <span className="font-bold text-white">₹50 lakh in value</span> over 2
                years, you&rsquo;re losing ₹5 lakh per missed hire.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                Cost of False Positives
              </h3>
              <p className="mt-1 text-sm text-gray-400">Bad candidates advanced</p>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-300">
                If inconsistent screening advances 20% of unqualified candidates, you
                waste final-round time. At 30 screens/month with 20% false positive
                rate = 6 wasted final rounds.
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Final round cost: 3 hrs &times; ₹1,500 &times; 6 ={' '}
                <span className="text-brand-yellow">₹27,000/month wasted.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET WITH LAYERSRANK ─────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>What You Get With LayersRank</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Structured assessment that scales
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Structured Evaluation',
                body: 'Every candidate answers the same questions, evaluated against the same criteria. No variance from interviewer mood, fatigue, or personal preferences.',
              },
              {
                title: 'Confidence-Weighted Scores',
                body: 'Not just "pass" or "fail" — you see scores with confidence levels. "76 ± 4, 87% confidence" tells you much more than a gut-feel thumbs up.',
              },
              {
                title: 'Multi-Dimensional Assessment',
                body: 'Traditional phone screens often focus on one thing. LayersRank evaluates technical, behavioural, and contextual dimensions in one assessment.',
              },
              {
                title: 'Async Convenience',
                body: 'Candidates complete assessments on their schedule. No calendar coordination. No timezone challenges. No rescheduling.',
              },
              {
                title: '24-Hour Turnaround',
                body: 'Assessments are scored within 24 hours. Compare to 1–2 weeks for traditional phone screen cycles.',
              },
              {
                title: 'Documentation Built-In',
                body: 'Every assessment produces a detailed report. No separate note-writing. No "what did we think about this candidate?" confusion weeks later.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN TRADITIONAL STILL MAKES SENSE ──────────────────── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Honest Take</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            When traditional screening still makes sense
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Very Low Volume',
                body: "If you\u2019re hiring 2\u20133 people per year, the overhead of setting up any tool may exceed the benefit. Just do the phone screens.",
              },
              {
                title: 'Relationship-Critical Roles',
                body: 'Some roles (senior executives, key sales hires) may warrant high-touch personal screening even at first round. The phone screen IS the evaluation.',
              },
              {
                title: "Candidates Who Won\u2019t Do Async",
                body: 'Some candidates \u2014 especially very senior or in-demand \u2014 may refuse async assessments. Traditional outreach may be necessary.',
              },
              {
                title: 'When You Need Human Intuition First',
                body: "Sometimes you want a human impression before investing in structured assessment. That\u2019s valid, though it introduces the bias structured assessment avoids.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION TIMELINE ─────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Implementation</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Replacing phone screens in 5 weeks
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <p className="text-sm font-bold text-brand-yellow">Week 1–2</p>
              <h3 className="mt-1 text-lg font-bold text-ink">Setup</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li>&bull; Configure role template in LayersRank</li>
                <li>&bull; Define questions for your most common roles</li>
                <li>&bull; Set scoring weights and thresholds</li>
                <li>&bull; Brief recruiters on new process</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <p className="text-sm font-bold text-brand-yellow">Week 3–4</p>
              <h3 className="mt-1 text-lg font-bold text-ink">Parallel Run</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li>&bull; Send LayersRank assessments AND schedule phone screens</li>
                <li>&bull; Compare recommendations to phone screen outcomes</li>
                <li>&bull; Identify any calibration needed</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <p className="text-sm font-bold text-brand-yellow">Week 5+</p>
              <h3 className="mt-1 text-lg font-bold text-ink">Full Transition</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li>&bull; Replace phone screens with LayersRank for configured roles</li>
                <li>&bull; Phone screens only for borderline cases</li>
                <li>&bull; Monitor outcomes and adjust</li>
              </ul>
            </div>
          </div>

          {/* Transition questions */}
          <div className="mt-10 space-y-4">
            <h3 className="text-lg font-bold text-ink">Common Transition Questions</h3>
            {[
              {
                q: 'What about candidates who have questions about the role?',
                a: 'Include FAQ document with assessment link. Offer optional 15-minute recruiter call for questions.',
              },
              {
                q: 'What about assessing "culture fit"?',
                a: 'LayersRank behavioural questions assess collaboration style and communication. "Culture fit" is often code for "like me" bias — structured assessment reduces this.',
              },
              {
                q: "What if a candidate does poorly but we think they\u2019re good?",
                a: "You can always advance candidates manually. LayersRank informs your decision; it doesn\u2019t make it for you.",
              },
            ].map((item) => (
              <details key={item.q} className="group rounded-lg border border-gray-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-[15px] font-semibold text-ink">
                  {item.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm leading-relaxed text-ink-light">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTION HANDLING ──────────────────────────────────── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
            Objection Handling
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Common concerns, addressed
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                objection: '"Our interviewers prefer live conversation."',
                response:
                  'Understandable. But their preference costs engineering time. Move live conversation to final rounds where human judgement matters most. Use structured assessment for initial filtering.',
              },
              {
                objection: '"Candidates want to talk to a human."',
                response:
                  "Some do. But many candidates prefer async \u2014 they can respond thoughtfully without real-time pressure, and they don\u2019t have to schedule around their current job. Candidate feedback on async is generally positive.",
              },
              {
                objection: '"We need to sell the role during screening."',
                response:
                  'You can still do that. Send compelling role information with the assessment link. For candidates who pass, your final rounds include plenty of selling opportunity.',
              },
              {
                objection: "\"AI can\u2019t evaluate as well as humans.\"",
                response:
                  'For first-round screening, AI evaluates more consistently than humans. Human judgement remains essential for final decisions. The question is where to deploy human time for maximum impact.',
              },
              {
                objection: '"What about diversity and bias?"',
                response:
                  'Traditional phone screens are often MORE biased than structured assessment. Similarity bias, halo effects, and interviewer inconsistency all disadvantage diverse candidates. Structured assessment with consistent criteria typically improves diversity outcomes.',
              },
            ].map((item) => (
              <div
                key={item.objection}
                className="rounded-xl border border-gray-700 bg-white/5 p-6"
              >
                <p className="text-lg font-bold text-brand-yellow">
                  {item.objection}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-300">
                  {item.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MATH FOR DIFFERENT SCENARIOS ────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>The Math</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Real scenarios, real numbers
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Startup */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">
                Startup{' '}
                <span className="text-sm font-normal text-ink-muted">
                  (5 engineers, hiring 3/quarter)
                </span>
              </h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  <span className="font-semibold text-ink">Traditional:</span> 50
                  applications &rarr; 25 phone screens &rarr; 10 final rounds &rarr; 3
                  hires. Phone screen time: 25 hrs/quarter.{' '}
                  <span className="font-semibold text-ink">
                    20% of engineering capacity for one week.
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-ink">LayersRank:</span> 50
                  applications &rarr; 50 assessments &rarr; 10 final rounds &rarr; 3
                  hires. Review time: 8.3 hrs/quarter. Cost: ₹1,25,000/quarter.
                </p>
                <div className="rounded-lg bg-brand-yellow/5 p-3">
                  <p className="text-xs font-semibold text-ink">
                    LayersRank costs more in cash (₹1,25,000 vs ₹37,500), but:
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-ink-light">
                    <li>&bull; You assess everyone, not just 25</li>
                    <li>&bull; Your engineers ship product instead of screening</li>
                    <li>&bull; Assessment is more consistent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GCC */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">
                GCC{' '}
                <span className="text-sm font-normal text-ink-muted">
                  (500 hires/year, dedicated recruiting)
                </span>
              </h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  <span className="font-semibold text-ink">Traditional:</span> 2,500
                  applications &rarr; 1,000 phone screens &rarr; 500 hires. Phone
                  screen time: 1,000 hrs/year.{' '}
                  <span className="font-semibold text-ink">
                    Requires 0.5 FTE dedicated to phone screens.
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-ink">LayersRank:</span> 2,500
                  applications &rarr; 2,500 assessments &rarr; 500 hires. Review time:
                  416 hrs/year. Cost: ₹37,50,000/year.
                </p>
                <div className="rounded-lg bg-brand-yellow/5 p-3">
                  <p className="text-xs font-semibold text-ink">
                    At GCC scale, LayersRank costs more than pure interviewer time. But
                    the value is in:
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-ink-light">
                    <li>&bull; Evaluating ALL applicants (not just subset)</li>
                    <li>&bull; Consistency across panels and locations</li>
                    <li>&bull; Speed (24-hour turnaround vs. 2-week cycles)</li>
                    <li>&bull; Data and audit trails for compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Common questions about replacing phone screens
          </h2>

          <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {[
              {
                q: 'How do candidates react to async assessment vs. phone call?',
                a: 'Mixed, but generally positive. Many prefer the flexibility. Some miss human interaction. Candidate NPS for LayersRank assessments averages 71.',
              },
              {
                q: 'What if candidates cheat on async assessments?',
                a: "We track behavioural signals (typing patterns, paste events, tab switches). Adaptive follow-up questions probe responses \u2014 cheaters struggle to answer questions about content they didn\u2019t genuinely produce. And frankly, people cheat in live interviews too.",
              },
              {
                q: 'Can LayersRank handle technical screening for engineers?',
                a: "Yes. System design questions, technical depth questions, and debugging methodology all work well in video/text format. We don\u2019t do timed whiteboard coding \u2014 if you need that, add it to final rounds or use a coding platform for initial filter.",
              },
              {
                q: 'How long does it take candidates to complete?',
                a: 'Typically 40–60 minutes. This is similar to phone screen duration but candidates can pause, restart, and complete at their convenience.',
              },
              {
                q: 'What if we have questions that only work live?',
                a: "Some questions benefit from live back-and-forth. Use those in final rounds. First-round screening typically doesn\u2019t require real-time dialogue \u2014 and the cost of live dialogue (scheduling, interviewer time) is high.",
              },
            ].map((item) => (
              <details key={item.q} className="group px-6 py-6">
                <summary className="flex cursor-pointer items-center justify-between text-[15px] font-semibold text-ink">
                  {item.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-light">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ──────────────────────────────────────── */}
      <section className="bg-paper py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-lg font-bold text-ink">Related Comparisons</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'vs HireVue', href: '/compare/hirevue' },
              { label: 'vs HackerRank', href: '/compare/hackerrank' },
              { label: 'Structured Interviews', href: '/how-it-works' },
              { label: 'GCC Solutions', href: '/solutions/gcc' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-brand-yellow hover:text-brand-yellow"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <PageCTA
        title="Stop Screening. Start Evaluating."
        description="Calculate how much interviewer time you'd save by replacing phone screens with structured async assessment."
        cta="Calculate Your Savings"
        ctaHref="#time-calculator"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
