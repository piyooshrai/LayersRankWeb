import Link from 'next/link';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Hiring Software Dubai & Middle East | LayersRank',
  description:
    'Structured hiring platform for UAE, Saudi Arabia, Qatar, and the wider Gulf region. LayersRank offers multi-language support, regional compliance, and time-zone-aligned service for Middle East hiring teams.',
  path: '/solutions/middle-east',
});

export default function MiddleEastPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Middle East"
        title="Structured Hiring for the Gulf"
        description="From Dubai to Riyadh to Doha — hiring teams across the Gulf need assessment tools that work in their language, their time zone, and their regulatory environment. LayersRank delivers structured candidate evaluation built for the region."
        primaryCta="Talk to Our Middle East Team"
        primaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Dubai business district office" search="dubai office business professionals" />
        </div>
      </section>

      {/* Regional Focus — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Regional Focus</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            LayersRank is designed to meet the specific requirements of Gulf-based hiring teams,
            from language to compliance to local commercial terms.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Multi-Language Support</h3>
              <p className="mt-2 text-sm text-ink-light">
                Full platform support for English and Arabic. Candidate-facing assessment interfaces,
                recruiter dashboards, and generated reports are available in both languages to
                support diverse hiring workflows across the region.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Regional Compliance</h3>
              <p className="mt-2 text-sm text-ink-light">
                Compliant with UAE PDPL, Saudi PDPL, and Qatar data protection regulations. Data
                handling practices align with regional requirements for candidate data storage,
                processing, and cross-border transfer.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Time Zone Aligned Support</h3>
              <p className="mt-2 text-sm text-ink-light">
                Customer support and implementation assistance available during Gulf business hours
                (GST/AST). No waiting for US or European time zones to start their day — your
                questions get answered when you need them.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">USD / AED Pricing</h3>
              <p className="mt-2 text-sm text-ink-light">
                Transparent pricing in USD or AED with regional commercial terms. Plans are
                structured for Gulf hiring volumes and team sizes, with flexible billing arrangements
                for enterprise accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gulf Hiring Landscape — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The Gulf Hiring Landscape</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            The Middle East hiring market has its own dynamics — rapid economic diversification,
            multinational workforces, and high expectations for structured processes.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                city: 'Dubai & Abu Dhabi',
                description:
                  'UAE leads the region in GCC expansion, fintech growth, and government digitization. Hiring teams need to evaluate diverse, multinational candidate pools at speed.',
              },
              {
                city: 'Riyadh & Jeddah',
                description:
                  'Saudi Vision 2030 is driving unprecedented demand for skilled talent across technology, infrastructure, and financial services. Structured hiring supports Saudization compliance.',
              },
              {
                city: 'Doha & Manama',
                description:
                  'Qatar and Bahrain are building technology and financial hubs that require world-class hiring practices to attract and evaluate international talent.',
              },
            ].map((item) => (
              <div key={item.city} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">{item.city}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Structured Hiring — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Why Structured Hiring Matters in the Gulf</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Multinational workforces, rapid scaling, and regulatory evolution make structured
            evaluation essential — not optional.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Diverse Candidate Pools',
                description:
                  'Gulf companies hire from dozens of nationalities. Structured scoring removes cultural bias and ensures every candidate is evaluated on the same objective criteria.',
              },
              {
                title: 'Nationalization Programs',
                description:
                  'Saudization, Emiratization, and similar programs require defensible hiring records that demonstrate fair evaluation of national candidates.',
              },
              {
                title: 'Rapid Scale Requirements',
                description:
                  'Mega-projects and economic diversification initiatives create hiring surges that require scalable, consistent assessment infrastructure.',
              },
              {
                title: 'Executive Visibility',
                description:
                  'Gulf leadership teams expect clear reporting on hiring quality, speed, and compliance. Structured data from LayersRank provides this visibility without manual report assembly.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-600 bg-white/5 p-6">
                <h3 className="font-bold text-brand-yellow">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Talk to Our Middle East Team"
        description="See how LayersRank supports Gulf hiring teams with Arabic language support, regional compliance, and local service."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
