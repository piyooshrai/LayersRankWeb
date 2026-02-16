import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';


export const metadata = makeMetadata({
  title: 'Product Overview | LayersRank Structured Interview Platform',
  description:
    'Transform first-round interviews into confident hiring decisions. See how LayersRank evaluates candidates across technical, behavioral, and contextual dimensions with confidence-weighted scoring.',
  path: '/product',
});

const workflow = [
  {
    number: '01',
    title: 'You Create an Interview for a Role',
    description:
      'Select from our library of 1,000+ vetted questions or build your own. Questions are organized by competency and difficulty. Choose the mix of video responses, text answers, and multiple-choice knowledge checks. A typical first-round interview includes 8\u201312 questions and takes candidates 30\u201345 minutes.',
  },
  {
    number: '02',
    title: 'Candidate Receives a Link',
    description:
      'No scheduling required. Candidates complete the interview on their own time \u2014 evenings, weekends, whenever works for them. They can pause and resume on any device. This async model eliminates scheduling overhead and expands your candidate pool to people who can\u2019t take calls during work hours.',
  },
  {
    number: '03',
    title: 'Multiple AI Models Score Each Response',
    description:
      'We don\u2019t use a single model to produce a single score. We use multiple models \u2014 semantic similarity, lexical analysis, LLM reasoning evaluation, and cross-encoder reranking \u2014 each scoring independently. When all models agree, confidence is high. When they disagree, we know there\u2019s uncertainty.',
  },
  {
    number: '04',
    title: 'High Uncertainty Triggers Adaptive Follow-Up',
    description:
      'Uncertainty usually means ambiguity in the response. Traditional platforms average the disagreeing scores and move on. LayersRank asks a follow-up question: \u201CYou mentioned handling a difficult stakeholder situation. Can you walk through the specific steps?\u201D The candidate answers, models re-score, confidence increases.',
  },
  {
    number: '05',
    title: 'You Receive a Confidence-Weighted Report',
    description:
      'Within 24 hours, you get an overall score with confidence interval, dimension breakdowns for Technical, Behavioral, and Contextual, key strengths, areas to probe, integrity flags, and comparison to other candidates. Designed for 60-second decision-making, not data dumping.',
  },
  {
    number: '06',
    title: 'You Decide With Conviction',
    description:
      'Compare candidates side-by-side. Share reports with hiring managers and stakeholders. When leadership asks \u201Cwhy this candidate?\u201D you have data. When candidates ask for feedback, you have specifics. When you need to defend a decision, you have an audit trail.',
  },
];

const capabilities = [
  {
    id: 'structured-interviews',
    href: '/product/structured-interviews',
    title: 'Structured Interviews',
    description: 'Role-specific question frameworks with video, text, and MCQ. No scheduling required.',
  },
  {
    id: 'confidence-scoring',
    href: '/product/confidence-scoring',
    title: 'Confidence Scoring',
    description: 'Every score includes a confidence level. Know when to trust the signal.',
  },
  {
    id: 'adaptive-followup',
    href: '/product/adaptive-questioning',
    title: 'Adaptive Follow-Up',
    description: 'Uncertainty triggers clarifying questions automatically during the interview.',
  },
  {
    id: 'integrity',
    href: '/product/integrity-detection',
    title: 'Integrity Detection',
    description: 'Track paste events, tab switches, and typing patterns. Know what\u2019s authentic.',
  },
  {
    id: 'reports',
    href: '/product/candidate-reports',
    title: 'Reports',
    description: 'Decision-ready candidate dossiers with scores, confidence bands, and verdict summaries.',
  },
  {
    id: 'question-bank',
    href: '/product/question-bank',
    title: 'Question Bank',
    description: '1,000+ vetted role-specific questions across technical, behavioral, and contextual dimensions.',
  },
  {
    id: 'integrations',
    href: '/product/integrations',
    title: 'Integrations',
    description: 'Connect with your ATS and HRIS. Full API access for custom workflows.',
  },
];

const dimensions = [
  {
    title: 'Technical',
    question: 'Can they do the job?',
    description:
      'Evaluates domain knowledge, problem-solving approach, and technical depth. For engineers: system design explanations, debugging approaches, technical trade-off discussions. For product managers: prioritization frameworks, metrics thinking, technical communication. We don\u2019t just check if answers are \u201Cright.\u201D We evaluate how candidates think through problems, whether they consider edge cases, and how clearly they explain their reasoning.',
    weight: '40%',
  },
  {
    title: 'Behavioral',
    question: 'Can they work with others?',
    description:
      'Technical skills get you hired. Behavioral skills determine whether you succeed. This dimension evaluates communication style, collaboration signals, conflict resolution approaches, and leadership examples. We use structured behavioral questions (STAR format expected) and score on specificity, self-awareness, and relevance. Vague answers about \u201Cworking well with teams\u201D score lower than specific examples with clear outcomes.',
    weight: '35%',
  },
  {
    title: 'Contextual',
    question: 'Do they fit the role?',
    description:
      'This isn\u2019t \u201Cculture fit\u201D \u2014 a vague concept that often encodes bias. Contextual evaluation assesses role motivation, growth trajectory, and realistic expectations. Why do they want this specific role at this specific company? What do they think the job involves? Are their expectations aligned with reality? Candidates who have researched the role and articulate specific reasons for interest score higher than those giving generic answers.',
    weight: '25%',
  },
];

