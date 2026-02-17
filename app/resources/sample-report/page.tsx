import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';

export const metadata = makeMetadata({
  title:
    'Sample Interview Report | See LayersRank Candidate Assessment | LayersRank',
  description:
    'See exactly what you get with LayersRank. Download a sample candidate report showing confidence-weighted scores, behavioral analysis, and actionable recommendations.',
  path: '/resources/sample-report',
});

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const dimensions = [
  { label: 'Technical', score: 82, interval: 3, confidence: 91, color: 'bg-brand-green' },
  { label: 'Behavioral', score: 75, interval: 5, confidence: 84, color: 'bg-brand-yellow' },
  { label: 'Contextual', score: 77, interval: 4, confidence: 88, color: 'bg-brand-yellow' },
];

const strengths = [
  'Exceptional system design thinking with unprompted consideration of failure modes',
  'Clear, structured communication style',
  'Strong examples of cross-functional collaboration',
];

const concerns = [
  'Limited examples of managing up to senior leadership',
  'Mentioned "sometimes frustrated" with ambiguous requirements \u2014 explore further',
];

const technicalQuestions = [
  {
    num: 'Q1',
    title: 'System Design',
    score: 85,
    confidence: 94,
    question:
      '\u201CWalk through how you\u2019d design a notification service handling 10 million daily users. Consider delivery guarantees, scale, and failure scenarios.\u201D',
    summary:
      'Candidate proposed tiered architecture with separate ingestion, processing, and delivery layers. Discussed WebSocket for real-time vs. batch for email. Addressed failure modes with dead-letter queues and retry logic. Provided quantified throughput estimates.',
    evaluation: [
      ['Semantic alignment with strong responses', '87%'],
      ['Logical structure', 'Strong'],
      ['Unprompted failure consideration', 'Yes'],
      ['Quantified reasoning', 'Yes'],
    ],
    feedback:
      'Excellent response demonstrating practical system design experience. Candidate considered scale, reliability, and failure modes without prompting. Could have gone deeper on consistency guarantees.',
  },
  {
    num: 'Q2',
    title: 'Debugging Methodology',
    score: 81,
    confidence: 89,
    question:
      '\u201CYou get a 3am page for increased API latency. Walk through your first 30 minutes of investigation.\u201D',
    summary:
      'Candidate described systematic approach: check monitoring dashboards, identify affected endpoints, review recent deployments, check database connections, examine error rates. Mentioned specific tools (Datadog, PagerDuty).',
    evaluation: [
      ['Systematic approach', 'Yes'],
      ['Tool familiarity', 'Strong'],
      ['Prioritization logic', 'Clear'],
      ['Communication during incident', 'Mentioned'],
    ],
    feedback:
      'Good operational maturity. Systematic approach with clear prioritization. Would benefit from more detail on stakeholder communication during incidents.',
  },
  {
    num: 'Q3',
    title: 'Technical Trade-offs',
    score: 79,
    confidence: 88,
    question:
      '\u201CWhen would you choose eventual consistency over strong consistency? Give a specific example.\u201D',
    summary:
      'Candidate explained CAP theorem trade-offs, gave example of social media feed where eventual consistency is acceptable vs. payment processing where strong consistency is required. Discussed user experience implications.',
    evaluation: [
      ['Conceptual understanding', 'Strong'],
      ['Practical application', 'Good'],
      ['Trade-off articulation', 'Clear'],
    ],
    feedback:
      'Solid understanding of consistency trade-offs with practical examples. Response was comprehensive but slightly textbook \u2014 probe for more nuanced real-world scenarios in final round.',
  },
  {
    num: 'Q4',
    title: 'Code Review',
    score: 83,
    confidence: 93,
    question:
      '\u201CHow do you approach giving feedback on a junior engineer\u2019s pull request that has significant issues?\u201D',
    summary:
      'Candidate emphasized starting with positives, being specific about issues, explaining the \u201Cwhy\u201D behind suggestions, offering to pair on fixes. Mentioned checking if issues are patterns vs. one-offs.',
    evaluation: [
      ['Constructive approach', 'Yes'],
      ['Specific and actionable', 'Yes'],
      ['Teaching orientation', 'Strong'],
      ['Empathy demonstrated', 'Yes'],
    ],
    feedback:
      'Excellent approach to code review feedback. Demonstrates mentorship capability and collaborative mindset.',
  },
];

