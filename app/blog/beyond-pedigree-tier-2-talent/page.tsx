import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Find Tier-2 Talent Without Lowering Standards | Beyond IIT Hiring | LayersRank',
  description:
    'IIT/NIT filtering excludes 99% of Indian engineering talent. Here\u2019s how to find strong candidates from Tier-2 and Tier-3 colleges without compromising your bar.',
  path: '/blog/beyond-pedigree-tier-2-talent',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Beyond Pedigree: How to Find Elite Tier-2 Talent Without Compromising Technical Rigor',
  description:
    'IIT/NIT filtering excludes 99% of Indian engineering talent. Here\u2019s how to find strong candidates from Tier-2 and Tier-3 colleges without compromising your bar.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'Tier-2 talent India',
    'beyond IIT hiring',
    'non-pedigree engineers',
    'talent beyond college brand',
    'India engineering talent',
  ],
};

export default function BeyondPedigreeTier2TalentBlogPost() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <time dateTime="2026-02">February 2026</time>
            <span aria-hidden="true">&middot;</span>
            <span>7 min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>LayersRank Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Beyond Pedigree: How to Find Elite Tier-2 Talent Without Compromising Technical Rigor
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            India produces <strong className="text-white">1.5&nbsp;million</strong> engineering graduates every year.
            The IITs produce roughly <strong className="text-white">16,000</strong>. When you filter to IIT/NIT only,
            you&rsquo;re excluding <strong className="text-white">99%</strong> of the talent pool before evaluating a
            single person.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            Within that 99% are candidates who would outperform the average IIT graduate&nbsp;&mdash; if anyone ever
            bothered to assess them.
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            The question isn&rsquo;t whether Tier-2 talent exists. It&rsquo;s whether your process can find it.
          </p>
        </div>
      </section>

      {/* ── THE PEDIGREE ASSUMPTION ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Pedigree Assumption</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              The logic behind pedigree-based hiring follows a three-step argument. Each step sounds reasonable, but each
              has problems:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">&ldquo;IIT admission is extremely competitive.&rdquo;</h3>
                <p className="mt-1 text-sm text-ink-light">
                  True&nbsp;&mdash; but the competition happens at age&nbsp;17, based on JEE performance, often after
                  &ldquo;coaching&rdquo; costing &nbsp;&#8377;2&ndash;5&nbsp;lakh. It measures how well a teenager
                  performed on one specific exam on one specific day, frequently with years of expensive preparation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">&ldquo;Competitive admission filters for capability.&rdquo;</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Partially&nbsp;&mdash; JEE tests specific cognitive abilities: pattern recognition, speed under
                  pressure, recall of physics/chemistry/math formulae. These are real abilities, but they&rsquo;re not
                  identical to the skills that predict job performance in software engineering, data science, or product
                  development.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">&ldquo;Therefore IIT graduates are more capable.&rdquo;</h3>
                <p className="mt-1 text-sm text-ink-light">
                  A correlation exists, but it&rsquo;s weaker than most hiring managers assume. Studies consistently show
                  the predictive power of college brand fades significantly by year&nbsp;2&ndash;3 of a career. After
                  that, what you&rsquo;ve actually done matters far more than where you studied.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[15px] font-medium leading-relaxed text-ink md:text-base">
            The assumption isn&rsquo;t entirely wrong. It&rsquo;s just far noisier than people treat it&nbsp;&mdash; and
            the cost of relying on it exclusively is enormous.
          </p>
        </div>
      </section>

      {/* ── WHAT PEDIGREE ACTUALLY MEASURES ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Pedigree Actually Measures</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              When you filter by IIT/NIT, you&rsquo;re not filtering for &ldquo;engineering ability.&rdquo; You&rsquo;re
              filtering for a specific combination of four things:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Cognitive Ability for JEE</h3>
              <p className="mt-2 text-sm text-ink-light">
                A specific kind of smart&nbsp;&mdash; the ability to solve structured physics, chemistry, and math
                problems under extreme time pressure. Real, but not identical to job performance. Many excellent
                engineers think differently.
              </p>
            </div>
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Access to Coaching</h3>
              <p className="mt-2 text-sm text-ink-light">
                JEE coaching costs <strong className="font-mono text-ink">&#8377;2&ndash;5L</strong> over two years.
                This is socioeconomic filtering, not capability filtering. Talented students from families that
                can&rsquo;t afford Kota or Allen are systematically excluded.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Teenage Decision-Making</h3>
              <p className="mt-2 text-sm text-ink-light">
                The decision to pursue JEE is made at age&nbsp;14&ndash;15. Many extraordinarily talented people chose
                different paths&nbsp;&mdash; state boards, commerce, arts, or simply didn&rsquo;t have the guidance to
                know JEE was an option.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Persistence in a Narrow Path</h3>
              <p className="mt-2 text-sm text-ink-light">
                Succeeding at JEE requires following a prescribed curriculum for 2+ years. This tests persistence in
                structured environments, which is different from the ambiguous, self-directed problem-solving that
                real engineering work demands.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[15px] leading-relaxed text-ink-light md:text-base">
            These aren&rsquo;t bad qualities. But they&rsquo;re not the <em>only</em> qualities that matter, and
            they&rsquo;re not the <em>best</em> predictors of on-the-job success.
          </p>
        </div>
      </section>

      {/* ── WHAT ACTUALLY PREDICTS JOB PERFORMANCE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Actually Predicts Job Performance</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Decades of industrial-organizational psychology research converge on the same set of factors. Here are
              the top five:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">1. General Cognitive Ability</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-light md:text-base">
                The single strongest predictor&nbsp;&mdash; and you can <em>assess it directly</em> rather than
                inferring it from a college name. A well-designed assessment measures this in 30&nbsp;minutes more
                accurately than a JEE rank from 5&nbsp;years ago.
              </p>
            </div>
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">2. Conscientiousness</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-light md:text-base">
                The tendency to be thorough, reliable, and persistent. Correlated with but not exclusive to pedigree.
                Many Tier-2 graduates demonstrate exceptional conscientiousness&nbsp;&mdash; they just never got the
                chance to prove it.
              </p>
            </div>
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">3. Relevant Knowledge &amp; Skills</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-light md:text-base">
                Can the candidate actually do the job? You can <em>assess this directly</em> too. A candidate who
                demonstrates strong system design thinking or writes clean, efficient code has shown you more than any
                transcript ever could.
              </p>
            </div>
            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">4. Learning Ability</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-light md:text-base">
                How quickly someone picks up new concepts and adapts. Critical in fast-moving engineering environments.
                Not measured by JEE, not predicted by college brand, but measurable through well-designed assessment.
              </p>
            </div>
            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">5. Communication &amp; Collaboration</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-light md:text-base">
                The ability to explain ideas clearly, work effectively in teams, and navigate ambiguity. Increasingly
                important as engineering becomes more collaborative. Completely unrelated to college brand.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
            <p className="text-base font-semibold text-ink md:text-lg">
              Notice what&rsquo;s <em>not</em> on this list: college brand.
            </p>
            <p className="mt-2 text-sm text-ink-light">
              College brand is a noisy proxy for some of these factors. When you can measure the factors directly, the
              proxy becomes unnecessary&nbsp;&mdash; and its noise becomes pure cost.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE TIER-2 ADVANTAGE ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Tier-2 Advantage</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Beyond simply finding competent people, there are structural advantages to hiring from a wider talent pool:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-green">20&ndash;40%</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Lower Salary Expectations</h3>
              <p className="mt-2 text-sm text-ink-light">
                Strong Tier-2 candidates typically command <strong className="font-mono text-ink">20&ndash;40%</strong> lower
                salaries than equivalent IIT graduates, not because they&rsquo;re less capable but because
                the market undervalues them. Your arbitrage opportunity.
              </p>
            </div>
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-blue">Higher</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Loyalty &amp; Retention</h3>
              <p className="mt-2 text-sm text-ink-light">
                Candidates who had to work harder to get their shot tend to value the opportunity more. They have
                something to prove. Attrition among carefully selected Tier-2 hires is often lower than among
                pedigree hires who have abundant options.
              </p>
            </div>
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-orange">Diverse</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Problem-Solving Perspectives</h3>
              <p className="mt-2 text-sm text-ink-light">
                People from different backgrounds think differently. Teams with diverse educational backgrounds generate
                more creative solutions than homogeneous IIT-only teams. Cognitive diversity is a competitive advantage.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-red">Untapped</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Less-Competitive Pools</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every company in India is fighting over the same 16,000 IIT graduates. Meanwhile, strong candidates from
                Tier-2 colleges receive far fewer offers. Less competition means better candidates at better terms.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base font-semibold text-ink md:text-lg">
            The best Tier-2 candidates are often better than the median IIT graduate. You just need a way to find them.
          </p>
        </div>
      </section>

      {/* ── HOW TO FIND THEM ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How to Find Them</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Three practical approaches that work:
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {/* Approach 1 */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">
                1. Stop Filtering by School Entirely
              </h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  Replace the college-name filter with an automated assessment that every applicant takes. Review the top
                  20% by assessment score regardless of where they studied. You&rsquo;ll be surprised how many strong
                  candidates come from schools you&rsquo;ve never heard of.
                </p>
                <p>
                  This doesn&rsquo;t mean lowering your bar. It means <em>moving</em> your bar from &ldquo;where did you
                  study?&rdquo; to &ldquo;what can you do?&rdquo;
                </p>
              </div>
            </div>

            {/* Approach 2 */}
            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">
                2. Actively Source Strong Tier-2 Programs
              </h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  Not all non-IIT programs are equal. Some consistently produce excellent engineers. Consider actively
                  recruiting from:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong className="text-ink">NIT Trichy, NIT Warangal, NIT Surathkal</strong>&nbsp;&mdash; often overlooked in favour of IITs despite strong programs</li>
                  <li><strong className="text-ink">BITS Pilani (all campuses)</strong>&nbsp;&mdash; rigorous curriculum, strong alumni network</li>
                  <li><strong className="text-ink">VIT, SRM, Manipal</strong>&nbsp;&mdash; large student bodies with strong top percentiles</li>
                  <li><strong className="text-ink">IIIT Hyderabad, IIIT Bangalore</strong>&nbsp;&mdash; focused CS programs with excellent outcomes</li>
                  <li><strong className="text-ink">Top state university departments</strong>&nbsp;&mdash; College of Engineering Pune, Jadavpur, Anna University</li>
                </ul>
              </div>
            </div>

            {/* Approach 3 */}
            <div className="border-l-4 border-brand-blue pl-6">
              <h3 className="text-lg font-bold text-ink">
                3. Look for Demonstrated Ability
              </h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  The best signal is what someone has actually built or accomplished. Look for:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong className="text-ink">Open-source contributions</strong>&nbsp;&mdash; actual code, reviewed by others</li>
                  <li><strong className="text-ink">Personal projects</strong>&nbsp;&mdash; deployed applications, published libraries</li>
                  <li><strong className="text-ink">Competition performance</strong>&nbsp;&mdash; ICPC, CodeChef, Codeforces ratings</li>
                  <li><strong className="text-ink">Industry certifications</strong>&nbsp;&mdash; AWS, GCP, Kubernetes certifications show initiative</li>
                </ul>
                <p>
                  A candidate with a strong GitHub profile and a Codeforces rating of 1800+ has shown you more about
                  their engineering ability than any college name ever could.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW LAYERSRANK HELPS ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How LayersRank Helps</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              LayersRank was built for exactly this problem. Our assessment platform enables pedigree-neutral evaluation
              through four key capabilities:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Identity-Blind Assessment</h3>
              <p className="mt-2 text-sm text-ink-light">
                Evaluators and scoring models never see the candidate&rsquo;s college name, photo, or background.
                Every candidate is assessed purely on demonstrated capability. No bias leakage, no halo effects.
              </p>
            </div>
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Consistent Criteria</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every candidate&nbsp;&mdash; whether from IIT Bombay or a state engineering college&nbsp;&mdash; is
                assessed against the same rubric, with the same depth and the same rigour. The bar doesn&rsquo;t shift
                based on the name on the resume.
              </p>
            </div>
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Confidence Scoring</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every score comes with a confidence interval. You know not just <em>what</em> the candidate scored but
                <em> how reliable</em> that score is. A high-confidence 72 from a Tier-2 candidate is more actionable
                than a low-confidence 78 from anyone.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Adaptive Follow-Up</h3>
              <p className="mt-2 text-sm text-ink-light">
                When initial responses are ambiguous, the system asks targeted follow-up questions to resolve
                uncertainty. This is especially valuable for non-traditional candidates whose communication style may
                differ from what standard assessments expect.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[15px] leading-relaxed text-ink-light md:text-base">
            The result: candidates evaluated on what they can actually do, not where they studied.
          </p>
        </div>
      </section>

      {/* ── WHAT CLIENTS FIND ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Clients Find</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              When companies switch to pedigree-neutral assessment, the results consistently surprise them:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-green">30&ndash;40%</p>
              <p className="mt-2 text-sm text-ink-light">
                of strong hires come from schools that were previously filtered out entirely. These candidates would
                never have been seen under the old process.
              </p>
            </div>
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-blue">Zero</p>
              <p className="mt-2 text-sm text-ink-light">
                quality degradation. On-the-job performance metrics for pedigree-neutral hires match or exceed those of
                pedigree-filtered hires. The bar didn&rsquo;t drop&nbsp;&mdash; the measurement got better.
              </p>
            </div>
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-orange">Improved</p>
              <p className="mt-2 text-sm text-ink-light">
                diversity across socioeconomic backgrounds, geographies, and educational paths. Teams become more
                representative of India&rsquo;s actual talent distribution, not just its coaching-class distribution.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <p className="font-mono text-2xl font-bold text-brand-yellow">Lower</p>
              <p className="mt-2 text-sm text-ink-light">
                cost per hire. Less competition for candidates, lower salary expectations, and faster time-to-fill
                because you&rsquo;re fishing in a larger pond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE OBJECTIONS ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Objections</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              We hear these regularly. Here&rsquo;s what the data actually shows:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Objection 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-ink">
                &ldquo;IIT is still a strong signal. Why would I ignore it?&rdquo;
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                It&rsquo;s a signal, but it&rsquo;s weaker than you think&nbsp;&mdash; and it&rsquo;s noisy. Direct
                assessment of cognitive ability, technical skills, and problem-solving is a <em>stronger</em> signal.
                You&rsquo;re not ignoring IIT; you&rsquo;re replacing an indirect proxy with a direct measurement. IIT
                candidates who are genuinely strong will still score well.
              </p>
            </div>

            {/* Objection 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-ink">
                &ldquo;We don&rsquo;t have time to evaluate everyone.&rdquo;
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                Automated assessment takes the same effort whether you send it to 100 candidates or 10,000. The
                incremental cost of evaluating a broader pool is near zero. You&rsquo;re not adding work; you&rsquo;re
                replacing a cheap-but-inaccurate filter (college name) with a cheap-and-accurate one (assessment score).
              </p>
            </div>

            {/* Objection 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-ink">
                &ldquo;Tier-2 candidates don&rsquo;t have the fundamentals.&rdquo;
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                Some don&rsquo;t. Many do. The point is to identify <em>which individuals</em> have the fundamentals
                rather than making a blanket assumption based on institutional affiliation. A Tier-2 candidate who scores
                in the top 10% on a rigorous technical assessment has demonstrated stronger fundamentals than a
                median-performing IIT graduate.
              </p>
            </div>

            {/* Objection 4 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-ink">
                &ldquo;Our hiring managers prefer IIT/NIT candidates.&rdquo;
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                Show them the data. Run a blind pilot: present hiring managers with assessment results without college
                names. Track which candidates they select. Then reveal the schools. In our experience, hiring managers
                are genuinely surprised&nbsp;&mdash; and quickly become converts when they see that their own preferences
                align with capability, not brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE BOTTOM LINE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Bottom Line</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Finding great Tier-2 talent doesn&rsquo;t mean lowering your standards. It means changing <em>how</em> you
              measure.
            </p>
            <p>
              Same bar. Better measurement. Wider pool.
            </p>
            <p>
              The companies that figure this out first will have access to a talent pool that&rsquo;s 50&times; larger
              than their competitors&rsquo;&nbsp;&mdash; at lower cost, with better retention, and without sacrificing a
              single point of technical quality.
            </p>
            <p className="text-base font-semibold text-ink md:text-lg">
              The best engineers in India aren&rsquo;t all in the same 23 institutions. Your hiring process should
              reflect that.
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
              See Pedigree-Neutral Assessment
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
              { href: '/resources/whitepapers/pedigree-bias-hiring-whitepaper', label: 'Pedigree Bias Whitepaper', desc: 'Research on how college brand distorts hiring decisions' },
              { href: '/resources/case-studies/it-services-zero-pedigree-filtering', label: 'IT Services Case Study', desc: 'How one company eliminated pedigree filtering' },
              { href: '/blog/reduce-interviewer-bias-india', label: 'Reduce Bias', desc: 'Practical strategies for reducing interviewer bias' },
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
