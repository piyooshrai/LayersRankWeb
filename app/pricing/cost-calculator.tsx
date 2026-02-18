'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

function formatINR(amount: number): string {
  return amount.toLocaleString('en-IN');
}

function getGrowthRate(quarterlyVolume: number): number {
  if (quarterlyVolume >= 500) return 1400;
  if (quarterlyVolume >= 250) return 1600;
  if (quarterlyVolume >= 100) return 1800;
  if (quarterlyVolume >= 50) return 1900;
  return 2000;
}

function getRecommendedPlan(annualAssessments: number): string {
  if (annualAssessments > 500) return 'Enterprise';
  if (annualAssessments > 100) return 'Growth';
  return 'Starter';
}

export function CostCalculator() {
  const [hires, setHires] = useState(100);
  const [candidatesPerHire, setCandidatesPerHire] = useState(5);

  const result = useMemo(() => {
    const totalAssessments = hires * candidatesPerHire;
    const quarterlyVolume = Math.ceil(totalAssessments / 4);
    const plan = getRecommendedPlan(totalAssessments);

    let ratePerAssessment: number;
    let rateNote: string;

    if (plan === 'Enterprise') {
      ratePerAssessment = 1500;
      rateNote = 'Estimated enterprise rate';
    } else if (plan === 'Growth') {
      ratePerAssessment = getGrowthRate(quarterlyVolume);
      rateNote =
        quarterlyVolume >= 50
          ? `Volume discount applied (${quarterlyVolume >= 250 ? '250' : quarterlyVolume >= 100 ? '100' : '50'}+ assessments/quarter)`
          : 'Standard Growth rate';
    } else {
      ratePerAssessment = 2500;
      rateNote = 'Standard Starter rate';
    }

    const layersRankCost = totalAssessments * ratePerAssessment;
    const hireVueCost = 2900000; // ~₹29 lakh
    const phoneScreenCost = totalAssessments * 75 * (300 / 60); // 75 min × ₹300/hr
    const phoneScreenSavings = phoneScreenCost - layersRankCost;
    const hireVueSavings = hireVueCost - layersRankCost;

    return {
      totalAssessments,
      plan,
      ratePerAssessment,
      rateNote,
      layersRankCost,
      hireVueCost,
      phoneScreenCost,
      phoneScreenSavings: Math.max(0, phoneScreenSavings),
      hireVueSavings: Math.max(0, hireVueSavings),
    };
  }, [hires, candidatesPerHire]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label htmlFor="hires" className="block text-sm font-semibold text-ink">
              How many hires do you plan to make this year?
            </label>
            <div className="mt-2 flex items-center gap-3">
              <input
                id="hires"
                type="range"
                min={10}
                max={1000}
                step={10}
                value={hires}
                onChange={(e) => setHires(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-brand-yellow"
              />
              <span className="w-16 shrink-0 rounded-lg border border-gray-200 bg-paper-off px-3 py-1.5 text-center font-mono text-sm font-bold text-ink">
                {hires}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="candidates" className="block text-sm font-semibold text-ink">
              How many candidates do you typically assess per hire?
            </label>
            <div className="mt-2 flex items-center gap-3">
              <input
                id="candidates"
                type="range"
                min={1}
                max={20}
                step={1}
                value={candidatesPerHire}
                onChange={(e) => setCandidatesPerHire(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-brand-yellow"
              />
              <span className="w-16 shrink-0 rounded-lg border border-gray-200 bg-paper-off px-3 py-1.5 text-center font-mono text-sm font-bold text-ink">
                {candidatesPerHire}
              </span>
            </div>
          </div>

          <div className="rounded-lg bg-paper-off p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink-muted">Your estimated annual assessments:</span>
              <span className="font-mono text-lg font-bold text-ink">{formatINR(result.totalAssessments)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-ink-muted">Recommended plan:</span>
              <span className="font-semibold text-brand-yellow">{result.plan}</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl border border-gray-200 bg-paper-off p-6">
          <p className="text-sm font-semibold text-ink">Estimated Annual Cost</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-mono text-2xl font-extrabold text-ink md:text-3xl">
              &nbsp;{formatINR(result.layersRankCost)}
            </span>
          </div>
          <p className="mt-1 text-xs text-ink-muted">
            {formatINR(result.totalAssessments)} assessments &times; &nbsp;{formatINR(result.ratePerAssessment)}*
          </p>
          <p className="text-xs text-ink-muted">*{result.rateNote}</p>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Compare to alternatives</p>
            <div className="mt-3 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">HireVue</span>
                <span className="text-ink-muted">&nbsp;29,00,000+ / year (flat fee)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Traditional phone screens</span>
                <span className="text-ink-muted">&nbsp;{formatINR(result.phoneScreenCost)} / year</span>
              </div>
              {(result.phoneScreenSavings > 0 || result.hireVueSavings > 0) && (
                <div className="rounded-lg border border-brand-green/30 bg-brand-green/5 p-3">
                  <p className="text-sm font-semibold text-brand-green">
                    Your savings with LayersRank:
                  </p>
                  <p className="mt-1 font-mono text-lg font-bold text-brand-green">
                    &nbsp;{formatINR(Math.min(result.phoneScreenSavings, result.hireVueSavings))} &ndash; &nbsp;{formatINR(Math.max(result.phoneScreenSavings, result.hireVueSavings))}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange"
        >
          Get Custom Quote
        </Link>
        <p className="mt-2 text-xs text-ink-muted">We&rsquo;ll build a detailed proposal for your situation</p>
      </div>
    </div>
  );
}
