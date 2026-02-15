import Link from 'next/link';
import { Section } from '@/components/section';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Hiring Workflow and Integrations | LayersRank',
  description:
    'See how LayersRank standardizes intake, interview scoring, confidence checks, and shortlist reporting across ATS and interview systems.',
  path: '/product'
});

const steps = ['Intake', 'Signal capture', 'Structured scoring', 'Confidence check', 'Decision trail', 'Shortlist + dossier export'];

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">A hiring workflow designed for consistent decisions.</h1>
      <Section title="Workflow">
        <ol className="grid gap-3 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} className="rounded-lg border border-slate-200 p-4">
              <p className="font-mono text-xs text-slate-500">0{index + 1}</p>
              <h3 className="font-medium text-navy">{step}</h3>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="System diagrams">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-medium text-navy">Signal fusion map</p>
            <div className="mt-3 h-36 rounded border border-dashed border-slate-400 p-4 text-sm text-slate-600">
              ATS data, interview scorecards, coding assessments, and references are normalized into one decision view.
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-medium text-navy">Confidence and ranking pipeline</p>
            <div className="mt-3 h-36 rounded border border-dashed border-slate-400 p-4 text-sm text-slate-600">
              Candidate scores are ranked with confidence indicators so teams know when to finalize and when to gather more evidence.
            </div>
          </div>
        </div>
      </Section>
      <Section title="Integrations">
        <p>
          Connect LayersRank with ATS platforms, coding interview tools, structured interview workflows, and reference checks.
          Every decision keeps source metadata for leadership review and process improvement.
        </p>
        <div className="flex flex-wrap gap-4 pt-1 text-sm">
          <Link href="/science" className="text-navy underline">Why traditional scores fail</Link>
          <Link href="/solutions/gcc" className="text-navy underline">GCC solution</Link>
          <Link href="/solutions/startups" className="text-navy underline">Startup solution</Link>
        </div>
      </Section>
    </div>
  );
}