const questionTypes = [
  {
    title: 'Video Responses',
    description:
      'Candidates record themselves answering behavioral and situational questions. Video reveals communication skills, presence, and how people think on their feet.',
    timing: '1\u20133 minutes per question',
    bestFor: 'Behavioral examples, leadership scenarios, communication assessment',
  },
  {
    title: 'Text Responses',
    description:
      'Written answers to technical explanations, process descriptions, or analytical questions. Text reveals clarity of thought and written communication ability.',
    timing: '150\u2013400 words per question',
    bestFor: 'Technical depth, analytical thinking, written communication roles',
  },
  {
    title: 'Multiple Choice',
    description:
      'Knowledge checks and domain expertise validation. Auto-scored with instant results.',
    timing: '30\u201360 seconds per question',
    bestFor: 'Baseline knowledge, terminology familiarity, efficient filtering',
  },
];

const differentiators = [
  {
    title: 'Confidence, not just scores',
    description:
      'Other platforms give you a number: \u201CThis candidate scored 74.\u201D That hides critical information. Is it a confident 74 where all signals agreed? Or a shaky 74 where some models said 85 and others said 60? LayersRank shows both: \u201C74 \u00B1 3, 91% confidence\u201D versus \u201C74 \u00B1 11, 67% confidence.\u201D The first is a clear signal. The second tells you to dig deeper.',
  },
  {
    title: 'Adaptive, not static',
    description:
      'Traditional interviews are fixed. Every candidate gets the same questions regardless of how they answer. LayersRank adapts. When a response is ambiguous, the system asks a clarifying question. When an answer is incomplete, it probes for specifics. It\u2019s not about asking more questions \u2014 it\u2019s about asking the right follow-up when the first answer isn\u2019t clear enough to score fairly.',
  },
  {
    title: 'Transparent, not black box',
    description:
      'Many AI hiring tools face criticism for unexplainable decisions. Candidates don\u2019t know why they were rejected. Recruiters can\u2019t explain how scores were generated. LayersRank is fully transparent. Every score can be traced to specific inputs. Model agreement and disagreement is visible. Audit trails are complete. If you can\u2019t explain why a score happened, you shouldn\u2019t make decisions based on it.',
  },
  {
    title: 'Fair, not biased',
    description:
      'We evaluate what candidates say, not where they went to school or who they worked for. Our scoring models don\u2019t see candidate names, school names, or company names. They see responses. That\u2019s it. A clear, structured answer from a Tier-3 college grad scores the same as an identical answer from an IIT grad. We measure capability, not credentials.',
  },
];

const audiences = [
  {
    title: 'Global Capability Centers',
    description:
      'GCCs hiring hundreds of engineers per quarter across multiple cities need consistency. Different panels in Bangalore and Hyderabad evaluating the same candidate should reach the same conclusion. LayersRank provides that standardization.',
    href: '/solutions/gcc',
  },
  {
    title: 'High-Growth Startups',
    description:
      'Startups scaling from 20 to 100 engineers can\u2019t afford bad hires. One wrong senior engineer can set the roadmap back six months. LayersRank helps move fast without sacrificing quality.',
    href: '/solutions/startups',
  },
  {
    title: 'Enterprise Teams',
    description:
      'Large companies with distributed hiring need to standardize across business units and geographies. LayersRank provides the structure and audit trails enterprise compliance requires.',
    href: '/solutions/enterprise',
  },
  {
    title: 'Recruiting Agencies',
    description:
      'Agencies submitting scored, ranked candidates stand out from competitors. LayersRank reports give clients quantified assessments instead of subjective notes.',
    href: '/solutions/agencies',
  },
];

const integrations = [
  'Workday',
  'Greenhouse',
  'Lever',
  'SAP SuccessFactors',
  'Oracle Taleo',
  'iCIMS',
  'SmartRecruiters',
  'Custom API',
];

