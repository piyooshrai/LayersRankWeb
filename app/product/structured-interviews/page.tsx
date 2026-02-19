import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { LeadMagnetCTA } from '@/components/lead-magnet-cta';

export const metadata = makeMetadata({
  title: 'Structured Interview Platform | Video, Text & MCQ Assessments | LayersRank',
  description:
    'Replace inconsistent phone screens with standardized, role-specific assessments. Candidates answer on their own time. You get comparable, scorable responses across every candidate.',
  path: '/product/structured-interviews',
});

const questionMix = [
  {
    level: 'Junior Individual Contributors',
    mcq: '6\u20138 questions',
    text: '3\u20134 questions',
    video: '2\u20133 questions',
    time: '25\u201335 minutes',
    mcqNote: 'Validate baseline knowledge',
    textNote: 'Assess written reasoning',
    videoNote: 'Check communication basics',
  },
  {
    level: 'Mid-Level Individual Contributors',
    mcq: '4\u20135 questions',
    text: '3\u20134 questions',
    video: '3\u20134 questions',
    time: '30\u201340 minutes',
    mcqNote: 'Efficient knowledge validation',
    textNote: 'Technical depth',
    videoNote: 'Behavioral examples',
  },
  {
    level: 'Senior Individual Contributors',
    mcq: '2\u20133 questions',
    text: '3\u20134 questions',
    video: '4\u20135 questions',
    time: '35\u201350 minutes',
    mcqNote: 'Quick knowledge check',
    textNote: 'Deep technical exploration',
    videoNote: 'Behavioral depth, leadership signals',
  },
  {
    level: 'Managers and Directors',
    mcq: '0\u20132 questions',
    text: '2\u20133 questions',
    video: '5\u20136 questions',
    time: '40\u201355 minutes',
    mcqNote: 'Minimal, knowledge assumed',
    textNote: 'Analytical thinking',
    videoNote: 'Leadership, people management, strategy',
  },
];

const validityComparisons = [
  { method: 'Work sample tests', value: '0.54' },
  { method: 'Structured interviews', value: '0.51' },
  { method: 'Cognitive ability tests', value: '0.51' },
  { method: 'Unstructured interviews', value: '0.38' },
  { method: 'Reference checks', value: '0.26' },
  { method: 'Years of experience', value: '0.18' },
];

