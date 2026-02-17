'use client';

import { useState } from 'react';

function formatINR(value: number) {
  return value.toLocaleString('en-IN');
}

export function SavingsCalculator() {
  const [interviewsPerYear, setInterviewsPerYear] = useState(500);
  const [hireVueCost, setHireVueCost] = useState(50000);

  const hireVueCostINR = Math.round(hireVueCost * 84);
  const hireVueCostPerInterview = hireVueCostINR / (interviewsPerYear || 1);

  // LayersRank pricing tiers
  let layersRankPerInterview = 2500;
  let tierLabel = 'Starter';
  if (interviewsPerYear > 1200) {
    layersRankPerInterview = 1500;
    tierLabel = 'Scale';
  } else if (interviewsPerYear > 300) {
    layersRankPerInterview = 2000;
    tierLabel = 'Growth';
  }

  const layersRankTotal = interviewsPerYear * layersRankPerInterview;
  const annualSavings = hireVueCostINR - layersRankTotal;
  const savingsPerInterview = hireVueCostPerInterview - layersRankPerInterview;
  const savingsPercent =
    hireVueCostPerInterview > 0
      ? Math.round((savingsPerInterview / hireVueCostPerInterview) * 100)
      : 0;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div>
        <h3 className="text-lg font-bold text-ink">Your Inputs</h3>

        <div className="mt-6 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="interviews" className="text-sm font-semibold text-ink">
                Interviews per year
              </label>
              <span className="rounded-lg bg-paper-off px-3 py-1 text-sm font-bold text-brand-yellow">
                {interviewsPerYear}
              </span>
            </div>
            <input
              id="interviews"
              type="range"
              min={50}
              max={5000}
              step={50}
              value={interviewsPerYear}
              onChange={(e) => setInterviewsPerYear(Number(e.target.value))}
              className="mt-3 w-full accent-brand-yellow"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-muted">
              <span>50</span>
              <span>5,000</span>
            </div>
          </div>

          <div>
            <label htmlFor="hirevue-cost" className="block text-sm font-semibold text-ink">
              Current HireVue cost (USD/year)
            </label>
            <div className="relative mt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted">$</span>
              <input
                id="hirevue-cost"
                type="number"
                min={10000}
                max={200000}
                step={5000}
                value={hireVueCost}
                onChange={(e) => setHireVueCost(Number(e.target.value) || 35000)}
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-ink focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
              />
            </div>
            <p className="mt-1 text-xs text-ink-muted">
              Typical range: $35,000 &ndash; $145,000/year
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-ink-muted">
          Note: HireVue pricing varies by contract. Use your actual contract amount for accurate
          comparison. USD to INR conversion at approximate rate.
        </p>
      </div>

      {/* Results */}
      <div className="rounded-2xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
        <h3 className="text-lg font-bold text-ink">Your Results</h3>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <span className="text-sm text-ink-muted">Current HireVue cost</span>
            <span className="font-semibold text-ink-muted">
              ₹{formatINR(hireVueCostINR)}/year
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <span className="text-sm text-ink-muted">
              LayersRank cost ({tierLabel})
            </span>
            <span className="font-semibold text-ink">₹{formatINR(layersRankTotal)}/year</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
            <span className="font-bold text-brand-green">Annual Savings</span>
            <span className="text-xl font-extrabold text-brand-green">
              {annualSavings > 0 ? `₹${formatINR(annualSavings)}` : '—'}
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <p className="text-xs text-ink-muted">Cost per interview</p>
            <div className="mt-1">
              <p className="text-sm text-ink-muted line-through">
                ₹{formatINR(Math.round(hireVueCostPerInterview))}
              </p>
              <p className="text-lg font-bold text-ink">₹{formatINR(layersRankPerInterview)}</p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <p className="text-xs text-ink-muted">Savings per interview</p>
            <p className="mt-1 text-lg font-bold text-brand-green">
              {savingsPercent > 0 ? `${savingsPercent}%` : '—'}
            </p>
            <p className="text-sm text-ink-muted">
              {savingsPerInterview > 0 ? `₹${formatINR(Math.round(savingsPerInterview))}` : '—'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