const faqs = [
  {
    q: 'How long does a typical LayersRank interview take?',
    a: '30\u201345 minutes for candidates, depending on the question mix. Candidates can pause and resume.',
  },
  {
    q: 'How quickly do I get results?',
    a: 'Standard turnaround is 24 hours. Priority turnaround (same-day) available on Scale and Enterprise plans.',
  },
  {
    q: 'Can I customize the questions?',
    a: 'Yes. Start with our library of 1,000+ vetted questions, then customize or create your own with guided rubric building.',
  },
  {
    q: 'What if a candidate has technical issues?',
    a: 'Interviews auto-save progress. Candidates can resume from any device. We support low-bandwidth mode for areas with poor connectivity.',
  },
  {
    q: 'Is LayersRank suitable for non-technical roles?',
    a: 'Yes. We have question libraries for Product, Design, Sales, Marketing, Operations, and more. The same structured approach applies.',
  },
  {
    q: 'How does pricing work?',
    a: 'Pay per completed interview. No per-seat fees. Starter plans begin at \u20B92,500/interview. Volume discounts available.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LayersRank',
  applicationCategory: 'BusinessApplication',
  description:
    'Structured interview platform with confidence-weighted scoring and adaptive follow-up questions.',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '2500',
    priceValidUntil: '2026-12-31',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ProductPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />

      {/* ───── HERO ───── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Product
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Structured Interviews. Confident Decisions.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            LayersRank replaces inconsistent phone screens and gut-feel evaluations with a
            structured, multi-dimensional assessment system. Every candidate is scored on what
            matters. Every score tells you how much to trust it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange"
            >
              Book a Demo
            </Link>
            <Link
              href="/resources/sample-report"
              className="rounded-lg border border-gray-500 px-6 py-3 font-medium text-white hover:border-white hover:bg-white/5"
            >
              See Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* ───── THE PROBLEM ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">
            The Problem With First-Round Interviews
          </h2>

          <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-ink-light">
            <p>
              Every hiring team knows the pattern. You post a role, applications flood in, and
              suddenly you&apos;re spending 40% of your week on phone screens that go nowhere.
            </p>
            <p>
              The senior engineer you rejected after a rushed 20-minute call? She&apos;s now at your
              competitor, shipping features your team can&apos;t match. The confident candidate who
              charmed everyone in the first round? He&apos;s on a PIP six months later, dragging
              down the entire team.
            </p>
            <p>
              First-round interviews are supposed to filter signal from noise. Instead, they
              introduce more noise. Different interviewers ask different questions. Some reward
              confidence, others reward humility. Some care about pedigree, others claim they
              don&apos;t but unconsciously do.
            </p>
            <p>
              The result is a process that feels rigorous but produces outcomes barely better than
              random selection.
            </p>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="text-sm font-semibold text-ink">Research evidence</p>
              <p className="mt-2 text-sm text-ink-light">
                Schmidt and Hunter&apos;s meta-analysis of hiring methods shows that unstructured
                interviews have a predictive validity of just{' '}
                <strong className="text-ink">0.38</strong> &mdash; explaining only 14% of the
                variance in job performance. Structured interviews score{' '}
                <strong className="text-ink">0.51</strong>, explaining 26% of variance.
              </p>
              <p className="mt-2 text-sm text-ink-light">
                That gap isn&apos;t academic. It&apos;s the difference between building a team that
                ships and a team that struggles.
              </p>
            </div>

            <p className="font-medium text-ink">
              LayersRank exists because we believe first-round interviews should be the
              highest-signal stage of your hiring process, not the noisiest.
            </p>
          </div>
        </div>
      </section>

      {/* ───── WHAT LAYERSRANK ACTUALLY DOES ───── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">What LayersRank Actually Does</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-light">
            LayersRank is a structured interview platform that evaluates candidates across three
            dimensions &mdash; Technical, Behavioral, and Contextual &mdash; using multiple AI
            models that score independently and surface disagreement.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-light">
            When models agree, you get a confident score. When they disagree, the system asks a
            follow-up question during the interview to resolve the uncertainty. By the time you see
            the report, every score is backed by consistent evidence.
          </p>
        </div>
      </section>

      {/* ───── HOW IT WORKS (6 STEPS) ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-ink">
              How It Works in Practice
            </h2>
            <p className="mt-4 text-ink-light">
              From creating an interview to making a hiring decision &mdash; six steps.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {workflow.map((step, i) => (
              <div
                key={step.number}
                className="relative rounded-xl border border-gray-200 bg-paper-off p-8 md:pl-28"
              >
                <span className="mb-4 inline-block font-mono text-4xl font-black text-gray-200 md:absolute md:left-8 md:top-8 md:mb-0">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                  {step.description}
                </p>
                {i === 2 && (
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {['Semantic Similarity', 'Lexical Analysis', 'LLM Reasoning', 'Cross-Encoder Reranking'].map(
                      (model) => (
                        <div
                          key={model}
                          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-xs font-medium text-ink-muted"
                        >
                          {model}
                        </div>
                      )
                    )}
                  </div>
                )}
                {i === 4 && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      'Overall score with confidence interval',
                      'Dimension breakdowns (Tech / Behavioral / Contextual)',
                      'Key strengths & areas to probe',
                      'Integrity flags',
                      'Candidate comparison for same role',
                      'Designed for 60-second decisions',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-ink-light"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
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
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── THREE EVALUATION DIMENSIONS ───── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">The Three Evaluation Dimensions</h2>
            <p className="mt-4 text-gray-400">
              Every candidate is scored across three dimensions. These aren&apos;t arbitrary &mdash;
              they map to the three questions every hiring manager actually cares about.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {dimensions.map((dim) => (
              <div
                key={dim.title}
                className="rounded-xl border border-gray-700 bg-gray-800/50 p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{dim.title}</h3>
                  <span className="rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 font-mono text-sm text-brand-yellow">
                    {dim.weight}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-brand-yellow">{dim.question}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{dim.description}</p>
                <p className="mt-3 text-xs text-gray-500">
                  Default weight: {dim.weight} (configurable per role)
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── QUESTION TYPES ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-ink">Question Types</h2>
            <p className="mt-4 text-ink-light">
              Different signals require different question formats. LayersRank supports three types.
              Most effective interviews combine all three, weighted based on role requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {questionTypes.map((qt) => (
              <div
                key={qt.title}
                className="rounded-xl border border-gray-200 bg-paper-off p-8"
              >
                <h3 className="text-xl font-bold text-ink">{qt.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-light">{qt.description}</p>
                <div className="mt-6 space-y-3 border-t border-gray-200 pt-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Typical length
                    </span>
                    <p className="mt-1 text-sm text-ink">{qt.timing}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Best for
                    </span>
                    <p className="mt-1 text-sm text-ink">{qt.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHAT MAKES LAYERSRANK DIFFERENT ───── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-ink">What Makes LayersRank Different</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-light">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── INTEGRATION WITH YOUR WORKFLOW ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-ink">Integration With Your Workflow</h2>
          <p className="mt-4 text-ink-light">
            LayersRank fits into your existing process. No workflow disruption.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">ATS Integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                Connect with Workday, Greenhouse, Lever, SAP SuccessFactors, and others. Push
                candidates with one click. Pull completed reports back automatically.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {integrations.map((name) => (
                  <span
                    key={name}
                    className="rounded-md border border-gray-200 bg-white px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <Link
                href="/product/integrations"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                View all integrations
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Custom API</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                For teams with internal systems or custom workflows, our API provides full
                programmatic access. Trigger interviews, retrieve reports, and sync candidate data.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">SSO &amp; Security</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                Enterprise plans include SAML and OAuth SSO. Role-based access controls. Audit logs.
                SOC 2 Type II certified. GDPR compliant. India data residency available.
              </p>
              <Link
                href="/security"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                View security details
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHO USES LAYERSRANK ───── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-ink">Who Uses LayersRank</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {audiences.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-light">{a.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── GETTING STARTED ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-ink">Getting Started</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                For Startups
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                Sign up, select questions, send your first interview link. You can be live in 30
                minutes.
              </p>
              <Link
                href="/demo"
                className="mt-6 inline-block rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-ink hover:bg-brand-orange"
              >
                Get Started Free
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                For Enterprises
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                Book a demo with our team. We&apos;ll walk through your specific requirements,
                configure question libraries, and set up ATS integration.
              </p>
              <Link
                href="/demo"
                className="mt-6 inline-block rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-ink hover:bg-brand-orange"
              >
                Book a Demo
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                For Everyone
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                Your first 5 interviews are free. No credit card required. See the results before
                committing.
              </p>
              <Link
                href="/demo"
                className="mt-6 inline-block rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-ink hover:bg-brand-orange"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── PRODUCT FEATURES GRID ───── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Explore Product Features</h2>
          <p className="mt-2 text-ink-light">
            Each capability links to a detailed page with in-depth information.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {capabilities.map((cap) => (
              <Link
                key={cap.id}
                href={cap.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-ink-light">{cap.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="gradient-cta py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-ink">See LayersRank in Action</h2>
          <p className="mt-3 text-ink-light">
            20-minute demo tailored to your hiring needs. Bring your job description &mdash;
            we&apos;ll show you exactly how it works.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/demo"
              className="rounded-lg bg-ink px-8 py-4 font-semibold text-white hover:bg-ink-light"
            >
              Book a Demo
            </Link>
            <Link
              href="/resources/sample-report"
              className="rounded-lg border-2 border-ink/20 px-8 py-4 font-medium text-ink hover:border-ink/40"
            >
              Download Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">Frequently Asked Questions</h2>

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
    </>
  );
}
