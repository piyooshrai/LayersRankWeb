import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudy, caseStudies } from '@/lib/content';
import { makeMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return makeMetadata({
    title: `${cs.title} | LayersRank Case Studies`,
    description: cs.description,
    path: `/resources/case-studies/${cs.slug}`,
  });
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();
  const Body = cs.component;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <Body />

        {/* Back link */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all case studies
          </Link>
        </div>
      </div>
    </div>
  );
}
