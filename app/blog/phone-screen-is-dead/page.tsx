import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'The Phone Screen Is Dead | Async Structured Interviews Replace Phone Screens | LayersRank',
  description:
    'Phone screens cost 45-60 minutes of interviewer time per candidate. Async structured interviews do the same job faster, cheaper, and more consistently.',
  path: '/blog/phone-screen-is-dead',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Phone Screen Is Dead. Here\u2019s What Replaces It.',
  description:
    'Phone screens cost 45-60 minutes of interviewer time per candidate. Async structured interviews do the same job faster, cheaper, and more consistently.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'replace phone screens',
    'phone screen alternative',
    'async interviews',
    'structured interview screening',
    'reduce interviewer time',
  ],
};

export default function PhoneScreenIsDeadBlogPost() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <time dateTime="2026-02">February 2026</time>
            <span aria-hidden="true">&middot;</span>
            <span>7 min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>LayersRank Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            The Phone Screen Is Dead. Here&rsquo;s What Replaces It.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            The phone screen is a relic. It was invented when we had no other way to quickly assess candidates
            without flying them in. It persists because &ldquo;that&rsquo;s how we&rsquo;ve always done
            it.&rdquo;
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            But phone screens are terrible&nbsp;&mdash; expensive, inconsistent, slow, and unreliable signal.
            There&rsquo;s a better way, and the companies that adopt it first will hire the best people while
            everyone else is still playing calendar Tetris.
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            It&rsquo;s time to stop screening the way we did in 1995.
          </p>
        </div>
      </section>

      {/* ── THE TRUE COST OF PHONE SCREENS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The True Cost of Phone Screens</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Most hiring managers dramatically underestimate how much phone screens actually cost. They think
              &ldquo;it&rsquo;s just a quick 30-minute call.&rdquo; It&rsquo;s never just 30&nbsp;minutes.
            </p>
            <p className="font-medium text-ink">Here&rsquo;s the real time breakdown for a single phone screen:</p>
          </div>

          {/* cost breakdown card */}
          <div className="mt-8 rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
            <h3 className="text-lg font-bold text-ink">Direct Costs Per Screen</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between border-b border-brand-red/10 pb-2">
                <span className="text-sm text-ink-light">Interviewer time (actual call)</span>
                <span className="font-mono text-sm font-bold text-ink">45 min</span>
              </div>
              <div className="flex items-center justify-between border-b border-brand-red/10 pb-2">
                <span className="text-sm text-ink-light">Post-screen documentation</span>
                <span className="font-mono text-sm font-bold text-ink">15 min</span>
              </div>
              <div className="flex items-center justify-between border-b border-brand-red/10 pb-2">
                <span className="text-sm text-ink-light">Scheduling overhead</span>
                <span className="font-mono text-sm font-bold text-ink">15 min</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-semibold text-ink">Total per candidate</span>
                <span className="font-mono text-sm font-bold text-brand-red">75 min</span>
              </div>
            </div>
          </div>

          {/* monthly impact card */}
          <div className="mt-6 rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
            <h3 className="text-lg font-bold text-ink">
              Monthly Impact <span className="text-ink-muted">(30 screens/month)</span>
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="text-center">
                <p className="font-mono text-2xl font-bold text-brand-red">&pound;56,250</p>
                <p className="mt-1 text-xs text-ink-muted">Interviewer time cost</p>
                <p className="text-xs text-ink-muted">(at &pound;1,500/hour)</p>
              </div>
              <div className="text-center">
                <p className="font-mono text-2xl font-bold text-brand-orange">~40 hrs</p>
                <p className="mt-1 text-xs text-ink-muted">Calendar blocked</p>
              </div>
              <div className="text-center">
                <p className="font-mono text-2xl font-bold text-brand-red">2&ndash;3 wks</p>
                <p className="mt-1 text-xs text-ink-muted">Elapsed time</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p className="font-medium text-ink">And that&rsquo;s just the visible cost. The hidden costs are worse:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-ink">Engineering productivity lost</strong> &mdash; context-switching between
                coding and interviewing destroys deep work
              </li>
              <li>
                <strong className="text-ink">Candidate experience degraded</strong> &mdash; scheduling delays signal
                a slow, bureaucratic company
              </li>
              <li>
                <strong className="text-ink">Inconsistent decisions</strong> &mdash; different interviewers evaluate
                the same candidate differently
              </li>
              <li>
                <strong className="text-ink">Missed candidates</strong> &mdash; top talent accepts other offers while
                you&rsquo;re scheduling
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHY PHONE SCREENS ARE INCONSISTENT ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Why Phone Screens Are Inconsistent</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Research consistently shows{' '}
              <strong className="font-mono text-brand-red">15&ndash;25% variance</strong> between interviewers
              evaluating the same candidate. One interviewer says &ldquo;strong hire,&rdquo; another says
              &ldquo;pass.&rdquo; Same person. Same role.
            </p>
            <p className="font-medium text-ink">The outcome depends on factors that have nothing to do with the candidate:</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-5">
              <h3 className="font-bold text-ink">Interviewer mood &amp; energy</h3>
              <p className="mt-2 text-sm text-ink-light">
                Monday morning vs. Friday afternoon. Before lunch vs. after. These
                shouldn&rsquo;t affect hiring decisions, but they do.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-5">
              <h3 className="font-bold text-ink">Similarity bias</h3>
              <p className="mt-2 text-sm text-ink-light">
                Interviewers rate candidates who remind them of themselves more favorably. Same university,
                same accent, same hobbies&nbsp;&mdash; instant rapport, higher scores.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-5">
              <h3 className="font-bold text-ink">Recent comparison effect</h3>
              <p className="mt-2 text-sm text-ink-light">
                A decent candidate looks great after two weak ones. The same candidate looks weak after
                a strong one. Evaluation is relative, not absolute.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-5">
              <h3 className="font-bold text-ink">Question selection</h3>
              <p className="mt-2 text-sm text-ink-light">
                Different interviewers ask different questions. Without a structured protocol, you&rsquo;re
                comparing answers to different tests.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-5 sm:col-span-2">
              <h3 className="font-bold text-ink">Note-taking quality</h3>
              <p className="mt-2 text-sm text-ink-light">
                Some interviewers take detailed notes. Others rely on memory. Post-interview recollection
                is heavily influenced by the last few minutes of the conversation, not the full picture.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base font-semibold text-ink">
            You&rsquo;re measuring the interaction, not the candidate&rsquo;s quality.
          </p>
        </div>
      </section>

      {/* ── THE ALTERNATIVE: ASYNC STRUCTURED INTERVIEWS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            The Alternative: Async Structured Interviews
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Instead of blocking an interviewer&rsquo;s calendar, send candidates a structured assessment they
              complete on their own time. The process is simple:
            </p>
          </div>

          {/* 5-step flow */}
          <div className="mt-8 space-y-4">
            {[
              { step: '1', title: 'Send link', desc: 'Candidate receives an assessment link via email or ATS' },
              { step: '2', title: 'Candidate responds', desc: 'They answer structured questions on their own schedule, at their own pace' },
              { step: '3', title: 'AI evaluation', desc: 'Multiple evaluation models independently score each response' },
              { step: '4', title: 'Report generated', desc: 'Complete assessment with scores, confidence intervals, and evidence' },
              { step: '5', title: 'Decision made', desc: 'Hiring team reviews structured data and decides in minutes, not days' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* comparison table */}
          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="px-4 py-3 font-semibold text-ink">Dimension</th>
                  <th className="px-4 py-3 font-semibold text-brand-red">Phone Screen</th>
                  <th className="px-4 py-3 font-semibold text-brand-green">Async Structured</th>
                </tr>
              </thead>
              <tbody className="text-ink-light">
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-ink">Interviewer time</td>
                  <td className="px-4 py-3 font-mono">45&ndash;60 min</td>
                  <td className="px-4 py-3 font-mono text-brand-green">10 min</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-ink">Scheduling time</td>
                  <td className="px-4 py-3 font-mono">2&ndash;3 weeks</td>
                  <td className="px-4 py-3 font-mono text-brand-green">3&ndash;5 days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-ink">Interviewer variance</td>
                  <td className="px-4 py-3 font-mono">15&ndash;25%</td>
                  <td className="px-4 py-3 font-mono text-brand-green">&lt;5%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-ink">Documentation</td>
                  <td className="px-4 py-3">Sparse or none</td>
                  <td className="px-4 py-3 text-brand-green">Complete &amp; automatic</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-ink">Evaluation</td>
                  <td className="px-4 py-3">One interviewer</td>
                  <td className="px-4 py-3 text-brand-green">Multi-model consensus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── "BUT CANDIDATES WANT TO TALK TO A HUMAN" ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            &ldquo;But Candidates Want to Talk to a Human&rdquo;
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              This is the most common objection. And it&rsquo;s based on a false assumption&nbsp;&mdash; that
              candidates <em>enjoy</em> phone screens. They don&rsquo;t.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* What candidates dislike */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                What candidates <span className="text-brand-red">dislike</span> about phone screens
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-red">&times;</span>
                  <span>Scheduling around their current job without getting caught</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-red">&times;</span>
                  <span>Time pressure&nbsp;&mdash; answering complex questions on the spot</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-red">&times;</span>
                  <span>Bad-day interviewers who seem disengaged or rushed</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-red">&times;</span>
                  <span>No control over the conversation flow</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-red">&times;</span>
                  <span>Unknown evaluation criteria&nbsp;&mdash; what are they even looking for?</span>
                </li>
              </ul>
            </div>

            {/* What candidates prefer */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                What candidates <span className="text-brand-green">prefer</span> about async
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-green">&#10003;</span>
                  <span>Complete it on their own schedule&nbsp;&mdash; evenings, weekends, whenever</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-green">&#10003;</span>
                  <span>Time to think through answers and give their best response</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-green">&#10003;</span>
                  <span>No scheduling hassles or awkward &ldquo;dentist appointment&rdquo; excuses</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-green">&#10003;</span>
                  <span>Known questions&nbsp;&mdash; they know exactly what&rsquo;s being evaluated</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-brand-green">&#10003;</span>
                  <span>Fair evaluation&nbsp;&mdash; everyone gets the same questions and rubric</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
            <p className="text-[15px] leading-relaxed text-ink-light md:text-base">
              <strong className="text-ink">Here&rsquo;s the uncomfortable truth:</strong> candidates who strongly
              prefer live phone calls are often good at &ldquo;performing&rdquo;&nbsp;&mdash; building rapport,
              reading social cues, steering conversations. These are real skills, but they may not correlate
              with job performance. You&rsquo;re selecting for interview skill, not work skill.
            </p>
          </div>
        </div>
      </section>

      {/* ── "AI CAN'T EVALUATE AS WELL AS HUMANS" ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            &ldquo;AI Can&rsquo;t Evaluate As Well As Humans&rdquo;
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              For final-round, nuanced evaluation of senior candidates? Maybe. For first-round screening?
              This objection is backwards.
            </p>
            <p>
              The question isn&rsquo;t whether AI evaluation is perfect. It&rsquo;s whether it&rsquo;s better
              than what phone screens actually deliver.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">AI evaluates more consistently</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                The same response, evaluated by the same models, gets the same score every time. No mood
                effects. No similarity bias. No Friday-afternoon fatigue.
              </p>
            </div>

            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Not perfect, but improvable</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                When AI makes an error, you can identify the pattern and fix it across all future evaluations.
                When a human interviewer has a blind spot, it persists until someone notices&nbsp;&mdash; which
                is rarely.
              </p>
            </div>

            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">Deploy human judgment where it matters</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Expensive human judgment belongs in final rounds where nuance, culture contribution, and
                team dynamics matter. Using it for first-round filtering is like using a surgeon to take
                blood pressure readings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── "WHAT ABOUT CULTURE FIT?" ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            &ldquo;What About Culture Fit?&rdquo;
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              &ldquo;Culture fit&rdquo; in phone screens usually means &ldquo;do I like this
              person?&rdquo;&nbsp;&mdash; which selects for similarity, not shared values. This is one of the
              biggest drivers of homogeneous teams and hurts diversity.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="font-bold text-ink">If culture fit means shared values&hellip;</h3>
              <p className="mt-2 text-sm text-ink-light">
                Behavioral questions assess this better than vibes on a phone call. &ldquo;Tell me about a time
                you prioritized team success over personal recognition&rdquo; reveals values. A pleasant
                30-minute chat does not.
              </p>
            </div>

            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="font-bold text-ink">If culture fit means similarity&hellip;</h3>
              <p className="mt-2 text-sm text-ink-light">
                Stop filtering on that. Seriously. Research consistently shows that diverse teams outperform
                homogeneous ones. &ldquo;Culture fit&rdquo; as a phone screen criterion is how you build a team
                that all thinks the same way and misses the same blind spots.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-ink">Structured assessment evaluates what matters</h3>
              <p className="mt-2 text-sm text-ink-light">
                Job-relevant competencies. Problem-solving approaches. Communication quality. Collaboration
                instincts. These are the things that actually predict on-the-job success&nbsp;&mdash; and
                they&rsquo;re all measurable through structured questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE IMPLEMENTATION PATH ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Implementation Path</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              You don&rsquo;t have to switch overnight. Here&rsquo;s a proven rollout plan:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Week 1-2 */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-brand-orange">Week 1&ndash;2</span>
                <h3 className="text-lg font-bold text-ink">Setup</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li>Configure assessment questions for your open roles</li>
                <li>Define evaluation rubrics aligned with job requirements</li>
                <li>Set up integration with your ATS</li>
                <li>Brief hiring managers on how to read structured reports</li>
              </ul>
            </div>

            {/* Week 3-4 */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-brand-orange">Week 3&ndash;4</span>
                <h3 className="text-lg font-bold text-ink">Parallel Run</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li>Run async assessments alongside existing phone screens</li>
                <li>Compare outcomes&nbsp;&mdash; where do they agree? Where do they differ?</li>
                <li>Track which method better predicts final-round success</li>
                <li>Gather candidate feedback on both experiences</li>
              </ul>
            </div>

            {/* Week 5+ */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-brand-green">Week 5+</span>
                <h3 className="text-lg font-bold text-ink">Full Transition</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-light">
                <li>Replace phone screens with async structured assessments</li>
                <li>Redirect interviewer time to final rounds and closing candidates</li>
                <li>Monitor metrics: time-to-decision, candidate satisfaction, offer acceptance</li>
                <li>Iterate on questions and rubrics based on hire performance data</li>
              </ul>
            </div>
          </div>

          {/* Common concerns */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-ink">Common Concerns</h3>
            <div className="mt-4 space-y-4">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  ?
                </span>
                <div>
                  <h4 className="font-bold text-ink">&ldquo;What if candidates have questions?&rdquo;</h4>
                  <p className="mt-1 text-sm text-ink-light">
                    Include a detailed FAQ with the assessment link. For candidates who still want to talk,
                    offer an optional 10-minute recruiter call. Most won&rsquo;t need it.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  ?
                </span>
                <div>
                  <h4 className="font-bold text-ink">&ldquo;What about sales roles that need verbal skills?&rdquo;</h4>
                  <p className="mt-1 text-sm text-ink-light">
                    Add a live conversation component in final rounds where verbal fluency actually matters. But
                    first-round screening&nbsp;&mdash; checking domain knowledge, problem-solving approach,
                    cultural alignment&nbsp;&mdash; doesn&rsquo;t need a live call.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  ?
                </span>
                <div>
                  <h4 className="font-bold text-ink">&ldquo;Won&rsquo;t we miss good candidates?&rdquo;</h4>
                  <p className="mt-1 text-sm text-ink-light">
                    You&rsquo;re already missing them. Phone screen variance means 15&ndash;25% of your
                    decisions are essentially random. Structured assessments reduce that to under 5%. You&rsquo;ll
                    miss <em>fewer</em> candidates, not more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE COMPETITIVE ADVANTAGE ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Competitive Advantage</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              While you take <strong className="font-mono text-brand-red">2&ndash;3 weeks</strong> to schedule
              and complete phone screens, your competitors are making offers in{' '}
              <strong className="font-mono text-brand-green">5&nbsp;days</strong>.
            </p>
            <p>
              Speed wins in a candidate-driven market. Every day of delay is another chance for a competing
              offer to land. The best candidates&nbsp;&mdash; the ones you most want&nbsp;&mdash; have the most
              options and the shortest patience.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="font-mono text-lg font-bold text-brand-red">Your Process (Today)</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li>Day 1&ndash;5: Schedule phone screen</li>
                <li>Day 6&ndash;8: Conduct phone screen</li>
                <li>Day 9&ndash;12: Debrief &amp; decide</li>
                <li>Day 13&ndash;18: Schedule final round</li>
                <li>Day 19+: Make offer</li>
              </ul>
              <p className="mt-3 font-mono text-sm font-bold text-brand-red">Total: 19+ days</p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="font-mono text-lg font-bold text-brand-green">With Async Screening</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li>Day 1: Send assessment</li>
                <li>Day 2&ndash;3: Candidate completes</li>
                <li>Day 3: Report &amp; decision</li>
                <li>Day 4&ndash;5: Final round</li>
                <li>Day 5: Make offer</li>
              </ul>
              <p className="mt-3 font-mono text-sm font-bold text-brand-green">Total: 5 days</p>
            </div>
          </div>

          <p className="mt-8 text-base font-semibold text-ink">
            That&rsquo;s not a marginal improvement. That&rsquo;s a{' '}
            <span className="font-mono text-brand-green">14-day</span> head start on every hire.
          </p>
        </div>
      </section>

      {/* ── THE BOTTOM LINE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Bottom Line</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Replacing phone screens with async structured interviews isn&rsquo;t a minor process tweak.
              It&rsquo;s a fundamental upgrade to how you identify talent.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5 text-center">
              <p className="font-mono text-2xl font-bold text-brand-green">80%</p>
              <p className="mt-1 text-sm text-ink-muted">Reduction in interviewer time</p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5 text-center">
              <p className="font-mono text-2xl font-bold text-brand-green">70%</p>
              <p className="mt-1 text-sm text-ink-muted">Faster time-to-decision</p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5 text-center">
              <p className="font-mono text-2xl font-bold text-brand-green">&lt;5%</p>
              <p className="mt-1 text-sm text-ink-muted">Evaluator variance</p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5 text-center">
              <p className="font-mono text-2xl font-bold text-brand-green">&uarr;</p>
              <p className="mt-1 text-sm text-ink-muted">Better candidate experience</p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5 text-center sm:col-span-2 lg:col-span-2">
              <p className="font-mono text-2xl font-bold text-brand-green">100%</p>
              <p className="mt-1 text-sm text-ink-muted">Complete audit trails on every decision</p>
            </div>
          </div>

          <p className="mt-8 text-base font-semibold text-ink md:text-lg">
            The phone screen had its time. That time is over. The companies that move first will hire the best
            people while everyone else is still waiting for calendar invites to be accepted.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/resources/roi-calculator"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-center font-semibold text-ink hover:bg-brand-orange"
            >
              Calculate Your Time Savings
            </Link>
            <Link
              href="/resources/sample-report"
              className="rounded-lg border border-ink px-6 py-3 text-center font-medium text-ink hover:bg-ink hover:text-white"
            >
              See Structured Assessment
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
              { href: '/product/async-interviews', label: 'Async Interviews', desc: 'How async structured interviews work end-to-end' },
              { href: '/blog/confidence-intervals-matter', label: 'Confidence Intervals', desc: 'Why confidence levels change hiring decisions' },
              { href: '/blog/reduce-interviewer-bias-india', label: 'Reducing Panel Bias', desc: 'Eliminating inconsistency from interview panels' },
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
