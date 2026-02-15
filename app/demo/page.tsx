import Link from 'next/link';
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
            <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8">
              <h2 className="text-xl font-bold">Request a demo</h2>
              <p className="mt-2 text-sm text-gray-400">
                Fill out the form and we&apos;ll schedule a personalized walkthrough.
              </p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First name</label>
                    <input
                      id="firstName"
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                      placeholder="Priya"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last name</label>
                    <input
                      id="lastName"
                      type="text"
                      className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                      placeholder="Sharma"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Work email</label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                    placeholder="priya@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company</label>
                  <input
                    id="company"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300">Hiring team size</label>
                  <select
                    id="teamSize"
                    className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 people</option>
                    <option value="11-50">11-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="201-1000">201-1,000 people</option>
                    <option value="1000+">1,000+ people</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">What are you looking to solve?</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                    placeholder="Tell us about your hiring challenges..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-yellow py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange"
                >
                  Request Demo
                </button>
                <p className="text-center text-xs text-gray-500">
                  By submitting, you agree to our{' '}
                  <Link href="/legal/privacy" className="underline">Privacy Policy</Link>.
                </p>
              </form>
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
