import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Careers at LayersRank | Join Us',
  description:
    'We\'re looking for people who believe hiring should be fair, data-driven, and transparent. Explore open roles at LayersRank.',
  path: '/careers',
});

const openRoles = [
  {
    title: 'Senior ML Engineer',
    location: 'Bangalore',
    type: 'Full-time',
    description:
      'Design and improve confidence-weighted scoring models, bias detection pipelines, and adaptive follow-up algorithms. Strong foundation in applied ML and production systems required.',
  },
  {
    title: 'Full Stack Engineer',
    location: 'Remote India',
    type: 'Full-time',
    description:
      'Build and maintain the LayersRank platform end-to-end. Work across Next.js, TypeScript, and Python services powering structured interview workflows.',
  },
  {
    title: 'Product Designer',
    location: 'Bangalore',
    type: 'Full-time',
    description:
      'Shape how recruiters, hiring managers, and candidates experience structured hiring. Design decision interfaces that make complex data clear and actionable.',
  },
  {
    title: 'Customer Success Manager',
    location: 'Hyderabad',
    type: 'Full-time',
    description:
      'Partner with enterprise and GCC clients to drive adoption, measure outcomes, and ensure LayersRank delivers measurable hiring quality improvements.',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Careers"
        title="Build the Future of Hiring"
        description="We're looking for people who believe hiring should be fair, data-driven, and transparent."
      />

      {/* Why LayersRank — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why LayersRank</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Work on Real AI Problems</h3>
              <p className="mt-2 text-sm text-ink-light">
                Not another chatbot wrapper. You will work on confidence modeling, bias detection,
                adaptive assessment engines, and explainable decision systems that directly impact
                hiring quality at scale.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Small Team, High Impact</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every person shapes the product, the culture, and the roadmap. No layers of
                approvals. Ship fast, learn faster, and see your work directly improve how
                organizations hire.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Remote-Friendly</h3>
              <p className="mt-2 text-sm text-ink-light">
                We are async-first with hubs across India. Work from where you do your best work.
                We care about outcomes, not office hours.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Competitive Equity</h3>
              <p className="mt-2 text-sm text-ink-light">
                Early-stage equity for every team member. We are building something meaningful,
                and everyone who contributes should share in the upside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Open Roles</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            We are growing across engineering, product, and customer success. If you see a role
            that fits, apply below.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {openRoles.map((role) => (
              <div key={role.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-ink">{role.title}</h3>
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-yellow/10 px-3 py-1 text-xs font-medium text-ink">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {role.location}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
                    {role.type}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-light">{role.description}</p>
                <a
                  href={`mailto:careers@layersrank.com?subject=Application: ${role.title}`}
                  className="mt-4 inline-flex rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Culture</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            How we work together matters as much as what we build.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Async-First Communication',
                description:
                  'Thoughtful written communication over real-time interruptions. Meetings are reserved for decisions, not status updates.',
              },
              {
                title: 'Quarterly Offsites',
                description:
                  'Every quarter, the team comes together in person for planning, workshops, and connection. Remote work plus real relationships.',
              },
              {
                title: 'Learning Budget',
                description:
                  'Annual budget for courses, conferences, books, and certifications. We invest in our people growing beyond their current role.',
              },
              {
                title: 'Open-Source Encouraged',
                description:
                  'We believe in contributing back to the community. Team members are encouraged to open-source tools and share learnings publicly.',
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
        title="Don't see your role?"
        description="Reach out anyway. We're always looking for exceptional people who share our mission."
        cta="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