const behavioralQuestions = [
  {
    num: 'Q5',
    title: 'Collaboration Example',
    score: 77,
    confidence: 86,
    question:
      '\u201CTell me about a time you worked with a product manager who had different priorities than your engineering team.\u201D',
    summary:
      'Candidate described situation where PM wanted quick feature release but engineering had concerns about technical debt. Explained how they quantified the debt cost, proposed phased approach, and found compromise.',
    evaluation: [
      ['Specific example', 'Yes'],
      ['Multiple perspectives considered', 'Yes'],
      ['Resolution described', 'Yes'],
      ['Own contribution clear', 'Mostly'],
    ],
    feedback:
      'Good example of cross-functional navigation. Would benefit from more detail on how the compromise was reached and what candidate specifically did vs. the team.',
  },
  {
    num: 'Q6',
    title: 'Receiving Feedback',
    score: 71,
    confidence: 81,
    question:
      '\u201CTell me about a time you received critical feedback on your technical approach. How did you respond?\u201D',
    summary:
      'Candidate described situation where senior engineer disagreed with their database choice. Initially defensive but \u201Ctook a day to think about it\u201D and realized the feedback was valid. Changed approach.',
    evaluation: [
      ['Honest reflection', 'Yes'],
      ['Growth demonstrated', 'Yes'],
      ['Initial defensiveness acknowledged', 'Yes'],
      ['Learning articulated', 'Somewhat'],
    ],
    feedback:
      'Honest response showing self-awareness. The initial defensiveness is common but worth probing \u2014 does this still happen? What triggers it?',
    adaptiveFollowUp: {
      question:
        '\u201CYou mentioned initially feeling defensive. What helps you move past that reaction now?\u201D',
      response:
        '\u201CI\u2019ve learned to ask for time to process before responding. If I feel defensive, that\u2019s usually a signal the feedback has merit and I need to sit with it. I also try to separate the feedback from the person giving it.\u201D',
      note: 'Strong self-awareness and developed coping mechanism. Confidence increased from 74% to 81%.',
    },
  },
  {
    num: 'Q7',
    title: 'Communication Under Pressure',
    score: 76,
    confidence: 85,
    question:
      '\u201CDescribe a situation where you had to communicate a technical problem to non-technical stakeholders.\u201D',
    summary:
      'Candidate described explaining a security vulnerability to executive team. Used analogy of \u201Cleaving the back door unlocked\u201D rather than technical jargon. Focused on business impact and remediation timeline.',
    evaluation: [
      ['Audience awareness', 'Strong'],
      ['Analogy usage', 'Effective'],
      ['Impact communication', 'Clear'],
      ['Jargon avoidance', 'Yes'],
    ],
    feedback:
      'Good communication instincts. Effective use of analogy and focus on business impact rather than technical details.',
  },
];

const contextualQuestions = [
  {
    num: 'Q8',
    title: 'Role Understanding',
    score: 79,
    confidence: 90,
    question:
      '\u201CWhat do you think will be the biggest challenges in this Senior Backend Engineer role?\u201D',
    summary:
      'Candidate identified scale challenges (moving from thousands to millions of users), team dynamics (joining established team with existing patterns), and technical debt (balancing new features vs. maintenance).',
    evaluation: [
      ['Research demonstrated', 'Yes'],
      ['Realistic expectations', 'Yes'],
      ['Self-awareness', 'Good'],
      ['Specific to role', 'Yes'],
    ],
    feedback:
      'Good understanding of role challenges. Shows candidate has thought about what they\u2019re signing up for.',
  },
  {
    num: 'Q9',
    title: 'Motivation',
    score: 75,
    confidence: 86,
    question:
      '\u201CWhat specifically attracted you to this role versus other opportunities you\u2019re considering?\u201D',
    summary:
      'Candidate mentioned interest in the domain (fintech), team reputation, and opportunity to work at scale. Also mentioned compensation and remote flexibility.',
    evaluation: [
      ['Specific reasons', 'Yes'],
      ['Genuine interest signals', 'Moderate'],
      ['Research on company', 'Some'],
      ['Concerning signals', 'None'],
    ],
    feedback:
      'Reasonable motivation with a mix of intrinsic and extrinsic factors. Not the most passionate response, but no red flags.',
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
      {children}
    </p>
  );
}

function scoreColor(score: number) {
  if (score >= 80) return 'text-brand-green';
  if (score >= 70) return 'text-brand-yellow';
  return 'text-brand-orange';
}

function barColor(score: number) {
  if (score >= 80) return 'bg-brand-green';
  if (score >= 70) return 'bg-brand-yellow';
  return 'bg-brand-orange';
}

