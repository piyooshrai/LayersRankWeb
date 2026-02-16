import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, FeatureCard, FeatureGrid } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata = makeMetadata({
  title: 'Adaptive Follow-Up Questions | LayersRank',
  description:
    'When the system detects ambiguity in a candidate response, it generates targeted follow-up questions in real time. No shaky scores, no guessing.',
  path: '/product/adaptive-questioning',
});

const flowSteps = [
  {
    number: '01',
    title: 'Candidate Submits Answer',
    description: 'The candidate responds to a structured question via video, text, or multiple choice.',
  },
  {
    number: '02',
    title: 'Multi-Model Scoring',
    description: 'Multiple independent models evaluate the response against the role-specific rubric.',
  },
  {
    number: '03',
    title: 'Confidence Check',
    description: 'The system measures inter-rater reliability across model outputs and calculates a confidence score.',
  },
  {
    number: '04',
    title: 'Ambiguity Detected',
    description: 'If confidence falls below the configured threshold, the response is flagged for follow-up.',
  },
  {
    number: '05',
    title: 'Follow-Up Generated',
    description: 'A targeted clarifying question is generated based on the specific area of uncertainty in the original response.',
  },
  {
    number: '06',
    title: 'Candidate Responds Again',
    description: 'The candidate receives the follow-up and provides additional detail or clarification.',
  },
  {
    number: '07',
    title: 'Re-Score with Combined Evidence',
    description: 'Both the original and follow-up responses are scored together, typically producing a much tighter confidence band.',
  },
];

const thresholdConfigs = [
  {
    profile: 'Senior / Critical Roles',
    threshold: 'R > 0.20',
    description: 'Tighter threshold triggers follow-ups more aggressively. Best for roles where a wrong hire is costly.',
  },
  {
    profile: 'Volume Hiring',
    threshold: 'R > 0.35',
    description: 'Looser threshold reduces follow-ups for faster throughput. Acceptable when the cost of a miss is lower.',
  },
  {
    profile: 'Default',
    threshold: 'R > 0.25',
    description: 'Balanced threshold that works well for most roles. Good trade-off between signal quality and candidate experience.',
  },
];

export default function AdaptiveQuestioningPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="When We're Not Sure, We Ask"
        description="Most systems score every answer once and move on -- even when the signal is unclear. LayersRank detects ambiguity in real time and generates targeted follow-up questions to resolve it before producing a final score."
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Interview interface showing follow-up question" search="chat interface ai follow-up question" />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How adaptive questioning works</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            A seven-step process that turns ambiguous signals into high-confidence scores.
          </p>
          <div className="mt-10 space-y-0">
            {flowSteps.map((step, idx) => (
              <div key={step.number} className="relative flex gap-6 pb-8 last:pb-0">
                {/* Connector line */}
                {idx < flowSteps.length - 1 && (
                  <div className="absolute left-5 top-10 h-full w-px bg-gray-200" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example in Action */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Example in action</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            See how adaptive questioning resolves ambiguity for a product management candidate.
          </p>
          <div className="mt-10 mx-auto max-w-3xl space-y-6">
            {/* Initial Question */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Question</p>
              <p className="mt-2 text-ink">
                Describe a time you had to make a product decision with incomplete data. What was your approach?
              </p>
            </div>

            {/* Initial Answer */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Initial Answer</p>
              <p className="mt-2 text-ink-light italic">
                &ldquo;I usually try to gather as much information as possible and then make a decision based on what I know.
                I think it&apos;s important to be data-driven but also trust your gut sometimes.&rdquo;
              </p>
            </div>

            {/* System Detection */}
            <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange/10">
                  <svg className="h-4 w-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-orange">Ambiguity Detected</p>
                  <p className="text-sm text-ink-light">
                    Confidence: <span className="font-mono font-bold text-brand-orange">62%</span> -- Response lacks
                    specific examples and measurable outcomes. Models disagree on Problem Solving and Decision Making dimensions.
                  </p>
                </div>
              </div>
            </div>

            {/* Follow-Up Question */}
            <div className="rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Adaptive Follow-Up</p>
              <p className="mt-2 text-ink">
                Can you walk through a specific example? What was the product decision, what data did you have and what
                was missing, and how did the outcome compare to what you expected?
              </p>
            </div>

            {/* Second Answer */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Second Answer</p>
              <p className="mt-2 text-ink-light italic">
                &ldquo;Last quarter, we needed to decide whether to build a Slack integration or a Teams integration first.
                We had usage data showing 60% of our users mentioned Slack in onboarding, but no data on actual
                daily active usage across platforms. I proposed a two-week instrumentation sprint to capture platform
                usage data before committing. The data showed Teams usage was actually 40% higher than expected.
                We shipped Teams first and saw 3x the adoption rate compared to our Slack beta. The lesson was that
                stated preference and actual behavior can diverge significantly.&rdquo;
              </p>
            </div>

            {/* Resolution */}
            <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/10">
                  <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-green">Resolved</p>
                  <p className="text-sm text-ink-light">
                    Confidence increased from <span className="font-mono font-bold text-brand-orange">62%</span> to{' '}
                    <span className="font-mono font-bold text-brand-green">91%</span>. Models now agree on
                    Problem Solving (4.1) and Decision Making (4.3) dimensions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Why This Matters</p>
          <h2 className="mt-4 text-2xl font-bold">Better signal. Fairer process. Clearer decisions.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">No Shaky Scores</h3>
              <p className="mt-2 text-sm text-gray-300">
                Every final score meets a minimum confidence threshold. You never make decisions based on uncertain data
                because the system resolves ambiguity before publishing results.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Candidates Get a Fair Chance</h3>
              <p className="mt-2 text-sm text-gray-300">
                A vague first answer does not mean a bad candidate. Follow-up questions give everyone the opportunity to
                demonstrate their full capability, reducing false negatives.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Clear Signal for Reviewers</h3>
              <p className="mt-2 text-sm text-gray-300">
                Recruiters and hiring managers see high-confidence scores with tight bands. No more wondering whether a
                3.5 is a strong 3.5 or a noisy guess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurable Thresholds */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Configurable thresholds</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Different roles need different sensitivity levels. Configure when follow-ups trigger based on how
            critical the hire is.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper-off">
                  <th className="px-6 py-4 text-left font-semibold text-ink">Profile</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">Threshold</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">Description</th>
                </tr>
              </thead>
              <tbody>
                {thresholdConfigs.map((config) => (
                  <tr key={config.profile} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">{config.profile}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-md bg-ink/5 px-2 py-1 font-mono text-sm text-ink">{config.threshold}</span>
                    </td>
                    <td className="px-6 py-4 text-ink-light">{config.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            R = inter-rater reliability score. Lower thresholds trigger follow-ups more frequently. Thresholds are configurable per role or globally.
          </p>
        </div>
      </section>

      <PageCTA
        title="See adaptive questioning in action"
        description="Watch how follow-up questions turn ambiguous answers into high-confidence scores. 20-minute demo, no commitment."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
