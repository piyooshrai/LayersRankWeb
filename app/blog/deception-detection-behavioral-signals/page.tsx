import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Candidate Deception Detection | Behavioral Signals in Interviews | LayersRank',
  description:
    'Copy-paste events, tab switches, typing patterns — behavioral signals reveal candidate integrity. Here\'s the science behind algorithmic deception detection.',
  path: '/blog/deception-detection-behavioral-signals',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Algorithmic Deception Detection: How Behavioral Signals Reveal Candidate Integrity',
  description:
    'Copy-paste events, tab switches, typing patterns — behavioral signals reveal candidate integrity. Here\'s the science behind algorithmic deception detection.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'candidate deception detection',
    'interview integrity',
    'behavioral signals hiring',
    'detect cheating interview',
    'candidate authenticity',
  ],
};

export default function DeceptionDetectionBlogPost() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <time dateTime="2026-02">February 2026</time>
            <span aria-hidden="true">&middot;</span>
            <span>6 min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>LayersRank Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Algorithmic Deception Detection: How Behavioral Signals Reveal Candidate Integrity
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            Your best candidate just submitted their assessment. Clear answers, solid depth, impressive
            vocabulary. On paper, a strong hire.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            But the behavioral data tells a different story:{' '}
            <strong className="font-mono text-white">47&nbsp;paste events</strong>,{' '}
            <strong className="font-mono text-white">800&nbsp;WPM typing speed</strong>, and{' '}
            <strong className="font-mono text-white">23&nbsp;tab switches</strong>.
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            They didn&rsquo;t write those answers.
          </p>
        </div>
      </section>

      {/* ── THE INTEGRITY PROBLEM ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Integrity Problem</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Remote and async interviews created something traditional hiring never had to deal
              with: an <strong className="text-ink">integrity gap</strong>. When candidates complete
              assessments from home, on their own devices, with the entire internet at their
              fingertips, the temptation is real.
            </p>
            <p>
              Research suggests{' '}
              <strong className="font-mono text-brand-red">30&ndash;50% of remote assessments</strong>{' '}
              involve some form of external assistance&nbsp;&mdash; from casual Googling to
              full-on AI-generated answers pasted directly into the text field.
            </p>
            <p className="font-medium text-ink">
              The question isn&rsquo;t whether cheating happens. It&rsquo;s whether you detect it.
            </p>
          </div>
        </div>
      </section>

      {/* ── BEHAVIORAL SIGNALS THAT MATTER ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Behavioral Signals That Matter</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            Every interaction with an assessment generates behavioral data. Four signal types carry
            the most weight:
          </p>

          <div className="mt-8 space-y-6">
            {/* Signal 1: Keystroke Dynamics */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">1. Keystroke Dynamics</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Genuine typing has rhythm&nbsp;&mdash; bursts of speed, pauses for thought, backspaces
                and corrections. Copy-paste has none.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-sm font-bold text-ink">WPM</span>
                  <p className="text-sm text-ink-light">
                    <strong className="font-mono text-brand-green">40&ndash;80 WPM</strong> = genuine
                    typing range. <strong className="font-mono text-brand-red">&gt;150 WPM</strong> =
                    impossible without external help.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-sm font-bold text-ink">IKI</span>
                  <p className="text-sm text-ink-light">
                    Inter-keystroke intervals:{' '}
                    <strong className="text-brand-green">variable</strong> = genuine (humans think
                    unevenly). <strong className="text-brand-red">Uniform</strong> = automated or
                    pasted.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-sm font-bold text-ink">Errors</span>
                  <p className="text-sm text-ink-light">
                    Humans make typos. They backspace, retype, restructure sentences mid-thought.
                    Perfect text with zero corrections is suspicious.
                  </p>
                </div>
              </div>
            </div>

            {/* Signal 2: Paste Events */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">2. Paste Events</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Every <span className="font-mono text-sm">Ctrl+V</span> is logged. But not all paste
                events are cheating&nbsp;&mdash; context matters:
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-brand-green">&#10003;</span>
                  <span className="text-sm text-ink-light">
                    Pasting the question text back into the answer = <strong className="text-ink">normal</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-brand-green">&#10003;</span>
                  <span className="text-sm text-ink-light">
                    Pasting code snippets in a technical question = <strong className="text-ink">appropriate</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-brand-red">&times;</span>
                  <span className="text-sm text-ink-light">
                    Pasting entire paragraphs of polished prose = <strong className="text-ink">suspicious</strong>
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-ink">
                Context matters. A single paste event means nothing. A pattern of paste events replacing
                typed content tells a story.
              </p>
            </div>

            {/* Signal 3: Tab/Window Switches */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">3. Tab/Window Switches</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Focus changes are tracked every time the assessment window loses and regains focus:
              </p>
              <div className="mt-4 space-y-2 text-sm text-ink-light">
                <p>
                  <strong className="text-ink">One switch</strong> = probably nothing. Checked a
                  notification, adjusted music.
                </p>
                <p>
                  <strong className="font-mono text-brand-red">15 switches in 5&nbsp;minutes</strong> =
                  looking up answers. Tab-search-copy-paste on repeat.
                </p>
                <p>
                  <strong className="text-brand-red">Switches correlated with paste events</strong> =
                  left the window, copied from another tab, came back and pasted. Clear pattern.
                </p>
              </div>
            </div>

            {/* Signal 4: Response Timing */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">4. Response Timing</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                How long a candidate takes to respond&nbsp;&mdash; and the pattern across
                questions&nbsp;&mdash; reveals preparation level:
              </p>
              <div className="mt-4 space-y-2 text-sm text-ink-light">
                <p>
                  <strong className="text-ink">Immediate response to a complex question</strong> =
                  prepared answer, possibly pre-written.
                </p>
                <p>
                  <strong className="text-ink">Long time, short answer</strong> = genuinely
                  struggled with the content.
                </p>
                <p>
                  <strong className="font-mono text-brand-red">Consistent 30&nbsp;sec regardless of complexity</strong> =
                  external help providing answers at a steady rate.
                </p>
              </div>
            </div>
          </div>

          {/* Additional signal: Copy Events */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-bold text-ink">Also: Copy Events</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
              Copying <em>from</em> the assessment is a signal too. When candidates select and copy
              question text, they&rsquo;re often pasting it into a search engine or AI
              tool&nbsp;&mdash; then pasting the result back. The copy-switch-paste pattern is one
              of the strongest integrity signals available.
            </p>
          </div>
        </div>
      </section>

      {/* ── BUILDING A TRUTH SCORE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Building a Truth Score</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Individual signals are noisy. A single paste event doesn&rsquo;t mean cheating. A single
              tab switch doesn&rsquo;t mean anything. The power is in <strong className="text-ink">combining
              signals</strong>.
            </p>
            <p className="font-medium text-ink">
              LayersRank&rsquo;s approach follows five steps:
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[
              { step: '1', title: 'Collect raw signals', desc: 'Keystrokes, pastes, tab switches, timing \u2014 everything is logged as raw behavioral data' },
              { step: '2', title: 'Contextualize', desc: 'Adjust for question type, expected response length, and candidate-reported constraints' },
              { step: '3', title: 'Compare to baselines', desc: 'How does this behavior compare to the population of candidates who answered the same question?' },
              { step: '4', title: 'Flag anomalies', desc: 'Statistical outliers are flagged \u2014 not as \u201Ccheating\u201D but as \u201Cunusual behavior requiring review\u201D' },
              { step: '5', title: 'Combine with content analysis', desc: 'Behavioral flags are cross-referenced with content quality and stylometric patterns' },
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

          {/* Example scoring block */}
          <div className="mt-10 rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
            <h3 className="text-lg font-bold text-ink">Example: Candidate&nbsp;X, Question&nbsp;3</h3>
            <div className="mt-4 space-y-2 font-mono text-sm">
              <div className="flex items-center justify-between border-b border-brand-red/10 pb-2">
                <span className="text-ink-light">Typing speed</span>
                <span className="font-bold text-brand-red">142 WPM (flag)</span>
              </div>
              <div className="flex items-center justify-between border-b border-brand-red/10 pb-2">
                <span className="text-ink-light">Paste events</span>
                <span className="font-bold text-brand-orange">3 (moderate)</span>
              </div>
              <div className="flex items-center justify-between border-b border-brand-red/10 pb-2">
                <span className="text-ink-light">Tab switches</span>
                <span className="font-bold text-brand-red">7 (flag)</span>
              </div>
              <div className="flex items-center justify-between border-b border-brand-red/10 pb-2">
                <span className="text-ink-light">Time to respond</span>
                <span className="font-bold text-brand-red">2 min for complex (flag)</span>
              </div>
              <div className="flex items-center justify-between border-b border-brand-red/10 pb-2">
                <span className="text-ink-light">Content sophistication</span>
                <span className="font-bold text-brand-red">High (inconsistent with other Qs)</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-ink">Integrity score</span>
                <span className="font-bold text-brand-red">0.35</span>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-ink">
              Recommendation: Probe in live interview. Ask the same question verbally and compare depth.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE CONTENT CROSS-CHECK ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Content Cross-Check</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Behavioral signals catch the obvious cheating. Content analysis adds another
              layer&nbsp;&mdash; detecting subtler forms of assistance that behavioral data alone
              might miss.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">Stylometric Consistency</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Everyone has a writing fingerprint&nbsp;&mdash; sentence length, vocabulary
                preferences, punctuation habits. When a candidate&rsquo;s writing style shifts
                dramatically between questions, something changed. Either they got help, or
                someone else wrote that answer.
              </p>
            </div>

            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">Depth vs. Breadth Mismatch</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                AI-generated answers follow a recognizable pattern: broad coverage, balanced
                structure, hedged conclusions. Human experts do the opposite&nbsp;&mdash; they go
                deep on what they know and skip what they don&rsquo;t. When answers read like
                Wikipedia summaries instead of practitioner experience, that&rsquo;s a signal.
              </p>
            </div>

            <div className="border-l-4 border-brand-orange pl-6">
              <h3 className="text-lg font-bold text-ink">Response to Follow-Up</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Candidates who wrote their own answers can elaborate, clarify, and extend their
                thinking. Candidates who copied answers can&rsquo;t. Adaptive follow-up questions
                that probe deeper into an initial response are one of the strongest tests of
                authenticity.
              </p>
            </div>

            <div className="border-l-4 border-brand-orange pl-6">
              <h3 className="text-lg font-bold text-ink">Vocabulary Analysis</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Using advanced technical terms without demonstrating conceptual understanding is a
                red flag. A genuine expert uses jargon naturally and can explain it simply when
                pressed. A copied answer uses the right words without the underlying comprehension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DON'T DO ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What We Don&rsquo;t Do</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            Integrity monitoring has important boundaries. Here are four lines we will not cross:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="font-bold text-ink">No Facial Analysis</h3>
              <p className="mt-2 text-sm text-ink-light">
                Emotion detection from faces is weak science with well-documented racial and gender
                bias. We don&rsquo;t use webcams, don&rsquo;t analyze expressions, and
                don&rsquo;t attempt to read &ldquo;deception cues&rdquo; from body language. The
                research doesn&rsquo;t support it, and the privacy implications are unacceptable.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="font-bold text-ink">No Environment Monitoring</h3>
              <p className="mt-2 text-sm text-ink-light">
                No room scanning. No screen sharing. No requirement to show your workspace. Where
                you take an assessment and what&rsquo;s on your desk is your business. We monitor
                the assessment interaction, not the person.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="font-bold text-ink">No Keystroke Biometrics</h3>
              <p className="mt-2 text-sm text-ink-light">
                We analyze typing <em>patterns</em>, not typing <em>identity</em>. We don&rsquo;t
                build biometric profiles, don&rsquo;t attempt to verify &ldquo;this is the same
                person who typed before,&rdquo; and don&rsquo;t store keystroke data beyond the
                assessment session.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <h3 className="font-bold text-ink">No Automated Rejection</h3>
              <p className="mt-2 text-sm text-ink-light">
                Behavioral flags trigger review&nbsp;&mdash; not rejection. No candidate is ever
                automatically rejected based on integrity signals alone. A human always reviews
                flagged assessments before any action is taken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FALSE POSITIVE PROBLEM ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The False Positive Problem</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Every detection system has false positives. A fast typist looks like a paster. A
              candidate who checks their notes looks like a tab-switcher. Someone who pre-drafts
              answers in a text editor looks like a copy-paster.
            </p>
            <p className="font-medium text-ink">
              Our approach to minimizing false positives:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Threshold Setting</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                No single signal triggers a flag. Multiple signals from different categories must
                converge before an assessment is flagged. One anomaly is noise. Three correlated
                anomalies are a pattern.
              </p>
            </div>

            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Context Review</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Every flag is reviewed by a human who sees the full context&nbsp;&mdash; the
                question asked, the response given, and the behavioral data together. Flags
                don&rsquo;t exist in isolation.
              </p>
            </div>

            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">Probing, Not Rejection</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                When integrity is uncertain, the response is follow-up questions that test the
                same knowledge&nbsp;&mdash; not rejection. If the candidate knows the material,
                they&rsquo;ll demonstrate it again. If they don&rsquo;t, the gap becomes obvious.
              </p>
            </div>

            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">Candidate Notification</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Candidates are informed that behavioral monitoring is part of the assessment. They
                can explain anomalies&nbsp;&mdash; &ldquo;I pre-wrote notes and pasted them
                in&rdquo; is a perfectly valid explanation that changes the interpretation of
                paste events.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base font-semibold text-ink">
            The goal is to ensure assessments reflect actual capability&nbsp;&mdash; not to catch
            and punish.
          </p>
        </div>
      </section>

      {/* ── WHAT HAPPENS WHEN WE FLAG SOMEONE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Happens When We Flag Someone</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            Integrity signals combine with content scores to produce four distinct scenarios.
            Each leads to a different action:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-brand-red">Low Integrity</span>
                <span className="text-ink-muted">+</span>
                <span className="font-mono text-sm font-bold text-brand-green">High Content</span>
              </div>
              <h3 className="mt-3 font-bold text-ink">Probe in Final Round</h3>
              <p className="mt-2 text-sm text-ink-light">
                Good answers but suspicious behavior. They may know the material but got help
                articulating it&nbsp;&mdash; or they copied everything. A live follow-up on the
                same topics will reveal which.
              </p>
            </div>

            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-brand-red">Low Integrity</span>
                <span className="text-ink-muted">+</span>
                <span className="font-mono text-sm font-bold text-brand-red">Low Content</span>
              </div>
              <h3 className="mt-3 font-bold text-ink">Likely Reject on Content</h3>
              <p className="mt-2 text-sm text-ink-light">
                Suspicious behavior and weak answers. Even the external help wasn&rsquo;t enough
                to produce strong responses. The content alone justifies rejection&nbsp;&mdash; the
                integrity signals are secondary.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-brand-green">High Integrity</span>
                <span className="text-ink-muted">+</span>
                <span className="font-mono text-sm font-bold text-brand-red">Low Content</span>
              </div>
              <h3 className="mt-3 font-bold text-ink">Reject on Content, No Integrity Issue</h3>
              <p className="mt-2 text-sm text-ink-light">
                Genuine effort, authentic behavior, but the answers weren&rsquo;t strong enough.
                This is a fair outcome&nbsp;&mdash; the candidate did their best and the
                assessment accurately reflected their current level.
              </p>
            </div>

            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-brand-green">High Integrity</span>
                <span className="text-ink-muted">+</span>
                <span className="font-mono text-sm font-bold text-brand-green">High Content</span>
              </div>
              <h3 className="mt-3 font-bold text-ink">Advance</h3>
              <p className="mt-2 text-sm text-ink-light">
                Authentic behavior, strong answers. This is the ideal outcome&nbsp;&mdash; you can
                trust both the content and the process. Move this candidate forward with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE DETERRENCE EFFECT ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Deterrence Effect</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Here&rsquo;s something most people overlook: knowing that behavioral monitoring
              exists <em>deters cheating in the first place</em>.
            </p>
            <p>
              LayersRank is transparent about behavioral monitoring in assessment instructions.
              Candidates know their keystrokes, paste events, and tab switches are being observed.
              This isn&rsquo;t gotcha surveillance&nbsp;&mdash; it&rsquo;s clear
              expectation-setting.
            </p>
            <p>
              When candidates know the playing field is level, most choose to play fair. The ones
              who don&rsquo;t are exactly the ones you want to identify.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE BIGGER PICTURE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Bigger Picture</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              If <strong className="font-mono text-brand-red">30% of candidates</strong> get
              external help on assessments, your assessment isn&rsquo;t comparing capability.
              It&rsquo;s comparing willingness to cheat plus access to help.
            </p>
            <p>
              That&rsquo;s not fair to honest candidates who did the work themselves. And it
              doesn&rsquo;t help you hire well&nbsp;&mdash; you&rsquo;re selecting for
              resourcefulness in cheating, not competence in the role.
            </p>
            <p className="text-base font-semibold text-ink md:text-lg">
              Integrity monitoring isn&rsquo;t about surveillance. It&rsquo;s about fairness. Every
              candidate deserves to be evaluated on what they actually know&nbsp;&mdash; not on
              whether they were willing to cut corners.
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
              { href: '/blog/adaptive-follow-up-questions', label: 'Adaptive Follow-Up', desc: 'How follow-up questions probe deeper into initial responses' },
              { href: '/blog/confidence-intervals-matter', label: 'Confidence Intervals', desc: 'Why confidence levels change hiring decisions' },
              { href: '/product/integrity-monitoring', label: 'Integrity Monitoring', desc: 'Our approach to behavioral signal analysis' },
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
