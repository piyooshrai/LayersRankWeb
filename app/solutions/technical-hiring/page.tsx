import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Technical Interview Platform | Engineering Hiring Assessment | LayersRank',
  description:
    'Evaluate engineers on problem-solving, system design, and communication — not just coding puzzles. Full-stack candidate evaluation for software engineering roles.',
  path: '/solutions/technical-hiring',
});

const faqs = [
  {
    q: 'Can LayersRank evaluate specialized technical skills (ML, embedded, security)?',
    a: 'We have question libraries for common specializations. For highly specialized roles, you can create custom questions targeting specific technical areas. The platform evaluates reasoning and communication regardless of technical domain.',
  },
  {
    q: 'How do candidates feel about this process?',
    a: 'Candidates generally prefer async structured assessment over phone screens. They can complete on their own schedule, they don\'t have to perform in real-time, and they know the evaluation is consistent across candidates. Common feedback: "I appreciated being able to think before answering" and "this felt more fair than typical phone screens."',
  },
  {
    q: 'What about candidates who communicate better verbally than in writing (or vice versa)?',
    a: 'Our interviews include both video and text responses, capturing both communication modes. Candidates who are stronger verbally can shine in video questions; those stronger in writing can shine in text questions. The mix also reflects real engineering work, which requires both verbal communication (meetings, presentations) and written communication (documentation, code reviews, async discussion).',
  },
  {
    q: 'How does this work for remote vs. on-site roles?',
    a: 'The process is identical. LayersRank is async by nature, so it works for any work arrangement. The only difference might be which questions you include — remote roles might include questions about async communication practices.',
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

export default function TechnicalHiringPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <PageHero
        eyebrow="Solutions / Technical Hiring"
        title="Evaluate the Whole Engineer"
        description="Coding tests tell you if someone can write code. They don't tell you if they can solve ambiguous problems, design scalable systems, communicate technical trade-offs, or collaborate with a team. LayersRank evaluates the complete picture."
        primaryCta="See Engineering Questions"
        primaryCtaHref="/product/structured-interviews"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Engineers discussing system design and technical architecture" search="software engineers technical discussion whiteboard system design" />
        </div>
      </section>

      {/* ── THE LIMITATIONS OF CODE-ONLY EVALUATION ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The limitations of code-only evaluation</h2>
          <p className="mt-2 max-w-3xl text-lg font-medium text-ink">
            The standard technical hiring process has a blind spot the size of a barn.
          </p>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              You put candidates through coding challenges. LeetCode-style algorithm puzzles. Timed
              exercises where they implement binary search trees or optimize string matching. Maybe a
              take-home project. Maybe a live coding session where they build something while you watch.
            </p>
            <p>
              What does this tell you? It tells you whether someone can write code that compiles and
              passes test cases under time pressure. That&apos;s a real skill. It&apos;s not nothing.
            </p>
            <p className="font-medium text-ink">But it misses most of what makes engineers valuable.</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Problem Decomposition',
                miss: 'Coding tests give clear specifications.',
                reality: 'Real engineering work rarely does. Can they take a vague requirement and break it into tractable sub-problems?',
              },
              {
                title: 'System Thinking',
                miss: 'Coding tests are isolated exercises.',
                reality: 'Real systems have dependencies, failure modes, and operational concerns. Can they reason about how components interact at scale?',
              },
              {
                title: 'Communication',
                miss: 'Coding tests are silent evaluation.',
                reality: 'Real engineering is collaborative. Can they explain their approach to someone who doesn\'t share their context?',
              },
              {
                title: 'Trade-off Reasoning',
                miss: 'Coding tests have optimal solutions.',
                reality: 'Real engineering has trade-offs. Can they articulate why one approach is better than another given specific constraints?',
              },
              {
                title: 'Collaboration Signals',
                miss: 'Coding tests are individual exercises.',
                reality: 'Real engineering is team sport. Can they incorporate feedback, navigate disagreement, and help others succeed?',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-red">{item.miss}</p>
                <p className="mt-1 text-sm text-ink-light">{item.reality}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
            <p className="text-sm font-semibold text-ink">The result:</p>
            <p className="mt-1 text-sm text-ink-light">
              You hire people who are excellent at coding challenges but struggle when the problems
              aren&apos;t clearly specified and the solutions aren&apos;t in a textbook. We&apos;ve all worked
              with that engineer. Brilliant at algorithms. Terrible at figuring out what to actually
              build. Writes elegant code that solves the wrong problem. Can&apos;t explain their work to
              product managers. Gets defensive when anyone questions their approach.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-yellow">
              They probably aced every coding test you threw at them.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT LAYERSRANK EVALUATES ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What LayersRank evaluates</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Three dimensions, using question types that reveal different signals.
          </p>

          <div className="mt-10 space-y-10">
            {/* Technical Dimension */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">Technical Dimension</h3>
                  <p className="text-sm text-ink-muted">Can they do the job?</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    type: 'System Design',
                    example: '"Walk through how you\'d design a notification service handling 10 million daily users. Consider different notification types, delivery guarantees, and scale requirements."',
                    reveals: 'Whether candidates can think architecturally. Do they clarify requirements? Consider scale? Identify trade-offs? Address failure modes?',
                  },
                  {
                    type: 'Debugging & Troubleshooting',
                    example: '"You receive an alert that API response times have increased 3x in the last hour, but error rates remain normal. Describe your diagnostic process."',
                    reveals: 'Whether candidates have systematic problem-solving approaches. Do they have a methodology or thrash randomly? Consider multiple hypotheses?',
                  },
                  {
                    type: 'Technical Trade-offs',
                    example: '"When would you choose eventual consistency over strong consistency? Describe a specific situation where each approach would be appropriate."',
                    reveals: 'Depth of understanding. Anyone can recite CAP theorem. Fewer can apply it to specific scenarios with nuanced reasoning.',
                  },
                ].map((q) => (
                  <div key={q.type} className="rounded-xl border border-gray-200 bg-white p-6">
                    <p className="font-mono text-xs font-bold text-brand-yellow">{q.type}</p>
                    <p className="mt-3 text-sm italic text-ink-light">{q.example}</p>
                    <p className="mt-3 text-xs text-ink-muted">{q.reveals}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Behavioral Dimension */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                  <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">Behavioral Dimension</h3>
                  <p className="text-sm text-ink-muted">Can they work with others?</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    type: 'Collaboration',
                    example: '"Tell me about a time you had to work closely with a product manager or designer who had different priorities than you. How did you navigate that?"',
                    reveals: 'Whether candidates can function in cross-functional environments. Did they actually influence outcomes or just complain about being overruled?',
                  },
                  {
                    type: 'Technical Communication',
                    example: '"Explain a complex technical concept from your work to me as if I were a non-technical stakeholder who needs to make a decision based on it."',
                    reveals: 'Whether candidates can translate between technical and non-technical contexts. Engineers who can only talk to other engineers have limited impact.',
                  },
                  {
                    type: 'Feedback & Growth',
                    example: '"Tell me about a time you received critical feedback on your technical approach. What happened and how did you respond?"',
                    reveals: 'Self-awareness and learning orientation. Defensive responses indicate someone difficult to work with. Thoughtful responses indicate coachability.',
                  },
                ].map((q) => (
                  <div key={q.type} className="rounded-xl border border-gray-200 bg-white p-6">
                    <p className="font-mono text-xs font-bold text-brand-green">{q.type}</p>
                    <p className="mt-3 text-sm italic text-ink-light">{q.example}</p>
                    <p className="mt-3 text-xs text-ink-muted">{q.reveals}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contextual Dimension */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                  <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">Contextual Dimension</h3>
                  <p className="text-sm text-ink-muted">Do they fit this role?</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    type: 'Role Understanding',
                    example: '"Based on what you know about this role, what do you think will be the biggest technical challenges in the first six months?"',
                    reveals: 'Whether candidates have genuinely thought about the specific opportunity or are just looking for any engineering job.',
                  },
                  {
                    type: 'Motivation Clarity',
                    example: '"What specifically attracted you to this role versus other opportunities you\'re considering?"',
                    reveals: 'Commitment signals. Generic answers ("exciting technology") score lower than specific answers demonstrating understanding of what makes this role distinctive.',
                  },
                  {
                    type: 'Career Trajectory',
                    example: '"Where do you see your engineering career in 3-5 years, and how does this role fit into that?"',
                    reveals: 'Alignment between candidate aspirations and what the role actually offers. Misalignment predicts attrition.',
                  },
                ].map((q) => (
                  <div key={q.type} className="rounded-xl border border-gray-200 bg-white p-6">
                    <p className="font-mono text-xs font-bold text-brand-orange">{q.type}</p>
                    <p className="mt-3 text-sm italic text-ink-light">{q.example}</p>
                    <p className="mt-3 text-xs text-ink-muted">{q.reveals}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING QUESTION EXAMPLES ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Sample Questions</p>
          <h2 className="mt-4 text-2xl font-bold">Engineering question examples</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Real questions from our engineering assessment library, organized by role.
          </p>

          <div className="mt-10 space-y-10">
            {/* Backend Engineer */}
            <div>
              <h3 className="text-lg font-bold text-brand-yellow">Backend Engineer (Senior)</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    format: 'Video — System Design',
                    difficulty: '8/10',
                    question: '"Design a rate limiting service for an API handling 100,000 requests per second. Discuss your approach to storage, trade-offs you\'d consider, and how you\'d handle distributed deployment across multiple regions."',
                    evaluates: 'Architectural thinking, scale reasoning, distributed systems understanding, trade-off articulation.',
                  },
                  {
                    format: 'Text — Technical Depth',
                    difficulty: '7/10',
                    question: '"Explain the difference between optimistic and pessimistic locking. Describe a scenario where each would be the better choice, and explain why."',
                    evaluates: 'Conceptual understanding, practical application, ability to explain clearly.',
                  },
                  {
                    format: 'Video — Behavioral',
                    difficulty: '6/10',
                    question: '"Tell me about a time you had to push back on a technical decision made by someone more senior than you. What was the situation, how did you handle it, and what was the outcome?"',
                    evaluates: 'Professional courage, communication approach, influencing skills.',
                  },
                ].map((q) => (
                  <div key={q.format} className="rounded-xl border border-gray-600 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs text-gray-400">{q.format}</p>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-gray-400">Difficulty: {q.difficulty}</span>
                    </div>
                    <p className="mt-3 text-sm italic leading-relaxed text-gray-300">{q.question}</p>
                    <p className="mt-3 text-xs text-gray-500">Evaluates: {q.evaluates}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Engineer */}
            <div>
              <h3 className="text-lg font-bold text-brand-yellow">Frontend Engineer (Mid-Level)</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    format: 'Video — Technical Approach',
                    difficulty: '6/10',
                    question: '"Walk me through your process for optimizing the performance of a React application that\'s rendering slowly. What would you check first, and how would you prioritize improvements?"',
                    evaluates: 'Performance awareness, debugging methodology, prioritization thinking.',
                  },
                  {
                    format: 'Text — Technical Communication',
                    difficulty: '5/10',
                    question: '"Explain the concept of the virtual DOM to someone who understands HTML but not React. Why does it exist, and what problem does it solve?"',
                    evaluates: 'Ability to explain concepts simply, understanding depth beyond syntax.',
                  },
                  {
                    format: 'Video — Collaboration',
                    difficulty: '6/10',
                    question: '"Describe a time when you received designs from a designer that you felt would be difficult to implement well. How did you handle that conversation?"',
                    evaluates: 'Cross-functional collaboration, communication skills, problem-solving approach.',
                  },
                ].map((q) => (
                  <div key={q.format} className="rounded-xl border border-gray-600 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs text-gray-400">{q.format}</p>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-gray-400">Difficulty: {q.difficulty}</span>
                    </div>
                    <p className="mt-3 text-sm italic leading-relaxed text-gray-300">{q.question}</p>
                    <p className="mt-3 text-xs text-gray-500">Evaluates: {q.evaluates}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps/SRE */}
            <div>
              <h3 className="text-lg font-bold text-brand-yellow">DevOps / SRE (Senior)</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    format: 'Video — Incident Response',
                    difficulty: '8/10',
                    question: '"It\'s 3am and you get paged for a P1 production incident. Walk me through your first 30 minutes: what you check, who you involve, how you communicate, and how you decide when to escalate."',
                    evaluates: 'Operational maturity, systematic approach, communication under pressure.',
                  },
                  {
                    format: 'Text — Infrastructure Design',
                    difficulty: '7/10',
                    question: '"Describe your approach to designing a CI/CD pipeline for a microservices application with 20 services. What stages would you include, and how would you handle dependencies between services?"',
                    evaluates: 'Pipeline thinking, microservices understanding, practical experience depth.',
                  },
                  {
                    format: 'MCQ — Knowledge Validation',
                    difficulty: '5/10',
                    question: '"A Kubernetes pod is stuck in \'ImagePullBackOff\' state. Which of the following is the most likely cause?"',
                    evaluates: 'Baseline operational knowledge.',
                  },
                ].map((q) => (
                  <div key={q.format} className="rounded-xl border border-gray-600 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs text-gray-400">{q.format}</p>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-gray-400">Difficulty: {q.difficulty}</span>
                    </div>
                    <p className="mt-3 text-sm italic leading-relaxed text-gray-300">{q.question}</p>
                    <p className="mt-3 text-xs text-gray-500">Evaluates: {q.evaluates}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TECHNICAL TEAMS USE LAYERSRANK ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How technical teams use LayersRank</h2>

          <div className="mt-10 space-y-8">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Replacing Phone Screens</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    The traditional first-round phone screen is a 30-45 minute call where an engineer asks
                    a few technical questions and forms an impression. The problems: engineer time is
                    expensive, impressions are inconsistent, the sample of candidate capability is tiny,
                    and good candidates sometimes have bad calls.
                  </p>
                  <p className="mt-2 text-sm text-ink-light">
                    LayersRank replaces phone screens with structured assessment. The candidate completes a
                    35-45 minute interview covering more ground than any phone screen could. Multiple
                    question types reveal different signals. Evaluation is consistent. Engineer time shifts
                    from conducting screens to reviewing reports.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-green/5 px-3 py-2">
                    <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm font-medium text-brand-green">70-80% reduction in first-round interviewer hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Informing Technical Deep-Dives</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    When candidates advance to technical deep-dives, the interviewer knows exactly what to
                    probe. The LayersRank report identifies specific strengths and concerns. &ldquo;Strong
                    system design thinking but limited examples of operational experience.&rdquo; The deep-dive
                    can focus on operational scenarios rather than re-validating system design.
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    This makes deep-dives more efficient and more decisive. You&apos;re not starting from
                    scratch — you&apos;re building on known information.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Calibrating Hiring Managers</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Different engineering managers have different bars. What one manager considers
                    &ldquo;strong technical&rdquo; another considers &ldquo;acceptable but not impressive.&rdquo;
                    LayersRank provides a consistent baseline. When every candidate has a standardized
                    first-round score, managers can compare their own assessments against the AI evaluation.
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    Significant divergence prompts calibration conversations. Over time, this creates more
                    consistent hiring standards across teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WITHOUT VS. WITH LAYERSRANK ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Technical hiring: without vs. with LayersRank</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Without */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-red">Without LayersRank</p>
              <div className="mt-4 space-y-2 text-sm text-ink-light">
                <p>1. Candidate applies</p>
                <p>2. Recruiter does basic screen <span className="text-ink-muted">(10 min, minimal signal)</span></p>
                <p>3. Engineer conducts phone screen <span className="text-ink-muted">(45 min, inconsistent questions)</span></p>
                <p>4. Coding test <span className="text-ink-muted">(2-4 hrs candidate time, narrow skill)</span></p>
                <p>5. Technical deep-dive <span className="text-ink-muted">(1-2 hrs, re-asks some phone screen questions)</span></p>
                <p>6. System design interview <span className="text-ink-muted">(1 hr, finally asks what should have been asked earlier)</span></p>
                <p>7. Behavioral/culture interview <span className="text-ink-muted">(1 hr)</span></p>
                <p>8. Hiring committee reviews <span className="text-ink-muted">(often re-debates earlier conclusions)</span></p>
              </div>
              <div className="mt-6 space-y-2 rounded-lg bg-brand-red/5 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Candidate time</span>
                  <span className="font-bold text-ink">6-10 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Interviewer time</span>
                  <span className="font-bold text-ink">5-7 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Application to decision</span>
                  <span className="font-bold text-ink">3-5 weeks</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Signal quality</span>
                  <span className="font-bold text-brand-red">Variable, inconsistent</span>
                </div>
              </div>
            </div>

            {/* With */}
            <div className="rounded-xl border-2 border-brand-green bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green">With LayersRank</p>
              <div className="mt-4 space-y-2 text-sm text-ink-light">
                <p>1. Candidate applies</p>
                <p>2. Recruiter does basic screen <span className="text-ink-muted">(10 min)</span></p>
                <p>3. Candidate completes LayersRank interview <span className="text-ink-muted">(40 min, technical + behavioral + contextual)</span></p>
                <p>4. Recruiter reviews scored report <span className="text-ink-muted">(15 min, advance/decline decision)</span></p>
                <p>5. Focused technical deep-dive <span className="text-ink-muted">(1 hr, probing specific concerns from report)</span></p>
                <p>6. Team fit conversation <span className="text-ink-muted">(45 min, chemistry and final validation)</span></p>
              </div>
              <div className="mt-6 space-y-2 rounded-lg bg-brand-green/5 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Candidate time</span>
                  <span className="font-bold text-ink">2-3 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Interviewer time</span>
                  <span className="font-bold text-ink">2-2.5 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Application to decision</span>
                  <span className="font-bold text-ink">1-2 weeks</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Signal quality</span>
                  <span className="font-bold text-brand-green">Consistent, confidence-weighted</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm font-medium text-ink">
            The difference isn&apos;t subtle. It&apos;s a fundamentally different process.
          </p>
        </div>
      </section>

      {/* ── ADDRESSING ENGINEER SKEPTICISM ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Addressing engineer skepticism</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Engineers are often skeptical of AI-assisted evaluation. Here&apos;s how to address common concerns.
          </p>

          <div className="mt-10 space-y-6">
            {[
              {
                objection: '"AI can\'t evaluate technical skills like a human can."',
                response: 'AI evaluates differently, not worse. A human engineer in a 30-minute phone screen samples a tiny slice of candidate capability and forms an impression influenced by mood, fatigue, and similarity bias. LayersRank evaluates a broader range of competencies with consistent criteria. It doesn\'t get tired. It doesn\'t favor candidates who remind it of itself. The human deep-dive still happens — just after a more rigorous first filter.',
              },
              {
                objection: '"You can\'t evaluate coding ability without seeing code."',
                response: 'You can evaluate reasoning about code without watching someone type. When candidates explain their approach to system design, debugging, or technical trade-offs, they reveal how they think. That thinking is often more predictive than whether they can implement binary search under time pressure. If you need to validate code writing, pair LayersRank with a coding exercise — but understand that coding tests evaluate a narrow skill, while LayersRank evaluates the broader capabilities that predict engineering success.',
              },
              {
                objection: '"Engineers should evaluate engineers."',
                response: 'Engineers should evaluate engineers — in final rounds, where human judgment about team fit, collaboration chemistry, and nuanced technical depth genuinely matters. Engineers shouldn\'t spend their time on repetitive first-round screens that could be structured and automated. That\'s not a good use of expensive engineering talent.',
              },
              {
                objection: '"What if the AI is wrong?"',
                response: 'Every score includes a confidence level. When confidence is high, the evaluation is reliable. When confidence is lower, you know to probe in subsequent rounds. The question isn\'t "is AI perfect?" It\'s "is AI better than inconsistent human phone screens?" The evidence suggests yes.',
              },
            ].map((item) => (
              <div key={item.objection} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="text-lg font-bold text-ink">{item.objection}</p>
                <p className="mt-2 text-sm text-ink-light">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-paper-off py-20">
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
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Related</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/solutions/startups', title: 'Startups', desc: 'Technical hiring for high-growth teams' },
              { href: '/solutions/gcc', title: 'GCC', desc: 'Technical hiring at GCC scale' },
              { href: '/compare/hackerrank', title: 'Compare vs. HackerRank', desc: 'Beyond coding tests' },
              { href: '/product/structured-interviews', title: 'Structured Interviews', desc: 'How the platform works' },
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

      {/* ── FINAL CTA ── */}
      <PageCTA
        title="Evaluate Engineers, Not Just Code"
        description="See how LayersRank assesses the complete picture: technical depth, system thinking, communication, and collaboration. Request a demo with your actual job description."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Browse Engineering Questions"
        secondaryCtaHref="/product/structured-interviews"
        variant="gradient"
      />
    </>
  );
}
