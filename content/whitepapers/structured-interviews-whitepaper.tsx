export default function Whitepaper() {
  return (
    <>
      {/* ── TITLE PAGE ── */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-full bg-[#3b82f6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
            Science Whitepaper
          </span>
          <span className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-green">
            v1.0
          </span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-tight">
          Structured vs. Unstructured<br />
          <span className="text-[#3b82f6]">Interviews</span>
        </h1>
        <p className="mt-4 text-xl text-ink-light max-w-2xl">
          What Actually Predicts Job Performance
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { label: 'Pages', value: '12' },
            { label: 'Audience', value: 'General' },
            { label: 'Domain', value: 'Science & Research' },
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
        <div className="rounded-2xl border border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/5 to-transparent p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-4">Abstract</p>
          <p className="text-base leading-8 text-ink-light">
            Decades of industrial-organizational psychology research have established a clear finding:{' '}
            <strong className="text-ink">structured interviews significantly outperform unstructured interviews</strong> in
            predicting job performance. Yet most organizations still rely on unstructured approaches &mdash; casual conversations,
            gut-feel judgments, and inconsistent criteria. This paper summarizes the research evidence, explains why the gap
            persists, and provides a practical framework for implementing structured interview principles at scale.
          </p>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <nav className="mb-16 rounded-2xl bg-paper-off border border-gray-200 p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-5">Table of Contents</p>
        <ol className="space-y-2">
          {[
            'Executive Summary',
            'Defining the Terms',
            'The Research Evidence',
            'Why Unstructured Interviews Persist',
            'Implementing Structure',
            'Scaling with Technology',
            'Measuring Improvement',
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

        <div className="rounded-2xl border-2 border-[#3b82f6]/30 bg-[#3b82f6]/5 p-6 mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3">The Core Finding</p>
          <p className="font-mono text-lg font-extrabold text-ink text-center">
            Structured interviews predict job performance at <span className="text-[#3b82f6]">r&nbsp;=&nbsp;0.51</span>.
            Unstructured interviews predict at <span className="text-brand-red">r&nbsp;=&nbsp;0.38</span>.
          </p>
          <p className="text-sm text-ink-light text-center mt-2">
            That&rsquo;s <strong className="text-ink">34% better prediction</strong> &mdash; translating to significantly better hiring outcomes at scale.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <div className="rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#3b82f6] mb-3">What structure means</p>
            <ul className="space-y-2">
              {[
                'Same questions for all candidates',
                'Defined evaluation criteria',
                'Standardized scoring rubrics',
                'Multiple evaluators with clear process',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">Why it works</p>
            <ul className="space-y-2">
              {[
                'Reduces evaluator bias',
                'Increases measurement reliability',
                'Focuses on job-relevant criteria',
                'Enables meaningful comparison',
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
          <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-orange mb-3">The implementation gap</p>
            <ul className="space-y-2">
              {[
                'Cultural: interviewers prefer autonomy',
                'Practical: structure requires effort',
                'Perceptual: gut feel seems trustworthy',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-orange/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-ink p-6 text-white">
          <p className="text-base font-semibold leading-relaxed">
            Organizations that implement structured interviewing make better hires. The research is settled. The question is <em>implementation</em>.
          </p>
        </div>
      </section>

      {/* ── 2. DEFINING THE TERMS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">2</span>
          <h2 className="text-2xl font-extrabold text-ink">Defining the Terms</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">2.1 Unstructured Interviews</h3>
        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          {[
            { term: 'Variable questions', desc: 'Each interviewer asks whatever seems relevant. Candidates answer different questions, making comparison impossible.' },
            { term: 'No defined criteria', desc: '\u201cGood\u201d and \u201cbad\u201d answers aren\u2019t specified in advance. Evaluators decide in the moment.' },
            { term: 'Holistic scoring', desc: 'A single overall rating based on general impression. \u201cI liked them\u201d or \u201cThey weren\u2019t a fit.\u201d' },
            { term: 'Interviewer autonomy', desc: 'Each evaluator runs the conversation however they prefer. No standardization.' },
          ].map((item) => (
            <div key={item.term} className="rounded-xl border border-brand-red/20 bg-brand-red/5 p-4">
              <p className="text-sm font-bold text-brand-red mb-1">{item.term}</p>
              <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="my-4 rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 text-sm text-ink-light">
          <p className="font-semibold text-ink mb-1">Example:</p>
          <p className="italic">
            A hiring manager meets a candidate for coffee. They chat about background, interests, and experience.
            The manager forms an impression. Later, they report &ldquo;Strong candidate, recommend moving forward&rdquo;
            or &ldquo;Didn&rsquo;t seem right for the team.&rdquo;
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">2.2 Structured Interviews</h3>
        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          {[
            { term: 'Standardized questions', desc: 'All candidates answer the same questions for a given role. Questions are job-relevant and validated.' },
            { term: 'Defined criteria', desc: 'For each question, the expected good answer is specified. Evaluators know what to look for.' },
            { term: 'Anchored rating scales', desc: 'Scoring rubrics define what a 1, 3, 5 looks like. Reduces subjective interpretation.' },
            { term: 'Consistent process', desc: 'All evaluators follow the same format. Training ensures alignment.' },
          ].map((item) => (
            <div key={item.term} className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
              <p className="text-sm font-bold text-brand-green mb-1">{item.term}</p>
              <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-paper-off border-b border-gray-200 px-5 py-3">
            <p className="text-xs font-semibold text-ink-muted">Example Rubric &mdash; &ldquo;Tell me about a time you received critical feedback on your technical approach. How did you respond?&rdquo;</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="text-center px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide w-16">Score</th>
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Anchor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { score: '1', anchor: 'Deflected or denied the feedback', color: 'brand-red' },
                  { score: '3', anchor: 'Accepted feedback but no behavior change', color: 'brand-orange' },
                  { score: '5', anchor: 'Integrated feedback and demonstrated learning', color: 'brand-green' },
                ].map((row) => (
                  <tr key={row.score} className="hover:bg-paper-off transition-colors">
                    <td className="px-4 py-2.5 text-center">
                      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-${row.color}/15 font-mono text-sm font-bold text-${row.color}`}>{row.score}</span>
                    </td>
                    <td className="px-5 py-2.5 text-ink-light">{row.anchor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">2.3 The Spectrum</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">Structure exists on a continuum:</p>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Level</th>
                  <th className="text-left px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Questions</th>
                  <th className="text-left px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Criteria</th>
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Scoring</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { level: 'Fully Unstructured', q: 'Different per interview', c: 'None', s: 'Gut feel', color: 'brand-red' },
                  { level: 'Loosely Structured', q: 'Suggested topics', c: 'General guidelines', s: 'Simple rating', color: 'brand-orange' },
                  { level: 'Moderately Structured', q: 'Required questions', c: 'Written criteria', s: 'Anchored scale', color: 'brand-yellow' },
                  { level: 'Highly Structured', q: 'Exact questions, order', c: 'Detailed rubrics', s: 'Multi-rater agreement', color: 'brand-green' },
                ].map((row) => (
                  <tr key={row.level} className="hover:bg-paper-off transition-colors">
                    <td className="px-5 py-2.5">
                      <span className={`text-sm font-semibold text-${row.color}`}>{row.level}</span>
                    </td>
                    <td className="px-4 py-2.5 text-ink-light text-sm">{row.q}</td>
                    <td className="px-4 py-2.5 text-ink-light text-sm">{row.c}</td>
                    <td className="px-5 py-2.5 text-ink-light text-sm">{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-[15px] leading-relaxed text-ink-light">
          Most organizations operate at <strong className="text-ink">&ldquo;loosely structured&rdquo;</strong> &mdash; some consistency, but significant evaluator discretion.
        </p>
      </section>

      {/* ── 3. THE RESEARCH EVIDENCE ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">3</span>
          <h2 className="text-2xl font-extrabold text-ink">The Research Evidence</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.1 The Meta-Analytic Foundation</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Schmidt and Hunter&rsquo;s (1998) landmark meta-analysis examined <strong className="text-ink">85 years of research</strong> on selection methods:
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Method</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Validity (r)</th>
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { method: 'Work samples', r: '0.54', note: 'Highest validity, but expensive', color: 'brand-green' },
                  { method: 'Structured interviews', r: '0.51', note: 'Near work samples, scalable', color: 'brand-green' },
                  { method: 'General cognitive ability', r: '0.51', note: 'GMA tests, legal considerations', color: 'brand-green' },
                  { method: 'Unstructured interviews', r: '0.38', note: 'Common practice, suboptimal', color: 'brand-orange' },
                  { method: 'Job experience (years)', r: '0.18', note: 'Weak predictor', color: 'brand-red' },
                  { method: 'Education level', r: '0.10', note: 'Weak predictor', color: 'brand-red' },
                  { method: 'Age', r: '0.00', note: 'Not predictive', color: 'brand-red' },
                ].map((row) => (
                  <tr key={row.method} className={row.method === 'Structured interviews' ? 'bg-[#3b82f6]/5' : 'hover:bg-paper-off transition-colors'}>
                    <td className={`px-5 py-2.5 font-medium ${row.method === 'Structured interviews' ? 'text-[#3b82f6] font-bold' : 'text-ink'}`}>{row.method}</td>
                    <td className="px-4 py-2.5 text-right">
                      <span className={`font-mono font-bold text-${row.color}`}>{row.r}</span>
                    </td>
                    <td className="px-5 py-2.5 text-ink-light">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border-l-4 border-[#3b82f6] bg-[#3b82f6]/5 p-5 mb-8">
          <p className="text-[15px] leading-relaxed text-ink-light">
            <strong className="text-ink">Key insight:</strong> Structured interviews perform nearly as well as work samples &mdash;
            the gold standard &mdash; while being far more <strong className="text-ink">practical to implement at scale</strong>.
          </p>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.2 What &ldquo;r = 0.51 vs r = 0.38&rdquo; Means</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Correlation coefficients can seem abstract. In practical terms:
        </p>
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          {[
            {
              label: 'Variance explained',
              items: ['r = 0.51 \u2192 explains 26%', 'r = 0.38 \u2192 explains 14%', 'Nearly 2x as much'],
              color: '[#3b82f6]',
            },
            {
              label: 'Success rate (per 100 hires)',
              items: ['Unstructured: ~60 successful', 'Structured: ~70 successful', '+10 additional good hires'],
              color: 'brand-green',
            },
            {
              label: 'Economic impact',
              items: ['1 bad hire \u2248 \u20B910 lakh', '10 fewer bad hires = \u20B91 crore saved', 'Plus productivity gains'],
              color: 'brand-orange',
            },
          ].map((card) => (
            <div key={card.label} className={`rounded-xl border border-${card.color}/20 bg-${card.color}/5 p-4`}>
              <p className={`text-xs font-bold uppercase tracking-wide text-${card.color} mb-3`}>{card.label}</p>
              <ul className="space-y-1.5">
                {card.items.map((it) => (
                  <li key={it} className="text-sm text-ink-light">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.3 Why Structure Improves Prediction</h3>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            { term: 'Reliability', color: '[#3b82f6]', desc: 'Structured interviews produce consistent assessments. Two evaluators using the same rubric rate candidates similarly. Unstructured interviews have evaluator variance of 15\u201325%.' },
            { term: 'Validity', color: 'brand-green', desc: 'Structure focuses on job-relevant criteria. Unstructured interviews wander into irrelevant areas (hobbies, rapport, personal connection) that don\u2019t predict performance.' },
            { term: 'Reduced bias', color: 'brand-orange', desc: 'Structure constrains the space for unconscious bias to operate. Evaluators score against criteria, not against their mental model of \u201cgood candidates.\u201d' },
            { term: 'Comparability', color: 'brand-yellow', desc: 'When all candidates answer the same questions, you can meaningfully compare them. Different questions = apples and oranges.' },
          ].map((item) => (
            <div key={item.term} className={`rounded-xl border border-${item.color}/20 bg-${item.color}/5 p-4`}>
              <p className={`text-sm font-bold text-${item.color} mb-1`}>{item.term}</p>
              <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.4 Replication and Robustness</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          The structured interview advantage has been replicated extensively:
        </p>
        <div className="relative pl-6 border-l-2 border-gray-200 space-y-6 mb-4">
          {[
            { year: '1994', who: 'Huffcutt & Arthur', desc: 'Meta-analysis confirming structure improves validity' },
            { year: '1994', who: 'McDaniel et al.', desc: 'Meta-analysis showing structure effect across job types' },
            { year: '2014', who: 'Levashina et al.', desc: 'Updated meta-analysis reaffirming Schmidt & Hunter' },
            { year: 'Various', who: 'Organizational studies', desc: 'Replicated in tech, healthcare, finance, government' },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex h-4 w-4 items-center justify-center rounded-full bg-[#3b82f6] ring-4 ring-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#3b82f6]">{step.year}</span>
                  <span className="text-xs text-ink-muted">&middot;</span>
                  <span className="text-xs text-ink-muted">{step.who}</span>
                </div>
                <p className="text-sm text-ink-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-relaxed text-ink-light">
          The finding is robust across industries, roles, and cultures. It&rsquo;s one of the <strong className="text-ink">most established results</strong> in personnel selection research.
        </p>
      </section>

      {/* ── 4. WHY UNSTRUCTURED INTERVIEWS PERSIST ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">4</span>
          <h2 className="text-2xl font-extrabold text-ink">Why Unstructured Interviews Persist</h2>
        </div>

        <p className="text-[15px] leading-relaxed text-ink-light mb-6">
          If the evidence is so clear, why don&rsquo;t all organizations use structured interviews?
        </p>

        <div className="space-y-4">
          {[
            {
              id: '4.1',
              title: 'Interviewer Autonomy',
              desc: 'Interviewers like unstructured conversations. They feel more natural. They allow exploration. They give the interviewer control.',
              quote: '\u201cI want to follow the conversation where it goes\u201d sounds reasonable but produces unreliable assessments.',
            },
            {
              id: '4.2',
              title: 'Overconfidence in Intuition',
              desc: 'Humans overestimate their ability to judge character from brief interactions. \u201cI can tell if someone\u2019s good in the first 5 minutes\u201d is a common belief \u2014 and demonstrably false.',
              quote: 'Unstructured interviews feel insightful. Structured interviews feel mechanical. The feeling is misleading.',
            },
            {
              id: '4.3',
              title: 'Implementation Cost',
              desc: 'Structure requires upfront work: developing validated questions, writing scoring rubrics, training interviewers, ensuring compliance.',
              quote: 'Unstructured interviews require nothing. The path of least resistance wins.',
            },
            {
              id: '4.4',
              title: 'Lack of Feedback',
              desc: 'Most organizations don\u2019t track interview assessment against job performance. Without data, there\u2019s no feedback loop.',
              quote: 'Bad practices persist because no one measures them.',
            },
            {
              id: '4.5',
              title: 'Cultural Inertia',
              desc: 'Senior leaders were hired through unstructured interviews. They believe the process works because it selected them.',
              quote: '\u201cThis is how we\u2019ve always done it.\u201d',
            },
          ].map((item) => (
            <div key={item.id} className="rounded-xl border border-gray-200 bg-paper-off overflow-hidden">
              <div className="border-b border-gray-200 bg-white px-5 py-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg border border-brand-orange/30 bg-brand-orange/10 px-2 py-0.5 font-mono text-xs font-bold text-brand-orange">{item.id}</span>
                  <h4 className="font-bold text-ink">{item.title}</h4>
                </div>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-ink-light mb-2">{item.desc}</p>
                <p className="text-sm font-semibold text-ink italic">{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. IMPLEMENTING STRUCTURE ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">5</span>
          <h2 className="text-2xl font-extrabold text-ink">Implementing Structure</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">5.1 Question Development</h3>
        <div className="space-y-2 mb-6">
          {[
            { h: 'Start with job analysis.', b: 'What competencies does the role require? Technical skills, behavioral traits, domain knowledge?' },
            { h: 'Write behavioral questions.', b: '\u201cTell me about a time when...\u201d questions elicit concrete examples rather than hypotheticals.' },
            { h: 'Ensure job relevance.', b: 'Every question should connect to role requirements. No brain teasers, no irrelevant puzzles.' },
            { h: 'Validate questions.', b: 'Test questions with current employees. Do responses differentiate high and low performers?' },
          ].map((item) => (
            <div key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
              </span>
              <span className="text-ink-light"><strong className="text-ink">{item.h}</strong> {item.b}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-xl border border-[#3b82f6]/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[#3b82f6] mb-3">Technical Questions</p>
            <ul className="space-y-3">
              {[
                'Walk through how you\u2019d debug a production issue causing intermittent errors.',
                'Describe your approach to designing a system that needs to handle 10x current load.',
              ].map((q) => (
                <li key={q} className="text-sm text-ink-light italic border-l-2 border-[#3b82f6]/30 pl-3">&ldquo;{q}&rdquo;</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-green/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">Behavioral Questions</p>
            <ul className="space-y-3">
              {[
                'Tell me about a time you disagreed with a technical decision made by your team. What happened?',
                'Describe a situation where you received critical feedback on your code. How did you respond?',
              ].map((q) => (
                <li key={q} className="text-sm text-ink-light italic border-l-2 border-brand-green/30 pl-3">&ldquo;{q}&rdquo;</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">5.2 Rubric Development</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-paper-off border-b border-gray-200 px-5 py-3">
            <p className="text-xs font-semibold text-ink-muted">Rubric &mdash; &ldquo;Describe a time you received critical feedback on your technical approach. How did you respond?&rdquo;</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="text-center px-4 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide w-16">Score</th>
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Anchor Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { score: '1', anchor: 'Defensive or dismissive. Blamed others or circumstances. No learning evident.', color: 'brand-red' },
                  { score: '2', anchor: 'Acknowledged feedback but rationalized. Minimal behavior change.', color: 'brand-red' },
                  { score: '3', anchor: 'Accepted feedback constructively. Made specific changes. Some reflection.', color: 'brand-orange' },
                  { score: '4', anchor: 'Embraced feedback as learning opportunity. Clear behavior change. Applied learning to future situations.', color: 'brand-green' },
                  { score: '5', anchor: 'Actively sought feedback. Systematic approach to incorporating input. Evidence of growth mindset and continuous improvement.', color: 'brand-green' },
                ].map((row) => (
                  <tr key={row.score} className="hover:bg-paper-off transition-colors">
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-${row.color}/15 font-mono text-sm font-bold text-${row.color}`}>{row.score}</span>
                    </td>
                    <td className="px-5 py-3 text-ink-light">{row.anchor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">5.3 Interviewer Training</h3>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            { title: 'Why structure matters', desc: 'Share the research. Help interviewers understand the business case.' },
            { title: 'How to use rubrics', desc: 'Practice scoring sample responses. Calibrate across interviewers.' },
            { title: 'Avoiding bias', desc: 'Recognize common biases (similarity, halo, contrast). Structure as bias mitigation.' },
            { title: 'Asking follow-ups', desc: 'Structure doesn\u2019t mean rigid. Probing questions are appropriate within the framework.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-4">
              <p className="text-sm font-bold text-[#3b82f6]">{item.title}</p>
              <p className="text-sm text-ink-light mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">5.4 Process Enforcement</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Structure fails if it&rsquo;s optional. Enforcement mechanisms:
        </p>
        <div className="space-y-2">
          {[
            { h: 'Required templates.', b: 'Interview notes must include scores for each question.' },
            { h: 'Calibration sessions.', b: 'Regular meetings where interviewers score the same candidate and discuss differences.' },
            { h: 'Audit trails.', b: 'Review submitted evaluations for compliance with process.' },
            { h: 'Feedback to interviewers.', b: 'Show interviewers how their predictions compared to outcomes.' },
          ].map((item) => (
            <div key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              </span>
              <span className="text-ink-light"><strong className="text-ink">{item.h}</strong> {item.b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. SCALING WITH TECHNOLOGY ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">6</span>
          <h2 className="text-2xl font-extrabold text-ink">Scaling with Technology</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.1 The Scaling Challenge</h3>
        <div className="space-y-2 mb-8">
          {[
            'More interviewers = more variance',
            'More interviews = less time for calibration',
            'More roles = more question development',
            'Distributed teams = harder to enforce consistency',
          ].map((item) => (
            <div key={item} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-red/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <span className="text-ink-light">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.2 AI-Assisted Evaluation</h3>

        {/* Visual flow diagram */}
        <div className="rounded-2xl border border-gray-200 bg-paper-off p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="rounded-xl border-2 border-[#3b82f6] bg-[#3b82f6]/10 px-8 py-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#3b82f6] mb-0.5">Step 1</p>
              <p className="font-bold text-ink text-sm">Candidates respond to structured questions</p>
            </div>
            <div className="flex flex-col items-center my-1">
              <div className="h-6 w-0.5 bg-gray-300" />
              <div className="h-0 w-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400" />
            </div>
            <div className="rounded-xl border-2 border-brand-green/40 bg-brand-green/5 px-8 py-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-green mb-0.5">Step 2</p>
              <p className="font-bold text-ink text-sm">AI models evaluate against defined criteria</p>
            </div>
            <div className="flex flex-col items-center my-1">
              <div className="h-6 w-0.5 bg-gray-300" />
              <div className="h-0 w-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400" />
            </div>
            <div className="rounded-xl border-2 border-brand-orange/40 bg-brand-orange/5 px-8 py-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange mb-0.5">Step 3</p>
              <p className="font-bold text-ink text-sm">Multiple models provide independent assessments</p>
            </div>
            <div className="flex flex-col items-center my-1">
              <div className="h-6 w-0.5 bg-gray-300" />
              <div className="h-0 w-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400" />
            </div>
            <div className="w-full max-w-lg grid grid-cols-2 gap-4">
              <div className="rounded-xl border-2 border-brand-green/40 bg-brand-green/5 p-4 text-center">
                <p className="font-mono text-xs font-bold text-brand-green mb-1">Agreement</p>
                <p className="text-xs font-semibold text-ink">Score + Confidence</p>
              </div>
              <div className="rounded-xl border-2 border-brand-orange/40 bg-brand-orange/5 p-4 text-center">
                <p className="font-mono text-xs font-bold text-brand-orange mb-1">Disagreement</p>
                <p className="text-xs font-semibold text-ink">Human review or follow-up</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            { term: 'Perfect consistency', desc: 'AI applies the same rubric every time.' },
            { term: 'No fatigue', desc: 'Model 1,000 is as careful as model 1.' },
            { term: 'Scalability', desc: 'Assess unlimited candidates simultaneously.' },
            { term: 'Audit trail', desc: 'Every score traces to evidence.' },
          ].map((item) => (
            <div key={item.term} className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
              <p className="text-sm font-bold text-brand-green mb-1">{item.term}</p>
              <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.3 LayersRank Implementation</h3>
        <div className="space-y-3 mb-8">
          {[
            { name: 'Structured questions', desc: 'Role-specific question banks with defined criteria.' },
            { name: 'Multi-model evaluation', desc: 'Semantic, lexical, and LLM models assess independently.' },
            { name: 'Confidence scoring', desc: 'TR-q-ROFNs quantify evaluation reliability (see companion whitepaper).' },
            { name: 'Adaptive follow-up', desc: 'Uncertainty triggers clarifying questions.' },
            { name: 'Human-readable reports', desc: 'Scores, evidence, and recommendations for human decision-makers.' },
          ].map((item) => (
            <div key={item.name} className="flex gap-4 rounded-xl border border-gray-200 bg-paper-off p-4">
              <span className="shrink-0 rounded-lg bg-[#3b82f6]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#3b82f6]">{item.name}</span>
              <p className="text-sm text-ink-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.4 Human + AI Collaboration</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          AI doesn&rsquo;t replace human judgment. It augments it:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="rounded-xl border border-[#3b82f6]/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[#3b82f6] mb-3">AI handles</p>
            <ul className="space-y-2">
              {['First-round screening', 'Consistency', 'Documentation'].map((it) => (
                <li key={it} className="flex gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-green/25 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-3">Humans handle</p>
            <ul className="space-y-2">
              {['Final decisions', 'Nuanced judgment', 'Relationship'].map((it) => (
                <li key={it} className="flex gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-xl bg-ink/5 p-5">
          <div className="space-y-2 text-sm text-ink-light">
            <p><strong className="text-ink">AI consistency</strong> + human insight</p>
            <p><strong className="text-ink">AI scale</strong> + human judgment</p>
            <p><strong className="text-ink">AI documentation</strong> + human accountability</p>
          </div>
        </div>
      </section>

      {/* ── 7. MEASURING IMPROVEMENT ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">7</span>
          <h2 className="text-2xl font-extrabold text-ink">Measuring Improvement</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.1 Baseline Metrics</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">Before implementing structure, measure:</p>

        <div className="space-y-4 mb-8">
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-paper-off border-b border-gray-200 px-5 py-3">
              <p className="text-sm font-bold text-ink">Inter-rater reliability</p>
              <p className="text-xs text-ink-muted">How often do two evaluators agree on the same candidate?</p>
            </div>
            <div className="px-5 py-4">
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { label: 'Poor', range: '<65%', color: 'brand-red' },
                  { label: 'Acceptable', range: '65\u201380%', color: 'brand-orange' },
                  { label: 'Good', range: '80\u201390%', color: 'brand-green' },
                  { label: 'Excellent', range: '>90%', color: 'brand-green' },
                ].map((item) => (
                  <div key={item.label} className={`rounded-lg bg-${item.color}/10 p-2`}>
                    <p className={`font-mono text-sm font-bold text-${item.color}`}>{item.range}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-paper-off border-b border-gray-200 px-5 py-3">
              <p className="text-sm font-bold text-ink">Predictive validity</p>
              <p className="text-xs text-ink-muted">How well do interview scores predict job performance?</p>
            </div>
            <div className="px-5 py-4 space-y-1 text-sm text-ink-light">
              <p>Track 6-month and 12-month performance ratings</p>
              <p>Correlate with interview scores</p>
              <p>Unstructured baseline: expect <span className="font-mono font-bold text-brand-orange">r &asymp; 0.20&ndash;0.35</span></p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-paper-off border-b border-gray-200 px-5 py-3">
              <p className="text-sm font-bold text-ink">Diversity impact</p>
              <p className="text-xs text-ink-muted">Are interview outcomes equitable across demographics?</p>
            </div>
            <div className="px-5 py-4 space-y-1 text-sm text-ink-light">
              <p>Compare pass rates by gender, background, college tier</p>
              <p>Identify potential bias patterns</p>
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.2 Post-Implementation Metrics</h3>
        <div className="grid gap-3 sm:grid-cols-2 mb-8">
          {[
            { metric: 'Inter-rater reliability', delta: '+10\u201320 pp', good: true },
            { metric: 'Predictive validity', delta: 'r \u2192 0.40\u20130.50', good: true },
            { metric: 'Interviewer compliance', delta: '% following format', good: true },
            { metric: 'Time efficiency', delta: 'Usually reduces', good: true },
          ].map((row) => (
            <div key={row.metric} className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">{row.metric}</p>
              <p className="font-mono font-bold text-brand-green">{row.delta}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.3 Continuous Calibration</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          Structure isn&rsquo;t set-and-forget. Ongoing calibration:
        </p>
        <div className="space-y-2">
          {[
            { h: 'Quarterly rubric review.', b: 'Are rubrics discriminating between good and weak candidates?' },
            { h: 'Annual question validation.', b: 'Do questions still predict performance for current roles?' },
            { h: 'Interviewer refresher training.', b: 'Prevent drift back to unstructured habits.' },
            { h: 'Outcome tracking.', b: 'Continuously correlate interview scores with performance data.' },
          ].map((item) => (
            <div key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
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
          The research is settled: structured interviews predict job performance <strong className="text-ink">significantly better</strong> than unstructured interviews.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-6">
          The gap persists because structure requires discipline that organizations often lack. Interviewers prefer autonomy. Rubrics require work. Calibration takes time. Technology can help close the gap.
        </p>

        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          For organizations serious about hiring better:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          {[
            { n: '01', title: 'Develop structured questions', desc: 'For each role, with behavioral and technical components.' },
            { n: '02', title: 'Create anchored rubrics', desc: 'Defining good and bad answers on each question.' },
            { n: '03', title: 'Train interviewers', desc: 'On why structure matters and how to apply it.' },
            { n: '04', title: 'Enforce the process', desc: 'Through templates, audits, and calibration.' },
            { n: '05', title: 'Measure outcomes', desc: 'To validate improvement over time.' },
            { n: '06', title: 'Consider technology', desc: 'To scale structure reliably.' },
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

        <div className="rounded-2xl bg-ink p-6 text-white">
          <p className="text-base font-semibold leading-relaxed text-center">
            The evidence points one direction. The question is whether you&rsquo;ll follow it.
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
            { authors: 'Huffcutt, A. I., & Arthur, W.', year: '1994', title: 'Hunter and Hunter (1984) revisited: Interview validity for entry-level jobs', journal: 'Journal of Applied Psychology', vol: '79(2), 184\u2013190.' },
            { authors: 'Levashina, J., Hartwell, C. J., Morgeson, F. P., & Campion, M. A.', year: '2014', title: 'The structured employment interview: Narrative and quantitative review of the research literature', journal: 'Personnel Psychology', vol: '67(1), 241\u2013293.' },
            { authors: 'McDaniel, M. A., Whetzel, D. L., Schmidt, F. L., & Maurer, S. D.', year: '1994', title: 'The validity of employment interviews: A comprehensive review and meta-analysis', journal: 'Journal of Applied Psychology', vol: '79(4), 599\u2013616.' },
            { authors: 'Schmidt, F. L., & Hunter, J. E.', year: '1998', title: 'The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings', journal: 'Psychological Bulletin', vol: '124(2), 262\u2013274.' },
            { authors: 'Campion, M. A., Palmer, D. K., & Campion, J. E.', year: '1997', title: 'A review of structure in the selection interview', journal: 'Personnel Psychology', vol: '50(3), 655\u2013702.' },
            { authors: 'Highhouse, S.', year: '2008', title: 'Stubborn reliance on intuition and subjectivity in employee selection', journal: 'Industrial and Organizational Psychology', vol: '1(3), 333\u2013342.' },
          ].map((ref, i) => (
            <li key={i} className="flex gap-4 text-sm text-ink-light rounded-lg border border-gray-100 bg-paper-off px-4 py-3">
              <span className="shrink-0 font-mono text-xs text-ink-muted w-4">{i + 1}.</span>
              <p>
                <strong className="text-ink">{ref.authors}</strong> ({ref.year}). {ref.title}.{' '}
                <em>{ref.journal}</em>, {ref.vol}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── FOOTER ── */}
      <div className="border-t border-gray-200 pt-8 text-center">
        <p className="text-sm text-ink-muted">
          For questions about implementing structured interviews in your organization, contact{' '}
          <a href="mailto:research@layersrank.com" className="font-medium text-[#3b82f6] hover:underline">
            research@layersrank.com
          </a>
        </p>
        <p className="mt-3 text-xs text-ink-muted">&copy; 2025 LayersRank by The Algorithm. All rights reserved.</p>
      </div>
    </>
  );
}
