import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'GCC Hiring: What US Headquarters Gets Wrong About India | LayersRank',
  description:
    'US-designed hiring tools don\'t fit GCC India operations. Here\'s what HQ misunderstands and how to communicate your actual needs.',
  path: '/blog/gcc-hiring-hq-mistakes',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hiring for GCCs: What US Headquarters Gets Wrong',
  description:
    'US-designed hiring tools don\'t fit GCC India operations. Here\'s what HQ misunderstands and how to communicate your actual needs.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'GCC hiring India',
    'global capability center recruitment',
    'US HQ hiring requirements',
    'India tech hiring challenges',
  ],
};

export default function GccHiringHqMistakesBlogPost() {
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
            Hiring for GCCs: What US Headquarters Gets&nbsp;Wrong
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            The conversation usually goes like this. HQ says: &ldquo;We&rsquo;ve standardized on
            [expensive US tool]. Roll it out globally.&rdquo; You say: &ldquo;It doesn&rsquo;t fit
            how we hire here.&rdquo; HQ says: &ldquo;It&rsquo;s the global standard.&rdquo;
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            You&rsquo;re not wrong. They&rsquo;re not unreasonable. But there&rsquo;s a third
            option nobody talks about&nbsp;&mdash; helping HQ understand what&rsquo;s actually
            different about hiring in India and why a different approach produces the outcomes
            they&nbsp;want.
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            Here&rsquo;s what to say&nbsp;&mdash; and how to say&nbsp;it.
          </p>
        </div>
      </section>

      {/* ── WHAT HQ GETS WRONG ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What HQ Gets Wrong</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Headquarters doesn&rsquo;t get things wrong out of malice. They get them wrong
              because their hiring reality is fundamentally different from yours. Five assumptions
              cause the most&nbsp;damage:
            </p>
          </div>

          {/* Mistake 1 */}
          <div className="mt-10 space-y-8">
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                <span className="font-mono text-brand-red">1.</span> &ldquo;If It Works in Palo Alto, It Works in Bangalore&rdquo;
              </h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink">US Reality</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Low volume, high touch: <strong className="font-mono text-ink">50&ndash;200</strong> hires/year</li>
                    <li>Long processes: <strong className="font-mono text-ink">4&ndash;6 rounds</strong>, <strong className="font-mono text-ink">4&ndash;8 weeks</strong></li>
                    <li>Passive candidates who need persuading</li>
                    <li>High base compensation absorbs tool cost</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">India Reality</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>High volume: <strong className="font-mono text-ink">500&ndash;5,000</strong> hires/year</li>
                    <li>Compressed timelines: <strong className="font-mono text-ink">1&ndash;2 weeks</strong> to offer</li>
                    <li>Active candidates juggling multiple offers</li>
                    <li><strong className="font-mono text-ink">60&ndash;90 day</strong> notice periods add urgency</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-brand-red">
                A process designed for 150 US hires collapses at 2,000 India hires. Different
                scale requires different&nbsp;tooling.
              </p>
            </div>

            {/* Mistake 2 */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                <span className="font-mono text-brand-orange">2.</span> &ldquo;Enterprise Pricing Is Appropriate&rdquo;
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  A platform like HireVue runs <strong className="font-mono text-ink">$35K&ndash;$50K/year</strong>.
                  For a US team hiring 100 people at $150K+ salaries, that&rsquo;s a rounding
                  error&nbsp;&mdash; less than the cost of one bad&nbsp;hire.
                </p>
                <p>
                  For a GCC hiring 1,000 people at Indian compensation levels, that same license
                  costs more than several entire hires. The math simply doesn&rsquo;t&nbsp;work.
                </p>
                <p>
                  US tools are priced for US economics. What India needs: per-interview pricing,
                  pay-as-you-go models, and INR billing that makes ROI positive at Indian cost&nbsp;structures.
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-brand-orange">
                Price isn&rsquo;t the objection. ROI at local economics is the&nbsp;objection.
              </p>
            </div>

            {/* Mistake 3 */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                <span className="font-mono text-brand-red">3.</span> &ldquo;Our Interview Process Is Best Practice&rdquo;
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  US &ldquo;best practice&rdquo;: <strong className="font-mono text-ink">5&ndash;7 rounds</strong>,
                  take-home assignments, on-site days, weeks between stages. It works in the
                  US because candidates tolerate it&nbsp;&mdash; they often have one or two options
                  and can afford to&nbsp;wait.
                </p>
                <p>
                  India reality: candidates hold multiple offers, serve <strong className="font-mono text-ink">2&ndash;3 month</strong> notice
                  periods, and face <strong className="font-mono text-ink">20&ndash;30%</strong> offer dropout rates when
                  processes drag. Every extra week of process doesn&rsquo;t add
                  signal&nbsp;&mdash; it subtracts&nbsp;candidates.
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-brand-red">
                Best practice for India = move fast without sacrificing quality. Speed and rigor
                aren&rsquo;t&nbsp;opposites.
              </p>
            </div>

            {/* Mistake 4 */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                <span className="font-mono text-brand-orange">4.</span> &ldquo;Consistency Means Same Process Everywhere&rdquo;
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  HQ wants consistency. Fair enough. But identical process across vastly different
                  markets doesn&rsquo;t produce consistent quality&nbsp;&mdash; it produces
                  consistently poor outcomes in markets the process wasn&rsquo;t designed&nbsp;for.
                </p>
                <p>
                  A six-round process that surfaces top-10% talent in the US surfaces whoever is
                  still available after six rounds in India. You&rsquo;ve selected for patience, not&nbsp;ability.
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-brand-orange">
                True consistency = consistent quality outcomes, achieved through adapted processes.
                Not identical steps producing wildly different&nbsp;results.
              </p>
            </div>

            {/* Mistake 5 */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                <span className="font-mono text-brand-red">5.</span> &ldquo;We Trust Our Tools&rsquo; AI&rdquo;
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  US tools validated their AI on US candidates, US interviewers, and US
                  communication norms. The training data reflects American patterns of speech,
                  confidence signaling, and structured&nbsp;responses.
                </p>
                <p>
                  Deploy that same black-box AI on Indian candidates&nbsp;&mdash; who may use
                  different communication patterns, reference different cultural contexts, and
                  signal competence differently&nbsp;&mdash; and you genuinely don&rsquo;t know
                  what the model is&nbsp;measuring.
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-brand-red">
                An AI you can&rsquo;t audit is a liability, not a&nbsp;tool. Especially across
                cultural&nbsp;boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO TALK TO HQ ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How to Talk to HQ</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Telling HQ &ldquo;this doesn&rsquo;t work&rdquo; never works. Here&rsquo;s what&nbsp;does:
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {/* Frame as Risk */}
            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">Frame as Risk, Not Cost</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  HQ tunes out &ldquo;it&rsquo;s too expensive.&rdquo; They hear it from every
                  regional office. What they don&rsquo;t tune out is&nbsp;risk.
                </p>
                <p>
                  Instead of: <span className="italic text-ink-muted">&ldquo;The tool costs too much.&rdquo;</span>
                </p>
                <p>
                  Say: <strong className="text-ink">&ldquo;We&rsquo;re seeing 25% candidate dropout
                  at the four-week mark. We need a process that closes in two weeks or we&rsquo;ll
                  miss Q3 headcount targets.&rdquo;</strong>
                </p>
                <p>
                  Risk to business outcomes is a language HQ speaks&nbsp;fluently.
                </p>
              </div>
            </div>

            {/* Bring Data */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Bring Data, Not Opinions</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  Opinions are debatable. Numbers aren&rsquo;t. Before you go to HQ, track&nbsp;these:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong className="text-ink">Time-to-offer</strong> &mdash; from first screen to offer letter</li>
                  <li><strong className="text-ink">Dropout rate</strong> &mdash; candidates who exit at each stage</li>
                  <li><strong className="text-ink">Screen-to-offer conversion</strong> &mdash; funnel efficiency</li>
                  <li><strong className="text-ink">Interviewer time per hire</strong> &mdash; engineering hours consumed</li>
                  <li><strong className="text-ink">Panel consistency</strong> &mdash; do interviewers agree on the same candidate?</li>
                </ul>
                <p>
                  Six weeks of data is enough. Present it clean, present it visual, and let the
                  numbers make your&nbsp;argument.
                </p>
              </div>
            </div>

            {/* Propose Solutions */}
            <div className="border-l-4 border-brand-orange pl-6">
              <h3 className="text-lg font-bold text-ink">Propose Solutions, Not Problems</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  Never walk into HQ with &ldquo;this is broken&rdquo; and nothing else. Come&nbsp;with:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>A <strong className="text-ink">specific tool recommendation</strong> that addresses the gaps</li>
                  <li>A <strong className="text-ink">risk mitigation plan</strong> explaining how you&rsquo;ll maintain quality</li>
                  <li><strong className="text-ink">Global reporting compatibility</strong> &mdash; how results map to HQ&rsquo;s existing dashboards</li>
                  <li>A <strong className="text-ink">pilot plan</strong> &mdash; 30&ndash;60 days, defined metrics, clear success criteria</li>
                </ul>
                <p>
                  HQ wants to say yes. Make it easy for&nbsp;them.
                </p>
              </div>
            </div>

            {/* Global Bar Alignment */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Emphasize Global Bar Alignment</h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  HQ&rsquo;s deepest fear is that regional offices will lower the bar. Address it
                  head-on.
                </p>
                <p>
                  Don&rsquo;t say: <span className="italic text-ink-muted">&ldquo;Let us do our own thing.&rdquo;</span>
                </p>
                <p>
                  Say: <strong className="text-ink">&ldquo;We want to find better ways to prove we
                  meet the global bar&nbsp;&mdash; with data HQ can actually verify.&rdquo;</strong>
                </p>
                <p>
                  When you frame it as &ldquo;more accountability, not less,&rdquo; the dynamic
                  changes&nbsp;entirely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT ACTUALLY WORKS FOR INDIA GCC HIRING ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            What Actually Works for India GCC&nbsp;Hiring
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              After working with GCCs across Bangalore, Hyderabad, Pune, and Chennai, certain
              patterns emerge consistently. Here&rsquo;s what separates programs that hit
              headcount from those that don&rsquo;t:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Speed Is Quality</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                In the Indian market, slow processes don&rsquo;t just lose candidates&nbsp;&mdash;
                they negatively select. The best engineers have the most options and the least
                patience. A four-week process doesn&rsquo;t get you more data; it gets you
                whoever didn&rsquo;t have a better offer. Speed and rigor must be
                simultaneous, not&nbsp;sequential.
              </p>
            </div>

            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Consistency Requires Measurement</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                You can&rsquo;t claim consistency without measuring it. That means tracking
                panel agreement rates&nbsp;&mdash; do two interviewers evaluating the same
                candidate reach the same conclusion? It means standardized scoring rubrics
                applied uniformly. If your interviewers can&rsquo;t agree, your process has a
                problem no tool can&nbsp;fix.
              </p>
            </div>

            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Audit Trails Protect Everyone</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Every hiring decision should be explainable&nbsp;&mdash; why this candidate
                advanced, why that one didn&rsquo;t. Not just for compliance, but for
                organizational trust. When HQ can pull a report and see exactly how decisions
                were made, the &ldquo;are they lowering the bar?&rdquo; question answers&nbsp;itself.
              </p>
            </div>

            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Local Economics Matter</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                A tool that saves $10,000 per hire in the US might cost more than the hire itself
                in India. ROI math must be recalculated at Indian cost structures&nbsp;&mdash;
                per-interview pricing, INR billing, and pay-as-you-go models aren&rsquo;t
                nice-to-haves. They&rsquo;re prerequisites for positive&nbsp;ROI.
              </p>
            </div>

            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Candidates Are Not US Candidates</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Indian tech candidates typically hold more concurrent offers, serve longer
                notice periods, navigate different negotiation norms, and evaluate opportunities
                through a different lens. Tools and processes that assume US candidate behavior
                will consistently misread Indian candidate&nbsp;signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PATH FORWARD ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Path Forward</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Changing HQ&rsquo;s mind doesn&rsquo;t happen in one conversation. It happens in
              six&nbsp;steps:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">Document the current state</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Gather hard data on your existing process: time-to-offer, dropout rates,
                  interviewer hours, panel agreement, offer acceptance&nbsp;rates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Identify specific gaps</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Where exactly does the current process break? Pinpoint the stages where
                  candidates drop out, where interviewers disagree, where timelines&nbsp;stall.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Research alternatives</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Find tools built for your market&rsquo;s realities&nbsp;&mdash; not US tools
                  with a &ldquo;global&rdquo; label, but solutions designed for high-volume,
                  fast-cycle, India-based&nbsp;hiring.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Build the business case</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Frame everything in terms HQ cares about: risk reduction, headcount
                  attainment, quality metrics, and global bar&nbsp;alignment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-ink">Propose a pilot</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Not a full rollout&nbsp;&mdash; a 30&ndash;60 day pilot with clear success
                  criteria. Low risk for HQ, high signal for&nbsp;you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                6
              </span>
              <div>
                <h3 className="font-bold text-ink">Report results relentlessly</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Share pilot data before anyone asks for it. Proactive transparency builds
                  trust faster than any&nbsp;presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Ready to Build Your Case?</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              LayersRank was built for exactly this scenario&nbsp;&mdash; GCCs that need to meet a
              global hiring bar with tools designed for Indian market&nbsp;realities. Per-interview
              pricing. Two-week processes. Auditable scoring. Panel consistency&nbsp;metrics.
            </p>
            <p className="text-base font-semibold text-ink md:text-lg">
              Give HQ what they actually want&nbsp;&mdash; proof that your hiring meets the global
              standard&nbsp;&mdash; with a process that actually works in&nbsp;India.
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
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-ink">Related reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/audit-ready-hiring-reports', label: 'Audit-Ready Reports', desc: 'Build hiring reports that satisfy compliance and HQ' },
              { href: '/blog/scale-bangalore-hiring', label: 'Scale Bangalore Hiring', desc: 'Grow from 500 to 5,000 hires without breaking quality' },
              { href: '/blog/panel-consistency-distributed-teams', label: 'Panel Consistency', desc: 'Keep distributed interview panels aligned and calibrated' },
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
