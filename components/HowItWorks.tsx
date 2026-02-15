const steps = [
  {
    number: '01',
    title: 'Structured Interview',
    description:
      'Candidate answers role-specific questions via video, text, or MCQ. Every response is captured consistently across all candidates.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Multi-Model Scoring',
    description:
      'Multiple AI models evaluate each response independently. When models disagree, the system flags uncertainty instead of hiding it behind an average.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Adaptive Follow-Up',
    description:
      'Uncertain scores trigger targeted clarifying questions. The result: every candidate decision arrives with high confidence and a full evidence trail.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="bg-paper-off py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Three layers. One confident decision.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-gray-200 bg-white p-8">
              {/* Step Number */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                  {step.icon}
                </div>
                <span className="font-mono text-3xl font-bold text-gray-200">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-light">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Flow Connector Visual */}
        <div className="mt-12 hidden items-center justify-center gap-4 md:flex">
          <div className="h-1 w-20 rounded-full bg-brand-yellow" />
          <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="h-1 w-20 rounded-full bg-brand-orange" />
          <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="h-1 w-20 rounded-full bg-brand-green" />
          <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="ml-2 text-sm font-semibold text-brand-green">High-Confidence Decision</span>
        </div>
      </div>
    </section>
  );
}
