import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import Link from 'next/link';

export const metadata = makeMetadata({
  title: 'Explainable AI Hiring | Transparent Interview Scoring | LayersRank',
  description:
    'Every LayersRank score traces to specific evidence. No black boxes. Complete audit trails for compliance, candidate feedback, and continuous improvement.',
  path: '/science/explainability',
});

export default function ExplainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Science / Explainable AI"
        title="No Black Boxes. No Hidden Logic."
        description='When someone asks "why did this candidate get this score?" — you have an answer. Every LayersRank evaluation traces from final score back to specific evidence. See exactly what the models saw, how they weighted it, and why the number is what it is.'
        primaryCta="See a Sample Audit Trail"
        primaryCtaHref="/resources/sample-report"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      {/* The Black Box Problem */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Black Box Problem</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Most AI hiring tools work like this:
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            Candidate data goes in. A number comes out. Nobody knows what happened in between.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            The vendor might say &ldquo;our proprietary algorithm&rdquo; or &ldquo;machine learning
            model&rdquo; or &ldquo;neural network trained on millions of data points.&rdquo; But ask
            them to explain why Candidate A scored 74 and Candidate B scored 71, and they
            can&rsquo;t tell you. Not won&rsquo;t &mdash; <em>can&rsquo;t</em>. The model is opaque
            even to its creators.
          </p>
          <p className="mt-6 max-w-3xl font-medium text-ink">This creates serious problems.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Legal Risk</h3>
              <p className="mt-2 text-sm text-ink-light">
                Employment decisions must be defensible. When a rejected candidate files a complaint,
                you need to explain the basis for the decision. &ldquo;Our AI said no&rdquo; is not a
                defense. Courts and regulators want to know what criteria were applied and why this
                candidate didn&rsquo;t meet them.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
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
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Bias Concealment</h3>
              <p className="mt-2 text-sm text-ink-light">
                Black-box models can encode biases invisibly. A model trained on historical hiring
                data might learn that certain names, schools, or speech patterns correlate with past
                decisions &mdash; and perpetuate those patterns without anyone knowing. You can&rsquo;t
                audit what you can&rsquo;t see.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg
                  className="h-5 w-5 text-brand-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">No Path to Improvement</h3>
              <p className="mt-2 text-sm text-ink-light">
                When a black-box model makes mistakes, you can&rsquo;t fix them. You don&rsquo;t know
                why it made the decision, so you don&rsquo;t know what to change. Should you add more
                training data? Change a feature? Adjust a weight? Without visibility, improvement
                becomes trial and error.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg
                  className="h-5 w-5 text-brand-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Candidate Distrust</h3>
              <p className="mt-2 text-sm text-ink-light">
                Candidates increasingly ask how they were evaluated. &ldquo;An AI scored you&rdquo;
                without further explanation feels arbitrary and unfair &mdash; especially for
                candidates who were rejected. Providing meaningful feedback requires understanding
                what the evaluation measured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The LayersRank Approach */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The LayersRank Approach</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            LayersRank is explainable by design, not as an afterthought.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            We don&rsquo;t use end-to-end neural networks that consume raw data and produce scores.
            We use a structured pipeline where each step is interpretable:
          </p>

          <div className="mt-10 space-y-0">
            {[
              {
                step: '1',
                title: 'Response Capture',
                desc: 'Candidate answers are transcribed and stored',
              },
              {
                step: '2',
                title: 'Component Scoring',
                desc: 'Multiple interpretable models score specific aspects',
              },
              {
                step: '3',
                title: 'Aggregation',
                desc: 'Component scores combine via transparent weighted formulas',
              },
              {
                step: '4',
                title: 'Uncertainty Quantification',
                desc: 'Fuzzy logic produces confidence levels',
              },
              {
                step: '5',
                title: 'Dimension Rollup',
                desc: 'Question scores aggregate to dimension scores',
              },
              {
                step: '6',
                title: 'Final Score',
                desc: 'Dimension scores aggregate to overall assessment',
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-yellow bg-white">
                    <span className="text-sm font-bold text-ink">{item.step}</span>
                  </div>
                  {i < 5 && <div className="w-px flex-1 bg-gray-300" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 max-w-3xl text-ink-light">
            At every step, inputs and outputs are visible. The logic connecting them is documented.
            The whole chain is auditable.
          </p>
        </div>
      </section>

      {/* Tracing a Score: Complete Example */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Complete Walkthrough
          </p>
          <h2 className="mt-4 text-2xl font-bold">Tracing a Score: Complete Example</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            Let&rsquo;s trace through exactly how a candidate score is derived.
          </p>

          <div className="mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-700 bg-white/5 px-4 py-3">
              <p className="text-xs text-gray-400">Candidate</p>
              <p className="mt-1 font-medium text-white">Priya &mdash; Senior Backend Engineer</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-white/5 px-4 py-3">
              <p className="text-xs text-gray-400">Final Score</p>
              <p className="mt-1 font-medium text-white">
                Technical: <span className="text-brand-yellow">82</span>,{' '}
                <span className="text-brand-green">91% confidence</span>
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium text-white">How did we get there?</p>
        </div>
      </section>

      {/* Level 1: Dimension Score */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
              1
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              Level 1
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-ink">Dimension Score</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            The Technical dimension score (82) aggregates from individual question scores:
          </p>

          <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-ink text-left">
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Question
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Type
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Weight
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Score
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Confidence
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Q4: System Design</td>
                  <td className="px-6 py-3 text-ink-muted">Video</td>
                  <td className="px-6 py-3 font-mono text-ink-light">30%</td>
                  <td className="px-6 py-3 font-mono font-medium text-ink">85</td>
                  <td className="px-6 py-3 font-mono text-brand-green">94%</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Q5: Debugging</td>
                  <td className="px-6 py-3 text-ink-muted">Video</td>
                  <td className="px-6 py-3 font-mono text-ink-light">25%</td>
                  <td className="px-6 py-3 font-mono font-medium text-ink">81</td>
                  <td className="px-6 py-3 font-mono text-brand-green">89%</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Q6: Technical Depth</td>
                  <td className="px-6 py-3 text-ink-muted">Text</td>
                  <td className="px-6 py-3 font-mono text-ink-light">25%</td>
                  <td className="px-6 py-3 font-mono font-medium text-ink">79</td>
                  <td className="px-6 py-3 font-mono text-brand-green">88%</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Q7: Trade-offs</td>
                  <td className="px-6 py-3 text-ink-muted">Text</td>
                  <td className="px-6 py-3 font-mono text-ink-light">20%</td>
                  <td className="px-6 py-3 font-mono font-medium text-ink">83</td>
                  <td className="px-6 py-3 font-mono text-brand-green">93%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 bg-ink px-6 py-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Weighted Calculation
              </p>
            </div>
            <pre className="overflow-auto p-6 font-mono text-sm leading-relaxed text-ink">
{`(85 × 0.30) + (81 × 0.25) + (79 × 0.25) + (83 × 0.20)
= 25.5 + 20.25 + 19.75 + 16.6
= 82.1 → 82

Confidence: min(94, 89, 88, 93)
  adjusted upward for multiple confirming signals
  = 91%`}
            </pre>
          </div>

          <div className="mt-6 max-w-2xl rounded-lg border border-brand-green/30 bg-brand-green/5 px-4 py-3">
            <p className="text-sm text-ink-light">
              <span className="font-medium text-brand-green">Audit Point:</span> You can see
              exactly which questions contributed and how much each weighted.
            </p>
          </div>
        </div>
      </section>

      {/* Level 2: Question Score */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
              2
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              Level 2
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-ink">Question Score</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Let&rsquo;s drill into Q4: System Design, which scored 85.
          </p>

          <div className="mt-8 max-w-3xl rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              The Question
            </p>
            <p className="mt-2 text-ink-light">
              &ldquo;Walk through how you&rsquo;d design a notification service handling 10 million
              daily users. Consider delivery guarantees, scale, and failure scenarios.&rdquo;
            </p>
          </div>

          <div className="mt-6 max-w-3xl rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              The Response (summarized)
            </p>
            <p className="mt-2 text-sm text-ink-light">
              Candidate proposed multi-tier architecture with separate ingestion, processing, and
              delivery layers. Discussed WebSocket for real-time vs. batch for email. Addressed
              failure modes with dead-letter queues. Quantified throughput estimates.
            </p>
          </div>

          {/* Model Evaluations */}
          <h3 className="mt-10 text-lg font-bold text-ink">Model Evaluations</h3>
          <div className="mt-4 max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-ink text-left">
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Model
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Score
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Rationale
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Semantic Similarity</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.87</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">
                    High match with reference strong answers on architecture patterns
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Lexical Alignment</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.81</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">
                    Appropriate terminology (dead-letter queue, horizontal sharding, etc.)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">LLM Reasoning</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.86</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">
                    Clear logical structure, unprompted failure consideration, quantified reasoning
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Relevance</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.89</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">
                    Directly addressed all three prompt components
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Agreement Analysis */}
          <div className="mt-8 grid max-w-2xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Agreement Analysis
              </p>
              <div className="mt-3 space-y-1 font-mono text-sm text-ink-light">
                <p>Scores: [0.87, 0.81, 0.86, 0.89]</p>
                <p>Std Dev: 0.03 (low)</p>
                <p>Refusal (R): 0.12</p>
                <p className="font-medium text-brand-green">Models agree strongly</p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Score Derivation
              </p>
              <div className="mt-3 space-y-1 font-mono text-sm text-ink-light">
                <p>Aggregate signal: 0.86</p>
                <p>Scaled to 0-100: 86</p>
                <p>Adjusted for confidence: 85</p>
                <p>
                  Confidence: <span className="text-brand-green">94%</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-2xl rounded-lg border border-brand-green/30 bg-brand-green/5 px-4 py-3">
            <p className="text-sm text-ink-light">
              <span className="font-medium text-brand-green">Audit Point:</span> You can see each
              model&rsquo;s contribution and why they agreed.
            </p>
          </div>
        </div>
      </section>

      {/* Level 3: Model Rationale */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
              3
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              Level 3
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-ink">Model Rationale</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Let&rsquo;s drill into why the LLM Reasoning model scored 8.6/10.
          </p>

          <div className="mt-8 max-w-3xl rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Model Prompt (simplified)
            </p>
            <p className="mt-2 text-sm italic text-ink-light">
              &ldquo;Evaluate this response to a system design question. Score 1&ndash;10 on:
              logical structure, depth of analysis, consideration of trade-offs, handling of failure
              scenarios.&rdquo;
            </p>
          </div>

          <div className="mt-6 max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 bg-ink px-6 py-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Model Output
              </p>
            </div>
            <div className="space-y-6 p-6">
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-ink">Logical Structure</p>
                  <span className="font-mono text-sm font-bold text-brand-green">9/10</span>
                </div>
                <p className="mt-1 text-sm text-ink-light">
                  Response follows clear progression: requirements clarification &rarr; high-level
                  architecture &rarr; component details &rarr; scale considerations &rarr; failure
                  handling. Easy to follow.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-ink">Depth of Analysis</p>
                  <span className="font-mono text-sm font-bold text-brand-yellow">8/10</span>
                </div>
                <p className="mt-1 text-sm text-ink-light">
                  Good depth on delivery layer trade-offs. Quantified throughput estimates show
                  practical experience. Could have gone deeper on data model and consistency
                  guarantees.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-ink">Trade-off Consideration</p>
                  <span className="font-mono text-sm font-bold text-brand-green">9/10</span>
                </div>
                <p className="mt-1 text-sm text-ink-light">
                  Explicitly discussed WebSocket vs. batch trade-offs. Acknowledged latency vs.
                  reliability tension. Unprompted consideration of eventual consistency.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-ink">Failure Scenarios</p>
                  <span className="font-mono text-sm font-bold text-brand-yellow">8/10</span>
                </div>
                <p className="mt-1 text-sm text-ink-light">
                  Mentioned dead-letter queues and retry logic. Could have addressed cascading
                  failures or circuit breakers. Good but not exceptional.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-ink">Overall</p>
                  <span className="font-mono text-sm font-bold text-ink">8.6/10</span>
                </div>
                <p className="mt-1 text-sm text-ink-light">
                  Strong response demonstrating practical system design experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-3xl rounded-lg border border-brand-green/30 bg-brand-green/5 px-4 py-3">
            <p className="text-sm text-ink-light">
              <span className="font-medium text-brand-green">Audit Point:</span> You can see
              exactly what the model evaluated and why it gave each sub-score.
            </p>
          </div>
        </div>
      </section>

      {/* Level 4: Reference Comparisons */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
              4
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              Level 4
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-ink">Reference Comparisons</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            The Semantic Similarity model (0.87) compares against reference responses. What
            references?
          </p>

          <div className="mt-8 max-w-3xl rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Reference Set for System Design Questions
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-light">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                15 curated strong responses from validated high-performers
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                Embedding vectors stored for each reference
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                New responses compared via cosine similarity to reference set
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                Score = average similarity to top-5 closest references
              </li>
            </ul>
          </div>

          <h3 className="mt-8 text-lg font-bold text-ink">Specific Match Analysis</h3>
          <p className="mt-4 max-w-3xl text-ink-light">
            Candidate response was most similar to:
          </p>

          <div className="mt-4 max-w-3xl space-y-3">
            <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3">
              <span className="font-mono text-sm font-bold text-brand-green">0.91</span>
              <div>
                <p className="text-sm font-medium text-ink">Reference #7</p>
                <p className="text-sm text-ink-muted">
                  Also proposed tiered architecture with similar component breakdown
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3">
              <span className="font-mono text-sm font-bold text-brand-green">0.88</span>
              <div>
                <p className="text-sm font-medium text-ink">Reference #3</p>
                <p className="text-sm text-ink-muted">
                  Also emphasized failure handling with queue-based recovery
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3">
              <span className="font-mono text-sm font-bold text-brand-green">0.86</span>
              <div>
                <p className="text-sm font-medium text-ink">Reference #11</p>
                <p className="text-sm text-ink-muted">Also quantified scale estimates</p>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-ink-light">
            The 0.87 score reflects strong alignment with known-good responses.
          </p>

          <div className="mt-6 max-w-3xl rounded-lg border border-brand-green/30 bg-brand-green/5 px-4 py-3">
            <p className="text-sm text-ink-light">
              <span className="font-medium text-brand-green">Audit Point:</span> You can see what
              &ldquo;good&rdquo; looks like and how the candidate compared.
            </p>
          </div>
        </div>
      </section>

      {/* What Explainability Enables */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Impact
          </p>
          <h2 className="mt-4 text-2xl font-bold">What Explainability Enables</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Compliant Decision-Making</h3>
              <p className="mt-2 text-sm text-gray-300">
                Documented criteria for each role. Consistent application &mdash; every candidate
                gets the same questions. Traceable decisions linking every score to specific
                evidence. This shifts the legal conversation from &ldquo;can you prove you
                didn&rsquo;t discriminate?&rdquo; to &ldquo;here&rsquo;s exactly how every decision
                was made.&rdquo;
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Meaningful Candidate Feedback</h3>
              <p className="mt-2 text-sm text-gray-300">
                Instead of &ldquo;Unfortunately, you weren&rsquo;t selected,&rdquo; you can
                provide: &ldquo;Your technical assessment showed strong system design thinking
                (85th percentile) but our behavioral evaluation identified concerns about
                stakeholder management (62nd percentile).&rdquo; Candidates appreciate specific
                feedback. It reflects well on your employer brand.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Continuous Improvement</h3>
              <p className="mt-2 text-sm text-gray-300">
                Questions that don&rsquo;t differentiate candidates can be replaced. Models that
                disagree with human judgment can be recalibrated. Scoring weights can be adjusted
                based on what actually predicts success. Black boxes don&rsquo;t improve.
                Transparent systems do.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Hiring Manager Trust</h3>
              <p className="mt-2 text-sm text-gray-300">
                Hiring managers often distrust AI recommendations because they can&rsquo;t
                understand them. With LayersRank, a skeptical hiring manager can drill into any
                score, see the candidate&rsquo;s actual response, and form their own judgment. This
                builds trust through transparency rather than demanding blind faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Trail Structure */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Audit Trail Structure</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Every LayersRank assessment generates a complete audit trail:
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg
                  className="h-5 w-5 text-brand-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Assessment Metadata</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Candidate identifier (anonymized)</li>
                <li>Role template used</li>
                <li>Questions administered</li>
                <li>Completion &amp; processing timestamps</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg
                  className="h-5 w-5 text-brand-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Response Data</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Full text/transcript for each response</li>
                <li>Video files (per your data policy)</li>
                <li>Response duration</li>
                <li>Behavioral signals (typing patterns, pauses)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg
                  className="h-5 w-5 text-brand-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Scoring Data</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Individual model scores per response</li>
                <li>Model rationales (for LLM models)</li>
                <li>Agreement metrics</li>
                <li>Fuzzy components (T, F, R)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg
                  className="h-5 w-5 text-brand-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Aggregation Data</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Question-to-dimension aggregation</li>
                <li>Dimension weights applied</li>
                <li>Final score calculation</li>
                <li>Confidence aggregation</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg
                  className="h-5 w-5 text-brand-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Decision Data</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Threshold comparisons</li>
                <li>Verdict determination</li>
                <li>Any human overrides</li>
                <li>Final recommendation</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-ink-muted">
            All of this is queryable via API, exportable for compliance review, and retained
            according to your data retention policy.
          </p>
        </div>
      </section>

      {/* Explainability vs. Interpretability */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Explainability vs. Interpretability</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Technical distinction worth noting:
          </p>

          <div className="mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Interpretability</h3>
              <p className="mt-2 text-sm text-ink-light">
                You can understand how a model works <em>in general</em>. &ldquo;This model uses
                decision trees based on these features with these splits.&rdquo;
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Explainability</h3>
              <p className="mt-2 text-sm text-ink-light">
                You can understand why a model produced a <em>specific output</em>. &ldquo;This
                candidate scored 74 because of these specific factors in their responses.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="text-ink-light">LayersRank provides both:</p>
            <ul className="mt-4 space-y-3 text-ink-light">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-green"
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
                  <strong>Interpretable architecture:</strong> The pipeline is documented, the
                  aggregation formulas are known, the model types are understood
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-green"
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
                  <strong>Explainable outputs:</strong> Every individual score traces to specific
                  evidence for that candidate
                </span>
              </li>
            </ul>
            <p className="mt-6 text-ink-light">
              Many AI systems are interpretable (you know how they work in theory) but not
              explainable (you can&rsquo;t trace a specific decision). LayersRank is both.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Frequently Asked Questions</h2>

          <div className="mt-8 max-w-3xl divide-y divide-gray-200">
            {[
              {
                q: 'Can candidates see their explanations?',
                a: 'You control this. Some organizations share detailed feedback with candidates. Others provide summary feedback. Others provide none. The explanation exists regardless — you decide who sees it.',
              },
              {
                q: 'How much storage does full audit logging require?',
                a: 'Approximately 50-100KB per assessment for text data. Video storage is additional if retained. At 10,000 assessments/year, that\'s roughly 500MB-1GB of audit data annually.',
              },
              {
                q: 'Can explanations be used against us in litigation?',
                a: 'Consult your legal team, but generally: documented consistent processes are protective in litigation. "We evaluated every candidate using these specific criteria" is a strong defense. The risk is usually in NOT having documentation, not in having it.',
              },
              {
                q: "What if we disagree with a model's reasoning?",
                a: "Flag it. We investigate disagreements between model reasoning and human judgment. Sometimes the model is wrong — we improve it. Sometimes it caught something humans missed — that's valuable. Continuous feedback improves the system.",
              },
              {
                q: 'How do you handle explanations for rejected candidates who request them?',
                a: 'We recommend having a process for candidate feedback requests. LayersRank provides the data; your team decides what to share and how to frame it. We can provide guidance on candidate communication best practices.',
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
      <section className="bg-paper-off py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Related Pages
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/science"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              The Science &rarr;
            </Link>
            <Link
              href="/science/fuzzy-logic"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Fuzzy Logic Framework &rarr;
            </Link>
            <Link
              href="/science/bias-mitigation"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Bias Mitigation &rarr;
            </Link>
            <Link
              href="/resources/sample-report"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Sample Reports &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PageCTA
        title="Decisions You Can Explain and Defend"
        description="See what complete audit trails look like. Download a sample assessment with full explanation at every level."
        cta="Download Sample Audit Trail"
        ctaHref="/resources/sample-report"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
