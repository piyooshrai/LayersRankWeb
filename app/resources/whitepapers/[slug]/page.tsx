import { notFound } from 'next/navigation';
import { MdxProse } from '@/components/mdx-prose';
import { getWhitepaper, whitepapers } from '@/lib/content';
import { makeMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return whitepapers.map((paper) => ({ slug: paper.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const paper = getWhitepaper(params.slug);
  if (!paper) return {};
  return makeMetadata({ title: `${paper.title} | LayersRank Whitepapers`, description: paper.description, path: `/resources/whitepapers/${paper.slug}` });
}

export default function WhitepaperDetailPage({ params }: { params: { slug: string } }) {
  const paper = getWhitepaper(params.slug);
  if (!paper) notFound();
  const Body = paper.component;

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">{paper.title}</h1>
      <p className="text-slate-700">{paper.description}</p>
      <MdxProse>
        <Body />
      </MdxProse>
      <button className="rounded bg-navy px-5 py-3 text-white">Download PDF (CTA stub)</button>
    </div>
  );
}
