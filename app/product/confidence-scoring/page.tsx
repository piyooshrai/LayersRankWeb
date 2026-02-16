import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Confidence-Weighted Candidate Scoring | Know When to Trust the Signal | LayersRank',
  description:
    'Every LayersRank score includes a confidence level. Stop making hiring decisions based on false precision. Know when the signal is strong and when to dig deeper.',
  path: '/product/confidence-scoring',
});

const evaluationApproaches = [
  {
    title: 'Semantic Similarity Analysis',
    measures: 'Does the meaning of the candidate\'s response align with what strong answers typically convey?',
    how: 'We use sentence-level embedding models (specifically, Sentence-BERT) to convert both the candidate\'s response and reference strong answers into mathematical representations of meaning. We then measure how similar these representations are.',
    catches: 'Whether the candidate understood the question and addressed the core concepts. Whether they\'re in the right ballpark topically. Whether they conveyed the key ideas that matter for this competency.',
    limitation: 'Semantic similarity can be fooled by responses that use the right words without genuine understanding. Someone could hit the right topics superficially.',
  },
  {
    title: 'Lexical Alignment Analysis',
    measures: 'Does the candidate use appropriate domain terminology and professional language patterns?',
    how: 'We analyze the specific words and phrases used, comparing against terminology patterns that characterize strong responses in this domain. This includes technical vocabulary, industry-standard terms, and professional communication markers.',
    catches: 'Domain expertise signaled through language. Whether the candidate speaks the language of the role. Technical vocabulary that indicates real experience versus surface-level familiarity.',
    limitation: 'Lexical analysis can over-reward jargon. Someone who\'s memorized terminology might score well without deep understanding.',
  },
  {
    title: 'LLM Reasoning Evaluation',
    measures: 'Does the response demonstrate logical depth, structured thinking, and analytical rigor?',
    how: 'A large language model evaluates the response for reasoning quality -- how well arguments are constructed, whether conclusions follow from premises, whether the candidate considers multiple angles, whether they acknowledge complexity where appropriate.',
    catches: 'Thinking depth that goes beyond surface-level answers. Problem-solving approach. Ability to structure an argument. Analytical sophistication.',
    limitation: 'LLMs can have their own biases about what constitutes "good" reasoning. They may reward certain communication styles over others.',
  },
  {
    title: 'Cross-Encoder Contextual Scoring',
    measures: 'Given the specific question asked, how relevant and complete is this particular response?',
    how: 'A cross-encoder model evaluates the question-answer pair together, assessing whether the response actually addresses what was asked. This catches responses that might be generally good but don\'t answer the specific question.',
    catches: 'Relevance to the actual question. Completeness of the response. Whether the candidate addressed all parts of a multi-part question. Whether they stayed on topic.',
    limitation: 'Highly novel or creative responses that address the question in unexpected ways might score lower on direct relevance.',
  },
];

