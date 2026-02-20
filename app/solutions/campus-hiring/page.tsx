import Link from 'next/link';
import Image from 'next/image';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Campus Recruitment Platform India | Graduate Hiring at Scale | LayersRank',
  description:
    'Screen 10,000 campus applicants fairly and efficiently. Pedigree-neutral evaluation that finds talent beyond IITs and NITs. Structured assessment for fresher hiring.',
  path: '/solutions/campus-hiring',
});

const faqs = [
  {
    q: 'How do we ensure candidates don\'t cheat?',
    a: 'We track paste events, tab switches, and typing patterns. Suspicious behavior flags the assessment for review. For campus hiring specifically, integrity flags correlate with lower offer acceptance — so the problem partially self-selects out. For final-round candidates, you can verify depth in live conversation.',
  },
  {
    q: 'What about candidates with poor internet access?',
    a: 'Assessments work on mobile and support low-bandwidth mode. Candidates can pause and resume if connectivity drops. We\'ve successfully run assessments in Tier-3 cities with limited infrastructure. For truly connectivity-limited situations, some organizations set up assessment centers at colleges where candidates can use campus computers.',
  },
  {
    q: 'Can we customize assessments for different roles?',
    a: 'Yes. Different engineering specializations (CS, ECE, mechanical, etc.) can have different question sets. Different target roles (development, QA, support, etc.) can be evaluated differently. Most campus programs use a common assessment for initial screening, then role-specific evaluation for shortlisted candidates.',
  },
  {
    q: 'How do we handle candidates who need accommodations?',
    a: 'Contact us before the assessment window. We can configure extended time, alternative formats, or other accommodations while maintaining evaluation validity.',
  },
  {
    q: 'What if our target colleges don\'t participate?',
    a: 'You can send the assessment link directly to applicants regardless of college participation. You don\'t need placement cell involvement — though it helps with completion rates.',
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

export default function CampusHiringPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <PageHero
        eyebrow="Solutions / Campus Hiring"
        title="Find Talent Beyond the Brand Names"
        description="Every year, you screen thousands of campus applicants. Most get filtered by college name before you see what they can actually do. LayersRank evaluates capability, not credentials — finding diamonds in Tier-2 and Tier-3 colleges while still identifying top IIT talent."
        primaryCta="See Campus Plans"
        primaryCtaHref="/pricing"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src="/images/solutions-campus-hiring.png"
              alt="Indian college students at campus placement drive — pedigree-neutral graduate recruitment at scale"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* ── THE CAMPUS HIRING PARADOX ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The campus hiring paradox</h2>
          <p className="mt-2 max-w-3xl text-lg font-medium text-ink">
            Campus hiring at scale creates an impossible situation.
          </p>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              You receive 15,000 applications for 200 graduate engineer positions. You have three weeks
              to make decisions before competing offers close your candidates. Your campus recruiting
              team has five people.
            </p>
            <p>
              The math doesn&apos;t work. 15,000 applications. 5 recruiters. 15 working days. That&apos;s
              200 applications per recruiter per day just to do initial review. Meaningful evaluation
              of each candidate? Impossible.
            </p>
            <p>So you filter.</p>
            <p>
              The easiest filter is college name. IITs, NITs, BITS, top state universities. Maybe 30
              colleges make the cut. Suddenly 15,000 applications become 3,000. The math starts to work.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
            <p className="text-sm font-semibold text-ink">But here&apos;s what that filter costs you.</p>
            <p className="mt-2 text-sm text-ink-light">
              India produces 1.5 million engineering graduates annually. The IIT system produces about
              16,000. By filtering to &ldquo;top colleges,&rdquo; you&apos;ve eliminated 99% of the talent pool
              before evaluating a single person.
            </p>
            <p className="mt-2 text-sm text-ink-light">
              Within that 99%, there are candidates who would outperform your average IIT hire. They went
              to a lesser-known college because of family circumstances, geography, or a bad exam day at
              age 17. Their capability has nothing to do with their institution&apos;s brand.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-yellow">
              The paradox: the filter that makes campus hiring manageable also makes it less effective.
            </p>
          </div>
        </div>
      </section>

      {/* ── A DIFFERENT APPROACH TO SCALE ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">A different approach to scale</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            LayersRank solves the scale problem without the pedigree filter.
          </p>

          <div className="mt-10 space-y-8">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Mass Assessment, Individual Evaluation</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Send the LayersRank interview link to all 15,000 applicants. Not a select few — everyone
                  who applied.
                </p>
                <p>
                  Candidates complete the assessment on their own time. No scheduling coordination. No
                  campus visit logistics. No interviewer time consumed.
                </p>
                <p className="font-medium text-ink">
                  Within 48 hours of the application deadline, you have scored assessments for every
                  candidate who completed the interview. Not resumes with college names. Actual evaluations
                  of problem-solving ability, communication skills, and technical fundamentals.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Pedigree-Neutral Scoring</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Our models evaluate responses, not credentials. They don&apos;t see college names, board
                  exam scores, or CGPA. They see how candidates think, communicate, and solve problems.
                </p>
                <p>
                  A clear, structured response about debugging methodology scores the same whether it
                  comes from IIT Bombay or a college you&apos;ve never heard of.
                </p>
                <p className="font-medium text-ink">
                  This doesn&apos;t mean top college candidates score poorly. Many score well because
                  they&apos;re genuinely capable. But it means capable candidates from lesser-known colleges
                  aren&apos;t filtered out before they can demonstrate what they know.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Efficient Shortlisting</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  With scored assessments for thousands of candidates, shortlisting becomes straightforward.
                </p>
                <p>
                  Set your threshold: &ldquo;Advance candidates scoring 70+ with confidence above
                  80%.&rdquo; The system identifies who qualifies. You have your shortlist.
                </p>
                <p>
                  Want to ensure diversity across colleges? Filter by score within college tier.
                  &ldquo;Top 10% from Tier-1 colleges, top 5% from Tier-2 colleges, top 2% from Tier-3
                  colleges.&rdquo; Whatever criteria match your goals.
                </p>
                <p className="font-medium text-ink">
                  The point is: you&apos;re making decisions based on demonstrated capability, supplemented
                  by other factors you choose. Not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT CAMPUS ASSESSMENT INCLUDES ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What campus assessment includes</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Graduate hiring requires evaluating potential, not just current knowledge.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Aptitude & Problem-Solving',
                desc: 'Can they break down unfamiliar problems? Can they reason through scenarios they haven\'t seen before? These questions don\'t require specialized knowledge — they require thinking ability.',
                example: '"A company\'s customer complaints increased 40% after a product update, but customer satisfaction scores remained unchanged. What might explain this, and how would you investigate?"',
              },
              {
                title: 'Technical Fundamentals',
                desc: 'Do they understand core concepts in their domain? For engineering graduates: data structures, algorithms, databases, and system concepts — evaluated through explanation and reasoning, not just coding syntax.',
                example: '"Explain why a hash table has O(1) average lookup time but O(n) worst case. When might you encounter the worst case, and how would you prevent it?"',
              },
              {
                title: 'Communication & Clarity',
                desc: 'Can they express ideas clearly? Can they structure their thoughts? Can they explain technical concepts to different audiences? These skills predict success better than raw technical knowledge.',
                example: '"Explain the concept of an API to someone who understands computers generally but hasn\'t done programming."',
              },
              {
                title: 'Learning Orientation',
                desc: 'How do they respond to challenges? Do they have examples of teaching themselves new things? For graduates with limited experience, learning ability is more predictive than current knowledge.',
                example: '"Tell me about something technical you taught yourself outside of your coursework. What motivated you to learn it, and how did you approach learning?"',
              },
              {
                title: 'Role Motivation',
                desc: 'Why do they want this specific role at this specific company? Have they researched? Generic answers score lower than specific answers demonstrating genuine interest and understanding.',
                example: '"What specifically attracted you to apply for this role versus other opportunities you\'re considering?"',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
                <div className="mt-3 rounded-lg bg-white p-3">
                  <p className="text-xs font-medium text-ink-muted">Sample question:</p>
                  <p className="mt-1 text-xs italic text-ink-light">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS HIRING WORKFLOW ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Workflow</p>
          <h2 className="mt-4 text-2xl font-bold">Campus hiring workflow</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                phase: '01',
                title: 'Broad Distribution',
                desc: 'Distribute the assessment link widely. Post on college job boards. Share through placement cells. Include in all application confirmations. Works on mobile, supports low-bandwidth, can be paused and resumed.',
              },
              {
                phase: '02',
                title: 'Assessment Window',
                desc: 'Give candidates 5-7 days to complete. This accommodates different schedules and ensures even candidates with limited internet access can find a window. Track completion rates by college.',
              },
              {
                phase: '03',
                title: 'Bulk Scoring',
                desc: 'Within 24-48 hours of window closing, all assessments are scored. You receive score distributions, college breakdowns, shortlist based on your thresholds, and integrity flag lists.',
              },
              {
                phase: '04',
                title: 'Shortlist & Interview',
                desc: 'Your shortlist is ready. Final interviews focus on fit, motivation, and verification rather than basic screening. You\'ve already validated fundamentals.',
              },
              {
                phase: '05',
                title: 'Offer & Close',
                desc: 'Move quickly on offers. Campus candidates have competing options and short decision windows. LayersRank reports support your offers with evidence of rigorous, fair evaluation.',
              },
            ].map((step) => (
              <div key={step.phase} className="rounded-xl border border-gray-600 bg-white/5 p-6">
                <p className="font-mono text-sm font-bold text-brand-yellow">{step.phase}</p>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PEDIGREE BIAS PROBLEM ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The pedigree bias problem</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Let&apos;s be direct about what pedigree filtering actually means.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* What it selects for */}
            <div className="rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-red">
                When you filter for IIT/NIT/BITS, you&apos;re selecting for
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-light">
                <li>
                  <span className="font-semibold text-ink">Performance on a high-stakes exam at age 17.</span>{' '}
                  JEE rank correlates with intelligence and preparation, but it&apos;s a single measurement
                  taken on one or two days. Bad days happen. Health issues happen. Family crises happen.
                </li>
                <li>
                  <span className="font-semibold text-ink">Access to coaching and preparation resources.</span>{' '}
                  JEE success correlates strongly with access to quality coaching, which correlates with
                  family wealth and urban geography. You&apos;re partially filtering for socioeconomic background.
                </li>
                <li>
                  <span className="font-semibold text-ink">Decision-making as a teenager.</span>{' '}
                  Some highly capable students chose different paths — engineering at a good regional
                  college near family, a different field before switching to tech. Those decisions at 17
                  don&apos;t define capability at 21.
                </li>
              </ul>
            </div>

            {/* What it doesn't select for */}
            <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green">
                What pedigree filtering does not select for
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-light">
                <li>
                  <span className="font-semibold text-ink">Ability to learn on the job.</span>{' '}
                  The problems graduates face at work don&apos;t appear in JEE prep.
                </li>
                <li>
                  <span className="font-semibold text-ink">Communication and collaboration.</span>{' '}
                  These aren&apos;t measured in entrance exams.
                </li>
                <li>
                  <span className="font-semibold text-ink">Persistence and work ethic.</span>{' '}
                  Showing up, completing work, and improving over time.
                </li>
                <li>
                  <span className="font-semibold text-ink">Judgment and problem-solving.</span>{' '}
                  Real-world problems are ambiguous. Exams are structured.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-paper-off p-6">
            <p className="text-sm text-ink-light">
              The correlation between college prestige and job performance exists but weakens dramatically
              after the first year. By year two, where someone went to school matters far less than what
              they&apos;ve demonstrated at work.
            </p>
            <p className="mt-2 text-sm font-semibold text-brand-yellow">
              LayersRank lets you shortcut to that eventual truth: evaluate what candidates can actually do,
              not where they studied.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESULTS FROM CAMPUS PROGRAMS ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Results from campus programs</h2>

          <div className="mt-10 space-y-8">
            {/* Case Study 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Large IT Services Company</p>
              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink-muted">Previous Approach</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Hiring target: 500 graduate engineers</li>
                    <li>Filter to top 50 colleges, campus interviews</li>
                    <li>Cost: &#x20B9;4,200 per hire (travel, logistics, interviewer time)</li>
                    <li>Diversity: 89% from Tier-1 colleges</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-green">With LayersRank</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Assessment sent to all 12,000 applicants</li>
                    <li>8,400 completed (70% completion rate)</li>
                    <li>600 shortlisted based on score threshold</li>
                    <li>500 offers extended, 480 accepted</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { metric: '57%', label: 'Cost reduction (₹1,800/hire)' },
                  { metric: '4 days', label: 'Time to shortlist (vs. 6 weeks)' },
                  { metric: '34%', label: 'From Tier-2/3 colleges' },
                  { metric: 'Higher', label: 'First-year performance ratings' },
                ].map((r) => (
                  <div key={r.label} className="text-center">
                    <p className="text-2xl font-extrabold text-brand-yellow">{r.metric}</p>
                    <p className="mt-1 text-xs text-ink-muted">{r.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-ink-light">
                &ldquo;We found exceptional candidates from colleges we&apos;d never visited. Some of our
                best performers came from places we would have filtered out automatically.&rdquo;
              </p>
            </div>

            {/* Case Study 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Product Company Campus Program</p>
              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink-muted">Previous Approach</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Hiring target: 80 graduate engineers</li>
                    <li>On-campus at 8 target colleges</li>
                    <li>Competing with larger offers at target colleges</li>
                    <li>800 applications received</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-green">With LayersRank</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Assessment opened to 200 colleges</li>
                    <li>3,200 applications received (4x increase)</li>
                    <li>2,100 completed assessments</li>
                    <li>80 offers to best scorers regardless of college</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { metric: '94%', label: 'Acceptance rate (vs. 68%)' },
                  { metric: 'Lower', label: 'Salary needed to close candidates' },
                  { metric: 'No difference', label: 'In first-year performance' },
                ].map((r) => (
                  <div key={r.label} className="text-center">
                    <p className="text-2xl font-extrabold text-brand-yellow">{r.metric}</p>
                    <p className="mt-1 text-xs text-ink-muted">{r.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-ink-light">
                &ldquo;When you&apos;re not competing for the same 500 IIT grads as Google and Microsoft,
                you can actually close your offers.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HANDLING CAMPUS LOGISTICS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Handling campus logistics</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Placement Cell Coordination',
                desc: 'We provide materials for placement cells: overview documents, candidate FAQs, technical requirements. Placement officers distribute through their normal channels. College-specific tracking shows completion rates.',
              },
              {
                title: 'Assessment Windows & Deadlines',
                desc: 'Configure windows that align with campus placement calendars. Run multiple windows or stagger by region. Automatic reminders go to candidates who haven\'t completed as deadlines approach.',
              },
              {
                title: 'Bulk Operations',
                desc: 'Import candidate lists in bulk (CSV upload). Export results in bulk. Integrate with your campus hiring ATS. Everything is designed for thousands of candidates, not dozens.',
              },
              {
                title: 'Virtual Final Rounds',
                desc: 'For candidates who pass assessment, final interviews can be virtual. No need to bring shortlisted candidates to office or send interviewers to campuses. Evaluate candidates at colleges you\'d never visit.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS PRICING ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Pricing</p>
          <h2 className="mt-4 text-2xl font-bold">Campus pricing</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Volume Pricing Table */}
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Campus Volume Pricing</h3>
              <p className="mt-2 text-sm text-gray-300">
                High volume at lower per-candidate investment.
              </p>
              <div className="mt-6 overflow-hidden rounded-lg border border-gray-600">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600 bg-white/5">
                      <th className="px-4 py-3 text-left text-gray-400">Volume (per season)</th>
                      <th className="px-4 py-3 text-right text-gray-400">Per Assessment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { volume: 'Up to 1,000', price: '₹500' },
                      { volume: '1,001 – 5,000', price: '₹350' },
                      { volume: '5,001 – 15,000', price: '₹250' },
                      { volume: '15,000+', price: 'Custom' },
                    ].map((row) => (
                      <tr key={row.volume} className="border-t border-gray-700">
                        <td className="px-4 py-3 text-white">{row.volume}</td>
                        <td className="px-4 py-3 text-right font-bold text-brand-yellow">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Campus Package */}
            <div className="rounded-xl border border-brand-yellow/30 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Campus Package</h3>
              <p className="mt-1 text-sm text-gray-400">For structured campus programs</p>
              <p className="mt-4 text-3xl font-extrabold text-brand-yellow">&#x20B9;3,00,000</p>
              <p className="text-sm text-gray-400">per campus season</p>
              <ul className="mt-6 space-y-2">
                {[
                  'Up to 10,000 assessments',
                  'Custom question configuration',
                  'Dedicated support during assessment windows',
                  'Analytics dashboard with college-level breakdowns',
                  'Bulk operations and ATS integration',
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
          </div>

          {/* ROI Comparison */}
          <div className="mt-10 rounded-xl border border-gray-600 bg-white/5 p-6">
            <h3 className="text-lg font-bold">ROI Comparison</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-400">Traditional campus hiring cost</p>
                <p className="text-sm text-gray-400">(travel, logistics, interviewer time)</p>
                <p className="mt-1 text-xl font-bold text-white">&#x20B9;3,000–5,000 <span className="text-sm font-normal text-gray-400">per candidate screened</span></p>
              </div>
              <div>
                <p className="text-sm text-gray-400">LayersRank campus hiring cost</p>
                <p className="text-sm text-gray-400">&nbsp;</p>
                <p className="mt-1 text-xl font-bold text-brand-green">&#x20B9;250–500 <span className="text-sm font-normal text-gray-400">per candidate screened</span></p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              At 5,000 candidates, that&apos;s <span className="font-bold text-brand-yellow">&#x20B9;1.25–2.5 crore in savings</span> — before
              accounting for better hiring outcomes from pedigree-neutral evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Frequently asked questions</h2>
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
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Related</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/solutions/india', title: 'India', desc: 'Hiring across India' },
              { href: '/solutions/technical-hiring', title: 'Technical Hiring', desc: 'Engineering assessment details' },
              { href: '/science/bias-mitigation', title: 'Bias Mitigation', desc: 'How pedigree-neutral scoring works' },
              { href: '/product/integrity-detection', title: 'Integrity Detection', desc: 'Preventing cheating at scale' },
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
        title="Find the Talent Everyone Else Filters Out"
        description="Run your next campus program with capability-based evaluation. See who you've been missing."
        cta="See Campus Plans"
        ctaHref="/pricing"
        secondaryCta="Book a Campus Demo"
        secondaryCtaHref="/demo"
        variant="gradient"
      />
    </>
  );
}
