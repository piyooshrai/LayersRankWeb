import Link from 'next/link';

export default function CaseStudyFintech() {
  return (
    <>
      {/* ── TITLE PAGE ── */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-full bg-[#2ecc71]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2ecc71]">
            Case Study
          </span>
          <span className="inline-flex items-center rounded-full bg-[#2ecc71]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2ecc71]">
            Startup
          </span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-tight">
          First Offer in<br />
          <span className="text-[#2ecc71]">5 Days</span>
        </h1>
        <p className="mt-4 text-xl text-ink-light max-w-2xl">
          How a Series B fintech startup in Bangalore cut time-to-offer from 21 days to 5, freed founders from 15 hours/week of screening, and raised offer acceptance to 82%.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { label: 'Company', value: 'Series B Fintech' },
            { label: 'Location', value: 'Bangalore, India' },
            { label: 'Engineers', value: '42' },
            { label: 'Annual Hiring', value: '30\u201340' },
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
        <div className="rounded-2xl border border-[#2ecc71]/20 bg-gradient-to-br from-[#2ecc71]/5 to-transparent p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2ecc71] mb-4">Company Profile</p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: 'Type', value: 'Fintech Startup' },
                  { label: 'Stage', value: 'Series B (\u20B928M raised)' },
                  { label: 'Location', value: 'Bangalore, India' },
                  { label: 'Headcount', value: '85 employees' },
                  { label: 'Engineering Team', value: '42 engineers' },
                  { label: 'Annual Hiring Goal', value: '30\u201340 engineers' },
                  { label: 'Roles', value: 'Full-Stack, Backend, Mobile, Data' },
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

        <h3 className="text-base font-bold text-ink mb-3">Speed Kills (When You Don&rsquo;t Have It)</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          The startup was growing fast. Series B closed, runway extended, hiring plan approved. They needed to double the engineering team in 12 months.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          There was one problem: they kept losing candidates.
        </p>

        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-6">
          <p className="text-sm italic text-ink-light">
            &ldquo;We&rsquo;d find someone great, run them through our process, and by the time we made an offer, they&rsquo;d already accepted somewhere else. We were always a week too late.&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; CTO</p>
        </div>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">The Old Process</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Their interview process was thorough &mdash; maybe too thorough:
        </p>

        <div className="rounded-xl border border-brand-red/25 overflow-hidden mb-6">
          <div className="bg-brand-red/5 border-b border-brand-red/20 px-5 py-3">
            <p className="text-xs font-bold text-brand-red uppercase tracking-wide">Old Process &mdash; 21 Days</p>
          </div>
          <div className="px-5 py-4 space-y-2 text-sm">
            {[
              { step: 'Week 1: Application', detail: 'Resume review \u2192 Recruiter screen (30 min)' },
              { step: 'Week 2: Technical phone screen', detail: '60 min \u2192 Take-home assignment' },
              { step: 'Week 3: On-site', detail: 'Technical deep-dive (90 min) + System design (60 min)' },
              { step: 'Week 4: Founder chat', detail: '45 min \u2192 References \u2192 Offer' },
            ].map((row) => (
              <div key={row.step} className="flex items-center justify-between rounded-lg bg-paper-off px-3 py-1.5">
                <span className="text-ink font-medium">{row.step}</span>
                <span className="font-mono text-xs text-ink-muted">{row.detail}</span>
              </div>
            ))}
            <div className="border-t border-brand-red/20 pt-2 mt-2 text-center text-xs font-semibold text-brand-red">
              Average time from application to offer: 21 days
            </div>
          </div>
        </div>

        <div className="rounded-xl border-l-4 border-brand-red bg-brand-red/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            In a market where top candidates have 3&ndash;5 active offers, <strong className="text-ink">21 days is a lifetime.</strong>
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The Founder Bottleneck</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          The founders insisted on meeting every engineering hire. With two founders and 40 hiring interviews per quarter, calendar availability became the rate limiter.
        </p>

        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-6">
          <p className="text-sm italic text-ink-light">
            &ldquo;I believe in founder involvement in hiring. But I was spending 15 hours a week on screening calls and first-round interviews. That&rsquo;s not sustainable.&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; CEO</p>
        </div>

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
                { metric: 'Time to first offer', value: '21 days' },
                { metric: 'Founder hours on hiring/week', value: '15 hours' },
                { metric: 'Offer acceptance rate', value: '65%' },
                { metric: 'Candidates lost to faster competitors', value: '~40%' },
                { metric: 'Recruiter capacity', value: '8 hires/quarter' },
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

        <h3 className="text-base font-bold text-ink mb-3">The Insight</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          The CTO realized something: most of those 21 days weren&rsquo;t evaluation time. They were <strong className="text-ink">waiting time.</strong>
        </p>

        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          {[
            'Waiting for interviewer availability',
            'Waiting for candidates to complete take-homes',
            'Waiting for founder calendars to align',
            'Waiting for references to respond',
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-red/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <span className="text-sm text-ink-light">{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl border-l-4 border-[#2ecc71] bg-[#2ecc71]/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            Actual evaluation took maybe <strong className="text-ink">4&ndash;5 hours</strong> spread across 3 weeks. The rest was scheduling overhead.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Why LayersRank</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">LayersRank offered a way to front-load evaluation without calendar dependencies:</p>

        <div className="space-y-3 mb-8">
          {[
            { n: '1', title: 'Async assessment', desc: 'Candidates complete on their own time, no scheduling.' },
            { n: '2', title: 'AI first-round', desc: 'No interviewer bottleneck for screening.' },
            { n: '3', title: 'Comprehensive reports', desc: 'Founders review reports instead of conducting screens.' },
            { n: '4', title: 'Faster signal', desc: 'Know within 48 hours if someone is worth pursuing.' },
          ].map((item) => (
            <div key={item.n} className="flex gap-4 rounded-xl border border-gray-200 p-4">
              <span className="shrink-0 font-mono text-2xl font-extrabold text-[#2ecc71]">{item.n}</span>
              <div>
                <p className="text-sm font-bold text-ink">{item.title}</p>
                <p className="text-sm text-ink-light mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-8">
          <p className="text-sm italic text-ink-light">
            &ldquo;The pitch that sold me was simple: What if you could know, within 2 days of application, whether this person is likely to get an offer? You&rsquo;d move heaven and earth to close them fast.&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; CTO</p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The New Process</h3>
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <div className="rounded-xl border border-brand-red/25 overflow-hidden">
            <div className="bg-brand-red/5 border-b border-brand-red/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-red uppercase tracking-wide">Before &mdash; 21 Days</p>
            </div>
            <div className="px-5 py-4 space-y-2 text-sm">
              {[
                { step: 'Recruiter screen', detail: '30 min' },
                { step: 'Technical phone screen', detail: '60 min' },
                { step: 'Take-home assignment', detail: 'Days' },
                { step: 'On-site technical deep-dive', detail: '90 min' },
                { step: 'System design', detail: '60 min' },
                { step: 'Founder chat', detail: '45 min' },
                { step: 'Reference checks \u2192 Offer', detail: '' },
              ].map((row) => (
                <div key={row.step} className="flex items-center justify-between rounded-lg bg-paper-off px-3 py-1.5">
                  <span className="text-ink">{row.step}</span>
                  {row.detail && <span className="font-mono text-xs text-ink-muted">{row.detail}</span>}
                </div>
              ))}
              <div className="border-t border-brand-red/20 pt-2 mt-2 text-center text-xs font-semibold text-brand-red">
                Total elapsed: 21 days
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-brand-green/25 overflow-hidden">
            <div className="bg-brand-green/5 border-b border-brand-green/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-green uppercase tracking-wide">After &mdash; 5 Days</p>
            </div>
            <div className="px-5 py-4 space-y-2 text-sm">
              {[
                { step: 'Day 1: Auto-invite to assessment', detail: 'Instant' },
                { step: 'Day 2\u20133: Candidate completes assessment', detail: 'Self-paced' },
                { step: 'Day 3: AI scoring + report', detail: 'Auto' },
                { step: 'Day 4: Founder reviews report', detail: '15 min' },
                { step: 'Day 4\u20135: Deep-dive + Founder chat', detail: '90 min' },
                { step: 'Day 5: Offer', detail: '' },
              ].map((row) => (
                <div key={row.step} className="flex items-center justify-between rounded-lg bg-paper-off px-3 py-1.5">
                  <span className="text-ink">{row.step}</span>
                  {row.detail && <span className="font-mono text-xs text-ink-muted">{row.detail}</span>}
                </div>
              ))}
              <div className="border-t border-brand-green/20 pt-2 mt-2 text-center text-xs font-semibold text-brand-green">
                Total elapsed: 5 days
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">What Changed</h3>
        <div className="space-y-2 mb-8">
          {[
            { h: 'Recruiter screen:', b: 'Eliminated. LayersRank covers it.' },
            { h: 'Technical phone screen:', b: 'Eliminated. LayersRank covers technical evaluation.' },
            { h: 'Take-home:', b: 'Eliminated. Assessment includes technical demonstration.' },
            { h: 'On-site rounds:', b: 'Compressed into single deep-dive for pre-qualified candidates.' },
            { h: 'Founder involvement:', b: 'Shifted from screening to report review + final conversation.' },
          ].map((item) => (
            <div key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              </span>
              <span className="text-ink-light"><strong className="text-ink">{item.h}</strong> {item.b}</span>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">The Bet</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          The founders were skeptical. Could an AI assessment really replace their phone screens?
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          They ran a test: For 20 candidates, they did both &mdash; LayersRank assessment AND traditional founder phone screen. They compared:
        </p>

        <div className="rounded-2xl border-2 border-[#2ecc71]/30 bg-[#2ecc71]/5 p-6 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2ecc71] mb-3">Validation Results</p>
          <div className="space-y-2">
            <p className="text-[15px] leading-relaxed text-ink-light">
              LayersRank recommendation vs. founder recommendation: <strong className="text-ink">85% agreement</strong>
            </p>
            <p className="text-[15px] leading-relaxed text-ink-light">
              For the 15% disagreement, they tracked outcomes: <strong className="text-ink">LayersRank was right more often.</strong>
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-4">
          <p className="text-sm italic text-ink-light">
            &ldquo;That test convinced me. The AI wasn&rsquo;t just as good as my phone screens. It was more consistent. I have bad days. The AI doesn&rsquo;t.&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; CEO</p>
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
            { metric: 'Time to First Offer', before: '21 days', after: '5 days', delta: '-76%' },
            { metric: 'Founder Hours/Week', before: '15 hours', after: '3 hours', delta: '-80%' },
            { metric: 'Offer Acceptance', before: '65%', after: '82%', delta: '+26%' },
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

        <h3 className="text-base font-bold text-ink mb-3">Time to First Offer: 21 days &rarr; 5 days</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          The compression was dramatic. Candidates who applied on Monday could have offers by Friday.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          This changed the competitive dynamic entirely. Instead of being the slow option, they became the fast one.
        </p>
        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-8">
          <p className="text-sm italic text-ink-light">
            &ldquo;Candidates started telling us, &lsquo;You&rsquo;re the first company to make me an offer.&rsquo; That&rsquo;s a huge advantage. The first offer anchors the negotiation.&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; Head of Recruiting</p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Founder Time: 15 hours &rarr; 3 hours/week</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          Founders stopped doing screening calls. They reviewed LayersRank reports (15 min each) and did final conversations only with pre-qualified candidates.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mb-4">
          <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-4">
            <p className="text-xs font-bold text-brand-red uppercase tracking-wide mb-1">Before</p>
            <p className="font-mono text-lg font-extrabold text-ink">15 hours/week</p>
            <p className="text-xs text-ink-muted">Screens + interviews + debriefs</p>
          </div>
          <div className="rounded-lg border border-brand-green/20 bg-brand-green/5 p-4">
            <p className="text-xs font-bold text-brand-green uppercase tracking-wide mb-1">After</p>
            <p className="font-mono text-lg font-extrabold text-ink">3 hours/week</p>
            <p className="text-xs text-ink-muted">Report reviews + final conversations</p>
          </div>
        </div>
        <div className="rounded-xl border-l-4 border-[#2ecc71] bg-[#2ecc71]/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            The CTO got <strong className="text-ink">12 hours per week back</strong> &mdash; time that went into product, architecture, and team leadership.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Offer Acceptance: 65% &rarr; 82%</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          Speed improved acceptance rates. Candidates who received fast offers were more likely to accept.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          But it wasn&rsquo;t just speed. The process itself impressed candidates.
        </p>
        <div className="rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 mb-8">
          <p className="text-sm italic text-ink-light">
            &ldquo;We heard feedback like &lsquo;Your process was so professional&rsquo; and &lsquo;I felt fairly evaluated.&rsquo; The assessment experience was better than our old phone screens.&rdquo;
          </p>
          <p className="mt-2 text-sm font-semibold text-ink">&mdash; Head of Recruiting</p>
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
                { metric: 'Time to first offer', before: '21 days', after: '5 days', change: '-76%' },
                { metric: 'Founder hours/week', before: '15 hours', after: '3 hours', change: '-80%' },
                { metric: 'Offer acceptance rate', before: '65%', after: '82%', change: '+26%' },
                { metric: 'Candidates lost to competitors', before: '~40%', after: '~15%', change: '-63%' },
                { metric: 'Hires per quarter', before: '8', after: '12', change: '+50%' },
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
              title: 'Compressing the timeline ruthlessly.',
              desc: 'Every day in the process was questioned. "Does this add signal? Can we get the same signal faster?" If the answer was no, they cut it.',
            },
            {
              n: '2',
              title: 'Treating founder time as the scarcest resource.',
              desc: 'The insight that founder hours were the bottleneck led to restructuring the entire process around minimizing founder involvement in early stages.',
            },
            {
              n: '3',
              title: 'Using AI reports as a collaboration tool.',
              desc: 'Founders and hiring managers reviewed the same reports, with the same data. Hiring decisions became discussions about evidence, not debates about impressions.',
            },
            {
              n: '4',
              title: 'Measuring candidate experience.',
              desc: 'They surveyed candidates about the assessment experience. Feedback was positive \u2014 candidates appreciated the flexibility and fairness. This validated that speed didn\u2019t sacrifice experience.',
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
            { h: 'Set expectations with candidates upfront.', b: 'Some candidates were surprised by the fast pace. "We\u2019ll make a decision within a week" felt aggressive to candidates used to longer processes. Framing it as "We respect your time" helped.' },
            { h: 'Build a stronger employer brand earlier.', b: 'Fast process helps, but candidates still need to want to work for you. They invested more in content marketing and engineering blog posts to warm up the top of funnel.' },
            { h: 'Extend LayersRank to non-engineering roles.', b: 'They initially used LayersRank only for engineering. Seeing the results, they wished they\u2019d applied the same approach to product, design, and other functions sooner.' },
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

      {/* ── CANDIDATE PERSPECTIVE ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">5</span>
          <h2 className="text-2xl font-extrabold text-ink">The Candidate Perspective</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              quote: 'I applied on Tuesday, did the assessment Wednesday evening, and had an offer by Friday. I\u2019d never experienced anything like it. Most companies take 3\u20134 weeks just to schedule a first call.',
              author: 'Backend Engineer, hired',
            },
            {
              quote: 'The assessment was actually harder than most phone screens I\u2019ve done. But it felt fairer. I could take my time, think through my answers, and demonstrate what I actually know.',
              author: 'Full-Stack Engineer, hired',
            },
            {
              quote: 'I was interviewing at four companies. [This company] was the first to make me an offer \u2014 by over a week. That definitely influenced my decision. Speed signals that they have their act together.',
              author: 'Mobile Engineer, hired',
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
          <div className="rounded-xl border border-[#2ecc71]/20 bg-[#2ecc71]/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#2ecc71] mb-3">Integration</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">ATS:</strong> Lever</li>
              <li><strong className="text-ink">Calendar:</strong> Google Calendar</li>
              <li><strong className="text-ink">Comms:</strong> Slack notifications</li>
              <li><strong className="text-ink">Scheduling:</strong> Calendly (final rounds)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">Configuration</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">Roles:</strong> 4 configured</li>
              <li><strong className="text-ink">Questions:</strong> 9 per assessment</li>
              <li><strong className="text-ink">Duration:</strong> 50&ndash;65 min (self-paced)</li>
              <li><strong className="text-ink">Auto-invite:</strong> On application</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-orange mb-3">Adoption (6 Months)</p>
            <ul className="space-y-1.5 text-sm text-ink-light">
              <li><strong className="text-ink">Sent:</strong> 312 assessments</li>
              <li><strong className="text-ink">Completion rate:</strong> 84%</li>
              <li><strong className="text-ink">Avg time:</strong> 54 minutes</li>
              <li><strong className="text-ink">Satisfaction:</strong> 4.2/5.0</li>
            </ul>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Workflow Automation</h3>
        <div className="relative pl-6 border-l-2 border-gray-200 space-y-6 mb-4">
          {[
            {
              phase: 'Step 1',
              title: 'Application received (Lever)',
              items: ['Auto-trigger LayersRank invitation'],
            },
            {
              phase: 'Step 2',
              title: 'Assessment completed',
              items: ['Report generated', 'Slack notification to hiring manager + founder'],
            },
            {
              phase: 'Step 3',
              title: 'Score-based routing',
              items: [
                'Score \u2265 70: Auto-schedule final round (Calendly)',
                'Score 60\u201369: Manual review, hiring manager decision',
                'Score < 60: Auto-rejection email (personalized)',
              ],
            },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex h-4 w-4 items-center justify-center rounded-full bg-[#2ecc71] ring-4 ring-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#2ecc71]">{step.phase}</span>
                  <span className="text-xs text-ink-muted">&middot;</span>
                  <span className="font-bold text-ink text-sm">{step.title}</span>
                </div>
                <ul className="space-y-1.5">
                  {step.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-ink-light">
                      <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#2ecc71]/20 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2ecc71]" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
                    { item: 'LayersRank subscription (Growth plan)', cost: '\u20B94,80,000' },
                    { item: 'Implementation', cost: '\u20B950,000 (one-time)' },
                  ].map((row) => (
                    <tr key={row.item} className="hover:bg-paper-off">
                      <td className="px-5 py-2.5 text-ink-light">{row.item}</td>
                      <td className="px-5 py-2.5 text-right font-mono text-ink">{row.cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-red/5 font-bold">
                    <td className="px-5 py-2.5 text-ink">Total Year 1</td>
                    <td className="px-5 py-2.5 text-right font-mono text-brand-red">&#8377;5,30,000</td>
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
                    { item: 'Founder time saved', value: '\u20B930,00,000' },
                    { item: 'Additional hires closed', value: '\u20B924,00,000' },
                    { item: 'Faster time-to-productivity', value: '\u20B98,00,000' },
                  ].map((row) => (
                    <tr key={row.item} className="hover:bg-paper-off">
                      <td className="px-5 py-2.5 text-ink-light">{row.item}</td>
                      <td className="px-5 py-2.5 text-right font-mono text-ink">{row.value}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-green/5 font-bold">
                    <td className="px-5 py-2.5 text-ink">Total Annual Value</td>
                    <td className="px-5 py-2.5 text-right font-mono text-brand-green">&#8377;62,00,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-ink p-6 text-white text-center">
          <p className="text-sm text-white/60 uppercase tracking-widest font-semibold mb-2">Year 1 ROI</p>
          <p className="font-mono text-4xl font-extrabold">1,070%</p>
          <p className="mt-2 text-sm text-white/70">Payback period: &lt; 1 month</p>
        </div>
      </section>

      {/* ── FOUNDER PERSPECTIVE ── */}
      <section className="mb-16">
        <div className="rounded-2xl border-2 border-[#2ecc71]/30 bg-gradient-to-br from-[#2ecc71]/5 to-transparent p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2ecc71] mb-4">Founder Perspective</p>
          <blockquote>
            <p className="text-[15px] italic leading-relaxed text-ink-light mb-3">
              &ldquo;We went from losing candidates to being the first offer on their table. That changes everything.
            </p>
            <p className="text-[15px] italic leading-relaxed text-ink-light mb-3">
              When you&rsquo;re competing against Google, Amazon, and well-funded startups for the same talent, you need an edge. For us, that edge is speed. We can&rsquo;t outpay the big companies. But we can out-execute them.
            </p>
            <p className="text-[15px] italic leading-relaxed text-ink-light">
              LayersRank gave us back time AND made us faster. That&rsquo;s rare. Usually you trade one for the other.&rdquo;
            </p>
            <cite className="mt-4 block text-sm font-semibold not-italic text-ink">&mdash; CTO &amp; Co-founder</cite>
          </blockquote>
        </div>
      </section>

      {/* ── RELATED RESOURCES ── */}
      <section className="mb-16">
        <h3 className="text-base font-bold text-ink mb-4">Related Resources</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: '/resources/case-studies/fortune-500-gcc-panel-disagreement', label: '76% Reduction in Panel Disagreement', desc: 'How a Fortune 500 GCC cut panel variance' },
            { href: '/resources/whitepapers/structured-interviews-whitepaper', label: 'Structured vs. Unstructured Interviews', desc: 'The research evidence for structured hiring' },
            { href: '/solutions/startups', label: 'Startup Solutions', desc: 'How LayersRank serves high-growth teams' },
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
          This case study is based on a real LayersRank deployment at a Series B fintech startup in Bangalore. Metrics are actual client data.
          Company name and identifying details withheld at client request.
        </p>
        <p className="text-sm text-ink-muted text-center">
          For questions about this case study or to discuss how LayersRank could help your startup hire faster, contact{' '}
          <a href="mailto:info@the-algo.com" className="font-medium text-[#2ecc71] hover:underline">
            info@the-algo.com
          </a>
        </p>
        <p className="mt-3 text-xs text-ink-muted text-center">&copy; 2025 LayersRank by The Algorithm. All rights reserved.</p>
      </div>
    </>
  );
}
