import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'AI Ethics | LayersRank',
  description:
    'We believe AI in hiring must be transparent, fair, and accountable. Read our AI principles and commitments.',
  path: '/legal/ai-ethics',
});

export default function AIEthicsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Legal"
        title="Our AI Principles"
        description="We believe AI in hiring must be transparent, fair, and accountable."
      />

      {/* Our Principles — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Our Principles</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            These principles guide every decision we make about how AI is used in the LayersRank
            platform.
          </p>
          <div className="mt-10 space-y-6">
            {[
              {
                number: '01',
                title: 'Transparency',
                description:
                  'Every score is explainable. Every ranking decision maps to specific interview evidence, scoring criteria, and confidence levels. No black-box models that produce scores without rationale.',
              },
              {
                number: '02',
                title: 'Fairness',
                description:
                  'No demographic inference. Pedigree-blind scoring that evaluates what candidates can do, not where they went to school or which company they came from. Evaluation criteria are explicit and consistently applied.',
              },
              {
                number: '03',
                title: 'Human Oversight',
                description:
                  'AI recommends, humans decide. Our system provides structured evidence, confidence scores, and ranked shortlists, but final hiring decisions always rest with human decision-makers.',
              },
              {
                number: '04',
                title: 'Accountability',
                description:
                  'Regular bias audits and monitoring across all scoring dimensions. We track outcomes, measure fairness metrics, and publish findings. When issues are found, we act on them.',
              },
              {
                number: '05',
                title: 'Candidate Respect',
                description:
                  'Informed consent before any AI-assisted evaluation. Candidates have the right to know how they are being assessed, the right to an explanation of their results, and the right to request human-only review.',
              },
            ].map((principle) => (
              <div
                key={principle.number}
                className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <span className="font-mono text-lg font-bold text-brand-yellow">
                    {principle.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">{principle.title}</h3>
                  <p className="mt-2 text-sm text-ink-light">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What We Don&apos;t Do</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Equally important to our principles is what we explicitly refuse to build or enable.
          </p>
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-8">
            <ul className="space-y-4">
              {[
                'No facial analysis for scoring — we never use video appearance or facial expressions as evaluation signals.',
                'No demographic inference — we do not attempt to infer gender, ethnicity, age, or any protected characteristic from candidate data.',
                'No penalizing non-native speakers — our scoring models are designed to evaluate substance and skill, not accent or fluency.',
                'No automated rejection without human review — every rejection decision includes a human checkpoint before communication to candidates.',
                'No selling candidate data — candidate information is used exclusively for the hiring evaluation they consented to. Period.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-ink-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bias Monitoring — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Bias Monitoring</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Fairness is not a one-time checkbox. We continuously monitor and improve our models
            to detect and mitigate bias across all dimensions.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="font-bold text-brand-yellow">Regular Bias Audits</h3>
              <p className="mt-2 text-sm text-gray-300">
                Systematic audits across gender, ethnicity, and institution. We analyze scoring
                distributions and outcomes to identify any patterns of unfair advantage or
                disadvantage.
              </p>
            </div>
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="font-bold text-brand-yellow">Dataset Diversity Monitoring</h3>
              <p className="mt-2 text-sm text-gray-300">
                We track the diversity and representativeness of our training and evaluation
                datasets. Underrepresented groups are specifically monitored to prevent systematic
                disadvantage.
              </p>
            </div>
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="font-bold text-brand-yellow">Customer Feedback Integration</h3>
              <p className="mt-2 text-sm text-gray-300">
                Our customers are partners in fairness. We actively collect and incorporate
                feedback about scoring outcomes, edge cases, and potential bias into our
                improvement pipeline.
              </p>
            </div>
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <h3 className="font-bold text-brand-yellow">Published Bias Reports</h3>
              <p className="mt-2 text-sm text-gray-300">
                We are committed to publishing regular bias monitoring reports so our customers
                and the broader community can hold us accountable.
              </p>
              <span className="mt-3 inline-block rounded-full bg-brand-yellow/10 px-3 py-1 text-xs font-medium text-brand-yellow">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Learn about our science"
        description="Explore the research and methodology behind our scoring and ranking systems."
        cta="View Science"
        ctaHref="/science"
        secondaryCta="Contact Us"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
