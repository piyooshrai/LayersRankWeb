import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Resources Hub | LayersRank',
  description: 'Technical blog, whitepapers, and hiring science resources for explainable AI recruitment.',
  path: '/resources'
});

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Resources Hub</h1>
      <p className="text-slate-700">Practical guidance on structured interview scoring, hiring consistency, GCC standards, and interview operations.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/blog" className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-navy">Blog</h2>
          <p className="mt-2 text-slate-700">Topic clusters and operational playbooks.</p>
        </Link>
        <Link href="/resources/whitepapers" className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-navy">Whitepapers</h2>
          <p className="mt-2 text-slate-700">Downloadable technical research on confidence scoring, bias, and structured interviews.</p>
        </Link>
      </div>
    </div>
  );
}
