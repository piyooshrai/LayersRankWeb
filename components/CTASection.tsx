import Link from 'next/link';

export function CTASection() {
  return (
    <section className="gradient-cta py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Ready to rank with confidence?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-light">
          See how LayersRank evaluates candidates differently. 20-minute demo, no commitment.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-ink-light"
          >
            Book a Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-ink/20 px-8 py-4 text-base font-medium text-ink transition-colors hover:border-ink/40"
          >
            Download Sample Report
          </Link>
        </div>
      </div>
    </section>
  );
}