const faqs = [
  {
    q: 'Can confidence ever reach 100%?',
    a: 'We cap displayed confidence at 98%. There\'s always some inherent uncertainty in evaluating human responses through any method. Displaying 100% would overstate certainty. In practice, scores above 95% confidence are very reliable. Treat them as "effectively certain" for decision-making purposes.',
  },
  {
    q: 'What if I disagree with a high-confidence score?',
    a: 'High confidence means evaluation models agreed, not that they\'re necessarily right. If you have information the models don\'t -- prior experience with the candidate, context about their background, signals from references -- your judgment matters. Add your perspective to the candidate record. If you consistently disagree with high-confidence scores, contact us -- it may indicate a calibration issue we should investigate.',
  },
  {
    q: 'Does high confidence mean "hire this person"?',
    a: 'No. Confidence indicates score reliability, not candidate quality. A candidate who scores 55 with 95% confidence is reliably mediocre. We\'re very confident they performed at the 55 level. That confidence doesn\'t make them a good hire. Confidence tells you how much to trust the score. The score tells you how the candidate performed. Both matter for decisions.',
  },
  {
    q: 'What causes low confidence?',
    a: 'Most commonly: responses that different evaluation approaches interpret differently. A response might demonstrate domain knowledge (high lexical score) but lack logical depth (low reasoning score). Other causes include very brief responses that don\'t provide enough evidence, responses in unusual formats or styles that models handle inconsistently, or technical issues affecting response quality.',
  },
  {
    q: 'How is confidence validated?',
    a: 'We continuously test confidence calibration against human evaluator agreement. When we report 85% confidence, approximately 85% of human evaluators should agree with the assessment. This calibration uses ongoing data from customer deployments (anonymized and aggregated). As we see more responses and outcomes, calibration improves.',
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

export default function ConfidenceScoringPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Product / Confidence Scoring"
        title="A Score Without Confidence Is Just a Guess"
        description="Traditional platforms give you a number. LayersRank gives you a number plus how much you should trust it. Because a 72 with high confidence is very different from a 72 with high uncertainty."
        primaryCta="See Sample Report"
        primaryCtaHref="/resources/sample-report"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Confidence-weighted scoring dashboard comparison" search="data visualization confidence metrics scoring" />
        </div>
      </section>

      {/* ── THE PROBLEM WITH SINGLE NUMBERS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The problem with single numbers</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Every hiring platform produces scores. Candidate&nbsp;A scored&nbsp;78. Candidate&nbsp;B scored&nbsp;74.
            The decision seems obvious. Advance Candidate&nbsp;A.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            But here&apos;s what that simple comparison hides.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Candidate A */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Candidate A</p>
              <p className="mt-3 text-lg font-bold text-ink">Score: 78</p>
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Model 1', value: 91, pct: '91%', color: 'bg-brand-green' },
                  { label: 'Model 2', value: 64, pct: '64%', color: 'bg-brand-red' },
                  { label: 'Model 3', value: 79, pct: '79%', color: 'bg-brand-yellow' },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-sm text-ink-muted">
                      <span>{m.label}</span>
                      <span className="font-mono">{m.value}</span>
                    </div>
                    <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                      <div className={`h-full rounded-full ${m.color}`} style={{ width: m.pct }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-brand-red/10 px-4 py-2 text-sm font-medium text-brand-red">
                Wildly different signals. High uncertainty.
              </div>
              <p className="mt-3 text-sm text-ink-light">
                One model says exceptional. Another says significant concerns. Nobody actually thinks she&apos;s a&nbsp;78.
                The single number papers over a meaningful disagreement.
              </p>
            </div>

            {/* Candidate B */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Candidate B</p>
              <p className="mt-3 text-lg font-bold text-ink">Score: 74</p>
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Model 1', value: 72, pct: '72%', color: 'bg-brand-green' },
                  { label: 'Model 2', value: 76, pct: '76%', color: 'bg-brand-green' },
                  { label: 'Model 3', value: 74, pct: '74%', color: 'bg-brand-green' },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-sm text-ink-muted">
                      <span>{m.label}</span>
                      <span className="font-mono">{m.value}</span>
                    </div>
                    <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                      <div className={`h-full rounded-full ${m.color}`} style={{ width: m.pct }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green">
                Consistent signals. High confidence.
              </div>
              <p className="mt-3 text-sm text-ink-light">
                All models agree: solid candidate, reliable performer.
                The 74 accurately represents what every evaluation concluded.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Now which candidate would you rather advance? Candidate&nbsp;A might be a hidden star whose depth
              would emerge with probing. Or she might be a polished communicator who can&apos;t back it up.
              You genuinely don&apos;t know.
            </p>
            <p>
              Candidate&nbsp;B is what she appears to be. The evaluation is trustworthy. You know what you&apos;re getting.
            </p>
            <p>
              Traditional scoring hides this distinction. Both candidates show up as mid-70s scores. One is a confident
              assessment. One is a guess dressed up as precision.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
            <p className="text-sm font-semibold text-ink">This isn&apos;t a rare edge case.</p>
            <p className="mt-1 text-sm text-ink-light">
              In our analysis of over 50,000 interview responses, <span className="font-semibold text-ink">23%</span> showed
              significant model disagreement -- cases where different evaluation approaches reached meaningfully different
              conclusions. Nearly one in four scores is hiding uncertainty that would change how you interpret it.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT CONFIDENCE SCORING ACTUALLY MEANS ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What confidence scoring actually means</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            When LayersRank reports a score, you see three components. Here&apos;s what each one tells you.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* The Score */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-ink">76</span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">The Score</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                Our best estimate of how the candidate performed on this dimension. It synthesizes signals
                from multiple evaluation models into a single number.
              </p>
              <p className="mt-3 text-sm italic text-ink-muted">
                &ldquo;Aggregating all available evidence, this candidate performed at approximately
                the 76th percentile for this competency.&rdquo;
              </p>
            </div>

            {/* The Interval */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-ink">&plusmn;&thinsp;4</span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">The Interval</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                The uncertainty band around the score. The true performance level is likely
                somewhere between 72 and 80.
              </p>
              <div className="mt-3 space-y-2 text-sm text-ink-light">
                <p><span className="font-semibold text-brand-green">&plusmn;&thinsp;3 or less</span> -- Consistent signals. Precise score.</p>
                <p><span className="font-semibold text-brand-red">&plusmn;&thinsp;10 or more</span> -- Significant disagreement. Uncertain score.</p>
              </div>
            </div>

            {/* The Confidence */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-ink">89%</span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">The Confidence</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                Our certainty that the reported score accurately reflects the candidate&apos;s actual ability level.
              </p>
              <div className="mt-3 space-y-2 text-sm text-ink-light">
                <p><span className="font-semibold text-brand-green">85%+</span> -- Rely on this score without reservation.</p>
                <p><span className="font-semibold text-brand-yellow">70-84%</span> -- Directionally correct, probe further.</p>
                <p><span className="font-semibold text-brand-red">Below 70%</span> -- Substantial uncertainty remains.</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-ink-muted">
            You&apos;ll rarely see low-confidence scores in final reports because our{' '}
            <Link href="/product/adaptive-questioning" className="text-brand-yellow underline underline-offset-2 hover:text-brand-orange">
              Adaptive Follow-Up
            </Link>{' '}
            system resolves most uncertainty during the interview itself.
          </p>
        </div>
      </section>

      {/* ── WHY MULTI-MODEL EVALUATION CREATES CONFIDENCE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why multi-model evaluation creates confidence</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            A single model produces a single score. You have no way to know whether that score is reliable.
            Multiple models produce multiple scores. When they agree, you have corroboration. When they disagree,
            you have valuable information.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            LayersRank evaluates every response through four distinct approaches:
          </p>

          <div className="mt-10 space-y-6">
            {evaluationApproaches.map((approach, idx) => (
              <div key={approach.title} className="rounded-xl border border-gray-200 bg-paper-off p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-ink">{approach.title}</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">What it measures</p>
                        <p className="mt-1 text-sm text-ink-light">{approach.measures}</p>
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">How it works</p>
                        <p className="mt-1 text-sm text-ink-light">{approach.how}</p>
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">What it catches</p>
                        <p className="mt-1 text-sm text-ink-light">{approach.catches}</p>
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Limitation</p>
                        <p className="mt-1 text-sm text-ink-light">{approach.limitation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-8">
            <h3 className="text-lg font-bold text-ink">Why four approaches matter</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-light">
              Each approach has strengths and blind spots. Semantic analysis catches meaning but misses depth.
              Lexical analysis catches expertise markers but can be fooled by jargon. LLM evaluation catches
              reasoning but has stylistic biases. Cross-encoder scoring catches relevance but may penalize creativity.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-light">
              When all four agree, the score is robust to any single method&apos;s limitations.
              When they disagree, that disagreement isn&apos;t a problem to hide -- it&apos;s information to surface.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW CONFIDENCE AFFECTS HIRING DECISIONS ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Practical Impact</p>
          <h2 className="mt-4 text-2xl font-bold">How confidence affects hiring decisions</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Understanding confidence changes how you should interpret and act on scores.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* High */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="mb-4 rounded-lg bg-brand-green/10 px-3 py-1.5 text-center font-mono text-sm font-bold text-brand-green">
                Technical: 82 &plusmn; 3, 93%
              </div>
              <h3 className="text-lg font-bold text-white">High Confidence: Trust and Act</h3>
              <p className="mt-2 text-sm text-gray-300">
                All four evaluation approaches reached consistent conclusions. Rely on this score for ranking
                and shortlisting. In final rounds, you don&apos;t need to re-validate this dimension.
              </p>
            </div>

            {/* Moderate */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="mb-4 rounded-lg bg-brand-yellow/10 px-3 py-1.5 text-center font-mono text-sm font-bold text-brand-yellow">
                Behavioral: 71 &plusmn; 7, 76%
              </div>
              <h3 className="text-lg font-bold text-white">Moderate: Trust Directionally, Verify</h3>
              <p className="mt-2 text-sm text-gray-300">
                Models mostly agreed with enough disagreement to widen the interval. Use for initial ranking
                but flag this dimension for verification in subsequent rounds.
              </p>
            </div>

            {/* Low */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="mb-4 rounded-lg bg-brand-red/10 px-3 py-1.5 text-center font-mono text-sm font-bold text-brand-red">
                Low Confidence: Rare
              </div>
              <h3 className="text-lg font-bold text-white">Low: Signal for Investigation</h3>
              <p className="mt-2 text-sm text-gray-300">
                Rarely appears because{' '}
                <Link href="/product/adaptive-questioning" className="text-brand-yellow underline underline-offset-2 hover:text-brand-orange">
                  Adaptive Follow-Up
                </Link>{' '}
                resolves most uncertainty during the interview. If it persists, evaluate the competency through
                other means.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFIDENCE IN CANDIDATE COMPARISON ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Confidence in candidate comparison</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Confidence becomes especially important when comparing candidates who score similarly.
          </p>

          <div className="mt-10 space-y-8">
            {/* Scenario 1: Overlapping Intervals */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Scenario 1</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Two candidates, overlapping intervals</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Candidate A</p>
                  <p className="mt-1 font-mono text-sm text-ink">76 &plusmn; 3, 91% confidence</p>
                  <p className="mt-1 text-xs text-ink-muted">True score: almost certainly 73 -- 79</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Candidate B</p>
                  <p className="mt-1 font-mono text-sm text-ink">74 &plusmn; 8, 69% confidence</p>
                  <p className="mt-1 text-xs text-ink-muted">True score: could be anywhere from 66 -- 82</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-light">
                A traditional system ranks A over B. But intervals overlap significantly.
                You cannot confidently say A is better. Look at other signals, or advance both to final rounds.
              </p>
            </div>

            {/* Scenario 2: Non-Overlapping */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Scenario 2</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Two candidates, non-overlapping intervals</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Candidate A</p>
                  <p className="mt-1 font-mono text-sm text-ink">82 &plusmn; 3, 92% confidence</p>
                  <p className="mt-1 text-xs text-ink-muted">Range: 79 -- 85</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Candidate B</p>
                  <p className="mt-1 font-mono text-sm text-ink">71 &plusmn; 4, 88% confidence</p>
                  <p className="mt-1 text-xs text-ink-muted">Range: 67 -- 75</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green">
                Ranges don&apos;t overlap. A demonstrably outperformed B. Trust the ranking.
              </div>
            </div>

            {/* Scenario 3: Higher Score, Lower Confidence */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Scenario 3</p>
              <h3 className="mt-2 text-lg font-bold text-ink">Higher score, lower confidence</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Candidate A</p>
                  <p className="mt-1 font-mono text-sm text-ink">79 &plusmn; 9, 64% confidence</p>
                  <p className="mt-1 text-xs text-ink-muted">True score: anywhere from 70 -- 88</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Candidate B</p>
                  <p className="mt-1 font-mono text-sm text-ink">73 &plusmn; 3, 91% confidence</p>
                  <p className="mt-1 text-xs text-ink-muted">Reliably performs at the 73 level</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-light">
                The naive comparison favors A (79&nbsp;&gt;&nbsp;73). But B is the safer choice -- you know
                what you&apos;re getting. A is a gamble: potentially higher upside, but you&apos;re flying blind.
                If the role requires reliability, B is probably better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIMENSION-LEVEL CONFIDENCE ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Dimension-level confidence</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Confidence applies to each evaluation dimension independently.
            Different dimensions may have very different certainty levels for the same candidate.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Technical */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Technical Dimension</h3>
              <p className="mt-1 font-mono text-sm text-brand-green">Typical confidence: 80 -- 95%</p>
              <p className="mt-3 text-sm text-ink-light">
                Technical questions often produce clearer signals. Candidates either demonstrate understanding or
                they don&apos;t. Concepts are either accurate or inaccurate.
              </p>
              <p className="mt-3 text-xs text-ink-muted">
                Lower confidence when: theoretical answers without practical application, correct but at
                unexpected level, unconventional technical approaches.
              </p>
            </div>

            {/* Behavioral */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Behavioral Dimension</h3>
              <p className="mt-1 font-mono text-sm text-brand-yellow">Typical confidence: 70 -- 88%</p>
              <p className="mt-3 text-sm text-ink-light">
                Behavioral questions inherently involve more ambiguity. The same behavior might be interpreted
                positively or negatively depending on context.
              </p>
              <p className="mt-3 text-xs text-ink-muted">
                Lower confidence when: vague examples, unclear personal contribution, communication style
                makes evaluation difficult, example doesn&apos;t map to the competency.
              </p>
            </div>

            {/* Contextual */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Contextual Dimension</h3>
              <p className="mt-1 font-mono text-sm text-brand-green">Typical confidence: 82 -- 95%</p>
              <p className="mt-3 text-sm text-ink-light">
                Motivation, role fit, and background questions typically produce clear signals.
                Candidates either demonstrate specific knowledge or give generic answers.
              </p>
              <p className="mt-3 text-xs text-ink-muted">
                Lower confidence when: stated motivations seem inconsistent with background,
                mixed signals about goals, knowledge of company but unclear role fit.
              </p>
            </div>
          </div>

          {/* Example composite */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-8">
            <h3 className="text-lg font-bold text-ink">Interpreting dimensions together</h3>
            <p className="mt-2 text-sm text-ink-light">
              A single candidate might show very different confidence levels across dimensions:
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-paper-off">
                    <th className="px-6 py-4 text-left font-semibold text-ink">Dimension</th>
                    <th className="px-6 py-4 text-left font-semibold text-ink">Score</th>
                    <th className="px-6 py-4 text-left font-semibold text-ink">Interval</th>
                    <th className="px-6 py-4 text-left font-semibold text-ink">Confidence</th>
                    <th className="px-6 py-4 text-left font-semibold text-ink">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">Technical</td>
                    <td className="px-6 py-4 font-mono text-ink">84</td>
                    <td className="px-6 py-4 font-mono text-ink-muted">&plusmn; 3</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-semibold text-white">92%</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-ink-light">Trust fully</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">Behavioral</td>
                    <td className="px-6 py-4 font-mono text-ink">71</td>
                    <td className="px-6 py-4 font-mono text-ink-muted">&plusmn; 8</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-brand-orange px-2.5 py-0.5 text-xs font-semibold text-white">73%</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-ink-light">Probe in final round</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">Contextual</td>
                    <td className="px-6 py-4 font-mono text-ink">78</td>
                    <td className="px-6 py-4 font-mono text-ink-muted">&plusmn; 3</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-semibold text-white">90%</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-ink-light">Trust fully</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              Trust the technical and contextual assessments. The behavioral dimension needs investigation --
              either through targeted final-round questions or by weighting behavioral signals lower in your decision.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE MATHEMATICS OF CONFIDENCE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The mathematics of confidence</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            You don&apos;t need to understand the math to use confidence scoring effectively.
            But for those curious, here&apos;s an accessible explanation.
          </p>

          <div className="mt-10 rounded-xl border border-gray-200 bg-paper-off p-8">
            <h3 className="text-lg font-bold text-ink">The core framework</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-light">
              We model each evaluation using three components:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="font-mono text-lg font-bold text-brand-green">T</p>
                <p className="text-sm font-semibold text-ink">Truth</p>
                <p className="mt-1 text-xs text-ink-light">
                  The degree to which evidence supports a positive assessment.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="font-mono text-lg font-bold text-brand-red">F</p>
                <p className="text-sm font-semibold text-ink">Falsity</p>
                <p className="mt-1 text-xs text-ink-light">
                  The degree to which evidence supports a negative assessment.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="font-mono text-lg font-bold text-brand-yellow">R</p>
                <p className="text-sm font-semibold text-ink">Refusal</p>
                <p className="mt-1 text-xs text-ink-light">
                  The degree of uncertainty or indeterminacy in the evidence.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-ink/5 p-4 text-center">
              <p className="font-mono text-lg font-bold text-ink">
                T&sup2; + F&sup2; + R&sup2; = 1
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                These three components trade off against each other.
                Strong evidence in any direction reduces uncertainty.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">From components to scores</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                <strong>The score</strong> derives primarily from T and F. Higher T relative to F produces higher scores.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-light">
                <strong>The confidence level</strong> derives primarily from R. Lower R (less uncertainty)
                produces higher confidence.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-light">
                <strong>The interval</strong> derives from how R distributes across the range of possible scores
                given the T and F values.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Why this framework?</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                Traditional scoring forces every response into &ldquo;good&rdquo; or &ldquo;bad.&rdquo;
                T&nbsp;+&nbsp;F&nbsp;=&nbsp;1, with no room for &ldquo;we&apos;re not sure.&rdquo;
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-light">
                But interview responses aren&apos;t always clearly good or bad. The three-component model
                acknowledges this reality and quantifies the uncertainty for human decision-making.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-paper-off p-6">
            <p className="text-sm font-semibold text-ink">For the technically inclined</p>
            <p className="mt-2 text-sm text-ink-light">
              This framework is based on Type-Reduced q-Rung Orthopair Fuzzy Numbers (TR-q-ROFNs) with q=2.
              Originally developed for complex multi-criteria decision problems where data is sparse and criteria
              can conflict -- exactly the characteristics of hiring evaluation.
            </p>
            <p className="mt-2 text-sm text-ink-light">
              For full technical details, see our{' '}
              <Link href="/science" className="text-brand-yellow underline underline-offset-2 hover:text-brand-orange">
                Science page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT CONFIDENCE SCORING ENABLES ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">What This Enables</p>
          <h2 className="mt-4 text-2xl font-bold">Organizational capabilities that aren&apos;t possible with traditional evaluation</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Faster Decisions With Less Second-Guessing</h3>
              <p className="mt-2 text-sm text-gray-300">
                When confidence is high, you can move quickly. You&apos;re not sitting in calibration meetings
                debating whether the score really reflects the candidate.
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-yellow">
                40% faster shortlist decisions on high-confidence candidates.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Targeted Final Rounds</h3>
              <p className="mt-2 text-sm text-gray-300">
                Instead of re-evaluating everything, focus on what&apos;s uncertain.
                If first-round technical confidence is 93%, skip the technical screen.
                Spend that time on the behavioral questions where confidence was only 74%.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Defensible Hiring Decisions</h3>
              <p className="mt-2 text-sm text-gray-300">
                When someone challenges a decision, point to quantified assessments with explicit certainty levels.
                &ldquo;This candidate scored 72 at 77% confidence -- below our threshold on both criteria.&rdquo;
                That&apos;s defensible. &ldquo;Our interviewers felt they weren&apos;t strong enough&rdquo; is opinion.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Honest Calibration Over Time</h3>
              <p className="mt-2 text-sm text-gray-300">
                If you consistently see low-confidence scores on a dimension, your questions might need improvement.
                If confidence is always high but outcomes don&apos;t match, your rubrics need recalibration.
                You can&apos;t improve what you can&apos;t measure.
              </p>
            </div>
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
              href="/product/adaptive-questioning"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Adaptive Follow-Up</h3>
              <p className="mt-2 text-sm text-ink-light">How we resolve low confidence during interviews.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/product/candidate-reports"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Candidate Reports</h3>
              <p className="mt-2 text-sm text-ink-light">How confidence appears in candidate reports.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/science"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Science</h3>
              <p className="mt-2 text-sm text-ink-light">Full technical details on the scoring framework.</p>
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
        title="See confidence scoring in your reports"
        description="Download a sample report showing exactly how confidence levels appear for each dimension. See what trustworthy hiring data looks like."
        cta="Download Sample Report"
        ctaHref="/resources/sample-report"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