function QuestionCard({
  q,
}: {
  q: (typeof technicalQuestions)[number] & {
    adaptiveFollowUp?: {
      question: string;
      response: string;
      note: string;
    };
  };
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-6 py-4">
        <h5 className="font-bold text-ink">
          {q.num}: {q.title}
        </h5>
        <div className="flex items-center gap-3 text-sm">
          <span className={`font-bold ${scoreColor(q.score)}`}>Score: {q.score}</span>
          <span className="text-ink-muted">{q.confidence}% confidence</span>
        </div>
      </div>

      <div className="space-y-4 px-6 py-5">
        {/* Question */}
        <p className="text-sm italic text-ink-muted">{q.question}</p>

        {/* Response summary */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Response Summary
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-light">{q.summary}</p>
        </div>

        {/* Evaluation */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Evaluation
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {q.evaluation.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg bg-paper-off px-3 py-2 text-sm"
              >
                <span className="text-ink-muted">{label}</span>
                <span className="font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div className="rounded-lg border-l-4 border-brand-yellow bg-brand-yellow/5 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
            Feedback
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-light">{q.feedback}</p>
        </div>

        {/* Adaptive follow-up */}
        {q.adaptiveFollowUp && (
          <div className="rounded-lg border-2 border-dashed border-brand-yellow/40 bg-brand-yellow/5 p-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Adaptive Follow-Up Triggered
            </p>
            <p className="mt-2 text-sm italic text-ink-muted">
              {q.adaptiveFollowUp.question}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-light">
              {q.adaptiveFollowUp.response}
            </p>
            <p className="mt-2 text-xs font-medium text-brand-green">
              {q.adaptiveFollowUp.note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function SampleReportPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Resources / Sample Report"
        title="This Is What You Get for Every Candidate"
        description="No black boxes. No vague recommendations. Every LayersRank assessment produces a detailed report with confidence-weighted scores, dimension breakdowns, and clear hiring signals. See exactly what our reports look like."
        primaryCta="Download Full Sample Report (PDF)"
        primaryCtaHref="#download"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      {/* ── WHAT'S IN A REPORT ────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>What&rsquo;s in a LayersRank Report</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Every assessment generates a comprehensive report
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Executive Summary',
                items: [
                  'Overall score with confidence interval',
                  'Hiring recommendation (Strong Hire / Hire / Maybe / No Hire)',
                  'Risk assessment (Low / Medium / High)',
                  'Key strengths and concerns in 2\u20133 sentences',
                ],
              },
              {
                title: 'Dimension Scores',
                items: [
                  'Technical: System design, debugging, depth, trade-offs',
                  'Behavioral: Communication, collaboration, feedback response',
                  'Contextual: Role understanding, motivation, trajectory',
                  'Each with score (0\u2013100), confidence %, and interval (\u00B1)',
                ],
              },
              {
                title: 'Question-by-Question Breakdown',
                items: [
                  "Candidate\u2019s actual response (text or transcript)",
                  'Individual question score',
                  'Model agreement level',
                  'Specific feedback on response quality',
                ],
              },
              {
                title: 'Behavioral Signals',
                items: [
                  'Response timing patterns',
                  'Authenticity indicators',
                  'Engagement metrics',
                  'Any flags or concerns',
                ],
              },
              {
                title: 'Comparison Context',
                items: [
                  'How this candidate compares to others for this role',
                  'Percentile ranking where available',
                ],
              },
              {
                title: 'Actionable Recommendations',
                items: [
                  'Clear next steps for hiring team',
                  'Specific areas to probe in final rounds',
                  'Reference check focus areas',
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-bold text-ink">{card.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-light">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE REPORT ─────────────────────────────────────── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Sample Report</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Priya Sharma &mdash; Senior Backend Engineer
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Assessment Date: January 15, 2025 &middot; Report Generated: January 16,
            2025
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* ─── Report Header ─── */}
            <div className="border-b border-gray-200 bg-ink p-6 text-white md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                    Candidate Report
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold">Priya Sharma</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Senior Backend Engineer &middot; Requisition #7294
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Assessment completed January 15, 2025
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-4 py-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                    <span className="text-sm font-bold text-brand-green">Hire</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-4xl font-extrabold text-brand-yellow">
                      78 <span className="text-lg font-bold text-gray-400">&plusmn; 4</span>
                    </p>
                    <p className="text-xs text-gray-400">Overall Score /100</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-lg font-bold text-white">87%</p>
                    <p className="text-xs text-gray-400">Overall Confidence</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-brand-green">Risk: Low</p>
                  </div>
                </div>
              </div>

              {/* Executive summary */}
              <div className="mt-6 rounded-lg bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                  Summary
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">
                  Strong technical candidate with demonstrated system design capability
                  and clear communication. Solid behavioral examples showing
                  collaboration experience. Minor concern around stakeholder management
                  at scale &mdash; probe in final round. Recommend advancing to
                  technical deep-dive.
                </p>
              </div>
            </div>

            {/* ─── Dimension Scores ─── */}
            <div className="border-b border-gray-200 p-6 md:p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Dimension Scores
              </h4>
              <div className="mt-6 space-y-5">
                {dimensions.map((dim) => (
                  <div key={dim.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-ink">{dim.label}</span>
                      <span className="text-ink-muted">
                        {dim.score} &plusmn; {dim.interval} &middot;{' '}
                        <span className={`font-medium ${scoreColor(dim.confidence)}`}>
                          {dim.confidence}% confidence
                        </span>
                      </span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${dim.color}`}
                        style={{ width: `${dim.score}%` }}
                      />
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-50">
                      <div
                        className="h-full rounded-full bg-ink/20"
                        style={{ width: `${dim.confidence}%` }}
                      />
                    </div>
                    <p className="mt-1 text-right text-xs text-ink-muted">
                      confidence {dim.confidence}%
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Strengths & Concerns ─── */}
            <div className="grid border-b border-gray-200 md:grid-cols-2">
              <div className="border-b border-gray-200 p-6 md:border-b-0 md:border-r md:p-8">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Key Strengths
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-ink-light">
                  {strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  Areas to Probe
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-ink-light">
                  {concerns.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ─── Report footer (inside card) ─── */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-paper-off px-6 py-4 md:px-8">
              <p className="text-xs text-ink-muted">
                Generated by LayersRank &middot; Report ID: LR-2025-SBE-004721
              </p>
              <p className="text-xs text-ink-muted">
                Confidential &middot; For authorized reviewers only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL DIMENSION ───────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Technical Dimension (82 &plusmn; 3)</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Question-by-question breakdown
          </h2>
          <div className="mt-10 space-y-6">
            {technicalQuestions.map((q) => (
              <QuestionCard key={q.num} q={q} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BEHAVIORAL DIMENSION ──────────────────────────────── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Behavioral Dimension (75 &plusmn; 5)</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Collaboration, feedback, and communication
          </h2>
          <div className="mt-10 space-y-6">
            {behavioralQuestions.map((q) => (
              <QuestionCard key={q.num} q={q} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTUAL DIMENSION ──────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Contextual Dimension (77 &plusmn; 4)</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Role understanding and motivation
          </h2>
          <div className="mt-10 space-y-6">
            {contextualQuestions.map((q) => (
              <QuestionCard key={q.num} q={q} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BEHAVIORAL SIGNALS ────────────────────────────────── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
            Behavioral Signals
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Authenticity and engagement metrics
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Authenticity */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-yellow">
                Response Authenticity
              </h3>
              <div className="mt-4 space-y-3">
                {[
                  ['Copy/Paste Events', '0'],
                  ['Tab Switches', '2 (within normal range)'],
                  ['Typing Pattern', 'Natural, consistent speed'],
                  ['Pause Patterns', 'Thoughtful pauses before complex questions'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-brand-green/10 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                <span className="text-sm font-bold text-brand-green">
                  Overall Authenticity: HIGH CONFIDENCE
                </span>
              </div>
            </div>

            {/* Engagement */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-yellow">
                Engagement Metrics
              </h3>
              <div className="mt-4 space-y-3">
                {[
                  ['Total Assessment Time', '52 minutes'],
                  ['Average Response Time', '4.2 min per question'],
                  ['Longest Response', 'Q1 (System Design) \u2014 7.1 min'],
                  ['Shortest Response', 'Q9 (Motivation) \u2014 2.1 min'],
                  ['Completion', '100% (all questions answered)'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison context */}
          <div className="mt-10 rounded-xl border border-gray-700 bg-white/5 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-yellow">
              Comparison Context
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              This candidate vs. role benchmark (n=47 candidates)
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Overall Score', value: 78, percentile: '71st' },
                { label: 'Technical', value: 82, percentile: '78th' },
                { label: 'Behavioral', value: 75, percentile: '62nd' },
                { label: 'Contextual', value: 77, percentile: '65th' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-white/5 p-4 text-center">
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="mt-1 text-2xl font-extrabold text-white">{item.value}</p>
                  <p className={`text-sm font-medium ${scoreColor(item.value)}`}>
                    {item.percentile} percentile
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Flags */}
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
            <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Flags: None
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED NEXT STEPS ────────────────────────────── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Recommended Next Steps</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            What to do with this candidate
          </h2>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-sm font-bold text-brand-green">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">
                  Advance to final round
                </h3>
                <p className="mt-1 text-sm text-ink-light">
                  Technical deep-dive with senior engineer
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-sm font-bold text-brand-yellow">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Probe areas</h3>
                <ul className="mt-1 space-y-1 text-sm text-ink-light">
                  <li>&bull; Stakeholder management at scale (limited examples)</li>
                  <li>
                    &bull; Defensive reaction to feedback (has coping mechanism, but
                    verify)
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-sm font-bold text-brand-yellow">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Reference check focus</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Collaboration patterns, how they handle ambiguity
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/10 text-sm font-bold text-ink-muted">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Timeline</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Candidate mentioned 2-week notice period; can start quickly
                </p>
              </div>
            </div>
          </div>

          {/* Report metadata */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Report Metadata
            </h4>
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              {[
                ['Assessment ID', 'LR-2025-SBE-004721'],
                ['Role Template', 'Senior Backend Engineer v2.3'],
                ['Questions Administered', '9 (3 technical, 4 behavioral, 2 contextual)'],
                ['Evaluation Models', 'Semantic v4.1, Reasoning v3.2, Relevance v2.8'],
                ['Processing Time', '3 minutes 42 seconds'],
                ['Report Generated', '2025-01-16 09:14:32 IST'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-start gap-2">
                  <span className="font-medium text-ink-muted">{label}:</span>
                  <span className="text-ink-light">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES THIS REPORT DIFFERENT ──────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>What Makes This Report Different</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            More than a score
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Confidence Levels',
                body: 'Traditional reports say \u201CScore: 78.\u201D LayersRank says \u201CScore: 78 \u00B1 4, 87% confidence.\u201D You know when to trust the signal and when to probe further.',
              },
              {
                title: 'Adaptive Follow-Up',
                body: 'Notice Q6 triggered a follow-up question when initial confidence was low. The system detected ambiguity and probed it, improving assessment quality.',
              },
              {
                title: 'Specific Feedback',
                body: 'Not just scores \u2014 specific feedback on each response that you can use in final rounds or share with candidates.',
              },
              {
                title: 'Behavioral Authenticity',
                body: 'We track signals that indicate genuine responses vs. concerning patterns. This candidate showed high authenticity.',
              },
              {
                title: 'Actionable Recommendations',
                body: 'Clear next steps: what to probe, what to verify, how to proceed. Every report gives your hiring team a playbook.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD OPTIONS ──────────────────────────────────── */}
      <section id="download" className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Download Options</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Get the full sample report
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border-2 border-brand-yellow/30 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">
                Full Sample Report (PDF)
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                Complete 12-page report with all sections, formatting, and branding.
              </p>
              <Link
                href="/demo"
                className="mt-4 inline-block rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-bold text-ink transition hover:brightness-105"
              >
                Download PDF
              </Link>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Report Data (JSON)</h3>
              <p className="mt-2 text-sm text-ink-light">
                Raw assessment data for integration with your ATS or analysis tools.
              </p>
              <Link
                href="/demo"
                className="mt-4 inline-block rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-bold text-ink transition hover:border-brand-yellow hover:text-brand-yellow"
              >
                Download JSON
              </Link>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">
                Report Template Documentation
              </h3>
              <p className="mt-2 text-sm text-ink-light">
                Technical documentation of all report fields and how they&rsquo;re
                calculated.
              </p>
              <Link
                href="/demo"
                className="mt-4 inline-block rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-bold text-ink transition hover:border-brand-yellow hover:text-brand-yellow"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ────────────────────────────────────── */}
      <section className="bg-paper py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-lg font-bold text-ink">Related Resources</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'Confidence Scoring', href: '/science/fuzzy-logic' },
              { label: 'Explainable AI', href: '/science/explainability' },
              { label: 'ROI Calculator', href: '/resources/roi-calculator' },
              { label: 'How It Works', href: '/how-it-works' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-brand-yellow hover:text-brand-yellow"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <PageCTA
        title="See Your Own Reports"
        description="Want to see LayersRank reports for your actual candidates? Start a free trial and assess your first 5 candidates at no cost."
        cta="Start Free Trial"
        ctaHref="/demo"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
