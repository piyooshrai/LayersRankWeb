import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Pricing | LayersRank',
  description: 'Growth and Enterprise tiers for confidence-weighted hiring and auditable candidate ranking.',
  path: '/pricing'
});

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Pricing</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-navy">Growth</h2>
          <p className="mt-2 text-slate-700">For startups and emerging hiring teams.</p>
          <p className="mt-4 font-mono text-sm text-slate-600">Starting at: Contact Sales</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-navy">Enterprise</h2>
          <p className="mt-2 text-slate-700">For GCC and MNC talent organizations.</p>
          <p className="mt-4 font-mono text-sm text-slate-600">Starting at: Contact Sales</p>
        </div>
      </div>
      <table className="w-full border-collapse overflow-hidden rounded-xl border border-slate-200 bg-white text-sm">
        <thead className="bg-slate-100 text-left">
          <tr><th className="p-3">Capability</th><th className="p-3">Growth</th><th className="p-3">Enterprise</th></tr>
        </thead>
        <tbody>
          <tr className="border-t"><td className="p-3">Rigor model depth</td><td className="p-3">Core structured scoring</td><td className="p-3">Advanced confidence model tuning</td></tr>
          <tr className="border-t"><td className="p-3">Auditability</td><td className="p-3">Standard trails</td><td className="p-3">HQ-grade audit dossiers</td></tr>
          <tr className="border-t"><td className="p-3">Scale</td><td className="p-3">Up to mid-volume</td><td className="p-3">10,000+ resume pipelines</td></tr>
          <tr className="border-t"><td className="p-3">Integrations</td><td className="p-3">ATS + coding tools</td><td className="p-3">ATS + interview stack + references API</td></tr>
        </tbody>
      </table>
    </div>
  );
}
