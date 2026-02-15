import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { whitepapers } from '@/lib/content';

export const metadata = makeMetadata({
  title: 'Whitepapers | LayersRank',
  description: 'Download technical whitepapers on explainable hiring and GCC hiring rigor benchmarks.',
  path: '/resources/whitepapers'
});

export default function WhitepapersListingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Whitepapers</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {whitepapers.map((paper) => (
          <Link key={paper.slug} href={`/resources/whitepapers/${paper.slug}`} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-navy">{paper.title}</h2>
            <p className="mt-2 text-slate-700">{paper.description}</p>
          </Link>
        ))}
      </div>
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6">
        <h2 className="text-xl font-semibold text-navy">Email gate stub</h2>
        <form className="mt-3 grid gap-3 md:grid-cols-[1fr,auto]">
          <input type="email" placeholder="work email" className="rounded border border-slate-300 px-3 py-2" />
          <button className="rounded bg-navy px-4 py-2 text-white">Request access</button>
        </form>
        <p className="mt-2 text-xs text-slate-500">TODO: connect to CRM/marketing automation backend.</p>
      </div>
    </div>
  );
}
