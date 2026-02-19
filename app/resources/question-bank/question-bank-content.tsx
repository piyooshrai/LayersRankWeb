'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LeadGateForm } from '@/components/lead-gate-form';
import { sections, scoringFramework, bestPractices } from './questions';
import type { Question, Section } from './questions';

/* ── Dimension icons (section colors) ─────────────────── */

const sectionColors: Record<number, { bg: string; text: string; border: string; badge: string }> = {
  1: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  2: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  3: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  4: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
  5: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700' },
};

/* ── Question card ─────────────────────────────────────── */

function QuestionCard({ q, sectionId }: { q: Question; sectionId: number }) {
  const [expanded, setExpanded] = useState(false);
  const colors = sectionColors[sectionId];

  return (
    <div className={`rounded-xl border ${colors.border} bg-white transition-shadow hover:shadow-md`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-4 p-5 text-left"
      >
        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${colors.badge}`}
        >
          {q.id}
        </span>
        <span className="flex-1 text-sm font-medium leading-relaxed text-ink md:text-base">
          {q.question}
        </span>
        <svg
          className={`mt-1 h-5 w-5 shrink-0 text-ink-muted transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className={`border-t ${colors.border} px-5 pb-5 pt-4`}>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                What it measures
              </p>
              <p className="mt-1 text-sm text-ink-light">{q.measures}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Strong answer looks like
              </p>
              <p className="mt-1 text-sm text-ink-light">{q.strongAnswer}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Red flags to watch for
              </p>
              <p className="mt-1 text-sm text-ink-light">{q.redFlags}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Section block ─────────────────────────────────────── */

function SectionBlock({ section }: { section: Section }) {
  const colors = sectionColors[section.id];

  return (
    <div>
      <div className={`rounded-xl ${colors.bg} p-6`}>
        <p className={`font-mono text-xs font-bold uppercase tracking-wider ${colors.text}`}>
          Section {section.id}
        </p>
        <h3 className="mt-2 text-xl font-bold text-ink md:text-2xl">{section.title}</h3>
        <p className="mt-2 text-sm text-ink-light">{section.description}</p>
        <p className="mt-1 text-xs text-ink-muted">{section.subtitle}</p>
      </div>
      <div className="mt-4 space-y-3">
        {section.questions.map((q) => (
          <QuestionCard key={q.id} q={q} sectionId={section.id} />
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ────────────────────────────────────── */

export function QuestionBankContent() {
  const [unlocked, setUnlocked] = useState(false);

  // Show preview: first section only (questions 1-10)
  const previewSection = sections[0];
  const gatedSections = sections.slice(1);

  return (
    <>
      {/* ── COVER / HERO ───────────────────────────────── */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Free Download
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            50 Behavioral Interview Questions
            <br />
            <span className="text-brand-yellow">for Engineering Roles</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            The questions top companies use to evaluate problem-solving, collaboration, and growth mindset.
            Each question includes what it measures, what a strong answer looks like, and red flags to watch for.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#questions"
              className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange sm:w-auto"
            >
              Browse Questions
            </a>
            <a
              href="#download"
              className="w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400 sm:w-auto"
            >
              Download Full Bank
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ───────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Why Behavioral Questions Matter
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Technical skills get candidates in the door.
            <br />
            Behavioral skills determine if they succeed.
          </h2>

          <div className="mt-8 space-y-4">
            {[
              { stat: '89%', text: 'of hiring failures are due to attitude and soft skills, not technical ability' },
              { stat: '2x', text: 'better job performance prediction from structured behavioral interviews vs. unstructured conversations' },
              { stat: '#1', text: 'predictor of future behavior is past behavior in similar situations' },
            ].map((item) => (
              <div
                key={item.stat}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-paper-off p-4"
              >
                <span className="shrink-0 font-mono text-2xl font-extrabold text-brand-yellow">
                  {item.stat}
                </span>
                <span className="text-sm text-ink-light md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIMENSION OVERVIEW ─────────────────────────── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            5 Dimensions Covered
          </p>
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-ink md:text-3xl">
            The behavioral competencies that matter most
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sections.map((s) => {
              const colors = sectionColors[s.id];
              return (
                <div
                  key={s.id}
                  className={`rounded-xl border ${colors.border} ${colors.bg} p-5 text-center`}
                >
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold ${colors.badge}`}>
                    {s.id}
                  </span>
                  <p className="mt-3 text-sm font-bold text-ink">{s.title}</p>
                  <p className="mt-1 text-xs text-ink-muted">10 questions</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUESTIONS (PREVIEW + GATED) ────────────────── */}
      <section id="questions" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Preview section: Section 1 (free) */}
          <SectionBlock section={previewSection} />

          {/* Email gate */}
          {!unlocked && (
            <div id="download" className="mt-12">
              <div className="relative">
                {/* Blurred preview teaser */}
                <div className="pointer-events-none select-none" aria-hidden="true">
                  <div className="space-y-4 opacity-40 blur-[2px]">
                    {gatedSections.map((s) => {
                      const colors = sectionColors[s.id];
                      return (
                        <div key={s.id} className={`rounded-xl ${colors.bg} p-6`}>
                          <p className={`font-mono text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                            Section {s.id}
                          </p>
                          <h3 className="mt-2 text-xl font-bold text-ink">{s.title}</h3>
                          <p className="mt-2 text-sm text-ink-light">{s.description}</p>
                          <p className="mt-1 text-xs text-ink-muted">{s.subtitle}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Overlay gate */}
                <div className="absolute inset-0 flex items-start justify-center pt-8">
                  <div className="w-full max-w-md">
                    <LeadGateForm
                      title="Unlock All 50 Questions"
                      description="You\u2019ve seen Section 1. Enter your email to access all 5 sections with scoring rubrics and best practices."
                      ctaLabel="Get Full Question Bank"
                      onSubmit={() => setUnlocked(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Unlocked sections */}
          {unlocked && (
            <div className="mt-12 space-y-12">
              {gatedSections.map((s) => (
                <SectionBlock key={s.id} section={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── BEST PRACTICES & SCORING (gated) ───────────── */}
      {unlocked && (
        <>
          <section className="bg-paper-off py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                How to Use This Question Bank
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Best Practices
              </h2>

              <div className="mt-8 space-y-3">
                {bestPractices.map((practice, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-xs font-bold text-brand-yellow">
                      {i + 1}
                    </span>
                    <p className="text-sm text-ink-light">{practice}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Evaluation Framework
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Scoring Framework
              </h2>

              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-paper-off">
                      <th className="px-4 py-3 text-left font-semibold text-ink">Score</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink">Label</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scoringFramework.map((row) => (
                      <tr key={row.score} className="border-t border-gray-200">
                        <td className="px-4 py-3">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">
                            {row.score}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-medium text-ink">{row.label}</td>
                        <td className="px-4 py-3 text-ink-muted">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            About LayersRank
          </p>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">
            This question bank is a starting point.
            <br />
            LayersRank automates the entire process.
          </h2>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {[
              { title: 'Structured delivery', desc: 'Every candidate gets the same questions' },
              { title: 'AI evaluation', desc: 'Consistent scoring with confidence intervals' },
              { title: 'Detailed reports', desc: 'See exactly why candidates scored how they did' },
              { title: 'Time savings', desc: '10 minutes to review vs. 60 minutes to conduct' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-700 bg-white/5 p-4">
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange sm:w-auto"
            >
              Try Free &mdash; 5 Assessments, No Card
            </Link>
            <Link
              href="/resources/roi-calculator"
              className="w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400 sm:w-auto"
            >
              Calculate Your Hiring ROI
            </Link>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} LayersRank by The Algorithm. Free to use with attribution.
          </p>
        </div>
      </section>
    </>
  );
}
