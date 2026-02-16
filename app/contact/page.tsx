import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Contact LayersRank',
  description:
    'Sales, support, partnerships, or press — get in touch with the LayersRank team.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Sales, support, partnerships, or press — we'd love to hear from you."
      />

      {/* Contact Form — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink">Send Us a Message</h2>
          <p className="mt-2 text-ink-light">
            Fill out the form below and we&apos;ll get back to you within one business day.
          </p>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-ink">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              >
                <option value="">Select a subject</option>
                <option value="sales">Sales Inquiry</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
                <option value="press">Press</option>
                <option value="general">General</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Direct Contacts — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Direct Contacts</h2>
          <p className="mt-2 text-ink-light">
            Know who you need to reach? Contact the right team directly.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Sales</h3>
              <p className="mt-2 text-sm text-ink-light">
                Pricing, demos, and enterprise inquiries.
              </p>
              <a
                href="mailto:sales@layersrank.com"
                className="mt-3 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                sales@layersrank.com
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Support</h3>
              <p className="mt-2 text-sm text-ink-light">
                Technical help, account questions, and product feedback.
              </p>
              <a
                href="mailto:support@layersrank.com"
                className="mt-3 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                support@layersrank.com
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Partnerships</h3>
              <p className="mt-2 text-sm text-ink-light">
                Integration partnerships, reseller programs, and strategic alliances.
              </p>
              <a
                href="mailto:partners@layersrank.com"
                className="mt-3 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                partners@layersrank.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Office Locations</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Our teams are distributed across India&apos;s major technology hubs.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { city: 'Bangalore', label: 'Primary' },
              { city: 'Hyderabad', label: null },
              { city: 'Pune', label: null },
              { city: 'NCR', label: null },
            ].map((office) => (
              <div key={office.city} className="rounded-xl border border-gray-600 bg-white/5 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">{office.city}</h3>
                {office.label && (
                  <span className="mt-1 inline-block rounded-full bg-brand-yellow/10 px-2 py-0.5 text-xs font-medium text-brand-yellow">
                    {office.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
