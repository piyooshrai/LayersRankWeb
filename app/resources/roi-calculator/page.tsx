'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PageHero, PageCTA } from '@/components/page-sections';

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function formatINR(value: number) {
  return value.toLocaleString('en-IN');
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
      {children}
    </p>
  );
}

function Slider({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  prefix,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {label}
        </label>
        <span className="rounded-lg bg-paper-off px-3 py-1 text-sm font-bold text-brand-yellow">
          {prefix}
          {value.toLocaleString('en-IN')}
          {suffix}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-brand-yellow"
      />
      <div className="mt-1 flex justify-between text-xs text-ink-muted">
        <span>
          {prefix}
          {min.toLocaleString('en-IN')}
          {suffix}
        </span>
        <span>
          {prefix}
          {max.toLocaleString('en-IN')}
          {suffix}
        </span>
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  bold,
  highlight,
}: {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: 'green' | 'yellow';
}) {
  const cls = highlight
    ? highlight === 'green'
      ? 'text-brand-green font-bold'
      : 'text-brand-yellow font-bold'
    : bold
      ? 'font-bold text-ink'
      : 'text-ink-muted';
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-2 last:border-0">
      <span className={`text-sm ${bold ? 'font-semibold text-ink' : 'text-ink-muted'}`}>
        {label}
      </span>
      <span className={`text-sm ${cls}`}>{value}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ROICalculatorPage() {
  // Step 1: Hiring volume
  const [hiresPerYear, setHiresPerYear] = useState(50);
  const [screensPerHire, setScreensPerHire] = useState(5);

  // Step 2: Current process
  const [interviewerType, setInterviewerType] = useState<
    'recruiter' | 'hiring-manager' | 'technical' | 'mixed'
  >('technical');
  const [hourlyCost, setHourlyCost] = useState(1500);
  const [screenDuration, setScreenDuration] = useState(45);
  const [docTime, setDocTime] = useState(15);
  const [schedulingOverhead, setSchedulingOverhead] = useState(15);

  // Step 3: Quality factors
  const [advanceRate, setAdvanceRate] = useState(40);
  const [offerRate, setOfferRate] = useState(50);
  const [acceptanceRate, setAcceptanceRate] = useState(75);
  const [badHireRate, setBadHireRate] = useState(15);

  // ── Derived calculations ──────────────────────────────────────────

  const totalScreens = hiresPerYear * screensPerHire;
  const timePerScreen = screenDuration + docTime + schedulingOverhead;
  const totalInterviewerHrs = (totalScreens * timePerScreen) / 60;
  const totalInterviewerDays = totalInterviewerHrs / 8;

  // LayersRank
  const reviewHrs = (totalScreens * 10) / 60;
  const recruiterSendHrs = (totalScreens * 2) / 60;
  const totalLRHrs = reviewHrs + recruiterSendHrs;
  const totalLRDays = totalLRHrs / 8;

  const hoursSaved = totalInterviewerHrs - totalLRHrs;
  const daysSaved = hoursSaved / 8;
  const percentReduction =
    totalInterviewerHrs > 0
      ? Math.round((hoursSaved / totalInterviewerHrs) * 100)
      : 0;

  // Cost
  const currentDirectCost = totalInterviewerHrs * hourlyCost;

  // Indirect: false positives wasting final rounds
  const candidatesAdvanced = Math.round(totalScreens * (advanceRate / 100));
  const falsePositiveRate = 0.15;
  const falsePositives = Math.round(candidatesAdvanced * falsePositiveRate);
  const falsePositiveWaste = falsePositives * 3 * hourlyCost;

  // Indirect: opportunity cost (productivity hit)
  const opportunityCost = totalInterviewerHrs * 0.5 * hourlyCost;

  // Indirect: speed cost
  const vacancyCostPerWeek = 50000;
  const extraWeeks = 2;
  const speedCostRaw = vacancyCostPerWeek * extraWeeks * hiresPerYear;
  const speedCost = speedCostRaw * 0.25; // discounted

  const totalCurrentConservative = currentDirectCost + falsePositiveWaste;
  const totalCurrentFull =
    currentDirectCost + falsePositiveWaste + opportunityCost + speedCost;

  // LayersRank pricing tier
  let tierPrice = 2500;
  let tierLabel = 'Starter';
  if (totalScreens > 1200) {
    tierPrice = 1500;
    tierLabel = 'Scale';
  } else if (totalScreens > 300) {
    tierPrice = 2000;
    tierLabel = 'Growth';
  }

  const assessmentCost = totalScreens * tierPrice;
  const reviewerCost = reviewHrs * hourlyCost;
  const totalLRCost = assessmentCost + reviewerCost;

  const conservativeSavings = currentDirectCost - totalLRCost;
  const fullSavings = totalCurrentFull - totalLRCost;

  // Quality
  const currentFalseNegPct = 10;
  const lrFalseNegPct = 5;
  const currentFalsePosPct = 15;
  const lrFalsePosPct = 8;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Resources / ROI Calculator"
        title="What's Your First-Round Screening Actually Costing?"
        description="Most companies underestimate the true cost of phone screens and manual evaluation. Calculate your current spend and see how LayersRank compares \u2014 including time savings, consistency improvements, and speed-to-hire impact."
        primaryCta="Calculate Now"
        primaryCtaHref="#calculator"
        secondaryCta="Talk to Sales"
        secondaryCtaHref="/demo"
      />

      {/* ── CALCULATOR ────────────────────────────────────────── */}
      <section id="calculator" className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* ── Inputs ── */}
            <div className="space-y-10">
              {/* Step 1 */}
              <div>
                <h2 className="text-xl font-bold text-ink">
                  <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
                    1
                  </span>
                  Your Hiring Volume
                </h2>
                <div className="mt-6 space-y-6">
                  <Slider
                    id="hires-year"
                    label="Hires per year"
                    value={hiresPerYear}
                    onChange={setHiresPerYear}
                    min={5}
                    max={500}
                    step={5}
                  />
                  <Slider
                    id="screens-hire"
                    label="Candidates screened per hire (first round)"
                    value={screensPerHire}
                    onChange={setScreensPerHire}
                    min={2}
                    max={20}
                    step={1}
                  />
                  <div className="rounded-lg bg-brand-yellow/5 px-4 py-3">
                    <p className="text-sm text-ink-muted">
                      Total first-round screens per year:{' '}
                      <span className="font-bold text-ink">
                        {totalScreens.toLocaleString('en-IN')}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h2 className="text-xl font-bold text-ink">
                  <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
                    2
                  </span>
                  Your Current Process
                </h2>
                <div className="mt-6 space-y-6">
                  {/* Interviewer type */}
                  <div>
                    <label className="block text-sm font-semibold text-ink">
                      Who conducts first-round screens?
                    </label>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {(
                        [
                          ['recruiter', 'Recruiters only'],
                          ['hiring-manager', 'Hiring managers'],
                          ['technical', 'Technical interviewers'],
                          ['mixed', 'Mixed panel'],
                        ] as const
                      ).map(([val, lbl]) => (
                        <button
                          key={val}
                          onClick={() => setInterviewerType(val)}
                          className={`rounded-lg border-2 px-3 py-2 text-sm font-medium transition ${
                            interviewerType === val
                              ? 'border-brand-yellow bg-brand-yellow/10 text-ink'
                              : 'border-gray-200 bg-white text-ink-muted hover:border-gray-300'
                          }`}
                        >
                          {lbl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="hourly-cost"
                      className="block text-sm font-semibold text-ink"
                    >
                      Average interviewer hourly cost (fully loaded)
                    </label>
                    <div className="relative mt-2">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted">
                        \u20B9
                      </span>
                      <input
                        id="hourly-cost"
                        type="number"
                        min={500}
                        max={5000}
                        step={100}
                        value={hourlyCost}
                        onChange={(e) =>
                          setHourlyCost(Number(e.target.value) || 1500)
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-ink focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
                      />
                    </div>
                  </div>

                  <Slider
                    id="screen-dur"
                    label="Average screen duration"
                    value={screenDuration}
                    onChange={setScreenDuration}
                    min={15}
                    max={60}
                    step={5}
                    suffix=" min"
                  />
                  <Slider
                    id="doc-time"
                    label="Post-screen documentation"
                    value={docTime}
                    onChange={setDocTime}
                    min={5}
                    max={30}
                    step={5}
                    suffix=" min"
                  />
                  <Slider
                    id="sched-over"
                    label="Scheduling overhead per screen"
                    value={schedulingOverhead}
                    onChange={setSchedulingOverhead}
                    min={5}
                    max={30}
                    step={5}
                    suffix=" min"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <h2 className="text-xl font-bold text-ink">
                  <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
                    3
                  </span>
                  Quality Factors
                </h2>
                <div className="mt-6 space-y-6">
                  <Slider
                    id="advance-rate"
                    label="Candidates advancing to final rounds"
                    value={advanceRate}
                    onChange={setAdvanceRate}
                    min={10}
                    max={80}
                    step={5}
                    suffix="%"
                  />
                  <Slider
                    id="offer-rate"
                    label="Of those, percentage receiving offers"
                    value={offerRate}
                    onChange={setOfferRate}
                    min={20}
                    max={80}
                    step={5}
                    suffix="%"
                  />
                  <Slider
                    id="accept-rate"
                    label="Offer acceptance rate"
                    value={acceptanceRate}
                    onChange={setAcceptanceRate}
                    min={30}
                    max={95}
                    step={5}
                    suffix="%"
                  />
                  <Slider
                    id="bad-hire"
                    label="Hires who don't work out (within 1 year)"
                    value={badHireRate}
                    onChange={setBadHireRate}
                    min={5}
                    max={30}
                    step={5}
                    suffix="%"
                  />
                </div>
              </div>
            </div>

            {/* ── Results ── */}
            <div className="space-y-8 lg:sticky lg:top-8 lg:self-start">
              {/* Time Analysis */}
              <div className="rounded-2xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
                <h3 className="text-lg font-bold text-ink">Time Analysis</h3>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Current Process (Annual)
                  </p>
                  <div className="mt-2">
                    <ResultRow
                      label="Screens per year"
                      value={formatINR(totalScreens)}
                    />
                    <ResultRow
                      label="Time per screen"
                      value={`${timePerScreen} min`}
                    />
                    <ResultRow
                      label="Total interviewer time"
                      value={`${formatINR(Math.round(totalInterviewerHrs))} hrs (${Math.round(totalInterviewerDays)} days)`}
                      bold
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    With LayersRank (Annual)
                  </p>
                  <div className="mt-2">
                    <ResultRow
                      label="Report review time"
                      value={`${formatINR(Math.round(reviewHrs))} hrs`}
                    />
                    <ResultRow
                      label="Recruiter send time"
                      value={`${formatINR(Math.round(recruiterSendHrs))} hrs`}
                    />
                    <ResultRow
                      label="Total time"
                      value={`${formatINR(Math.round(totalLRHrs))} hrs (${Math.round(totalLRDays)} days)`}
                      bold
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
                    <span className="text-sm font-bold text-brand-green">
                      Hours saved/year
                    </span>
                    <span className="text-lg font-extrabold text-brand-green">
                      {formatINR(Math.round(hoursSaved))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
                    <span className="text-sm font-bold text-brand-green">
                      Days saved/year
                    </span>
                    <span className="text-lg font-extrabold text-brand-green">
                      {Math.round(daysSaved)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
                    <span className="text-sm font-bold text-brand-green">
                      Reduction
                    </span>
                    <span className="text-lg font-extrabold text-brand-green">
                      {percentReduction}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Cost Analysis */}
              <div className="rounded-2xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6">
                <h3 className="text-lg font-bold text-ink">Cost Analysis</h3>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Current Direct Costs (Annual)
                  </p>
                  <div className="mt-2">
                    <ResultRow
                      label="Interviewer time"
                      value={`\u20B9${formatINR(Math.round(currentDirectCost))}`}
                      bold
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Indirect Costs (Estimated)
                  </p>
                  <div className="mt-2">
                    <ResultRow
                      label={`Wasted final rounds (${falsePositives} false positives)`}
                      value={`\u20B9${formatINR(Math.round(falsePositiveWaste))}`}
                    />
                    <ResultRow
                      label="Opportunity cost (50% productivity impact)"
                      value={`\u20B9${formatINR(Math.round(opportunityCost))}`}
                    />
                    <ResultRow
                      label="Speed cost (vacancy, discounted)"
                      value={`\u20B9${formatINR(Math.round(speedCost))}`}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <ResultRow
                    label="Total current (conservative)"
                    value={`\u20B9${formatINR(Math.round(totalCurrentConservative))}`}
                    bold
                  />
                  <ResultRow
                    label="Total current (full)"
                    value={`\u20B9${formatINR(Math.round(totalCurrentFull))}`}
                    bold
                  />
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    LayersRank Costs (Annual)
                  </p>
                  <div className="mt-2">
                    <ResultRow
                      label={`Assessments (${tierLabel} \u20B9${formatINR(tierPrice)}/each)`}
                      value={`\u20B9${formatINR(assessmentCost)}`}
                    />
                    <ResultRow
                      label="Reviewer time"
                      value={`\u20B9${formatINR(Math.round(reviewerCost))}`}
                    />
                    <ResultRow
                      label="Total LayersRank cost"
                      value={`\u20B9${formatINR(Math.round(totalLRCost))}`}
                      bold
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {conservativeSavings > 0 ? (
                    <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
                      <span className="text-sm font-bold text-brand-green">
                        Conservative savings
                      </span>
                      <span className="text-lg font-extrabold text-brand-green">
                        \u20B9{formatINR(Math.round(conservativeSavings))}
                      </span>
                    </div>
                  ) : (
                    <div className="rounded-lg border-2 border-brand-orange/30 bg-brand-orange/5 px-4 py-3">
                      <p className="text-sm font-bold text-brand-orange">
                        Direct cost: LayersRank costs \u20B9
                        {formatINR(Math.abs(Math.round(conservativeSavings)))} more
                      </p>
                      <p className="mt-1 text-xs text-ink-light">
                        But you save {formatINR(Math.round(hoursSaved))} hours and
                        get consistent, structured evaluation.
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-4 py-3">
                    <span className="text-sm font-bold text-brand-green">
                      Full ROI savings
                    </span>
                    <span className="text-lg font-extrabold text-brand-green">
                      {fullSavings > 0
                        ? `\u20B9${formatINR(Math.round(fullSavings))}`
                        : '\u2014'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quality Impact */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">Quality Impact</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Consistency
                    </p>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-ink-muted">
                        Interviewer variance: 15&ndash;25%
                      </span>
                      <span className="font-bold text-brand-green">
                        LayersRank: &lt;5%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      False Negatives (Good candidates rejected)
                    </p>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-ink-muted">
                        Current: ~{currentFalseNegPct}%
                      </span>
                      <span className="font-bold text-brand-green">
                        LayersRank: &lt;{lrFalseNegPct}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      False Positives (Weak candidates advanced)
                    </p>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-ink-muted">
                        Current: ~{currentFalsePosPct}%
                      </span>
                      <span className="font-bold text-brand-green">
                        LayersRank: &lt;{lrFalsePosPct}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Speed
                    </p>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-ink-muted">
                        Current cycle: 2&ndash;3 weeks
                      </span>
                      <span className="font-bold text-brand-green">
                        LayersRank: 3&ndash;5 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCENARIO COMPARISONS ──────────────────────────────── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Scenario Comparisons</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            See the numbers at different scales
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Startup',
                subtitle: '25 hires/year',
                screens: 125,
                tradHrs: 156,
                lrHrs: 21,
                lrCost: '3,12,500',
                tradCost: '2,34,375',
                note: 'Similar cost, massive time savings, better consistency',
              },
              {
                title: 'Growth Company',
                subtitle: '100 hires/year',
                screens: 500,
                tradHrs: 625,
                lrHrs: 83,
                lrCost: '10,00,000',
                tradCost: '9,37,500',
                note: 'Similar cost, engineering team gets 68 days back',
              },
              {
                title: 'GCC / Enterprise',
                subtitle: '500 hires/year',
                screens: 2500,
                tradHrs: 3125,
                lrHrs: 417,
                lrCost: '37,50,000',
                tradCost: '46,87,500',
                note: '\u20B99,37,500 CASH SAVINGS + 338 days of interviewer time',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-ink">
                  {s.title}{' '}
                  <span className="text-sm font-normal text-ink-muted">
                    ({s.subtitle})
                  </span>
                </h3>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Total screens</span>
                    <span className="font-medium text-ink">
                      {s.screens.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Traditional time</span>
                    <span className="font-medium text-ink">
                      {s.tradHrs.toLocaleString('en-IN')} hrs
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted">LayersRank time</span>
                    <span className="font-medium text-ink">
                      {s.lrHrs.toLocaleString('en-IN')} hrs
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-gray-100 pt-2">
                    <span className="text-ink-muted">Traditional cost</span>
                    <span className="font-medium text-ink-muted">
                      \u20B9{s.tradCost}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted">LayersRank cost</span>
                    <span className="font-medium text-ink">
                      \u20B9{s.lrCost}
                    </span>
                  </div>
                </div>
                <p className="mt-4 rounded-lg bg-brand-yellow/5 px-3 py-2 text-xs font-medium text-ink">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT THE CALCULATOR DOESN'T CAPTURE ───────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Beyond the Numbers</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            What the calculator doesn&rsquo;t capture
          </h2>
          <p className="mt-2 text-ink-light">
            Some benefits are hard to quantify but real.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Better Candidate Experience',
                body: 'Candidates complete assessments on their schedule. No coordination hassles. Professional, consistent process. This affects your employer brand and offer acceptance rates.',
              },
              {
                title: 'Audit Trail and Compliance',
                body: 'Every assessment is documented. If a hiring decision is questioned, you have evidence. This matters for regulated industries and large organizations.',
              },
              {
                title: 'Data for Improvement',
                body: 'LayersRank provides analytics on your hiring funnel. Which questions differentiate candidates? Where do good candidates struggle? This data improves your process over time.',
              },
              {
                title: 'Manager Satisfaction',
                body: 'Hiring managers get clear, actionable reports instead of vague interview notes. They can make decisions faster with more confidence.',
              },
              {
                title: 'Scalability',
                body: 'Need to hire 2x next quarter? LayersRank scales instantly. Phone screens require proportionally more interviewer time.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSUMPTIONS ───────────────────────────────────────── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-yellow">
            Assumptions &amp; Methodology
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            How we calculate costs
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                Direct Costs
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                Interviewer time is valued at fully-loaded cost (salary +
                benefits + overhead). Default \u20B91,500/hour assumes senior
                engineer level. Screen duration includes interview,
                documentation, and scheduling overhead.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                Indirect Costs
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                Interviewer inconsistency (15&ndash;25% variance) is based on
                published research on interview reliability. False
                positive/negative rates are estimates. Vacancy costs vary by role
                and company; we use conservative estimates.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <h3 className="text-lg font-bold text-brand-yellow">
                What We Don&rsquo;t Include
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-300">
                <li>&bull; Cost of bad hires (much larger, hard to attribute)</li>
                <li>&bull; Long-term quality improvements</li>
                <li>&bull; Employer brand impact</li>
                <li>&bull; Reduced bias and improved diversity outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOM ANALYSIS CTA ───────────────────────────────── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel>Customize Your Calculation</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Want a more detailed ROI analysis?
          </h2>
          <p className="mt-4 text-ink-light">
            Our team can factor in your actual interviewer costs by level,
            account for your specific hiring mix (roles, levels, locations),
            include your historical quality data, and model different adoption
            scenarios.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/demo"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition hover:brightness-105"
            >
              Get Custom ROI Analysis
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-bold text-ink transition hover:border-brand-yellow hover:text-brand-yellow"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Understanding the numbers
          </h2>

          <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {[
              {
                q: 'Why does LayersRank sometimes cost more than just interviewer time?',
                a: "LayersRank costs cash. Phone screens cost time. If your interviewers are available and not expensive, phone screens may be cheaper in pure dollars. But time has value \u2014 those hours could be spent building product. And LayersRank provides consistency, speed, and quality that phone screens don\u2019t.",
              },
              {
                q: "What if we don\u2019t have expensive interviewers doing screens?",
                a: "If recruiters (at lower cost) do all first-round screens, the direct cost comparison shifts. But recruiters can\u2019t assess technical depth, system design, or engineering judgment the way LayersRank can. You\u2019d still need technical screens later \u2014 LayersRank might replace those instead.",
              },
              {
                q: 'How accurate are these estimates?',
                a: 'The time calculations are straightforward \u2014 you can verify them against your own data. The indirect cost estimates are industry benchmarks; your actuals may differ. The quality improvements are based on research comparing structured vs. unstructured interviews.',
              },
              {
                q: "What\u2019s the payback period?",
                a: 'For most organizations, the time savings and quality improvements justify LayersRank within 1\u20132 quarters. Cash-flow breakeven depends on your volume and interviewer costs.',
              },
            ].map((item) => (
              <details key={item.q} className="group px-6 py-6">
                <summary className="flex cursor-pointer items-center justify-between text-[15px] font-semibold text-ink">
                  {item.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-light">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ────────────────────────────────────── */}
      <section className="bg-paper-off py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-lg font-bold text-ink">Related Resources</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'Pricing', href: '/pricing' },
              { label: 'vs Traditional', href: '/compare/traditional' },
              { label: 'GCC Solutions', href: '/solutions/gcc' },
              { label: 'Sample Report', href: '/resources/sample-report' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-brand-yellow hover:text-brand-yellow"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <PageCTA
        title="See the Numbers for Your Situation"
        description="Get a customized ROI analysis based on your actual hiring volume, interviewer costs, and quality goals."
        cta="Get Custom ROI Analysis"
        ctaHref="/demo"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />
    </>
  );
}
