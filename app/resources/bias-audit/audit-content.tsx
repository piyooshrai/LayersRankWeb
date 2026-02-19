'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { LeadGateForm } from '@/components/lead-gate-form';
import {
  checklistItems,
  sections,
  scoreTiers,
  priorityMatrix,
  layersRankSolutions,
} from './audit-data';
import type { Assessment, ChecklistItem, RiskLevel } from './audit-data';

/* ── Risk badge helpers ────────────────────────────────── */

function riskBadgeClass(risk: RiskLevel): string {
  switch (risk) {
    case 'HIGH':
      return 'bg-brand-red/10 text-brand-red';
    case 'MEDIUM':
      return 'bg-amber-100 text-amber-700';
    case 'LOW-MEDIUM':
      return 'bg-blue-100 text-blue-700';
    default:
      return 'bg-gray-100 text-gray-600';
  }
}

/* ── Assessment pill colors ────────────────────────────── */

function assessmentClass(value: Assessment): string {
  switch (value) {
    case 'yes':
      return 'border-brand-green/40 bg-brand-green/10 text-brand-green';
    case 'partial':
      return 'border-brand-yellow/40 bg-brand-yellow/10 text-brand-yellow';
    case 'no':
      return 'border-brand-red/40 bg-brand-red/10 text-brand-red';
  }
}

function assessmentBg(value: Assessment | null): string {
  switch (value) {
    case 'yes':
      return 'border-brand-green/30 bg-brand-green/5';
    case 'partial':
      return 'border-brand-yellow/30 bg-brand-yellow/5';
    case 'no':
      return 'border-brand-red/30 bg-brand-red/5';
    default:
      return 'border-gray-200 bg-white';
  }
}

/* ── Section colors ────────────────────────────────────── */

