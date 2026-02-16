import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';

export const metadata = makeMetadata({
  title: 'Removing Pedigree Bias in Hiring | LayersRank',
  description:
    'An unbiased interview platform that evaluates capability, not background. Learn how LayersRank reduces resume screening bias, interview bias, and panel inconsistency for fairer candidate evaluation.',
  path: '/science/bias-mitigation',
});

export default function BiasMitigationPage() {
  return (
    <>
      <PageHero
        eyebrow="Science"
        title="Evaluate Capability, Not Background"
        description="Traditional hiring is riddled with biases that penalize non-traditional candidates and reward pedigree over performance. LayersRank is built to reduce these biases at every stage of the evaluation process."
      />

      {/* How Bias Enters Hiring */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How Bias Enters Hiring</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Bias does not enter the hiring process in one place. It compounds across every stage,
            from the first resume screen to the final panel debrief. Understanding where bias lives
            is the first step to reducing it.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10">
                <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Resume Screening Bias</h3>
              <p className="mt-2 text-sm text-ink-light">
                School names, employer brands, and credential signals create a pedigree filter before
                any capability assessment happens. Candidates from prestigious institutions get more
                attention regardless of actual skill. Studies consistently show that identical resumes
                receive different callback rates based on names, school names, and employer
                recognition.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Interview Bias</h3>
              <p className="mt-2 text-sm text-ink-light">
                Accent, communication style, and subjective &ldquo;culture fit&rdquo; assessments
                introduce bias during live interviews. Interviewers unconsciously favor candidates
                who remind them of themselves or who match an unspoken prototype of what a successful
                hire &ldquo;looks like.&rdquo; Rapport-driven interviews amplify this effect.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Panel Bias</h3>
              <p className="mt-2 text-sm text-ink-light">
                Different interviewers apply different standards to the same role. One panelist
                values speed of execution; another values depth of analysis. Personal preferences
                masquerade as professional judgment. Without calibration, panel-level inconsistency
                means a candidate&rsquo;s outcome depends more on who interviews them than on their
                actual capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Mitigate */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How We Mitigate</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            LayersRank addresses bias through structural design choices, not just policy statements.
            Every evaluation pathway is built to reduce the influence of irrelevant factors on
            candidate scoring.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Pedigree-Blind Scoring</h3>
              <p className="mt-2 text-sm text-ink-light">
                Evaluation models score candidate responses without access to resume data, school
                names, previous employers, or demographic information. The scoring system sees only
                what the candidate demonstrates in the assessment, not where they come from.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Standardized Questions</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every candidate for a given role answers the same structured questions, evaluated
                against the same rubric. This eliminates the variability introduced when different
                interviewers ask different questions with different expectations.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Multi-Model Consensus</h3>
              <p className="mt-2 text-sm text-ink-light">
                Multiple independent models evaluate each response. A single biased model cannot
                dominate the outcome. Consensus scoring means the final assessment reflects the
                aggregate judgment of diverse evaluation approaches, not the quirks of any single
                one.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-ink/10">
                <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Confidence Thresholds</h3>
              <p className="mt-2 text-sm text-ink-light">
                When evidence is insufficient for a confident decision, the system flags it rather
                than forcing a premature judgment. This prevents the pattern where borderline
                candidates from non-traditional backgrounds are rejected simply because the
                evaluation did not gather enough signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Our Boundaries
          </p>
          <h2 className="mt-4 text-2xl font-bold">What We Don&apos;t Do</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            Responsible AI in hiring is as much about what you choose not to do as what you build.
            LayersRank draws clear lines around practices that introduce risk of discrimination,
            regardless of their technical feasibility.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
                <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">We don&apos;t infer demographics</h3>
                <p className="mt-2 text-sm text-gray-300">
                  LayersRank does not attempt to detect, infer, or classify candidate demographics
                  from video, audio, text, or any other signal. We do not use name analysis, accent
                  detection, or any proxy that could be used to estimate age, gender, ethnicity, or
                  nationality.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
                <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  We don&apos;t use facial analysis for scoring
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Video responses are evaluated for the content of what candidates say, not how they
                  look. We do not use facial expression analysis, emotion detection, or any visual
                  feature extraction that maps physical appearance to candidate scores. The research
                  on facial analysis in hiring has shown it to be unreliable and discriminatory.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
                <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  We don&apos;t penalize non-native English speakers
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Evaluation criteria focus on the substance and structure of responses, not on
                  accent, fluency speed, or grammatical perfection. For global hiring, particularly
                  in GCC environments, this distinction is critical. Capable professionals should not
                  be scored lower because English is their second or third language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Commitment */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Ongoing Commitment</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Bias mitigation is not a one-time engineering project. It is an ongoing operational
            discipline. LayersRank maintains continuous practices to monitor, detect, and address
            bias as our models, data, and customer base evolve.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Regular Bias Audits</h3>
              <p className="mt-2 text-sm text-ink-light">
                We run systematic bias audits on model outputs, examining score distributions across
                candidate segments. When statistical patterns suggest differential treatment, we
                investigate root causes and adjust the evaluation pipeline before the pattern
                becomes systemic.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Dataset Diversity Monitoring</h3>
              <p className="mt-2 text-sm text-ink-light">
                The training and validation data that informs our models is continuously monitored
                for representation balance. We track coverage across role types, experience levels,
                and geographic contexts to ensure models perform reliably across the full range of
                candidates they evaluate.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Customer Feedback Integration</h3>
              <p className="mt-2 text-sm text-ink-light">
                Our customers are partners in bias detection. When hiring teams flag unexpected
                scoring patterns or candidates report concerns, we treat that feedback as a priority
                investigation signal. Real-world usage surfaces edge cases that internal testing
                cannot fully anticipate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="See our approach in action"
        description="Walk through a real candidate evaluation and see how pedigree-blind scoring changes outcomes."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
