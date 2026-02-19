import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import Link from 'next/link';

export const metadata = makeMetadata({
  title: 'Fuzzy Logic for Hiring Assessment | TR-q-ROFN Scoring Framework | LayersRank',
  description:
    'LayersRank uses Type-Reduced q-Rung Orthopair Fuzzy Numbers to quantify evaluation uncertainty. Understand the mathematics behind confidence-weighted candidate scoring.',
  path: '/science/fuzzy-logic',
});

export default function FuzzyLogicPage() {
  return (
    <>
      <PageHero
        eyebrow="Science / Fuzzy Logic Framework"
        title='The Mathematics of "We&rsquo;re Not Sure"'
        description="Traditional scoring forces false certainty. Fuzzy mathematics lets us represent what we actually know: sometimes the answer is clear, sometimes it's not, and knowing the difference matters for decisions."
        primaryCta="Download Technical Paper"
        primaryCtaHref="/resources/whitepapers"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      {/* Why Fuzzy Logic? */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why Fuzzy Logic?</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Consider a simple question: Is this candidate&rsquo;s response &ldquo;good&rdquo;?
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            In classical logic, the answer must be yes or no. True or false. 1 or 0.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            But that&rsquo;s not how evaluation actually works. A response might be:
          </p>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-ink-light">
            <li>Mostly good with some weak spots</li>
            <li>Good in ways that some evaluators value but not others</li>
            <li>Good if you interpret it one way, less good if you interpret it another</li>
            <li>Unclear enough that reasonable people would disagree</li>
          </ul>
          <p className="mt-4 max-w-3xl text-ink-light">
            Forcing a binary answer loses information. Forcing a single number (7.3 out of 10)
            creates false precision &mdash; it looks exact but hides the uncertainty underneath.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            Fuzzy logic provides mathematical tools for representing partial truths and genuine
            uncertainty. Instead of &ldquo;good&rdquo; or &ldquo;bad,&rdquo; we can represent
            &ldquo;73% confident it&rsquo;s good, 12% confident it&rsquo;s bad, 15%
            uncertain.&rdquo;
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            This isn&rsquo;t vagueness &mdash; it&rsquo;s precision about imprecision. We&rsquo;re
            being mathematically rigorous about the limits of what we know.
          </p>
        </div>
      </section>

      {/* The Traditional Scoring Problem */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Traditional Scoring Problem</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Let&rsquo;s see why traditional scoring fails with a concrete example.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            Three evaluation models assess a candidate&rsquo;s response:
          </p>

          {/* Table: Candidate A - Disagreeing Models */}
          <div className="mt-8 max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-ink text-left">
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Model
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Score (0&ndash;100)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Semantic Similarity</td>
                  <td className="px-6 py-3 text-ink-light">82</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Reasoning Depth</td>
                  <td className="px-6 py-3 text-ink-light">61</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Relevance</td>
                  <td className="px-6 py-3 text-ink-light">78</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-ink-light">
            Traditional approach: Average the scores. (82 + 61 + 78) / 3 = 73.7
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            The candidate gets a 74. Looks precise. But what does it mean?
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            The models significantly disagree. Semantic Similarity sees a strong response (82).
            Reasoning Depth sees a weak response (61). That&rsquo;s a 21-point gap &mdash; not minor
            noise, but meaningfully different evaluations.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            The average hides this disagreement. Someone looking at &ldquo;74&rdquo; has no idea that
            the score is contested. They might treat it with the same confidence as a score where all
            models agreed at 74.
          </p>

          <p className="mt-8 max-w-3xl font-medium text-ink">
            Now consider a different candidate:
          </p>

          {/* Table: Candidate B - Agreeing Models */}
          <div className="mt-4 max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-ink text-left">
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Model
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Score (0&ndash;100)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Semantic Similarity</td>
                  <td className="px-6 py-3 text-ink-light">75</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Reasoning Depth</td>
                  <td className="px-6 py-3 text-ink-light">73</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Relevance</td>
                  <td className="px-6 py-3 text-ink-light">74</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-ink-light">Average: 74</p>
          <p className="mt-4 max-w-3xl text-ink-light">
            Same final score. But completely different reliability. This 74 is solid &mdash; all
            models agree. The previous 74 is shaky &mdash; models disagree significantly.
          </p>
          <p className="mt-4 max-w-3xl font-medium text-ink">
            Traditional scoring can&rsquo;t distinguish these cases. Fuzzy scoring can.
          </p>
        </div>
      </section>

      {/* Introducing TR-q-ROFNs */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Introducing TR-q-ROFNs</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            LayersRank uses Type-Reduced q-Rung Orthopair Fuzzy Numbers (TR-q-ROFNs) to represent
            evaluation outcomes.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            Don&rsquo;t let the name intimidate you. The concept is intuitive once you see it.
          </p>

          <h3 className="mt-10 text-xl font-bold text-ink">The Three Components</h3>
          <p className="mt-4 max-w-3xl text-ink-light">
            Every evaluation has three components:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <span className="text-lg font-bold text-brand-green">T</span>
              </div>
              <h4 className="text-lg font-bold text-ink">Truth (T)</h4>
              <p className="mt-2 text-sm text-ink-light">
                The degree to which evidence supports a positive assessment. Range: 0 to 1. Higher T
                = stronger evidence the candidate performed well.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
                <span className="text-lg font-bold text-brand-red">F</span>
              </div>
              <h4 className="text-lg font-bold text-ink">Falsity (F)</h4>
              <p className="mt-2 text-sm text-ink-light">
                The degree to which evidence supports a negative assessment. Range: 0 to 1. Higher F
                = stronger evidence the candidate performed poorly.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">R</span>
              </div>
              <h4 className="text-lg font-bold text-ink">Refusal (R)</h4>
              <p className="mt-2 text-sm text-ink-light">
                The degree of uncertainty, indeterminacy, or disagreement. Range: 0 to 1. Higher R =
                more uncertainty about the evaluation.
              </p>
            </div>
          </div>

          {/* Pythagorean Constraint */}
          <h3 className="mt-12 text-xl font-bold text-ink">The Pythagorean Constraint</h3>
          <p className="mt-4 max-w-3xl text-ink-light">
            These three components must satisfy:
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 bg-ink px-6 py-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Constraint
              </p>
            </div>
            <pre className="overflow-auto p-6 font-mono text-lg leading-relaxed text-ink">
              {'T² + F² + R² = 1'}
            </pre>
          </div>

          <p className="mt-6 max-w-3xl text-ink-light">
            This constraint ensures they trade off against each other. Strong evidence for positive
            (high T) leaves less room for uncertainty (R must be lower). Strong negative evidence
            (high F) also reduces uncertainty. High uncertainty (high R) means the evidence
            doesn&rsquo;t clearly point either direction.
          </p>

          {/* Orthopair and q-Rung */}
          <h3 className="mt-12 text-xl font-bold text-ink">
            Why &ldquo;Orthopair&rdquo; and &ldquo;q-Rung&rdquo;?
          </h3>
          <p className="mt-4 max-w-3xl text-ink-light">
            &ldquo;Orthopair&rdquo; means we separately track positive evidence (T) and negative
            evidence (F) rather than collapsing them into a single scale. This matters because
            &ldquo;no positive evidence&rdquo; is different from &ldquo;strong negative
            evidence.&rdquo;
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            &ldquo;q-Rung&rdquo; refers to the mathematical generalization parameter. With q=2
            (which LayersRank uses), we get the Pythagorean constraint above. Higher q values allow
            more extreme combinations of T and F.
          </p>

          {/* Why Type-Reduced */}
          <h3 className="mt-12 text-xl font-bold text-ink">Why &ldquo;Type-Reduced&rdquo;?</h3>
          <p className="mt-4 max-w-3xl text-ink-light">
            Type-2 fuzzy sets model uncertainty about the fuzzy membership values themselves &mdash;
            uncertainty about uncertainty. Type-Reduction is a process that converts these complex
            representations into actionable values.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            For LayersRank, this means we can model disagreement between evaluation models
            (uncertainty about the evaluation) and then reduce it to scores and confidence levels you
            can actually use for decisions.
          </p>
        </div>
      </section>

      {/* From Model Scores to Fuzzy Numbers */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            The Pipeline
          </p>
          <h2 className="mt-4 text-2xl font-bold">From Model Scores to Fuzzy Numbers</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            Here&rsquo;s how we convert raw model scores into fuzzy numbers.
          </p>

          {/* Step 1 */}
          <div className="mt-12 space-y-0">
            <div className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-yellow">
                  <span className="text-sm font-bold text-brand-yellow">1</span>
                </div>
                <div className="w-px flex-1 bg-gray-600" />
              </div>
              <div className="pb-10">
                <h3 className="font-bold text-white">Normalize Model Outputs</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Each model produces a score on its native scale. We normalize to 0&ndash;1.
                </p>
                <div className="mt-4 max-w-lg overflow-hidden rounded-lg border border-gray-700">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-left">
                        <th className="px-4 py-2 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                          Model
                        </th>
                        <th className="px-4 py-2 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                          Raw Score
                        </th>
                        <th className="px-4 py-2 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                          Normalized
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Semantic Similarity</td>
                        <td className="px-4 py-2 font-mono text-gray-400">0.82</td>
                        <td className="px-4 py-2 font-mono text-white">0.82</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Reasoning Depth</td>
                        <td className="px-4 py-2 font-mono text-gray-400">6.1/10</td>
                        <td className="px-4 py-2 font-mono text-white">0.61</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-300">Relevance</td>
                        <td className="px-4 py-2 font-mono text-gray-400">0.78</td>
                        <td className="px-4 py-2 font-mono text-white">0.78</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-yellow">
                  <span className="text-sm font-bold text-brand-yellow">2</span>
                </div>
                <div className="w-px flex-1 bg-gray-600" />
              </div>
              <div className="pb-10">
                <h3 className="font-bold text-white">Calculate Agreement</h3>
                <p className="mt-2 text-sm text-gray-300">
                  We measure how much models agree using variance or similar dispersion metrics.
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  Low variance = high agreement. High variance = low agreement.
                </p>
                <div className="mt-4 overflow-auto rounded-lg bg-white/5 p-4">
                  <pre className="font-mono text-sm text-gray-300">
{`Scores: [0.82, 0.61, 0.78]
Mean:    0.737
Variance: 0.0078
Std Dev: 0.088`}
                  </pre>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  This is moderate disagreement &mdash; not extreme, but not tight agreement either.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-yellow">
                  <span className="text-sm font-bold text-brand-yellow">3</span>
                </div>
                <div className="w-px flex-1 bg-gray-600" />
              </div>
              <div className="pb-10">
                <h3 className="font-bold text-white">Derive T, F, R</h3>
                <p className="mt-2 text-sm text-gray-300">
                  We map the normalized scores and agreement into fuzzy components:
                </p>
                <div className="mt-4 overflow-auto rounded-lg bg-white/5 p-4">
                  <pre className="font-mono text-sm text-gray-300">
{`Truth (T):   Based on central tendency, weighted by agreement
             T = mean_score × agreement_factor
             T ≈ 0.70

Falsity (F): Based on negative evidence signals
             F = (1 - mean_score) × agreement_factor
             F ≈ 0.15

Refusal (R): Derived from disagreement
             R = √(1 - T² - F²)
             R = √(1 - 0.49 - 0.0225) = √0.4875
             R ≈ 0.70`}
                  </pre>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  This indicates substantial uncertainty &mdash; appropriate given the model
                  disagreement.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-yellow">
                  <span className="text-sm font-bold text-brand-yellow">4</span>
                </div>
              </div>
              <div className="pb-2">
                <h3 className="font-bold text-white">Convert to Score and Confidence</h3>
                <p className="mt-2 text-sm text-gray-300">
                  The final score derives from T and F, while confidence derives from R:
                </p>
                <div className="mt-4 overflow-auto rounded-lg bg-white/5 p-4">
                  <pre className="font-mono text-sm text-gray-300">
{`Score = f(T, F, R)  →  calibrated to expected distributions
Confidence = 1 - R  →  0.30 or 30%`}
                  </pre>
                </div>
                <p className="mt-4 text-sm text-gray-300">
                  T, F, and R together determine both the score and its reliability. The interval
                  width also derives from R &mdash; higher R means wider interval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked Example: High Agreement */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
            Worked Example
          </p>
          <h2 className="mt-4 text-2xl font-bold text-ink">
            When Models Agree: High Confidence
          </h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Candidate answers a system design question. Four models evaluate.
          </p>

          <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-ink text-left">
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Model
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Raw Output
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Interpretation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Semantic</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.81</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">Strong conceptual match</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Lexical</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.72</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">Good terminology</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Reasoning</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.78</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">Solid logical depth</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Relevance</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.84</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">Directly addresses question</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Agreement Analysis
              </p>
              <div className="mt-3 space-y-1 font-mono text-sm text-ink-light">
                <p>Mean: 0.7875</p>
                <p>Std Dev: 0.045</p>
                <p className="font-medium text-brand-green">Low std dev = high agreement</p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Fuzzy Components
              </p>
              <div className="mt-3 space-y-1 font-mono text-sm text-ink-light">
                <p>
                  T &asymp; <span className="text-brand-green">0.82</span> (strong positive)
                </p>
                <p>
                  F &asymp; <span className="text-brand-red">0.06</span> (weak negative)
                </p>
                <p>
                  R &asymp; <span className="text-brand-yellow">0.15</span> (low uncertainty)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl rounded-xl border-2 border-brand-green/30 bg-brand-green/5 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-brand-green">
              Final Output
            </p>
            <p className="mt-3 text-2xl font-bold text-ink">
              79 <span className="text-lg font-normal text-ink-muted">&plusmn; 3</span>
              <span className="ml-4 text-lg font-normal text-brand-green">85% confidence</span>
            </p>
            <p className="mt-3 text-sm text-ink-light">
              The candidate scored 79. We&rsquo;re quite confident about it. The true score is
              almost certainly between 76 and 82.
            </p>
          </div>
        </div>
      </section>

      {/* Worked Example: Disagreement */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
            Worked Example
          </p>
          <h2 className="mt-4 text-2xl font-bold text-ink">
            When Models Disagree: Handling Uncertainty
          </h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Same question, but the candidate&rsquo;s response is ambiguous.
          </p>

          <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-ink text-left">
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Model
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Raw Output
                  </th>
                  <th className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-brand-yellow">
                    Interpretation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Semantic</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.86</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">Strong keyword match</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Lexical</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.79</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">Good terminology</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Reasoning</td>
                  <td className="px-6 py-3 font-mono text-brand-red">0.52</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">
                    Shallow logic, lacks depth
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium text-ink">Relevance</td>
                  <td className="px-6 py-3 font-mono text-ink-light">0.71</td>
                  <td className="px-6 py-3 text-sm text-ink-muted">
                    Partially addresses question
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Agreement Analysis
              </p>
              <div className="mt-3 space-y-1 font-mono text-sm text-ink-light">
                <p>Mean: 0.72</p>
                <p>Std Dev: 0.13</p>
                <p className="font-medium text-brand-red">
                  High std dev = low agreement
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Fuzzy Components
              </p>
              <div className="mt-3 space-y-1 font-mono text-sm text-ink-light">
                <p>
                  T &asymp; <span className="text-brand-green">0.65</span> (moderate positive)
                </p>
                <p>
                  F &asymp; <span className="text-brand-red">0.20</span> (some negative)
                </p>
                <p>
                  R &asymp; <span className="text-brand-yellow">0.45</span> (substantial
                  uncertainty)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
              Initial Output
            </p>
            <p className="mt-3 text-2xl font-bold text-ink">
              72 <span className="text-lg font-normal text-ink-muted">&plusmn; 9</span>
              <span className="ml-4 text-lg font-normal text-brand-yellow">55% confidence</span>
            </p>
            <p className="mt-3 text-sm text-ink-light">
              Our best guess is 72, but we&rsquo;re not very confident. The true score could
              reasonably be anywhere from 63 to 81. Interpret with caution.
            </p>
          </div>

          {/* Adaptive Follow-Up */}
          <div className="mt-8 max-w-3xl">
            <h3 className="text-lg font-bold text-ink">Adaptive Follow-Up Triggered</h3>
            <p className="mt-4 text-ink-light">
              Because R (0.45) exceeds our threshold (0.25), the system generates a follow-up
              question:
            </p>
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm italic text-ink-light">
                &ldquo;You mentioned several design considerations. Can you walk through your
                reasoning for how you&rsquo;d handle failure scenarios?&rdquo;
              </p>
            </div>
            <p className="mt-4 text-ink-light">
              The candidate responds with more depth. Reasoning model now scores 0.71 instead of
              0.52. Agreement improves. R drops to 0.18.
            </p>
          </div>

          <div className="mt-6 max-w-3xl rounded-xl border-2 border-brand-green/30 bg-brand-green/5 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-brand-green">
              Revised Output
            </p>
            <p className="mt-3 text-2xl font-bold text-ink">
              76 <span className="text-lg font-normal text-ink-muted">&plusmn; 4</span>
              <span className="ml-4 text-lg font-normal text-brand-green">82% confidence</span>
            </p>
            <p className="mt-3 text-sm text-ink-light">
              The follow-up resolved the ambiguity. We now have a reliable assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters for Hiring */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Impact
          </p>
          <h2 className="mt-4 text-2xl font-bold">Why This Matters for Hiring</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Better Decision-Making</h3>
              <p className="mt-2 text-sm text-gray-300">
                When confidence is high, you can act decisively. When confidence is low, you know to
                gather more information or weight the score less heavily. A traditional
                &ldquo;74&rdquo; gives you nothing to work with. A &ldquo;74 &plusmn; 9, 55%
                confidence&rdquo; tells you exactly how much to trust it.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Fairer Evaluation</h3>
              <p className="mt-2 text-sm text-gray-300">
                Ambiguous responses get flagged rather than arbitrarily scored. The candidate gets a
                chance to clarify via adaptive follow-up rather than being penalized for one unclear
                answer. This is especially important for candidates whose communication style differs
                from the training data.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Auditability</h3>
              <p className="mt-2 text-sm text-gray-300">
                Every score has a mathematical derivation. T, F, and R values are logged. Model
                scores are recorded. If someone asks &ldquo;why did this candidate get 76?&rdquo;,
                you can trace through the exact calculation. This matters for compliance, candidate
                feedback, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Technical Details</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            For those who want the precise mathematics.
          </p>

          {/* q-ROFS Definition */}
          <div className="mt-10 max-w-3xl">
            <h3 className="text-lg font-bold text-ink">The q-ROFS Definition</h3>
            <p className="mt-4 text-ink-light">
              A q-rung orthopair fuzzy set A on universe X is:
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="border-b border-gray-200 bg-ink px-6 py-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                  Formal Definition
                </p>
              </div>
              <pre className="overflow-auto p-6 font-mono text-sm leading-relaxed text-ink">
{`A = {⟨x, T_A(x), F_A(x)⟩ | x ∈ X}

Where:
  T_A: X → [0,1]  (truth membership function)
  F_A: X → [0,1]  (falsity membership function)

Constraint:
  (T_A(x))^q + (F_A(x))^q ≤ 1

For q = 2 (Pythagorean fuzzy sets):
  T² + F² ≤ 1

Refusal degree:
  R = √(1 - T² - F²)`}
              </pre>
            </div>
          </div>

          {/* Type-Reduction */}
          <div className="mt-10 max-w-3xl">
            <h3 className="text-lg font-bold text-ink">Type-Reduction</h3>
            <p className="mt-4 text-ink-light">
              For Type-2 fuzzy sets where membership values are themselves fuzzy, type-reduction
              converts to Type-1 via centroid or other methods.
            </p>
            <p className="mt-4 text-ink-light">
              In LayersRank, the &ldquo;Type-2&rdquo; aspect comes from model disagreement &mdash;
              we have uncertainty about the evaluation itself. Type-reduction aggregates the multiple
              model perspectives into a single fuzzy number for each response.
            </p>
          </div>

          {/* Aggregation Operators */}
          <div className="mt-10 max-w-3xl">
            <h3 className="text-lg font-bold text-ink">Aggregation Operators</h3>
            <p className="mt-4 text-ink-light">
              To combine multiple fuzzy evaluations (across questions, across dimensions), we use
              generalized aggregation operators that preserve the fuzzy structure:
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="border-b border-gray-200 bg-ink px-6 py-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                  Weighted Aggregation
                </p>
              </div>
              <pre className="overflow-auto p-6 font-mono text-sm leading-relaxed text-ink">
{`For two TR-q-ROFNs:
  α₁ = (T₁, F₁, R₁)
  α₂ = (T₂, F₂, R₂)

Weighted average:
  T_agg = w₁T₁ + w₂T₂
  F_agg = w₁F₁ + w₂F₂
  R_agg = √(1 - T_agg² - F_agg²)`}
              </pre>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              More sophisticated operators (Einstein, Hamacher) can provide different aggregation
              behaviors for specific use cases.
            </p>
          </div>
        </div>
      </section>

      {/* Further Reading */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Further Reading</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Foundational Papers
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-light">
                <li>
                  Zadeh, L.A. (1965). Fuzzy sets. <span className="italic">Information and Control.</span>
                </li>
                <li>
                  Yager, R.R. (2017). Generalized orthopair fuzzy sets.{' '}
                  <span className="italic">IEEE Transactions on Fuzzy Systems.</span>
                </li>
                <li>
                  Atanassov, K.T. (1986). Intuitionistic fuzzy sets.{' '}
                  <span className="italic">Fuzzy Sets and Systems.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Applications to Decision-Making
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-light">
                <li>
                  Liu, P. &amp; Wang, P. (2018). Multiple-attribute decision-making based on q-rung
                  orthopair fuzzy aggregation operators.
                </li>
                <li>
                  Wei, G. et al. (2019). Multiple attribute decision making with q-rung orthopair
                  fuzzy information.
                </li>
              </ul>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-12">
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
                href="/science/explainability"
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
              >
                Explainable AI &rarr;
              </Link>
              <Link
                href="/product/confidence-scoring"
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
              >
                Confidence Scoring &rarr;
              </Link>
              <Link
                href="/product/adaptive-questioning"
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
              >
                Adaptive Follow-Up &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PageCTA
        title="Mathematics That Serves Decisions"
        description="The fuzzy framework isn't academic exercise — it's the foundation for hiring decisions you can trust and defend. See how it works in practice."
        cta="Download Technical Paper"
        ctaHref="/resources/whitepapers"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
