'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { LeadGateForm } from '@/components/lead-gate-form';

/* ── Option types ──────────────────────────────────────── */

interface Option<T> {
  label: string;
  value: T;
  detail?: string;
}

const hiresOptions: Option<number>[] = [
  { label: '10\u201325', value: 17 },
  { label: '25\u201350', value: 37 },
  { label: '50\u2013100', value: 75 },
  { label: '100\u2013250', value: 175 },
  { label: '250\u2013500', value: 375 },
  { label: '500+', value: 750 },
];

const salaryOptions: Option<number>[] = [
  { label: '\u20B96\u201310 lakh', value: 800000 },
  { label: '\u20B910\u201315 lakh', value: 1250000 },
  { label: '\u20B915\u201325 lakh', value: 2000000 },
  { label: '\u20B925\u201340 lakh', value: 3250000 },
  { label: '\u20B940 lakh+', value: 5000000 },
];

const misHireOptions: Option<number>[] = [
  { label: '10%', value: 0.10, detail: 'Excellent' },
  { label: '15%', value: 0.15, detail: 'Good' },
  { label: '20%', value: 0.20, detail: 'Average' },
  { label: '25%', value: 0.25, detail: 'Below average' },
  { label: '30%+', value: 0.30, detail: 'Needs work' },
  { label: 'Don\u2019t know', value: 0.20, detail: 'We\u2019ll use 20%' },
];

const ttfOptions: Option<number>[] = [
  { label: '< 30 days', value: 25 },
  { label: '30\u201345 days', value: 37 },
  { label: '45\u201360 days', value: 52 },
  { label: '60\u201390 days', value: 75 },
  { label: '90+ days', value: 100 },
];

/* ── Formatting helper ─────────────────────────────────── */

function formatINR(value: number): string {
  return Math.round(value).toLocaleString('en-IN');
}

function formatLakh(value: number): string {
  const lakh = value / 100000;
  if (lakh >= 100) {
    return `\u20B9${(lakh / 100).toFixed(1)} crore`;
  }
  return `\u20B9${lakh.toFixed(1)} lakh`;
}

/* ── Selector component ────────────────────────────────── */

