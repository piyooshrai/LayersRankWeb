'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LeadGateForm } from '@/components/lead-gate-form';
import {
  ratingScale,
  competencies,
  redFlagCategories,
  calibrationQuestions,
  calibrationFailures,
  implementationPlan,
  recommendations,
} from './scorecard-data';
import type { Competency } from './scorecard-data';

/* ── Competency colors ─────────────────────────────────── */

const compColors: Record<number, { bg: string; text: string; border: string; badge: string; light: string }> = {
  1: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', light: 'bg-blue-500' },
  2: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700', light: 'bg-violet-500' },
  3: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', light: 'bg-emerald-500' },
  4: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700', light: 'bg-amber-500' },
  5: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700', light: 'bg-purple-500' },
  6: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700', light: 'bg-rose-500' },
};

/* ── Score badge color ─────────────────────────────────── */

function scoreBadgeClass(score: number): string {
  if (score >= 5) return 'bg-brand-green/10 text-brand-green';
  if (score >= 4) return 'bg-blue-100 text-blue-700';
  if (score >= 3) return 'bg-amber-100 text-amber-700';
  if (score >= 2) return 'bg-orange-100 text-orange-700';
  return 'bg-brand-red/10 text-brand-red';
}

/* ── Red flag category colors ──────────────────────────── */

const flagColors: Record<string, string> = {
  Integrity: 'bg-red-50 border-red-200',
  Technical: 'bg-blue-50 border-blue-200',
  Behavioral: 'bg-purple-50 border-purple-200',
  Culture: 'bg-amber-50 border-amber-200',
  Process: 'bg-gray-50 border-gray-200',
};

/* ── Competency card ───────────────────────────────────── */

