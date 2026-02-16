import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, FeatureCard, FeatureGrid } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata = makeMetadata({
  title: 'Integrity Detection | LayersRank',
  description:
    'Ensure authentic interview responses with behavioral signal monitoring. Paste detection, typing patterns, tab switches, and face verification -- all privacy-first.',
  path: '/product/integrity-detection',
});

const trackingCards = [
  {
    title: 'Paste Events',
    description:
      'Detects when text is pasted into response fields rather than typed. A single paste of a full answer is a very different signal than composing a response in real time.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Typing Patterns',
    description:
      'Measures cadence and consistency of keystroke input. Unusually fast or uniform typing speed that deviates from the candidate\'s baseline can indicate pre-prepared or AI-generated responses.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
  },
  {
    title: 'Tab Switches',
    description:
      'Tracks when candidates navigate away from the assessment window. Frequent tab switches during timed questions may indicate external resource usage.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Face Verification',
    description:
      'Optional webcam check confirms the same person is present throughout the assessment. No continuous recording -- just periodic verification snapshots with candidate consent.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const reportMetrics = [
  { label: 'Paste Events', value: '2 detected', status: 'warning' },
  { label: 'Tab Switches', value: '0', status: 'clean' },
  { label: 'Typing Speed', value: '72 WPM (consistent)', status: 'clean' },
  { label: 'Integrity Flag', value: 'Review Recommended', status: 'warning' },
];

const privacyFeatures = [
  {
    title: 'No Screen Recording Without Consent',
    description:
      'Face verification is opt-in and requires explicit candidate consent. Candidates are informed before the assessment begins and can proceed without it.',
  },
  {
    title: 'No Keystroke Logging',
    description:
      'We measure typing cadence patterns, not individual keystrokes. No raw keystroke data is stored. Only aggregate metrics like speed and consistency are recorded.',
  },
  {
    title: 'GDPR Compliant',
    description:
      'All behavioral data is processed and stored in compliance with GDPR, CCPA, and other data protection regulations. Candidates can request data deletion at any time.',
  },
  {
    title: 'Transparent to Candidates',
    description:
      'Candidates are informed about what is monitored and why. No hidden surveillance. The integrity monitoring policy is shared before the assessment begins.',
  },
];

export default function IntegrityDetectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Trust the Response. Verify the Process."
        description="Integrity detection monitors behavioral signals during assessments to ensure responses are authentic. It does not auto-reject anyone -- it adjusts confidence and flags responses for human review."
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Interface showing integrity indicators" search="security verification dashboard" />
        </div>
      </section>

      {/* What We Track */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What we track</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Four behavioral signals that help distinguish authentic, independently composed responses from potentially assisted ones.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {trackingCards.map((card) => (
              <FeatureCard key={card.title} title={card.title} description={card.description} icon={card.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Affects Scoring */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How it affects scoring</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Integrity signals adjust confidence, they do not auto-reject candidates. A flagged response
            receives a wider confidence band, signaling that the score should be interpreted with caution.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Clean Response</p>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-muted">Technical Depth</span>
                    <span className="font-mono font-bold text-ink">4.2</span>
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-brand-green" style={{ width: '84%' }} />
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">Confidence band: 4.0 - 4.4</p>
                </div>
                <div className="rounded-lg bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green">
                  No integrity flags. Tight confidence band.
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Flagged Response</p>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-muted">Technical Depth</span>
                    <span className="font-mono font-bold text-ink">4.2</span>
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-brand-orange" style={{ width: '84%' }} />
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">Confidence band: 3.2 - 4.8</p>
                </div>
                <div className="rounded-lg bg-brand-orange/10 px-4 py-2 text-sm font-medium text-brand-orange">
                  2 paste events detected. Wider confidence band.
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Same score, different certainty. The flagged response has the same raw score but a much wider confidence
            band, indicating the reviewer should investigate before trusting the number.
          </p>
        </div>
      </section>

      {/* What Recruiters See */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What recruiters see</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Every candidate report includes an integrity summary section. No raw behavioral data is
            exposed -- just actionable signals.
          </p>
          <div className="mt-10 mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <div className="bg-paper-off px-6 py-4">
                <h3 className="text-sm font-semibold text-ink">Integrity Summary</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {reportMetrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between px-6 py-4">
                    <span className="text-sm font-medium text-ink">{metric.label}</span>
                    <span className="flex items-center gap-2">
                      {metric.status === 'clean' ? (
                        <svg className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      )}
                      <span
                        className={`text-sm font-mono ${
                          metric.status === 'clean' ? 'text-brand-green' : 'text-brand-orange'
                        }`}
                      >
                        {metric.value}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-ink-muted">
            The integrity summary is one section of the full candidate report. Recruiters decide how to act on the signal -- the system never auto-rejects.
          </p>
        </div>
      </section>

      {/* Privacy-First Design */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Privacy-First Design</p>
          <h2 className="mt-4 text-2xl font-bold">Integrity monitoring that respects everyone</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            Effective integrity detection does not require invasive surveillance. Our approach is transparent,
            compliant, and designed to protect candidates as much as it protects evaluation quality.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {privacyFeatures.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-700 bg-white/5 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                  <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ensure authentic evaluations"
        description="See how integrity detection protects evaluation quality without compromising candidate experience. 20-minute demo, no commitment."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