function OptionSelector<T>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Option<T>[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink">{label}</p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {options.map((opt) => {
          const selected = value === opt.value && (opt.detail ? true : value === opt.value);
          return (
            <button
              key={opt.label}
              onClick={() => onChange(opt.value)}
              className={`rounded-lg border-2 px-3 py-2.5 text-left text-sm font-medium transition ${
                selected
                  ? 'border-brand-yellow bg-brand-yellow/10 text-ink'
                  : 'border-gray-200 bg-white text-ink-muted hover:border-gray-300'
              }`}
            >
              {opt.label}
              {opt.detail && (
                <span className="block text-xs font-normal text-ink-muted">{opt.detail}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Result row ────────────────────────────────────────── */

function ResultRow({
  label,
  value,
  bold,
  color,
}: {
  label: string;
  value: string;
  bold?: boolean;
  color?: 'green' | 'red' | 'yellow';
}) {
  const valClass = color === 'green'
    ? 'text-brand-green font-bold'
    : color === 'red'
      ? 'text-brand-red font-bold'
      : color === 'yellow'
        ? 'text-brand-yellow font-bold'
        : bold
          ? 'font-bold text-ink'
          : 'text-ink-muted';

  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-2.5 last:border-0">
      <span className={`text-sm ${bold ? 'font-semibold text-ink' : 'text-ink-muted'}`}>{label}</span>
      <span className={`text-sm ${valClass}`}>{value}</span>
    </div>
  );
}

/* ── Main Component ────────────────────────────────────── */

export function HiringCostCalculator() {
  // Input state
  const [hires, setHires] = useState<number | null>(null);
  const [salary, setSalary] = useState<number | null>(null);
  const [misHireRate, setMisHireRate] = useState<number | null>(null);
  const [ttf, setTtf] = useState<number | null>(null);

  // Gate state
  const [unlocked, setUnlocked] = useState(false);

  const allSelected = hires !== null && salary !== null && misHireRate !== null && ttf !== null;

  const calc = useMemo(() => {
    if (!allSelected) return null;

    const annualHires = hires!;
    const avgSalary = salary!;
    const rate = misHireRate!;
    const timeToFill = ttf!;

    const misHires = Math.round(annualHires * rate);

    // Per mis-hire cost components (as fractions of salary)
    const reRecruiting = avgSalary * 0.111;
    const wastedOnboarding = avgSalary * 0.067;
    const severance = avgSalary * 0.050;
    const lostProductivity = avgSalary * 0.200;
    const managerTime = avgSalary * 0.083;
    const moraleImpact = avgSalary * 0.100;
    const delayedProjects = avgSalary * 0.139;

    const directCosts = reRecruiting + wastedOnboarding + severance;
    const indirectCosts = lostProductivity + managerTime + moraleImpact + delayedProjects;
    const costPerMisHire = directCosts + indirectCosts;
    const totalAnnualCost = misHires * costPerMisHire;

    // PAGE 4: Reduction scenario
    const newRate = rate / 2;
    const newMisHires = Math.round(annualHires * newRate);
    const newAnnualCost = newMisHires * costPerMisHire;
    const annualSavings = totalAnnualCost - newAnnualCost;

    // LayersRank cost
    const assessmentsPerHire = 5;
    const ratePerAssessment = annualHires >= 100 ? 1800 : 2000;
    const layersRankCost = annualHires * assessmentsPerHire * ratePerAssessment;
    const netBenefit = annualSavings - layersRankCost;
    const roi = layersRankCost > 0 ? Math.round((netBenefit / layersRankCost) * 100) : 0;
    const paybackMonths = annualSavings > 0 ? layersRankCost / (annualSavings / 12) : 0;

    // PAGE 5: Additional savings
    const tradHoursPerHire = 17.5;
    const lrHoursPerHire = 7;
    const hourlyRate = 1500;
    const tradInterviewerCost = annualHires * tradHoursPerHire * hourlyRate;
    const lrInterviewerCost = annualHires * lrHoursPerHire * hourlyRate;
    const interviewerSavings = tradInterviewerCost - lrInterviewerCost;

    const vacancyCostPerDay = 5000;
    const lrTTF = Math.round(timeToFill * 0.55);
    const ttfSavingsTotal = annualHires * (timeToFill - lrTTF) * vacancyCostPerDay;

    const tradAcceptRate = 0.70;
    const lrAcceptRate = 0.85;
    const tradOffersNeeded = Math.ceil(annualHires / tradAcceptRate);
    const lrOffersNeeded = Math.ceil(annualHires / lrAcceptRate);
    const costPerLostOffer = 50000;
    const offerSavings = (tradOffersNeeded - lrOffersNeeded) * costPerLostOffer;

    // PAGE 6: Total value
    const grossValue = annualSavings + interviewerSavings + ttfSavingsTotal + offerSavings;
    const netValue = grossValue - layersRankCost;
    const totalROI = layersRankCost > 0 ? Math.round((netValue / layersRankCost) * 100) : 0;

    return {
      annualHires,
      avgSalary,
      rate,
      timeToFill,
      misHires,
      // Direct per-category totals
      reRecruiting: misHires * reRecruiting,
      wastedOnboarding: misHires * wastedOnboarding,
      severance: misHires * severance,
      lostProductivity: misHires * lostProductivity,
      managerTime: misHires * managerTime,
      moraleImpact: misHires * moraleImpact,
      delayedProjects: misHires * delayedProjects,
      costPerMisHire,
      totalAnnualCost,
      // Reduction
      newRate,
      newMisHires,
      newAnnualCost,
      annualSavings,
      // LayersRank
      layersRankCost,
      netBenefit,
      roi,
      paybackMonths,
      // Additional savings
      tradHoursPerHire,
      lrHoursPerHire,
      tradInterviewerCost,
      lrInterviewerCost,
      interviewerSavings,
      lrTTF,
      ttfSavingsTotal,
      tradOffersNeeded,
      lrOffersNeeded,
      offerSavings,
      // Totals
      grossValue,
      netValue,
      totalROI,
    };
  }, [hires, salary, misHireRate, ttf, allSelected]);

  function handleGateSubmit() {
    setUnlocked(true);
  }

  return (
    <>
      {/* ── PAGE 1: THE HOOK ───────────────────────────── */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Hiring Cost Calculator
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            How Much Are Bad Hires Costing&nbsp;You?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            Most companies track cost-per-hire. Few track cost-per-bad-hire.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6 text-base leading-relaxed text-ink-light md:text-lg">
            <p>
              A mis-hire in engineering costs <span className="font-semibold text-ink">3&ndash;5x their annual salary</span> when you factor in:
            </p>
            <ul className="space-y-2 text-sm text-ink-light md:text-base">
              {[
                'Recruiting costs (again)',
                'Onboarding and training (wasted)',
                'Lost productivity (team slowdown)',
                'Delayed projects (opportunity cost)',
                'Manager time (interviews, coaching, termination)',
                'Morale impact (team sees it)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6 text-center">
              <p className="font-mono text-3xl font-extrabold text-brand-red">&nbsp;45&ndash;75 lakh</p>
              <p className="mt-2 text-sm text-ink-muted">Cost of a single mis-hire at &nbsp;15 lakh salary</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-paper-off p-6 text-center">
              <p className="font-mono text-3xl font-extrabold text-brand-red">&nbsp;4.5&ndash;7.5 crore</p>
              <p className="mt-2 text-sm text-ink-muted">Annual waste at 20% mis-hire rate, 50 hires/year</p>
            </div>
          </div>

          <p className="mt-8 text-center text-lg font-semibold text-brand-yellow">
            This calculator shows your number.
          </p>
        </div>
      </section>

      {/* ── PAGE 2: INPUTS ─────────────────────────────── */}
      <section id="calculator" className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Your Hiring Profile
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Tell us about your hiring
          </h2>

          <div className="mt-10 space-y-8">
            <OptionSelector
              label="Annual Engineering Hires"
              options={hiresOptions}
              value={hires}
              onChange={setHires}
            />
            <OptionSelector
              label="Average Engineer Salary (Annual CTC)"
              options={salaryOptions}
              value={salary}
              onChange={setSalary}
            />
            <OptionSelector
              label="Current Mis-Hire Rate (Best Estimate)"
              options={misHireOptions}
              value={misHireRate}
              onChange={setMisHireRate}
            />
            <OptionSelector
              label="Average Time-to-Fill (Days)"
              options={ttfOptions}
              value={ttf}
              onChange={setTtf}
            />
          </div>

          {/* Preview teaser if all selected but not unlocked */}
          {allSelected && !unlocked && calc && (
            <div className="mt-10">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <p className="text-sm text-ink-muted">Based on your inputs, your estimated annual mis-hire cost is:</p>
                <p className="mt-2 font-mono text-4xl font-extrabold text-brand-red">
                  {formatLakh(calc.totalAnnualCost)}
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  {calc.misHires} mis-hires &times; {formatLakh(calc.costPerMisHire)} per mis-hire
                </p>
                <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-brand-yellow/30" />
                <p className="mt-4 text-sm font-medium text-ink">
                  Enter your email to see the full breakdown, reduction scenarios, and ROI analysis.
                </p>
              </div>

              <div className="mt-8">
                <LeadGateForm
                  title="Unlock Your Full Report"
                  description="See the complete cost breakdown, what LayersRank saves you, and a downloadable summary."
                  ctaLabel="Get My Full Report"
                  leadMagnetType="roi"
                  onSubmit={handleGateSubmit}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── PAGES 3-7: FULL REPORT (gated) ─────────────── */}
      {unlocked && calc && (
        <>
          {/* PAGE 3: Cost Breakdown */}
          <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Your Cost Breakdown
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Annual Cost of Mis-Hires
              </h2>

              <div className="mt-10 rounded-2xl border-2 border-brand-red/20 bg-white p-6 md:p-8">
                <div className="grid gap-4 text-sm md:grid-cols-2">
                  <div>
                    <ResultRow label="Annual hires" value={formatINR(calc.annualHires)} />
                    <ResultRow label={`Estimated mis-hires (${Math.round(calc.rate * 100)}%)`} value={formatINR(calc.misHires)} />
                    <ResultRow label="Average salary" value={`\u20B9${formatINR(calc.avgSalary)}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Direct Costs</p>
                    <ResultRow label="Re-recruiting" value={`\u20B9${formatINR(calc.reRecruiting)}`} />
                    <ResultRow label="Wasted onboarding" value={`\u20B9${formatINR(calc.wastedOnboarding)}`} />
                    <ResultRow label="Severance/transition" value={`\u20B9${formatINR(calc.severance)}`} />
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Indirect Costs</p>
                  <div className="mt-2 grid gap-4 md:grid-cols-2">
                    <div>
                      <ResultRow label="Lost productivity" value={`\u20B9${formatINR(calc.lostProductivity)}`} />
                      <ResultRow label="Manager time" value={`\u20B9${formatINR(calc.managerTime)}`} />
                    </div>
                    <div>
                      <ResultRow label="Team morale impact" value={`\u20B9${formatINR(calc.moraleImpact)}`} />
                      <ResultRow label="Delayed projects" value={`\u20B9${formatINR(calc.delayedProjects)}`} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t-2 border-brand-red/20 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-ink">Total Annual Cost</span>
                    <span className="font-mono text-2xl font-extrabold text-brand-red">
                      {formatLakh(calc.totalAnnualCost)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Cost per mis-hire</span>
                    <span className="font-semibold text-ink">\u20B9{formatINR(calc.costPerMisHire)}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PAGE 4: Reduction Scenario */}
          <section className="bg-paper-off py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                The Reduction Scenario
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                What If You Cut Mis-Hires by 50%?
              </h2>
              <p className="mt-4 text-ink-light">
                Structured interviews with confidence scoring typically reduce mis-hire rates by 40&ndash;60%.
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-brand-red/20 bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-red">Your Current State</p>
                  <div className="mt-4">
                    <ResultRow label="Mis-hire rate" value={`${Math.round(calc.rate * 100)}%`} />
                    <ResultRow label="Annual mis-hires" value={formatINR(calc.misHires)} />
                    <ResultRow label="Annual cost" value={formatLakh(calc.totalAnnualCost)} bold color="red" />
                  </div>
                </div>

                <div className="rounded-xl border border-brand-green/20 bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-green">With LayersRank</p>
                  <div className="mt-4">
                    <ResultRow label="Mis-hire rate" value={`${Math.round(calc.newRate * 100)}%`} />
                    <ResultRow label="Annual mis-hires" value={formatINR(calc.newMisHires)} />
                    <ResultRow label="Annual cost" value={formatLakh(calc.newAnnualCost)} bold color="green" />
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-2 border-brand-green/20 bg-brand-green/5 p-6 text-center">
                <p className="text-sm font-semibold text-ink-muted">Annual savings from mis-hire reduction</p>
                <p className="mt-2 font-mono text-3xl font-extrabold text-brand-green md:text-4xl">
                  {formatLakh(calc.annualSavings)}
                </p>
              </div>

              {/* ROI Box */}
              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">Your ROI with LayersRank</p>
                <div className="mt-4">
                  <ResultRow
                    label={`LayersRank annual cost (${formatINR(calc.annualHires)} hires \u00d7 5 assessments \u00d7 \u20B9${calc.annualHires >= 100 ? '1,800' : '2,000'})`}
                    value={`\u20B9${formatINR(calc.layersRankCost)}`}
                  />
                  <ResultRow label="Annual savings" value={formatLakh(calc.annualSavings)} bold />
                  <div className="mt-2 border-t border-gray-200 pt-2">
                    <ResultRow label="Net benefit" value={formatLakh(calc.netBenefit)} bold color="green" />
                    <ResultRow label="ROI" value={`${formatINR(calc.roi)}%`} bold color="green" />
                    <ResultRow
                      label="Payback period"
                      value={calc.paybackMonths < 1 ? '< 1 month' : `${calc.paybackMonths.toFixed(1)} months`}
                      bold
                      color="green"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PAGE 5: Additional Savings */}
          <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Beyond Mis-Hire Reduction
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Additional Savings
              </h2>

              <div className="mt-10 space-y-8">
                {/* Interviewer Time */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-ink">Interviewer Time Saved</h3>
                  <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-paper-off">
                          <th className="px-4 py-3 text-left font-semibold text-ink">Metric</th>
                          <th className="px-4 py-3 text-center font-semibold text-ink-muted">Traditional</th>
                          <th className="px-4 py-3 text-center font-semibold text-brand-green">LayersRank</th>
                          <th className="px-4 py-3 text-center font-semibold text-ink">Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200">
                          <td className="px-4 py-2 font-medium text-ink">Hours per hire</td>
                          <td className="px-4 py-2 text-center text-ink-muted">15\u201320</td>
                          <td className="px-4 py-2 text-center text-brand-green">6\u20138</td>
                          <td className="px-4 py-2 text-center font-medium text-ink">10+ hours</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="px-4 py-2 font-medium text-ink">At \u20B91,500/hour</td>
                          <td className="px-4 py-2 text-center text-ink-muted">\u20B9{formatINR(calc.annualHires * 17.5 * 1500 / calc.annualHires)}</td>
                          <td className="px-4 py-2 text-center text-brand-green">\u20B9{formatINR(calc.annualHires * 7 * 1500 / calc.annualHires)}</td>
                          <td className="px-4 py-2 text-center font-medium text-ink">\u20B9{formatINR(10.5 * 1500)}</td>
                        </tr>
                        <tr className="border-t border-gray-200 bg-paper-off">
                          <td className="px-4 py-2 font-bold text-ink">For {formatINR(calc.annualHires)} hires</td>
                          <td className="px-4 py-2 text-center font-medium text-ink-muted">{formatLakh(calc.tradInterviewerCost)}</td>
                          <td className="px-4 py-2 text-center font-medium text-brand-green">{formatLakh(calc.lrInterviewerCost)}</td>
                          <td className="px-4 py-2 text-center font-bold text-brand-green">{formatLakh(calc.interviewerSavings)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Time-to-Fill */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-ink">Time-to-Fill Reduction</h3>
                  <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-paper-off">
                          <th className="px-4 py-3 text-left font-semibold text-ink">Metric</th>
                          <th className="px-4 py-3 text-center font-semibold text-ink-muted">Traditional</th>
                          <th className="px-4 py-3 text-center font-semibold text-brand-green">LayersRank</th>
                          <th className="px-4 py-3 text-center font-semibold text-ink">Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200">
                          <td className="px-4 py-2 font-medium text-ink">Average days</td>
                          <td className="px-4 py-2 text-center text-ink-muted">{calc.timeToFill}</td>
                          <td className="px-4 py-2 text-center text-brand-green">{calc.lrTTF}</td>
                          <td className="px-4 py-2 text-center font-medium text-ink">-{calc.timeToFill - calc.lrTTF} days</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="px-4 py-2 font-medium text-ink">Vacancy cost/day</td>
                          <td className="px-4 py-2 text-center text-ink-muted">\u20B95,000</td>
                          <td className="px-4 py-2 text-center text-ink-muted">\u20B95,000</td>
                          <td className="px-4 py-2 text-center text-ink-muted">&mdash;</td>
                        </tr>
                        <tr className="border-t border-gray-200 bg-paper-off">
                          <td className="px-4 py-2 font-bold text-ink">For {formatINR(calc.annualHires)} hires</td>
                          <td className="px-4 py-2 text-center font-medium text-ink-muted">{formatLakh(calc.annualHires * calc.timeToFill * 5000)}</td>
                          <td className="px-4 py-2 text-center font-medium text-brand-green">{formatLakh(calc.annualHires * calc.lrTTF * 5000)}</td>
                          <td className="px-4 py-2 text-center font-bold text-brand-green">{formatLakh(calc.ttfSavingsTotal)} saved</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Offer Acceptance */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-ink">Offer Acceptance Rate</h3>
                  <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-paper-off">
                          <th className="px-4 py-3 text-left font-semibold text-ink">Metric</th>
                          <th className="px-4 py-3 text-center font-semibold text-ink-muted">Traditional</th>
                          <th className="px-4 py-3 text-center font-semibold text-brand-green">LayersRank</th>
                          <th className="px-4 py-3 text-center font-semibold text-ink">Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200">
                          <td className="px-4 py-2 font-medium text-ink">Acceptance rate</td>
                          <td className="px-4 py-2 text-center text-ink-muted">70%</td>
                          <td className="px-4 py-2 text-center text-brand-green">85%</td>
                          <td className="px-4 py-2 text-center font-medium text-ink">+15%</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="px-4 py-2 font-medium text-ink">Offers needed for {formatINR(calc.annualHires)} hires</td>
                          <td className="px-4 py-2 text-center text-ink-muted">{calc.tradOffersNeeded}</td>
                          <td className="px-4 py-2 text-center text-brand-green">{calc.lrOffersNeeded}</td>
                          <td className="px-4 py-2 text-center font-medium text-ink">{calc.tradOffersNeeded - calc.lrOffersNeeded} fewer</td>
                        </tr>
                        <tr className="border-t border-gray-200 bg-paper-off">
                          <td className="px-4 py-2 font-bold text-ink">Savings</td>
                          <td className="px-4 py-2 text-center text-ink-muted">&mdash;</td>
                          <td className="px-4 py-2 text-center text-ink-muted">&mdash;</td>
                          <td className="px-4 py-2 text-center font-bold text-brand-green">{formatLakh(calc.offerSavings)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PAGE 6: Total Value Summary */}
          <section className="bg-ink py-16 text-white md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Total Value Summary
              </p>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                Your Complete Savings Profile
              </h2>

              <div className="mt-10 rounded-2xl border border-gray-700 bg-white/5 p-6 md:p-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-700 py-3">
                    <span className="text-gray-300">Mis-hire reduction</span>
                    <span className="font-mono font-bold text-white">{formatLakh(calc.annualSavings)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-700 py-3">
                    <span className="text-gray-300">Interviewer time saved</span>
                    <span className="font-mono font-bold text-white">{formatLakh(calc.interviewerSavings)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-700 py-3">
                    <span className="text-gray-300">Faster time-to-fill</span>
                    <span className="font-mono font-bold text-white">{formatLakh(calc.ttfSavingsTotal)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-700 py-3">
                    <span className="text-gray-300">Better offer acceptance</span>
                    <span className="font-mono font-bold text-white">{formatLakh(calc.offerSavings)}</span>
                  </div>
                </div>

                <div className="mt-6 border-t-2 border-brand-yellow/30 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-300">Gross Annual Value</span>
                    <span className="font-mono text-xl font-extrabold text-brand-yellow">{formatLakh(calc.grossValue)}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-gray-400">LayersRank investment</span>
                    <span className="font-mono text-sm text-gray-400">\u20B9{formatINR(calc.layersRankCost)}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-green/10 px-4 py-4">
                    <span className="font-bold text-brand-green">Net Annual Value</span>
                    <span className="font-mono text-2xl font-extrabold text-brand-green">{formatLakh(calc.netValue)}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-gray-400">ROI</span>
                    <span className="font-mono text-lg font-bold text-brand-green">{formatINR(calc.totalROI)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PAGE 7: CTA */}
          <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                See It In Action
              </h2>
              <p className="mt-4 text-ink-light">
                This calculator shows estimates. Your actual results depend on your specific situation.
                Want to see real numbers?
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <Link
                  href="/demo"
                  className="rounded-xl border-2 border-brand-yellow bg-brand-yellow/5 p-6 text-center transition-colors hover:bg-brand-yellow/10"
                >
                  <p className="text-sm font-bold text-ink">Book a Demo</p>
                  <p className="mt-1 text-xs text-ink-muted">
                    We&rsquo;ll run a pilot with your actual roles
                  </p>
                </Link>
                <Link
                  href="/demo"
                  className="rounded-xl border border-gray-200 bg-white p-6 text-center transition-colors hover:border-brand-yellow"
                >
                  <p className="text-sm font-bold text-ink">Start Free Trial</p>
                  <p className="mt-1 text-xs text-ink-muted">
                    5 assessments free. See the reports.
                  </p>
                </Link>
                <Link
                  href="/demo"
                  className="rounded-xl border border-gray-200 bg-white p-6 text-center transition-colors hover:border-brand-yellow"
                >
                  <p className="text-sm font-bold text-ink">Talk to Sales</p>
                  <p className="mt-1 text-xs text-ink-muted">
                    Discuss your specific hiring challenges
                  </p>
                </Link>
              </div>

              <p className="mt-8 text-xs text-ink-muted">
                LayersRank by The Algorithm &middot; www.layersrank.com &middot; hello@layersrank.com
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
