import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Adaptive Follow-Up Questions Reduce Hiring Variance | Interview Science | LayersRank',
  description:
    'When an interview response is ambiguous, follow-up questions resolve uncertainty. Here\'s the science behind adaptive interrogation and why it reduces mis-hires.',
  path: '/blog/adaptive-follow-up-questions',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Science of Adaptive Interrogation: How Follow-Up Questions Reduce Hiring Variance',
  description:
    'When an interview response is ambiguous, follow-up questions resolve uncertainty. Here\'s the science behind adaptive interrogation and why it reduces mis-hires.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'adaptive follow-up questions',
    'interview probing',
    'reduce hiring variance',
    'interview uncertainty',
    'clarifying interview questions',
  ],
};

export default function AdaptiveFollowUpQuestionsBlogPost() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <time dateTime="2026-02">February 2026</time>
            <span aria-hidden="true">&middot;</span>
            <span>5 min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>LayersRank Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            The Science of Adaptive Interrogation: How Follow-Up Questions Reduce Hiring Variance
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            A candidate gives an ambiguous answer. Most interviewers do one of two things: move on to the
            next question, or make a gut-feel judgment about what the candidate &ldquo;probably&rdquo; meant.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            Both are mistakes. Moving on discards information. Guessing introduces bias. There&rsquo;s a
            third option: a targeted, adaptive follow-up question that resolves the ambiguity directly.
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            This is adaptive interrogation&nbsp;&mdash; and it changes everything about interview reliability.
          </p>
        </div>
      </section>

      {/* ── WHY AMBIGUITY HAPPENS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Why Ambiguity Happens</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Ambiguous interview responses aren&rsquo;t random noise. They emerge from specific, identifiable
              causes. Understanding these causes is the first step to resolving them.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {/* Reason 1 */}
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Incomplete Articulation</h3>
              <p className="mt-2 text-sm text-ink-light">
                The candidate <em>knows</em> the answer but didn&rsquo;t fully express it. They understood
                the concept, started explaining, then moved on before completing the thought. The knowledge
                exists&nbsp;&mdash; the communication fell short.
              </p>
            </div>
            {/* Reason 2 */}
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Genuine Uncertainty</h3>
              <p className="mt-2 text-sm text-ink-light">
                The candidate has partial knowledge. They know enough to say something relevant but not
                enough to give a precise, confident answer. Their response reflects real ambiguity in their
                understanding.
              </p>
            </div>
            {/* Reason 3 */}
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Communication Style Mismatch</h3>
              <p className="mt-2 text-sm text-ink-light">
                The candidate answered well, but in a style the interviewer (or AI evaluator) didn&rsquo;t
                register. Concise answers can read as shallow. Verbose answers can obscure key points. The
                signal was there&nbsp;&mdash; it just didn&rsquo;t land.
              </p>
            </div>
            {/* Reason 4 */}
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Lucky Guess / Surface Knowledge</h3>
              <p className="mt-2 text-sm text-ink-light">
                The candidate pattern-matched their way to a plausible-sounding answer without real
                understanding. They said the right words but can&rsquo;t explain <em>why</em> those words
                are right. Surface fluency masking shallow depth.
              </p>
            </div>
            {/* Reason 5 */}
            <div className="col-span-full rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6 sm:col-span-2">
              <h3 className="text-lg font-bold text-ink">Intentional Vagueness</h3>
              <p className="mt-2 text-sm text-ink-light">
                The candidate is deliberately hiding a weakness. They give a broad, non-committal answer
                hoping the interviewer won&rsquo;t probe deeper. This is the hardest case to detect without
                follow-up&nbsp;&mdash; and the most important to catch.
              </p>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            Each of these causes produces the same symptom: an ambiguous response. But each requires a
            different resolution. A single follow-up question can often distinguish between all five.
          </p>
        </div>
      </section>

      {/* ── WHAT GOOD FOLLOW-UPS LOOK LIKE ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Good Follow-Ups Look Like</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Not all follow-ups are created equal. Bad follow-ups introduce more noise than they resolve.
              Good follow-ups target the specific ambiguity and extract usable signal.
            </p>
          </div>

          {/* Bad follow-ups */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-ink">Bad Follow-Ups</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-5">
                <p className="font-mono text-sm font-bold text-brand-red">&ldquo;Can you tell me more?&rdquo;</p>
                <p className="mt-2 text-sm text-ink-light">
                  Too vague. The candidate doesn&rsquo;t know what you want more of. They&rsquo;ll either
                  repeat themselves or ramble in a random direction. You learn nothing new.
                </p>
              </div>
              <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-5">
                <p className="font-mono text-sm font-bold text-brand-red">&ldquo;But what about edge case X?&rdquo;</p>
                <p className="mt-2 text-sm text-ink-light">
                  Leading. You&rsquo;re handing the candidate the answer by pointing them exactly where to
                  look. A strong candidate might have found that edge case themselves&nbsp;&mdash; now you&rsquo;ll
                  never know.
                </p>
              </div>
            </div>
          </div>

          {/* Good follow-ups */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-ink">Good Follow-Ups</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
                <p className="font-mono text-sm font-bold text-brand-green">
                  &ldquo;You mentioned [X]. Walk me through how you&rsquo;d handle [specific scenario].&rdquo;
                </p>
                <p className="mt-2 text-sm text-ink-light">
                  <strong className="text-ink">Targets ambiguity.</strong> References their actual answer and
                  asks them to apply it concretely. Reveals whether incomplete articulation or surface knowledge.
                </p>
              </div>
              <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
                <p className="font-mono text-sm font-bold text-brand-green">
                  &ldquo;You said you&rsquo;d start by [X]. What if that didn&rsquo;t work?&rdquo;
                </p>
                <p className="mt-2 text-sm text-ink-light">
                  <strong className="text-ink">Tests adaptability.</strong> Pushes beyond the rehearsed first
                  answer to see if the candidate can think on their feet. Separates deep knowledge from
                  memorized responses.
                </p>
              </div>
              <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
                <p className="font-mono text-sm font-bold text-brand-green">
                  &ldquo;What trade-offs did you consider?&rdquo;
                </p>
                <p className="mt-2 text-sm text-ink-light">
                  <strong className="text-ink">Probes depth.</strong> Anyone can state a solution. Understanding
                  what you gave up to get there is where real expertise shows. This question separates
                  practitioners from theorists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE VARIANCE REDUCTION MATH ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Variance Reduction Math</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Follow-ups aren&rsquo;t just &ldquo;nice to have.&rdquo; They produce measurable,
              quantifiable reductions in hiring error. Here&rsquo;s how the math works.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Without follow-up */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Without Follow-Up</h3>
              <div className="mt-4 space-y-2 font-mono text-sm text-ink-light">
                <p><strong className="text-ink">20%</strong> of responses are ambiguous</p>
                <p><strong className="text-ink">50%</strong> coin-flip judgment on each</p>
                <p><strong className="text-ink">= 10%</strong> arbitrary decisions</p>
                <p className="border-t border-brand-red/20 pt-2 font-bold text-brand-red">
                  &asymp; 5% error rate from ambiguity alone
                </p>
              </div>
            </div>
            {/* With follow-up */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">With Adaptive Follow-Up</h3>
              <div className="mt-4 space-y-2 font-mono text-sm text-ink-light">
                <p><strong className="text-ink">20%</strong> of responses are ambiguous</p>
                <p><strong className="text-ink">80%</strong> clarified by follow-up</p>
                <p><strong className="text-ink">= 4%</strong> remain unresolved</p>
                <p className="border-t border-brand-green/20 pt-2 font-bold text-brand-green">
                  &asymp; 2% error rate&nbsp;&mdash; a 60% reduction
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-base font-semibold text-ink md:text-lg">
            A 60% reduction in ambiguity-driven errors. From one follow-up question per ambiguous response.
          </p>
        </div>
      </section>

      {/* ── WHEN TO TRIGGER FOLLOW-UPS ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">When to Trigger Follow-Ups</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Human interviewers often miss ambiguity in real time. They&rsquo;re focused on the next
              question, managing the conversation flow, or simply don&rsquo;t register that a response was
              unclear until they review notes later.
            </p>
            <p className="font-medium text-ink">
              AI can detect ambiguity as it happens. Here&rsquo;s what triggers a follow-up:
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">Response Length Anomalies</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Unusually short or unusually long answers for the question type. A two-sentence answer to a
                  system design question, or a rambling five-paragraph answer to a yes/no question, both
                  signal potential ambiguity.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Missing Key Concepts</h3>
                <p className="mt-1 text-sm text-ink-light">
                  The response touches the topic but doesn&rsquo;t address expected core concepts. The
                  candidate talked about caching but never mentioned invalidation. Did they forget or do they
                  not know?
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">High Inter-Model Variance</h3>
                <p className="mt-1 text-sm text-ink-light">
                  When multiple evaluation models disagree on the quality of a response, the response itself
                  is likely ambiguous. If one model scores it 85 and another scores it 55, that disagreement
                  is information.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Confidence Below Threshold</h3>
                <p className="mt-1 text-sm text-ink-light">
                  The aggregate confidence score falls below a set threshold. LayersRank triggers automatically
                  when the residual uncertainty exceeds <span className="font-mono font-bold text-ink">R &gt; 0.25</span>.
                  This happens in roughly 15&ndash;25% of responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TYPES OF ADAPTIVE FOLLOW-UPS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Types of Adaptive Follow-Ups</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Not every ambiguous response needs the same kind of follow-up. The type of ambiguity
              determines the type of probe.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Depth Probe</h3>
              <p className="mt-1 text-sm font-medium text-brand-orange">Trigger: Response too brief</p>
              <p className="mt-2 text-sm text-ink-light">
                The candidate gave a correct but shallow answer. The follow-up asks for a specific example,
                implementation detail, or real-world scenario they&rsquo;ve encountered. Separates people
                who&rsquo;ve done it from people who&rsquo;ve read about it.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Clarity Probe</h3>
              <p className="mt-1 text-sm font-medium text-brand-orange">Trigger: Response confusing or contradictory</p>
              <p className="mt-2 text-sm text-ink-light">
                The candidate said something that could be interpreted multiple ways, or contradicted
                themselves. The follow-up asks them to rephrase or clarify a specific point. Often reveals
                communication style mismatch rather than lack of knowledge.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Application Probe</h3>
              <p className="mt-1 text-sm font-medium text-brand-orange">Trigger: Response purely theoretical</p>
              <p className="mt-2 text-sm text-ink-light">
                The candidate explained the concept perfectly but didn&rsquo;t demonstrate practical
                application. The follow-up presents a concrete scenario and asks how they&rsquo;d apply
                their knowledge. Tests transfer from theory to practice.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Robustness Probe</h3>
              <p className="mt-1 text-sm font-medium text-brand-orange">Trigger: Response covers only one case</p>
              <p className="mt-2 text-sm text-ink-light">
                The candidate gave a valid answer for a specific scenario but didn&rsquo;t address
                alternatives. The follow-up introduces a different scenario or constraint. Tests whether
                their knowledge generalizes or is narrow.
              </p>
            </div>
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Reasoning Probe</h3>
              <p className="mt-1 text-sm font-medium text-brand-orange">Trigger: Conclusions without premises</p>
              <p className="mt-2 text-sm text-ink-light">
                The candidate jumped to the right answer without explaining how they got there. The
                follow-up asks about their reasoning process, the trade-offs they weighed, or why they
                rejected alternatives. Reveals whether the answer was derived or memorized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CANDIDATE EXPERIENCE ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Candidate Experience</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              A common concern: don&rsquo;t follow-ups make candidates feel interrogated? The opposite is
              true&nbsp;&mdash; when done right, follow-ups <em>improve</em> the candidate experience.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="font-bold text-ink">Candidates Appreciate Fairness</h3>
              <p className="mt-2 text-sm text-ink-light">
                Being asked to clarify feels fairer than being silently judged on an unclear answer.
                Candidates report higher satisfaction when they feel the process gave them a genuine
                chance to demonstrate their abilities.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="font-bold text-ink">Strong Candidates Shine</h3>
              <p className="mt-2 text-sm text-ink-light">
                Follow-ups are an opportunity for strong candidates to differentiate themselves. When asked
                to go deeper, candidates with real expertise light up&nbsp;&mdash; it&rsquo;s a chance to
                show what they actually know.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="font-bold text-ink">Weaker Candidates Get Clarity</h3>
              <p className="mt-2 text-sm text-ink-light">
                Even candidates who don&rsquo;t perform well prefer knowing they were evaluated thoroughly.
                &ldquo;I got a fair shot&rdquo; is a better outcome than &ldquo;I wasn&rsquo;t sure what they
                were looking for.&rdquo;
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="font-bold text-ink">Signals Interviewer Competence</h3>
              <p className="mt-2 text-sm text-ink-light">
                Thoughtful follow-ups signal that the interviewer (or system) is actually listening and
                engaged. Candidates form opinions about companies through interviews&nbsp;&mdash; showing
                rigor builds employer brand.
              </p>
            </div>
          </div>

          <p className="mt-6 font-medium text-ink">
            The key: follow-ups must come from genuine curiosity, not skepticism. &ldquo;Help me understand
            your thinking&rdquo;&nbsp;&mdash; not &ldquo;prove you&rsquo;re not lying.&rdquo;
          </p>
        </div>
      </section>

      {/* ── IMPLEMENTING ADAPTIVE FOLLOW-UPS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Implementing Adaptive Follow-Ups</h2>

          <div className="mt-10 space-y-10">
            {/* For Humans */}
            <div className="border-l-4 border-brand-blue pl-6">
              <h3 className="text-lg font-bold text-ink">For Human Interviewers</h3>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-ink">Train to notice ambiguity.</strong> Most interviewers are
                    trained on what questions to ask, not on how to recognize unclear answers. Teach them to
                    flag the five types of ambiguity.
                  </li>
                  <li>
                    <strong className="text-ink">Provide follow-up prompt libraries.</strong> Give interviewers
                    pre-written follow-ups for common ambiguity patterns. Don&rsquo;t force them to improvise
                    in real time.
                  </li>
                  <li>
                    <strong className="text-ink">Build in time.</strong> If your interviews are packed
                    question-to-question with no slack, there&rsquo;s no room for follow-ups. Budget
                    15&ndash;20% of interview time for probing.
                  </li>
                  <li>
                    <strong className="text-ink">Include follow-up quality in interviewer feedback.</strong> Track
                    which interviewers probe effectively and which skip past ambiguity. Make it part of
                    interviewer calibration.
                  </li>
                </ul>
              </div>
            </div>

            {/* For AI */}
            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">For AI-Driven Interviews</h3>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-ink">Set confidence thresholds.</strong> Define a clear threshold
                    (e.g., <span className="font-mono">R &gt; 0.25</span>) that automatically triggers
                    follow-up questions when the system isn&rsquo;t confident in its evaluation.
                  </li>
                  <li>
                    <strong className="text-ink">Generate contextual follow-ups.</strong> The follow-up
                    question must reference the candidate&rsquo;s actual response, not be a generic probe.
                    Template-based follow-ups are better than nothing, but contextual ones are far superior.
                  </li>
                  <li>
                    <strong className="text-ink">Re-evaluate with both responses.</strong> After the
                    follow-up, score the original and follow-up answers together as a unit. Don&rsquo;t treat
                    them as separate questions.
                  </li>
                  <li>
                    <strong className="text-ink">Track score changes.</strong> Monitor how often follow-ups
                    change the candidate&rsquo;s score, and in which direction. This data tells you whether
                    your follow-ups are actually resolving ambiguity or just adding noise.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEASURING IMPACT ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Measuring Impact</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              You can&rsquo;t improve what you don&rsquo;t measure. Here are the five metrics that tell
              you whether your adaptive follow-ups are working.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-ink">Follow-Up Rate</h3>
                <span className="shrink-0 rounded-full bg-ink px-3 py-1 font-mono text-xs font-bold text-white">
                  Target: 15&ndash;25%
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-light">
                The percentage of responses that trigger a follow-up. Too low means you&rsquo;re missing
                ambiguity. Too high means your primary questions aren&rsquo;t clear enough or your threshold
                is too sensitive.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-ink">Confidence Change</h3>
                <span className="shrink-0 rounded-full bg-ink px-3 py-1 font-mono text-xs font-bold text-white">
                  Target: +20 pts
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-light">
                How much confidence increases after the follow-up. If follow-ups don&rsquo;t meaningfully
                increase confidence, they&rsquo;re not resolving ambiguity&nbsp;&mdash; they&rsquo;re just
                adding interview time.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-ink">Score Change</h3>
                <span className="shrink-0 rounded-full bg-ink px-3 py-1 font-mono text-xs font-bold text-white">
                  Target: 30&ndash;40%
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-light">
                The percentage of follow-ups that change the candidate&rsquo;s score by a meaningful amount.
                If scores never change, your follow-ups may be confirming rather than probing. Target
                30&ndash;40% of follow-ups producing a score shift.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-ink">Direction of Change</h3>
                <span className="shrink-0 rounded-full bg-ink px-3 py-1 font-mono text-xs font-bold text-white">
                  Should be balanced
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-light">
                When scores change after follow-up, do they go up as often as they go down? If follow-ups
                almost always decrease scores, your system may have a skepticism bias. If they almost always
                increase scores, it may have a generosity bias. Balance signals objectivity.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-ink">Final Outcome Correlation</h3>
                <span className="shrink-0 rounded-full bg-ink px-3 py-1 font-mono text-xs font-bold text-white">
                  Should be similar
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-light">
                Do candidates who received follow-ups perform similarly on the job to those who didn&rsquo;t?
                If follow-up candidates systematically underperform or overperform, the follow-up process
                itself may be introducing bias rather than eliminating it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE BOTTOM LINE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Bottom Line</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Ambiguous responses aren&rsquo;t noise to be ignored. They&rsquo;re information to be
              investigated. Every ambiguous answer that goes unprobed is a coin flip in your hiring
              process&nbsp;&mdash; and coin flips compound.
            </p>
            <p>
              The right response to &ldquo;not sure&rdquo; is never to guess. It&rsquo;s to ask a better
              question. Adaptive follow-ups transform uncertainty into clarity without meaningfully
              increasing interview duration.
            </p>
            <p className="text-base font-semibold text-ink md:text-lg">
              Stop guessing. Start asking. Your hiring variance will thank you.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/resources/sample-report"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-center font-semibold text-ink hover:bg-brand-orange"
            >
              View Sample Report
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border border-ink px-6 py-3 text-center font-medium text-ink hover:bg-ink hover:text-white"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED READING ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-ink">Related reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/confidence-intervals-matter', label: 'Confidence Intervals', desc: 'Why confidence levels matter more than raw scores' },
              { href: '/product/adaptive-questioning', label: 'Adaptive Questioning', desc: 'How LayersRank triggers follow-ups automatically' },
              { href: '/blog/reduce-interviewer-bias-india', label: 'Reduce Bias', desc: 'Eliminating interviewer bias from your hiring process' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-ink">{link.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
