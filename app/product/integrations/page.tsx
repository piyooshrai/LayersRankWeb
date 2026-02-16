import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA, FeatureCard, FeatureGrid } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata = makeMetadata({
  title: 'Integrations | LayersRank',
  description:
    'Connect LayersRank to your ATS, HRIS, and hiring workflow tools. Push candidates in, pull reports back. Integrations with Workday, Greenhouse, Lever, and more.',
  path: '/product/integrations',
});

const atsIntegrations = [
  { name: 'Workday', status: 'Available' },
  { name: 'Greenhouse', status: 'Available' },
  { name: 'Lever', status: 'Available' },
  { name: 'SAP SuccessFactors', status: 'Available' },
  { name: 'Oracle Taleo', status: 'Available' },
  { name: 'iCIMS', status: 'Available' },
  { name: 'SmartRecruiters', status: 'Available' },
  { name: 'Custom API', status: 'Build Your Own' },
];

const steps = [
  {
    number: '01',
    title: 'Connect Your ATS',
    description:
      'Authenticate with your ATS in minutes using OAuth or API key. LayersRank supports all major platforms with pre-built connectors.',
  },
  {
    number: '02',
    title: 'Select Candidates',
    description:
      'Push candidates from your ATS pipeline into LayersRank for assessment. Select individually, in bulk, or set up automatic triggers based on pipeline stage.',
  },
  {
    number: '03',
    title: 'Candidate Receives Link',
    description:
      'Each candidate gets a personalized interview link via email. No app downloads, no account creation. They click, they interview.',
  },
  {
    number: '04',
    title: 'Report Syncs Back',
    description:
      'When the interview is complete and scored, the report, verdict, and key scores sync directly back to the candidate profile in your ATS.',
  },
];

const apiFeatures = [
  {
    title: 'Trigger Interviews Programmatically',
    description:
      'Use the REST API to create interview sessions, assign question sets, and send candidate invitations from your own systems. Full control over the workflow.',
  },
  {
    title: 'Retrieve Reports via Webhook',
    description:
      'Register webhook endpoints to receive real-time notifications when interviews are completed. Pull the full report payload as soon as scoring finishes.',
  },
  {
    title: 'Custom Workflow Orchestration',
    description:
      'Chain LayersRank into multi-step hiring pipelines. Trigger assessments based on coding challenge results, screening calls, or any upstream event in your stack.',
  },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Product"
        title="Plugs Into Your Stack"
        description="Push candidates from your ATS. Pull reports back. No workflow disruption."
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="ATS integration flow diagram" search="software integration workflow diagram" />
        </div>
      </section>

      {/* ATS Integrations */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">ATS integrations</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Pre-built connectors for the platforms your team already uses. Connect in minutes, not weeks.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {atsIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-paper-off">
                  <span className="text-lg font-bold text-ink">
                    {integration.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-ink">
                  {integration.name}
                </h3>
                <p
                  className={`mt-1 text-xs font-medium ${
                    integration.status === 'Available'
                      ? 'text-brand-green'
                      : 'text-brand-orange'
                  }`}
                >
                  {integration.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How it works</h2>
          <p className="mt-2 max-w-2xl text-ink-light">
            Four steps from your ATS to a scored candidate report. No manual handoffs.
          </p>
          <div className="mt-10 grid gap-0 md:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-gray-300 md:block" />
                )}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white shadow-lg">
                  <span className="font-mono text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-[260px] text-sm text-ink-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Access */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold">Full API for custom workflows</h2>
              <p className="mt-4 text-gray-300">
                When pre-built integrations are not enough, the LayersRank API gives you
                complete programmatic control. Trigger interviews, retrieve reports, and
                orchestrate multi-step hiring pipelines from your own systems.
              </p>
              <div className="mt-6">
                <Link
                  href="/demo"
                  className="inline-flex rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange"
                >
                  Request API Access
                </Link>
              </div>
            </div>
            <div className="space-y-4 lg:w-2/3">
              {apiFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-bold text-brand-yellow">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}

              {/* Code snippet preview */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                  <span className="ml-2 font-mono text-xs text-gray-400">
                    create-interview.sh
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-gray-300">
                  <code>{`curl -X POST https://api.layersrank.com/v1/interviews \\
  -H "Authorization: Bearer $LAYERSRANK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "candidate_email": "alex@example.com",
    "role_id": "senior-software-engineer",
    "question_set": "technical-behavioral",
    "callback_url": "https://your-app.com/webhooks/lr"
  }'`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Connect your tools"
        description="See how LayersRank fits into your existing hiring stack with zero workflow disruption."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
