import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'About LayersRank | Confident, Fair Hiring Decisions',
  description:
    'Founded to solve GCC hiring inconsistency. Built by AI infrastructure architects, IO researchers, and hiring operations specialists.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Company"
        title="Making Hiring Decisions Confident and Fair"
        description="Founded to solve GCC hiring inconsistency. Built by AI infrastructure architects, IO researchers, and hiring operations specialists."
      />

      <section className="bg-paper-off px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <ImagePlaceholder label="LayersRank founding team" search="indian tech founder professional" />
        </div>
      </section>

      {/* Our Story — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Our Story</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-ink-light">
            <p>
              LayersRank was founded to fix the problem of inconsistent, undefendable hiring
              decisions at scale. Too many organizations rely on subjective scorecards,
              unstructured interviews, and gut-feel rankings that break down under scrutiny.
            </p>
            <p>
              Especially in GCC environments across India, where hiring 500+ engineers per quarter
              requires decision control, the gap between what leadership expects and what hiring
              pipelines actually deliver is enormous. Scores vary by interviewer, standards drift
              across locations, and no one can explain why one candidate ranked above another.
            </p>
            <p>
              We built LayersRank to close that gap with structured scoring, confidence-weighted
              ranking, and explainable decision trails that hold up to audit.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Our Values</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Transparency</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every score is explainable. Every ranking decision maps to evidence. No black boxes
                in hiring.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Rigor</h3>
              <p className="mt-2 text-sm text-ink-light">
                Mathematical frameworks, not gut feel. Structured scoring rubrics, confidence
                intervals, and calibration protocols built on IO psychology research.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Fairness</h3>
              <p className="mt-2 text-sm text-ink-light">
                Pedigree-neutral, bias-aware evaluation. We measure what candidates can do, not
                where they went to school or which company they came from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hubs — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Where We Operate</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            We serve teams across India and are expanding into the Middle East.
          </p>
          <div className="mt-10 rounded-xl border border-gray-600 bg-white/5 p-6">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-brand-yellow">Expanding soon:</span> KSA and UAE.
              Interested in partnering with us in the Middle East?
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Contact us at{' '}
              <a href="mailto:hello@layersrank.com" className="text-brand-yellow underline hover:text-brand-orange">
                hello@layersrank.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Join our mission"
        description="Help us make hiring decisions confident and fair for every organization."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="Contact Us"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
