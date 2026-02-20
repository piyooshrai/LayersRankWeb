import Link from 'next/link';

export default function CaseStudyCampus() {
  return (
    <>
      {/* ── TITLE PAGE ── */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-full bg-[#f39c12]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#f39c12]">
            Case Study
          </span>
          <span className="inline-flex items-center rounded-full bg-[#f39c12]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#f39c12]">
            Enterprise / IT Services
          </span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-tight">
          50,000 Candidates,<br />
          <span className="text-[#f39c12]">Zero Pedigree Filtering</span>
        </h1>
        <p className="mt-4 text-xl text-ink-light max-w-2xl">
          How a large IT services company assessed 50,000+ campus applicants on capability instead of college name &mdash; and found stronger, more diverse, lower-attrition talent at 26% lower cost.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { label: 'Company', value: 'IT Services & Consulting' },
            { label: 'Employees', value: '45,000+' },
            { label: 'Campuses', value: '150+' },
            { label: 'Annual Hiring', value: '3,000\u20134,000' },
          ].map((m) => (
            <div key={m.label} className="text-sm">
              <p className="font-semibold text-ink-muted uppercase tracking-wide text-xs">{m.label}</p>
              <p className="mt-0.5 font-semibold text-ink">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMPANY PROFILE ── */}
      <section className="mb-14">
        <div className="rounded-2xl border border-[#f39c12]/20 bg-gradient-to-br from-[#f39c12]/5 to-transparent p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f39c12] mb-4">Company Profile</p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: 'Type', value: 'IT Services & Consulting' },
                  { label: 'Size', value: '45,000+ employees' },
                  { label: 'Location', value: 'Pan-India (12 offices)' },
                  { label: 'Annual Campus Hiring', value: '3,000\u20134,000 freshers' },
                  { label: 'Colleges Visited', value: '150+ campuses' },
                  { label: 'Applicant Volume', value: '50,000+ per year' },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-white/60 transition-colors">
                    <td className="px-5 py-2.5 font-medium text-ink-muted w-40">{row.label}</td>
                    <td className="px-5 py-2.5 text-ink">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-muted italic">Company name withheld at client request.</p>
        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">1</span>
          <h2 className="text-2xl font-extrabold text-ink">The Challenge</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The Pedigree Trap</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          For years, the company&rsquo;s campus hiring followed a simple formula: Visit Tier-1 colleges, hire as many as possible, ignore everyone else.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          The logic seemed sound. IIT and NIT graduates were &ldquo;proven.&rdquo; Regional colleges were unknown quantities. Why take risks?
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          But the formula was breaking:
        </p>

        <div className="space-y-3 mb-8">
          {[
            {
              n: '1',
              title: 'Tier-1 supply couldn\u2019t meet demand.',
              desc: 'They needed 3,500 freshers. Tier-1 colleges produced ~50,000 engineering graduates total, competed for by every major employer. They were fighting for a shrinking slice of a small pie.',
            },
            {
              n: '2',
              title: 'Tier-1 costs were escalating.',
              desc: 'Starting salaries for IIT graduates had increased 40% in three years. Tier-1 hires expected faster promotions, premium projects, and accelerated growth paths. The economics were straining.',
            },
            {
              n: '3',
              title: 'Tier-1 attrition was highest.',
              desc: 'Counterintuitively, their Tier-1 hires had the highest attrition. After 18\u201324 months of training and project experience, they\u2019d jump to product companies or startups offering 50\u201370% raises.',
            },
            {
              n: '4',
              title: 'They were missing talent.',
              desc: 'Anecdotally, some of their best performers had come from lesser-known colleges. But the hiring process systematically excluded these candidates before anyone evaluated them.',
            },
          ].map((item) => (
            <div key={item.n} className="flex gap-4 rounded-xl border border-brand-red/20 bg-brand-red/5 p-4">
              <span className="shrink-0 font-mono text-2xl font-extrabold text-brand-red">{item.n}</span>
              <div>
                <p className="text-sm font-bold text-ink">{item.title}</p>
                <p className="text-sm text-ink-light mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The Filtering Reality</h3>
        <div className="relative pl-6 border-l-2 border-gray-200 space-y-6 mb-6">
          {[
            { phase: '50,000', title: 'Applications', items: ['All campus applicants'] },
            { phase: '5,000', title: 'College tier filter (Tier-1 only)', items: ['90% rejected on college name alone'] },
            { phase: '3,500', title: 'CGPA filter (>7.0)', items: ['Further narrowing within Tier-1'] },
            { phase: '2,000', title: 'Aptitude test', items: ['First actual evaluation of capability'] },
            { phase: '3,500', title: 'Offers (with dropout buffer)', items: ['Group discussion + Interview'] },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red ring-4 ring-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-brand-red">{step.phase}</span>
                  <span className="text-xs text-ink-muted">&middot;</span>
                  <span className="font-bold text-ink text-sm">{step.title}</span>
                </div>
                <ul className="space-y-1.5">
                  {step.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-ink-light">
                      <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-red/20 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border-l-4 border-brand-red bg-brand-red/5 p-5 mb-8">
          <p className="font-mono text-lg font-extrabold text-ink text-center">
            <span className="text-brand-red">90%</span> of applicants rejected based on college name alone &mdash; before any evaluation of actual capabilities.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The Question</h3>
        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-4">
          <p className="text-sm italic text-ink-light">
            &ldquo;What if we&rsquo;re wrong about college tier? What if there are strong candidates at Tier-2 and Tier-3 colleges that we&rsquo;re systematically ignoring?&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; VP of Campus Relations</p>
        </div>
        <p className="text-[15px] leading-relaxed text-ink-light">
          The problem: They had no way to evaluate 50,000 candidates. The current process worked precisely because it filtered 90% before evaluation. Without that filter, the process would collapse. Unless they could automate first-round evaluation.
        </p>
      </section>

      {/* ── THE SOLUTION ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">2</span>
          <h2 className="text-2xl font-extrabold text-ink">The Solution</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The Experiment</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">They designed a controlled experiment:</p>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-xl border border-brand-red/25 overflow-hidden">
            <div className="bg-brand-red/5 border-b border-brand-red/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-red uppercase tracking-wide">Group A &mdash; Control</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm text-ink-light">Traditional process. Tier-1 filter, then aptitude test, then interviews.</p>
              <p className="mt-3 text-xs font-semibold text-ink-muted">500 hires</p>
            </div>
          </div>
          <div className="rounded-xl border border-brand-green/25 overflow-hidden">
            <div className="bg-brand-green/5 border-b border-brand-green/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-green uppercase tracking-wide">Group B &mdash; Test</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm text-ink-light">No college filter. All applicants take LayersRank assessment. Top scorers advance regardless of college.</p>
              <p className="mt-3 text-xs font-semibold text-ink-muted">500 hires</p>
            </div>
          </div>
        </div>

        <p className="text-[15px] leading-relaxed text-ink-light mb-6">
          Each group would hire 500 candidates. After 12 months, they&rsquo;d compare performance, retention, and trajectory.
        </p>

        <h3 className="text-base font-bold text-ink mb-3">LayersRank Implementation</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          For Group B, the process became:
        </p>

        <div className="relative pl-6 border-l-2 border-gray-200 space-y-6 mb-8">
          {[
            { phase: '50,000', title: 'Applications', items: ['All candidates invited to LayersRank assessment'] },
            { phase: '32,000', title: 'Assessments completed (64%)', items: ['AI evaluation + scoring'] },
            { phase: '4,800', title: 'Top 15% advance', items: ['Interviews (condensed, informed by reports)'] },
            { phase: '500', title: 'Offers', items: ['Hired on demonstrated capability'] },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex h-4 w-4 items-center justify-center rounded-full bg-[#f39c12] ring-4 ring-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#f39c12]">{step.phase}</span>
                  <span className="text-xs text-ink-muted">&middot;</span>
                  <span className="font-bold text-ink text-sm">{step.title}</span>
                </div>
                <ul className="space-y-1.5">
                  {step.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-ink-light">
                      <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#f39c12]/20 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f39c12]" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-[#f39c12]/30 bg-[#f39c12]/5 p-6 mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f39c12] mb-3">Key Change</p>
          <p className="text-[15px] leading-relaxed text-ink-light">
            College name was <strong className="text-ink">not visible</strong> to LayersRank models or to interviewers reviewing reports. Evaluation was purely on demonstrated capability.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Assessment Design</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          The campus assessment measured:
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-4">
          <div className="rounded-xl border border-[#f39c12]/20 bg-[#f39c12]/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#f39c12] mb-2">Technical Fundamentals</p>
            <p className="font-mono text-lg font-extrabold text-ink mb-2">40%</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>Programming logic &amp; problem-solving</li>
              <li>Data structures &amp; algorithms (conceptual)</li>
              <li>Basic system thinking</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-2">Learning Orientation</p>
            <p className="font-mono text-lg font-extrabold text-ink mb-2">30%</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>Response to novel problems</li>
              <li>Reasoning through unfamiliar scenarios</li>
              <li>Intellectual curiosity signals</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#3b82f6] mb-2">Communication</p>
            <p className="font-mono text-lg font-extrabold text-ink mb-2">30%</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li>Clarity of expression</li>
              <li>Structured thinking</li>
              <li>Professional presence</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-ink-muted italic mb-4">
          Questions were calibrated for fresh graduates &mdash; testing potential and fundamentals rather than experience.
        </p>
      </section>

      {/* ── THE RESULTS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">3</span>
          <h2 className="text-2xl font-extrabold text-ink">The Results</h2>
        </div>

        {/* Big stat cards */}
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          {[
            { metric: 'Tier-2/3 Hires', before: '0%', after: '66%', delta: 'Unlocked' },
            { metric: '12-Month Attrition', before: '18%', after: '11%', delta: '-39%' },
            { metric: 'Average Salary Cost', before: '\u20B98.2L', after: '\u20B96.4L', delta: '-22%' },
          ].map((row) => (
            <div key={row.metric} className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-5">
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-3">{row.metric}</p>
              <div className="flex items-end justify-between mb-3">
                <div>
                  <p className="text-xs text-ink-muted">Before</p>
                  <p className="font-mono font-semibold text-ink">{row.before}</p>
                </div>
                <div className="text-center px-2">
                  <p className="text-xs text-ink-muted">&rarr;</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ink-muted">After</p>
                  <p className="font-mono font-semibold text-ink">{row.after}</p>
                </div>
              </div>
              <div className="text-center">
                <span className="rounded-full bg-brand-green/20 px-3 py-1 font-mono text-sm font-bold text-brand-green">{row.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Where Top Candidates Came From</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Distribution of candidates scoring in the top 15% (advancement threshold):
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">College Tier</th>
                <th className="text-right px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">% of Applicants</th>
                <th className="text-right px-4 py-2.5 font-semibold text-[#f39c12] text-xs uppercase tracking-wide">% of Top 15%</th>
                <th className="text-right px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Representation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { tier: 'Tier 1 (IIT/NIT/BITS)', applicants: '12%', top: '28%', index: '2.3x' },
                { tier: 'Tier 2 (State/Good Private)', applicants: '35%', top: '38%', index: '1.1x' },
                { tier: 'Tier 3 (Regional)', applicants: '53%', top: '34%', index: '0.6x' },
              ].map((row) => (
                <tr key={row.tier} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-2.5 font-medium text-ink">{row.tier}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-ink-muted">{row.applicants}</td>
                  <td className="px-4 py-2.5 text-right font-mono font-bold text-[#f39c12]">{row.top}</td>
                  <td className="px-5 py-2.5 text-right font-mono text-ink">{row.index}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border-l-4 border-[#f39c12] bg-[#f39c12]/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            While Tier-1 candidates were over-represented in top scorers (2.3x), <strong className="text-ink">72% of top candidates came from Tier-2 and Tier-3 colleges.</strong> Under the old system, these 72% would have been rejected without evaluation.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Hiring Outcomes</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Metric</th>
                <th className="text-right px-4 py-2.5 font-semibold text-brand-red text-xs uppercase tracking-wide">Group A (Traditional)</th>
                <th className="text-right px-5 py-2.5 font-semibold text-brand-green text-xs uppercase tracking-wide">Group B (LayersRank)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { metric: 'Candidates evaluated', a: '3,500', b: '32,000' },
                { metric: 'Hires', a: '500', b: '500' },
                { metric: 'Tier-1 hires', a: '100%', b: '34%' },
                { metric: 'Tier-2 hires', a: '0%', b: '42%' },
                { metric: 'Tier-3 hires', a: '0%', b: '24%' },
                { metric: 'Average starting salary', a: '\u20B98.2 lakh', b: '\u20B96.4 lakh' },
              ].map((row) => (
                <tr key={row.metric} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-2.5 font-medium text-ink">{row.metric}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-red">{row.a}</td>
                  <td className="px-5 py-2.5 text-right font-mono font-bold text-brand-green">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">12-Month Performance Comparison</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          After one year, they compared the two groups:
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Metric</th>
                <th className="text-right px-4 py-2.5 font-semibold text-brand-red text-xs uppercase tracking-wide">Group A</th>
                <th className="text-right px-4 py-2.5 font-semibold text-brand-green text-xs uppercase tracking-wide">Group B</th>
                <th className="text-right px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Difference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { metric: 'Training completion rate', a: '94%', b: '96%', diff: '+2%' },
                { metric: 'Training assessment scores', a: '78/100', b: '81/100', diff: '+4%' },
                { metric: 'Manager satisfaction (1\u20135)', a: '3.8', b: '4.0', diff: '+5%' },
                { metric: 'Project deployment rate', a: '89%', b: '93%', diff: '+4%' },
                { metric: 'Promotion rate (12 mo)', a: '12%', b: '14%', diff: '+17%' },
                { metric: 'Attrition rate (12 mo)', a: '18%', b: '11%', diff: '-39%' },
              ].map((row) => (
                <tr key={row.metric} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-2.5 font-medium text-ink">{row.metric}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-red">{row.a}</td>
                  <td className="px-4 py-2.5 text-right font-mono font-bold text-brand-green">{row.b}</td>
                  <td className="px-5 py-2.5 text-right font-mono font-bold text-brand-green">{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border-2 border-brand-green/30 bg-brand-green/5 p-6 mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">Key Finding</p>
          <p className="text-[15px] leading-relaxed text-ink-light">
            Group B (LayersRank, no pedigree filter) performed <strong className="text-ink">as well or better</strong> than Group A (traditional, Tier-1 only) on <strong className="text-ink">every metric.</strong>
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The Attrition Surprise</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          The most striking result was attrition. Group B&rsquo;s 11% attrition was dramatically lower than Group A&rsquo;s 18%.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          <strong className="text-ink">Hypothesis:</strong> Tier-2 and Tier-3 candidates felt they had more to prove. They valued the opportunity more highly. They were less likely to jump ship for incremental salary gains.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-4">
            <p className="text-xs font-bold text-brand-red uppercase tracking-wide mb-1">Group A Attrition Cost</p>
            <p className="font-mono text-lg font-extrabold text-ink">90 departures &times; &#8377;4L</p>
            <p className="mt-1 font-mono text-sm font-bold text-brand-red">= &#8377;3.6 crore loss</p>
          </div>
          <div className="rounded-lg border border-brand-green/20 bg-brand-green/5 p-4">
            <p className="text-xs font-bold text-brand-green uppercase tracking-wide mb-1">Group B Attrition Cost</p>
            <p className="font-mono text-lg font-extrabold text-ink">55 departures &times; &#8377;4L</p>
            <p className="mt-1 font-mono text-sm font-bold text-brand-green">= &#8377;2.2 crore loss</p>
          </div>
        </div>

        <div className="rounded-xl border-l-4 border-brand-green bg-brand-green/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            <strong className="text-ink">Savings from attrition reduction alone:</strong>{' '}
            <span className="font-mono font-bold text-brand-green">&#8377;1.4 crore</span>
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Cost Savings</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Cost Category</th>
                <th className="text-right px-4 py-2.5 font-semibold text-brand-red text-xs uppercase tracking-wide">Group A</th>
                <th className="text-right px-4 py-2.5 font-semibold text-brand-green text-xs uppercase tracking-wide">Group B</th>
                <th className="text-right px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { metric: 'Total salary (500 hires)', a: '\u20B941 crore', b: '\u20B932 crore', savings: '\u20B99 crore' },
                { metric: 'Attrition replacement', a: '\u20B93.6 crore', b: '\u20B92.2 crore', savings: '\u20B91.4 crore' },
                { metric: 'Campus visit costs', a: '\u20B985 lakh', b: '\u20B940 lakh', savings: '\u20B945 lakh' },
                { metric: 'Assessment/interview costs', a: '\u20B960 lakh', b: '\u20B975 lakh', savings: '-\u20B915 lakh' },
              ].map((row) => (
                <tr key={row.metric} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-2.5 font-medium text-ink">{row.metric}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-red">{row.a}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-green">{row.b}</td>
                  <td className="px-5 py-2.5 text-right font-mono font-bold text-ink">{row.savings}</td>
                </tr>
              ))}
              <tr className="bg-brand-green/5 font-bold">
                <td className="px-5 py-2.5 text-ink">Net savings</td>
                <td className="px-4 py-2.5" />
                <td className="px-4 py-2.5" />
                <td className="px-5 py-2.5 text-right font-mono text-brand-green">&#8377;10.7 crore</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FULL-SCALE ROLLOUT ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">4</span>
          <h2 className="text-2xl font-extrabold text-ink">Full-Scale Rollout</h2>
        </div>

        <p className="text-[15px] leading-relaxed text-ink-light mb-6">
          Based on the experiment results, the company rolled out LayersRank for all campus hiring the following year.
        </p>

        <div className="relative pl-6 border-l-2 border-gray-200 space-y-6 mb-8">
          {[
            { phase: '62,000', title: 'Applications received', items: ['LayersRank invitations sent to all'] },
            { phase: '41,000', title: 'Assessments completed (66%)', items: ['AI evaluation + scoring'] },
            { phase: '8,200', title: 'Top 20% advance', items: ['Virtual interviews (informed by reports)'] },
            { phase: '4,200', title: 'Offers extended', items: ['3,800 offers accepted'] },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex h-4 w-4 items-center justify-center rounded-full bg-[#f39c12] ring-4 ring-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#f39c12]">{step.phase}</span>
                  <span className="text-xs text-ink-muted">&middot;</span>
                  <span className="font-bold text-ink text-sm">{step.title}</span>
                </div>
                <ul className="space-y-1.5">
                  {step.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-ink-light">
                      <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#f39c12]/20 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f39c12]" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Rollout Results</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Metric</th>
                <th className="text-right px-4 py-2.5 font-semibold text-brand-red text-xs uppercase tracking-wide">Before</th>
                <th className="text-right px-4 py-2.5 font-semibold text-brand-green text-xs uppercase tracking-wide">After</th>
                <th className="text-right px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { metric: 'Applications evaluated', before: '5,000 (10%)', after: '41,000 (66%)', change: '+720%' },
                { metric: 'Colleges represented in hires', before: '45', after: '180+', change: '+300%' },
                { metric: 'Tier-1 % of hires', before: '100%', after: '32%', change: '-68%' },
                { metric: 'Average salary cost', before: '\u20B98.2 lakh', after: '\u20B96.1 lakh', change: '-26%' },
                { metric: '12-month attrition', before: '18%', after: '10%', change: '-44%' },
                { metric: 'Diversity improvement', before: 'Baseline', after: '+35%', change: '\u2014' },
              ].map((row) => (
                <tr key={row.metric} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-2.5 font-medium text-ink">{row.metric}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-red">{row.before}</td>
                  <td className="px-4 py-2.5 text-right font-mono font-bold text-brand-green">{row.after}</td>
                  <td className="px-5 py-2.5 text-right font-mono font-bold text-brand-green">{row.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Diversity Impact</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          An unexpected benefit: Removing college filters dramatically improved diversity.
        </p>
        <div className="grid gap-4 sm:grid-cols-3 mb-4">
          {[
            {
              title: 'Gender Diversity',
              before: '24%',
              after: '38%',
              desc: 'Female representation in hires. Many strong female candidates came from Tier-2 colleges.',
            },
            {
              title: 'Geographic Diversity',
              before: '8 states',
              after: '22 states',
              desc: 'Regional representation improved significantly.',
            },
            {
              title: 'Socioeconomic Diversity',
              before: '12%',
              after: '31%',
              desc: 'First-generation college students in hires.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[#f39c12]/20 bg-[#f39c12]/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[#f39c12] mb-2">{item.title}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-sm text-brand-red">{item.before}</span>
                <span className="text-xs text-ink-muted">&rarr;</span>
                <span className="font-mono text-sm font-bold text-brand-green">{item.after}</span>
              </div>
              <p className="text-xs text-ink-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── KEY LEARNINGS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">5</span>
          <h2 className="text-2xl font-extrabold text-ink">Key Learnings</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">What Worked</h3>
        <div className="space-y-3 mb-8">
          {[
            {
              n: '1',
              title: 'Running a controlled experiment first.',
              desc: 'The A/B test provided irrefutable data. When Group B outperformed Group A, skeptics had no counter-argument. The experiment was essential for overcoming institutional resistance.',
            },
            {
              n: '2',
              title: 'Hiding college information from evaluators.',
              desc: 'Identity-blind assessment was critical. When interviewers saw reports without college names, they evaluated candidates on substance. Bias didn\u2019t have a channel to operate.',
            },
            {
              n: '3',
              title: 'Measuring what matters.',
              desc: 'They defined success criteria upfront: training performance, manager satisfaction, project deployment, attrition. Clear metrics enabled clear conclusions.',
            },
            {
              n: '4',
              title: 'Starting with campus hiring.',
              desc: 'Fresh graduates have limited work history, so credentials matter more than for experienced hires. If capability-based assessment works for campus (where pedigree signal is strongest), it works everywhere.',
            },
          ].map((item) => (
            <div key={item.n} className="flex gap-4 rounded-xl border border-gray-200 p-4">
              <span className="shrink-0 font-mono text-2xl font-extrabold text-gray-200">{item.n}</span>
              <div>
                <p className="text-sm font-bold text-ink">{item.title}</p>
                <p className="text-sm text-ink-light mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">What They&rsquo;d Do Differently</h3>
        <div className="space-y-2">
          {[
            { h: 'Communicate the change to Tier-1 colleges.', b: 'Some Tier-1 colleges felt slighted when the company reduced their campus presence. Better communication about "expanding, not abandoning" would have preserved relationships.' },
            { h: 'Adjust training programs.', b: 'Tier-2/3 hires sometimes needed more support in the first 90 days \u2014 not because they were weaker, but because they had less exposure to corporate environments. Training programs needed calibration.' },
            { h: 'Track longer-term outcomes.', b: 'Twelve-month data was compelling, but 24-month and 36-month data would be even more powerful. They\u2019re now building longitudinal tracking.' },
          ].map((item) => (
            <div key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-orange/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              </span>
              <span className="text-ink-light"><strong className="text-ink">{item.h}</strong> {item.b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">6</span>
          <h2 className="text-2xl font-extrabold text-ink">Testimonials</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              quote: 'We found talent we would have filtered out before we ever looked at them. That\u2019s the real win. Not just cost savings \u2014 finding people we would have missed.',
              author: 'VP, Campus Relations',
            },
            {
              quote: 'I was skeptical that a regional college hire could match an IIT hire. The data proved me wrong. Some of our best performers this year came from colleges I\u2019d never heard of.',
              author: 'Delivery Manager',
            },
            {
              quote: 'As a Tier-2 college student, I never thought I\u2019d get a chance at a company like this. The assessment gave me a fair shot. I\u2019m grateful for that.',
              author: 'Software Engineer, hired from Tier-2 college',
            },
          ].map((t) => (
            <blockquote key={t.author} className="rounded-xl border border-gray-200 bg-paper-off p-5">
              <p className="text-[15px] italic leading-relaxed text-ink-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-semibold not-italic text-ink">&mdash; {t.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── TECHNICAL IMPLEMENTATION ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">7</span>
          <h2 className="text-2xl font-extrabold text-ink">Technical Implementation</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Scale Challenges</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Processing 40,000+ assessments required:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            'Dedicated assessment servers, load balancing',
            'Staggered invitation batches to manage volume',
            'Chatbot + email support for candidate questions',
            'Real-time dashboards for completion tracking',
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#f39c12]/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f39c12]" />
              </span>
              <span className="text-sm text-ink-light">{item}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-4">
          <div className="rounded-xl border border-[#f39c12]/20 bg-[#f39c12]/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#f39c12] mb-3">Configuration</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">Duration:</strong> 60 minutes</li>
              <li><strong className="text-ink">MCQ:</strong> 25% of questions</li>
              <li><strong className="text-ink">Short answer:</strong> 35%</li>
              <li><strong className="text-ink">Scenario response:</strong> 40%</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">Proctoring &amp; Access</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">Proctoring:</strong> Light (browser lockdown)</li>
              <li><strong className="text-ink">Camera:</strong> Not required</li>
              <li><strong className="text-ink">Accessibility:</strong> Screen reader compatible</li>
              <li><strong className="text-ink">Accommodations:</strong> Extra time options</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-orange mb-3">Integration</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">ATS:</strong> Internal campus portal</li>
              <li><strong className="text-ink">Bulk ops:</strong> CSV upload/download</li>
              <li><strong className="text-ink">Reporting:</strong> College-wise analytics</li>
              <li><strong className="text-ink">Dashboards:</strong> Region-wise views</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── ROI SUMMARY ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">8</span>
          <h2 className="text-2xl font-extrabold text-ink">ROI Summary</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <div className="rounded-xl border border-brand-red/25 overflow-hidden">
            <div className="bg-brand-red/5 border-b border-brand-red/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-red uppercase tracking-wide">Investment</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {[
                    { item: 'LayersRank enterprise license', cost: '\u20B945,00,000' },
                    { item: 'Implementation & customization', cost: '\u20B912,00,000' },
                    { item: 'Internal team training', cost: '\u20B93,00,000' },
                  ].map((row) => (
                    <tr key={row.item} className="hover:bg-paper-off">
                      <td className="px-5 py-2.5 text-ink-light">{row.item}</td>
                      <td className="px-5 py-2.5 text-right font-mono text-ink">{row.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-red/5 font-bold">
                    <td className="px-5 py-2.5 text-ink">Total</td>
                    <td className="px-5 py-2.5 text-right font-mono text-brand-red">&#8377;60,00,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-brand-green/25 overflow-hidden">
            <div className="bg-brand-green/5 border-b border-brand-green/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-green uppercase tracking-wide">Returns (Annual)</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {[
                    { item: 'Salary savings (3,800 hires)', value: '\u20B97,98,00,000' },
                    { item: 'Attrition reduction (300 fewer)', value: '\u20B91,20,00,000' },
                    { item: 'Campus visit reduction', value: '\u20B945,00,000' },
                    { item: 'Interviewer time savings', value: '\u20B930,00,000' },
                  ].map((row) => (
                    <tr key={row.item} className="hover:bg-paper-off">
                      <td className="px-5 py-2.5 text-ink-light">{row.item}</td>
                      <td className="px-5 py-2.5 text-right font-mono text-ink">{row.value}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-green/5 font-bold">
                    <td className="px-5 py-2.5 text-ink">Total Annual Value</td>
                    <td className="px-5 py-2.5 text-right font-mono text-brand-green">&#8377;9,93,00,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-ink p-6 text-white text-center">
          <p className="text-sm text-white/60 uppercase tracking-widest font-semibold mb-2">Annual ROI</p>
          <p className="font-mono text-4xl font-extrabold">1,555%</p>
          <p className="mt-2 text-sm text-white/70">Payback period: &lt; 1 month</p>
        </div>
      </section>

      {/* ── THE BIGGER PICTURE ── */}
      <section className="mb-16">
        <div className="rounded-2xl border-2 border-[#f39c12]/30 bg-gradient-to-br from-[#f39c12]/5 to-transparent p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f39c12] mb-4">The Bigger Picture</p>
          <p className="text-[15px] leading-relaxed text-ink-light mb-3">
            This case study isn&rsquo;t just about one company&rsquo;s campus hiring. It&rsquo;s about a broken assumption in Indian hiring.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-light mb-3">
            <strong className="text-ink">The assumption:</strong> College pedigree is the best available proxy for capability.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-light mb-3">
            <strong className="text-ink">The reality:</strong> College pedigree is a convenient filter that excludes most qualified candidates while providing weak predictive signal.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-light mb-3">
            When you measure actual capability &mdash; through structured, identity-blind assessment &mdash; you find strong candidates everywhere. The talent isn&rsquo;t concentrated in 50 colleges. It&rsquo;s distributed across 5,000.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-light mb-3">
            The companies that figure this out first will have access to talent their competitors ignore. They&rsquo;ll build more diverse teams. They&rsquo;ll spend less on salaries. They&rsquo;ll see lower attrition.
          </p>
          <p className="text-[15px] leading-relaxed text-ink font-bold">
            The pedigree era is ending. The capability era is beginning.
          </p>
        </div>
      </section>

      {/* ── RELATED RESOURCES ── */}
      <section className="mb-16">
        <h3 className="text-base font-bold text-ink mb-4">Related Resources</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: '/resources/whitepapers/pedigree-bias-hiring-whitepaper', label: 'Pedigree Bias in Indian Hiring', desc: 'IIT/NIT filtering excludes 99% of engineering graduates' },
            { href: '/resources/case-studies/fortune-500-gcc-panel-disagreement', label: '76% Reduction in Panel Disagreement', desc: 'How a Fortune 500 GCC cut panel variance' },
            { href: '/solutions/campus-hiring', label: 'Campus Hiring Solutions', desc: 'How LayersRank serves campus recruitment at scale' },
            { href: '/resources/sample-report', label: 'Sample Report', desc: 'See a real candidate evaluation report' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
            >
              <p className="font-semibold text-ink text-sm">{link.label}</p>
              <p className="mt-1 text-xs text-ink-muted">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-xs text-ink-muted italic mb-4">
          This case study is based on a real LayersRank deployment at a large IT services company in India. Metrics are actual client data.
          Company name and identifying details withheld at client request.
        </p>
        <p className="text-sm text-ink-muted text-center">
          For questions about this case study or to discuss campus hiring at scale, contact{' '}
          <a href="mailto:info@the-algo.com" className="font-medium text-[#f39c12] hover:underline">
            info@the-algo.com
          </a>
        </p>
        <p className="mt-3 text-xs text-ink-muted text-center">&copy; 2025 LayersRank by The Algorithm. All rights reserved.</p>
      </div>
    </>
  );
}
