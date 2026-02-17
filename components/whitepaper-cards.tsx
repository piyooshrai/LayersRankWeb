'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WhitepaperGateModal } from './whitepaper-gate-modal';

export interface WhitepaperDef {
  category: 'science' | 'results';
  categoryLabel: string;
  status: string;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  audience: string;
  format: string;
  slug: string;
  secondaryLabel: string | null;
  secondaryHref: string | null;
}

const categoryColors: Record<string, { dot: string; hex: string }> = {
  science: { dot: 'bg-[#3b82f6]', hex: '#3b82f6' },
  results: { dot: 'bg-[#2ecc71]', hex: '#2ecc71' },
};

export function WhitepaperCards({ papers }: { papers: WhitepaperDef[] }) {
  const [modalPaper, setModalPaper] = useState<WhitepaperDef | null>(null);

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-3">
        {papers.map((paper) => {
          const colors = categoryColors[paper.category];
          return (
            <div
              key={paper.title}
              className="flex flex-col rounded-2xl border border-gray-200 border-t-4 bg-white shadow-sm transition-shadow hover:shadow-md"
              style={{ borderTopColor: colors.hex }}
            >
              <div className="flex flex-1 flex-col p-6">
                {/* Category + status */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    <span className={`inline-block h-2 w-2 rounded-full ${colors.dot}`} />
                    {paper.categoryLabel}
                  </span>
                  <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold text-brand-green">
                    {paper.status}
                  </span>
                </div>

                {/* PDF icon + title */}
                <div className="mt-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink/5">
                    <svg className="h-6 w-6 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9l-5-5H7a2 2 0 00-2 2v13a2 2 0 002 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 4v5h5" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold leading-snug text-ink">{paper.title}</h2>
                    <p className="mt-0.5 text-sm text-ink-muted">{paper.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-light">{paper.description}</p>

                {/* Details row */}
                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {paper.pages} pages
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {paper.audience}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {paper.format}
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="border-t border-gray-100 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setModalPaper(paper)}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-ink hover:bg-brand-orange"
                  >
                    Download PDF
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  {paper.secondaryLabel && paper.secondaryHref && (
                    <Link
                      href={paper.secondaryHref}
                      className="text-sm font-medium text-ink-muted hover:text-ink"
                    >
                      {paper.secondaryLabel} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Email gate modal */}
      {modalPaper && (
        <WhitepaperGateModal
          open={!!modalPaper}
          onClose={() => setModalPaper(null)}
          title={modalPaper.title}
          subtitle={modalPaper.subtitle}
          pageCount={modalPaper.pages}
          downloadUrl={`/resources/whitepapers/${modalPaper.slug}`}
        />
      )}
    </>
  );
}