const sectionColors: Record<string, { badge: string; text: string; border: string; dot: string }> = {
  A: { badge: 'bg-blue-100 text-blue-700', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500' },
  B: { badge: 'bg-violet-100 text-violet-700', text: 'text-violet-700', border: 'border-violet-200', dot: 'bg-violet-500' },
  C: { badge: 'bg-emerald-100 text-emerald-700', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
};

/* ── Checklist item card ───────────────────────────────── */

function AuditItemCard({
  item,
  answer,
  onAnswer,
}: {
  item: ChecklistItem;
  answer: Assessment | null;
  onAnswer: (value: Assessment) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const colors = sectionColors[item.section];

  return (
    <div className={`rounded-2xl border transition-colors ${assessmentBg(answer)}`}>
      {/* Header */}
      <div className="flex items-start gap-4 p-5">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${colors.badge}`}>
          {item.id}
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-ink">{item.title}</h3>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${riskBadgeClass(item.risk)}`}>
              {item.risk} risk
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-light">{item.question}</p>

          {/* Assessment buttons */}
          <div className="mt-3 flex flex-wrap gap-2">
            {(['yes', 'partial', 'no'] as Assessment[]).map((value) => (
              <button
                key={value}
                onClick={() => onAnswer(value)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                  answer === value
                    ? assessmentClass(value)
                    : 'border-gray-200 bg-white text-ink-muted hover:border-gray-300'
                }`}
              >
                {value === 'yes' ? 'Yes' : value === 'partial' ? 'Partial' : 'No'}
                <span className="ml-1.5 hidden text-[10px] font-normal opacity-70 sm:inline">
                  {item.assessmentLabels[value]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 rounded-lg p-1 text-ink-muted transition-colors hover:bg-gray-100"
          aria-label={expanded ? 'Collapse details' : 'Expand details'}
        >
          <svg
            className={`h-5 w-5 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="border-t border-gray-100 px-5 pb-5 pt-4">
          {/* Why it matters */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Why It Matters</p>
            <p className="mt-2 text-sm text-ink-light">{item.whyItMatters}</p>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {/* Evidence of compliance */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Evidence of Compliance</p>
              <ul className="mt-2 space-y-1.5">
                {item.evidence.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-ink-light">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk if missing */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Risk If Missing</p>
              <ul className="mt-2 space-y-1.5">
                {item.riskDetails.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-ink-light">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Score ring (simple progress indicator) ────────────── */

function ScoreRing({ score, max }: { score: number; max: number }) {
  const pct = max > 0 ? (score / max) * 100 : 0;
  const tier = scoreTiers.find((t) => score >= t.min && score <= t.max) ?? scoreTiers[scoreTiers.length - 1];
  const colorClass =
    tier.color === 'brand-green'
      ? 'text-brand-green'
      : tier.color === 'brand-yellow'
        ? 'text-brand-yellow'
        : tier.color === 'brand-orange'
          ? 'text-brand-orange'
          : 'text-brand-red';

  const strokeColor =
    tier.color === 'brand-green'
      ? '#22c55e'
      : tier.color === 'brand-yellow'
        ? '#eab308'
        : tier.color === 'brand-orange'
          ? '#f97316'
          : '#ef4444';

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="50" cy="50" r={radius} fill="none"
            stroke={strokeColor} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-mono text-2xl font-extrabold ${colorClass}`}>{score}</span>
        </div>
      </div>
      <p className={`mt-2 text-sm font-bold ${colorClass}`}>{tier.label}</p>
      <p className="mt-0.5 text-center text-xs text-ink-muted">{tier.description}</p>
    </div>
  );
}

/* ── Main component ────────────────────────────────────── */

export function AuditContent() {
  const [answers, setAnswers] = useState<Record<number, Assessment>>({});
  const [unlocked, setUnlocked] = useState(false);

  function setAnswer(id: number, value: Assessment) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === 12;

  const score = useMemo(() => {
    return Object.values(answers).reduce((sum, a) => {
      if (a === 'yes') return sum + 2;
      if (a === 'partial') return sum + 1;
      return sum;
    }, 0);
  }, [answers]);

  const highRiskNos = useMemo(() => {
    return checklistItems.filter(
      (item) => answers[item.id] === 'no' && item.risk === 'HIGH'
    );
  }, [answers]);

  return (
    <>
      {/* ── COVER / HERO ───────────────────────────────── */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Free Checklist
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Interview Bias Audit Checklist
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            12 questions to assess if your hiring process is fair, consistent,
            and legally defensible.
          </p>
          <div className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-3 text-xs text-gray-400">
            {['12-point checklist', 'Risk ratings', 'Evidence guides', 'Priority matrix', 'Action plan'].map((item) => (
              <span key={item} className="rounded-full border border-gray-700 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#checklist"
              className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange sm:w-auto"
            >
              Start Audit
            </a>
            <a
              href="#results"
              className="w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400 sm:w-auto"
            >
              See Scoring Guide
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ───────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Why Bias Audits Matter
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            The business, legal, and human case for fair hiring
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: 'The Business Case',
                items: [
                  'Biased hiring misses qualified candidates',
                  'Homogeneous teams underperform diverse ones',
                  'Inconsistent processes create legal exposure',
                  'Reputation damage from bias accusations',
                ],
              },
              {
                label: 'The Legal Case',
                items: [
                  'Disparate impact liability',
                  'Pattern-or-practice claims',
                  'Individual discrimination suits',
                  'Regulatory scrutiny',
                ],
              },
              {
                label: 'The Human Case',
                items: [
                  'Every candidate deserves fair evaluation',
                  'Bias hurts people\u2019s careers and lives',
                  'Your team members notice who gets hired',
                ],
              },
            ].map((col) => (
              <div key={col.label} className="rounded-xl border border-gray-200 bg-paper-off p-5">
                <p className="text-sm font-bold text-ink">{col.label}</p>
                <ul className="mt-3 space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-light">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* How to use */}
          <div className="mt-10 rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-5">
            <p className="text-sm font-bold text-brand-yellow">How to Use This Checklist</p>
            <p className="mt-2 text-sm text-ink-light">
              For each of the 12 items below, assess your current state (Yes, Partial, or No).
              Expand any item to see why it matters, what evidence of compliance looks like,
              and the risk if it&rsquo;s missing. After completing all 12, enter your email
              to unlock your personalized score, priority matrix, and action plan template.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE 12-POINT CHECKLIST ─────────────────────── */}
      <section id="checklist" className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Progress tracker */}
          <div className="mb-8 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
            <div>
              <p className="text-sm font-bold text-ink">
                {answeredCount} of 12 assessed
              </p>
              <p className="text-xs text-ink-muted">
                {allAnswered ? 'All items assessed. See your results below.' : 'Answer all items to get your score.'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-brand-yellow transition-all duration-300"
                  style={{ width: `${(answeredCount / 12) * 100}%` }}
                />
              </div>
              <span className="text-xs font-bold text-ink-muted">{answeredCount}/12</span>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section) => {
            const colors = sectionColors[section.id];
            const sectionItems = checklistItems.filter((item) => item.section === section.id);

            return (
              <div key={section.id} className="mb-10 last:mb-0">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${colors.badge}`}>
                    {section.id}
                  </span>
                  <h2 className="text-lg font-bold text-ink">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {sectionItems.map((item) => (
                    <AuditItemCard
                      key={item.id}
                      item={item}
                      answer={answers[item.id] ?? null}
                      onAnswer={(value) => setAnswer(item.id, value)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── RESULTS / EMAIL GATE ───────────────────────── */}
      <section id="results" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {!unlocked ? (
            <>
              {/* Live score preview */}
              {allAnswered && (
                <div className="mb-8 flex justify-center">
                  <ScoreRing score={score} max={24} />
                </div>
              )}

              {/* What's behind the gate */}
              <div className="mb-6 rounded-xl border border-gray-200 bg-paper-off p-5">
                <p className="text-sm font-semibold text-ink">
                  {allAnswered
                    ? 'Unlock your full results:'
                    : 'Complete all 12 items, then unlock:'}
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    'Detailed score breakdown by section',
                    'Personalized priority matrix',
                    'Action plan template for each gap',
                    'High-risk item alert summary',
                    'How LayersRank solves 5 of 12 items',
                    'Printable audit report format',
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
                title="Get Your Audit Results"
                description="Enter your email to unlock your bias audit score, priority matrix, and action plan template."
                ctaLabel="Get My Results"
                leadMagnetType="bias"
                onSubmit={() => setUnlocked(true)}
              />
            </>
          ) : (
            /* ── UNLOCKED RESULTS ──────────────────────── */
            <>
              {/* Score overview */}
              <div className="text-center">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                  Your Audit Results
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  Bias Audit Score
                </h2>
              </div>

              <div className="mt-8 flex justify-center">
                <ScoreRing score={score} max={24} />
              </div>

              {/* Score breakdown by section */}
              <div className="mt-10">
                <h3 className="text-sm font-bold text-ink">Score by Section</h3>
                <div className="mt-3 space-y-3">
                  {sections.map((section) => {
                    const colors = sectionColors[section.id];
                    const sectionItems = checklistItems.filter((item) => item.section === section.id);
                    const sectionScore = sectionItems.reduce((sum, item) => {
                      const a = answers[item.id];
                      if (a === 'yes') return sum + 2;
                      if (a === 'partial') return sum + 1;
                      return sum;
                    }, 0);
                    const sectionMax = sectionItems.length * 2;

                    return (
                      <div key={section.id} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-paper-off p-3">
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${colors.badge}`}>
                          {section.id}
                        </span>
                        <span className="flex-1 text-sm font-medium text-ink">{section.title}</span>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-16 overflow-hidden rounded-full bg-gray-200">
                            <div
                              className="h-full rounded-full bg-brand-yellow transition-all"
                              style={{ width: `${(sectionScore / sectionMax) * 100}%` }}
                            />
                          </div>
                          <span className="font-mono text-sm font-bold text-ink">{sectionScore}/{sectionMax}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* High-risk alerts */}
              {highRiskNos.length > 0 && (
                <div className="mt-10 rounded-xl border border-brand-red/20 bg-brand-red/5 p-5">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-sm font-bold text-brand-red">
                      {highRiskNos.length} high-risk item{highRiskNos.length > 1 ? 's' : ''} need immediate attention
                    </p>
                  </div>
                  <div className="mt-3 space-y-2">
                    {highRiskNos.map((item) => (
                      <div key={item.id} className="flex items-center gap-2 text-sm text-ink-light">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-red/10 text-xs font-bold text-brand-red">
                          {item.id}
                        </span>
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Item-by-item summary */}
              <div className="mt-10">
                <h3 className="text-sm font-bold text-ink">Item-by-Item Summary</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-paper-off">
                        <th className="px-4 py-2.5 text-left font-semibold text-ink">#</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-ink">Item</th>
                        <th className="px-4 py-2.5 text-center font-semibold text-ink">Status</th>
                        <th className="px-4 py-2.5 text-center font-semibold text-ink">Risk</th>
                        <th className="px-4 py-2.5 text-center font-semibold text-ink">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {checklistItems.map((item) => {
                        const a = answers[item.id];
                        const pts = a === 'yes' ? 2 : a === 'partial' ? 1 : 0;
                        return (
                          <tr key={item.id} className="border-t border-gray-100">
                            <td className="px-4 py-2.5 font-mono text-ink-muted">{item.id}</td>
                            <td className="px-4 py-2.5 font-medium text-ink">{item.title}</td>
                            <td className="px-4 py-2.5 text-center">
                              {a ? (
                                <span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase ${assessmentClass(a)}`}>
                                  {a}
                                </span>
                              ) : (
                                <span className="text-xs text-ink-muted">&mdash;</span>
                              )}
                            </td>
                            <td className="px-4 py-2.5 text-center">
                              <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${riskBadgeClass(item.risk)}`}>
                                {item.risk}
                              </span>
                            </td>
                            <td className="px-4 py-2.5 text-center font-mono font-bold text-ink">{pts}/2</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── GATED: PRIORITY MATRIX + ACTION PLAN ───────── */}
      {unlocked && (
        <>
          {/* Priority matrix */}
          <section className="bg-paper-off py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Priority Matrix
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                What to Fix First
              </h2>

              <div className="mt-10 space-y-4">
                {priorityMatrix.map((tier) => {
                  const gapItems = checklistItems.filter(
                    (item) =>
                      tier.itemIds.includes(item.id) &&
                      (answers[item.id] === 'no' || answers[item.id] === 'partial')
                  );

                  return (
                    <div key={tier.priority} className="rounded-xl border border-gray-200 bg-white p-5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            tier.priority === 'Address Immediately'
                              ? 'bg-brand-red/10 text-brand-red'
                              : tier.priority === 'Address Soon'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {tier.priority}
                        </span>
                        <span className="text-xs text-ink-muted">{tier.description}</span>
                      </div>

                      {gapItems.length > 0 ? (
                        <div className="mt-3 space-y-2">
                          {gapItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-2 text-sm text-ink-light">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-xs font-bold text-ink-muted">
                                {item.id}
                              </span>
                              <span className="flex-1">{item.title}</span>
                              {answers[item.id] && (
                                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase ${assessmentClass(answers[item.id])}`}>
                                  {answers[item.id]}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-3 text-sm text-brand-green">
                          No gaps in this priority tier.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Action plan template */}
          <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Action Plan
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Remediation Plan Template
              </h2>
              <p className="mt-2 text-sm text-ink-light">
                For each &ldquo;No&rdquo; or &ldquo;Partial&rdquo; item, use this template to plan your remediation.
              </p>

              <div className="mt-10 rounded-2xl border-2 border-gray-200 bg-white p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Item #', placeholder: '' },
                    { label: 'Current State', placeholder: 'No / Partial' },
                    { label: 'Risk Level', placeholder: 'High / Medium / Low' },
                    { label: 'Owner', placeholder: 'Who will fix this?' },
                  ].map((field) => (
                    <div key={field.label}>
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{field.label}</p>
                      <div className="mt-1 h-8 rounded-lg border border-dashed border-gray-300 bg-paper-off" />
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Gap Description</p>
                  <div className="mt-1 h-16 rounded-lg border border-dashed border-gray-300 bg-paper-off" />
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Remediation Steps</p>
                  <div className="mt-1 space-y-2">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-xs font-bold text-brand-yellow">{n}</span>
                        <div className="h-8 flex-1 rounded-lg border border-dashed border-gray-300 bg-paper-off" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {['Deadline', 'Resources Needed'].map((field) => (
                    <div key={field}>
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{field}</p>
                      <div className="mt-1 h-8 rounded-lg border border-dashed border-gray-300 bg-paper-off" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {['Success Metric', 'Verification Method'].map((field) => (
                    <div key={field}>
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{field}</p>
                      <div className="mt-1 h-12 rounded-lg border border-dashed border-gray-300 bg-paper-off" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Scoring guide */}
          <section className="bg-paper-off py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Scoring Guide
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                What Your Score Means
              </h2>

              <div className="mt-10 space-y-3">
                {scoreTiers.map((tier) => {
                  const colorClass =
                    tier.color === 'brand-green'
                      ? 'border-brand-green/20 bg-brand-green/5'
                      : tier.color === 'brand-yellow'
                        ? 'border-brand-yellow/20 bg-brand-yellow/5'
                        : tier.color === 'brand-orange'
                          ? 'border-brand-orange/20 bg-brand-orange/5'
                          : 'border-brand-red/20 bg-brand-red/5';

                  const textClass =
                    tier.color === 'brand-green'
                      ? 'text-brand-green'
                      : tier.color === 'brand-yellow'
                        ? 'text-brand-yellow'
                        : tier.color === 'brand-orange'
                          ? 'text-brand-orange'
                          : 'text-brand-red';

                  const isActive = score >= tier.min && score <= tier.max;

                  return (
                    <div
                      key={tier.label}
                      className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${colorClass} ${isActive ? 'ring-2 ring-brand-yellow' : ''}`}
                    >
                      <span className={`font-mono text-2xl font-extrabold ${textClass}`}>
                        {tier.min}&ndash;{tier.max}
                      </span>
                      <div>
                        <p className={`font-bold ${textClass}`}>{tier.label}</p>
                        <p className="text-sm text-ink-light">{tier.description}</p>
                      </div>
                      {isActive && (
                        <span className="ml-auto rounded-full bg-brand-yellow/20 px-2 py-0.5 text-xs font-bold text-brand-yellow">
                          You
                        </span>
                      )}
                    </div>
                  );
                })}
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
            This checklist identifies where bias enters.
            <br />
            LayersRank eliminates it by design.
          </h2>

          <div className="mt-8 space-y-3 text-left">
            {layersRankSolutions.map((sol) => (
              <div key={sol.item} className="flex items-start gap-3 rounded-xl border border-gray-700 bg-white/5 p-4">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-white">{sol.solution}</p>
                  <p className="text-xs text-gray-400">{sol.label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base text-gray-300">
            The result: Defensible, consistent, fair evaluation &mdash; at scale.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange sm:w-auto"
            >
              Try Free &mdash; 5 Assessments, No Card
            </Link>
            <Link
              href="/resources/hiring-scorecard"
              className="w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400 sm:w-auto"
            >
              Get the Hiring Scorecard
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
