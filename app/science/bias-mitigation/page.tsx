import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { LeadMagnetCTA } from '@/components/lead-magnet-cta';
import Link from 'next/link';

export const metadata = makeMetadata({
  title: 'Bias-Free Hiring AI | Pedigree-Neutral Candidate Assessment | LayersRank',
  description:
    "LayersRank evaluates responses, not resumes. Our models don't see names, photos, colleges, or company brands. Understand how we reduce bias without claiming to eliminate it.",
  path: '/science/bias-mitigation',
});

export default function BiasMitigationPage() {
  return (
    <>
      <PageHero
        eyebrow="Science / Bias Mitigation"
        title="We Evaluate What You Said, Not Who You Are"
        description="Our scoring models don't see your name, your photo, your college, or your previous employers. They see your responses. A clear answer scores well whether it comes from IIT Bombay or a college nobody's heard of."
        primaryCta="Learn How It Works"
        primaryCtaHref="#what-models-dont-see"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      {/* The Honest Framing */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Honest Framing</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Let&rsquo;s start with what we don&rsquo;t claim.
          </p>

          <div className="mt-8 max-w-3xl space-y-4">
            <p className="text-ink-light">
              We don&rsquo;t claim to have &ldquo;solved&rdquo; bias in hiring. Bias is a complex,
              systemic problem that no technology can fully address.
            </p>
            <p className="text-ink-light">
              We don&rsquo;t claim our system is perfectly fair. Fairness itself is contested &mdash;
              different definitions of fairness can be mathematically incompatible.
            </p>
            <p className="text-ink-light">
              We don&rsquo;t claim AI is inherently less biased than humans. AI systems can encode
              and amplify biases from training data, sometimes in ways harder to detect than human
              bias.
            </p>
          </div>

          <div className="mt-8 max-w-3xl rounded-xl border-2 border-brand-green/30 bg-brand-green/5 p-6">
            <p className="font-medium text-ink">What we do claim:</p>
            <p className="mt-3 text-ink-light">
              LayersRank is designed to reduce specific, identifiable sources of bias through
              architectural choices. We&rsquo;re transparent about what we do and don&rsquo;t
              address. We continuously audit for disparate impact. We believe this approach is more
              honest and more useful than claiming bias is &ldquo;eliminated.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* What Our Models Don't See */}
      <section id="what-models-dont-see" className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Architectural Choice
          </p>
          <h2 className="mt-4 text-2xl font-bold">What Our Models Don&rsquo;t See</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            The most direct way to prevent certain biases is to remove the information that could
            trigger them. LayersRank scoring models do NOT have access to:
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Candidate Name</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Names correlate with gender, ethnicity, religion, and national origin. Studies
                  consistently show that identical resumes with different names receive different
                  callback rates. Our models evaluate responses without knowing who wrote them. A
                  response from &ldquo;Priya Sharma&rdquo; is scored identically to the same response
                  from &ldquo;John Smith&rdquo; because the model doesn&rsquo;t see either name.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Candidate Photo</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Physical appearance triggers biases around race, age, gender, attractiveness, and
                  disability status &mdash; none of which predict job performance. We don&rsquo;t
                  collect photos. Our models couldn&rsquo;t use them even if we did.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">College/University Name</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Educational pedigree is the most common proxy filter in Indian hiring. &ldquo;IIT/NIT
                  only&rdquo; is widespread despite weak correlation between college brand and job
                  performance. Our models evaluate responses without knowing where the candidate
                  studied. A strong system design answer scores well regardless of whether it came from
                  IIT Delhi or a Tier-3 college.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Previous Employer Names</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Company brand creates similar proxy filtering. &ldquo;Must have FAANG
                  experience&rdquo; screens for pedigree rather than capability. Our models
                  don&rsquo;t know if you worked at Google or a company nobody&rsquo;s heard of. They
                  evaluate what you say about your experience, not where you had it.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/20">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Demographic Information</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Age, gender, marital status, disability status, and other protected characteristics
                  are not available to scoring models. We collect minimal demographic information, and
                  what we collect is strictly separated from evaluation data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Models Do See */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What Our Models Do See</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg
                  className="h-5 w-5 text-brand-green"
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
              </div>
              <h3 className="text-lg font-bold text-ink">Response Content</h3>
              <p className="mt-2 text-sm text-ink-light">
                The actual text of what candidates write or say. The ideas expressed. The structure
                of arguments. The terminology used. The depth of explanation. This is what should
                determine scores &mdash; what candidates demonstrate they know and can do.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg
                  className="h-5 w-5 text-brand-green"
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
              </div>
              <h3 className="text-lg font-bold text-ink">Response Metadata</h3>
              <p className="mt-2 text-sm text-ink-light">
                How long the response took. Typing patterns. Pauses. Behavioral signals that help
                detect authenticity. These don&rsquo;t correlate with protected characteristics but
                help identify concerning patterns like copy-paste or external assistance.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg
                  className="h-5 w-5 text-brand-green"
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
              </div>
              <h3 className="text-lg font-bold text-ink">Question Context</h3>
              <p className="mt-2 text-sm text-ink-light">
                What question was asked. What a strong answer looks like for that question. How other
                candidates have responded. This enables meaningful evaluation rather than generic
                assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Bias Can Still Enter */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Where Bias Can Still Enter</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Being honest about bias means acknowledging where it can persist despite our
            architectural choices.
          </p>

          <div className="mt-10 space-y-8 max-w-3xl">
            <div>
              <h3 className="text-lg font-bold text-ink">Language and Communication Style</h3>
              <p className="mt-3 text-ink-light">
                Our models evaluate English responses. Candidates whose English is less fluent, who
                use different idioms, or whose communication style differs from the training data may
                score differently.
              </p>
              <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm font-medium text-ink">We mitigate this by:</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Training on diverse response styles, including Indian English
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Weighting substance over polish
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Evaluating clarity of ideas, not accent or grammar perfection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Offering text responses where verbal fluency is less critical
                  </li>
                </ul>
                <p className="mt-3 text-sm text-ink-muted">
                  But we can&rsquo;t claim this bias is eliminated. English-language evaluation
                  inherently advantages native and fluent speakers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">Question Design</h3>
              <p className="mt-3 text-ink-light">
                The questions we ask shape who can answer well. Questions that assume certain
                experiences, cultural references, or educational backgrounds may disadvantage
                candidates without those backgrounds.
              </p>
              <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm font-medium text-ink">We mitigate this by:</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Testing questions for differential performance across groups
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Avoiding culture-specific references
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Focusing on job-relevant scenarios
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Continuously reviewing questions based on outcome data
                  </li>
                </ul>
                <p className="mt-3 text-sm text-ink-muted">
                  But question design always embeds assumptions. We work to make those assumptions
                  explicit and job-relevant.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">Training Data</h3>
              <p className="mt-3 text-ink-light">
                Our models learn from examples of strong and weak responses. If those examples
                reflect biased judgments (e.g., if human raters historically preferred certain
                communication styles), the models may perpetuate those biases.
              </p>
              <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm font-medium text-ink">We mitigate this by:</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Using diverse training examples
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Auditing training data for balance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Validating model outputs against multiple criteria
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Regularly retraining with improved data
                  </li>
                </ul>
                <p className="mt-3 text-sm text-ink-muted">
                  But training data bias is notoriously difficult to fully eliminate.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">What We Choose to Measure</h3>
              <p className="mt-3 text-ink-light">
                Deciding which competencies matter is a human judgment that can embed bias. If we
                measure &ldquo;executive presence&rdquo; or &ldquo;culture fit&rdquo; &mdash; vague
                concepts that often encode preferences for majority-group characteristics &mdash; we
                enable bias regardless of how fairly we measure it.
              </p>
              <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-sm font-medium text-ink">We mitigate this by:</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Focusing on concrete, job-related competencies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Avoiding vague proxy concepts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Making criteria explicit and configurable
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    Encouraging clients to examine what they&rsquo;re actually measuring
                  </li>
                </ul>
                <p className="mt-3 text-sm text-ink-muted">
                  But the choice of what to measure is ultimately yours. We provide the measurement;
                  you define what matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pedigree Problem */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            India-Specific
          </p>
          <h2 className="mt-4 text-2xl font-bold">The Pedigree Problem</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            India&rsquo;s hiring ecosystem has a specific bias problem worth addressing directly:
            pedigree filtering.
          </p>

          <h3 className="mt-10 text-lg font-bold text-white">How Pedigree Filtering Works</h3>
          <p className="mt-4 max-w-3xl text-gray-300">
            Faced with thousands of applicants, hiring teams use educational credentials as a
            shortcut. &ldquo;IIT/NIT/BITS only&rdquo; immediately reduces the pile to something
            manageable. This feels rational. But pedigree filtering has deep problems:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h4 className="font-bold text-brand-yellow">It Measures the Wrong Thing</h4>
              <p className="mt-2 text-sm text-gray-300">
                College admission tests how well a 17-year-old performed on standardized exams in a
                high-pressure environment. They don&rsquo;t test problem-solving in ambiguous
                situations, communication, collaboration, or learning ability. The correlation
                between college prestige and job performance, while positive, is modest and fades
                quickly. By year two of employment, where you went to college barely predicts your
                performance.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h4 className="font-bold text-brand-yellow">It Reflects Socioeconomic Status</h4>
              <p className="mt-2 text-sm text-gray-300">
                Access to quality JEE coaching correlates with family wealth and urban geography.
                &ldquo;Merit&rdquo; in college admissions partly measures the resources a family
                could deploy for test preparation. Filtering for IIT grads partly filters for
                socioeconomic background. This isn&rsquo;t what most companies intend.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h4 className="font-bold text-brand-yellow">It Narrows the Pipeline Dramatically</h4>
              <p className="mt-2 text-sm text-gray-300">
                The IIT system produces ~16,000 engineering graduates annually. India produces 1.5+
                million. Filtering to IITs excludes 99% of potential candidates. Within that 99%,
                some candidates would outperform the average IIT grad in your specific roles.
                You&rsquo;ll never see them.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h4 className="font-bold text-brand-yellow">It Drives Up Costs</h4>
              <p className="mt-2 text-sm text-gray-300">
                IIT grads know they&rsquo;re in demand. They command premium compensation. If two
                candidates can perform equally, but one has the prestigious credential, you&rsquo;ll
                pay 20&ndash;40% more for the brand name.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="text-lg font-bold text-white">
              How LayersRank Addresses Pedigree Bias
            </h3>
            <p className="mt-4 text-gray-300">
              Simple: we evaluate capability, not credentials.
            </p>
            <p className="mt-4 text-gray-300">
              Our models assess how well candidates answer questions about job-relevant scenarios. A
              clear, structured answer about system design scores well regardless of where the
              candidate learned system design.
            </p>
            <p className="mt-4 text-gray-300">
              This doesn&rsquo;t lower the bar. Candidates still need to demonstrate competency. It
              just means demonstrating competency is enough &mdash; you don&rsquo;t also need the
              credential.
            </p>
            <p className="mt-4 text-gray-300">
              Companies using LayersRank report finding strong candidates from colleges they&rsquo;d
              never previously considered. Some report better hiring outcomes from expanded pipelines
              than from pedigree-filtered pools.
            </p>
          </div>
        </div>
      </section>

      {/* Disparate Impact Analysis */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Disparate Impact Analysis</h2>
          <p className="mt-4 max-w-3xl text-ink-light">
            Reducing bias isn&rsquo;t just about architectural choices. It requires ongoing
            measurement.
          </p>

          <div className="mt-10 grid max-w-3xl gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-ink">What We Measure</h3>
              <p className="mt-3 text-ink-light">
                We track score distributions across available demographic dimensions:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  Gender (where available)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  Geographic region
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  College tier
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  Years of experience
                </li>
              </ul>
              <p className="mt-3 text-sm text-ink-light">
                We analyze whether any group systematically scores differently in ways that might
                indicate bias.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink">The Four-Fifths Rule</h3>
              <p className="mt-3 text-ink-light">
                A common legal standard (from US EEOC guidelines, but useful as a benchmark): the
                selection rate for any protected group should be at least 80% of the selection rate
                for the highest-scoring group.
              </p>
              <p className="mt-3 text-sm text-ink-light">
                If 50% of Group A candidates score above your hiring threshold, at least 40% of
                Group B candidates should also score above threshold. If not, there&rsquo;s potential
                adverse impact requiring investigation.
              </p>
              <p className="mt-3 text-sm font-medium text-ink">
                We provide tools to run this analysis on your own candidate data.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl rounded-xl border border-gray-200 bg-paper-off p-6">
            <h3 className="text-lg font-bold text-ink">
              What Disparate Impact Analysis Can and Can&rsquo;t Tell You
            </h3>
            <p className="mt-3 text-ink-light">
              Disparate impact analysis detects when outcomes differ across groups. It doesn&rsquo;t
              tell you whether the difference reflects bias or genuine capability differences, or
              whether the capability differences themselves reflect systemic disadvantages.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              If candidates from lower-tier colleges score lower on average, that could indicate bias
              in our evaluation system, genuine differences in preparation, or historical inequities
              in educational access. The ethical interpretation requires human judgment. We provide
              the data; you determine what it means and how to respond.
            </p>
          </div>
        </div>
      </section>

      {/* What We Recommend */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What We Recommend</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">1</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Start With Awareness</h3>
              <p className="mt-2 text-sm text-ink-light">
                Before using any hiring tool, understand your current baseline. What does your
                candidate pipeline look like? What&rsquo;s your selection rate by college tier,
                gender, region? You can&rsquo;t improve what you don&rsquo;t measure.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">2</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Define Job-Relevant Criteria</h3>
              <p className="mt-2 text-sm text-ink-light">
                Be explicit about what competencies you&rsquo;re measuring and why they matter.
                Vague criteria like &ldquo;culture fit&rdquo; invite bias. Specific criteria like
                &ldquo;can explain technical trade-offs clearly&rdquo; are more defensible and more
                useful.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">3</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Use Structured Assessment</h3>
              <p className="mt-2 text-sm text-ink-light">
                Whether with LayersRank or otherwise, structured interviews reduce bias compared to
                unstructured interviews. Same questions, same criteria, same evaluation rubric for
                every candidate.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">4</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Expand Your Pipeline</h3>
              <p className="mt-2 text-sm text-ink-light">
                If you currently filter on pedigree, consider what you&rsquo;re missing. Try
                evaluating a broader pool and see if capable candidates emerge from unexpected
                places.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">5</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Monitor Outcomes</h3>
              <p className="mt-2 text-sm text-ink-light">
                Track whether your hiring process produces equitable outcomes. If disparate impact
                appears, investigate. Sometimes the process needs adjustment. Sometimes the finding
                reflects broader inequities you can&rsquo;t solve with hiring technology.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <span className="text-lg font-bold text-brand-yellow">6</span>
              </div>
              <h3 className="text-lg font-bold text-ink">Don&rsquo;t Outsource Ethics</h3>
              <p className="mt-2 text-sm text-ink-light">
                No technology &mdash; including LayersRank &mdash; can make ethical decisions for
                you. We provide evaluation tools. You decide what&rsquo;s fair, what&rsquo;s
                acceptable, and what to do about gaps between ideal and reality.
              </p>
            </div>
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
                q: 'Is AI hiring legal in India?',
                a: "Yes, with appropriate safeguards. India doesn't have specific AI hiring regulations (as of our knowledge cutoff), but general employment discrimination principles apply. Using structured, job-relevant evaluation is generally protective.",
              },
              {
                q: 'Can candidates request to know if AI was used in their evaluation?',
                a: 'Emerging regulations in some jurisdictions require disclosure. We recommend transparency regardless — telling candidates that structured assessment includes AI evaluation is good practice.',
              },
              {
                q: 'What if our historical hiring data is biased?',
                a: "We don't use your historical hiring data to train our models. We use our own curated training data. This means we don't inherit and amplify your organization's historical biases. However, you should still audit outcomes to ensure the system works appropriately for your candidate population.",
              },
              {
                q: 'Can we adjust scoring to achieve demographic balance?',
                a: 'We advise against explicit demographic scoring adjustments, which can create legal risk and fairness concerns. Instead, focus on removing biased inputs (like pedigree filters), ensuring job-relevant criteria, and expanding pipelines. If outcomes are still inequitable, investigate root causes rather than adjusting scores.',
              },
              {
                q: 'How do you handle intersectionality?',
                a: "Single-dimension bias analysis misses intersectional effects (e.g., women from Tier-3 colleges might face different patterns than men from Tier-3 colleges or women from Tier-1 colleges). We're developing more sophisticated intersectional analysis tools. Currently, we recommend examining multiple dimensions and being alert to patterns that single-dimension analysis might miss.",
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

      {/* SEO FAQ */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Common Questions
          </p>
          <h2 className="mt-4 text-2xl font-bold text-ink">
            Bias, fairness, and practical hiring
          </h2>
          <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {[
              {
                q: 'How do I remove "background bias" and "socio-economic bias" from technical hiring?',
                a: 'Three mechanisms: (1) Identity-blind evaluation \u2014 models don\u2019t see names, photos, or college names, (2) Response-based scoring \u2014 we evaluate what candidates say, not where they come from, (3) Pedigree-neutral question design \u2014 questions test job-relevant skills, not access to elite education. The result: candidates from different backgrounds compete on demonstrated capability, not proxies for wealth or opportunity.',
              },
              {
                q: 'How do we hit DE&I goals without lowering technical bars?',
                a: 'By measuring the right thing. Traditional hiring filters on pedigree, which correlates with socioeconomic status and access \u2014 not capability. LayersRank filters on demonstrated skill. When you stop filtering by proxy and start filtering by performance, you naturally find qualified candidates from more diverse backgrounds. The bar stays the same; you\u2019re just measuring it correctly.',
              },
              {
                q: 'What about "English proficiency noise" in technical evaluations?',
                a: 'This is a real concern. We mitigate it by: (1) Weighting substance over polish \u2014 clear ideas matter more than perfect grammar, (2) Offering text responses where verbal fluency is less critical, (3) Training on diverse response styles including Indian English. We can\u2019t claim this bias is eliminated, but we work to ensure English fluency doesn\u2019t overwhelm technical signal.',
              },
              {
                q: 'How do you identify "learning velocity" or potential, not just current skills?',
                a: 'Our behavioral dimension assesses learning orientation: how candidates talk about acquiring new skills, how they respond to feedback, how they approach unfamiliar problems. Combined with technical fundamentals, this gives signal on trajectory \u2014 not just current state. This is especially valuable for campus hiring where experience is limited.',
              },
            ].map((faq) => (
              <details key={faq.q} className="group px-6 py-6">
                <summary className="flex cursor-pointer items-center justify-between text-[15px] font-semibold text-ink">
                  {faq.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-light">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-paper py-16">
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
              href="/science/explainability"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Explainable AI &rarr;
            </Link>
            <Link
              href="/solutions/campus-hiring"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              Campus Hiring &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lead Magnet CTA ── */}
      <LeadMagnetCTA type="bias" />

      {/* Final CTA */}
      <PageCTA
        title="Evaluation Based on What Candidates Can Do"
        description="See how pedigree-neutral assessment works in practice. Book a demo and we'll show you exactly what our models see — and don't see."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Download Bias Mitigation Whitepaper"
        secondaryCtaHref="/resources/whitepapers"
      />
    </>
  );
}
