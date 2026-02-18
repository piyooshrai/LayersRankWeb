import Link from 'next/link';

export default function CaseStudy() {
  return (
    <>
      {/* ── TITLE PAGE ── */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-full bg-[#3b82f6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
            Case Study
          </span>
          <span className="inline-flex items-center rounded-full bg-[#3b82f6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
            Enterprise / GCC
          </span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-tight">
          76% Reduction in<br />
          <span className="text-[#3b82f6]">Panel Disagreement</span>
        </h1>
        <p className="mt-4 text-xl text-ink-light max-w-2xl">
          How a Fortune 500 GCC in Bangalore transformed hiring consistency, cut HQ approval from 11 days to 2.5, and saved an estimated &#8377;4.19 crore annually.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { label: 'Company', value: 'Fortune 500 GCC' },
            { label: 'Location', value: 'Bangalore, India' },
            { label: 'Engineers', value: '2,400' },
            { label: 'Annual Hiring', value: '400\u2013500' },
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
        <div className="rounded-2xl border border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/5 to-transparent p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-4">Company Profile</p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: 'Type', value: 'Global Capability Center (GCC)' },
                  { label: 'Parent', value: 'Fortune 500 Technology Company' },
                  { label: 'Location', value: 'Bangalore, India' },
                  { label: 'India Headcount', value: '2,400 engineers' },
                  { label: 'Annual Hiring', value: '400\u2013500 engineers' },
                  { label: 'Roles', value: 'Backend, Frontend, Data, DevOps, QA' },
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

        <h3 className="text-base font-bold text-ink mb-3">Inconsistent Panels, Frustrated Leadership</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          The GCC had a problem they couldn&rsquo;t see until they measured it.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          Interview panels were reaching different conclusions about the same candidates. Panel A would recommend
          <strong className="text-ink"> &ldquo;Strong Hire.&rdquo;</strong> Panel B would say <strong className="text-ink">&ldquo;Pass.&rdquo;</strong> For
          the same person, answering similar questions, on the same day.
        </p>

        <div className="rounded-2xl border-2 border-brand-red/30 bg-brand-red/5 p-6 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">The Discovery</p>
          <p className="text-[15px] leading-relaxed text-ink-light">
            During a calibration exercise, the Head of Engineering had two panels independently evaluate 20 candidates.
            The panels <strong className="text-ink">disagreed on 23% of them</strong> &mdash; not borderline cases, but outright contradictions.
          </p>
        </div>

        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-6">
          <p className="text-sm italic text-ink-light">
            &ldquo;We thought we had a rigorous process. We had{' '}
            <Link href="/resources/whitepapers/structured-interviews-whitepaper" className="text-[#3b82f6] hover:underline">structured interviews</Link>,
            we had rubrics. But when we actually measured agreement, we realized our &lsquo;structure&rsquo; was more theater than substance.&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; Head of Talent Acquisition</p>
        </div>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">The HQ Problem</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          Disagreement created a downstream problem: US headquarters questioned every recommendation.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          The approval workflow required HQ sign-off on senior hires. With inconsistent panel signals, HQ couldn&rsquo;t trust
          the recommendations. They&rsquo;d ask for additional interviews, references, or documentation &mdash; adding 8&ndash;11 days to every senior hire.
        </p>

        <div className="rounded-xl border-l-4 border-brand-red bg-brand-red/5 p-5 mb-8">
          <p className="font-mono text-lg font-extrabold text-ink text-center">
            Average time from panel recommendation to HQ approval: <span className="text-brand-red">11 days</span>
          </p>
        </div>

        <p className="text-[15px] leading-relaxed text-ink-light mb-6">
          This delay cost them candidates. Top engineers had multiple offers with 1&ndash;2 week deadlines. By the time HQ approved,
          candidates had accepted elsewhere.
        </p>

        <h3 className="text-base font-bold text-ink mb-3">The Metrics Before LayersRank</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Metric</th>
                <th className="text-right px-5 py-2.5 font-semibold text-brand-red text-xs uppercase tracking-wide">Baseline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { metric: 'Panel disagreement rate', value: '23%' },
                { metric: 'HQ approval cycle', value: '11 days' },
                { metric: 'Offer dropout rate', value: '22%' },
                { metric: 'Time to first offer', value: '24 days' },
                { metric: 'Interviewer hours per hire', value: '18 hours' },
              ].map((row) => (
                <tr key={row.metric} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-2.5 text-ink">{row.metric}</td>
                  <td className="px-5 py-2.5 text-right font-mono font-bold text-brand-red">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">2</span>
          <h2 className="text-2xl font-extrabold text-ink">The Solution</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Why LayersRank</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">The GCC evaluated several options:</p>

        <div className="space-y-4 mb-8">
          {[
            {
              opt: 'Option 1',
              title: 'More calibration sessions',
              desc: 'They tried monthly calibration meetings. Attendance dropped. Impact was minimal. Interviewers nodded along, then went back to their habits.',
              verdict: 'rejected',
            },
            {
              opt: 'Option 2',
              title: 'Stricter rubric enforcement',
              desc: 'They rewrote rubrics, required detailed notes, audited submissions. Quality improved slightly, but variance remained high. The problem wasn\u2019t the rubrics \u2014 it was human application.',
              verdict: 'rejected',
            },
            {
              opt: 'Option 3',
              title: 'AI-assisted first round',
              desc: 'LayersRank offered consistent evaluation by design. Same questions, same criteria, same AI models for every candidate. Human judgment preserved for final rounds.',
              verdict: 'selected',
            },
          ].map((item) => (
            <div key={item.opt} className={`rounded-xl border ${item.verdict === 'selected' ? 'border-2 border-brand-green/40 bg-brand-green/5' : 'border-gray-200 bg-paper-off'} overflow-hidden`}>
              <div className={`border-b ${item.verdict === 'selected' ? 'border-brand-green/20 bg-brand-green/10' : 'border-gray-200 bg-white'} px-5 py-3 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <span className={`rounded-lg px-2 py-0.5 font-mono text-xs font-bold ${item.verdict === 'selected' ? 'bg-brand-green/20 text-brand-green' : 'bg-gray-200 text-ink-muted'}`}>{item.opt}</span>
                  <h4 className="font-bold text-ink">{item.title}</h4>
                </div>
                {item.verdict === 'selected' && (
                  <span className="rounded-full bg-brand-green px-3 py-0.5 text-xs font-bold text-white">Selected</span>
                )}
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-ink-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Implementation</h3>
        <div className="relative pl-6 border-l-2 border-gray-200 space-y-6 mb-8">
          {[
            {
              phase: 'Week 1\u20132',
              title: 'Setup',
              items: [
                'Configured role templates for 5 engineering roles',
                'Customized questions based on existing interview guides',
                'Integrated with existing ATS (Greenhouse)',
                'Trained recruiting team on new workflow',
              ],
            },
            {
              phase: 'Week 3\u20134',
              title: 'Parallel Run',
              items: [
                'Ran LayersRank assessments alongside traditional process',
                'Compared AI scores to panel decisions',
                'Calibrated thresholds based on correlation',
              ],
            },
            {
              phase: 'Week 5+',
              title: 'Full Deployment',
              items: [
                'LayersRank became the first-round screen for all engineering roles',
                'Traditional panels moved to final round only',
                'Reports shared with HQ for transparency',
              ],
            },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex h-4 w-4 items-center justify-center rounded-full bg-[#3b82f6] ring-4 ring-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#3b82f6]">{step.phase}</span>
                  <span className="text-xs text-ink-muted">&middot;</span>
                  <span className="font-bold text-ink text-sm">{step.title}</span>
                </div>
                <ul className="space-y-1.5">
                  {step.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-ink-light">
                      <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The New Process</h3>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="rounded-xl border border-brand-red/25 overflow-hidden">
            <div className="bg-brand-red/5 border-b border-brand-red/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-red uppercase tracking-wide">Before</p>
            </div>
            <div className="px-5 py-4 space-y-2 text-sm">
              {[
                { step: 'Resume Screen', detail: 'Recruiter' },
                { step: 'Phone Screen', detail: '45 min' },
                { step: 'Technical Round 1', detail: '60 min' },
                { step: 'Technical Round 2', detail: '60 min' },
                { step: 'Hiring Manager Round', detail: '45 min' },
                { step: 'HQ Approval', detail: '11 days' },
                { step: 'Offer', detail: '' },
              ].map((row) => (
                <div key={row.step} className="flex items-center justify-between rounded-lg bg-paper-off px-3 py-1.5">
                  <span className="text-ink">{row.step}</span>
                  {row.detail && <span className="font-mono text-xs text-ink-muted">{row.detail}</span>}
                </div>
              ))}
              <div className="border-t border-brand-red/20 pt-2 mt-2 flex justify-between text-xs font-semibold text-brand-red">
                <span>Total interviewer time: 18 hrs</span>
                <span>Total elapsed: 24 days</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-brand-green/25 overflow-hidden">
            <div className="bg-brand-green/5 border-b border-brand-green/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-green uppercase tracking-wide">After</p>
            </div>
            <div className="px-5 py-4 space-y-2 text-sm">
              {[
                { step: 'Resume Screen', detail: 'Recruiter' },
                { step: 'LayersRank Assessment', detail: 'Async' },
                { step: 'Report Review', detail: '10 min' },
                { step: 'Technical Deep-Dive', detail: '60 min' },
                { step: 'Hiring Manager Round', detail: '45 min' },
                { step: 'HQ Approval', detail: '2.5 days' },
                { step: 'Offer', detail: '' },
              ].map((row) => (
                <div key={row.step} className="flex items-center justify-between rounded-lg bg-paper-off px-3 py-1.5">
                  <span className="text-ink">{row.step}</span>
                  {row.detail && <span className="font-mono text-xs text-ink-muted">{row.detail}</span>}
                </div>
              ))}
              <div className="border-t border-brand-green/20 pt-2 mt-2 flex justify-between text-xs font-semibold text-brand-green">
                <span>Total interviewer time: 8 hrs</span>
                <span>Total elapsed: 12 days</span>
              </div>
            </div>
          </div>
        </div>
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
            { metric: 'Panel Disagreement', before: '23%', after: '5.5%', delta: '-76%' },
            { metric: 'HQ Approval Cycle', before: '11 days', after: '2.5 days', delta: '-77%' },
            { metric: 'Offer Dropout', before: '22%', after: '12%', delta: '-46%' },
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

        <h3 className="text-base font-bold text-ink mb-3">Panel Disagreement: 23% &rarr; 5.5%</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          LayersRank assessments produced consistent signals. When two reviewers independently evaluated the same LayersRank report,
          they <strong className="text-ink">agreed 94.5% of the time</strong>.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          The remaining 5.5% disagreement occurred on genuinely borderline candidates &mdash; cases where the assessment itself flagged
          uncertainty (high Refusal degree in the{' '}
          <Link href="/resources/whitepapers/tr-q-rofns-hiring-whitepaper" className="text-[#3b82f6] hover:underline">TR-q-ROFN framework</Link>).
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            'Same questions for every candidate',
            'AI evaluation applies identical criteria',
            'Confidence scoring flags ambiguous cases',
            'Human reviewers evaluate the same evidence',
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              </span>
              <span className="text-sm text-ink-light">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">HQ Approval: 11 days &rarr; 2.5 days</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          With consistent, documented assessments, HQ had what they needed to approve quickly.
        </p>
        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-4">
          <p className="text-sm italic text-ink-light">
            &ldquo;The LayersRank reports gave us something we never had before &mdash; actual evidence. I could see exactly what
            questions were asked, how the candidate responded, and why the score was what it was. I didn&rsquo;t need to second-guess anymore.&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; VP of Engineering (US HQ)</p>
        </div>
        <p className="text-[15px] leading-relaxed text-ink-light mb-8">
          The approval workflow went from &ldquo;justify your recommendation&rdquo; to &ldquo;confirm the recommendation matches the report.&rdquo;
        </p>

        <h3 className="text-base font-bold text-ink mb-3">Offer Dropout: 22% &rarr; 12%</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          Faster process meant fewer lost candidates.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          The 10-percentage-point improvement in offer acceptance translated to roughly <strong className="text-ink">40 additional hires per year</strong> that
          would have otherwise gone to competitors.
        </p>
        <div className="rounded-xl border-l-4 border-brand-green bg-brand-green/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            <strong className="text-ink">Estimated value:</strong> 40 saved hires &times; &#8377;8 lakh average replacement cost ={' '}
            <span className="font-mono font-bold text-brand-green">&#8377;3.2 crore annually</span>
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Full Results Summary</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
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
                { metric: 'Panel disagreement', before: '23%', after: '5.5%', change: '-76%' },
                { metric: 'HQ approval cycle', before: '11 days', after: '2.5 days', change: '-77%' },
                { metric: 'Offer dropout rate', before: '22%', after: '12%', change: '-46%' },
                { metric: 'Time to first offer', before: '24 days', after: '12 days', change: '-50%' },
                { metric: 'Interviewer hours/hire', before: '18 hours', after: '8 hours', change: '-56%' },
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
      </section>

      {/* ── KEY LEARNINGS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">4</span>
          <h2 className="text-2xl font-extrabold text-ink">Key Learnings</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">What Worked</h3>
        <div className="space-y-3 mb-8">
          {[
            {
              n: '1',
              title: 'Starting with measurement.',
              desc: 'The calibration exercise that revealed 23% disagreement was the catalyst. Without data showing the problem, there was no urgency to change.',
              quote: '\u201cIf you think your process is consistent, measure it. You might be surprised.\u201d',
            },
            {
              n: '2',
              title: 'Parallel run before full deployment.',
              desc: 'Running both processes simultaneously for 2 weeks built confidence. The team could see LayersRank assessments correlating with (and often predicting) panel decisions.',
              quote: null,
            },
            {
              n: '3',
              title: 'Using AI reports to support human decisions, not replace them.',
              desc: 'Final decisions remained with human hiring managers. LayersRank provided evidence; humans provided judgment. This framing reduced resistance.',
              quote: null,
            },
            {
              n: '4',
              title: 'Sharing reports with HQ.',
              desc: 'Transparency built trust. HQ could see exactly what India was evaluating and how. The \u201cblack box\u201d concern disappeared.',
              quote: null,
            },
          ].map((item) => (
            <div key={item.n} className="flex gap-4 rounded-xl border border-gray-200 p-4">
              <span className="shrink-0 font-mono text-2xl font-extrabold text-gray-200">{item.n}</span>
              <div>
                <p className="text-sm font-bold text-ink">{item.title}</p>
                <p className="text-sm text-ink-light mt-0.5">{item.desc}</p>
                {item.quote && (
                  <p className="mt-2 text-sm italic text-ink-light border-l-2 border-brand-yellow pl-3">{item.quote}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">What They&rsquo;d Do Differently</h3>
        <div className="space-y-2">
          {[
            { h: 'Involve hiring managers earlier.', b: 'Initial rollout focused on recruiting operations. Some hiring managers felt the change was imposed. Earlier involvement would have built more buy-in.' },
            { h: 'Customize questions more aggressively.', b: 'They started with LayersRank\u2019s standard question bank. Over time, they found that adding company-specific scenarios improved signal. They wish they\u2019d done this from day one.' },
            { h: 'Track post-hire performance sooner.', b: 'They began correlating LayersRank scores with performance reviews after 12 months. Earlier tracking (6-month check-ins) would have provided faster feedback for calibration.' },
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
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">5</span>
          <h2 className="text-2xl font-extrabold text-ink">Testimonials</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              quote: 'For the first time, we can show HQ exactly why we recommend a candidate. The data speaks for itself.',
              author: 'Head of Talent Acquisition',
            },
            {
              quote: 'I used to spend half my week in interviews. Now I spend a few hours reviewing reports and doing final rounds with pre-qualified candidates. My team gets more of my time for actual engineering work.',
              author: 'Engineering Manager',
            },
            {
              quote: 'The consistency is what sold me. I know that a 78 from LayersRank means the same thing whether it\u2019s Monday morning or Friday afternoon, whether it\u2019s our Bangalore panel or Hyderabad panel.',
              author: 'VP of Engineering (US HQ)',
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
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">6</span>
          <h2 className="text-2xl font-extrabold text-ink">Technical Implementation</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <div className="rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#3b82f6] mb-3">Integration</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">ATS:</strong> Greenhouse (bi-directional)</li>
              <li><strong className="text-ink">Delivery:</strong> Email invitation</li>
              <li><strong className="text-ink">Reports:</strong> Embedded in ATS profile</li>
              <li><strong className="text-ink">Data:</strong> India (Mumbai region)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">Configuration</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">Roles:</strong> 5 engineering roles</li>
              <li><strong className="text-ink">Questions:</strong> 8&ndash;10 per assessment</li>
              <li><strong className="text-ink">Duration:</strong> 45&ndash;60 min (self-paced)</li>
              <li><strong className="text-ink">Threshold:</strong> 65+ advances</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-orange mb-3">Adoption (Year 1)</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">Completed:</strong> 2,847 assessments</li>
              <li><strong className="text-ink">Completion rate:</strong> 89%</li>
              <li><strong className="text-ink">Avg time:</strong> 52 minutes</li>
              <li><strong className="text-ink">Candidate NPS:</strong> +42</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── ROI SUMMARY ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">7</span>
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
                    { item: 'LayersRank subscription', cost: '\u20B918,00,000' },
                    { item: 'Implementation support', cost: '\u20B92,00,000 (one-time)' },
                    { item: 'Internal training time', cost: '\u20B91,50,000' },
                  ].map((row) => (
                    <tr key={row.item} className="hover:bg-paper-off">
                      <td className="px-5 py-2.5 text-ink-light">{row.item}</td>
                      <td className="px-5 py-2.5 text-right font-mono text-ink">{row.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-red/5 font-bold">
                    <td className="px-5 py-2.5 text-ink">Total Year 1</td>
                    <td className="px-5 py-2.5 text-right font-mono text-brand-red">&#8377;21,50,000</td>
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
                    { item: 'Interviewer time saved', value: '\u20B954,00,000' },
                    { item: 'Reduced offer dropout', value: '\u20B93,20,00,000' },
                    { item: 'Faster time-to-fill', value: '\u20B945,00,000' },
                  ].map((row) => (
                    <tr key={row.item} className="hover:bg-paper-off">
                      <td className="px-5 py-2.5 text-ink-light">{row.item}</td>
                      <td className="px-5 py-2.5 text-right font-mono text-ink">{row.value}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-green/5 font-bold">
                    <td className="px-5 py-2.5 text-ink">Total Annual Value</td>
                    <td className="px-5 py-2.5 text-right font-mono text-brand-green">&#8377;4,19,00,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-ink p-6 text-white text-center">
          <p className="text-sm text-white/60 uppercase tracking-widest font-semibold mb-2">Year 1 ROI</p>
          <p className="font-mono text-4xl font-extrabold">1,848%</p>
          <p className="mt-2 text-sm text-white/70">Payback period: &lt; 1 month</p>
        </div>
      </section>

      {/* ── RELATED RESOURCES ── */}
      <section className="mb-16">
        <h3 className="text-base font-bold text-ink mb-4">Related Resources</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: '/resources/whitepapers/tr-q-rofns-hiring-whitepaper', label: 'The Science Behind Confidence Scoring', desc: 'How TR-q-ROFNs quantify evaluation confidence' },
            { href: '/resources/whitepapers/structured-interviews-whitepaper', label: 'Structured vs. Unstructured Interviews', desc: 'The research evidence for structured hiring' },
            { href: '/solutions/gcc', label: 'GCC Solutions', desc: 'How LayersRank serves global capability centers' },
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
          This case study is based on a real LayersRank deployment at a Fortune 500 GCC in Bangalore. Metrics are actual client data.
          Company name and identifying details withheld at client request.
        </p>
        <p className="text-sm text-ink-muted text-center">
          For questions about this case study or to discuss how LayersRank could help your organization, contact{' '}
          <a href="mailto:sales@layersrank.com" className="font-medium text-[#3b82f6] hover:underline">
            sales@layersrank.com
          </a>
        </p>
        <p className="mt-3 text-xs text-ink-muted text-center">&copy; 2025 LayersRank by The Algorithm. All rights reserved.</p>
      </div>
    </>
  );
}
