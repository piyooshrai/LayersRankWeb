import { PageHero } from '@/components/page-sections';
import { ContactForm } from '@/components/contact-form';
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
          <ContactForm />
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
                href="mailto:info@the-algo.com"
                className="mt-3 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                info@the-algo.com
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
                href="mailto:info@the-algo.com"
                className="mt-3 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                info@the-algo.com
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
                href="mailto:info@the-algo.com"
                className="mt-3 inline-block text-sm font-medium text-brand-yellow hover:text-brand-orange"
              >
                info@the-algo.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
