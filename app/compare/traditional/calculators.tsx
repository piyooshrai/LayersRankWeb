'use client';

import { useState } from 'react';

function formatINR(value: number) {
  return value.toLocaleString('en-IN');
}

/* ------------------------------------------------------------------ */
/*  Time Savings Calculator                                           */
/* ------------------------------------------------------------------ */

export function TimeSavingsCalculator() {
  const [monthlyScreens, setMonthlyScreens] = useState(30);
  const [screenDuration, setScreenDuration] = useState(45);
  const [docTime, setDocTime] = useState(15);
  const [schedulingOverhead, setSchedulingOverhead] = useState(15);

  // Traditional process
  const traditionalScreeningHrs = (monthlyScreens * screenDuration) / 60;
  const traditionalDocHrs = (monthlyScreens * docTime) / 60;
  const traditionalSchedulingHrs = (monthlyScreens * schedulingOverhead) / 60;
  const traditionalTotalHrs =
    traditionalScreeningHrs + traditionalDocHrs + traditionalSchedulingHrs;

  // LayersRank process
  const reportReviewHrs = (monthlyScreens * 10) / 60;
  const recruiterSendHrs = (monthlyScreens * 2) / 60;
  const layersRankTotalHrs = reportReviewHrs + recruiterSendHrs;

  const monthlyTimeSavings = traditionalTotalHrs - layersRankTotalHrs;
  const annualTimeSavings = monthlyTimeSavings * 12;
  const savingsPercent =
    traditionalTotalHrs > 0
      ? Math.round((monthlyTimeSavings / traditionalTotalHrs) * 100)
      : 0;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div>
        <h3 className="text-lg font-bold text-ink">Your Inputs</h3>

        <div className="mt-6 space-y-6">
          {/* Monthly screens */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="monthly-screens" className="text-sm font-semibold text-ink">
                Monthly first-round screens
              </label>
              <span className="rounded-lg bg-paper-off px-3 py-1 text-sm font-bold text-brand-yellow">
                {monthlyScreens}
              </span>
            </div>
            <input
              id="monthly-screens"
              type="range"
              min={5}
              max={200}
              step={5}
              value={monthlyScreens}
              onChange={(e) => setMonthlyScreens(Number(e.target.value))}
              className="mt-3 w-full accent-brand-yellow"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-muted">
              <span>5</span>
              <span>200</span>
            </div>
          </div>

          {/* Screen duration */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="screen-duration" className="text-sm font-semibold text-ink">
                Average screen duration (min)
              </label>
              <span className="rounded-lg bg-paper-off px-3 py-1 text-sm font-bold text-brand-yellow">
                {screenDuration}
              </span>
            </div>
            <input
              id="screen-duration"
              type="range"
              min={15}
              max={60}
              step={5}
              value={screenDuration}
              onChange={(e) => setScreenDuration(Number(e.target.value))}
              className="mt-3 w-full accent-brand-yellow"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-muted">
              <span>15 min</span>
              <span>60 min</span>
            </div>
          </div>

          {/* Documentation time */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="doc-time" className="text-sm font-semibold text-ink">
                Post-screen documentation (min)
              </label>
              <span className="rounded-lg bg-paper-off px-3 py-1 text-sm font-bold text-brand-yellow">
                {docTime}
              </span>
            </div>
            <input
              id="doc-time"
              type="range"
              min={5}
              max={30}
              step={5}
              value={docTime}
              onChange={(e) => setDocTime(Number(e.target.value))}
              className="mt-3 w-full accent-brand-yellow"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-muted">
              <span>5 min</span>
              <span>30 min</span>
            </div>
          </div>

          {/* Scheduling overhead */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="sched-overhead" className="text-sm font-semibold text-ink">
                Scheduling overhead per screen (min)
              </label>
              <span className="rounded-lg bg-paper-off px-3 py-1 text-sm font-bold text-brand-yellow">
                {schedulingOverhead}
              </span>
            </div>
            <input
              id="sched-overhead"
              type="range"
              min={5}
              max={30}
              step={5}
              value={schedulingOverhead}
              onChange={(e) => setSchedulingOverhead(Number(e.target.value))}
              className="mt-3 w-full accent-brand-yellow"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-muted">
              <span>5 min</span>
              <span>30 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="rounded-2xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
        <h3 className="text-lg font-bold text-ink">Your Results</h3>

        {/* Traditional breakdown */}
        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Traditional Process (Monthly)
          </p>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">Screening time</span>
            <span className="text-sm font-medium text-ink-muted">
              {monthlyScreens} &times; {screenDuration} min = {traditionalScreeningHrs.toFixed(1)} hrs
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">Documentation time</span>
            <span className="text-sm font-medium text-ink-muted">
              {monthlyScreens} &times; {docTime} min = {traditionalDocHrs.toFixed(1)} hrs
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">Scheduling overhead</span>
            <span className="text-sm font-medium text-ink-muted">
              {monthlyScreens} &times; {schedulingOverhead} min = {traditionalSchedulingHrs.toFixed(1)} hrs
            </span>
          </div>
          <div className="flex items-center justify-between pb-2">
            <span className="text-sm font-bold text-ink">Total interviewer time</span>
            <span className="font-bold text-ink">{traditionalTotalHrs.toFixed(1)} hrs/month</span>
          </div>
        </div>

        {/* LayersRank breakdown */}
        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            LayersRank Process (Monthly)
          </p>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">Report review time</span>
            <span className="text-sm font-medium text-ink-muted">
              {monthlyScreens} &times; 10 min = {reportReviewHrs.toFixed(1)} hrs
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">Recruiter send time</span>
            <span className="text-sm font-medium text-ink-muted">
              {monthlyScreens} &times; 2 min = {recruiterSendHrs.toFixed(1)} hrs
            </span>
          </div>
          <div className="flex items-center justify-between pb-2">
            <span className="text-sm font-bold text-ink">Total time</span>
            <span className="font-bold text-ink">{layersRankTotalHrs.toFixed(1)} hrs/month</span>
          </div>
        </div>

        {/* Savings */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
            <span className="font-bold text-brand-green">Monthly Time Savings</span>
            <span className="text-xl font-extrabold text-brand-green">
              {monthlyTimeSavings > 0 ? `${monthlyTimeSavings.toFixed(1)} hrs` : '—'}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
            <span className="font-bold text-brand-green">Annual Time Savings</span>
            <span className="text-xl font-extrabold text-brand-green">
              {annualTimeSavings > 0 ? `${Math.round(annualTimeSavings)} hrs` : '—'}
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <p className="text-xs text-ink-muted">Reduction</p>
            <p className="mt-1 text-lg font-bold text-brand-green">
              {savingsPercent > 0 ? `${savingsPercent}%` : '—'}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <p className="text-xs text-ink-muted">Annual hours freed</p>
            <p className="mt-1 text-lg font-bold text-ink">
              {annualTimeSavings > 0 ? Math.round(annualTimeSavings) : '—'}
            </p>
          </div>
        </div>

        <p className="mt-4 text-center text-sm font-medium text-ink-light">
          That&rsquo;s{' '}
          <span className="font-bold text-brand-green">{Math.round(annualTimeSavings)} hours</span>{' '}
          per year your engineers can spend building product instead of screening candidates.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cost Savings Calculator                                           */
/* ------------------------------------------------------------------ */

export function CostSavingsCalculator() {
  const [monthlyScreens, setMonthlyScreens] = useState(30);
  const [hourlyCost, setHourlyCost] = useState(1500);
  const [planTier, setPlanTier] = useState<'starter' | 'growth' | 'scale'>('growth');

  // Pricing per tier
  const tierPricing = { starter: 2500, growth: 2000, scale: 1500 };
  const tierLabels = { starter: 'Starter', growth: 'Growth', scale: 'Scale' };
  const costPerAssessment = tierPricing[planTier];

  // Traditional cost
  const traditionalHrs = monthlyScreens * 1.25; // 45 min screen + 15 min doc + 15 min scheduling ≈ 75 min
  const traditionalCost = traditionalHrs * hourlyCost;

  // LayersRank cost
  const assessmentCost = monthlyScreens * costPerAssessment;
  const reviewHrs = (monthlyScreens * 10) / 60;
  const reviewCost = reviewHrs * hourlyCost;
  const layersRankTotal = assessmentCost + reviewCost;

  const monthlyDiff = traditionalCost - layersRankTotal;
  const layersRankCostsMore = monthlyDiff < 0;

  // Quality-adjusted costs
  const falsePositiveRate = 0.2;
  const falsePositiveCandidates = Math.round(monthlyScreens * falsePositiveRate);
  const finalRoundWaste = falsePositiveCandidates * 3 * hourlyCost; // 3 hrs per wasted final round
  const adjustedTraditionalCost = traditionalCost + finalRoundWaste;
  const adjustedSavings = adjustedTraditionalCost - layersRankTotal;
  const annualAdjustedSavings = adjustedSavings * 12;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div>
        <h3 className="text-lg font-bold text-ink">Your Inputs</h3>

        <div className="mt-6 space-y-6">
          {/* Monthly screens */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="cost-monthly-screens" className="text-sm font-semibold text-ink">
                Monthly first-round screens
              </label>
              <span className="rounded-lg bg-paper-off px-3 py-1 text-sm font-bold text-brand-yellow">
                {monthlyScreens}
              </span>
            </div>
            <input
              id="cost-monthly-screens"
              type="range"
              min={5}
              max={200}
              step={5}
              value={monthlyScreens}
              onChange={(e) => setMonthlyScreens(Number(e.target.value))}
              className="mt-3 w-full accent-brand-yellow"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-muted">
              <span>5</span>
              <span>200</span>
            </div>
          </div>

          {/* Hourly cost */}
          <div>
            <label htmlFor="hourly-cost" className="block text-sm font-semibold text-ink">
              Senior engineer hourly cost (fully loaded)
            </label>
            <div className="relative mt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted">₹</span>
              <input
                id="hourly-cost"
                type="number"
                min={500}
                max={5000}
                step={100}
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value) || 1500)}
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-ink focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
              />
            </div>
            <p className="mt-1 text-xs text-ink-muted">
              Typical range: ₹800 &ndash; ₹3,000/hour
            </p>
          </div>

          {/* Plan tier */}
          <div>
            <label className="block text-sm font-semibold text-ink">LayersRank plan</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(['starter', 'growth', 'scale'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setPlanTier(tier)}
                  className={`rounded-lg border-2 px-3 py-2 text-sm font-medium transition ${
                    planTier === tier
                      ? 'border-brand-yellow bg-brand-yellow/10 text-ink'
                      : 'border-gray-200 bg-white text-ink-muted hover:border-gray-300'
                  }`}
                >
                  <div className="font-bold">{tierLabels[tier]}</div>
                  <div className="text-xs">₹{formatINR(tierPricing[tier])}/assess</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="rounded-2xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
        <h3 className="text-lg font-bold text-ink">Your Results</h3>

        {/* Direct cost comparison */}
        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Direct Cost Comparison (Monthly)
          </p>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">Traditional interviewer time</span>
            <span className="text-sm font-medium text-ink-muted">
              {traditionalHrs.toFixed(1)} hrs &times; ₹{formatINR(hourlyCost)} = ₹{formatINR(Math.round(traditionalCost))}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">LayersRank assessments</span>
            <span className="text-sm font-medium text-ink-muted">
              {monthlyScreens} &times; ₹{formatINR(costPerAssessment)} = ₹{formatINR(assessmentCost)}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">Reviewer time</span>
            <span className="text-sm font-medium text-ink-muted">
              {reviewHrs.toFixed(1)} hrs &times; ₹{formatINR(hourlyCost)} = ₹{formatINR(Math.round(reviewCost))}
            </span>
          </div>
          <div className="flex items-center justify-between pb-2">
            <span className="text-sm font-bold text-ink">LayersRank total</span>
            <span className="font-bold text-ink">₹{formatINR(Math.round(layersRankTotal))}</span>
          </div>

          {layersRankCostsMore && (
            <div className="rounded-lg border-2 border-brand-orange/30 bg-brand-orange/5 px-4 py-3">
              <p className="text-sm font-bold text-brand-orange">
                Wait &mdash; LayersRank costs more?
              </p>
              <p className="mt-1 text-xs text-ink-light">
                Not so fast. Let&rsquo;s factor in quality&hellip;
              </p>
            </div>
          )}
        </div>

        {/* Quality-adjusted */}
        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Quality-Adjusted (Monthly)
          </p>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">Traditional direct cost</span>
            <span className="text-sm font-medium text-ink-muted">
              ₹{formatINR(Math.round(traditionalCost))}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm text-ink-muted">
              Wasted final rounds ({falsePositiveCandidates} false positives)
            </span>
            <span className="text-sm font-medium text-ink-muted">
              ₹{formatINR(Math.round(finalRoundWaste))}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-sm font-bold text-ink">Adjusted traditional cost</span>
            <span className="font-bold text-ink-muted">
              ₹{formatINR(Math.round(adjustedTraditionalCost))}
            </span>
          </div>
          <div className="flex items-center justify-between pb-2">
            <span className="text-sm font-bold text-ink">LayersRank cost</span>
            <span className="font-bold text-ink">₹{formatINR(Math.round(layersRankTotal))}</span>
          </div>
        </div>

        {/* Savings */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
            <span className="font-bold text-brand-green">Monthly Savings (Adjusted)</span>
            <span className="text-xl font-extrabold text-brand-green">
              {adjustedSavings > 0 ? `₹${formatINR(Math.round(adjustedSavings))}` : '—'}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
            <span className="font-bold text-brand-green">Annual Savings</span>
            <span className="text-xl font-extrabold text-brand-green">
              {annualAdjustedSavings > 0
                ? `₹${formatINR(Math.round(annualAdjustedSavings))}`
                : '—'}
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs text-ink-muted">
          And that&rsquo;s before counting the value of engineers spending time on product instead
          of phone screens.
        </p>
      </div>
    </div>
  );
}
