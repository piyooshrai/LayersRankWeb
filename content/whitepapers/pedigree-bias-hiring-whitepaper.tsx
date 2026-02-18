export default function Whitepaper() {
  return (
    <>
      {/* ── TITLE PAGE ── */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-red">
            Research Whitepaper
          </span>
          <span className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-green">
            v1.0
          </span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-tight">
          Pedigree Bias in<br />
          <span className="text-brand-red">Indian Hiring</span>
        </h1>
        <p className="mt-4 text-xl text-ink-light max-w-2xl">
          The Hidden Cost of College-Based Filtering
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { label: 'Pages', value: '15' },
            { label: 'Audience', value: 'HR & Leadership' },
            { label: 'Domain', value: 'Results & Research' },
            { label: 'Published', value: '2025' },
          ].map((m) => (
            <div key={m.label} className="text-sm">
              <p className="font-semibold text-ink-muted uppercase tracking-wide text-xs">{m.label}</p>
              <p className="mt-0.5 font-semibold text-ink">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABSTRACT ── */}
      <section className="mb-14">
        <div className="rounded-2xl border border-brand-red/20 bg-gradient-to-br from-brand-red/5 to-transparent p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Abstract</p>
          <p className="text-base leading-8 text-ink-light">
            The Indian tech hiring market filters heavily on college pedigree. <strong className="text-ink">&ldquo;IIT/NIT only&rdquo;</strong> policies
            &mdash; explicit or implicit &mdash; exclude over <strong className="text-ink">99% of engineering graduates</strong> before any evaluation
            of actual capability. This paper examines the evidence on what pedigree actually predicts, quantifies the cost of
            pedigree-based filtering, and presents data from LayersRank deployments showing how capability-based assessment
            identifies strong talent that pedigree filtering misses.
          </p>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <nav className="mb-16 rounded-2xl bg-paper-off border border-gray-200 p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-5">Table of Contents</p>
        <ol className="space-y-2">
          {[
            'Executive Summary',
            'The Pedigree Landscape in India',
            'What Pedigree Actually Predicts',
            'The Cost of Pedigree Filtering',
            'Alternative Approaches',
            'LayersRank Data: Beyond Pedigree',
            'Implementation Recommendations',
            'Conclusion',
            'References',
          ].map((item, i) => (
            <li key={i} className="flex items-baseline gap-4 text-sm">
              <span className="shrink-0 font-mono text-xs text-ink-muted w-5">{i + 1}.</span>
              <span className="text-ink-light hover:text-ink transition-colors">{item}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── 1. EXECUTIVE SUMMARY ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">1</span>
          <h2 className="text-2xl font-extrabold text-ink">Executive Summary</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">Key Findings</h3>
        <div className="space-y-3 mb-8">
          {[
            { n: '01', title: 'IIT/NIT graduates represent less than 1% of Indian engineering talent.', desc: 'Filtering to this pool excludes 99%+ of candidates before any evaluation.' },
            { n: '02', title: 'Pedigree correlates with job performance, but weakly.', desc: 'The correlation fades significantly after 2\u20133 years of work experience. For experienced hires, college brand has minimal predictive value.' },
            { n: '03', title: 'Pedigree filtering has significant hidden costs.', desc: 'Higher salary expectations, reduced diversity, smaller talent pools, and missed hires from non-target schools.' },
            { n: '04', title: 'Capability-based assessment identifies strong non-pedigree talent.', desc: 'In LayersRank deployments, 30\u201340% of top-scoring candidates come from colleges that would fail traditional pedigree filters.' },
            { n: '05', title: 'Companies can maintain quality standards while expanding pools.', desc: 'The bar doesn\u2019t need to lower \u2014 it needs to measure the right things.' },
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

        <h3 className="text-base font-bold text-ink mb-3">Recommendations</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Remove or de-emphasize college filters in first-round screening',
            'Evaluate all candidates on demonstrated capability',
            'Use structured assessment to ensure consistent standards',
            'Track outcomes by college tier to validate approach',
          ].map((rec) => (
            <div key={rec} className="flex gap-3 rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              </span>
              <p className="text-sm text-ink-light">{rec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. THE PEDIGREE LANDSCAPE IN INDIA ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">2</span>
          <h2 className="text-2xl font-extrabold text-ink">The Pedigree Landscape in India</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">2.1 The Numbers</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          India produces approximately <strong className="text-ink">1.5 million engineering graduates annually</strong> from:
        </p>

        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Tier</th>
                  <th className="text-left px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Institutions</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Count</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Annual Grads</th>
                  <th className="text-right px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">% Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { tier: 'Tier 1', inst: 'IITs', count: '23', grads: '~16,000', pct: '1.1%' },
                  { tier: 'Tier 1', inst: 'NITs', count: '31', grads: '~20,000', pct: '1.3%' },
                  { tier: 'Tier 1', inst: 'BITS, IIIT, top private', count: '~20', grads: '~15,000', pct: '1.0%' },
                  { tier: 'Tier 2', inst: 'State colleges, mid-private', count: '~500', grads: '~200,000', pct: '13.3%' },
                  { tier: 'Tier 3', inst: 'Regional colleges', count: '~3,000+', grads: '~1,250,000', pct: '83.3%' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-paper-off transition-colors">
                    <td className="px-5 py-2.5 font-medium text-ink">{row.tier}</td>
                    <td className="px-4 py-2.5 text-ink-light">{row.inst}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-ink-muted">{row.count}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-ink">{row.grads}</td>
                    <td className="px-5 py-2.5 text-right font-mono text-ink-muted">{row.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t-2 border-ink bg-ink text-white px-5 py-3 flex items-center justify-between text-sm">
            <div>
              <p className="font-bold">Total Tier 1: ~51,000 graduates <span className="font-normal text-white/70">(3.4%)</span></p>
            </div>
            <div>
              <p className="font-bold">Non-Tier-1: ~1,450,000 <span className="font-normal text-white/70">(96.6%)</span></p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-l-4 border-brand-red bg-brand-red/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            When companies filter to <strong className="text-ink">&ldquo;IIT/NIT only,&rdquo;</strong> they&rsquo;re choosing from{' '}
            <span className="font-mono font-bold text-brand-red">2.4%</span> of the talent pool.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">2.2 How Pedigree Filtering Works</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Pedigree filtering operates at multiple stages:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            { term: 'Explicit filtering', color: 'brand-red', desc: 'ATS rules that reject applications from non-target colleges. Job postings that specify \u201cIIT/NIT preferred.\u201d' },
            { term: 'Implicit filtering', color: 'brand-orange', desc: 'Recruiters sorting resumes by college first. Interview panels unconsciously favoring candidates from familiar schools.' },
            { term: 'Network effects', color: 'brand-yellow', desc: 'Referral programs that over-represent current employee demographics. Campus recruiting that only visits target schools.' },
            { term: 'Resume ordering', color: 'brand-green', desc: 'Candidates from target schools getting more attention, faster responses, and benefit of the doubt in marginal cases.' },
          ].map((item) => (
            <div key={item.term} className={`rounded-xl border border-${item.color}/20 bg-${item.color}/5 p-4`}>
              <p className={`text-sm font-bold text-${item.color} mb-1`}>{item.term}</p>
              <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">2.3 Why Companies Filter on Pedigree</h3>
        <div className="space-y-3">
          {[
            { arg: 'Efficiency', quote: 'Reviewing 100,000 applications is impossible. College acts as a pre-filter.' },
            { arg: 'Quality', quote: 'IIT admission is competitive. Competitive admission predicts capability.' },
            { arg: 'Risk', quote: 'We know IIT graduates. They\u2019re a known quantity.' },
            { arg: 'Network', quote: 'Our IIT employees refer other IIT candidates. The network is self-reinforcing.' },
          ].map((item) => (
            <div key={item.arg} className="flex gap-4 rounded-xl border border-gray-200 bg-paper-off p-4">
              <span className="shrink-0 rounded-lg bg-ink/10 px-2.5 py-1 font-mono text-xs font-bold text-ink">{item.arg}</span>
              <p className="text-sm text-ink-light italic">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
          Each argument has validity &mdash; and significant flaws, which we examine in Section 3.
        </p>
      </section>

      {/* ── 3. WHAT PEDIGREE ACTUALLY PREDICTS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">3</span>
          <h2 className="text-2xl font-extrabold text-ink">What Pedigree Actually Predicts</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.1 The Research on College and Job Performance</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Meta-analyses of education credentials and job performance show:
        </p>

        <div className="space-y-3 mb-6">
          {[
            { metric: 'Education level \u2192 job performance', r: '0.10', cite: 'Schmidt & Hunter, 1998', color: 'brand-red' },
            { metric: 'College grades \u2192 job performance', r: '0.16', cite: 'Roth et al., 1996', color: 'brand-orange' },
            { metric: 'College prestige \u2192 job performance', r: '0.09\u20130.12', cite: 'various studies', color: 'brand-red' },
          ].map((item) => (
            <div key={item.metric} className={`flex items-center justify-between rounded-xl border border-${item.color}/20 bg-${item.color}/5 p-4`}>
              <div>
                <p className="text-sm font-medium text-ink">{item.metric}</p>
                <p className="text-xs text-ink-muted mt-0.5">{item.cite}</p>
              </div>
              <span className={`font-mono text-lg font-extrabold text-${item.color}`}>r = {item.r}</span>
            </div>
          ))}
        </div>

        <p className="text-[15px] leading-relaxed text-ink-light mb-3">For context:</p>
        <div className="grid gap-3 sm:grid-cols-3 mb-6">
          {[
            { label: 'College prestige', r: '0.09\u20130.12', sub: '~1% of variance explained', color: 'brand-red' },
            { label: 'Structured interviews', r: '0.38\u20130.51', sub: 'Industry standard', color: 'brand-green' },
            { label: 'Work sample tests', r: '0.54', sub: 'Best single predictor', color: 'brand-green' },
          ].map((item) => (
            <div key={item.label} className={`rounded-xl border border-${item.color}/20 bg-${item.color}/5 p-4 text-center`}>
              <p className={`font-mono text-2xl font-extrabold text-${item.color}`}>{item.r}</p>
              <p className="text-sm font-bold text-ink mt-1">{item.label}</p>
              <p className="text-xs text-ink-muted mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border-l-4 border-brand-red bg-brand-red/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            College prestige is among the <strong className="text-ink">weakest predictors of job performance</strong> that companies commonly use.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.2 What IIT Admission Actually Measures</h3>
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-xl border border-brand-green/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">JEE measures</p>
            <ul className="space-y-2">
              {[
                'Performance on physics, chemistry, mathematics problems',
                'Timed problem-solving under pressure',
                'Pattern recognition and analytical reasoning',
                'Recall of concepts taught in coaching programs',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-red/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-red mb-3">JEE does NOT measure</p>
            <ul className="space-y-2">
              {[
                'Communication skills',
                'Collaboration ability',
                'Learning velocity in novel domains',
                'Persistence on ambiguous problems',
                'Domain expertise (acquired after college)',
                'Work ethic and professionalism',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-red/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.3 The Fading Pedigree Effect</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          The predictive value of college pedigree decreases with experience:
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Experience Level</th>
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Predictive Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { exp: 'Campus hire (0 years)', value: 'Moderate', color: 'brand-orange', width: '60%' },
                { exp: '1\u20132 years', value: 'Low-Moderate', color: 'brand-orange', width: '40%' },
                { exp: '3\u20135 years', value: 'Low', color: 'brand-yellow', width: '20%' },
                { exp: '5+ years', value: 'Minimal', color: 'brand-red', width: '8%' },
              ].map((row) => (
                <tr key={row.exp} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-3 font-medium text-ink">{row.exp}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div className={`h-full rounded-full bg-${row.color}`} style={{ width: row.width }} />
                      </div>
                      <span className={`text-xs font-semibold text-${row.color} w-24 text-right`}>{row.value}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border-l-4 border-brand-red bg-brand-red/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            After 3&ndash;5 years of work experience, actual job performance, skills acquired, and demonstrated results dwarf any signal
            from college brand. For experienced hiring, <strong className="text-ink">pedigree filtering makes almost no sense</strong> from a predictive standpoint.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.4 What Pedigree Actually Proxies</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          When college pedigree does correlate with outcomes, it often proxies other factors:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { term: 'Socioeconomic status', desc: 'JEE coaching costs \u20B92\u20135 lakh. Students from wealthy families have access; others don\u2019t. \u201cIIT caliber\u201d partly means \u201ccould afford coaching.\u201d' },
            { term: 'Urban advantage', desc: 'Coaching centers concentrate in metro areas. Rural students face structural disadvantage regardless of raw ability.' },
            { term: 'Family education', desc: 'First-generation college students are underrepresented at IITs. Parental education provides advantages unrelated to candidate ability.' },
            { term: 'Early decision-making', desc: 'The choice to pursue IIT happens at age 14\u201315. Many talented people made different choices as teenagers.' },
          ].map((item) => (
            <div key={item.term} className="flex gap-4 rounded-xl border border-gray-200 bg-paper-off p-4">
              <span className="mt-0.5 shrink-0 rounded-full bg-brand-red/20 p-1">
                <span className="block h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{item.term}</p>
                <p className="text-sm text-ink-light mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
          Filtering on IIT partly filters on <strong className="text-ink">wealth, geography, and family background</strong> &mdash; not just capability.
        </p>
      </section>

      {/* ── 4. THE COST OF PEDIGREE FILTERING ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">4</span>
          <h2 className="text-2xl font-extrabold text-ink">The Cost of Pedigree Filtering</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">4.1 Direct Costs</h3>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            { term: 'Salary premium', desc: 'IIT graduates command 20\u201340% higher salaries than equivalent non-IIT candidates. For a team of 50, this costs \u20B950\u2013100 lakh annually.', color: 'brand-red' },
            { term: 'Smaller talent pool', desc: 'Competition for 50,000 Tier-1 graduates is intense. Every company wants the same candidates. You pay more and get fewer.', color: 'brand-orange' },
            { term: 'Longer time-to-fill', desc: 'Restrictive filters extend searches. Positions stay open longer. Opportunity cost accumulates.', color: 'brand-yellow' },
            { term: 'Reduced offer acceptance', desc: 'Top IIT candidates have many offers. Your acceptance rate may be 40\u201350%. You must interview more candidates to fill each role.', color: 'brand-orange' },
          ].map((item) => (
            <div key={item.term} className={`rounded-xl border border-${item.color}/20 bg-${item.color}/5 p-4`}>
              <p className={`text-sm font-bold text-${item.color} mb-1`}>{item.term}</p>
              <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">4.2 Indirect Costs</h3>
        <div className="space-y-2 mb-8">
          {[
            { h: 'Missed hires.', b: 'Strong candidates from non-target schools are never evaluated. You don\u2019t know what you\u2019re missing, but you\u2019re missing it.' },
            { h: 'Reduced diversity.', b: 'Pedigree filtering correlates with socioeconomic, geographic, and caste demographics. Homogeneous teams have blind spots.' },
            { h: 'Monoculture risk.', b: 'Teams from similar backgrounds think similarly. Diverse perspectives reduce groupthink.' },
            { h: 'Employer brand limitation.', b: '\u201cIIT only\u201d reputation limits your appeal to 96% of candidates who might otherwise be interested.' },
          ].map((item) => (
            <li key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3 list-none">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-red/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <span className="text-ink-light"><strong className="text-ink">{item.h}</strong> {item.b}</span>
            </li>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">4.3 The Opportunity Cost Calculation</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Consider a company that needs <strong className="text-ink">100 engineers</strong>:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="rounded-xl border-2 border-brand-red/30 bg-brand-red/5 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-red mb-4">Pedigree Approach</p>
            <div className="space-y-2 text-sm">
              {[
                { label: 'Applications (Tier-1)', value: '500' },
                { label: 'Interviews', value: '100' },
                { label: 'Offers', value: '50' },
                { label: 'Acceptances', value: '30' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-1.5">
                  <span className="text-ink-light">{row.label}</span>
                  <span className="font-mono font-bold text-ink">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-brand-red font-semibold italic">Need to repeat cycle or compromise</p>
          </div>
          <div className="rounded-xl border-2 border-brand-green/30 bg-brand-green/5 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-4">Capability Approach</p>
            <div className="space-y-2 text-sm">
              {[
                { label: 'Applications (all tiers)', value: '2,000' },
                { label: 'Assessments (automated)', value: '200' },
                { label: 'Interviews (top scorers)', value: '100' },
                { label: 'Offers \u2192 Acceptances', value: '60 \u2192 50' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-1.5">
                  <span className="text-ink-light">{row.label}</span>
                  <span className="font-mono font-bold text-ink">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-brand-green font-semibold italic">Roles filled faster, at lower cost</p>
          </div>
        </div>
      </section>

      {/* ── 5. ALTERNATIVE APPROACHES ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">5</span>
          <h2 className="text-2xl font-extrabold text-ink">Alternative Approaches</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">5.1 Capability-Based Hiring</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Instead of filtering on credentials, evaluate demonstrated capability:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          <div className="rounded-xl border border-brand-green/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">What to measure</p>
            <ul className="space-y-2">
              {[
                'Technical skills relevant to the role',
                'Problem-solving approach',
                'Communication clarity',
                'Learning orientation',
                'Collaboration patterns',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-green/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">How to measure</p>
            <ul className="space-y-2">
              {[
                'Structured assessments with consistent criteria',
                'Work samples or simulations',
                'Behavioral interviews with defined rubrics',
                'Reference checks focused on relevant competencies',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">5.2 Blinding and Anonymization</h3>
        <div className="rounded-xl border border-gray-200 bg-paper-off p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light mb-3">
            Remove pedigree signals from evaluation:
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              'Strip college names from resumes during review',
              'Evaluate responses without demographic information',
              'Score assessments before revealing background',
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white border border-gray-200 p-3 text-sm text-ink-light text-center">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-ink">
            This forces evaluation on substance rather than credential.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">5.3 Outcome Tracking</h3>
        <div className="space-y-2">
          {[
            'Track performance ratings by college tier',
            'Compare retention rates across demographics',
            'Analyze time-to-productivity by background',
            'Iterate based on actual outcomes',
          ].map((item) => (
            <div key={item} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              </span>
              <span className="text-ink-light">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
          If Tier-2 hires perform comparably to Tier-1 hires, expand Tier-2 sourcing.
        </p>
      </section>

      {/* ── 6. LAYERSRANK DATA: BEYOND PEDIGREE ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">6</span>
          <h2 className="text-2xl font-extrabold text-ink">LayersRank Data: Beyond Pedigree</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.1 Methodology</h3>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Candidate assessments', value: '12,847', sub: 'identity-blind evaluation' },
            { label: 'Companies', value: '23', sub: 'using LayersRank' },
            { label: 'Post-hire tracked', value: '1,247', sub: '6+ months performance data' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-200 bg-paper-off p-5 text-center">
              <p className="text-3xl font-extrabold text-ink">{stat.value}</p>
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mt-1">{stat.label}</p>
              <p className="text-xs text-ink-muted mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.2 Assessment Scores by College Tier</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Distribution of LayersRank scores by college tier:
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">College Tier</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Mean Score</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Std Dev</th>
                  <th className="text-right px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Top 20% Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { tier: 'Tier 1 (IIT/NIT/BITS)', mean: '72.4', std: '14.2', rate: '28%', color: 'brand-green' },
                  { tier: 'Tier 2 (State/Mid-Private)', mean: '64.8', std: '16.1', rate: '18%', color: 'brand-orange' },
                  { tier: 'Tier 3 (Regional)', mean: '58.3', std: '17.8', rate: '12%', color: 'brand-red' },
                ].map((row) => (
                  <tr key={row.tier} className="hover:bg-paper-off transition-colors">
                    <td className="px-5 py-2.5 font-medium text-ink">{row.tier}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-ink">{row.mean}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-ink-muted">{row.std}</td>
                    <td className="px-5 py-2.5 text-right">
                      <span className={`font-mono font-bold text-${row.color}`}>{row.rate}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-brand-orange/25 bg-orange-50/30 p-5 mb-8">
          <p className="text-sm font-bold text-brand-orange uppercase tracking-wide mb-2">Interpretation</p>
          <p className="text-[15px] leading-relaxed text-ink-light">
            Tier-1 candidates score higher on average, but the distributions overlap substantially.{' '}
            <strong className="text-ink">18% of Tier-2</strong> and <strong className="text-ink">12% of Tier-3</strong> candidates
            score in the top 20% overall &mdash; these are candidates who would be filtered out by pedigree but are genuinely strong.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.3 High Scorers by College Tier</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Where do top-20% candidates come from?
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Source</th>
                <th className="text-right px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">% of Top 20%</th>
                <th className="text-right px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">% of Pool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { src: 'Tier 1', top: '42%', pool: '31%' },
                { src: 'Tier 2', top: '38%', pool: '42%' },
                { src: 'Tier 3', top: '20%', pool: '27%' },
              ].map((row) => (
                <tr key={row.src} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-2.5 font-medium text-ink">{row.src}</td>
                  <td className="px-4 py-2.5 text-right font-mono font-bold text-ink">{row.top}</td>
                  <td className="px-5 py-2.5 text-right font-mono text-ink-muted">{row.pool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border-2 border-brand-red/30 bg-brand-red/5 p-6 mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Key Finding</p>
          <p className="font-mono text-lg font-extrabold text-ink text-center">
            58% of top-scoring candidates come from Tier-2 and Tier-3 colleges.
          </p>
          <p className="text-sm text-ink-light text-center mt-2">
            If you filter to Tier-1 only, you miss more than half of your strongest candidates.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.4 Post-Hire Performance Correlation</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          For candidates with 6+ months of performance data (n=1,247):
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Metric</th>
                <th className="text-right px-4 py-2.5 font-semibold text-brand-green text-xs uppercase tracking-wide">LayersRank Score</th>
                <th className="text-right px-5 py-2.5 font-semibold text-brand-red text-xs uppercase tracking-wide">College Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { metric: 'Manager rating (1\u20135)', lr: 'r = 0.42', ct: 'r = 0.11' },
                { metric: 'Promotion within 18 months', lr: 'r = 0.38', ct: 'r = 0.08' },
                { metric: 'Retention at 12 months', lr: 'r = 0.29', ct: 'r = 0.05' },
              ].map((row) => (
                <tr key={row.metric} className="hover:bg-paper-off transition-colors">
                  <td className="px-5 py-2.5 font-medium text-ink">{row.metric}</td>
                  <td className="px-4 py-2.5 text-right font-mono font-bold text-brand-green">{row.lr}</td>
                  <td className="px-5 py-2.5 text-right font-mono text-brand-red">{row.ct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border-l-4 border-brand-green bg-brand-green/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            LayersRank assessment scores predict job performance <strong className="text-ink">3&ndash;4x better</strong> than college tier.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.5 Case Example: GCC Engineering Team</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          A Fortune 500 GCC shifted from pedigree-based to capability-based hiring:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="rounded-xl border border-brand-red/25 overflow-hidden">
            <div className="bg-brand-red/5 border-b border-brand-red/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-red uppercase tracking-wide">Before (Tier-1 only)</p>
            </div>
            <div className="px-5 py-4 space-y-2 text-sm">
              {[
                { label: 'Candidates reviewed', value: '200 (all Tier-1)' },
                { label: 'Hired', value: '50' },
                { label: '12-month performance', value: '3.2 avg rating' },
                { label: 'Tier-1 composition', value: '100%' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-lg bg-paper-off px-3 py-1.5">
                  <span className="text-ink-muted">{row.label}</span>
                  <span className="font-mono font-bold text-ink">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-brand-green/25 overflow-hidden">
            <div className="bg-brand-green/5 border-b border-brand-green/20 px-5 py-3">
              <p className="text-xs font-bold text-brand-green uppercase tracking-wide">After (All tiers, LayersRank)</p>
            </div>
            <div className="px-5 py-4 space-y-2 text-sm">
              {[
                { label: 'Candidates assessed', value: '800 (all tiers)' },
                { label: 'Hired', value: '50 (top scorers)' },
                { label: '12-month performance', value: '3.4 avg rating' },
                { label: 'Tier-1 composition', value: '58%' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-lg bg-paper-off px-3 py-1.5">
                  <span className="text-ink-muted">{row.label}</span>
                  <span className="font-mono font-bold text-ink">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-ink p-6 text-white">
          <p className="text-base font-semibold leading-relaxed">
            Performance improved slightly while expanding the talent pool <strong>4x</strong> and reducing salary costs by <strong>~15%</strong> (lower Tier-1 premium).
          </p>
        </div>
      </section>

      {/* ── 7. IMPLEMENTATION RECOMMENDATIONS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">7</span>
          <h2 className="text-2xl font-extrabold text-ink">Implementation Recommendations</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.1 For Campus Hiring</h3>
        <div className="space-y-2 mb-8">
          {[
            { h: 'Remove Tier-1 only filters.', b: 'Assess all applicants from all colleges with consistent criteria.' },
            { h: 'Use structured assessment.', b: 'Evaluate technical, behavioral, and contextual dimensions with defined rubrics.' },
            { h: 'Track outcomes by tier.', b: 'After 6\u201312 months, compare performance across college tiers. Use data to calibrate.' },
            { h: 'Expand campus visits.', b: 'Add strong Tier-2 colleges to your campus recruiting circuit.' },
          ].map((item) => (
            <div key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              </span>
              <span className="text-ink-light"><strong className="text-ink">{item.h}</strong> {item.b}</span>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.2 For Experienced Hiring</h3>
        <div className="space-y-2 mb-8">
          {[
            { h: 'De-emphasize education entirely.', b: 'For candidates with 3+ years of experience, college should have minimal weight.' },
            { h: 'Focus on recent performance.', b: 'Work history, accomplishments, and demonstrated skills matter more than credentials.' },
            { h: 'Use work samples.', b: 'Evaluate actual capability through simulations, take-homes, or structured technical discussions.' },
          ].map((item) => (
            <div key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              </span>
              <span className="text-ink-light"><strong className="text-ink">{item.h}</strong> {item.b}</span>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.3 For Organizational Change</h3>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            { title: 'Start with a pilot', desc: 'Run capability-based assessment alongside traditional process. Compare outcomes.' },
            { title: 'Build data', desc: 'Track which assessment approach produces better hires. Let data drive decisions.' },
            { title: 'Communicate the change', desc: 'Help hiring managers understand that capability-based assessment maintains (or improves) quality while expanding access.' },
            { title: 'Set targets', desc: 'Consider diversity targets for college tier representation. Hold teams accountable.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-brand-red/20 bg-brand-red/5 p-4">
              <p className="text-sm font-bold text-brand-red">{item.title}</p>
              <p className="text-sm text-ink-light mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.4 For Individual Hiring Managers</h3>
        <div className="space-y-2">
          {[
            { h: 'Check your assumptions.', b: 'Do you believe Tier-1 candidates are better? What\u2019s that belief based on?' },
            { h: 'Audit your decisions.', b: 'Look at your last 20 hires. What percentage were Tier-1? How did they perform?' },
            { h: 'Try blinding.', b: 'Evaluate candidate responses without seeing resumes first. Does your assessment change?' },
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

      {/* ── 8. CONCLUSION ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">8</span>
          <h2 className="text-2xl font-extrabold text-ink">Conclusion</h2>
        </div>

        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Pedigree filtering is the default in Indian tech hiring. It&rsquo;s comfortable, defensible, and <strong className="text-ink">wrong</strong>.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-6">
          The evidence is clear:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          {[
            { n: '01', title: 'College prestige weakly predicts job performance', desc: 'The correlation is among the lowest of any commonly used hiring signal.' },
            { n: '02', title: 'Pedigree filtering excludes most of the talent pool', desc: '96.6% of engineering graduates never get evaluated.' },
            { n: '03', title: 'Strong candidates exist across all college tiers', desc: '58% of top scorers come from Tier-2 and Tier-3 colleges.' },
            { n: '04', title: 'Capability-based assessment identifies them', desc: 'LayersRank scores predict performance 3\u20134x better than college tier.' },
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

        <div className="rounded-2xl border-2 border-brand-red/30 bg-brand-red/5 p-6 text-center mb-6">
          <p className="text-[15px] leading-relaxed text-ink-light mb-2">
            The question is not <em>&ldquo;Should we lower our bar for non-Tier-1 candidates?&rdquo;</em>
          </p>
          <p className="text-[15px] leading-relaxed text-ink-light mb-4">
            The right question:
          </p>
          <p className="font-mono text-lg font-extrabold text-ink">
            &ldquo;Should we measure the right things for all candidates?&rdquo;
          </p>
        </div>

        <div className="rounded-2xl bg-ink p-6 text-white mb-6">
          <p className="text-xl font-extrabold text-center mb-2">Same bar. Better measurement. Wider pool.</p>
          <p className="text-base leading-relaxed text-white/80 text-center">
            Companies that make this shift gain access to talent their competitors ignore. They build more diverse teams.
            They often reduce costs while maintaining or improving quality.
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-brand-red bg-brand-red/5 p-5">
          <p className="text-[15px] leading-relaxed font-semibold text-ink">
            The pedigree premium is a tax you don&rsquo;t have to pay.
          </p>
        </div>
      </section>

      {/* ── 9. REFERENCES ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">9</span>
          <h2 className="text-2xl font-extrabold text-ink">References</h2>
        </div>
        <ol className="space-y-3">
          {[
            { authors: 'Roth, P. L., BeVier, C. A., Switzer, F. S., & Schippmann, J. S.', year: '1996', title: 'Meta-analyzing the relationship between grades and job performance', journal: 'Journal of Applied Psychology', vol: '81(5), 548\u2013556.' },
            { authors: 'Schmidt, F. L., & Hunter, J. E.', year: '1998', title: 'The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings', journal: 'Psychological Bulletin', vol: '124(2), 262\u2013274.' },
            { authors: 'Kuncel, N. R., Hezlett, S. A., & Ones, D. S.', year: '2004', title: 'Academic performance, career potential, creativity, and job performance: Can one construct predict them all?', journal: 'Journal of Personality and Social Psychology', vol: '86(1), 148\u2013161.' },
            { authors: 'AICTE', year: '2023', title: 'All India Survey on Higher Education', journal: 'Ministry of Education, Government of India', vol: '' },
            { authors: 'National Institutional Ranking Framework', year: '2024', title: 'Engineering Rankings', journal: 'Ministry of Education, Government of India', vol: '' },
          ].map((ref, i) => (
            <li key={i} className="flex gap-4 text-sm text-ink-light rounded-lg border border-gray-100 bg-paper-off px-4 py-3">
              <span className="shrink-0 font-mono text-xs text-ink-muted w-4">{i + 1}.</span>
              <p>
                <strong className="text-ink">{ref.authors}</strong> ({ref.year}). {ref.title}.{' '}
                <em>{ref.journal}</em>{ref.vol ? `, ${ref.vol}` : '.'}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── FOOTER ── */}
      <div className="border-t border-gray-200 pt-8 text-center">
        <p className="text-sm text-ink-muted">
          For questions about this research or to discuss capability-based assessment for your organization, contact{' '}
          <a href="mailto:research@layersrank.com" className="font-medium text-brand-red hover:underline">
            research@layersrank.com
          </a>
        </p>
        <p className="mt-3 text-xs text-ink-muted">&copy; 2025 LayersRank by The Algorithm. All rights reserved.</p>
      </div>
    </>
  );
}
