import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'The Science Behind LayersRank | Research-Backed Hiring Assessment | LayersRank',
  description:
    'LayersRank is built on fuzzy mathematics, multi-model evaluation, and explainable AI. Understand the research foundation that makes confidence-weighted hiring possible.',
  path: '/science',
});

const faqs = [
  {
    q: 'Is LayersRank a black-box AI?',
    a: 'No. Every score traces to specific inputs: which questions contributed, how each model scored each response, where models agreed and disagreed, and what evidence supported each conclusion. The aggregation logic is transparent and auditable.',
  },
  {
    q: 'What is fuzzy logic and why does it matter for hiring?',
    a: 'Fuzzy logic is a mathematical framework for reasoning about partial truths and uncertainty. In hiring, candidate evaluation is rarely binary — someone\'s communication might be excellent in structure but weak in conciseness. Fuzzy mathematics lets us represent this nuance instead of forcing a yes/no answer.',
  },
  {
    q: 'How is this different from other AI hiring tools?',
    a: 'Most AI hiring tools produce a single score from a single model with no explanation. LayersRank uses multiple independent models, surfaces their agreement or disagreement, provides confidence intervals, and makes every score fully explainable.',
  },
  {
    q: 'Can LayersRank predict job performance?',
    a: 'No interview method — human or AI — reliably predicts job performance. The best methods explain 25-30% of variance. LayersRank produces evaluation scores that measure demonstrated competencies. Whether those translate to job success depends on factors beyond any assessment.',
  },
  {
    q: 'What happens when the models disagree?',
    a: 'Disagreement is treated as information, not noise. When models diverge significantly on a response, the system flags the ambiguity and can trigger an adaptive follow-up question to resolve the uncertainty before finalizing the score.',
  },
  {
    q: 'How do you validate your assessments?',
    a: 'We validate through human evaluator agreement calibration, candidate progression tracking (do higher-scored candidates succeed in later rounds?), and customer outcome feedback. We\'re transparent about the limitations of validation against long-term job performance.',
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

export default function SciencePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <PageHero
        eyebrow="Science"
        title="Hiring Decisions Deserve Mathematical Rigor"
        description="LayersRank isn't another black-box AI making unexplainable predictions. It's a structured evaluation system built on fuzzy mathematics, multi-model scoring, and complete transparency. Every score has an evidence trail. Every confidence level has a mathematical foundation."
        primaryCta="Read the Technical Paper"
        primaryCtaHref="/resources"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Mathematical visualization — confidence-weighted scoring" search="data science visualization mathematical model algorithm" />
        </div>
      </section>

      {/* ── WHY HIRING NEEDS BETTER SCIENCE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why hiring needs better science</h2>

          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Most hiring tools treat evaluation as a simple classification problem: good candidate or
              bad candidate, hire or don&apos;t hire, thumbs up or thumbs down.
            </p>
            <p className="font-medium text-ink">
              This framing ignores the fundamental nature of hiring decisions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Sparse Data',
                desc: 'You\'re evaluating someone based on a few hours of interaction, trying to predict years of job performance. The signal-to-noise ratio is terrible.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
              },
              {
                title: 'Subjective Criteria',
                desc: '"Good communication" means different things to different evaluators. "Strong technical skills" depends on who\'s assessing and what they value.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                ),
              },
              {
                title: 'Genuine Uncertainty',
                desc: 'Sometimes you can\'t tell if a candidate is strong or weak — not because you need more data, but because the evidence genuinely points both directions.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Traditional hiring tools hide this complexity. They produce a single score — 74, 3.5
              stars, &ldquo;Recommended&rdquo; — that looks precise but isn&apos;t. The score hides
              disagreement between evaluators. It hides uncertainty in the assessment. It hides the
              difference between &ldquo;definitely good&rdquo; and &ldquo;probably okay, maybe.&rdquo;
            </p>
            <p className="font-medium text-ink">
              LayersRank takes a different approach. We surface the complexity rather than hiding it.
            </p>
            <p>
              When our models agree, we tell you. When they disagree, we tell you that too. When
              we&apos;re confident, the score is tight. When we&apos;re uncertain, the interval is
              wide. You see not just what we think, but how sure we are.
            </p>
            <p>
              This isn&apos;t just more honest. It&apos;s more useful. Knowing when to trust a signal
              is as important as the signal itself.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE THREE PILLARS ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Foundation</p>
          <h2 className="mt-4 text-2xl font-bold">The three pillars</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            LayersRank&apos;s scientific foundation rests on three pillars: fuzzy mathematics for
            handling uncertainty, multi-model evaluation for detecting disagreement, and explainable
            scoring for maintaining transparency.
          </p>
        </div>
      </section>

      {/* ── PILLAR 1: FUZZY MATHEMATICS ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">1</span>
            <h2 className="text-2xl font-bold text-ink">Fuzzy Mathematics</h2>
          </div>

          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Classical logic deals in true or false, yes or no, 0 or 1. But candidate evaluation
              doesn&apos;t work that way.
            </p>
            <p>
              Is this candidate&apos;s communication &ldquo;good&rdquo;? It&apos;s not a binary
              question. Their communication might be excellent in some respects (clear structure,
              confident delivery) and weaker in others (verbose, occasionally tangential). Forcing a
              yes/no answer loses information.
            </p>
            <p>
              Fuzzy logic provides a mathematical framework for reasoning about partial truths and
              uncertainty. Instead of &ldquo;good&rdquo; or &ldquo;bad,&rdquo; we can represent
              &ldquo;73% good with 15% uncertainty.&rdquo;
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Technical Detail</p>
            <h3 className="mt-2 text-lg font-bold text-ink">TR-q-ROFNs</h3>
            <p className="mt-2 text-sm text-ink-light">
              LayersRank uses Type-Reduced q-Rung Orthopair Fuzzy Numbers (TR-q-ROFNs) to model
              evaluation uncertainty. This framework captures not just the score, but the confidence
              in that score and the degree of evaluator disagreement.
            </p>
            <div className="mt-4 overflow-auto rounded-lg bg-ink p-4">
              <pre className="text-sm text-gray-300">
{`Given evaluation evidence E = {e₁, e₂, ..., eₙ}
Each eᵢ produces: ⟨μᵢ, νᵢ⟩ where
  μᵢ = Truth (positive evidence)
  νᵢ = Falsity (negative evidence)

Pythagorean constraint: (μᵢ)^q + (νᵢ)^q ≤ 1

Refusal degree: πᵢ = (1 - (μᵢ)^q - (νᵢ)^q)^(1/q)
  → Captures genuine uncertainty`}
              </pre>
            </div>
            <p className="mt-4 text-sm text-ink-light">
              The &ldquo;orthopair&rdquo; structure separates positive evidence (Truth) from negative
              evidence (Falsity) while explicitly modeling uncertainty (Refusal). This is fundamentally
              different from a single score that conflates these three distinct dimensions.
            </p>
            <p className="mt-3 text-sm">
              <Link href="/science/fuzzy-logic" className="font-medium text-brand-yellow hover:underline">
                See our Fuzzy Logic Framework page for full technical details →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── PILLAR 2: MULTI-MODEL EVALUATION ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">2</span>
            <h2 className="text-2xl font-bold text-ink">Multi-Model Evaluation</h2>
          </div>

          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              A single model produces a single opinion. You have no way to know if that opinion is
              robust or if a different reasonable approach would reach a different conclusion.
            </p>
            <p className="font-medium text-ink">
              LayersRank evaluates every response through multiple independent models.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                model: 'Semantic Similarity',
                desc: 'Does the meaning match strong answers? Converts responses into vector representations (using Sentence-BERT embeddings) and measures distance from reference strong answers.',
                output: 'Similarity score 0–1',
              },
              {
                model: 'Lexical Alignment',
                desc: 'Does the terminology indicate expertise? Analyzes word choice, terminology, and language patterns. Compares against expected vocabulary for strong responses in this domain.',
                output: 'Alignment score 0–1',
              },
              {
                model: 'LLM Reasoning',
                desc: 'Is the logic sound and deep? A large language model evaluates reasoning quality: logical structure, depth of analysis, consideration of alternatives, coherence of argument.',
                output: 'Reasoning score 0–10',
              },
              {
                model: 'Cross-Encoder Relevance',
                desc: 'Does it actually answer the question? Evaluates the question-answer pair together, assessing whether the response actually addresses what was asked.',
                output: 'Relevance score 0–1',
              },
            ].map((item) => (
              <div key={item.model} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <h3 className="text-lg font-bold text-ink">{item.model}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
                <p className="mt-3 rounded-md bg-ink/5 px-3 py-1.5 font-mono text-xs text-ink-muted">
                  Output: {item.output}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
            <h3 className="font-bold text-ink">Convergence vs. Divergence</h3>
            <div className="mt-3 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-brand-green">When all models agree</p>
                <p className="mt-1 text-sm text-ink-light">
                  Convergent evidence. The score is reliable. Different evaluation lenses see the same
                  thing — strong signal that the assessment is accurate.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-orange">When models disagree</p>
                <p className="mt-1 text-sm text-ink-light">
                  Divergent signals. Something about the response is ambiguous — different reasonable
                  evaluation approaches see different things. This disagreement isn&apos;t a problem to
                  hide. It&apos;s information to surface. Our{' '}
                  <Link href="/product/adaptive-questioning" className="text-brand-yellow hover:underline">
                    Adaptive Follow-Up
                  </Link>{' '}
                  system uses disagreement as a trigger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLAR 3: EXPLAINABLE SCORING ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">3</span>
            <h2 className="text-2xl font-bold text-ink">Explainable Scoring</h2>
          </div>

          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Many AI hiring tools are black boxes. They produce a score, but nobody can explain why.
              Not the vendor. Not the recruiter. Not the candidate.
            </p>
            <p>
              This creates legal risk (can you defend a decision you can&apos;t explain?), ethical
              concerns (is the system encoding hidden biases?), and practical problems (how do you
              improve what you can&apos;t understand?).
            </p>
            <p className="font-medium text-ink">
              LayersRank is fully explainable. Every score traces to specific inputs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              'Which questions contributed to each dimension score',
              'How each model scored each response',
              'Where models agreed and disagreed',
              'What evidence supported each conclusion',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-ink">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Example</p>
            <p className="mt-2 text-sm text-ink-light">
              When you see <span className="font-mono font-bold text-ink">&ldquo;Technical: 82, 91% confidence&rdquo;</span> you
              can drill down to exactly why. The technical questions, the candidate&apos;s responses,
              the model evaluations, the aggregation logic — it&apos;s all visible.
            </p>
            <div className="mt-4 rounded-lg bg-ink p-4">
              <pre className="text-sm text-gray-300">
{`Technical Dimension: 82 ± 3    Confidence: 91%
├── Q1 (System Design): 85     Models: ████ agree
├── Q2 (Algorithm):     78     Models: ███░ minor divergence
├── Q3 (Code Review):   84     Models: ████ agree
└── Aggregation: Weighted mean, confidence from R = 0.09`}
              </pre>
            </div>
            <p className="mt-4 text-sm">
              <Link href="/science/explainability" className="font-medium text-brand-yellow hover:underline">
                See our Explainable AI page for how this works in practice →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW EVALUATION ACTUALLY WORKS ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Process</p>
          <h2 className="mt-4 text-2xl font-bold">How evaluation actually works</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Let&apos;s trace through how LayersRank evaluates a single candidate response.
          </p>

          <div className="mt-12 space-y-0">
            {[
              {
                step: '1',
                title: 'Response Capture',
                desc: 'Candidate answers a question. For video responses, we transcribe. For text responses, we capture directly. For MCQs, we record the selection. The raw response becomes the input for evaluation.',
              },
              {
                step: '2',
                title: 'Multi-Model Scoring',
                desc: 'Four models evaluate the response independently: Semantic Similarity (vector distance from reference answers), Lexical Alignment (terminology and vocabulary analysis), LLM Reasoning (logical structure and depth), and Cross-Encoder Relevance (question-answer fit). Each produces its own score.',
              },
              {
                step: '3',
                title: 'Agreement Measurement',
                desc: 'We measure how much the four models agree. If all models score in a tight band, agreement is high. If models diverge significantly, agreement is low. We quantify this as a Refusal Degree (R) using TR-q-ROFN mathematics. R ranges from 0 (perfect agreement) to 1 (complete disagreement).',
              },
              {
                step: '4',
                title: 'Adaptive Follow-Up',
                desc: 'If R exceeds our threshold (default 0.25), the system generates a follow-up question targeting the specific ambiguity. The candidate answers. Models re-evaluate with the additional context. R typically drops as the clarification resolves uncertainty.',
                conditional: true,
              },
              {
                step: '5',
                title: 'Score Calculation',
                desc: 'Individual model scores are aggregated into a composite score using weighted combination. Confidence level derives from R: lower R = higher confidence. The interval derives from the spread of model scores: tighter spread = narrower interval.',
                output: '78 ± 4, 89% confidence',
              },
              {
                step: '6',
                title: 'Dimension Aggregation',
                desc: 'Individual question scores aggregate into dimension scores (Technical, Behavioral, Contextual). Each dimension has its own confidence level. Dimensions aggregate into an overall score using configurable weights.',
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex gap-6">
                {/* timeline line */}
                <div className="flex flex-col items-center">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                    item.conditional ? 'border-brand-orange bg-brand-orange/20' : 'border-brand-yellow bg-brand-yellow/20'
                  }`}>
                    <span className={`text-sm font-bold ${item.conditional ? 'text-brand-orange' : 'text-brand-yellow'}`}>
                      {item.step}
                    </span>
                  </div>
                  {i < 5 && <div className="w-px flex-1 bg-gray-600" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-bold">
                    {item.title}
                    {item.conditional && (
                      <span className="ml-2 rounded-full bg-brand-orange/20 px-2 py-0.5 text-xs text-brand-orange">
                        If triggered
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">{item.desc}</p>
                  {item.output && (
                    <p className="mt-3 inline-block rounded-md bg-white/10 px-3 py-1.5 font-mono text-sm text-brand-yellow">
                      Final output: &ldquo;{item.output}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE RESEARCH FOUNDATION ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The research foundation</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            LayersRank&apos;s methodology draws on established research across multiple fields.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="text-lg font-bold text-ink">Structured Interview Research</h3>
              <p className="mt-3 text-sm text-ink-light">
                The superiority of structured interviews over unstructured interviews is one of the
                most replicated findings in industrial-organizational psychology.
              </p>
              <div className="mt-4 space-y-3 rounded-lg bg-white p-4">
                <div>
                  <p className="text-xs font-semibold text-ink-muted">Schmidt & Hunter (1998, updated 2016)</p>
                  <p className="mt-1 text-sm text-ink-light">
                    Structured interviews: predictive validity of <span className="font-bold text-brand-green">0.51</span> vs.{' '}
                    <span className="font-bold text-brand-orange">0.38</span> for unstructured. Structured interviews explain
                    nearly twice as much variance in job performance.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink-muted">Campion, Palmer & Campion (1997)</p>
                  <p className="mt-1 text-sm text-ink-light">
                    Identified the specific components: standardized questions, defined evaluation
                    criteria, consistent administration. LayersRank implements all three.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="text-lg font-bold text-ink">Fuzzy Decision Theory</h3>
              <p className="mt-3 text-sm text-ink-light">
                Fuzzy set theory, originated by Zadeh (1965), provides mathematical tools for
                reasoning about vague or uncertain information.
              </p>
              <div className="mt-4 space-y-3 rounded-lg bg-white p-4">
                <div>
                  <p className="text-xs font-semibold text-ink-muted">Yager (2017)</p>
                  <p className="mt-1 text-sm text-ink-light">
                    q-Rung Orthopair Fuzzy Sets extend classical fuzzy sets to handle greater
                    uncertainty. The &ldquo;orthopair&rdquo; structure separates positive evidence
                    (Truth) from negative evidence (Falsity) while explicitly modeling uncertainty
                    (Refusal).
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink-muted">Our Implementation</p>
                  <p className="mt-1 text-sm text-ink-light">
                    Type-Reduced q-ROFNs with q=2, following approaches developed for supplier
                    evaluation and multi-criteria decision problems where data is sparse and criteria
                    may conflict.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="text-lg font-bold text-ink">Multi-Model Ensemble Methods</h3>
              <p className="mt-3 text-sm text-ink-light">
                Ensemble methods — using multiple models and aggregating their outputs — consistently
                outperform single models across machine learning applications.
              </p>
              <div className="mt-4 rounded-lg bg-white p-4">
                <p className="text-sm text-ink-light">
                  For evaluation tasks specifically, model disagreement serves as a signal of input
                  ambiguity. When models trained on different objectives disagree, it often indicates
                  the input is genuinely difficult to classify — not that any single model is
                  &ldquo;wrong.&rdquo;
                </p>
                <p className="mt-2 text-sm font-medium text-ink">
                  We use disagreement constructively: as a trigger for clarification rather than
                  something to average away.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="text-lg font-bold text-ink">Explainable AI (XAI)</h3>
              <p className="mt-3 text-sm text-ink-light">
                The field of Explainable AI has developed techniques for making model decisions
                interpretable.
              </p>
              <div className="mt-4 rounded-lg bg-white p-4">
                <p className="text-sm text-ink-light">
                  For LayersRank, explainability isn&apos;t an add-on — it&apos;s architectural. We
                  don&apos;t use opaque neural networks for final scoring. We use interpretable
                  aggregation of interpretable component scores. The complexity is in the components;
                  the aggregation is transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DON'T DO ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What we don&apos;t do</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Scientific rigor also means being clear about limitations and avoiding overclaims.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'We don\'t claim to predict job performance directly',
                desc: 'No interview method — human or AI — reliably predicts job performance. The best methods explain 25-30% of variance. The rest depends on factors no interview can assess: team dynamics, management quality, market conditions, personal circumstances. LayersRank produces evaluation scores, not performance predictions.',
              },
              {
                title: 'We don\'t claim to eliminate bias',
                desc: 'We reduce certain biases by evaluating responses rather than demographics, by standardizing questions and criteria, and by removing human evaluator inconsistency. But biases can exist in training data, question design, and competency selection. We audit for disparate impact and continuously work to address bias sources.',
              },
              {
                title: 'We don\'t claim AI is better than humans',
                desc: 'AI is more consistent than humans. It applies the same criteria every time without fatigue, mood effects, or similarity bias. Whether those criteria are the right criteria is a human judgment. LayersRank amplifies human judgment, not replaces it.',
              },
              {
                title: 'We don\'t claim certainty we don\'t have',
                desc: 'When we\'re uncertain, we say so. Confidence levels, intervals, and explicit flags for low-reliability scores are features, not bugs. False precision is worse than acknowledged uncertainty.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-ink/5">
                  <svg className="h-5 w-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALIDATION AND ONGOING RESEARCH ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Validation</p>
          <h2 className="mt-4 text-2xl font-bold">Validation and ongoing research</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold">Internal Validation</h3>
              <p className="mt-2 text-sm text-gray-300">
                We continuously validate LayersRank assessments against available ground truth.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: 'Human evaluator agreement',
                    desc: 'When LayersRank reports 85% confidence, approximately 85% of human evaluators agree with the assessment. This calibration is tested and adjusted regularly.',
                  },
                  {
                    title: 'Candidate progression',
                    desc: 'Candidates who score higher in LayersRank first rounds are more likely to succeed in subsequent interview rounds. This validates that we\'re measuring something relevant.',
                  },
                  {
                    title: 'Customer feedback',
                    desc: 'Organizations report improved hiring outcomes: reduced attrition, faster ramp-up times, and higher manager satisfaction with new hires.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-gray-600 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-brand-yellow">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold">Limitations of Validation</h3>
              <p className="mt-2 text-sm text-gray-300">
                Full validation against job performance is difficult because:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Performance data is often unavailable or unreliable
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Many factors besides candidate quality affect job outcomes
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Feedback loops are slow (performance emerges over months/years)
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-300">
                We&apos;re transparent about these limitations. Our validation demonstrates that
                LayersRank measures something meaningful and useful. We don&apos;t claim more than the
                evidence supports.
              </p>

              <div className="mt-6 rounded-lg border border-gray-600 bg-white/5 p-4">
                <p className="text-sm font-semibold text-brand-yellow">Academic Publication</p>
                <p className="mt-1 text-sm text-gray-300">
                  We&apos;ve prepared technical documentation of our methodology for academic review.
                  Our approach is grounded in published research and we welcome scrutiny from the
                  research community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE THE DETAILS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Explore the details</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Each aspect of our scientific foundation has its own detailed page.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                href: '/science/fuzzy-logic',
                title: 'Fuzzy Logic Framework',
                desc: 'The mathematics of uncertainty quantification. How TR-q-ROFNs model truth, falsity, and refusal. The Pythagorean constraint. Converting fuzzy numbers to actionable scores.',
                color: 'bg-brand-yellow/10 text-brand-yellow',
              },
              {
                href: '/science/explainable-ai',
                title: 'Explainable AI',
                desc: 'How every score traces to evidence. Audit trails and decision documentation. What explainability means for compliance and candidate feedback.',
                color: 'bg-brand-green/10 text-brand-green',
              },
              {
                href: '/science/bias-mitigation',
                title: 'Bias Mitigation',
                desc: 'What our models see and don\'t see. How pedigree-neutral evaluation works. Ongoing bias auditing and disparate impact analysis.',
                color: 'bg-brand-orange/10 text-brand-orange',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-gray-200 bg-paper-off p-6 transition-shadow hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex rounded-lg px-3 py-1 text-xs font-bold ${item.color}`}>
                  Deep Dive
                </div>
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                  Read more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
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
              { href: '/science/fuzzy-logic', title: 'Fuzzy Logic Framework', desc: 'Mathematical foundation' },
              { href: '/science/explainable-ai', title: 'Explainable AI', desc: 'Transparency and audit trails' },
              { href: '/science/bias-mitigation', title: 'Bias Mitigation', desc: 'Fair evaluation approach' },
              { href: '/product', title: 'Product Overview', desc: 'How the science becomes product' },
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

      {/* ── FINAL CTA ── */}
      <PageCTA
        title="Built on Research, Not Hype"
        description="Download our technical paper or book a demo to see how mathematical rigor translates to better hiring decisions."
        cta="Download Technical Paper"
        ctaHref="/resources"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
        variant="gradient"
      />
    </>
  );
}
