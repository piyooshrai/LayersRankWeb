import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Candidate Integrity Verification | Detect Copy-Paste & Suspicious Behavior | LayersRank',
  description:
    'Track paste events, tab switches, typing patterns, and face verification. Know when responses might not be authentic. Protect your hiring process from shortcuts and misrepresentation.',
  path: '/product/integrity-detection',
});

const faqs = [
  {
    q: 'Do candidates know they\'re being monitored?',
    a: 'We recommend transparency. Default interview instructions include disclosure of behavioral monitoring. Candidates who proceed have acknowledged the monitoring.',
  },
  {
    q: 'Can tech-savvy candidates bypass detection?',
    a: 'Some evasion is possible. Using a separate device for lookups, typing pre-written answers manually, having someone else in the room whispering answers -- these might not trigger our specific signals. We catch common, easy shortcuts. If common shortcuts are risky, most people who would have cheated casually won\'t.',
  },
  {
    q: 'What about candidates with disabilities?',
    a: 'Contact us before the interview. We can adjust sensitivity settings, disable specific detection features, or provide alternative formats. Some patterns that trigger flags (unusual typing patterns, extended pauses, use of assistive technology) might be normal for candidates with certain disabilities. We configure appropriately when informed.',
  },
  {
    q: 'Is this legal?',
    a: 'Monitoring candidate behavior during an interview you invited them to take is generally legal, especially with disclosure. However, laws vary by jurisdiction. GDPR in the EU, CCPA in California, and various employment laws may impose requirements around disclosure, consent, and data handling. We recommend consulting your legal team. We provide disclosure templates and data handling documentation to support compliance.',
  },
  {
    q: 'What happens to integrity data?',
    a: 'Integrity data is retained alongside interview responses, following your configured data retention policy (typically 1-2 years). Candidates can request deletion under applicable privacy laws. We honor such requests within required timeframes. Integrity data is not shared externally or used beyond the specific hiring evaluation.',
  },
  {
    q: 'Can I see integrity data for candidates I didn\'t flag?',
    a: 'Yes. Configure reports to include integrity summary on all candidates, not just flagged ones. This gives you visibility into normal patterns, which helps calibrate your interpretation of flagged patterns.',
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

export default function IntegrityDetectionPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Product / Integrity Detection"
        title="Trust What You're Evaluating"
        description="Remote interviews create opportunities for shortcuts that in-person interviews don't. LayersRank tracks behavioral signals that indicate when responses might not be authentic -- so you can investigate before making decisions."
        primaryCta="See Integrity Features"
        primaryCtaHref="/demo"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Integrity detection dashboard showing behavioral signals" search="security verification dashboard monitoring" />
        </div>
      </section>

      {/* ── THE INTEGRITY CHALLENGE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The integrity challenge in remote hiring</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              Remote interviews transformed hiring efficiency. A process that took two weeks of scheduling
              now happens in 48 hours. But remote interviews also created vulnerabilities that didn&apos;t
              exist when everyone was in the same room.
            </p>
            <p>
              In a face-to-face interview, you know the candidate is answering from their own knowledge.
              You can see their eyes aren&apos;t reading from notes. You can tell no one is whispering answers.
              The physical presence creates natural integrity.
            </p>
            <p>
              In a remote interview, those constraints disappear. A candidate can have prepared answers on a
              second monitor. They can search technical questions. They can paste entire answers from ChatGPT.
              In extreme cases, someone else can take the interview entirely.
            </p>
            <p>
              We don&apos;t believe most candidates do these things. The vast majority want to earn opportunities
              based on their actual abilities. But &ldquo;most&rdquo; isn&apos;t a hiring strategy.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-6">
            <p className="text-sm font-semibold text-ink">The challenge:</p>
            <p className="mt-1 text-sm text-ink-light">
              Detecting potential integrity issues without creating a surveillance-heavy experience that treats
              every candidate like a suspect. The goal is appropriate visibility, not paranoid monitoring.
              We surface unusual patterns for your review. We don&apos;t make accusations or automatic rejections.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE TRACK ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What we track</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Four categories of behavioral signals, each with clear concern thresholds.
          </p>

          <div className="mt-10 space-y-8">
            {/* Paste Events */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">Paste Events</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Every paste into a response field is logged: which question, content size, whether it appeared
                    in the final response, and timing relative to question appearance.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg bg-brand-green/5 border border-brand-green/20 p-3">
                      <p className="text-xs font-semibold text-brand-green">Low concern</p>
                      <p className="mt-1 text-xs text-ink-muted">1-2 pastes, small content, scattered</p>
                    </div>
                    <div className="rounded-lg bg-brand-orange/5 border border-brand-orange/20 p-3">
                      <p className="text-xs font-semibold text-brand-orange">Moderate concern</p>
                      <p className="mt-1 text-xs text-ink-muted">3-4 pastes, some on technical questions</p>
                    </div>
                    <div className="rounded-lg bg-brand-red/5 border border-brand-red/20 p-3">
                      <p className="text-xs font-semibold text-brand-red">High concern</p>
                      <p className="mt-1 text-xs text-ink-muted">5+ pastes on difficult questions, large blocks, minimal editing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Switches */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">Tab Switches and Window Changes</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Logged when candidates navigate away: number of switches, duration, active question,
                    and timing within the question. The analysis considers timing (immediate vs. mid-response),
                    duration (brief vs. extended), and correlation with question difficulty.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg bg-brand-green/5 border border-brand-green/20 p-3">
                      <p className="text-xs font-semibold text-brand-green">Low concern</p>
                      <p className="mt-1 text-xs text-ink-muted">3-5 brief switches, scattered</p>
                    </div>
                    <div className="rounded-lg bg-brand-orange/5 border border-brand-orange/20 p-3">
                      <p className="text-xs font-semibold text-brand-orange">Moderate concern</p>
                      <p className="mt-1 text-xs text-ink-muted">5-8 switches, some extended, some difficulty correlation</p>
                    </div>
                    <div className="rounded-lg bg-brand-red/5 border border-brand-red/20 p-3">
                      <p className="text-xs font-semibold text-brand-red">High concern</p>
                      <p className="mt-1 text-xs text-ink-muted">10+ switches, consistently extended, strongly correlated with hard questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typing Patterns */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">Typing Pattern Analysis</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    We analyze words per minute, speed consistency, pause patterns, backspace frequency, and
                    time-to-first-keystroke. Authentic composition has a signature: pauses while thinking, bursts as
                    ideas come, corrections, variable speed. Copied content has a different rhythm.
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-ink-light">
                    <p><span className="font-semibold text-ink">Speed anomalies:</span> 150+ WPM with no paste events suggests undetected copy-paste (avg human: 40-50 WPM)</p>
                    <p><span className="font-semibold text-ink">Consistency anomalies:</span> Robotic same-WPM throughout a 300-word response is unusual</p>
                    <p><span className="font-semibold text-ink">Pause anomalies:</span> Complex questions with no pauses &gt;2 seconds is unexpected</p>
                    <p><span className="font-semibold text-ink">Correction anomalies:</span> Zero backspaces in a long response is statistically unusual</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Timing */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">Response Timing</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Total time per question, thinking time before first interaction, and comparison to expected
                    duration by difficulty. A comprehensive system design answer in 90 seconds for a difficulty-9
                    question is a signal worth investigating.
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-ink-light">
                    <p><span className="font-semibold text-ink">Abnormally fast:</span> Response quality inconsistent with response time</p>
                    <p><span className="font-semibold text-ink">Abnormally slow:</span> Extended delays correlating with tab switches</p>
                    <p><span className="font-semibold text-ink">Inverse difficulty:</span> Easy questions taking longer than hard ones suggests selective lookup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACE VERIFICATION ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-ink">Face verification</h2>
            <span className="rounded-full bg-ink/10 px-2.5 py-0.5 text-xs font-semibold text-ink-muted">Optional</span>
          </div>
          <p className="mt-2 max-w-3xl text-ink-light">
            For organizations requiring identity confirmation. Answers one question only:
            Is the person taking this interview the person who&apos;s supposed to be taking it?
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Identity confirmation at start</h3>
              <p className="mt-2 text-sm text-ink-light">
                The candidate takes a photo via webcam, compared against a government ID, previous interaction
                photos, or LinkedIn profile photo. Catches the scenario where someone else takes the interview
                on the candidate&apos;s behalf.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Periodic verification during interview</h3>
              <p className="mt-2 text-sm text-ink-light">
                Optional brief prompts (&ldquo;Please confirm you&apos;re still there&rdquo;) with a 3-5 second
                camera capture. Catches the scenario where the legitimate candidate hands off partway through.
                Configurable frequency.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
            <h3 className="text-sm font-semibold text-ink">What face verification does NOT do</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'No facial expression analysis',
                'No emotion detection',
                'No continuous video recording',
                'No demographic inference',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-ink-light">
                  <svg className="h-4 w-4 shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE INTEGRITY REPORT ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The integrity report</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            The integrity section summarizes behavioral signals in a clear, actionable format.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Clean Report */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-brand-green" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green">Clean Report</p>
              </div>
              <div className="mt-4 rounded-lg bg-paper-off p-4 font-mono text-xs leading-relaxed text-ink-light">
                <p className="font-semibold text-ink">INTEGRITY SUMMARY</p>
                <p className="mt-2">Paste Events: 2 (minor -- name field, one short phrase)</p>
                <p>Tab Switches: 4 (brief, scattered, no pattern)</p>
                <p>Typing Pattern: Normal variation</p>
                <p>Response Timing: Within expected ranges</p>
                <p>Face Verification: Confirmed</p>
                <p className="mt-3 font-semibold text-brand-green">FLAG STATUS: NONE</p>
                <p className="mt-1">All behavioral signals within normal parameters.</p>
              </div>
            </div>

            {/* Flagged Report */}
            <div className="rounded-xl border border-brand-orange/30 bg-white p-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-brand-orange" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange">Flagged Report</p>
              </div>
              <div className="mt-4 rounded-lg bg-paper-off p-4 font-mono text-xs leading-relaxed text-ink-light">
                <p className="font-semibold text-ink">INTEGRITY SUMMARY</p>
                <p className="mt-2">Paste Events: 6</p>
                <p className="pl-2">- Q3 (Technical): 287 chars, minimal editing</p>
                <p className="pl-2">- Q5 (Technical): 412 chars, no editing</p>
                <p className="pl-2">- Q8 (Technical): 194 chars, minor editing</p>
                <p className="mt-1">Tab Switches: 14 (avg 38s, 9 within 10s of question)</p>
                <p className="mt-1">Typing: Q5 at 127 WPM, Q8 at 143 WPM, 0 backspaces</p>
                <p className="mt-1">Timing: Q5 done in 2m14s (expected 6-8m)</p>
                <p className="mt-3 font-semibold text-brand-orange">FLAG STATUS: REVIEW RECOMMENDED</p>
                <p className="mt-1">Concerning patterns on Q3, Q5, Q8.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT FLAGGING MEANS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What flagging means (and doesn&apos;t mean)</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            A flag is information, not a verdict. Behavioral patterns deviated from normal in ways that
            warrant human review before making advancement decisions.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-ink">Possible explanations for flagged behavior</h3>
              <div className="mt-4 space-y-4">
                {[
                  { title: 'Actual integrity violation', desc: 'Used external resources, had assistance, or didn\'t demonstrate authentic capability.' },
                  { title: 'Unusual but legitimate behavior', desc: 'Exceptionally fast typer. Multi-monitor setup triggering tab detection. Composed in a notes app then pasted.' },
                  { title: 'Technical artifacts', desc: 'Browser extensions, accessibility tools, or system configurations creating false signals.' },
                  { title: 'Preparation, not cheating', desc: 'Reviewed similar questions beforehand with practiced responses. Good preparation creates similar patterns.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-gray-200 bg-paper-off p-4">
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-ink-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">How to handle flags</h3>
              <div className="mt-4 space-y-4">
                {[
                  { title: 'Review and proceed', desc: 'Examine patterns, conclude they\'re not concerning, advance normally.' },
                  { title: 'Review and verify', desc: 'Advance but probe flagged areas live. "Can you walk me through that same problem?" If they reproduce the quality, it was likely a false positive.' },
                  { title: 'Request clarification', desc: '"We noticed some unusual patterns. Can you help us understand your workflow?" Give honest candidates a chance to explain.' },
                  { title: 'Review and decline', desc: 'Strongly concerning patterns for a high-trust role. Document the specific behavioral patterns that informed the decision.' },
                ].map((item, idx) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-xs font-bold text-brand-yellow">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm text-ink-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DON'T DO ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Privacy-First Design</p>
          <h2 className="mt-4 text-2xl font-bold">What we don&apos;t do</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Integrity detection is designed to surface signals, not to surveil.
            We explicitly avoid approaches we consider overreaching.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'No automatic rejections', desc: 'Flags go to human reviewers. The platform provides information. Humans make decisions.' },
              { title: 'No facial expression analysis', desc: 'Research shows this is unreliable and potentially biased. Face verification is identity-only.' },
              { title: 'No voice stress analysis', desc: 'This technology doesn\'t work reliably and creates legal and ethical concerns.' },
              { title: 'No audio monitoring', desc: 'We don\'t listen for other voices or background sounds. Invasive, unreliable, privacy concerns.' },
              { title: 'No network traffic analysis', desc: 'We don\'t monitor what other sites candidates visit. Only our interface.' },
              { title: 'No continuous screen recording', desc: 'We see what happens in our interface. We don\'t surveil broader computer activity.' },
              { title: 'No keystroke logging', desc: 'Typing patterns only within our response fields. No keyloggers, no external monitoring.' },
              { title: 'No post-session access', desc: 'The interview ends, our visibility ends. No ongoing device access.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-700 bg-white/5 p-5">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10">
                  <svg className="h-4 w-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-400 italic">
            Our philosophy: Detect enough to surface legitimate concerns. Don&apos;t invade privacy beyond
            what&apos;s necessary. Treat candidates as professionals unless specific evidence suggests otherwise.
          </p>
        </div>
      </section>

      {/* ── CONFIGURING INTEGRITY DETECTION ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Configuring integrity detection</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            You control how integrity detection operates for your interviews.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Sensitivity */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Sensitivity levels</h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-yellow/10 px-2.5 py-0.5 text-xs font-semibold text-brand-yellow">Default</span>
                    <p className="text-sm font-semibold text-ink">Standard</p>
                  </div>
                  <p className="mt-1 text-sm text-ink-light">Flags clearly unusual patterns. Balanced between catching concerns and minimizing false positives. Appropriate for most roles.</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Strict</p>
                  <p className="mt-1 text-sm text-ink-light">Flags borderline patterns. Higher sensitivity, more false positives. For high-stakes, security-sensitive, or regulated roles.</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Minimal</p>
                  <p className="mt-1 text-sm text-ink-light">Only extreme anomalies. Lower sensitivity, fewer false positives. When candidate experience is paramount.</p>
                </div>
              </div>
            </div>

            {/* Feature Toggles */}
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <h3 className="text-lg font-bold text-ink">Feature toggles</h3>
              <p className="mt-2 text-sm text-ink-light">Enable or disable specific tracking per your needs.</p>
              <div className="mt-4 space-y-2">
                {[
                  { feature: 'Paste detection', default: 'On' },
                  { feature: 'Tab switch tracking', default: 'On' },
                  { feature: 'Typing pattern analysis', default: 'On' },
                  { feature: 'Response timing analysis', default: 'On' },
                  { feature: 'Face verification', default: 'Off / Start only / Periodic' },
                ].map((f) => (
                  <div key={f.feature} className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
                    <span className="text-sm font-medium text-ink">{f.feature}</span>
                    <span className="text-sm text-ink-muted">{f.default}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-bold text-ink">Alert configuration</h3>
              <div className="mt-4 space-y-2">
                {[
                  'Include integrity summary on all reports',
                  'Only notify when flags appear',
                  'Real-time alerts for extreme anomalies',
                ].map((opt) => (
                  <div key={opt} className="flex items-center gap-2 rounded-lg bg-white px-4 py-3">
                    <div className="h-4 w-4 rounded border-2 border-gray-300" />
                    <span className="text-sm text-ink-light">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Candidate Disclosure */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-paper-off p-8">
            <h3 className="text-lg font-bold text-ink">Candidate disclosure</h3>
            <p className="mt-2 text-sm text-ink-light">
              We strongly recommend transparency. The interview landing page can include a customizable disclosure:
            </p>
            <div className="mt-4 rounded-lg border border-gray-300 bg-white p-4">
              <p className="text-sm italic text-ink-muted">
                &ldquo;This interview session tracks behavioral patterns including paste events, tab switches,
                and typing patterns to ensure evaluation integrity. By proceeding, you acknowledge this monitoring.&rdquo;
              </p>
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              Transparency deters casual cheating, sets expectations, avoids candidates feeling surveilled
              without knowledge, and addresses legal disclosure requirements in some jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* ── HANDLING FLAGGED CANDIDATES ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Handling flagged candidates: a framework</h2>

          <div className="mt-10 space-y-0">
            {[
              { step: '01', title: 'Review the specific patterns', desc: 'What exactly was flagged? Paste events on which questions? Tab switches with what timing? Read the details, not just the flag status.' },
              { step: '02', title: 'Assess severity', desc: 'Single anomaly or consistent pattern? Concentrated on high-stakes questions or scattered? Does the combination tell a coherent story, or could each signal have an innocent explanation?' },
              { step: '03', title: 'Consider role context', desc: 'What\'s the cost of a false negative (advancing a cheater) vs. a false positive (rejecting an honest candidate)? High-trust roles err toward caution. High-volume roles give more benefit of the doubt.' },
              { step: '04', title: 'Decide on response', desc: 'Proceed normally, verify in subsequent round, request re-take under stricter conditions, or decline to advance. Match response to severity and role requirements.' },
              { step: '05', title: 'Document your reasoning', desc: 'Whatever you decide, note why. Protects you if decisions are questioned later and helps calibrate your process over time.' },
            ].map((item, idx) => (
              <div key={item.step} className="relative flex gap-6 pb-8 last:pb-0">
                {idx < 4 && (
                  <div className="absolute left-5 top-10 h-full w-px bg-gray-200" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOES IT WORK? ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Honest Assessment</p>
          <h2 className="mt-4 text-2xl font-bold">Does integrity detection work?</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            An honest assessment of what we know and don&apos;t know.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">What we can measure</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-brand-yellow">~8% flag rate</p>
                  <p className="text-sm text-gray-300">Of interviews receive some integrity flag. Of those:</p>
                  <div className="mt-2 space-y-1 text-sm text-gray-400">
                    <p>~60% minor flags, typically dismissed after review</p>
                    <p>~30% moderate flags prompting verification</p>
                    <p>~10% significant flags influencing decisions</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-yellow">~20% false positive estimate</p>
                  <p className="text-sm text-gray-300">Based on flagged candidates who were advanced and performed well.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">What we believe based on evidence</h3>
              <div className="mt-4 space-y-4 text-sm text-gray-300">
                <p>
                  Patterns we flag correlate with concerning behavior. The combination of paste events,
                  tab switches, timing anomalies, and typing patterns that trigger high-severity flags
                  is unlikely to occur through innocent behavior.
                </p>
                <p>
                  Sophisticated cheating can evade detection. A determined candidate who types pre-memorized
                  answers, uses a separate device, and has invisible help could potentially evade our detection.
                  We catch common patterns, not every possible evasion.
                </p>
                <p>
                  Most candidates are honest. The 92% clean rate confirms this. Actual integrity violations
                  are a small minority -- but that small minority can do real damage if undetected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE BALANCE ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The balance: security versus experience</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Integrity detection involves real trade-offs. The right balance depends on context.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
              <h3 className="text-lg font-bold text-ink">Too aggressive</h3>
              <p className="mt-2 text-sm text-ink-light">
                Creates a hostile, surveillance-heavy experience. Good candidates who value their dignity
                may decline. Your employer brand suffers. You lose talent to competitors who treat candidates
                more respectfully.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-6">
              <h3 className="text-lg font-bold text-ink">Right balance</h3>
              <p className="mt-2 text-sm text-ink-light">
                LayersRank defaults to a balanced approach appropriate for most professional hiring.
                Adjust sensitivity up or down based on role requirements, candidate relationship, and
                organizational risk tolerance.
              </p>
            </div>
            <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-6">
              <h3 className="text-lg font-bold text-ink">Too permissive</h3>
              <p className="mt-2 text-sm text-ink-light">
                Creates exploitable gaps. Candidates who cheat gain unfair advantage. Evaluations don&apos;t
                reflect actual capability. You make decisions based on false information. Bad hires result.
              </p>
            </div>
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
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Link
              href="/product/candidate-reports"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Candidate Reports</h3>
              <p className="mt-2 text-sm text-ink-light">How integrity flags appear in candidate reports.</p>
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
              <p className="mt-2 text-sm text-ink-light">Question types and formats that feed into integrity detection.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/security"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">Security</h3>
              <p className="mt-2 text-sm text-ink-light">Data handling and compliance documentation.</p>
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
        title="Hire with confidence"
        description="See how integrity detection works in practice. Book a demo and we'll walk through flagged and clean report examples -- exactly what you'd see for real candidates."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="View Security Documentation"
        secondaryCtaHref="/security"
        variant="gradient"
      />
    </>
  );
}
