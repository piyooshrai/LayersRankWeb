import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ProductMockup } from '@/components/product-mockup';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Interview Reports & Candidate Scorecards | Decision-Ready Dossiers | LayersRank',
  description:
    'Confidence-weighted scores, dimension breakdowns, key strengths, areas to probe, integrity flags, and full transcripts. Reports designed for 60-second decisions or deep-dive analysis.',
  path: '/product/candidate-reports',
});

const faqs = [
  {
    q: 'How long does report generation take?',
    a: 'Standard turnaround is within 24 hours of interview completion. Most reports are ready in 4-8 hours. Priority turnaround (same-day, often within 2 hours) is available on Scale and Enterprise plans.',
  },
  {
    q: 'Can hiring managers edit reports?',
    a: 'Hiring managers can add notes and comments. They can override the verdict (e.g., advance a borderline candidate based on other factors). They cannot change scores or evaluation evidence. Original AI assessment remains visible for audit purposes.',
  },
  {
    q: 'How long are reports retained?',
    a: 'Configurable based on your data retention policy. Default is 24 months. GDPR deletion requests are honored within required timeframes.',
  },
  {
    q: 'Can candidates see their reports?',
    a: 'You control this. Some organizations share reports as feedback (helps employer brand, improves candidate experience). Others keep reports internal. The platform supports either approach.',
  },
  {
    q: 'What if I disagree with a score?',
    a: 'Add your perspective in notes. If you consistently disagree with certain types of scores, contact us — it may indicate calibration issues worth investigating. Your feedback helps us improve.',
  },
  {
    q: 'Can reports be used in legal proceedings?',
    a: 'Reports document an objective, structured evaluation process. This is generally helpful if decisions are challenged. However, consult your legal team about specific situations. We provide audit trails and process documentation to support defensible hiring.',
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

export default function CandidateReportsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Product / Reports"
        title="Reports That Actually Help You Decide"
        description="Every LayersRank interview produces a comprehensive candidate dossier: confidence-weighted scores, dimension breakdowns, specific strengths and concerns, integrity signals, and complete response transcripts. Designed for the 60-second scan when you're triaging a pipeline, and the deep dive when you're making a final call."
        primaryCta="Download Sample Report"
        primaryCtaHref="/resources/sample-report"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ProductMockup type="candidate-report" />
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The problem with interview feedback</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Interview feedback in most organizations is nearly useless for decision-making.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-red">The casual version</p>
              <p className="mt-3 text-sm italic text-ink-light">
                &ldquo;Seemed pretty good. Technical skills were solid. Maybe a bit quiet?
                I&apos;d say lean yes but could go either way.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                What does &ldquo;pretty good&rdquo; mean relative to other candidates?
                &ldquo;Lean yes but could go either way&rdquo; is not a recommendation
                — it&apos;s an abdication of judgment.
              </p>
            </div>
            <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange">The formal version</p>
              <p className="mt-3 text-sm italic text-ink-light">
                Communication 4/5, Technical Skills 4/5, Problem Solving 3/5, Culture Fit 4/5.
                Overall: 3.75/5.
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                What did the candidate say to earn these numbers? What&apos;s the difference
                between a 3 and a 4? The numbers create an illusion of precision while
                communicating almost nothing.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
            <p className="text-sm font-semibold text-ink">Neither version answers the questions that actually matter:</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Should we advance this candidate over the others?',
                'What specifically makes them strong or weak?',
                'What should the next round focus on?',
                'How confident should we be in this evaluation?',
                'Can we defend this decision if questioned?',
              ].map((q) => (
                <p key={q} className="flex items-start gap-2 text-sm text-ink-light">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {q}
                </p>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium text-ink">
              LayersRank reports are designed around these questions.
            </p>
          </div>
        </div>
      </section>

      {/* ── REPORT STRUCTURE OVERVIEW ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Report structure</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Eight sections, each serving a specific purpose in the decision workflow.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', title: 'Header Summary', desc: 'Who, what role, when, bottom-line verdict' },
              { n: '02', title: 'Score Overview', desc: 'Overall score with confidence and dimension breakdown' },
              { n: '03', title: 'Key Strengths', desc: '3-5 demonstrated strengths with evidence' },
              { n: '04', title: 'Areas to Probe', desc: 'Gaps and uncertainties with suggested follow-ups' },
              { n: '05', title: 'Question Details', desc: 'Individual scores, summaries, and notes per question' },
              { n: '06', title: 'Integrity Summary', desc: 'Behavioral flags or clean confirmation' },
              { n: '07', title: 'Comparison Context', desc: 'Ranking against others in the pipeline' },
              { n: '08', title: 'Full Transcript', desc: 'Complete responses for reference and audit' },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-mono text-xs font-bold text-brand-yellow">{s.n}</p>
                <h3 className="mt-2 text-sm font-bold text-ink">{s.title}</h3>
                <p className="mt-1 text-xs text-ink-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: HEADER SUMMARY ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs font-bold text-brand-yellow">Section 01</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Header summary</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            At a glance: who this is and what the evaluation concluded.
          </p>

          <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-ink text-white shadow-lg">
            <div className="p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Candidate Report</p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Priya Sharma</h3>
                  <p className="mt-1 text-sm text-gray-300">Senior Backend Engineer</p>
                  <p className="mt-1 text-xs text-gray-400">Feb 15, 2026 &middot; LR-2026-SBE-004721 &middot; 38 min &middot; 12/12 questions</p>
                </div>
                <div className="rounded-full bg-brand-green/20 px-4 py-2">
                  <p className="text-sm font-bold text-brand-green">STRONG CANDIDATE</p>
                  <p className="text-xs text-brand-green/80">Advance to Final Round</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-ink">Configurable verdicts</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { verdict: 'Strong Candidate', desc: 'Exceeds threshold with high confidence. Advance without reservation.', color: 'text-brand-green border-brand-green/20 bg-brand-green/5' },
                { verdict: 'Worth Interviewing', desc: 'Meets threshold with some uncertainty. Advance with probes planned.', color: 'text-brand-yellow border-brand-yellow/20 bg-brand-yellow/5' },
                { verdict: 'Borderline', desc: 'Near threshold. Decision depends on pipeline depth and role needs.', color: 'text-brand-orange border-brand-orange/20 bg-brand-orange/5' },
                { verdict: 'Below Bar', desc: 'Below threshold. Recommend not advancing unless exceptional circumstances.', color: 'text-brand-red border-brand-red/20 bg-brand-red/5' },
              ].map((v) => (
                <div key={v.verdict} className={`rounded-lg border p-3 ${v.color}`}>
                  <p className="text-sm font-semibold">{v.verdict}</p>
                  <p className="mt-1 text-xs text-ink-muted">{v.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-muted">
              Customize labels, thresholds, and language to match your organization&apos;s terminology.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SCORE OVERVIEW ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs font-bold text-brand-yellow">Section 02</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Score overview</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            The quantitative assessment at multiple levels of detail.
          </p>

          <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Overall */}
            <div className="border-b border-gray-200 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Overall Assessment</p>
              <div className="mt-4 flex items-end gap-6">
                <div>
                  <p className="text-4xl font-extrabold text-ink">78</p>
                  <p className="text-xs text-ink-muted">Overall Score</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink">89%</p>
                  <p className="text-xs text-ink-muted">Confidence</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-ink">&plusmn;4</p>
                  <p className="text-xs text-ink-muted">Range: 74-82</p>
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Dimension Breakdown</p>
              <div className="mt-4 space-y-5">
                {[
                  { dim: 'Technical', weight: '40%', score: 82, confidence: 91 },
                  { dim: 'Behavioral', weight: '35%', score: 74, confidence: 82 },
                  { dim: 'Contextual', weight: '25%', score: 79, confidence: 93 },
                ].map((d) => (
                  <div key={d.dim}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink">{d.dim} <span className="text-ink-muted">({d.weight})</span></span>
                      <span className="font-mono text-ink-muted">{d.score} &middot; {d.confidence}% conf</span>
                    </div>
                    <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-brand-yellow" style={{ width: `${d.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-semibold text-ink">Overall Score</p>
              <p className="mt-1 text-xs text-ink-muted">Weighted combination of dimensions. The single number for ranking when you need one.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-semibold text-ink">Confidence</p>
              <p className="mt-1 text-xs text-ink-muted">How reliable this assessment is. 89% means you can trust this score for decision-making.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-semibold text-ink">Interval</p>
              <p className="mt-1 text-xs text-ink-muted">The uncertainty range. Narrow intervals indicate consistent signals across evaluation approaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: KEY STRENGTHS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs font-bold text-brand-yellow">Section 03</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Key strengths</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            The 3-5 things this candidate demonstrated particularly well, with evidence.
          </p>

          <div className="mt-10 mx-auto max-w-3xl space-y-4">
            {[
              {
                n: 1,
                title: 'Clear system design thinking',
                detail: 'Explained notification service architecture with thoughtful trade-offs between real-time WebSocket delivery and batch processing. Unprompted consideration of failure modes and horizontal scaling approach.',
                source: 'Q4, Technical',
              },
              {
                n: 2,
                title: 'Strong debugging methodology',
                detail: 'Described systematic production debugging process: reproduce in staging, isolate through binary search of components, instrument with targeted logging, verify fix doesn\'t introduce regression.',
                source: 'Q6, Technical',
              },
              {
                n: 3,
                title: 'Effective technical communication',
                detail: 'Explained CAP theorem trade-offs in accessible language without sacrificing accuracy. Adjusted explanation depth appropriately when describing to technical vs. non-technical audiences.',
                source: 'Q7, Technical; Q9, Behavioral',
              },
              {
                n: 4,
                title: 'Relevant scale experience',
                detail: 'Direct experience with systems handling 50K+ requests per second. Specific examples of performance optimization with quantified results (reduced p99 latency from 340ms to 89ms).',
                source: 'Q4, Q5, Technical',
              },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 rounded-xl border border-gray-200 bg-paper-off p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10 font-mono text-xs font-bold text-brand-green">
                  {s.n}
                </div>
                <div>
                  <p className="font-semibold text-ink">{s.title}</p>
                  <p className="mt-1 text-sm text-ink-light">{s.detail}</p>
                  <p className="mt-2 text-xs text-ink-muted">Source: {s.source}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-semibold text-ink">Why this section is useful</p>
            <div className="mt-3 space-y-2 text-sm text-ink-light">
              <p><span className="font-semibold text-ink">Specificity:</span> Each strength includes what was demonstrated, not generic praise.</p>
              <p><span className="font-semibold text-ink">Evidence source:</span> Links to the specific question(s) where it appeared. Click through to verify.</p>
              <p><span className="font-semibold text-ink">Actionable:</span> Reference strengths in subsequent rounds for continuity. Share with candidates during offers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: AREAS TO PROBE ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs font-bold text-brand-yellow">Section 04</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Areas to probe</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Specific gaps, concerns, or uncertainties to explore in subsequent rounds — with ready-to-use suggested probes.
          </p>

          <div className="mt-10 mx-auto max-w-3xl space-y-6">
            {[
              {
                n: 1,
                title: 'Stakeholder management experience',
                detail: 'Response about cross-functional collaboration described outcomes but lacked specific examples of navigating disagreements or competing priorities.',
                score: '68 ±9',
                confidence: '74%',
                source: 'Q8, Behavioral',
                probe: '"Tell me about a time when engineering and product had fundamentally different views on priority. How did you navigate that?"',
              },
              {
                n: 2,
                title: 'Leadership and mentorship depth',
                detail: 'Mentioned mentoring junior engineers but provided limited detail on approach or outcomes. May have informal experience rather than structured leadership.',
                score: '71 ±7',
                confidence: '78%',
                source: 'Q10, Behavioral',
                probe: '"Can you walk me through how you\'ve helped a junior engineer grow? What was your approach, and what was the outcome over time?"',
              },
              {
                n: 3,
                title: 'Motivation specificity',
                detail: 'Response about interest in role was generic ("exciting technical challenges," "growing company"). Limited evidence of specific research into what the role involves.',
                score: '72 ±4',
                confidence: '88%',
                source: 'Q11, Contextual',
                probe: '"What specifically about this role attracted you versus other opportunities you\'re considering?"',
              },
            ].map((a) => (
              <div key={a.n} className="rounded-xl border border-brand-orange/20 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 font-mono text-xs font-bold text-brand-orange">
                    {a.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-ink">{a.title}</p>
                      <p className="text-xs font-mono text-ink-muted">{a.source} &middot; Score: {a.score} &middot; {a.confidence} conf</p>
                    </div>
                    <p className="mt-2 text-sm text-ink-light">{a.detail}</p>
                    <div className="mt-3 rounded-lg bg-brand-yellow/5 border border-brand-yellow/20 p-3">
                      <p className="text-xs font-semibold text-brand-yellow">Suggested probe</p>
                      <p className="mt-1 text-sm italic text-ink-light">{a.probe}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-sm text-ink-muted">
            <p>
              Areas are ordered by importance — combination of dimension weight, confidence level, and severity.
              If you&apos;re advancing, these define your final round agenda. Instead of generic re-evaluation,
              you probe specific uncertainties.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: QUESTION-LEVEL DETAILS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs font-bold text-brand-yellow">Section 05</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Question-level details</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            For each question, the detailed evaluation with response summary, strengths, and gaps.
          </p>

          <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="bg-paper-off px-6 py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-xs font-bold text-brand-yellow">Q4: System Design</p>
                  <p className="text-sm font-semibold text-ink">Technical</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-lg font-bold text-ink">85 <span className="text-xs text-ink-muted">&plusmn;3</span></p>
                  <p className="text-xs text-ink-muted">94% confidence</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs text-ink-muted">
                Video &middot; 4:32 &middot; Difficulty 8/10
              </p>
              <p className="mt-2 text-sm italic text-ink-muted">
                &ldquo;Walk through how you would design a notification service handling
                10 million daily active users. Consider different notification types,
                delivery guarantees, and scale requirements.&rdquo;
              </p>
              <div className="mt-4">
                <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide">Response Summary</p>
                <p className="mt-2 text-sm text-ink-light">
                  Proposed a multi-tier architecture separating ingestion, processing, and delivery layers.
                  Discussed trade-offs between real-time WebSocket delivery for in-app notifications versus
                  batch processing for email digests. Considered failure modes including dead-letter queues
                  for retry handling. Addressed scale through horizontal sharding by user ID with consistent hashing.
                </p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="flex items-center gap-1 text-xs font-semibold text-brand-green">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Strengths
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-ink-light">
                    <li>Unprompted failure scenario consideration</li>
                    <li>Clear trade-off articulation</li>
                    <li>Quantified scale reasoning</li>
                    <li>Practical experience evident</li>
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-1 text-xs font-semibold text-brand-orange">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                    Gaps
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-ink-light">
                    <li>Observability/monitoring not discussed</li>
                    <li>Schema evolution not addressed</li>
                    <li>Mobile push specifics not covered</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 px-6 py-3">
              <p className="text-xs font-medium text-brand-yellow cursor-pointer">View Full Response &rarr;</p>
            </div>
          </div>

          <p className="mt-6 mx-auto max-w-3xl text-sm text-ink-muted">
            Every question has this level of detail. You can trace any dimension score back to the
            individual questions that contributed to it.
          </p>
        </div>
      </section>

      {/* ── SECTION 6: INTEGRITY SUMMARY ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs font-bold text-brand-yellow">Section 06</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Integrity summary</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Behavioral flags if any. Clean confirmation if none. At a glance, you know if there&apos;s anything to investigate.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 mx-auto max-w-4xl">
            {/* Clean */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-brand-green" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green">Clean</p>
              </div>
              <div className="mt-4 rounded-lg bg-paper-off p-4 font-mono text-xs leading-relaxed text-ink-light">
                <p>Paste Events: 2 (minor)</p>
                <p>Tab Switches: 5 (brief, scattered)</p>
                <p>Typing Pattern: Normal</p>
                <p>Response Timing: Expected ranges</p>
                <p>Face Verification: Confirmed (98.7%)</p>
                <p className="mt-2 font-semibold text-brand-green">FLAG STATUS: NONE</p>
              </div>
            </div>

            {/* Flagged */}
            <div className="rounded-xl border border-brand-orange/30 bg-white p-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-brand-orange" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange">Flagged</p>
              </div>
              <div className="mt-4 rounded-lg bg-paper-off p-4 font-mono text-xs leading-relaxed text-ink-light">
                <p>Paste Events: 7 (3 on technical Qs)</p>
                <p>Tab Switches: 16 (avg 41s, correlated)</p>
                <p>Typing: Q6 134 WPM, 0 corrections</p>
                <p>Timing: Q4 done in 2m18s (expected 6-8m)</p>
                <p>Face Verification: Confirmed</p>
                <p className="mt-2 font-semibold text-brand-orange">FLAG: REVIEW RECOMMENDED</p>
              </div>
            </div>
          </div>

          <p className="mt-6 mx-auto max-w-3xl text-center text-sm text-ink-muted">
            See the <Link href="/product/integrity-detection" className="text-brand-yellow hover:underline">Integrity Detection</Link> page for full detail on what triggers flags and how to handle them.
          </p>
        </div>
      </section>

      {/* ── SECTION 7: COMPARISON CONTEXT ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs font-bold text-brand-yellow">Section 07</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Comparison context</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            See relative performance against other candidates in the same pipeline.
          </p>

          <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="bg-paper-off px-6 py-4">
              <p className="text-xs text-ink-muted">Pipeline: Senior Backend Engineer &middot; 6 Candidates Evaluated</p>
              <p className="mt-1 text-sm font-semibold text-ink">This candidate: Priya Sharma &middot; Ranking: #2 of 6</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-xs text-ink-muted">
                    <th className="px-6 py-3 font-medium">#</th>
                    <th className="px-3 py-3 font-medium">Candidate</th>
                    <th className="px-3 py-3 font-medium text-right">Overall</th>
                    <th className="px-3 py-3 font-medium text-right">Technical</th>
                    <th className="px-3 py-3 font-medium text-right">Behavioral</th>
                    <th className="px-3 py-3 font-medium text-right pr-6">Contextual</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  {[
                    { rank: 1, name: 'Rahul', overall: '82±3', tech: '86±2', beh: '78±4', ctx: '81±3', highlight: false },
                    { rank: 2, name: 'Priya', overall: '78±4', tech: '82±3', beh: '74±6', ctx: '79±3', highlight: true },
                    { rank: 3, name: 'Amit', overall: '75±5', tech: '79±4', beh: '71±5', ctx: '74±5', highlight: false },
                    { rank: 4, name: 'Sneha', overall: '72±4', tech: '74±3', beh: '72±4', ctx: '69±5', highlight: false },
                    { rank: 5, name: 'Vikram', overall: '68±6', tech: '71±5', beh: '65±7', ctx: '67±5', highlight: false },
                    { rank: 6, name: 'Deepa', overall: '64±4', tech: '68±3', beh: '61±5', ctx: '63±4', highlight: false },
                  ].map((c) => (
                    <tr
                      key={c.rank}
                      className={`border-b border-gray-100 ${c.highlight ? 'bg-brand-yellow/5 font-semibold' : ''}`}
                    >
                      <td className="px-6 py-3 text-ink-muted">{c.rank}</td>
                      <td className="px-3 py-3 text-ink">{c.name} {c.highlight && <span className="text-brand-yellow">&larr;</span>}</td>
                      <td className="px-3 py-3 text-right text-ink">{c.overall}</td>
                      <td className="px-3 py-3 text-right text-ink-muted">{c.tech}</td>
                      <td className="px-3 py-3 text-right text-ink-muted">{c.beh}</td>
                      <td className="px-3 py-3 text-right text-ink-muted pr-6">{c.ctx}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-paper-off px-6 py-4 text-xs text-ink-muted space-y-1">
              <p>Priya and Rahul are close (gap within combined uncertainty). Differentiate based on dimension fit or final round.</p>
              <p>Clear separation between top 2 and rest of pipeline. If advancing 2, these are the clear choices.</p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-paper-off p-4">
              <p className="text-sm font-semibold text-ink">Uncertainty-aware comparison</p>
              <p className="mt-1 text-xs text-ink-muted">Intervals show when ranking differences are meaningful vs. within noise. Priya at 78&plusmn;4 and Rahul at 82&plusmn;3 overlap — don&apos;t assume Rahul is definitively better.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-paper-off p-4">
              <p className="text-sm font-semibold text-ink">Dimension comparison</p>
              <p className="mt-1 text-xs text-ink-muted">Maybe this candidate ranks #2 overall but #1 on technical. If technical matters most for the role, that&apos;s relevant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FULL TRANSCRIPT ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs font-bold text-brand-yellow">Section 08</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Full transcript</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Complete access to everything the candidate said, for verification, deeper evaluation, or audit.
          </p>

          <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="bg-paper-off px-6 py-4">
              <p className="font-mono text-xs text-ink-muted">Q1: Tell us about yourself and what attracted you to this role.</p>
              <p className="text-xs text-ink-muted">Video &middot; 2:14</p>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-ink-light">
                &ldquo;Thanks for having me. I&apos;m currently a senior engineer at TechCorp where
                I&apos;ve spent the last three years working on their payments infrastructure.
                Before that, I was at a startup called DataFlow where I built their
                initial data pipeline from scratch.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                What attracted me to this role specifically is the scale you&apos;re operating
                at. I saw from your engineering blog that you&apos;re handling over 50 million
                transactions daily, and the challenges around consistency and latency at
                that scale are exactly what I want to be working on...&rdquo;
              </p>
            </div>
            <div className="border-t border-gray-200 bg-paper-off px-6 py-3">
              <p className="text-xs text-ink-muted italic">Full transcript continues for all 12 questions...</p>
            </div>
          </div>

          <div className="mt-6 max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Verification', desc: 'If a summary or score seems off, check the source. See exactly what the candidate said.' },
              { title: 'Communication style', desc: 'Summaries capture content, not style. Watch the video or read the transcript for tone and clarity.' },
              { title: 'Deeper evaluation', desc: 'Hiring managers can review responses before the final round to prepare better questions.' },
              { title: 'Audit trail', desc: 'Complete documentation of what the evaluation was based on, if a decision is ever questioned.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-xs text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPORT FORMATS ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Formats</p>
          <h2 className="mt-4 text-2xl font-bold">Report formats</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Available in multiple formats for different use cases.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Web Dashboard', desc: 'Interactive reports in the LayersRank interface. Click to expand, watch video, compare side-by-side. Best for active evaluation.' },
              { title: 'PDF Export', desc: 'Professional PDF for stakeholders without LayersRank access. All sections except embedded video. Formatted for printing or archival.' },
              { title: 'Executive Summary PDF', desc: 'Condensed one-page version: Header, Score Overview, Key Strengths, Areas to Probe, Verdict. For leadership who need the conclusion, not the detail.' },
              { title: 'ATS Integration', desc: 'Summary scores and verdict sync to your ATS (Workday, Greenhouse, Lever). Link to full report for detail. ATS stays the system of record.' },
              { title: 'JSON API', desc: 'Full report data available programmatically. Build custom dashboards, aggregate analytics, feed into your own decision tools.' },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-700 bg-white/5 p-5">
                <h3 className="text-sm font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-xs text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMIZING REPORTS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Customizing reports</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Match reports to your organization&apos;s needs.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Dimension names and weights',
                desc: 'Rename dimensions to match your language. "Technical" becomes "Functional Skills." Adjust weights per role template — Staff Engineer at 50% technical, Engineering Manager at 45% behavioral.',
              },
              {
                title: 'Verdict thresholds and labels',
                desc: 'Set what scores qualify for each verdict. Change "Strong Candidate" to "Definitely Interview." Set the threshold at 80 instead of 75 if your bar is higher.',
              },
              {
                title: 'Section visibility',
                desc: 'Choose which sections appear per export format. Executive PDFs might only show Header, Scores, Verdict. External views might exclude Integrity Details.',
              },
              {
                title: 'Branding',
                desc: 'Enterprise plans include white-label options. Your logo, your colors, your company name. Reports look like they come from your organization.',
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

      {/* ── HOW DIFFERENT USERS USE REPORTS ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How different users use reports</h2>

          <div className="mt-10 space-y-6">
            {[
              {
                role: 'Recruiters',
                action: 'Triage and route',
                workflow: 'Scan Header and Score Overview (30s). Check Integrity (10s). Read Strengths and Areas to Probe (1-2 min). Route.',
                question: 'Should this candidate advance, and to whom?',
                elements: 'Verdict, overall score, integrity flags, comparison context',
              },
              {
                role: 'Hiring Managers',
                action: 'Evaluate and prepare',
                workflow: 'Review shortlisted reports. Compare candidates. Read Areas to Probe to prepare final round questions. Reference Question Details if needed.',
                question: 'Which candidates should I prioritize, and what should I ask them?',
                elements: 'Dimension breakdown, strengths, areas to probe, question details',
              },
              {
                role: 'Engineering Leaders',
                action: 'Calibrate and decide',
                workflow: 'Review final-round candidates. Assess fit with team needs. Make hire/no-hire recommendation.',
                question: 'Does this candidate have what my team needs?',
                elements: 'Dimension breakdown (relevant dimensions), specific strengths and concerns, comparison',
              },
              {
                role: 'Leadership',
                action: 'Verify and approve',
                workflow: 'Review executive summary. Check score meets threshold. Verify no integrity flags. Approve or request more.',
                question: 'Can I approve this advancement with confidence?',
                elements: 'Overall score and confidence, verdict, integrity summary',
              },
              {
                role: 'Legal / Compliance',
                action: 'Audit and document',
                workflow: 'Review full report including all scores, transcripts, and evaluation details. Verify defensible process.',
                question: 'If this decision is challenged, can we defend it?',
                elements: 'Complete report, evaluation criteria, score traceability, audit trail',
              },
            ].map((user) => (
              <div key={user.role} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-ink">{user.role}</h3>
                  <span className="rounded-full bg-brand-yellow/10 px-2.5 py-0.5 text-xs font-semibold text-brand-yellow">{user.action}</span>
                </div>
                <p className="mt-2 text-sm text-ink-light">{user.workflow}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs">
                  <p className="text-ink-muted"><span className="font-semibold text-ink">Key question:</span> {user.question}</p>
                </div>
                <p className="mt-1 text-xs text-ink-muted"><span className="font-semibold text-ink">Report elements used:</span> {user.elements}</p>
              </div>
            ))}
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
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Link
              href="/product/confidence-scoring"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Confidence Scoring</h3>
              <p className="mt-2 text-sm text-ink-light">Understanding the numbers behind every score.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/product/structured-interviews"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Structured Interviews</h3>
              <p className="mt-2 text-sm text-ink-light">What generates the reports — question types and formats.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/product/integrity-detection"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Integrity Detection</h3>
              <p className="mt-2 text-sm text-ink-light">How behavioral flags work and what they mean.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <PageCTA
        title="See the report that changes how you hire"
        description="Download a complete sample report. See exactly what you'd get for every candidate — from 60-second verdict to full question-by-question detail."
        cta="Download Sample Report"
        ctaHref="/resources/sample-report"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
        variant="gradient"
      />
    </>
  );
}
