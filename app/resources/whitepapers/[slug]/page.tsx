import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWhitepaper, whitepapers } from '@/lib/content';
import { makeMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return whitepapers.map((paper) => ({ slug: paper.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const paper = getWhitepaper(params.slug);
  if (!paper) return {};
  return makeMetadata({
    title: `${paper.title} | LayersRank Whitepapers`,
    description: paper.description,
    path: `/resources/whitepapers/${paper.slug}`,
  });
}

export default function WhitepaperDetailPage({ params }: { params: { slug: string } }) {
  const paper = getWhitepaper(params.slug);
  if (!paper) notFound();
  const Body = paper.component;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <Body />

        {/* Back link */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/resources/whitepapers"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all whitepapers
          </Link>
        </div>
      </div>
    </div>
  );
}
