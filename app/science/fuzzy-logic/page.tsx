import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'Fuzzy Logic in Recruitment | LayersRank',
  description:
    'How LayersRank uses TR-q-ROFN fuzzy logic to model hiring uncertainty. Multi-criteria decision analysis that separates score from confidence for better recruitment outcomes.',
  path: '/science/fuzzy-logic',
});

export default function FuzzyLogicPage() {
  return (
    <>
      <PageHero
        eyebrow="Science"
        title="The Mathematics of Uncertainty"
        description="Hiring decisions are inherently uncertain. LayersRank uses fuzzy logic to model that uncertainty mathematically, producing scores you can trust and confidence bands that tell you when to dig deeper."
      />

      {/* What is Fuzzy Logic */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What is Fuzzy Logic?</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Traditional hiring systems force every evaluation into a binary outcome: pass or fail,
            hire or reject, strong or weak. But real interview evidence rarely fits into two neat
            categories. A candidate might demonstrate strong system design thinking while leaving
            questions about implementation depth. Another might communicate brilliantly in a
            behavioral round but show uneven performance on a technical case.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            Binary scoring discards the nuance that matters most in borderline decisions. When
            interviewers are forced to collapse rich observations into a single thumbs-up or
            thumbs-down, they lose the very signal that distinguishes a good hire from a risky one.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            Fuzzy logic offers a mathematically rigorous alternative. Instead of requiring certainty,
            it embraces degrees of truth. An answer can be partially strong, partially weak, and
            partially indeterminate, all at the same time. This maps naturally to how experienced
            interviewers actually think: &ldquo;I saw strong evidence on architecture, mixed evidence
            on testing discipline, and I did not get enough signal on collaboration.&rdquo;
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            By representing interview evidence as fuzzy numbers rather than crisp scores, LayersRank
            preserves uncertainty instead of hiding it. The result is scoring that reflects reality,
            not a forced simplification of it.
          </p>
        </div>
      </section>

      {/* TR-q-ROFN Framework */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The TR-q-ROFN Framework</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            LayersRank builds on the T-spherical q-rung orthopair fuzzy number (TR-q-ROFN)
            framework, a generalization of classical fuzzy logic that captures three independent
            dimensions of evaluator judgment.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <span className="text-lg font-bold text-brand-green">T</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Truth (Support)</h3>
              <p className="mt-2 text-sm text-ink-light">
                The degree to which collected evidence supports a positive evaluation. High truth
                means strong, consistent signals that the candidate meets or exceeds role
                requirements on a given dimension.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
                <span className="text-lg font-bold text-brand-red">F</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Falsity (Opposition)</h3>
              <p className="mt-2 text-sm text-ink-light">
                The degree to which collected evidence contradicts a positive evaluation. High
                falsity means clear signals that the candidate falls short on the dimension being
                assessed.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">R</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Refusal (Indeterminacy)</h3>
              <p className="mt-2 text-sm text-ink-light">
                The degree to which the evidence is insufficient to judge either way. High refusal
                means the interview did not surface enough signal for a confident decision on that
                dimension.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="text-lg font-bold text-ink">Pythagorean Constraint and Confidence</h3>
            <p className="mt-2 text-ink-light">
              These three components are bound by a Pythagorean-style constraint that ensures
              mathematical consistency. The confidence index emerges naturally from the gap between
              support, opposition, and the constraint boundary. A large gap means high uncertainty; a
              small gap means high confidence.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 bg-ink px-6 py-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Mathematical Formulation
              </p>
            </div>
            <pre className="overflow-auto p-6 font-mono text-sm leading-relaxed text-ink">
{`Given interview evidence E={e1...en}

Aggregate support μ* = TR(Σ wi · μi)
Aggregate opposition ν* = TR(Σ wi · νi)

Constraint: (μ*)^q + (ν*)^q ≤ 1

Confidence index π = (1 - (μ*)^q - (ν*)^q)^(1/q)

Decision band C = [S - λπ, S + λπ]`}
            </pre>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-ink-muted">
            Where <strong>wi</strong> are dimension weights, <strong>TR</strong> is a truncation
            operator ensuring valid fuzzy numbers, <strong>q</strong> controls the shape of the
            constraint surface, <strong>S</strong> is the aggregated score, and{' '}
            <strong>&lambda;</strong> is a sensitivity parameter that controls how much uncertainty
            widens the decision band.
          </p>
        </div>
      </section>

      {/* Application to Hiring */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            In Practice
          </p>
          <h2 className="mt-4 text-2xl font-bold">Application to Hiring</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            Every interview response in LayersRank is evaluated by multiple scoring models, each
            producing a fuzzy number with truth, falsity, and refusal components. This is not a
            single AI generating a single score. It is an ensemble of evaluators, each contributing
            independent evidence.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Response Mapping</h3>
              <p className="mt-2 text-sm text-gray-300">
                Each candidate response is mapped to fuzzy numbers across multiple evaluation
                dimensions. A video answer about system design produces separate fuzzy assessments
                for technical depth, communication clarity, and structured reasoning.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Multi-Model Scoring</h3>
              <p className="mt-2 text-sm text-gray-300">
                Multiple independent models evaluate the same response. Where models agree,
                confidence is high. Where they diverge, the system flags uncertainty and can trigger
                follow-up questions to resolve ambiguity.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Aggregation and Ranking</h3>
              <p className="mt-2 text-sm text-gray-300">
                Individual fuzzy numbers are aggregated using weighted operators that preserve
                uncertainty through every step. The final output is not just a rank order but a rank
                order with confidence bands, showing where candidates clearly separate and where they
                overlap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Background */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Research Background</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            The TR-q-ROFN framework builds on decades of research in fuzzy set theory, multi-criteria
            decision making (MCDM), and group decision analysis. The foundational work on q-rung
            orthopair fuzzy sets was developed to address limitations in earlier fuzzy models that
            could not capture high degrees of uncertainty without violating mathematical constraints.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            T-spherical fuzzy sets extend this further by adding the refusal dimension, enabling
            models that capture not only agreement and disagreement but also the absence of evidence.
            This three-dimensional representation is particularly well-suited to hiring, where
            incomplete signal is the norm rather than the exception.
          </p>
          <p className="mt-4 max-w-3xl text-ink-light">
            LayersRank adapts these academic frameworks for practical recruitment applications,
            combining them with modern language model evaluation to create a system where mathematical
            rigor meets real-world hiring workflows. Our approach has been informed by peer-reviewed
            research in fuzzy MCDM, TOPSIS-based ranking under uncertainty, and ensemble model
            calibration.
          </p>
          <div className="mt-8 rounded-xl border border-gray-200 bg-paper-off p-6">
            <p className="text-sm font-medium text-ink">Further Reading</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-light">
              <li>
                Yager, R.R. &mdash; Generalized Orthopair Fuzzy Sets (IEEE Transactions on Fuzzy
                Systems)
              </li>
              <li>
                Mahmood, T. et al. &mdash; An Approach Toward Decision-Making and Medical Diagnosis
                Problems Using the Concept of Spherical Fuzzy Sets
              </li>
              <li>
                Garg, H. &mdash; T-Spherical Fuzzy Aggregation Operators and Their Application in
                Multi-Attribute Decision Making
              </li>
            </ul>
          </div>
        </div>
      </section>

      <PageCTA
        title="Download Technical Whitepaper"
        description="Get the full mathematical framework, validation methodology, and implementation details."
        cta="Download Whitepaper"
        ctaHref="/resources/whitepapers"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
