import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Scale Engineering Hiring Bangalore Without Mis-Hires | GCC Hiring | LayersRank',
  description:
    'Bangalore GCCs face a scaling paradox: hire faster means hire worse. Here\u2019s how to break the trade-off and scale volume while maintaining quality.',
  path: '/blog/scale-bangalore-hiring',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Scale Engineering Hiring in Bangalore Without Increasing Mis-Hire Costs',
  description:
    'Bangalore GCCs face a scaling paradox: hire faster means hire worse. Here\u2019s how to break the trade-off and scale volume while maintaining quality.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'scale Bangalore hiring',
    'GCC engineering recruitment',
    'reduce mis-hires India',
    'high volume technical hiring',
    'Bangalore talent acquisition',
  ],
};

export default function ScaleBangaloreHiringBlogPost() {
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
            How to Scale Engineering Hiring in Bangalore Without Increasing Mis-Hire Costs
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            The Bangalore scaling paradox: Hire faster&nbsp;&rarr; more mis-hires&nbsp;&rarr; more
            attrition&nbsp;&rarr; hire more&nbsp;&rarr; even faster&nbsp;&rarr; even more mis-hires.
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            You can&rsquo;t win by running faster on the same treadmill.
          </p>
        </div>
      </section>

      {/* ── THE TRADITIONAL SCALING PATH (AND WHY IT FAILS) ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            The Traditional Scaling Path (And Why It Fails)
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              When GCCs get the mandate to double or triple headcount, engineering leaders reach for the
              same five levers. Every single one breaks at scale.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {/* Approach 1 */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                1. Add More Interviewers
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                More people evaluating means more variance in standards. Interviewer&nbsp;A&rsquo;s
                &ldquo;strong hire&rdquo; is Interviewer&nbsp;B&rsquo;s &ldquo;maybe.&rdquo; At 3x volume,
                you don&rsquo;t have 3x capacity&nbsp;&mdash; you have 3x inconsistency.
              </p>
              <p className="mt-2 text-sm font-medium text-brand-red">
                Result: More interviewers, more variance, same (or worse) quality.
              </p>
            </div>

            {/* Approach 2 */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                2. Shorten the Interview Process
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                Cut rounds from four to two. Compress the timeline. Move faster. The problem? Each round
                existed for a reason&nbsp;&mdash; it captured signal you needed. Fewer rounds means
                less signal means more guessing.
              </p>
              <p className="mt-2 text-sm font-medium text-brand-red">
                Result: Faster process, less signal, more mis-hires.
              </p>
            </div>

            {/* Approach 3 */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                3. Lower the Bar
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                &ldquo;We need bodies&rdquo; becomes the quiet reality. Thresholds drop. &ldquo;Good
                enough&rdquo; replaces &ldquo;strong hire.&rdquo; Within two quarters, attrition spikes
                because the wrong people are in the wrong roles.
              </p>
              <p className="mt-2 text-sm font-medium text-brand-red">
                Result: Lower bar, higher attrition, net headcount barely moves.
              </p>
            </div>

            {/* Approach 4 */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                4. Pay More
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                Bump offers by 20&ndash;30% to attract more applicants. You get more candidates, yes.
                But higher compensation doesn&rsquo;t help you identify which candidates are actually
                good. You&rsquo;re paying more for the same hit rate.
              </p>
              <p className="mt-2 text-sm font-medium text-brand-red">
                Result: Higher cost per hire, no improvement in quality identification.
              </p>
            </div>

            {/* Approach 5 */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                5. Outsource to Recruitment Agencies
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                Agencies optimize for volume and speed&nbsp;&mdash; they get paid per placement. Their
                incentive is to fill seats, not to ensure quality. You end up paying 15&ndash;20% of
                CTC for candidates who aren&rsquo;t meaningfully better screened than your own pipeline.
              </p>
              <p className="mt-2 text-sm font-medium text-brand-red">
                Result: Volume without quality. Expensive volume without quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MATH OF MIS-HIRES ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Math of Mis-Hires</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Before scaling, understand what a single mis-hire actually costs your Bangalore GCC:
            </p>
          </div>

          {/* Cost breakdown card */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold text-ink">Cost Per Mis-Hire</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-ink-light">Hiring cost (sourcing, interviews, ops)</span>
                <span className="font-mono text-sm font-bold text-ink">&#8377;1L</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-ink-light">Employment cost (3 months salary before exit)</span>
                <span className="font-mono text-sm font-bold text-ink">&#8377;4L</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-ink-light">Exit cost (severance, backfill, lost productivity)</span>
                <span className="font-mono text-sm font-bold text-ink">&#8377;2L</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-bold text-ink">Total per mis-hire</span>
                <span className="font-mono text-lg font-bold text-brand-red">&#8377;7L</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p className="font-medium text-ink">
              Now watch what happens when you scale:
            </p>
          </div>

          {/* Scaling table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="py-3 pr-4 text-left font-bold text-ink">Scenario</th>
                  <th className="py-3 px-4 text-right font-bold text-ink">Hires</th>
                  <th className="py-3 px-4 text-right font-bold text-ink">Mis-Hire Rate</th>
                  <th className="py-3 px-4 text-right font-bold text-ink">Mis-Hires</th>
                  <th className="py-3 pl-4 text-right font-bold text-ink">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 text-ink-light">Current</td>
                  <td className="py-3 px-4 text-right font-mono text-ink">100</td>
                  <td className="py-3 px-4 text-right font-mono text-ink">15%</td>
                  <td className="py-3 px-4 text-right font-mono text-ink">15</td>
                  <td className="py-3 pl-4 text-right font-mono font-bold text-ink">&#8377;1.05 Cr</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 text-ink-light">2x Volume</td>
                  <td className="py-3 px-4 text-right font-mono text-ink">200</td>
                  <td className="py-3 px-4 text-right font-mono text-brand-orange">20%</td>
                  <td className="py-3 px-4 text-right font-mono text-brand-orange">40</td>
                  <td className="py-3 pl-4 text-right font-mono font-bold text-brand-orange">&#8377;2.80 Cr</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-ink-light">3x Volume</td>
                  <td className="py-3 px-4 text-right font-mono text-ink">300</td>
                  <td className="py-3 px-4 text-right font-mono text-brand-red">25%</td>
                  <td className="py-3 px-4 text-right font-mono text-brand-red">75</td>
                  <td className="py-3 pl-4 text-right font-mono font-bold text-brand-red">&#8377;5.25 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-base font-semibold text-ink md:text-lg">
            2x the volume costs nearly 3x. Because the mis-hire rate climbs with speed.
          </p>
        </div>
      </section>

      {/* ── BREAKING THE TRADE-OFF ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Breaking the Trade-Off</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              The scaling paradox exists because traditional hiring has a linear
              constraint: every candidate needs human interviewer time. More candidates means more
              interviewer hours, which means either more interviewers (inconsistency) or longer
              timelines (candidate drop-off).
            </p>
            <p>
              But what if assessment capacity wasn&rsquo;t the bottleneck?
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Scenario A */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                Scenario A: <span className="text-brand-red">Traditional</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li>Interviewer time scales <strong className="text-ink">linearly</strong> with candidates</li>
                <li>2x candidates = 2x interviewer hours</li>
                <li>Quality degrades as interviewers rush</li>
                <li>Consistency drops with more evaluators</li>
              </ul>
              <p className="mt-3 text-sm font-medium text-brand-red">
                Capacity and quality are in direct tension.
              </p>
            </div>

            {/* Scenario B */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                Scenario B: <span className="text-brand-green">AI-Augmented</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li>Assessment capacity is <strong className="text-ink">unlimited</strong></li>
                <li>Human review only for top 10% of pipeline</li>
                <li>Quality stays <strong className="text-ink">constant</strong> regardless of volume</li>
                <li>Consistency is built into the system</li>
              </ul>
              <p className="mt-3 text-sm font-medium text-brand-green">
                Capacity and quality are decoupled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE THREE CAPACITY CONSTRAINTS ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Three Capacity Constraints</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Every hiring process has three bottlenecks. Solving all three is what breaks the
              scaling paradox.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {/* Constraint 1 */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">1. Screening Capacity</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  <strong className="text-ink">Traditional:</strong> Each candidate needs 30&ndash;60
                  minutes of an engineer&rsquo;s time for a phone screen. At 1,000 applicants per month,
                  that&rsquo;s 500&ndash;1,000 hours of engineering time just for first-round screens.
                </p>
                <p>
                  <strong className="text-ink">AI-augmented:</strong> Async structured interviews run
                  24/7 with no capacity limit. Candidates complete assessments on their own time. Your
                  screening throughput becomes effectively <strong className="text-ink">unlimited</strong>.
                </p>
              </div>
            </div>

            {/* Constraint 2 */}
            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">2. Evaluation Consistency</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  <strong className="text-ink">Traditional:</strong> Interviewer #1 and Interviewer #47
                  don&rsquo;t apply the same bar. Training helps, but calibration drifts over weeks.
                  The more interviewers, the more drift.
                </p>
                <p>
                  <strong className="text-ink">AI-augmented:</strong> AI applies identical criteria to
                  every single candidate. Evaluation quality stays <strong className="text-ink">constant
                  regardless of volume</strong>&nbsp;&mdash; candidate #1 and candidate #1,000 are scored
                  with the same rubric, same depth, same standards.
                </p>
              </div>
            </div>

            {/* Constraint 3 */}
            <div className="border-l-4 border-brand-orange pl-6">
              <h3 className="text-lg font-bold text-ink">3. Decision Speed</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  <strong className="text-ink">Traditional:</strong> 2&ndash;4 weeks from application to
                  offer. In Bangalore&rsquo;s competitive market, top candidates accept other offers
                  within days. Slow processes lose the best people.
                </p>
                <p>
                  <strong className="text-ink">AI-augmented:</strong> 2&ndash;3 days for the full
                  assessment plus 24&nbsp;hours for scoring and reporting. Hiring managers get actionable
                  candidate reports before the competition has even scheduled a first call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE LAYERED FUNNEL ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Layered Funnel</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Scaling doesn&rsquo;t mean doing the same thing faster. It means building a funnel
              where each layer filters progressively, so human time is only spent where it matters most.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {/* Layer 1 */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  1
                </span>
                <h3 className="text-lg font-bold text-ink">Broad Top-of-Funnel</h3>
              </div>
              <p className="mt-3 text-sm text-ink-light">
                Cast a wide net. Accept applications from multiple channels&nbsp;&mdash; job boards,
                referrals, agencies, career pages. Don&rsquo;t pre-filter aggressively at this
                stage. Volume is a feature, not a bug.
              </p>
            </div>

            {/* Layer 2 */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  2
                </span>
                <h3 className="text-lg font-bold text-ink">Automated First-Round Assessment</h3>
              </div>
              <p className="mt-3 text-sm text-ink-light">
                Every applicant gets a structured, async AI interview. No scheduling. No interviewer
                bandwidth. Candidates complete it in their own time, and the system evaluates
                technical depth, problem-solving approach, and communication&nbsp;&mdash; all against
                consistent criteria.
              </p>
            </div>

            {/* Layer 3 */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  3
                </span>
                <h3 className="text-lg font-bold text-ink">Smart Filtering</h3>
              </div>
              <div className="mt-3 space-y-2 text-sm text-ink-light">
                <p>Candidates are sorted into three buckets:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong className="text-brand-green">High-confidence pass:</strong> Clear top
                    performers. Move directly to final rounds.
                  </li>
                  <li>
                    <strong className="text-brand-red">High-confidence fail:</strong> Clearly below
                    bar. Respectful rejection with feedback.
                  </li>
                  <li>
                    <strong className="text-brand-yellow">Low-confidence &mdash; needs review:</strong> Ambiguous
                    signal. These candidates get human attention where it&rsquo;s most valuable.
                  </li>
                </ul>
              </div>
            </div>

            {/* Layer 4 */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  4
                </span>
                <h3 className="text-lg font-bold text-ink">Focused Final Rounds</h3>
              </div>
              <p className="mt-3 text-sm text-ink-light">
                Your senior engineers interview only pre-qualified candidates. Every person who
                reaches a human interviewer has already demonstrated baseline competency. Interviewer
                time is spent on culture fit, architectural thinking, and team dynamics&nbsp;&mdash;
                not on weeding out unqualified applicants.
              </p>
            </div>
          </div>

          {/* Comparison stats */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">LayersRank Funnel</h3>
              <p className="mt-1 text-sm text-ink-light">1,000 applicants</p>
              <p className="mt-3 font-mono text-2xl font-bold text-brand-green">230 hours</p>
              <p className="mt-1 text-sm text-ink-light">total interviewer time</p>
              <p className="mt-3 font-mono text-sm font-bold text-ink">50 hires</p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Traditional Funnel</h3>
              <p className="mt-1 text-sm text-ink-light">1,000 applicants</p>
              <p className="mt-3 font-mono text-2xl font-bold text-brand-red">570 hours</p>
              <p className="mt-1 text-sm text-ink-light">total interviewer time</p>
              <p className="mt-3 font-mono text-sm font-bold text-ink">50 hires</p>
            </div>
          </div>

          <p className="mt-6 text-base font-semibold text-ink md:text-lg">
            Same 50 hires. Less than half the interviewer hours. Better quality signal on every candidate.
          </p>
        </div>
      </section>

      {/* ── WHAT CHANGES IN YOUR TEAM ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Changes in Your Team</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Scaling with AI doesn&rsquo;t eliminate roles&nbsp;&mdash; it transforms them. Here&rsquo;s
              what shifts:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Recruiters */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">Recruiters</h3>
                <p className="mt-1 text-sm text-ink-light">
                  <strong className="text-ink">Before:</strong> 60% of time on scheduling, coordination,
                  and chasing candidates through a slow process.
                </p>
                <p className="mt-1 text-sm text-ink-light">
                  <strong className="text-ink">After:</strong> Less scheduling, more employer branding,
                  candidate experience, and pipeline strategy. Recruiters become talent strategists
                  instead of logistics coordinators.
                </p>
              </div>
            </div>

            {/* Interviewers */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Interviewers</h3>
                <p className="mt-1 text-sm text-ink-light">
                  <strong className="text-ink">Before:</strong> Spending half their interview slots on
                  candidates who clearly aren&rsquo;t qualified, burning out on repetitive screens.
                </p>
                <p className="mt-1 text-sm text-ink-light">
                  <strong className="text-ink">After:</strong> Only see pre-qualified candidates with
                  detailed assessment reports. Every interview is high-signal and worth their time.
                </p>
              </div>
            </div>

            {/* Hiring Managers */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Hiring Managers</h3>
                <p className="mt-1 text-sm text-ink-light">
                  <strong className="text-ink">Before:</strong> Waiting weeks for candidate pipelines,
                  making decisions with incomplete data, second-guessing every offer.
                </p>
                <p className="mt-1 text-sm text-ink-light">
                  <strong className="text-ink">After:</strong> Faster pipeline with higher confidence.
                  Structured reports with confidence intervals mean decisions are backed by data,
                  not gut feel.
                </p>
              </div>
            </div>

            {/* Operations */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Operations</h3>
                <p className="mt-1 text-sm text-ink-light">
                  <strong className="text-ink">Before:</strong> Ad-hoc processes, inconsistent
                  documentation, audit nightmares when HQ asks for hiring metrics.
                </p>
                <p className="mt-1 text-sm text-ink-light">
                  <strong className="text-ink">After:</strong> Predictable, consistent, and fully
                  audit-ready. Every decision is documented. Every score has a paper trail. HQ gets
                  the compliance data they need without manual collation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS TO TRACK ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Metrics to Track</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Scaling isn&rsquo;t just about doing more&nbsp;&mdash; it&rsquo;s about proving that
              more doesn&rsquo;t mean worse. Track these three categories:
            </p>
          </div>

          <div className="mt-8 space-y-8">
            {/* Throughput */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="text-lg font-bold text-ink">Throughput</h3>
              <p className="mt-2 text-sm text-ink-light">
                The full-funnel flow from top to bottom:
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Applications received</span>
                  <span className="font-mono font-bold text-ink">Track weekly</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Assessments completed</span>
                  <span className="font-mono font-bold text-ink">Target: &gt;70% of applicants</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Finals conducted</span>
                  <span className="font-mono font-bold text-ink">Target: 15&ndash;25% of assessed</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Offers extended</span>
                  <span className="font-mono font-bold text-ink">Target: 60&ndash;80% of finals</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Hires closed</span>
                  <span className="font-mono font-bold text-ink">Target: &gt;85% offer acceptance</span>
                </div>
              </div>
            </div>

            {/* Quality */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="text-lg font-bold text-ink">Quality</h3>
              <p className="mt-2 text-sm text-ink-light">
                The proof that scaling didn&rsquo;t compromise standards:
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Assessment score &harr; performance correlation</span>
                  <span className="font-mono font-bold text-ink">Target: &gt;0.6</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">90-day retention rate</span>
                  <span className="font-mono font-bold text-ink">Target: &gt;92%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Hiring manager satisfaction</span>
                  <span className="font-mono font-bold text-ink">Target: &gt;4.2/5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">6-month performance ratings</span>
                  <span className="font-mono font-bold text-ink">Target: &ge;3.5/5 avg</span>
                </div>
              </div>
            </div>

            {/* Efficiency */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="text-lg font-bold text-ink">Efficiency</h3>
              <p className="mt-2 text-sm text-ink-light">
                The operational gains that make scaling sustainable:
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Time to offer (application &rarr; offer letter)</span>
                  <span className="font-mono font-bold text-ink">Target: &lt;10 days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Interviewer hours per hire</span>
                  <span className="font-mono font-bold text-ink">Target: &lt;5 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-light">Cost per hire (all-in)</span>
                  <span className="font-mono font-bold text-ink">Target: &lt;&#8377;80K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Ready to Scale Without the Trade-Off?</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Bangalore&rsquo;s GCCs don&rsquo;t have a talent shortage&nbsp;&mdash; they have a
              screening bottleneck. Remove the bottleneck, and scaling becomes a volume knob you can
              turn without watching quality drop.
            </p>
            <p className="text-base font-semibold text-ink md:text-lg">
              Hire 2x or 3x the engineers with the same (or better) quality bar. The math works when
              the process is right.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/solutions/gcc"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-center font-semibold text-ink hover:bg-brand-orange"
            >
              See GCC Solutions
            </Link>
            <Link
              href="/resources/roi-calculator"
              className="rounded-lg border border-ink px-6 py-3 text-center font-medium text-ink hover:bg-ink hover:text-white"
            >
              Calculate Savings
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED READING ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-ink">Related reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/gcc-hiring-hq-mistakes', label: 'GCC HQ Mistakes', desc: 'Why HQ-designed processes fail in Bangalore' },
              { href: '/blog/phone-screen-is-dead', label: 'Phone Screen Is Dead', desc: 'The case for async-first technical screening' },
              { href: '/blog/reduce-interviewer-bias-india', label: 'Reduce Bias', desc: 'Structured approaches to fairer hiring in India' },
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
