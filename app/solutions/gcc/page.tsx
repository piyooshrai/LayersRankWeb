import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'GCC Hiring Automation India | LayersRank for Global Capability Centers',
  description:
    'Scale engineering hiring across Bangalore, Hyderabad, Pune, and NCR with consistent evaluation, pedigree-neutral scoring, and audit-ready reports for HQ approval. Reduce panel disagreement by 73%.',
  path: '/solutions/gcc',
});

const faqs = [
  {
    q: 'How does this integrate with our existing ATS?',
    a: 'We integrate with Workday, SAP SuccessFactors, Oracle Taleo, Greenhouse, Lever, and others. Push candidates from your ATS to LayersRank. Pull completed reports back automatically. Your ATS remains the system of record; LayersRank provides the evaluation layer.',
  },
  {
    q: 'Can we customize questions for our specific tech stack?',
    a: 'Yes. Start with our library of 1,000+ vetted questions, then customize. If you use specific technologies (Kafka, Kubernetes, your internal frameworks), you can add questions that test relevant knowledge.',
  },
  {
    q: 'How do we handle roles we haven\'t configured yet?',
    a: 'Two options: Use a generic template from our library (works for most standard roles), or contact us for rapid custom configuration (typically 2-3 days for a new role family).',
  },
  {
    q: 'What if hiring managers don\'t trust AI evaluation?',
    a: 'Common concern, easily addressed. Run parallel evaluation for one month: AI assessment plus traditional interview. Hiring managers see both. When they see AI assessments predict their own conclusions (and sometimes catch things they missed), trust builds quickly.',
  },
  {
    q: 'How do we handle candidates who need accommodations?',
    a: 'Contact us before the interview. We can extend time limits, adjust formats, or provide alternative accommodations while maintaining evaluation validity.',
  },
  {
    q: 'What about candidates who have poor internet connectivity?',
    a: 'Interviews auto-save throughout. Candidates can pause and resume. We support low-bandwidth mode for areas with poor connectivity. Video compression adapts to available bandwidth.',
  },
  {
    q: 'Is the platform secure enough for our compliance requirements?',
    a: 'SOC 2 Type II certified. GDPR compliant. ISO 27001 aligned. India data residency available. Role-based access controls. SSO integration. Regular penetration testing. We can provide security documentation for your InfoSec review.',
  },
  {
    q: 'What languages do you support?',
    a: 'Currently optimized for English. Hindi and regional language support is on our roadmap for late 2026.',
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

export default function GccPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Solutions / Global Capability Centers"
        title="Hiring 500 Engineers a Quarter? You Need Decision Control."
        description="GCCs in Bangalore, Hyderabad, Pune, and NCR face a unique challenge: scaling engineering hiring while maintaining quality and consistency across cities, panels, and time zones. LayersRank gives you that control — structured evaluation, confident scores, and audit-ready reports that get HQ approval faster."
        primaryCta="Book a GCC Demo"
        primaryCtaHref="/demo"
        secondaryCta="Download GCC Playbook"
        secondaryCtaHref="/resources/gcc-playbook"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="GCC engineering hiring at scale across Indian cities" search="bangalore tech office team meeting engineering" />
        </div>
      </section>

      {/* ── THE GCC HIRING REALITY ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The GCC hiring reality</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Running talent acquisition for a Global Capability Center means operating at a scale
              that breaks normal hiring processes. You&apos;re not filling one senior engineer role.
              You&apos;re filling fifty. Per quarter. Across four cities. With twenty different hiring
              managers who all think they know what &ldquo;good&rdquo; looks like.
            </p>
            <p>
              While global HQ in Chicago or London or Singapore asks for data you don&apos;t have
              and approvals take two weeks because nobody trusts the local evaluation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
              <p className="text-3xl font-extrabold text-brand-red">67,500</p>
              <p className="mt-1 text-sm font-semibold text-ink">hours of interviewer time</p>
              <p className="mt-2 text-xs text-ink-muted">
                At 500 hires/year, 3 candidates per hire, 45 min per screen.
                At ₹3,000/hr fully-loaded, that&apos;s ₹20 crore annually on first-round screening alone.
              </p>
            </div>
            <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-6">
              <p className="text-3xl font-extrabold text-brand-orange">23 pts</p>
              <p className="mt-1 text-sm font-semibold text-ink">average score variation</p>
              <p className="mt-2 text-xs text-ink-muted">
                Same candidate, different panels, same organization — scores vary by 23 points
                on a 100-point scale. At GCC scale, that affects hundreds of decisions per quarter.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/20 bg-brand-yellow/5 p-6">
              <p className="text-3xl font-extrabold text-brand-yellow">15-25%</p>
              <p className="mt-1 text-sm font-semibold text-ink">offer dropout rate</p>
              <p className="mt-2 text-xs text-ink-muted">
                For a 500-hire operation, that&apos;s 75-125 accepted offers that don&apos;t convert.
                Each dropout restarts the search — weeks of delay per role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FIVE CHALLENGES ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The five GCC hiring challenges</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Every GCC talent leader we talk to describes the same five challenges.
          </p>

          <div className="mt-10 space-y-6">
            {/* Challenge 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">1</div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Panel inconsistency</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Your Bangalore panel evaluates differently than your Hyderabad panel. Within Bangalore,
                    your payments team evaluates differently than your platform team. Everyone thinks they&apos;re
                    calibrated. Nobody is. The same candidate gets a &ldquo;strong hire&rdquo; from one panel
                    and a &ldquo;pass&rdquo; from another.
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Interviewers resist standardization because they believe their judgment is better than any rubric.
                    The data shows their judgments don&apos;t agree with each other — which means at least some of them are wrong.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">2</div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Pedigree filtering</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Under pressure, teams fall back on &ldquo;IIT/NIT only&rdquo; or &ldquo;Must have FAANG experience.&rdquo;
                    The IIT system produces ~16,000 engineering graduates per year. India produces over 1.5 million.
                    By filtering to IITs, you&apos;re excluding 99% of the talent pool.
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    And you&apos;re overpaying for brand names. IIT grads command 20-40% premium compensation with no
                    performance difference. College prestige correlates weakly with job performance after the first year.
                    What predicts success is capability, not credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">3</div>
                <div>
                  <h3 className="text-lg font-bold text-ink">HQ approval delays</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Global leadership wants evidence, not &ldquo;the panel liked this candidate.&rdquo;
                    But your interview process produces opinions, not data. Scorecards with 4/5 ratings
                    that mean nothing consistent. Notes that say &ldquo;good communication skills&rdquo;
                    without defining what that means.
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    While you gather information, days pass. The best candidates — who have multiple offers — accept elsewhere.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">4</div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Offer dropouts</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    You extend an offer. The candidate accepts. Then silence. They&apos;ve taken another offer
                    or used yours to negotiate a raise. At 15-25% dropout rates, a 500-hire operation loses
                    75-125 accepted offers per year.
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Many dropouts have warning signs that a structured process could detect: lukewarm enthusiasm,
                    inconsistent motivation answers, competing opportunity red flags. Unstructured interviews miss
                    these signals because they&apos;re not looking for them.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge 5 */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">5</div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Interview loop overhead</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Because first-round signals are unreliable, you compensate with more rounds. First round.
                    Technical deep-dive. System design. Behavioral. Hiring manager. Bar raiser.
                    Six rounds to reach a decision you&apos;re still not confident in.
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    The loop isn&apos;t thorough — it&apos;s defensive. You&apos;re not gathering new signal
                    after the third round. You&apos;re seeking reassurance. If your first round produced
                    confident assessments, you wouldn&apos;t need five more rounds of confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW LAYERSRANK SOLVES THESE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How LayersRank solves these challenges</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs font-bold text-brand-yellow">vs. Panel Inconsistency</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Standardized evaluation</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every candidate for a given role answers identical questions, evaluated against defined rubrics
                by AI models that don&apos;t have good days and bad days. An 82 from Bangalore means the same
                as an 82 from Hyderabad. Panel inconsistency drops to near zero.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs font-bold text-brand-yellow">vs. Pedigree Filtering</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Capability-based scoring</h3>
              <p className="mt-2 text-sm text-ink-light">
                Scoring models don&apos;t see candidate names, college names, or company names. They see responses.
                GCCs using LayersRank report 35% wider candidate pipelines with no drop in quality — some
                report higher quality.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs font-bold text-brand-yellow">vs. HQ Delays</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Audit-ready reports</h3>
              <p className="mt-2 text-sm text-ink-light">
                Not &ldquo;4/5&rdquo; but &ldquo;78 &plusmn; 4, 89% confidence.&rdquo; Dimension breakdown,
                comparison context, full audit trail. GCCs report 60% faster HQ approvals. Some have moved
                from weekly cycles to same-day decisions.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs font-bold text-brand-yellow">vs. Offer Dropouts</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Risk signal detection</h3>
              <p className="mt-2 text-sm text-ink-light">
                Structured interviews reveal commitment signals. Generic motivation answers score lower.
                Behavioral responses reveal if they&apos;re running toward your opportunity or away from their
                current employer. Invest closing effort where it matters.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs font-bold text-brand-yellow">vs. Loop Overhead</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Confident first-round decisions</h3>
              <p className="mt-2 text-sm text-ink-light">
                An 82 with 91% confidence means you can trust that assessment. Final rounds focus on team fit
                and specific concerns — not re-validating competencies. GCCs report reducing from 5.2 to 3.4
                rounds on average.
              </p>
            </div>

            <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-brand-yellow">73%</p>
                <p className="mt-1 text-sm font-semibold text-ink">reduction in panel disagreement</p>
                <p className="mt-2 text-xs text-ink-muted">Average across GCC deployments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE SCALE MATH ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">The Scale Math</p>
          <h2 className="mt-4 text-2xl font-bold">What LayersRank changes for 500 hires/year</h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-left text-xs text-gray-400">
                  <th className="px-4 py-3 font-medium">Metric</th>
                  <th className="px-4 py-3 font-medium text-right">Current State</th>
                  <th className="px-4 py-3 font-medium text-right">With LayersRank</th>
                  <th className="px-4 py-3 font-medium text-right">Change</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  { metric: 'Candidates screened per hire', current: '3.2', after: '3.0', change: '-6%' },
                  { metric: 'Interviewer time per candidate', current: '45 min', after: '10 min', change: '-78%' },
                  { metric: 'Panel disagreement rate', current: '18%', after: '4%', change: '-78%' },
                  { metric: 'HQ approval cycle', current: '7 days', after: '1.5 days', change: '-79%' },
                  { metric: 'Offer dropout rate', current: '22%', after: '16%', change: '-27%' },
                  { metric: 'Average interview rounds', current: '5.2', after: '3.4', change: '-35%' },
                  { metric: 'Time-to-hire', current: '47 days', after: '29 days', change: '-38%' },
                ].map((row) => (
                  <tr key={row.metric} className="border-b border-gray-800">
                    <td className="px-4 py-3 font-medium text-white">{row.metric}</td>
                    <td className="px-4 py-3 text-right font-mono">{row.current}</td>
                    <td className="px-4 py-3 text-right font-mono text-brand-yellow">{row.after}</td>
                    <td className="px-4 py-3 text-right font-mono text-brand-green">{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '42,000 hrs', label: 'Interviewer time saved', detail: '₹12.6 crore at ₹3,000/hr' },
              { value: '140', label: 'Fewer contested decisions', detail: 'Per year from reduced disagreement' },
              { value: '2,750 days', label: 'Cycle time saved', detail: 'Across all hires from faster approvals' },
              { value: '30 hires', label: 'Avoided dropouts', detail: 'Additional successful hires from same pool' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-700 bg-white/5 p-5">
                <p className="text-2xl font-extrabold text-brand-yellow">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-white">{stat.label}</p>
                <p className="mt-1 text-xs text-gray-400">{stat.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-400 italic">
            The ROI isn&apos;t close. LayersRank pays for itself within the first quarter of deployment.
          </p>
        </div>
      </section>

      {/* ── IMPLEMENTATION ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Implementation at GCC scale</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Deploying across a multi-city operation. Here&apos;s how it typically works.
          </p>

          <div className="mt-10 space-y-0">
            {[
              {
                week: 'Week 1-2',
                title: 'Configuration',
                items: [
                  'Role templates for your most common positions (5-10 role families cover 80% of hiring)',
                  'Question selection from our library, customized for your stack and culture',
                  'Scoring weights calibrated to what matters for your organization',
                  'ATS integration (Workday, SAP SuccessFactors, etc.)',
                  'User provisioning for recruiters, hiring managers, and leadership',
                ],
              },
              {
                week: 'Week 3',
                title: 'Pilot',
                items: [
                  'One role, one city. 30-50 candidates parallel to existing process',
                  'Compare: Do assessments predict subsequent round success?',
                  'Do confidence levels correlate with decision certainty?',
                  'Gather feedback from recruiters, hiring managers, HQ',
                  'Iterate before broader rollout',
                ],
              },
              {
                week: 'Week 4-6',
                title: 'Phased rollout',
                items: [
                  'First: Highest-volume role (typically "Software Engineer")',
                  'Then: Senior variants, adjacent roles (Frontend, Backend, Full-Stack)',
                  'Then: Specialized roles (Data, ML, DevOps)',
                  'Each phase includes HM training and calibration sessions',
                  'City-by-city expansion with local support',
                ],
              },
              {
                week: 'Ongoing',
                title: 'Optimization',
                items: [
                  'Question performance analytics: which differentiate, which don\'t',
                  'Score calibration: do scores predict job performance?',
                  'Process refinement: where are bottlenecks?',
                  'Quarterly business reviews with talent leadership',
                ],
              },
            ].map((phase, idx) => (
              <div key={phase.week} className="relative flex gap-6 pb-8 last:pb-0">
                {idx < 3 && (
                  <div className="absolute left-5 top-12 h-full w-px bg-gray-200" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10">
                  <span className="font-mono text-xs font-bold text-brand-yellow">{phase.week.split(' ')[1] || phase.week}</span>
                </div>
                <div className="flex-1 rounded-xl border border-gray-200 bg-paper-off p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-ink-muted">{phase.week}</span>
                    <h3 className="text-lg font-bold text-ink">{phase.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-light">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Case Study</p>
          <h2 className="mt-4 text-2xl font-bold text-ink">Fortune 500 GCC transformation</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            A Global Capability Center in Bangalore hiring 200+ engineers per quarter across three cities.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Before */}
            <div className="rounded-xl border border-brand-red/20 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-red">The Problem</p>
              <div className="mt-4 space-y-3">
                {[
                  { metric: 'Panel disagreement', value: '21%', desc: 'Nearly 1 in 5 decisions contested' },
                  { metric: 'HQ approval cycle', value: '11 days', desc: 'Some extending to three weeks' },
                  { metric: 'Offer dropout rate', value: '26%', desc: 'Significant recruiter time wasted' },
                  { metric: 'Average interview rounds', value: '6.1', desc: 'First-round signal not trusted' },
                ].map((item) => (
                  <div key={item.metric} className="flex items-center justify-between rounded-lg bg-brand-red/5 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-ink">{item.metric}</p>
                      <p className="text-xs text-ink-muted">{item.desc}</p>
                    </div>
                    <p className="font-mono text-lg font-bold text-brand-red">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="rounded-xl border border-brand-green/20 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green">6 Months Later</p>
              <div className="mt-4 space-y-3">
                {[
                  { metric: 'Panel disagreement', value: '5%', change: '76% reduction' },
                  { metric: 'HQ approval cycle', value: '2.5 days', change: '77% reduction' },
                  { metric: 'Offer dropout rate', value: '14%', change: '46% reduction' },
                  { metric: 'Average interview rounds', value: '3.8', change: '38% reduction' },
                  { metric: 'Time-to-hire', value: '31 days', change: '43% reduction (was 54)' },
                  { metric: 'Interviewer time saved', value: '~18,000 hrs', change: 'Annually' },
                ].map((item) => (
                  <div key={item.metric} className="flex items-center justify-between rounded-lg bg-brand-green/5 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-ink">{item.metric}</p>
                      <p className="text-xs text-brand-green">{item.change}</p>
                    </div>
                    <p className="font-mono text-lg font-bold text-brand-green">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: 'For the first time, I can compare candidates across cities with confidence that the scores mean the same thing.',
                role: 'Talent Acquisition Director',
              },
              {
                quote: 'HQ approvals used to be our biggest bottleneck. Now I send the report and get approval the same day.',
                role: 'Recruiting Manager, Bangalore',
              },
              {
                quote: 'We\'ve expanded our candidate pool significantly. Some of our best recent hires came from colleges we\'d never considered before.',
                role: 'Engineering VP',
              },
            ].map((t) => (
              <div key={t.role} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-sm italic text-ink-light">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-3 text-xs font-semibold text-ink-muted">— {t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Pricing for GCC scale</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border-2 border-brand-yellow bg-paper-off p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Enterprise Plan</p>
              <h3 className="mt-2 text-xl font-bold text-ink">1,000+ interviews/quarter</h3>
              <ul className="mt-6 space-y-2">
                {[
                  'Custom per-interview pricing based on volume',
                  'Dedicated implementation team',
                  'Custom integrations',
                  'SSO and advanced security',
                  'India data residency',
                  'Dedicated customer success manager',
                  'Quarterly business reviews',
                  'Custom SLA (up to 99.99% uptime)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Typical GCC Economics</p>
              <h3 className="mt-2 text-xl font-bold text-ink">For a 500-hire/year GCC</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-brand-red/5 p-4">
                  <p className="text-sm font-semibold text-ink">Traditional first-round cost</p>
                  <p className="text-2xl font-extrabold text-brand-red">₹20+ crore</p>
                  <p className="text-xs text-ink-muted">Annually in interviewer time alone</p>
                </div>
                <div className="rounded-lg bg-brand-green/5 p-4">
                  <p className="text-sm font-semibold text-ink">LayersRank cost</p>
                  <p className="text-lg font-bold text-brand-green">Fraction of traditional approach</p>
                  <p className="text-xs text-ink-muted">Typically 10-15x return on investment</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-brand-yellow/30 bg-brand-yellow/5 p-4">
                <p className="text-sm font-semibold text-ink">Risk-free pilot</p>
                <p className="mt-1 text-sm text-ink-light">
                  Run 50 candidates alongside your existing process.
                  If results don&apos;t demonstrate clear value, no charge for the pilot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What GCC leaders ask</h2>
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

      {/* ── NEXT STEPS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Next steps</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '1', title: 'Book a GCC-focused demo', desc: 'We\'ll show the platform with your actual job descriptions and walk through reports for roles you\'re hiring.' },
              { n: '2', title: 'Receive a custom ROI analysis', desc: 'Based on your hiring volume, current process metrics, and cost structure.' },
              { n: '3', title: 'Run a pilot', desc: '50 candidates, one role, one city. See results before committing.' },
              { n: '4', title: 'Expand or walk away', desc: 'If the pilot delivers, we\'ll plan full rollout. If not, you\'ve learned something with no obligation.' },
            ].map((step) => (
              <div key={step.n} className="rounded-xl border border-gray-200 bg-paper-off p-6">
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

      {/* ── INTERNAL LINKS ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Related</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/solutions/enterprise', title: 'Enterprise Solutions', desc: 'Large-scale hiring beyond GCCs' },
              { href: '/solutions/technical-hiring', title: 'Technical Hiring', desc: 'Deep dive on engineering assessment' },
              { href: '/compare/hirevue', title: 'Compare vs. HireVue', desc: 'How LayersRank differs' },
              { href: '/security', title: 'Security', desc: 'Compliance and data handling details' },
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
        title="Ready to scale hiring with confidence?"
        description="See how LayersRank works for GCCs. 30-minute demo tailored to your hiring volume, your roles, and your workflow."
        cta="Book a GCC Demo"
        ctaHref="/demo"
        secondaryCta="Download GCC Hiring Playbook"
        secondaryCtaHref="/resources/gcc-playbook"
        variant="gradient"
      />
    </>
  );
}
