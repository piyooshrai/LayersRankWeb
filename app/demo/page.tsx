import { ProductMockup } from '@/components/product-mockup';
import { DemoForm } from '@/components/demo-form';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Book a Demo | LayersRank',
  description:
    'Schedule a 20-minute demo to see how LayersRank improves hiring quality with structured scoring, confidence-weighted ranking, and adaptive follow-up.',
  path: '/demo',
});

export default function DemoPage() {
  return (
    <>
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Book a Demo</p>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                See LayersRank in action
              </h1>
              <p className="text-lg text-gray-300">
                20-minute walkthrough. No commitment. See how structured scoring and confidence-weighted
                ranking can improve your hiring quality.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Live product walkthrough</p>
                    <p className="text-sm text-gray-400">See the full workflow from intake to ranked shortlist</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Sample candidate report</p>
                    <p className="text-sm text-gray-400">Review a real report with scores, confidence, and evidence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">ROI discussion</p>
                    <p className="text-sm text-gray-400">Estimate time and cost savings for your team size</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium">Integration review</p>
                    <p className="text-sm text-gray-400">See how LayersRank connects with your existing tools</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="space-y-8">
            <ProductMockup type="demo-preview" />
            <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-paper py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6">
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <svg className="h-5 w-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <svg className="h-5 w-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            20-minute session
          </div>
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <svg className="h-5 w-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Personalized to your team
          </div>
        </div>
      </section>
    </>
  );
}
