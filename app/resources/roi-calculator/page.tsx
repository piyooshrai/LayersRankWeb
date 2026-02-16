'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PageHero, PageCTA } from '@/components/page-sections';

// Note: metadata must be exported from a server component or a separate file.
// For client components, metadata can be set via a layout or generateMetadata in a parent.

export default function ROICalculatorPage() {
  const [hiresPerQuarter, setHiresPerQuarter] = useState(50);
  const [timeToFill, setTimeToFill] = useState(45);
  const [costPerHour, setCostPerHour] = useState(75);
  const [offerAcceptanceRate, setOfferAcceptanceRate] = useState(65);

  // Calculation logic
  const screeningHoursPerHire = 3; // average phone screen + scheduling overhead
  const layersRankReductionPercent = 0.6; // 60% reduction in screening time
  const timeToFillReductionDays = Math.round(timeToFill * 0.3); // 30% faster time-to-fill
  const timeSavedHours = Math.round(
    hiresPerQuarter * screeningHoursPerHire * layersRankReductionPercent
  );
  const costSavings = Math.round(timeSavedHours * costPerHour);
  const improvedAcceptanceRate = Math.min(
    Math.round(offerAcceptanceRate * 1.15), // 15% improvement
    99
  );

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Calculate Your Hiring ROI"
        description="Estimate time and cost savings with LayersRank based on your current hiring volume and process."
      />

      {/* Calculator Section */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Input Form */}
            <div>
              <h2 className="text-2xl font-bold text-ink">Your current process</h2>
              <p className="mt-2 text-ink-light">
                Adjust the inputs below to reflect your hiring volume and costs.
              </p>

              <div className="mt-8 space-y-8">
                {/* Hires per Quarter */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="hires"
                      className="text-sm font-semibold text-ink"
                    >
                      Hires per quarter
                    </label>
                    <span className="rounded-lg bg-paper-off px-3 py-1 text-sm font-bold text-brand-yellow">
                      {hiresPerQuarter}
                    </span>
                  </div>
                  <input
                    id="hires"
                    type="range"
                    min={5}
                    max={500}
                    step={5}
                    value={hiresPerQuarter}
                    onChange={(e) => setHiresPerQuarter(Number(e.target.value))}
                    className="mt-3 w-full accent-brand-yellow"
                  />
                  <div className="mt-1 flex justify-between text-xs text-ink-muted">
                    <span>5</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Time to Fill */}
                <div>
                  <label
                    htmlFor="timeToFill"
                    className="block text-sm font-semibold text-ink"
                  >
                    Current time-to-fill (days)
                  </label>
                  <input
                    id="timeToFill"
                    type="number"
                    min={1}
                    max={365}
                    value={timeToFill}
                    onChange={(e) => setTimeToFill(Number(e.target.value) || 1)}
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-ink focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
                  />
                </div>

                {/* Cost per Interview Hour */}
                <div>
                  <label
                    htmlFor="costPerHour"
                    className="block text-sm font-semibold text-ink"
                  >
                    Cost per interview hour ($)
                  </label>
                  <input
                    id="costPerHour"
                    type="number"
                    min={1}
                    max={1000}
                    value={costPerHour}
                    onChange={(e) => setCostPerHour(Number(e.target.value) || 1)}
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-ink focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
                  />
                </div>

                {/* Offer Acceptance Rate */}
                <div>
                  <label
                    htmlFor="acceptanceRate"
                    className="block text-sm font-semibold text-ink"
                  >
                    Current offer acceptance rate (%)
                  </label>
                  <input
                    id="acceptanceRate"
                    type="number"
                    min={1}
                    max={100}
                    value={offerAcceptanceRate}
                    onChange={(e) =>
                      setOfferAcceptanceRate(
                        Math.min(100, Math.max(1, Number(e.target.value) || 1))
                      )
                    }
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-ink focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold text-ink">Your estimated savings</h2>
              <p className="mt-2 text-ink-light">
                Based on your inputs, here is what LayersRank could save you each quarter.
              </p>

              <div className="mt-8 grid gap-6">
                {/* Time Saved */}
                <div className="rounded-2xl border border-gray-200 bg-paper-off p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
                      <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-ink-muted">Time saved per quarter</p>
                      <p className="text-3xl font-extrabold text-ink">{timeSavedHours} hours</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink-light">
                    By replacing manual phone screens with structured async assessments, your team
                    reclaims {timeSavedHours} hours per quarter.
                  </p>
                </div>

                {/* Cost Savings */}
                <div className="rounded-2xl border border-gray-200 bg-paper-off p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/10">
                      <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-ink-muted">Cost savings per quarter</p>
                      <p className="text-3xl font-extrabold text-ink">
                        ${costSavings.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink-light">
                    At ${costPerHour}/hour, the time savings alone translate to $
                    {costSavings.toLocaleString()} in reduced interviewing costs each quarter.
                  </p>
                </div>

                {/* Time to Fill Reduction */}
                <div className="rounded-2xl border border-gray-200 bg-paper-off p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10">
                      <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-ink-muted">Faster time-to-fill</p>
                      <p className="text-3xl font-extrabold text-ink">
                        {timeToFillReductionDays} days faster
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink-light">
                    Reduce your average time-to-fill from {timeToFill} days to{' '}
                    {timeToFill - timeToFillReductionDays} days by removing scheduling bottlenecks
                    and accelerating candidate evaluation.
                  </p>
                </div>

                {/* Improved Offer Acceptance */}
                <div className="rounded-2xl border border-gray-200 bg-paper-off p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
                      <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-ink-muted">Improved offer acceptance</p>
                      <p className="text-3xl font-extrabold text-ink">
                        {offerAcceptanceRate}% → {improvedAcceptanceRate}%
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink-light">
                    Faster, more respectful candidate experiences lead to higher offer acceptance
                    rates. Candidates who feel evaluated fairly are more likely to say yes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Get a personalized ROI analysis"
        description="These are estimates. Let us run the numbers on your specific hiring process and show you the real impact."
        cta="Book a Demo"
        ctaHref="/demo"
      />
    </>
  );
}
