import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Adaptive Interview Follow-Up Questions | Resolve Ambiguity in Real-Time | LayersRank',
  description:
    'When AI models disagree on how to score a response, LayersRank asks a clarifying question automatically. Every final score is high-confidence because uncertainty gets resolved during the interview.',
  path: '/product/adaptive-questioning',
});

const faqs = [
  {
    q: 'Do all candidates get follow-up questions?',
    a: 'No. Follow-up only triggers when model disagreement exceeds the threshold. Candidates who give clear, evaluable responses -- whether strong, moderate, or weak -- don\'t receive follow-ups. In typical interviews, 20-30% of candidates receive at least one follow-up question.',
  },
  {
    q: 'Can candidates tell they\'re being "tested" with follow-ups?',
    a: 'Candidates don\'t see uncertainty scores or threshold triggers. From their perspective, some questions have follow-up components built in. There\'s no indication that their specific response triggered additional probing.',
  },
  {
    q: 'What if a candidate refuses to answer the follow-up?',
    a: 'Extremely rare, but it\'s treated as a non-response for that portion. The original response is scored with lower confidence. The report notes that follow-up was presented but not addressed. This itself may be a signal about the candidate\'s engagement or suitability.',
  },
  {
    q: 'Does getting follow-up questions hurt the candidate\'s score?',
    a: 'No. Receiving a follow-up doesn\'t penalize the candidate. Their final score reflects their demonstrated competency across all responses. A candidate who gives a vague first answer but an excellent detailed follow-up can score just as well as someone who gave a clear answer initially.',
  },
  {
    q: 'Can I review which questions triggered follow-ups?',
    a: 'Yes. The candidate report shows which questions included follow-up, the original response, the follow-up question that was asked, and the follow-up response. You can see the full progression.',
  },
  {
    q: 'Can I disable adaptive follow-up entirely?',
    a: 'Yes, though we don\'t recommend it. Without follow-up, you\'ll receive more scores with moderate or low confidence, and your reports will include more "Areas to Probe" flags for subsequent rounds. The uncertainty doesn\'t disappear -- it just gets pushed to you to handle manually.',
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

export default function AdaptiveQuestioningPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
              Product / Adaptive Follow-Up
            </p>
            <span className="rounded-full bg-brand-yellow px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">
              New
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Uncertain? Don&apos;t Guess. Ask.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Most interview platforms average away disagreement and hope for the best. LayersRank does something
            different: when our models can&apos;t confidently score a response, the system asks a follow-up question
            in real-time. The candidate clarifies. Uncertainty resolves. Every final score is backed by clear evidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/demo" className="rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange">
              See It In Action
            </Link>
            <Link href="/demo" className="rounded-lg border border-gray-500 px-6 py-3 font-medium text-white hover:border-white hover:bg-white/5">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Interview interface showing adaptive follow-up question in real-time" search="chat interface ai follow-up question interview" />
        </div>
      </section>

      {/* ── THE PROBLEM WITH STATIC INTERVIEWS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The problem with static interviews</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Here&apos;s what happens in every traditional interview platform, thousands of times per day.
          </p>

          {/* The vague answer example */}
          <div className="mt-10 mx-auto max-w-3xl space-y-6">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Question</p>
              <p className="mt-2 text-ink">
                &ldquo;Tell me about a time you had to influence a decision without having direct authority.&rdquo;
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Candidate Response</p>
              <p className="mt-2 text-ink-light italic">
                &ldquo;In my previous role, I worked closely with the product team on a major initiative.
                There were some disagreements about the direction we should take. I shared my perspective
                with the team and we eventually landed on an approach that everyone felt good about.
                It turned out well and we shipped on time.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              The platform scores this response. Maybe it gives a 68. Maybe a 74. The recruiter sees the number and moves on.
            </p>
            <p>
              But what did that response actually tell us? Did the candidate influence anything, or did they just
              participate in a meeting? What was their specific perspective? How did they share it -- in a group setting,
              one-on-one, through documentation? What was the disagreement about? How did they handle resistance?
            </p>
            <p>
              The answer is vague. It follows the structure of a STAR response without providing the substance.
              A skilled interviewer sitting across the table would immediately follow up:
              &ldquo;Can you walk me through specifically what you did to build alignment?&rdquo;
            </p>
            <p>
              A static platform can&apos;t do that. It takes whatever it gets.
            </p>
          </div>

          {/* Model disagreement visualization */}
          <div className="mt-10 mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-ink">When this response hits the scoring models:</p>
            <div className="mt-4 space-y-3">
              {[
                { model: 'Semantic Similarity', score: 76, note: 'Sees matching keywords -- "influence," "disagreements," "shipped on time"', color: 'bg-brand-green' },
                { model: 'Reasoning Depth', score: 52, note: 'No specific actions, no concrete examples, no causal explanations', color: 'bg-brand-red' },
                { model: 'Relevance', score: 68, note: 'Technically addresses the question asked', color: 'bg-brand-yellow' },
              ].map((m) => (
                <div key={m.model} className="rounded-lg border border-gray-200 bg-paper-off p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">{m.model}</span>
                    <span className="font-mono text-sm font-bold text-ink">{m.score}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
                    <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.score}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">{m.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
              <span className="font-semibold">Three meaningfully different scores.</span> The platform averages them
              to 71, presented with false precision. The disagreement -- which represents genuine ambiguity -- disappears.
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
            <p className="text-sm font-semibold text-ink">This happens constantly.</p>
            <p className="mt-1 text-sm text-ink-light">
              In our analysis, <span className="font-semibold text-ink">23%</span> of interview responses show
              significant model disagreement. Nearly one in four scores is hiding meaningful uncertainty.
              LayersRank handles this differently.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW ADAPTIVE FOLLOW-UP WORKS ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How adaptive follow-up works</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            When a candidate submits a response, six things happen in sequence.
          </p>

          <div className="mt-10 space-y-0">
            {[
              {
                number: '01',
                title: 'Multi-Model Evaluation',
                description: 'The response is evaluated by four independent scoring approaches: semantic similarity analysis, lexical alignment analysis, LLM reasoning evaluation, and cross-encoder contextual scoring. Each produces an independent score.',
              },
              {
                number: '02',
                title: 'Agreement Measurement',
                description: 'We calculate how much the models agree or disagree. When approaches score within a tight band, we have high agreement. When they diverge significantly, something about the response is genuinely ambiguous. We quantify this disagreement as a Refusal Degree (R), ranging from 0 (perfect agreement) to 1 (complete disagreement).',
              },
              {
                number: '03',
                title: 'Threshold Check',
                description: 'We compare R against a configured threshold (default: 0.25). Below threshold, models agree sufficiently -- scored normally. Above threshold, models disagree significantly -- static scoring would produce an unreliable result. The 0.25 threshold correlates with where human evaluators also disagree.',
              },
              {
                number: '04',
                title: 'Follow-Up Generation',
                description: 'When R exceeds the threshold, the system generates a targeted follow-up question based on what\'s specifically missing or unclear. For the vague influence example: missing specific actions, missing concrete outcomes, unclear personal contribution vs. team effort.',
              },
              {
                number: '05',
                title: 'Candidate Responds',
                description: 'The candidate sees the follow-up within the same interview session. No scheduling, no delay. They provide additional context that clarifies the ambiguity.',
              },
              {
                number: '06',
                title: 'Re-Evaluation',
                description: 'Models re-evaluate, considering both the original response and the follow-up together. Typically, R drops dramatically (e.g., from 0.31 to 0.09) and confidence increases to reliable levels (e.g., 64% to 91%). The final score reflects what the candidate can actually do.',
              },
            ].map((step, idx) => (
              <div key={step.number} className="relative flex gap-6 pb-8 last:pb-0">
                {idx < 5 && (
                  <div className="absolute left-5 top-10 h-full w-px bg-gray-200" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL EXAMPLE: BEFORE & AFTER ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The full cycle: before and after</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            See how adaptive follow-up transforms a vague response into a high-confidence assessment.
          </p>

          <div className="mt-10 mx-auto max-w-3xl space-y-6">
            {/* Initial vague response */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Initial Response</p>
              <p className="mt-2 text-ink-light italic">
                &ldquo;In my previous role, I worked closely with the product team on a major initiative.
                There were some disagreements about the direction we should take. I shared my perspective
                and we eventually landed on an approach that everyone felt good about. It turned out well
                and we shipped on time.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-brand-red/10 px-2.5 py-0.5 text-xs font-semibold text-brand-red">
                  R = 0.31
                </span>
                <span className="rounded-full bg-brand-red/10 px-2.5 py-0.5 text-xs font-semibold text-brand-red">
                  Confidence: 64%
                </span>
              </div>
            </div>

            {/* System detection */}
            <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                  <svg className="h-4 w-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-orange">Uncertainty Detected</p>
                  <p className="text-sm text-ink-light">
                    Missing: specific actions taken. Missing: concrete outcomes. Unclear: personal contribution
                    vs. team effort. System identifies targeted follow-up opportunity.
                  </p>
                </div>
              </div>
            </div>

            {/* Follow-up question */}
            <div className="rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Adaptive Follow-Up</p>
              <p className="mt-2 text-ink">
                &ldquo;You mentioned influencing the product team&apos;s direction. Can you walk me through the
                specific steps you took to build alignment? What was the measurable outcome?&rdquo;
              </p>
            </div>

            {/* Detailed follow-up response */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Follow-Up Response</p>
              <p className="mt-2 text-ink-light italic">
                &ldquo;Sure. The core disagreement was whether to prioritize our enterprise dashboard or our mobile
                experience for Q3. I pulled our product analytics and found that 68% of key user actions in our
                target segment happened on mobile, but our mobile conversion was 40% lower than desktop.
                I put together a one-page analysis showing the revenue impact of fixing mobile versus building
                new enterprise features.
              </p>
              <p className="mt-2 text-ink-light italic">
                I scheduled a 30-minute session with the PM and design lead. I walked through the data,
                specifically the $2.3M revenue we were leaving on the table from mobile drop-off. The PM was
                initially skeptical because enterprise had been the roadmap priority, but the numbers were clear.
                We agreed to a phased approach: mobile optimization in Q3, enterprise dashboard in Q4.
              </p>
              <p className="mt-2 text-ink-light italic">
                The result was a 34% improvement in mobile conversion within six weeks of launch.&rdquo;
              </p>
            </div>

            {/* Resolution */}
            <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                  <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-green">Uncertainty Resolved</p>
                  <p className="text-sm text-ink-light">
                    R dropped from <span className="font-mono font-bold text-brand-red">0.31</span> to{' '}
                    <span className="font-mono font-bold text-brand-green">0.09</span>. Confidence increased
                    from <span className="font-mono font-bold text-brand-red">64%</span> to{' '}
                    <span className="font-mono font-bold text-brand-green">91%</span>. Clear actions,
                    personal contribution, and quantified outcomes now visible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TRIGGERS FOLLOW-UP ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What triggers follow-up (and what doesn&apos;t)</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Adaptive follow-up isn&apos;t about asking more questions. It&apos;s about asking the right question
            when evidence is genuinely unclear.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Triggers */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Follow-up triggers when</h3>
              <ul className="mt-4 space-y-3">
                {[
                  { title: 'Model disagreement exceeds threshold', desc: 'R > 0.25. Different evaluation approaches see meaningfully different things.' },
                  { title: 'Key evidence is missing', desc: 'Claims without examples. Actions without outcomes. Competency questions that get irrelevant answers.' },
                  { title: 'Specificity is lacking', desc: 'Generalities ("I usually," "we typically") rather than concrete instances.' },
                  { title: 'Clarity is poor', desc: 'Unclear structure, ambiguous referents, contradictory statements.' },
                ].map((item) => (
                  <li key={item.title} className="text-sm">
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="text-ink-light">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Does NOT trigger */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Follow-up does NOT trigger when</h3>
              <ul className="mt-4 space-y-3">
                {[
                  { title: 'Models agree the response is weak', desc: 'All approaches score poorly. No disagreement. Asking more won\'t change a genuinely weak answer.' },
                  { title: 'The response is clear, even if mediocre', desc: 'A competent but unimpressive answer with high model agreement. Certainty is high even though performance is moderate.' },
                  { title: 'Question type doesn\'t support it', desc: 'MCQs have right or wrong answers. Follow-up doesn\'t apply.' },
                  { title: 'Maximum follow-ups reached', desc: 'Configurable limit per interview (default: 3). Remaining ambiguous responses scored with lower confidence and flagged.' },
                ].map((item) => (
                  <li key={item.title} className="text-sm">
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="text-ink-light">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Concrete examples */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green">No Follow-Up Needed</p>
              <p className="mt-2 text-sm font-semibold text-ink">&ldquo;Describe your experience with distributed systems.&rdquo;</p>
              <p className="mt-2 text-sm italic text-ink-light">
                &ldquo;I don&apos;t really have direct experience with distributed systems. Most of my work has been
                on monolithic applications.&rdquo;
              </p>
              <p className="mt-3 text-xs text-ink-muted">
                All models agree: the candidate lacks this experience. R is very low. The answer is clear.
                Asking &ldquo;can you tell me more?&rdquo; won&apos;t change that.
              </p>
            </div>

            <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange">Follow-Up Triggered</p>
              <p className="mt-2 text-sm font-semibold text-ink">&ldquo;Describe your experience with distributed systems.&rdquo;</p>
              <p className="mt-2 text-sm italic text-ink-light">
                &ldquo;I&apos;ve worked on systems that handle a lot of traffic across multiple servers.
                We had to think about things like data consistency and making sure the system stayed up.&rdquo;
              </p>
              <p className="mt-3 text-xs text-ink-muted">
                Models disagree. Semantic model sees concepts; reasoning model sees vague, surface-level description.
                Is this real experience described poorly, or pretended experience?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FOLLOW-UP GENERATION PROCESS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The follow-up generation process</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Follow-up questions aren&apos;t templates. They&apos;re generated based on what&apos;s specifically
            missing or unclear in each response.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Gap Analysis */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Gap Analysis</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every question has expected elements -- the competency signals it&apos;s designed to surface.
                The system compares the response against these expectations: which elements were provided,
                which were vague, and which were absent.
              </p>
            </div>

            {/* Follow-Up Targeting */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Targeted Questions</h3>
              <p className="mt-2 text-sm text-ink-light">
                The follow-up targets the most critical missing elements. No outcome mentioned?
                &ldquo;What was the result?&rdquo; No personal role?
                &ldquo;What was your specific contribution?&rdquo;
                All generalities? &ldquo;Walk me through one specific example.&rdquo;
              </p>
            </div>

            {/* Tone Calibration */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Tone Calibration</h3>
              <p className="mt-2 text-sm text-ink-light">
                Follow-ups are professional and neutral. Not &ldquo;Your answer was vague&rdquo; but
                &ldquo;Can you walk me through the specific steps?&rdquo; The candidate experiences
                follow-up as an opportunity to elaborate, not as criticism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS AFTER FOLLOW-UP ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">After Follow-Up</p>
          <h2 className="mt-4 text-2xl font-bold">What happens with the results</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Confidence Resolution */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-3xl font-extrabold text-brand-green">78%</p>
              <p className="mt-1 text-sm font-semibold text-brand-green">of cases resolve</p>
              <h3 className="mt-4 text-lg font-bold text-white">Confidence Resolution</h3>
              <p className="mt-2 text-sm text-gray-300">
                In approximately 78% of follow-up cases, the additional context clarifies ambiguity.
                Models that disagreed now agree. R drops. Confidence increases to acceptable levels.
                The final score incorporates both responses, weighted appropriately.
              </p>
            </div>

            {/* Persistent Uncertainty */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-3xl font-extrabold text-brand-orange">22%</p>
              <p className="mt-1 text-sm font-semibold text-brand-orange">uncertainty persists</p>
              <h3 className="mt-4 text-lg font-bold text-white">Persistent Uncertainty</h3>
              <p className="mt-2 text-sm text-gray-300">
                Sometimes the follow-up is also vague -- because there was nothing concrete to share.
                Persistent uncertainty is itself a signal. The report flags this dimension, notes lower
                confidence, and highlights specific concerns for subsequent rounds.
              </p>
            </div>

            {/* Multiple Follow-Ups */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-3xl font-extrabold text-brand-yellow">Up to 3</p>
              <p className="mt-1 text-sm font-semibold text-brand-yellow">per interview (default)</p>
              <h3 className="mt-4 text-lg font-bold text-white">Smart Allocation</h3>
              <p className="mt-2 text-sm text-gray-300">
                Follow-ups are prioritized by dimension weight (higher-weight first), degree of
                uncertainty (higher R first), and question order. The system allocates follow-ups
                where they&apos;ll have the most impact on overall evaluation confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CANDIDATE EXPERIENCE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The candidate experience</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            From the candidate&apos;s perspective, follow-up questions feel natural.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* How it appears */}
            <div>
              <h3 className="text-lg font-bold text-ink">How it appears</h3>
              <div className="mt-4 rounded-xl border border-gray-200 bg-paper-off p-6">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-4">
                    <p className="text-xs text-ink-muted">Candidate answers a question...</p>
                  </div>
                  <div className="rounded-lg bg-brand-yellow/5 border border-brand-yellow/20 p-4">
                    <p className="text-sm text-ink">
                      &ldquo;Thanks for that response. To help us better understand your experience,
                      please also address this follow-up:&rdquo;
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink">[Follow-up question appears]</p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <p className="text-xs text-ink-muted">Candidate responds, then continues to next question.</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-muted">
                Candidates don&apos;t know they triggered a follow-up because their first answer was ambiguous.
                From their perspective, some questions have follow-up components and some don&apos;t.
              </p>
            </div>

            {/* Candidate perception */}
            <div>
              <h3 className="text-lg font-bold text-ink">Candidate perception</h3>
              <p className="mt-2 text-sm text-ink-light">
                In post-interview surveys, candidates who received follow-up questions report:
              </p>
              <div className="mt-4 space-y-4">
                {[
                  { pct: '78%', label: 'found follow-ups "fair" or "very fair"', color: 'bg-brand-green' },
                  { pct: '81%', label: 'said follow-ups helped demonstrate their experience', color: 'bg-brand-green' },
                  { pct: '68%', label: 'preferred follow-up format to being scored on first answer alone', color: 'bg-brand-green' },
                  { pct: '12%', label: 'found follow-ups challenging or stressful', color: 'bg-brand-orange' },
                ].map((stat) => (
                  <div key={stat.pct} className="flex items-center gap-4">
                    <span className="w-14 shrink-0 text-right font-mono text-lg font-bold text-ink">{stat.pct}</span>
                    <div className="flex-1">
                      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                        <div className={`h-full rounded-full ${stat.color}`} style={{ width: stat.pct }} />
                      </div>
                      <p className="mt-1 text-sm text-ink-light">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-muted">
                The candidates who found follow-ups challenging often couldn&apos;t provide the requested
                specifics -- which frequently correlated with lower evaluation scores overall.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-brand-green/30 bg-brand-green/5 p-6">
            <h3 className="text-sm font-semibold text-ink">No penalty for receiving follow-ups</h3>
            <p className="mt-1 text-sm text-ink-light">
              We don&apos;t penalize candidates for receiving follow-ups. The final score reflects their best
              demonstrated competency across all responses. A candidate who gave a vague first answer but an
              excellent follow-up can still score very well -- they demonstrated the competency, just with prompting.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONFIGURING ADAPTIVE FOLLOW-UP ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Configuring adaptive follow-up</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            You control how aggressive or conservative follow-up behavior is.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* R Threshold */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">R Threshold</h3>
              <p className="mt-1 text-sm text-ink-muted">Default: 0.25</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-paper-off">
                      <th className="px-4 py-3 text-left font-semibold text-ink">Threshold</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink">Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3">
                        <span className="rounded-md bg-ink/5 px-2 py-1 font-mono text-xs text-ink">0.18 -- 0.22</span>
                      </td>
                      <td className="px-4 py-3 text-ink-light">Senior roles, high-stakes positions. More follow-ups. Higher final confidence.</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3">
                        <span className="rounded-md bg-ink/5 px-2 py-1 font-mono text-xs text-ink">0.25</span>
                      </td>
                      <td className="px-4 py-3 text-ink-light">Default. Good balance between signal quality and candidate experience.</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3">
                        <span className="rounded-md bg-ink/5 px-2 py-1 font-mono text-xs text-ink">0.28 -- 0.35</span>
                      </td>
                      <td className="px-4 py-3 text-ink-light">High-volume screening. Faster interviews. Some uncertainty in final scores.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Max Follow-Ups */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">Maximum follow-ups per interview</h3>
              <p className="mt-1 text-sm text-ink-muted">Default: 3 (configurable 1 -- 5)</p>
              <p className="mt-4 text-sm text-ink-light">
                Higher limits mean longer potential interviews but higher final confidence.
                Lower limits keep interviews predictable in length.
              </p>

              <h3 className="mt-8 text-lg font-bold text-ink">Question eligibility</h3>
              <div className="mt-4 space-y-2">
                {[
                  { type: 'Video questions', status: 'Eligible', default: 'On', color: 'text-brand-green' },
                  { type: 'Text questions', status: 'Eligible', default: 'On', color: 'text-brand-green' },
                  { type: 'MCQ questions', status: 'Not eligible', default: '--', color: 'text-ink-muted' },
                ].map((q) => (
                  <div key={q.type} className="flex items-center justify-between rounded-lg bg-paper-off px-4 py-2">
                    <span className="text-sm font-medium text-ink">{q.type}</span>
                    <span className={`text-sm font-semibold ${q.color}`}>{q.status} (default: {q.default})</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-bold text-ink">Follow-up style</h3>
              <div className="mt-4 space-y-2">
                {[
                  { style: 'Neutral (default)', example: '"Can you walk me through..."' },
                  { style: 'Direct', example: '"Please provide a specific example of..."' },
                  { style: 'Conversational', example: '"That\'s interesting -- tell me more about..."' },
                ].map((s) => (
                  <div key={s.style} className="rounded-lg bg-paper-off px-4 py-2">
                    <span className="text-sm font-semibold text-ink">{s.style}</span>
                    <span className="ml-2 text-sm italic text-ink-muted">{s.example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS FOR HIRING QUALITY ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Hiring Impact</p>
          <h2 className="mt-4 text-2xl font-bold">Why this matters for hiring quality</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Adaptive follow-up changes hiring outcomes in measurable ways.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-3xl font-extrabold text-brand-green">15%</p>
              <h3 className="mt-2 text-lg font-bold text-white">Reduced False Negatives</h3>
              <p className="mt-2 text-sm text-gray-300">
                Strong candidates sometimes give weak first responses -- nerves, unclear question
                interpretation, different communication norms. Without follow-up, they&apos;re scored on
                their worst moment. Approximately 15% of borderline candidates scored &ldquo;advance&rdquo;
                after follow-ups revealed stronger competency.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="text-3xl font-extrabold text-brand-red">8%</p>
              <h3 className="mt-2 text-lg font-bold text-white">Reduced False Positives</h3>
              <p className="mt-2 text-sm text-gray-300">
                Polished candidates give impressive-sounding but substance-free responses.
                Follow-up presses for specifics. &ldquo;Walk me through exactly what you did&rdquo;
                either surfaces real experience or exposes the gap. Approximately 8% of
                &ldquo;advance&rdquo; candidates dropped after follow-ups revealed thinner experience.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">More Confident Decisions</h3>
              <p className="mt-2 text-sm text-gray-300">
                Even when outcomes don&apos;t change, confidence increases. A candidate who advances
                after follow-up resolved uncertainty is a more confident hire. A rejected candidate
                after follow-up confirmed concerns is a more confident pass. Less second-guessing,
                fewer calibration debates, more decisive action.
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
              href="/product/confidence-scoring"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Confidence Scoring</h3>
              <p className="mt-2 text-sm text-ink-light">How confidence levels work and what they mean for decisions.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/product/structured-interviews"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Structured Interviews</h3>
              <p className="mt-2 text-sm text-ink-light">Question types and frameworks that feed into adaptive follow-up.</p>
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
              <p className="mt-2 text-sm text-ink-light">How follow-up responses appear in candidate reports.</p>
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
        title="See adaptive follow-up in action"
        description="Book a demo and watch exactly how uncertainty triggers follow-up questions. See the before and after -- how confidence improves when ambiguity gets resolved."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Download Technical Overview"
        secondaryCtaHref="/resources/whitepapers"
        variant="gradient"
      />
    </>
  );
}
