import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Enterprise Hiring Platform | LayersRank',
  description:
    'Standardize interview scoring and hiring decisions across business units and geographies with an enterprise hiring platform built for consistency, compliance, and scale.',
  path: '/solutions/enterprise',
});

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Enterprise"
        title="Standardize Hiring Across Your Organization"
        description="Large organizations need consistency across business units, geographies, and hiring managers. LayersRank gives enterprise teams a single structured framework for interview scoring, candidate ranking, and decision-making — so every office hires to the same standard."
        primaryCta="Talk to Enterprise Sales"
        primaryCtaHref="/demo"
        secondaryCta="View Pricing"
        secondaryCtaHref="/pricing"
      />

      {/* Enterprise Challenges — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Enterprise Hiring Challenges</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Scaling hiring quality across a large organization introduces structural problems that
            no amount of recruiter training alone can solve.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Different BUs, Different Standards</h3>
              <p className="mt-2 text-sm text-ink-light">
                Each business unit develops its own interview culture over time. What counts as a
                &quot;strong candidate&quot; in engineering may look completely different from product or
                sales — and even within engineering, standards drift across teams and locations.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Compliance and Audit Requirements</h3>
              <p className="mt-2 text-sm text-ink-light">
                Regulated industries and public companies need defensible hiring records. Ad-hoc
                interview notes and unstructured feedback create risk during audits and equal
                opportunity reviews.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Legacy ATS Integration</h3>
              <p className="mt-2 text-sm text-ink-light">
                Enterprise teams run on established applicant tracking systems. Any new hiring tool
                must integrate cleanly with existing workflows, not replace them, or adoption stalls.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-ink">Change Management at Scale</h3>
              <p className="mt-2 text-sm text-ink-light">
                Rolling out new processes across hundreds of hiring managers requires phased
                implementation, training, and executive sponsorship. Tools that demand overnight
                adoption fail in enterprise environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Enterprise-Grade Features</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Built for the security, control, and customization requirements of large organizations.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'SSO & Access Controls',
                description:
                  'SAML 2.0 and OIDC single sign-on with role-based access controls. Define who can create assessments, review scores, and export data at the team, department, or organization level.',
              },
              {
                title: 'Custom Question Libraries per BU',
                description:
                  'Each business unit can maintain its own question bank while sharing a common scoring rubric. Centralized governance with decentralized flexibility.',
              },
              {
                title: 'Compliance-Ready Audit Trails',
                description:
                  'Every interview interaction, score, and decision is logged with timestamps and user attribution. Export audit reports for EEOC, OFCCP, or internal compliance reviews.',
              },
              {
                title: 'Dedicated Implementation Support',
                description:
                  'A named implementation manager guides your rollout from pilot to full deployment. Includes interviewer training, scorecard design, and integration setup.',
              },
              {
                title: 'SLA-Backed Uptime',
                description:
                  '99.9% uptime SLA with priority incident response. Enterprise plans include dedicated infrastructure and proactive monitoring for your account.',
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Security & Compliance</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Enterprise security is not an add-on. It is foundational to how LayersRank is built and
            operated.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                badge: 'SOC 2 Type II',
                description:
                  'Annual third-party audit of security controls covering availability, confidentiality, and processing integrity.',
              },
              {
                badge: 'GDPR',
                description:
                  'Full GDPR compliance including data subject access requests, right to erasure, and lawful processing documentation.',
              },
              {
                badge: 'ISO 27001',
                description:
                  'Information security management system certified to international standards for risk management and data protection.',
              },
              {
                badge: 'Data Residency Options',
                description:
                  'Choose where your data is stored and processed. Available regions include US, EU, India, and the Middle East.',
              },
            ].map((cert) => (
              <div key={cert.badge} className="rounded-xl border border-gray-600 bg-white/5 p-6">
                <p className="font-mono text-sm font-bold text-brand-yellow">{cert.badge}</p>
                <p className="mt-2 text-sm text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Talk to Enterprise Sales"
        description="See how LayersRank standardizes hiring across your organization. 30-minute demo tailored to your scale."
        cta="Book an Enterprise Demo"
        ctaHref="/demo"
        secondaryCta="View Pricing"
        secondaryCtaHref="/pricing"
      />
    </>
  );
}
