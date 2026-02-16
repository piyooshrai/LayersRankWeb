import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Security & Compliance | LayersRank',
  description:
    'Your data is protected by industry-leading security practices and compliance certifications. SOC 2 Type II, GDPR, and ISO 27001.',
  path: '/security',
});

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Security"
        title="Enterprise-Grade Security"
        description="Your data is protected by industry-leading security practices and compliance certifications."
      />

      <section className="bg-paper-off px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <ImagePlaceholder label="Enterprise security infrastructure" search="data security infrastructure server" />
        </div>
      </section>

      {/* Certifications — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Certifications</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            LayersRank maintains industry-recognized certifications to ensure your hiring data
            meets the highest standards of protection.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">SOC 2 Type II</h3>
              <p className="mt-2 text-sm text-ink-light">
                Annual third-party audit of security, availability, and confidentiality controls.
                Validated by independent auditors on a continuous basis.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">GDPR Compliant</h3>
              <p className="mt-2 text-sm text-ink-light">
                Full EU data protection compliance including data subject access requests, right
                to erasure, and lawful processing documentation.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">ISO 27001</h3>
              <p className="mt-2 text-sm text-ink-light">
                Information security management system certified to international standards for
                risk management and data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Practices — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Security Practices</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Security is not an afterthought. It is built into every layer of the LayersRank
            platform.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Data Encryption at Rest and in Transit',
                description:
                  'All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Encryption keys are managed through dedicated key management services with automatic rotation.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: 'Role-Based Access Controls',
                description:
                  'Granular permissions ensure that users only access the data and features they need. Admin, manager, interviewer, and viewer roles with customizable permissions.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                title: 'Regular Penetration Testing',
                description:
                  'We conduct regular third-party penetration tests to identify and address vulnerabilities before they become risks. Results are reviewed and acted on promptly.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                title: 'Vulnerability Disclosure Program',
                description:
                  'We maintain a responsible disclosure program for security researchers. Report vulnerabilities through our security contact and receive acknowledgment within 24 hours.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
            ].map((practice) => (
              <div key={practice.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  {practice.icon}
                </div>
                <h3 className="text-lg font-bold text-ink">{practice.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Residency — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Data Residency</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Choose where your data lives. We support multiple residency options for regulatory
            compliance and data sovereignty requirements.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-yellow">India Data Residency</h3>
              <p className="mt-2 text-sm text-gray-300">
                Data stored and processed within India. Available by default for all Indian
                customers. Compliant with local data localization requirements.
              </p>
            </div>
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-yellow">EU Data Residency</h3>
              <p className="mt-2 text-sm text-gray-300">
                Data stored and processed within the European Union. Full GDPR compliance with EU
                data protection standards and oversight.
              </p>
            </div>
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-yellow">Custom Residency for Enterprise</h3>
              <p className="mt-2 text-sm text-gray-300">
                Need data stored in a specific region? Enterprise customers can request custom
                residency configurations to meet their regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Contact — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-paper-off p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-ink">Report a Vulnerability</h2>
            <p className="mt-2 text-ink-light">
              Found a security issue? We take all reports seriously and will acknowledge your
              report within 24 hours.
            </p>
            <a
              href="mailto:security@layersrank.com"
              className="mt-4 inline-block text-lg font-semibold text-brand-yellow hover:text-brand-orange"
            >
              security@layersrank.com
            </a>
            <p className="mt-2 text-sm text-ink-muted">24-hour acknowledgment SLA</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Talk to our security team"
        description="Have questions about our security practices or need a security review for your procurement process?"
        cta="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
