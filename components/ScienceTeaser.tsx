import Link from 'next/link';

export function ScienceTeaser() {
  return (
    <section className="bg-paper-off py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual: Confidence Band Diagram */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="mb-6 text-sm font-semibold text-ink-muted">How Uncertainty Detection Works</p>

            {/* Score + Confidence Band Visualization */}
            <div className="space-y-6">
              {/* High confidence example */}
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Candidate A &middot; Technical</span>
                  <span className="text-brand-green font-mono text-xs">High Confidence</span>
                </div>
                <div className="relative h-8 rounded-full bg-gray-100">
                  {/* Confidence band */}
                  <div className="absolute left-[70%] top-0 h-full w-[12%] rounded-full bg-brand-green/20" />
                  {/* Score marker */}
                  <div className="absolute left-[75%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-green bg-white shadow" />
                </div>
                <div className="mt-1 flex justify-between text-xs text-ink-muted">
                  <span>0</span>
                  <span>Score: 76 &plusmn; 4</span>
                  <span>100</span>
                </div>
              </div>

              {/* Low confidence example */}
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Candidate B &middot; System Design</span>
                  <span className="text-brand-orange font-mono text-xs">Low Confidence</span>
                </div>
                <div className="relative h-8 rounded-full bg-gray-100">
                  {/* Wide confidence band */}
                  <div className="absolute left-[40%] top-0 h-full w-[30%] rounded-full bg-brand-orange/20" />
                  {/* Score marker */}
                  <div className="absolute left-[55%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-orange bg-white shadow" />
                </div>
                <div className="mt-1 flex justify-between text-xs text-ink-muted">
                  <span>0</span>
                  <span>Score: 55 &plusmn; 18</span>
                  <span>100</span>
                </div>
              </div>

              {/* After adaptive follow-up */}
              <div className="rounded-lg border border-dashed border-brand-green/40 bg-brand-green/5 p-3">
                <p className="text-xs font-medium text-brand-green">After Adaptive Follow-Up</p>
                <div className="mt-2 relative h-6 rounded-full bg-gray-100">
                  <div className="absolute left-[58%] top-0 h-full w-[10%] rounded-full bg-brand-green/20" />
                  <div className="absolute left-[63%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-green bg-white shadow" />
                </div>
                <p className="mt-1 text-xs text-ink-muted">Score: 63 &plusmn; 5 &mdash; Confidence restored</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange">
              The Science
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Confidence you can measure
            </h2>
            <p className="text-lg text-ink-light">
              Every score comes with a confidence band. When multiple models agree, confidence is
              high. When they disagree, the system doesn&apos;t average away the uncertainty &mdash; it
              flags it and triggers follow-up questions.
            </p>
            <p className="text-lg text-ink-light">
              The result: your hiring decisions are backed by measurable evidence, not opaque
              algorithms. Leadership can see exactly why each candidate was ranked where they are.
            </p>
            <Link
              href="/science"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-yellow px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-yellow/10"
            >
              Read the Technical Whitepaper
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
