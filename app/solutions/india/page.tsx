import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Hiring Platform India | LayersRank',
  description:
    'Recruitment software built for Indian hiring teams. LayersRank supports GCCs, startups, and campus drives across Bangalore, Hyderabad, Pune, Chennai, and NCR with India-based data residency and INR pricing.',
  path: '/solutions/india',
});

const cities = [
  {
    name: 'Bangalore',
    description: 'India\'s largest tech hub. Home to hundreds of GCCs, startups, and engineering centers.',
  },
  {
    name: 'Hyderabad',
    description: 'Rapidly growing GCC and enterprise engineering presence, especially in financial services and cloud.',
  },
  {
    name: 'Pune',
    description: 'Strong automotive, manufacturing, and IT services hiring market with deep engineering talent.',
  },
  {
    name: 'Chennai',
    description: 'Major hub for SaaS companies, IT services, and automotive R&D engineering teams.',
  },
  {
    name: 'NCR (Delhi, Gurgaon, Noida)',
    description: 'Diverse hiring landscape spanning fintech, e-commerce, consulting, and enterprise IT.',
  },
];

export default function IndiaPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="India"
        title="Built for Indian Hiring Teams"
        description="We understand the Indian hiring landscape — GCC scale programs, high-growth startups, campus drives, and the unique challenges of hiring across Bangalore, Hyderabad, Pune, Chennai, and NCR. LayersRank is built to work the way Indian teams actually hire."
        primaryCta="Talk to Our India Team"
        primaryCtaHref="/demo"
        secondaryCta="View Solutions for GCCs"
        secondaryCtaHref="/solutions/gcc"
      />

      {/* India-Specific Features — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">India-Specific Features</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Not a global product with an India afterthought. These features are built for how
            Indian hiring teams operate.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Regional Language Support',
                tag: 'Coming Soon',
                description:
                  'Assessment interfaces and candidate instructions available in Hindi, Kannada, Telugu, Tamil, and Marathi — so language is not a barrier to fair evaluation.',
              },
              {
                title: 'India-Based Data Residency',
                tag: null,
                description:
                  'All candidate data is stored and processed within Indian data centers. Full compliance with Indian data protection regulations and enterprise data sovereignty requirements.',
              },
              {
                title: 'INR Pricing',
                tag: null,
                description:
                  'Transparent pricing in Indian Rupees with no currency conversion surprises. Plans designed for Indian team sizes and hiring volumes.',
              },
              {
                title: 'Local Support Team',
                tag: null,
                description:
                  'IST-hours support from a team that understands Indian hiring culture, campus seasons, notice periods, and the realities of high-volume recruiting.',
              },
              {
                title: 'Indian Job Board Integration',
                tag: null,
                description:
                  'Connect with Naukri, LinkedIn India, and other local sourcing platforms. Import candidates directly into LayersRank assessments without manual data entry.',
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                  {feature.tag && (
                    <span className="rounded-full bg-brand-yellow/10 px-2 py-0.5 text-xs font-semibold text-brand-yellow">
                      {feature.tag}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ink-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Presence — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Our Presence Across India</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            LayersRank serves hiring teams in every major Indian tech hub. Our customers include
            GCCs, product startups, IT services companies, and recruitment agencies operating
            across the country.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <div
                key={city.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                    <svg
                      className="h-5 w-5 text-brand-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-ink">{city.name}</h3>
                </div>
                <p className="text-sm text-ink-light">{city.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Hiring Context — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Why India Needs a Different Approach</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Indian hiring operates at a different scale and cadence. Global tools often miss the
            nuances that matter here.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Campus Season Scale',
                description:
                  'Thousands of candidates across dozens of colleges in a 3-month window. You need assessment infrastructure that handles volume without sacrificing quality.',
              },
              {
                title: 'GCC Growth Pressure',
                description:
                  'Global capability centers are scaling engineering teams rapidly. Consistency across cities and alignment with HQ standards are non-negotiable.',
              },
              {
                title: 'Startup Speed',
                description:
                  'Indian startups hire fast and compete fiercely for talent. Structured screening that does not slow down the funnel is essential.',
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
        title="Talk to Our India Team"
        description="See how LayersRank works for Indian hiring teams. Local support, INR pricing, India data residency."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="View GCC Solutions"
        secondaryCtaHref="/solutions/gcc"
      />
    </>
  );
}