const faqs = [
  {
    q: 'How long does it take to set up a structured interview?',
    a: 'Starting from our library, 10\u201315 minutes to select questions and configure the interview. Creating custom questions takes longer, depending on complexity.',
  },
  {
    q: 'Can I change questions after candidates have started?',
    a: 'You can create a new version of the interview for future candidates. Candidates who have already started will complete the original version to ensure consistency.',
  },
  {
    q: 'How do I handle candidates who need accommodations?',
    a: 'Contact us before the interview. We can extend time limits, adjust formats, or make other accommodations while maintaining evaluation validity.',
  },
  {
    q: 'Can candidates retake the interview?',
    a: 'You control this. By default, each candidate can submit once. You can allow retakes for technical issues but not for do-overs after seeing questions.',
  },
  {
    q: 'How do I train hiring managers to trust structured scores?',
    a: 'Start with parallel evaluation: hiring managers do their own assessment, then compare to LayersRank scores. Over time, as they see alignment between structured scores and eventual outcomes, trust builds.',
  },
  {
    q: 'What if I\'m hiring for a role not in your library?',
    a: 'Contact us for custom role development, or build your own interview using the custom question tools. For novel roles, we can work with you to develop appropriate competency frameworks and questions.',
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

export default function StructuredInterviewsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ───── HERO ───── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Product / Structured Interviews
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Same Questions. Fair Comparison. Clear Signal.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            When every candidate answers the same role-specific questions, you can finally compare
            apples to apples. No more &ldquo;different interviewer, different outcome.&rdquo; No
            more gut feel disguised as evaluation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/product/question-bank"
              className="rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange"
            >
              See Question Library
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border border-gray-500 px-6 py-3 font-medium text-white hover:border-white hover:bg-white/5"
            >
              Book a Demo
            </Link>
          </div>
          <div className="mt-12 max-w-3xl">
            <ImagePlaceholder
              label="Candidate taking structured video interview on laptop"
              search="indian candidate video interview laptop"
            />
          </div>
        </div>
      </section>

      {/* ───── THE COST OF UNSTRUCTURED INTERVIEWS ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">
            The Cost of Unstructured Interviews
          </h2>

          <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-ink-light">
            <p>
              Every recruiter has seen this play out. Two candidates interview for the same senior
              engineer role on the same day. Candidate A speaks with your tech lead, who asks deep
              questions about distributed systems and grades on a curve calibrated by years at
              Google. Candidate B speaks with your engineering manager, who focuses on team
              collaboration and tends to see the best in people.
            </p>
            <p>
              Candidate A walks out with a 65. Candidate B walks out with an 82.
            </p>
            <p>
              Who&apos;s the better hire? Nobody knows. The numbers aren&apos;t comparable because
              the interviews weren&apos;t comparable. One candidate answered harder questions with a
              stricter grader. The other had an easier path. The scores measure the interview
              experience, not the candidate&apos;s capability.
            </p>
            <p>This isn&apos;t a rare edge case. It&apos;s the default in most organizations.</p>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="text-sm font-semibold text-ink">The data is clear</p>
              <p className="mt-2 text-sm text-ink-light">
                A 2024 study of interview practices at mid-size tech companies found that the same
                candidate, interviewed by different panels within the same company, received scores
                that varied by an average of{' '}
                <strong className="text-ink">23 points on a 100-point scale</strong>. Nearly one in
                five candidates who were rejected by one panel would have been advanced by another
                panel at the same company, for the same role.
              </p>
            </div>

            <p>
              Schmidt and Hunter&apos;s landmark meta-analysis of selection methods, updated
              multiple times over 85 years of data, shows that unstructured interviews have a
              predictive validity of <strong className="text-ink">0.38</strong> &mdash; explaining
              only 14% of the variance in eventual job performance. Structured interviews score{' '}
              <strong className="text-ink">0.51</strong>, explaining 26% of variance.
            </p>
            <p>
              That gap sounds small in percentage terms. In practice, it&apos;s enormous. For a
              company making 100 hires per year, the difference between 14% and 26% predictive
              accuracy means the difference between roughly 35 good hires and 50 good hires.
              Fifteen additional successful hires per hundred, just from asking consistent
              questions.
            </p>
            <p className="font-medium text-ink">
              LayersRank makes structured interviews the default, not the exception that requires
              extra effort.
            </p>
          </div>
        </div>
      </section>

      {/* ───── WHAT MAKES AN INTERVIEW "STRUCTURED" ───── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-ink">
              What Makes an Interview &ldquo;Structured&rdquo;
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-light">
              A structured interview has three components: standardized questions, defined
              evaluation criteria, and consistent administration.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-ink">Standardized Questions</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                Every candidate for the same role answers the same questions. Not &ldquo;similar&rdquo;
                questions. Not &ldquo;questions from the same topic areas.&rdquo; The exact same
                questions, in the same order, with the same framing.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                This eliminates one of the biggest sources of interview noise: question difficulty
                variance. When one interviewer asks &ldquo;Tell me about a challenging project&rdquo;
                and another asks about rebuilding a system under production pressure with incomplete
                requirements, the second candidate faces a harder test. Their score will be lower
                even if their underlying capability is identical.
              </p>
              <p className="mt-3 text-sm font-medium text-ink">
                Standardized questions create a level playing field.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-ink">Defined Evaluation Criteria</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                Before any candidate answers, you define what a good answer looks like. What themes
                should appear? What evidence demonstrates competency? What red flags indicate
                concern?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                This eliminates evaluator interpretation variance. Without defined criteria,
                interviewers apply their own standards. One rewards conciseness, another rewards
                thoroughness. One values confidence, another values humility. The &ldquo;best&rdquo;
                answer depends entirely on who&apos;s grading.
              </p>
              <p className="mt-3 text-sm font-medium text-ink">
                Defined criteria create shared standards.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-ink">Consistent Administration</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                The interview is administered the same way every time. Same instructions. Same time
                limits. Same environment (or as close as asynchronous completion allows).
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                A candidate interviewed at 4pm on Friday by a tired interviewer running late for
                their kid&apos;s soccer game gets a different experience than one interviewed at
                10am Tuesday by an energized interviewer. That difference shows up in scores.
              </p>
              <p className="mt-3 text-sm font-medium text-ink">
                Consistent administration removes situational noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── HOW LAYERSRANK IMPLEMENTS STRUCTURE ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">How LayersRank Implements Structure</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-light">
            LayersRank enforces all three components through platform design.
          </p>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-xl font-bold text-ink">
                Standardized Questions Through Role Templates
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                When you create an interview for &ldquo;Senior Backend Engineer,&rdquo; you select
                from a library of vetted questions designed for that specific role. Every candidate
                applying for that role receives the same question set.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                You can customize which questions to include. You can add your own. But once an
                interview is configured, every candidate who receives that link answers the same
                questions in the same order. The platform won&apos;t let you accidentally give
                different candidates different questions. Structure is the default, not an option
                you have to remember to enable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ink">
                Defined Criteria Through Scoring Rubrics
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                Every question in our library comes with a scoring rubric that defines:
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-gray-200 bg-paper-off p-4">
                  <p className="text-sm font-semibold text-ink">What strong answers include</p>
                  <p className="mt-1 text-sm text-ink-light">
                    Specific themes, evidence types, and depth levels that indicate competency. For a
                    system design question: &ldquo;Considers scale requirements, discusses trade-offs
                    between consistency and availability, mentions failure modes, proposes monitoring
                    approach.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-paper-off p-4">
                  <p className="text-sm font-semibold text-ink">What weak answers look like</p>
                  <p className="mt-1 text-sm text-ink-light">
                    Missing elements, surface-level treatment, red flags. &ldquo;Jumps to
                    implementation without clarifying requirements, ignores failure scenarios,
                    proposes over-engineered solution without justification.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-paper-off p-4">
                  <p className="text-sm font-semibold text-ink">What differentiates levels</p>
                  <p className="mt-1 text-sm text-ink-light">
                    How a senior engineer&apos;s answer should differ from a mid-level
                    engineer&apos;s answer to the same question.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
                These rubrics train our AI scoring models. They also serve as reference for any
                human reviewers who examine responses. Everyone evaluates against the same
                benchmarks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ink">
                Consistent Administration Through Asynchronous Delivery
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                Every candidate receives the same experience: same instructions, same interface,
                same time limits, same preparation time before video questions. The asynchronous
                model removes variables like interviewer mood, time of day, and conversation
                dynamics. The candidate interacts with the platform, not with a human whose approach
                might vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── QUESTION TYPES IN DEPTH ───── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Question Types in Depth</h2>
            <p className="mt-4 text-gray-400">
              Different competencies require different question formats. LayersRank supports three
              types, each designed to reveal specific signals.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Video */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
              <h3 className="text-xl font-bold">Video Response Questions</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Candidates see the question, receive optional preparation time (30&ndash;60
                seconds), then record their response (1&ndash;3 minute limit, configurable).
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                  What video reveals
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Communication presence &mdash; focus, structure, comfort
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Verbal explanation ability for stakeholder communication
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Authenticity signals harder to detect in text
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Thinking process &mdash; complexity acknowledgment vs oversimplification
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-t border-gray-700 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Best for
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  STAR behavioral questions, situational judgment, communication-heavy roles,
                  leadership positions, customer-facing roles
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-gray-700 bg-black/30 p-4">
                <p className="text-xs font-semibold text-brand-yellow">Example &mdash; Product Manager</p>
                <p className="mt-2 text-sm italic text-gray-400">
                  &ldquo;Tell me about a time when you had to make a product decision with
                  incomplete data. What was the situation, what did you decide, how did you decide
                  it, and what was the outcome?&rdquo;
                </p>
                <div className="mt-2 flex gap-4 text-xs text-gray-500">
                  <span>Time: 3 min</span>
                  <span>Prep: 45s</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
              <h3 className="text-xl font-bold">Text Response Questions</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Candidates type their answer with no time pressure beyond overall interview
                completion. Per-question limits configurable if desired.
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                  What text reveals
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Written communication quality &mdash; critical for async/remote work
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Technical precision with specific terminology
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Thoughtfulness &mdash; their best thinking, not first reaction
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-t border-gray-700 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Best for
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Technical explanations, analytical questions, written communication roles,
                  complex scenarios requiring structured response
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-gray-700 bg-black/30 p-4">
                <p className="text-xs font-semibold text-brand-yellow">
                  Example &mdash; Senior Backend Engineer
                </p>
                <p className="mt-2 text-sm italic text-gray-400">
                  &ldquo;Explain the CAP theorem in your own words. Then describe a real system
                  you&apos;ve worked on and explain which trade-offs it made between consistency,
                  availability, and partition tolerance.&rdquo;
                </p>
                <div className="mt-2 flex gap-4 text-xs text-gray-500">
                  <span>200&ndash;400 words</span>
                  <span>Distributed systems</span>
                </div>
              </div>
            </div>

            {/* MCQ */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
              <h3 className="text-xl font-bold">Multiple Choice Questions</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                4&ndash;5 answer options. Candidates select the best answer. Auto-scored instantly.
                30&ndash;60 seconds each.
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                  What MCQs reveal
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Foundational knowledge &mdash; domain table stakes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Terminology familiarity and concept relationships
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    Efficient filtering &mdash; 10 MCQs in under 10 minutes
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-t border-gray-700 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Best for
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Baseline knowledge validation, high-volume screening, certification validation,
                  domain expertise checks
                </p>
              </div>
              <div className="mt-4 rounded-lg border border-gray-700 bg-black/30 p-4">
                <p className="text-xs font-semibold text-brand-yellow">Example &mdash; DevOps Engineer</p>
                <p className="mt-2 text-sm italic text-gray-400">
                  &ldquo;A Kubernetes pod is stuck in &apos;Pending&apos; state. Which is NOT a
                  likely cause?&rdquo;
                </p>
                <div className="mt-2 space-y-1 text-xs text-gray-500">
                  <p>A) Insufficient cluster resources</p>
                  <p>B) Docker image cannot be pulled</p>
                  <p>C) PVC cannot bind to PV</p>
                  <p className="text-brand-green">D) Readiness probe failing &larr; Correct</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── RECOMMENDED QUESTION MIX ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-ink">Recommended Question Mix by Role Level</h2>
          <p className="mt-4 text-ink-light">
            The optimal mix varies by seniority and type. These are starting points &mdash; adjust
            based on what matters most for your specific role.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper-off">
                  <th className="px-6 py-4 text-left font-semibold text-ink">Role Level</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">MCQ</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">Text</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">Video</th>
                  <th className="px-6 py-4 text-left font-semibold text-ink">Total Time</th>
                </tr>
              </thead>
              <tbody>
                {questionMix.map((row) => (
                  <tr key={row.level} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-ink">{row.level}</td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-ink">{row.mcq}</span>
                      <p className="text-xs text-ink-muted">{row.mcqNote}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-ink">{row.text}</span>
                      <p className="text-xs text-ink-muted">{row.textNote}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-ink">{row.video}</span>
                      <p className="text-xs text-ink-muted">{row.videoNote}</p>
                    </td>
                    <td className="px-6 py-4 font-mono text-ink">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───── THE CANDIDATE EXPERIENCE ───── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-ink">The Candidate Experience</h2>
          <p className="mt-4 text-ink-light">
            Structure doesn&apos;t mean robotic. The experience is designed to feel professional,
            respectful, and fair.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                Before
              </p>
              <h3 className="mt-3 text-lg font-bold text-ink">Clear Expectations</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                Candidates receive estimated completion time, number and types of questions, whether
                there are time limits, what happens after submission, and technical requirements. No
                surprises. Candidates who know what&apos;s coming perform more authentically.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                During
              </p>
              <h3 className="mt-3 text-lg font-bold text-ink">Guided Interface</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                Clear question presentation, preparation time before video questions, practice
                recording option, progress indicator, and auto-save throughout. If they close the
                browser, they can resume later from any device.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  'Works on any modern browser, desktop or mobile',
                  'Low-bandwidth mode for poor connectivity',
                  'Screen reader compatible',
                  'Extended time accommodations available',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-ink-light">
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
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                After
              </p>
              <h3 className="mt-3 text-lg font-bold text-ink">Confirmation &amp; Next Steps</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">
                Candidates receive confirmation their interview was submitted. Depending on your
                configuration: estimated timeline for next steps, contact information, and company
                details. The experience leaves candidates feeling they had a fair chance to
                demonstrate their capabilities.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <ImagePlaceholder
              label="Candidate on mobile taking interview"
              search="person mobile phone interview"
            />
          </div>
        </div>
      </section>

      {/* ───── BUILDING YOUR INTERVIEW ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">Building Your Interview</h2>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-xl font-bold text-ink">Starting From the Library</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                Select the role you&apos;re hiring for. We&apos;ll show you a recommended question
                set covering the competencies that typically matter. Use it as-is, or customize by
                adding, removing, or reordering questions.
              </p>
              <div className="mt-4 rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="text-sm font-semibold text-ink">
                  Example: Senior Backend Engineer default set
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink-light">
                  <li>2 MCQs on fundamental concepts (HTTP, databases)</li>
                  <li>1 text question on system design approach</li>
                  <li>1 text question on debugging methodology</li>
                  <li>2 video questions on technical challenges and trade-offs</li>
                  <li>2 video questions on collaboration and conflict resolution</li>
                  <li>1 video question on learning and growth</li>
                </ul>
                <p className="mt-3 text-xs text-ink-muted">
                  Total: 9 questions, approximately 40 minutes. Covers Technical, Behavioral, and
                  Contextual dimensions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ink">Customizing Questions</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                Every library question can be customized. Change the scenario to reference your
                domain. Add company-specific context. Adjust difficulty by modifying constraints.
                The underlying rubric adapts &mdash; the competency being measured remains the same
                even if the scenario changes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ink">Creating Custom Questions</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                For competencies unique to your organization, create from scratch:
              </p>
              <ol className="mt-4 space-y-2 text-sm text-ink-light">
                {[
                  'Define the competency you\'re measuring',
                  'Write the question prompt',
                  'Select question type (video, text, MCQ)',
                  'Specify what strong answers should include',
                  'Specify what weak answers look like',
                  'Set difficulty level (1\u201310)',
                  'Configure time limits and preparation time',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-xs font-bold text-brand-yellow">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ink">Ensuring Coverage</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                As you build the interview, the platform shows competency coverage: which dimensions
                are covered, which specific competencies have questions, and whether coverage is
                balanced or skewed. If you&apos;re missing behavioral questions entirely, you&apos;ll
                see a warning. The platform ensures you&apos;re making coverage choices
                intentionally, not accidentally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SCORING AND EVALUATION ───── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">Scoring and Evaluation</h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-ink">How Responses Are Scored</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                Each response is evaluated by multiple AI models:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { name: 'Semantic Analysis', desc: 'Compares response meaning to what strong answers typically convey' },
                  { name: 'Lexical Analysis', desc: 'Checks for appropriate domain terminology and language patterns' },
                  { name: 'Reasoning Evaluation', desc: 'Assesses logical structure, depth, and coherence' },
                  { name: 'Contextual Relevance', desc: 'Scores how well the response addresses the specific question' },
                ].map((model) => (
                  <div
                    key={model.name}
                    className="rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <p className="text-sm font-semibold text-ink">{model.name}</p>
                    <p className="mt-1 text-xs text-ink-light">{model.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
                These models score independently. When they agree, confidence is high. When they
                disagree, uncertainty is detected and may trigger adaptive follow-up.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ink">Dimension and Overall Scores</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
                Individual question scores roll up into dimension scores (Technical, Behavioral,
                Contextual), each with a confidence interval. The overall score is a weighted
                combination: default Technical 40%, Behavioral 35%, Contextual 25% &mdash;
                configurable per role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── STRUCTURED VS UNSTRUCTURED: THE EVIDENCE ───── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Structured vs. Unstructured: The Evidence</h2>
            <p className="mt-4 text-gray-400">
              The case for structured interviews isn&apos;t opinion. It&apos;s one of the most
              replicated findings in industrial-organizational psychology.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Predictive Validity */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
              <h3 className="text-lg font-bold text-brand-yellow">Predictive Validity</h3>
              <div className="mt-4 space-y-3">
                {validityComparisons.map((item) => (
                  <div key={item.method} className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{item.method}</span>
                    <span
                      className={`font-mono text-sm font-bold ${
                        item.value === '0.51' && item.method.includes('Structured')
                          ? 'text-brand-green'
                          : item.value === '0.38'
                            ? 'text-brand-red'
                            : 'text-gray-300'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reliability */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
              <h3 className="text-lg font-bold text-brand-yellow">Reliability</h3>
              <div className="mt-4 space-y-6">
                <div>
                  <p className="text-sm text-gray-400">Unstructured inter-rater reliability</p>
                  <p className="mt-1 font-mono text-2xl font-bold text-brand-red">0.37</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Structured inter-rater reliability</p>
                  <p className="mt-1 font-mono text-2xl font-bold text-brand-green">0.71</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Structured interviews produce agreement nearly twice as often.
              </p>
            </div>

            {/* Bias Reduction */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
              <h3 className="text-lg font-bold text-brand-yellow">Bias Reduction</h3>
              <p className="mt-2 text-sm text-gray-400">
                Structured interviews reduce:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  Similarity bias &mdash; less room for preference-driven conversation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  Halo effect &mdash; evaluating against defined criteria
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  First impression bias &mdash; considering all responses before scoring
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  Confirmation bias &mdash; requiring evidence for scores
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───── IMPLEMENTATION GUIDANCE ───── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">Implementation Guidance</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-light">
            If your organization currently uses unstructured interviews, transitioning takes change
            management. Here&apos;s a proven phased approach.
          </p>

          <div className="mt-12 space-y-6">
            {[
              {
                phase: 'Phase 1: Pilot',
                items: [
                  'Select one role for structured interviews',
                  'Build the interview in LayersRank',
                  'Run 10\u201320 candidates through the new process',
                  'Compare outcomes to your historical process',
                ],
              },
              {
                phase: 'Phase 2: Evaluate',
                items: [
                  'Did structured scores predict final round outcomes?',
                  'Did hiring managers find reports useful?',
                  'Did candidates report a fair experience?',
                  'What adjustments are needed?',
                ],
              },
              {
                phase: 'Phase 3: Expand',
                items: [
                  'Roll out to additional roles',
                  'Train hiring managers on interpreting reports',
                  'Establish feedback loops for continuous improvement',
                ],
              },
              {
                phase: 'Phase 4: Default',
                items: [
                  'Structure becomes the standard first-round process',
                  'Unstructured phone screens reserved for exceptional cases',
                ],
              },
            ].map((p) => (
              <div key={p.phase} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <h3 className="text-lg font-bold text-ink">{p.phase}</h3>
                <ul className="mt-3 space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-light">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-xl font-bold text-ink">Common Objections and Responses</h3>
          <div className="mt-6 space-y-4">
            {[
              {
                objection: 'We need flexibility to explore where the conversation goes.',
                response:
                  'Exploration is valuable in final rounds where fit and chemistry matter. First rounds should validate baseline competencies, which structured interviews do better. Use structure to filter, then explore with shortlisted candidates.',
              },
              {
                objection: 'Good interviewers can assess candidates without rigid structure.',
                response:
                  'Even good interviewers are inconsistent. Research shows that interviewer experience does not significantly improve predictive validity. Structure helps everyone, including good interviewers.',
              },
              {
                objection: "Candidates will feel like they're being processed, not evaluated.",
                response:
                  'Fair structure feels more respectful than inconsistent treatment. Candidates appreciate knowing what\'s expected and being evaluated against clear criteria.',
              },
              {
                objection: "We'll miss great candidates who don't interview well.",
                response:
                  "Unstructured interviews favor candidates who interview well, not necessarily candidates who perform well. Structure actually reduces this bias by evaluating on job-relevant criteria.",
              },
            ].map((item) => (
              <div
                key={item.objection}
                className="rounded-xl border border-gray-200 bg-paper-off p-6"
              >
                <p className="text-sm font-semibold text-ink">
                  &ldquo;{item.objection}&rdquo;
                </p>
                <p className="mt-2 text-sm text-ink-light">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── INTERNAL LINKS ───── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Related Product Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: '/product/confidence-scoring',
                title: 'Confidence Scoring',
                desc: 'How responses are scored with confidence levels',
              },
              {
                href: '/product/adaptive-questioning',
                title: 'Adaptive Follow-Up',
                desc: 'What happens when answers are ambiguous',
              },
              {
                href: '/product/question-bank',
                title: 'Question Bank',
                desc: 'Browse and preview our question library',
              },
              {
                href: '/product/candidate-reports',
                title: 'Reports',
                desc: 'What the final candidate report looks like',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm text-ink-light">{link.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
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
          <h2 className="text-3xl font-bold text-ink">See the Question Library</h2>
          <p className="mt-3 text-ink-light">
            Browse 1,000+ vetted questions across 50+ roles. See exactly what candidates experience.
            Build your first structured interview in minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/product/question-bank"
              className="rounded-lg bg-ink px-8 py-4 font-semibold text-white hover:bg-ink-light"
            >
              Explore Questions
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border-2 border-ink/20 px-8 py-4 font-medium text-ink hover:border-ink/40"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lead Magnet CTA ── */}
      <LeadMagnetCTA type="questions" />

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