function CompetencyCard({ comp }: { comp: Competency }) {
  const [expanded, setExpanded] = useState(false);
  const colors = compColors[comp.id];

  return (
    <div className={`rounded-2xl border ${colors.border} bg-white`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-4 p-6 text-left"
      >
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${colors.badge}`}>
          {comp.id}
        </span>
        <div className="flex-1">
          <p className="font-bold text-ink">{comp.name}</p>
          <p className="mt-0.5 text-sm text-ink-muted">{comp.definition}</p>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${colors.badge}`}>
          {comp.weight}%
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-ink-muted transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className={`border-t ${colors.border} px-6 pb-6 pt-4`}>
          {/* Behavioral anchors */}
          <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Behavioral Anchors</p>
          <div className="mt-3 space-y-2">
            {comp.anchors.map((a) => (
              <div key={a.score} className="flex gap-3 rounded-lg border border-gray-100 bg-paper-off p-3">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${scoreBadgeClass(a.score)}`}>
                  {a.score}
                </span>
                <p className="text-sm text-ink-light">{a.anchor}</p>
              </div>
            ))}
          </div>

          {/* Evidence to gather */}
          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-ink-muted">Evidence to Gather</p>
          <ul className="mt-2 space-y-1.5">
            {comp.evidence.map((e) => (
              <li key={e} className="flex items-start gap-2 text-sm text-ink-light">
                <span className={`mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full ${colors.light}`} />
                {e}
              </li>
            ))}
          </ul>

          {/* Question bank reference */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs text-ink-muted">Interview questions:</span>
            <Link
              href="/resources/question-bank"
              className={`text-xs font-medium ${colors.text} hover:underline`}
            >
              See Question Bank: {comp.questionBankRef}
            </Link>
          </div>

          {/* Note if present */}
          {comp.note && (
            <div className="mt-4 rounded-lg border border-brand-yellow/30 bg-brand-yellow/5 p-3">
              <p className="text-xs font-semibold text-brand-yellow">Important</p>
              <p className="mt-1 text-sm text-ink-light">{comp.note}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Main component ────────────────────────────────────── */

export function ScorecardContent() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {/* ── COVER / HERO ───────────────────────────────── */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Free Template
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Engineering Hiring Scorecard
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            Eliminate gut-feel hiring. Evaluate every candidate the same way with structured rubrics,
            behavioral anchors, and a calibration framework.
          </p>
          <div className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-3 text-xs text-gray-400">
            {['6 core competencies', '5-point scale', 'Behavioral anchors', 'Red flag checklist', 'Calibration guide'].map((item) => (
              <span key={item} className="rounded-full border border-gray-700 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#scorecard"
              className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange sm:w-auto"
            >
              View Scorecard
            </a>
            <a
              href="#download"
              className="w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400 sm:w-auto"
            >
              Download Template
            </a>
          </div>
        </div>
      </section>

      {/* ── PAGE 1: THE PROBLEM ────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            The Problem
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Why Most Interview Feedback Is Useless
          </h2>

          {/* Typical feedback */}
          <div className="mt-8">
            <p className="text-sm font-semibold text-ink-muted">Typical feedback sounds like:</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                '\u201CSeemed smart\u201D',
                '\u201CGood culture fit\u201D',
                '\u201CI\u2019d want to work with them\u201D',
                '\u201CSomething felt off\u201D',
              ].map((fb) => (
                <div key={fb} className="flex items-center gap-2 rounded-lg border border-brand-red/20 bg-brand-red/5 px-4 py-3">
                  <svg className="h-4 w-4 shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm italic text-ink-light">{fb}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The problems */}
          <div className="mt-8">
            <p className="text-sm font-semibold text-ink-muted">The problems this creates:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Different interviewers evaluate different things',
                'No calibration on what \u201Cgood\u201D means',
                'Recency bias \u2014 remember last answer best',
                'Halo effect \u2014 one good answer colors everything',
                'Confirmation bias \u2014 prove first impression right',
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink-light">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { stat: '15\u201325%', text: 'variance between interviewers evaluating the same candidate' },
              { stat: '0%', text: 'correlation between \u201Cgut feel\u201D and actual job performance' },
            ].map((item) => (
              <div key={item.stat} className="rounded-xl border border-gray-200 bg-paper-off p-5 text-center">
                <p className="font-mono text-3xl font-extrabold text-brand-red">{item.stat}</p>
                <p className="mt-2 text-sm text-ink-muted">{item.text}</p>
              </div>
            ))}
          </div>

          {/* The fix */}
          <div className="mt-10 rounded-2xl border-2 border-brand-green/20 bg-brand-green/5 p-6">
            <p className="text-sm font-bold text-brand-green">The Fix: Structured Scorecards</p>
            <p className="mt-2 text-sm text-ink-light">
              When every interviewer evaluates the same competencies, uses the same rating scale,
              has behavioral anchors for each level, and documents specific evidence, you get:
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                'Consistent signal across interviewers',
                'Defensible hiring decisions',
                'Better prediction of job performance',
                'Faster calibration meetings',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-ink">
                  <svg className="h-4 w-4 shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAGE 2: COMPETENCY FRAMEWORK (free) ─────────── */}
      <section id="scorecard" className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Competency Framework
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Six Core Competencies for Engineering Roles
          </h2>

          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="px-4 py-3 text-left font-semibold text-ink">#</th>
                  <th className="px-4 py-3 text-left font-semibold text-ink">Competency</th>
                  <th className="hidden px-4 py-3 text-left font-semibold text-ink sm:table-cell">What It Measures</th>
                  <th className="px-4 py-3 text-center font-semibold text-ink">Weight</th>
                </tr>
              </thead>
              <tbody>
                {competencies.map((c) => {
                  const colors = compColors[c.id];
                  return (
                    <tr key={c.id} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3">
                        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold ${colors.badge}`}>
                          {c.id}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-ink">{c.name}</td>
                      <td className="hidden px-4 py-3 text-ink-muted sm:table-cell">{c.definition}</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-ink">{c.weight}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Adjust weights based on role</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-light">
              <li><span className="font-medium text-ink">Senior/Staff:</span> Increase Communication, Ownership</li>
              <li><span className="font-medium text-ink">Junior:</span> Increase Growth Mindset, reduce Ownership</li>
              <li><span className="font-medium text-ink">IC vs. Manager:</span> Adjust Technical vs. Communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── PAGE 3: RATING SCALE (free) ────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Rating Scale
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            5-Point Scale with Behavioral Anchors
          </h2>

          <div className="mt-10 space-y-3">
            {ratingScale.map((level) => (
              <div
                key={level.score}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-lg font-bold ${scoreBadgeClass(level.score)}`}>
                  {level.score}
                </span>
                <div>
                  <p className="font-bold text-ink">{level.label}</p>
                  <p className="mt-0.5 text-sm text-ink-light">{level.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">Calibration Notes</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-light">
              <li>Score <span className="font-semibold text-ink">3</span> means &ldquo;hire with reservations&rdquo; not &ldquo;average&rdquo;</li>
              <li>Most candidates should be <span className="font-semibold text-ink">2&ndash;4</span></li>
              <li>Score <span className="font-semibold text-ink">5</span> should be rare (1 in 20)</li>
              <li>Score <span className="font-semibold text-ink">1</span> should end the process</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── EMAIL GATE ─────────────────────────────────── */}
      {!unlocked && (
        <section id="download" className="bg-paper-off py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            {/* What's behind the gate */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-sm font-semibold text-ink">The full scorecard includes:</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  'Detailed behavioral anchors for all 6 competencies',
                  'Printable candidate evaluation form',
                  'Red flag checklist (5 categories)',
                  'Calibration guide for hiring debriefs',
                  'Common calibration failures to avoid',
                  '4-week implementation plan',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <LeadGateForm
              title="Unlock the Full Scorecard"
              description="Get detailed behavioral anchors for all 6 competencies, the red flag checklist, calibration guide, and implementation plan."
              ctaLabel="Get Full Scorecard"
              onSubmit={() => setUnlocked(true)}
            />
          </div>
        </section>
      )}

      {/* ── GATED CONTENT ──────────────────────────────── */}
      {unlocked && (
        <>
          {/* Detailed competency scorecards */}
          <section className="bg-paper-off py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Competency Scorecards
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Detailed Behavioral Anchors
              </h2>
              <p className="mt-2 text-sm text-ink-light">
                Click each competency to see the full 5-point anchor scale, evidence checklist, and linked interview questions.
              </p>

              <div className="mt-10 space-y-4">
                {competencies.map((c) => (
                  <CompetencyCard key={c.id} comp={c} />
                ))}
              </div>
            </div>
          </section>

          {/* Scorecard template */}
          <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Template
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Candidate Evaluation Form
              </h2>

              <div className="mt-10 rounded-2xl border-2 border-gray-200 bg-white p-6 md:p-8">
                {/* Header fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Candidate', 'Date', 'Role', 'Interviewer'].map((field) => (
                    <div key={field}>
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{field}</p>
                      <div className="mt-1 h-8 rounded-lg border border-dashed border-gray-300 bg-paper-off" />
                    </div>
                  ))}
                </div>

                {/* Competency scores */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Competency Scores</p>
                  <div className="mt-3 overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-paper-off">
                          <th className="px-4 py-2.5 text-left font-semibold text-ink">Competency</th>
                          <th className="px-4 py-2.5 text-center font-semibold text-ink">Score</th>
                          <th className="px-4 py-2.5 text-center font-semibold text-ink">Weight</th>
                          <th className="px-4 py-2.5 text-center font-semibold text-ink">Weighted</th>
                        </tr>
                      </thead>
                      <tbody>
                        {competencies.map((c) => (
                          <tr key={c.id} className="border-t border-gray-100">
                            <td className="px-4 py-2.5 font-medium text-ink">{c.name}</td>
                            <td className="px-4 py-2.5 text-center text-ink-muted">__ /5</td>
                            <td className="px-4 py-2.5 text-center text-ink-muted">{c.weight}%</td>
                            <td className="px-4 py-2.5 text-center text-ink-muted">___</td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-gray-200 bg-paper-off">
                          <td colSpan={3} className="px-4 py-2.5 font-bold text-ink">Weighted Average</td>
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-ink">___</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Evidence notes */}
                <div className="mt-8 space-y-4">
                  {['Strongest competency and evidence', 'Weakest competency and evidence', 'Specific concerns or red flags'].map((label) => (
                    <div key={label}>
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{label}</p>
                      <div className="mt-1 h-16 rounded-lg border border-dashed border-gray-300 bg-paper-off" />
                    </div>
                  ))}
                </div>

                {/* Final recommendation */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Final Recommendation</p>
                  <div className="mt-3 space-y-2">
                    {recommendations.map((r) => (
                      <div key={r.value} className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-2.5">
                        <div className="h-4 w-4 shrink-0 rounded border-2 border-gray-300" />
                        <span className="text-sm font-medium text-ink">{r.label}</span>
                        <span className="text-xs text-ink-muted">&mdash; {r.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Reasoning</p>
                  <div className="mt-1 h-20 rounded-lg border border-dashed border-gray-300 bg-paper-off" />
                </div>
              </div>
            </div>
          </section>

          {/* Red flag checklist */}
          <section className="bg-paper-off py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Red Flag Checklist
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Automatic Concerns (Discuss in Debrief)
              </h2>

              <div className="mt-10 space-y-4">
                {redFlagCategories.map((cat) => (
                  <div key={cat.category} className={`rounded-xl border p-5 ${flagColors[cat.category] || 'bg-gray-50 border-gray-200'}`}>
                    <p className="text-sm font-bold text-ink">{cat.category} Flags</p>
                    <div className="mt-3 space-y-2">
                      {cat.flags.map((flag) => (
                        <label key={flag} className="flex items-start gap-3 text-sm text-ink-light">
                          <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-brand-red" readOnly />
                          {flag}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Calibration guide */}
          <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Calibration Guide
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Running Effective Hiring Debriefs
              </h2>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold text-ink">Before the Debrief</h3>
                  <ol className="mt-3 space-y-2 text-sm text-ink-light">
                    {[
                      'All interviewers submit written feedback before meeting',
                      'No discussion of candidate between interviews',
                      'Hiring manager reviews all feedback, notes discrepancies',
                    ].map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-xs font-bold text-brand-yellow">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">During the Debrief</h3>
                  <ol className="mt-3 space-y-2 text-sm text-ink-light">
                    {[
                      'Each interviewer shares recommendation (no peeking first)',
                      'Review scores by competency, not by interviewer',
                      'Focus on evidence, not conclusions',
                      'Discuss discrepancies \u2014 what did different interviewers see?',
                      'Hiring manager makes final call',
                    ].map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-xs font-bold text-brand-yellow">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Calibration questions */}
              <div className="mt-10">
                <h3 className="text-sm font-bold text-ink">Calibration Questions to Ask</h3>
                <div className="mt-3 space-y-2">
                  {calibrationQuestions.map((q) => (
                    <div key={q} className="rounded-lg border border-gray-200 bg-paper-off px-4 py-3 text-sm italic text-ink-light">
                      {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Common failures */}
              <div className="mt-10">
                <h3 className="text-sm font-bold text-ink">Common Calibration Failures</h3>
                <ul className="mt-3 space-y-2">
                  {calibrationFailures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-light">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Implementation plan */}
          <section className="bg-paper-off py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                How to Implement
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Rolling Out Structured Scorecards
              </h2>

              <div className="mt-10 space-y-4">
                {implementationPlan.map((week) => (
                  <div key={week.week} className="rounded-xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-brand-yellow/10 px-3 py-1 text-xs font-bold text-brand-yellow">
                        {week.week}
                      </span>
                      <h3 className="font-bold text-ink">{week.title}</h3>
                    </div>
                    <ul className="mt-3 space-y-1.5 pl-16">
                      {week.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2 text-sm text-ink-light">
                          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
            This scorecard is designed for manual interviews.
            <br />
            LayersRank automates the entire process.
          </h2>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {[
              { title: 'Same structured questions', desc: 'Delivered consistently to every candidate' },
              { title: 'AI-generated scores', desc: 'With confidence intervals, not false precision' },
              { title: 'Detailed evidence', desc: 'See exactly what the candidate said' },
              { title: 'Instant calibration', desc: 'Same evaluator (the AI) for every candidate' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-700 bg-white/5 p-4">
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 text-center sm:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-4">
              <p className="font-mono text-3xl font-extrabold text-brand-green">76%</p>
              <p className="mt-1 text-xs text-gray-400">less panel disagreement</p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-4">
              <p className="font-mono text-3xl font-extrabold text-brand-green">50%</p>
              <p className="mt-1 text-xs text-gray-400">faster time-to-offer</p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange sm:w-auto"
            >
              Try Free &mdash; 5 Assessments, No Card
            </Link>
            <Link
              href="/resources/question-bank"
              className="w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400 sm:w-auto"
            >
              Get the Question Bank
            </Link>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} LayersRank by The Algorithm. Free to use and modify with attribution.
          </p>
        </div>
      </section>
    </>
  );
}
