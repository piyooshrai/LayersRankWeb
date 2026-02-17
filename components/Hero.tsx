import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="quant-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Structured Hiring for Recruiters and Engineering Leaders
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Stop Guessing.{' '}
            <span className="text-brand-yellow">Start Ranking.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-300">
            LayersRank helps hiring teams build consistent interview decisions. Structured scoring,
            reduced bias, and shortlist recommendations you can defend to leadership.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3.5 text-base font-semibold text-ink shadow-lg shadow-brand-yellow/20 transition-all hover:bg-brand-orange hover:shadow-brand-orange/20"
            >
              Book a Demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-500 px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              See Sample Report
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-700 shadow-2xl">
            <Image
              src="/images/hero-indian-interview-panel.png"
              alt="Indian woman professional in a modern office interview setting"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating Stats Card */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-xl md:-bottom-6 md:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-ink">92% Confidence</p>
                <p className="text-xs text-ink-muted">Avg. decision confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
