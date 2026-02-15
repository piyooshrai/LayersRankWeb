import { Section } from '@/components/section';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Product Workflow | LayersRank',
  description: 'From intake to dossier export: a confidence-weighted hiring workflow integrated with ATS and interview tools.',
  path: '/product'
});

const steps = ['Intake', 'Signal capture', 'Multi-dimensional scoring', 'Confidence weighting', 'Explainability trail', 'Shortlist + dossier export'];

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Hiring workflow built for rigor, not guesswork.</h1>
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
            <p className="font-medium text-navy">Signal fusion graph</p>
            <div className="mt-3 h-36 rounded border border-dashed border-slate-400 p-4 text-sm text-slate-600">ATS + coding + panel interview + references flow into fuzzy evidence vectors.</div>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-medium text-navy">Confidence pipeline</p>
            <div className="mt-3 h-36 rounded border border-dashed border-slate-400 p-4 text-sm text-slate-600">Rank score μ, hesitation π, and confidence band all preserved in shortlist export.</div>
          </div>
        </div>
      </Section>
      <Section title="Integrations">
        <p>Integrate with ATS, coding interview platforms, structured interview templates, and references. Every signal keeps source metadata for downstream audit trails and global HQ reporting.</p>
      </Section>
    </div>
  );
}
