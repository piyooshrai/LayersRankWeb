import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata = makeMetadata({
  title: 'Explainable AI in Hiring | LayersRank',
  description:
    'Transparent hiring algorithms and auditable interview scoring. Every LayersRank decision can be traced from final recommendation back to raw evidence.',
  path: '/science/explainability',
});

export default function ExplainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Science"
        title="No Black Boxes"
        description="Every LayersRank score can be explained, traced, and audited."
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Transparent AI decision audit trail" search="explainable ai transparency audit" />
        </div>
      </section>

      {/* What Explainability Means */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What Explainability Means</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            In hiring, explainability is not a feature checkbox. It is the foundation of trust.
            When a recruiter shares a candidate recommendation with a hiring manager, and when a
            hiring manager defends a decision to leadership, there must be a clear, auditable path
            from the final score to the evidence that produced it.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Score-to-Input Traceability</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every final score links directly to the inputs that produced it. Click any dimension
                score to see the candidate responses, model evaluations, and evidence quality
                indicators that contributed to the number.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Model Agreement Visibility</h3>
              <p className="mt-2 text-sm text-ink-light">
                See where multiple evaluation models agree and where they diverge. High agreement
                produces high confidence. Divergence is flagged visually so decision-makers know
                exactly where uncertainty lives.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Decision Audit Trails</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every decision is logged with timestamps, model versions, dimension weights, and
                aggregation logic. If a hiring decision is questioned months later, the full trail
                is available for review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Layer Evidence Stack */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The 4-Layer Evidence Stack</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            LayersRank organizes hiring evidence into four distinct layers, from raw data to final
            recommendation. Each layer is independently inspectable, so reviewers can audit at
            whatever depth the situation requires.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">Raw Response Data</h3>
                <p className="mt-2 text-sm text-ink-light">
                  The original candidate responses: video recordings, text answers, and
                  multiple-choice selections. Nothing is summarized away. The raw data is always
                  available for re-evaluation if needed. This is the immutable ground truth of the
                  assessment.
                </p>
              </div>
            </div>

            <div className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                <span className="text-lg font-bold text-brand-orange">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">Model-Level Scores</h3>
                <p className="mt-2 text-sm text-ink-light">
                  Each evaluation model produces its own independent assessment with truth, falsity,
                  and refusal components. These per-model outputs are visible individually, so
                  reviewers can see exactly what each model detected and where models interpreted the
                  same evidence differently.
                </p>
              </div>
            </div>

            <div className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                <span className="text-lg font-bold text-brand-green">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">Confidence Aggregation</h3>
                <p className="mt-2 text-sm text-ink-light">
                  Model-level scores are combined using weighted fuzzy aggregation operators. The
                  output includes both the aggregate score and a confidence index that reflects how
                  much evidence supports the conclusion. Confidence bands show the range of
                  plausible scores given the available evidence.
                </p>
              </div>
            </div>

            <div className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink/10">
                <span className="text-lg font-bold text-ink">4</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink">Final Recommendation with Evidence</h3>
                <p className="mt-2 text-sm text-ink-light">
                  The top-level output is a recommendation backed by a complete evidence chain.
                  Recruiters and hiring managers see the score, confidence band, dimension breakdown,
                  model agreement indicators, and links to the underlying responses. Every element is
                  clickable and auditable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Compliance */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Compliance
          </p>
          <h2 className="mt-4 text-2xl font-bold">Built for Regulatory Scrutiny</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            Hiring technology is under increasing regulatory scrutiny worldwide. Explainability is
            not optional. It is a requirement for organizations that take fairness and compliance
            seriously.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Audit-Ready Reports</h3>
              <p className="mt-2 text-sm text-gray-300">
                Generate comprehensive audit reports at any time. Each report includes the full
                decision trail for every candidate, including scores, confidence levels, model
                versions, and the raw evidence that drove each assessment. Reports are structured
                for third-party review.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">GDPR Right to Explanation</h3>
              <p className="mt-2 text-sm text-gray-300">
                Under GDPR, candidates have the right to understand how automated decisions affect
                them. LayersRank produces human-readable explanations for every score, mapping
                directly to the evidence collected during the interview process. No opaque AI
                outputs.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">EEOC Defensibility</h3>
              <p className="mt-2 text-sm text-gray-300">
                Every evaluation criterion is documented, every weight is justified, and every
                decision is traceable. If an adverse impact claim arises, your organization can
                demonstrate that decisions were based on job-relevant, consistently applied criteria
                with full documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="See an auditable report"
        description="Walk through a real candidate evaluation with full evidence trails and confidence breakdowns."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Download Sample Report"
        secondaryCtaHref="/resources/sample-report"
      />
    </>
  );
}
