export default function Whitepaper() {
  return (
    <>
      {/* ── TITLE PAGE ── */}
      <div className="mb-16 border-b border-gray-200 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-full bg-[#3b82f6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">
            Technical Whitepaper
          </span>
          <span className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-green">
            v1.0
          </span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-tight">
          The Science Behind<br />
          <span className="text-[#3b82f6]">Confidence Scoring</span>
        </h1>
        <p className="mt-4 text-xl text-ink-light max-w-2xl">
          How TR-q-ROFNs transform candidate evaluation from guesswork into quantified, uncertainty-aware decisions.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { label: 'Pages', value: '20' },
            { label: 'Audience', value: 'Technical' },
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
            Traditional interview scoring produces single numbers that hide uncertainty. A candidate who
            scores <strong className="text-ink">74</strong> might be a solid 74, or might be anywhere from 60 to 88
            depending on which evaluator you ask. This paper introduces a mathematical framework for quantifying
            evaluation confidence using <strong className="text-ink">Type-Reduced q-Rung Orthopair Fuzzy Numbers (TR-q-ROFNs)</strong>.
            We explain the theoretical foundations, demonstrate practical applications in hiring, and present
            validation data showing how confidence-aware scoring improves hiring decisions.
          </p>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <nav className="mb-16 rounded-2xl bg-paper-off border border-gray-200 p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-5">Table of Contents</p>
        <ol className="space-y-2">
          {[
            'Introduction: The Problem with Traditional Scoring',
            'Theoretical Foundations',
            'The TR-q-ROFN Framework',
            'Application to Candidate Evaluation',
            'Implementation Architecture',
            'Validation and Results',
            'Limitations and Future Work',
            'Conclusion',
            'References',
            'Appendix: Mathematical Proofs',
          ].map((item, i) => (
            <li key={i} className="flex items-baseline gap-4 text-sm">
              <span className="shrink-0 font-mono text-xs text-ink-muted w-5">{i + 1}.</span>
              <span className="text-ink-light hover:text-ink transition-colors">{item}</span>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── SECTION HELPER ── */}
      {/* Sections use a consistent header pattern with a left accent bar */}

      {/* ── 1. INTRODUCTION ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">1</span>
          <h2 className="text-2xl font-extrabold text-ink">Introduction: The Problem with Traditional Scoring</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">1.1 The Illusion of Precision</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          When an interview panel reports that a candidate scored <strong className="text-ink font-mono bg-ink/5 px-1.5 py-0.5 rounded">74 / 100</strong>, this number carries an
          implicit claim of precision — that we know, with confidence, this candidate&rsquo;s quality is exactly 74.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          This is almost never true. The 74 is typically an average of subjective judgments that may vary significantly.
          Interviewer A might have given <strong className="text-ink">82</strong>. Interviewer B might have given <strong className="text-ink">66</strong>.
          The average is 74 — but what does that number actually mean?
        </p>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">1.2 Sources of Evaluation Uncertainty</h3>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {[
            { term: 'Evaluator variance', color: 'brand-red', desc: 'Different evaluators, applying the same criteria, reach different conclusions. Research shows 15–25% disagreement rates between panels evaluating identical candidates.' },
            { term: 'Question ambiguity', color: 'brand-orange', desc: 'Some questions elicit clearer signals than others. A technical implementation question produces more reliable signal than a hypothetical behavioral question.' },
            { term: 'Response ambiguity', color: 'brand-yellow', desc: 'Candidate responses vary in clarity. Some clearly demonstrate competence; others are genuinely ambiguous depending on interpretation.' },
            { term: 'Context dependence', color: 'brand-green', desc: 'The same response can indicate different things for different roles or contexts. Evaluation criteria are not perfectly transferable.' },
          ].map((item) => (
            <div key={item.term} className={`rounded-xl border border-${item.color}/20 bg-${item.color}/5 p-4`}>
              <p className={`text-sm font-bold text-${item.color} mb-1`}>{item.term}</p>
              <p className="text-sm text-ink-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">1.3 The Cost of Hidden Uncertainty</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-3">
          When scoring systems hide uncertainty, decision-makers cannot calibrate their confidence appropriately.
          They treat a contested 74 the same as a solid 74, leading to:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { h: 'False confidence in marginal decisions.', b: 'Borderline candidates get the same treatment as clear cases.' },
            { h: 'Inability to prioritize investigation.', b: 'Without knowing which scores are uncertain, evaluators cannot focus follow-up on the right candidates.' },
            { h: 'Poor audit trails.', b: 'After-the-fact review cannot distinguish reliable decisions from lucky guesses.' },
            { h: 'Systematic bias toward extremes.', b: 'Aggregation of divergent opinions produces moderate scores that mask underlying disagreement.' },
          ].map((item) => (
            <li key={item.h} className="flex gap-3 text-[15px] rounded-lg border border-gray-100 bg-paper-off p-3">
              <span className="mt-0.5 shrink-0 h-4 w-4 rounded-full bg-brand-red/20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <span className="text-ink-light"><strong className="text-ink">{item.h}</strong> {item.b}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">1.4 Our Approach</h3>
        <div className="rounded-xl border-l-4 border-[#3b82f6] bg-[#3b82f6]/5 p-5">
          <p className="text-[15px] leading-relaxed text-ink-light">
            Rather than reporting <span className="font-mono text-ink">&ldquo;74,&rdquo;</span> we report{' '}
            <span className="font-mono font-bold text-ink">&ldquo;74 &plusmn; 4, 87% confidence&rdquo;</span> — providing
            decision-makers with the information they need to interpret scores appropriately. The framework is based on
            Type-Reduced q-Rung Orthopair Fuzzy Numbers (<strong className="text-ink">TR-q-ROFNs</strong>), a mathematical
            structure that naturally represents partial and uncertain information.
          </p>
        </div>
      </section>

      {/* ── 2. THEORETICAL FOUNDATIONS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">2</span>
          <h2 className="text-2xl font-extrabold text-ink">Theoretical Foundations</h2>
        </div>

        {/* Evolution timeline */}
        <div className="relative pl-6 border-l-2 border-gray-200 space-y-8 mb-8">
          {[
            {
              year: '1965',
              who: 'Zadeh',
              title: 'Classical Fuzzy Sets',
              desc: 'Elements have membership degree μ ∈ [0, 1]. A candidate might have μ = 0.74 membership in the "strong candidate" set. Better than binary, but cannot represent confidence in the assessment.',
              limit: null,
            },
            {
              year: '1986',
              who: 'Atanassov',
              title: 'Intuitionistic Fuzzy Sets',
              desc: 'Assigns each element a pair (μ, ν) where μ = membership, ν = non-membership, and μ + ν ≤ 1. The quantity π = 1 − μ − ν represents hesitation or indeterminacy.',
              limit: 'The constraint μ + ν ≤ 1 restricts expressiveness — cannot represent strong simultaneous evidence both for and against.',
            },
            {
              year: '2017',
              who: 'Yager',
              title: 'q-Rung Orthopair Fuzzy Sets',
              desc: 'Relaxes the constraint to μᵍ + νᵍ ≤ 1, where q ≥ 1. This dramatically expands the representable space for complex, conflicting signals.',
              limit: null,
            },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-8 flex h-4 w-4 items-center justify-center rounded-full bg-[#3b82f6] ring-4 ring-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#3b82f6]">{step.year}</span>
                  <span className="text-xs text-ink-muted">·</span>
                  <span className="text-xs text-ink-muted">{step.who}</span>
                </div>
                <h4 className="font-bold text-ink mb-1">{step.title}</h4>
                <p className="text-sm text-ink-light leading-relaxed">{step.desc}</p>
                {step.limit && (
                  <div className="mt-3 rounded-lg border border-brand-orange/30 bg-orange-50/50 px-3 py-2 text-xs text-ink-light">
                    <strong className="text-brand-orange">Limitation: </strong>{step.limit}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mt-10 mb-3">2.4 – 2.5 Why q = 2 (Pythagorean Fuzzy Sets)?</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          With q = 2, the constraint becomes <span className="font-mono font-bold text-ink">μ² + ν² ≤ 1</span> — a unit
          circle. This allows representing conflicting signals that are impossible under classical intuitionistic sets:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 font-mono text-sm">
          <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-4">
            <p className="text-xs font-bold text-brand-red uppercase tracking-wide mb-2">Intuitionistic (q=1) — Invalid</p>
            <p className="text-ink">μ = 0.8, ν = 0.5</p>
            <p className="mt-1 text-ink-muted">0.8 + 0.5 = 1.3 &gt; 1 ✗</p>
          </div>
          <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-4">
            <p className="text-xs font-bold text-brand-green uppercase tracking-wide mb-2">Pythagorean (q=2) — Valid</p>
            <p className="text-ink">μ = 0.8, ν = 0.5</p>
            <p className="mt-1 text-ink-muted">0.64 + 0.25 = 0.89 ≤ 1 ✓</p>
          </div>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
          In candidate evaluation, we often encounter conflicting signals — strong technical skills (high μ) alongside
          concerning communication patterns (moderate ν). Pythagorean fuzzy sets represent this naturally.
        </p>
      </section>

      {/* ── 3. TR-q-ROFN FRAMEWORK ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">3</span>
          <h2 className="text-2xl font-extrabold text-ink">The TR-q-ROFN Framework</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.1 Definition</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">A Type-Reduced q-Rung Orthopair Fuzzy Number is a triple:</p>

        <div className="rounded-2xl border-2 border-[#3b82f6]/30 bg-gradient-to-br from-[#3b82f6]/5 to-transparent p-8 text-center mb-6">
          <p className="font-mono text-3xl font-extrabold text-ink tracking-tight">A = (T, F, R)</p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { letter: 'T', label: 'Truth', color: 'brand-green', desc: 'Evidence supporting positive evaluation' },
              { letter: 'F', label: 'Falsity', color: 'brand-red', desc: 'Evidence supporting negative evaluation' },
              { letter: 'R', label: 'Refusal', color: 'brand-orange', desc: 'Degree of evaluation uncertainty' },
            ].map((c) => (
              <div key={c.letter} className={`rounded-xl border border-${c.color}/30 bg-${c.color}/10 p-3`}>
                <p className={`font-mono text-2xl font-extrabold text-${c.color}`}>{c.letter}</p>
                <p className="text-xs font-bold text-ink mt-1">{c.label}</p>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 font-mono text-sm text-ink-light">subject to: <strong className="text-ink">T² + F² + R² ≤ 1</strong></p>
        </div>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">3.3 Key Insight: Refusal as a Decision Signal</h3>
        <div className="rounded-xl border border-brand-orange/25 bg-orange-50/30 p-5 mb-6">
          <p className="text-sm font-bold text-brand-orange uppercase tracking-wide mb-3">Why R matters</p>
          <p className="text-[15px] leading-relaxed text-ink-light mb-3">
            Traditional scoring has no analog to R — it forces a verdict even when evidence is ambiguous.
            The Refusal degree provides a principled way to say <em>&ldquo;we&rsquo;re not sure.&rdquo;</em>
          </p>
          <ul className="space-y-2">
            {[
              { trigger: 'R > threshold', action: 'Triggers adaptive follow-up questions to probe the uncertainty' },
              { trigger: 'High R', action: 'Routes case to experienced human evaluators for review' },
              { trigger: 'Any R', action: 'Adjusts final decision confidence to reflect actual reliability' },
            ].map((row) => (
              <li key={row.trigger} className="flex gap-3 text-sm">
                <span className="shrink-0 rounded-md bg-brand-orange/15 px-2 py-0.5 font-mono text-xs font-bold text-brand-orange">{row.trigger}</span>
                <span className="text-ink-light">{row.action}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">3.4 Computing T, F, R from Multiple Models</h3>
        <p className="text-[15px] leading-relaxed text-ink-light mb-4">
          LayersRank evaluates each response using three complementary models, each producing its own (T, F, R) triple:
        </p>
        <div className="grid gap-3 sm:grid-cols-3 mb-4">
          {[
            { name: 'Semantic', desc: 'Embedding-based comparison to reference responses' },
            { name: 'Lexical', desc: 'Keyword and structure analysis' },
            { name: 'LLM', desc: 'Reasoning quality assessment' },
          ].map((m) => (
            <div key={m.name} className="rounded-xl border border-gray-200 bg-paper-off p-4 text-center">
              <p className="text-sm font-bold text-ink">{m.name}</p>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-ink/5 p-5">
          <div className="space-y-2 text-sm text-ink-light">
            <p><strong className="text-ink font-mono">T_agg</strong> = Weighted avg of individual T values, adjusted for model agreement</p>
            <p><strong className="text-ink font-mono">F_agg</strong> = Weighted avg of individual F values, adjusted for model agreement</p>
            <p><strong className="text-ink font-mono">R_agg</strong> = √(1 − T² − F²) × (1 + σ) where σ is normalized std-dev across models</p>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">3.5 Score and Confidence Derivation</h3>
        <div className="grid gap-3 sm:grid-cols-3 mb-4">
          {[
            { label: 'Score', formula: 'S = 100 × T / (T + F + ε)', sub: 'ε prevents division by zero' },
            { label: 'Confidence', formula: 'C = 1 − R', sub: 'Direct from refusal degree' },
            { label: 'Interval', formula: '± (1 − C) × k', sub: 'k = 10–15 scaling factor' },
          ].map((f) => (
            <div key={f.label} className="rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[#3b82f6] mb-2">{f.label}</p>
              <p className="font-mono text-sm font-bold text-ink">{f.formula}</p>
              <p className="text-xs text-ink-muted mt-1">{f.sub}</p>
            </div>
          ))}
        </div>

        {/* Worked example */}
        <div className="rounded-2xl border-2 border-[#3b82f6]/20 bg-[#3b82f6]/5 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-4">Worked Example</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-ink-muted uppercase tracking-wide font-semibold mb-2">Input</p>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center justify-between rounded-lg bg-brand-green/10 px-3 py-1.5">
                  <span className="font-bold text-brand-green">T</span><span className="text-ink">0.75</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-brand-red/10 px-3 py-1.5">
                  <span className="font-bold text-brand-red">F</span><span className="text-ink">0.15</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-brand-orange/10 px-3 py-1.5">
                  <span className="font-bold text-brand-orange">R</span><span className="text-ink">0.20</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-ink-muted uppercase tracking-wide font-semibold mb-2">Output</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-white border border-gray-200 px-3 py-1.5">
                  <span className="text-ink-muted">Score</span><span className="font-mono font-bold text-ink">83.3</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white border border-gray-200 px-3 py-1.5">
                  <span className="text-ink-muted">Confidence</span><span className="font-mono font-bold text-ink">80%</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white border border-gray-200 px-3 py-1.5">
                  <span className="text-ink-muted">Interval</span><span className="font-mono font-bold text-ink">± 3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-white border border-[#3b82f6]/20 px-5 py-3 text-center">
            <p className="font-mono text-lg font-extrabold text-ink">83 ± 3 &nbsp;·&nbsp; <span className="text-[#3b82f6]">80% confidence</span></p>
          </div>
        </div>
      </section>

      {/* ── 4. APPLICATION TO CANDIDATE EVALUATION ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">4</span>
          <h2 className="text-2xl font-extrabold text-ink">Application to Candidate Evaluation</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">4.1 Multi-Dimensional Assessment</h3>
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {[
            { dim: 'Technical', weight: '40%', color: '[#3b82f6]', items: ['System design', 'Debugging', 'Depth of knowledge', 'Trade-off reasoning'] },
            { dim: 'Behavioral', weight: '35%', color: 'brand-green', items: ['Communication', 'Collaboration', 'Feedback response', 'Team dynamics'] },
            { dim: 'Contextual', weight: '25%', color: 'brand-orange', items: ['Role understanding', 'Motivation', 'Career trajectory', 'Culture alignment'] },
          ].map((d) => (
            <div key={d.dim} className={`rounded-xl border border-${d.color}/25 p-4`}>
              <div className="flex items-center justify-between mb-3">
                <p className={`font-bold text-${d.color}`}>{d.dim}</p>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-mono font-semibold text-ink-muted">{d.weight}</span>
              </div>
              <ul className="space-y-1">
                {d.items.map((it) => (
                  <li key={it} className="text-xs text-ink-light flex gap-1.5 items-center">
                    <span className={`h-1 w-1 rounded-full bg-${d.color} shrink-0`} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">4.2 Question-Level Scoring</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <div className="bg-paper-off border-b border-gray-200 px-5 py-3">
            <p className="text-xs font-semibold text-ink-muted">Q1 — &ldquo;Walk through your approach to system design...&rdquo;</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Model</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-brand-green text-xs uppercase tracking-wide">T</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-brand-red text-xs uppercase tracking-wide">F</th>
                  <th className="text-right px-5 py-2.5 font-semibold text-brand-orange text-xs uppercase tracking-wide">R</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { model: 'Semantic', t: '0.82', f: '0.10', r: '0.15' },
                  { model: 'Lexical', t: '0.78', f: '0.12', r: '0.18' },
                  { model: 'LLM', t: '0.85', f: '0.08', r: '0.12' },
                ].map((row) => (
                  <tr key={row.model} className="hover:bg-paper-off transition-colors">
                    <td className="px-5 py-2.5 font-medium text-ink">{row.model}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-brand-green">{row.t}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-brand-red">{row.f}</td>
                    <td className="px-5 py-2.5 text-right font-mono text-brand-orange">{row.r}</td>
                  </tr>
                ))}
                <tr className="bg-ink/5 font-bold">
                  <td className="px-5 py-2.5 text-ink">Aggregated</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-green">0.82</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-red">0.10</td>
                  <td className="px-5 py-2.5 text-right font-mono text-brand-orange">0.16</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-t border-gray-200 bg-brand-green/5 px-5 py-2.5">
            <p className="text-sm font-bold text-brand-green">Score: 89 ± 2 &nbsp;·&nbsp; 84% confidence</p>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">4.3 Adaptive Follow-Up Trigger</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-3">
          <div className="bg-paper-off border-b border-gray-200 px-5 py-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-ink-muted">Q2 — &ldquo;Tell me about a time you received critical feedback...&rdquo;</p>
            <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2 py-0.5 text-xs font-bold text-brand-orange">High R</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-paper-off">
                  <th className="text-left px-5 py-2.5 font-semibold text-ink-muted text-xs uppercase tracking-wide">Model</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-brand-green text-xs uppercase tracking-wide">T</th>
                  <th className="text-right px-4 py-2.5 font-semibold text-brand-red text-xs uppercase tracking-wide">F</th>
                  <th className="text-right px-5 py-2.5 font-semibold text-brand-orange text-xs uppercase tracking-wide">R</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { model: 'Semantic', t: '0.55', f: '0.40', r: '0.35' },
                  { model: 'Lexical', t: '0.62', f: '0.35', r: '0.30' },
                  { model: 'LLM', t: '0.48', f: '0.45', r: '0.40' },
                ].map((row) => (
                  <tr key={row.model} className="hover:bg-paper-off transition-colors">
                    <td className="px-5 py-2.5 font-medium text-ink">{row.model}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-brand-green">{row.t}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-brand-red">{row.f}</td>
                    <td className="px-5 py-2.5 text-right font-mono text-brand-orange">{row.r}</td>
                  </tr>
                ))}
                <tr className="bg-ink/5 font-bold">
                  <td className="px-5 py-2.5 text-ink">Aggregated</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-green">0.55</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-red">0.40</td>
                  <td className="px-5 py-2.5 text-right font-mono font-bold text-brand-orange">0.35</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-t border-brand-orange/30 bg-brand-orange/5 px-5 py-2.5 flex items-center gap-2">
            <span className="rounded bg-brand-orange px-2 py-0.5 text-xs font-bold text-white">R = 0.35 &gt; 0.25</span>
            <p className="text-sm font-bold text-brand-orange">Follow-up triggered</p>
          </div>
        </div>

        {/* Follow-up question */}
        <div className="my-3 rounded-xl border border-dashed border-gray-300 bg-paper-off px-5 py-4 text-sm italic text-ink-light">
          Follow-up: &ldquo;You mentioned initially feeling defensive. What helps you move past that reaction now?&rdquo;
        </div>

        {/* After follow-up */}
        <div className="rounded-xl border border-brand-green/25 overflow-hidden">
          <div className="bg-brand-green/5 border-b border-brand-green/20 px-5 py-3">
            <p className="text-xs font-bold text-brand-green uppercase tracking-wide">After follow-up</p>
          </div>
          <div className="px-5 py-4">
            <div className="flex items-center gap-6 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-brand-green font-bold">T</span>
                <span className="text-ink">0.72</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-red font-bold">F</span>
                <span className="text-ink">0.18</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-orange font-bold">R</span>
                <span className="text-ink font-bold">0.18</span>
                <span className="rounded bg-brand-green/15 px-1.5 py-0.5 text-xs text-brand-green font-semibold">↓ from 0.35</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg bg-brand-green/5 border border-brand-green/20 px-3 py-2 text-center">
                <p className="text-xs text-ink-muted">Score</p>
                <p className="font-mono font-bold text-ink">80 ± 3</p>
              </div>
              <div className="rounded-lg bg-brand-green/5 border border-brand-green/20 px-3 py-2 text-center">
                <p className="text-xs text-ink-muted">Confidence</p>
                <p className="font-mono font-bold text-brand-green">82%</p>
                <p className="text-xs text-brand-green">↑ from 65%</p>
              </div>
              <div className="rounded-lg bg-brand-green/5 border border-brand-green/20 px-3 py-2 text-center">
                <p className="text-xs text-ink-muted">R reduced</p>
                <p className="font-mono font-bold text-ink">50%</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mt-8 mb-3">4.4 – 4.5 Dimension and Final Score Aggregation</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-paper-off">
                <th className="text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Dimension</th>
                <th className="text-right px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Score</th>
                <th className="text-right px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Confidence</th>
                <th className="text-right px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { dim: 'Technical', score: '83 ± 3', conf: '85%', w: '0.40' },
                { dim: 'Behavioral', score: '78 ± 4', conf: '80%', w: '0.35' },
                { dim: 'Contextual', score: '81 ± 3', conf: '88%', w: '0.25' },
              ].map((row) => (
                <tr key={row.dim} className="hover:bg-paper-off">
                  <td className="px-5 py-2.5 font-medium text-ink">{row.dim}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-ink">{row.score}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-brand-green">{row.conf}</td>
                  <td className="px-5 py-2.5 text-right font-mono text-ink-muted">{row.w}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-t-2 border-ink bg-ink text-white px-5 py-3 flex items-center justify-between">
            <p className="font-bold text-sm">Final Score</p>
            <p className="font-mono font-extrabold text-lg">80.6 ± 3 <span className="text-[#3b82f6] ml-3 text-base">84% confidence</span></p>
          </div>
        </div>
      </section>

      {/* ── 5. IMPLEMENTATION ARCHITECTURE ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">5</span>
          <h2 className="text-2xl font-extrabold text-ink">Implementation Architecture</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-5">5.1 System Overview</h3>

        {/* Visual flow diagram — replaces ASCII art */}
        <div className="rounded-2xl border border-gray-200 bg-paper-off p-6 mb-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="rounded-xl border-2 border-[#3b82f6] bg-[#3b82f6]/10 px-8 py-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#3b82f6] mb-0.5">Input</p>
              <p className="font-bold text-ink">Candidate Response</p>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center my-1">
              <div className="h-6 w-0.5 bg-gray-300" />
              <div className="h-0 w-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400" />
            </div>

            {/* Evaluation pipeline box */}
            <div className="w-full max-w-lg rounded-2xl border-2 border-gray-300 bg-white p-4">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-muted mb-4">Evaluation Pipeline</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Semantic', color: '[#3b82f6]' },
                  { name: 'Lexical', color: 'brand-green' },
                  { name: 'LLM', color: 'brand-orange' },
                ].map((m) => (
                  <div key={m.name} className={`rounded-xl border border-${m.color}/30 bg-${m.color}/5 p-3 text-center`}>
                    <p className={`text-xs font-bold text-${m.color} mb-1`}>{m.name} Model</p>
                    <p className="font-mono text-xs text-ink-muted">(T, F, R)</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center my-1">
              <div className="h-6 w-0.5 bg-gray-300" />
              <div className="h-0 w-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400" />
            </div>

            {/* Aggregation box */}
            <div className="w-full max-w-lg rounded-2xl border-2 border-[#3b82f6]/40 bg-[#3b82f6]/5 p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-1">TR-q-ROFN Aggregation</p>
              <p className="text-xs text-ink-muted">Compute aggregated (T, F, R) · Check R against threshold</p>
            </div>

            {/* Branching arrow */}
            <div className="flex flex-col items-center my-1">
              <div className="h-6 w-0.5 bg-gray-300" />
              <div className="h-0 w-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400" />
            </div>

            {/* Branch */}
            <div className="w-full max-w-lg grid grid-cols-2 gap-4">
              <div className="rounded-xl border-2 border-brand-green/40 bg-brand-green/5 p-4 text-center">
                <p className="font-mono text-xs font-bold text-brand-green mb-2">R ≤ 0.25</p>
                <p className="text-xs font-semibold text-ink mb-1">Score + Confidence</p>
                <p className="text-xs text-ink-muted">Report result to decision-maker</p>
              </div>
              <div className="rounded-xl border-2 border-brand-orange/40 bg-brand-orange/5 p-4 text-center">
                <p className="font-mono text-xs font-bold text-brand-orange mb-2">R &gt; 0.25</p>
                <p className="text-xs font-semibold text-ink mb-1">Trigger Follow-Up</p>
                <p className="text-xs text-ink-muted">Re-evaluate with targeted question</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-base font-bold text-ink mb-4">5.2 Model Specifications</h3>
        <div className="space-y-4 mb-8">
          {[
            {
              name: 'Semantic Model',
              arch: 'SBERT (sentence-transformers)',
              fn: 'Computes cosine similarity between candidate response embedding and reference response embeddings.',
              t: 'Similarity to positive reference responses',
              f: 'Similarity to negative reference responses',
              r: 'Distance from all references',
              color: '[#3b82f6]',
            },
            {
              name: 'Lexical Model',
              arch: 'TF-IDF with domain-specific vocabulary',
              fn: 'Identifies presence of expected concepts, structure, and keywords.',
              t: 'Coverage of expected elements',
              f: 'Presence of concerning patterns (vagueness, contradiction)',
              r: 'Coverage uncertainty (partial matches)',
              color: 'brand-green',
            },
            {
              name: 'LLM Model',
              arch: 'Instruction-tuned LLM (configurable)',
              fn: 'Holistic evaluation of response quality, reasoning, and depth.',
              t: 'Explicit quality assessment on rubric',
              f: 'Explicit concern identification',
              r: "Model's stated confidence / hedging language",
              color: 'brand-orange',
            },
          ].map((m) => (
            <div key={m.name} className={`rounded-xl border border-${m.color}/25 overflow-hidden`}>
              <div className={`border-b border-${m.color}/20 bg-${m.color}/5 px-5 py-3 flex items-center justify-between`}>
                <div>
                  <p className={`font-bold text-${m.color}`}>{m.name}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{m.arch}</p>
                </div>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-ink-light mb-3">{m.fn}</p>
                <div className="grid gap-2 sm:grid-cols-3 text-xs">
                  <div className="rounded-lg bg-brand-green/10 px-3 py-2">
                    <span className="font-bold text-brand-green">T: </span>
                    <span className="text-ink-light">{m.t}</span>
                  </div>
                  <div className="rounded-lg bg-brand-red/10 px-3 py-2">
                    <span className="font-bold text-brand-red">F: </span>
                    <span className="text-ink-light">{m.f}</span>
                  </div>
                  <div className="rounded-lg bg-brand-orange/10 px-3 py-2">
                    <span className="font-bold text-brand-orange">R: </span>
                    <span className="text-ink-light">{m.r}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">5.3 Threshold Configuration</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-paper-off border-b border-gray-200">
                <th className="text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">R Threshold</th>
                <th className="text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-paper-off">
                <td className="px-5 py-3 font-mono text-sm text-ink-muted">0.15 – 0.20</td>
                <td className="px-5 py-3 text-sm text-ink-light">More follow-ups · higher confidence · longer assessments</td>
              </tr>
              <tr className="bg-[#3b82f6]/5">
                <td className="px-5 py-3 font-mono text-sm font-bold text-[#3b82f6]">0.25 <span className="ml-2 rounded-full border border-[#3b82f6]/30 px-2 py-0.5 text-xs">default</span></td>
                <td className="px-5 py-3 text-sm text-ink-light">Balanced approach · ~20% of responses trigger follow-up</td>
              </tr>
              <tr className="hover:bg-paper-off">
                <td className="px-5 py-3 font-mono text-sm text-ink-muted">0.30 – 0.40</td>
                <td className="px-5 py-3 text-sm text-ink-light">Fewer follow-ups · faster assessments · more score uncertainty</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 6. VALIDATION AND RESULTS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">6</span>
          <h2 className="text-2xl font-extrabold text-ink">Validation and Results</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Candidate responses', value: '2,847', sub: 'across 12 role types' },
            { label: 'Expert assessors', value: '3', sub: 'per response, trained' },
            { label: 'Overall correlation', value: 'r = 0.83', sub: 'Pearson, expert vs model' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-200 bg-paper-off p-5 text-center">
              <p className="text-3xl font-extrabold text-ink">{stat.value}</p>
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mt-1">{stat.label}</p>
              <p className="text-xs text-ink-muted mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.2 Score Correlation</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-paper-off border-b border-gray-200">
                <th className="text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Dimension</th>
                <th className="text-right px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Pearson r</th>
                <th className="text-right px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Spearman ρ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { dim: 'Technical', r: '0.84', rho: '0.81' },
                { dim: 'Behavioral', r: '0.79', rho: '0.76' },
                { dim: 'Contextual', r: '0.82', rho: '0.79' },
              ].map((row) => (
                <tr key={row.dim} className="hover:bg-paper-off">
                  <td className="px-5 py-2.5 text-ink-light">{row.dim}</td>
                  <td className="px-4 py-2.5 text-right">
                    <span className="font-mono font-bold text-brand-green">{row.r}</span>
                  </td>
                  <td className="px-5 py-2.5 text-right font-mono text-ink-muted">{row.rho}</td>
                </tr>
              ))}
              <tr className="bg-ink/5 border-t-2 border-ink font-bold">
                <td className="px-5 py-2.5 text-ink">Overall</td>
                <td className="px-4 py-2.5 text-right font-mono text-brand-green">0.83</td>
                <td className="px-5 py-2.5 text-right font-mono text-ink-muted">0.80</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.3 Confidence Calibration</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-paper-off border-b border-gray-200">
                <th className="text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Stated Confidence</th>
                <th className="text-right px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Actual Accuracy</th>
                <th className="text-right px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Calibration Error</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { stated: '90 – 100%', actual: '93%', err: '+3%', color: 'brand-green' },
                { stated: '80 – 90%', actual: '84%', err: '+1%', color: 'brand-green' },
                { stated: '70 – 80%', actual: '73%', err: '−2%', color: 'brand-orange' },
                { stated: '60 – 70%', actual: '65%', err: '−1%', color: 'brand-green' },
                { stated: '< 60%', actual: '58%', err: '+2%', color: 'brand-green' },
              ].map((row) => (
                <tr key={row.stated} className="hover:bg-paper-off">
                  <td className="px-5 py-2.5 font-mono text-ink-muted text-xs">{row.stated}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-ink">{row.actual}</td>
                  <td className={`px-5 py-2.5 text-right font-mono font-bold text-${row.color}`}>{row.err}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.4 Adaptive Follow-Up Effectiveness</h3>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { metric: 'Avg R (uncertainty)', before: '0.38', after: '0.19', delta: '−50%', good: true },
            { metric: 'Avg Confidence', before: '62%', after: '81%', delta: '+31%', good: true },
            { metric: 'Expert correlation', before: '0.71', after: '0.86', delta: '+21%', good: true },
          ].map((row) => (
            <div key={row.metric} className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-4">
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-3">{row.metric}</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-ink-muted">Before</p>
                  <p className="font-mono font-semibold text-ink">{row.before}</p>
                </div>
                <div className="text-center px-2">
                  <p className="text-xs text-ink-muted">→</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ink-muted">After</p>
                  <p className="font-mono font-semibold text-ink">{row.after}</p>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="rounded-full bg-brand-green/20 px-3 py-1 font-mono text-sm font-bold text-brand-green">{row.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">6.5 Comparison to Traditional Scoring</h3>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-paper-off border-b border-gray-200">
                <th className="text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Method</th>
                <th className="text-right px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">Agreement</th>
                <th className="text-right px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">False +</th>
                <th className="text-right px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">False −</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-paper-off">
                <td className="px-5 py-3 text-ink-light">Traditional (avg score)</td>
                <td className="px-4 py-3 text-right font-mono text-ink-muted">78%</td>
                <td className="px-4 py-3 text-right font-mono text-brand-red">12%</td>
                <td className="px-5 py-3 text-right font-mono text-brand-red">10%</td>
              </tr>
              <tr className="bg-brand-green/5">
                <td className="px-5 py-3 font-bold text-ink flex items-center gap-2">
                  TR-q-ROFN <span className="rounded-full border border-brand-green/30 bg-brand-green/15 px-2 py-0.5 text-xs text-brand-green font-semibold">high confidence</span>
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-brand-green">91%</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-brand-green">4%</td>
                <td className="px-5 py-3 text-right font-mono font-bold text-brand-green">5%</td>
              </tr>
              <tr className="hover:bg-paper-off">
                <td className="px-5 py-3 text-ink-light">TR-q-ROFN (all cases)</td>
                <td className="px-4 py-3 text-right font-mono text-ink">84%</td>
                <td className="px-4 py-3 text-right font-mono text-ink-muted">8%</td>
                <td className="px-5 py-3 text-right font-mono text-ink-muted">8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 7. LIMITATIONS ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">7</span>
          <h2 className="text-2xl font-extrabold text-ink">Limitations and Future Work</h2>
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.1 Current Limitations</h3>
        <div className="space-y-3 mb-8">
          {[
            { term: 'Model dependence', desc: 'TR-q-ROFN quality depends on underlying model quality. Poor base models produce poor T, F, R values regardless of aggregation method.' },
            { term: 'Threshold sensitivity', desc: 'The R threshold is currently set empirically. More principled approaches to threshold selection are desirable.' },
            { term: 'Dimension independence assumption', desc: 'Current implementation treats dimensions independently. Cross-dimension correlations are not modeled.' },
            { term: 'Cold start', desc: 'Reference responses for new roles require initial human effort. Transfer learning across similar roles is an area for development.' },
          ].map((item) => (
            <div key={item.term} className="flex gap-4 rounded-xl border border-gray-200 bg-paper-off p-4">
              <span className="mt-0.5 shrink-0 rounded-full bg-brand-orange/20 p-1">
                <span className="block h-1.5 w-1.5 rounded-full bg-brand-orange" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{item.term}</p>
                <p className="text-sm text-ink-light mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-base font-bold text-ink mb-3">7.2 Future Work</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: 'Dynamic threshold adjustment', desc: 'Learn optimal R thresholds per role, question type, or candidate population.' },
            { title: 'Uncertainty decomposition', desc: 'Distinguish aleatory uncertainty (inherent randomness) from epistemic uncertainty (lack of information).' },
            { title: 'Longitudinal validation', desc: 'Correlate evaluation scores and confidence with post-hire performance outcomes.' },
            { title: 'Fairness analysis', desc: 'Examine whether R distributions differ across demographic groups in ways that could introduce bias.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-4">
              <p className="text-sm font-bold text-[#3b82f6]">{item.title}</p>
              <p className="text-sm text-ink-light mt-1">{item.desc}</p>
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
          Traditional interview scoring hides critical information about evaluation reliability. A score of <strong className="font-mono text-ink">74</strong> tells
          you nothing about whether that assessment is trustworthy.
        </p>
        <p className="text-[15px] leading-relaxed text-ink-light mb-6">
          TR-q-ROFNs provide a mathematical framework for making uncertainty explicit. By representing evaluations as
          (T, F, R) triples — capturing evidence for, evidence against, and evaluation uncertainty — we enable:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          {[
            { n: '01', title: 'Appropriate confidence calibration', desc: 'Decision-makers know when to trust scores and when to investigate.' },
            { n: '02', title: 'Adaptive assessment', desc: 'Uncertainty triggers follow-up questions that resolve ambiguity.' },
            { n: '03', title: 'Audit trails', desc: 'Every score has a documented confidence level and evidence basis.' },
            { n: '04', title: 'Improved decisions', desc: 'High-confidence scores are significantly more predictive of expert consensus.' },
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
          <p className="text-base font-semibold leading-relaxed">
            For organizations seeking to move from gut-feel hiring to evidence-based decisions,
            confidence-aware scoring is a <em>foundational capability</em>.
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
            { authors: 'Atanassov, K. T.', year: '1986', title: 'Intuitionistic fuzzy sets', journal: 'Fuzzy Sets and Systems', vol: '20(1), 87–96.' },
            { authors: 'Schmidt, F. L., & Hunter, J. E.', year: '1998', title: 'The validity and utility of selection methods in personnel psychology', journal: 'Psychological Bulletin', vol: '124(2), 262–274.' },
            { authors: 'Yager, R. R.', year: '2017', title: 'Generalized orthopair fuzzy sets', journal: 'IEEE Transactions on Fuzzy Systems', vol: '25(5), 1222–1230.' },
            { authors: 'Zadeh, L. A.', year: '1965', title: 'Fuzzy sets', journal: 'Information and Control', vol: '8(3), 338–353.' },
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

      {/* ── 10. APPENDIX ── */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white text-sm font-bold">10</span>
          <h2 className="text-2xl font-extrabold text-ink">Appendix: Mathematical Proofs</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              id: 'A.1',
              title: 'Constraint Satisfaction',
              theorem: 'For any valid TR-q-ROFN (T, F, R) with q = 2, the derived score S and confidence C satisfy 0 ≤ S ≤ 100 and 0 ≤ C ≤ 1.',
              proof: [
                'Given T² + F² + R² ≤ 1 and T, F, R ∈ [0, 1]:',
                'S = 100 × T / (T + F + ε)',
                'Since T ≥ 0 and T + F + ε > 0, S ≥ 0.',
                'Since T ≤ T + F + ε, S ≤ 100.',
                'C = 1 − R',
                'Since R ∈ [0, 1], C ∈ [0, 1]. □',
              ],
            },
            {
              id: 'A.2',
              title: 'Aggregation Consistency',
              theorem: 'The weighted aggregation of multiple TR-q-ROFNs produces a valid TR-q-ROFN.',
              proof: [
                'Let (T₁, F₁, R₁), ..., (Tₙ, Fₙ, Rₙ) be valid TR-q-ROFNs with weights w₁, ..., wₙ where Σwᵢ = 1.',
                'T_agg = Σ(wᵢ × Tᵢ)',
                'F_agg = Σ(wᵢ × Fᵢ)',
                'R_agg = √(1 − T_agg² − F_agg²) × adjustment_factor',
                'By convexity of the unit ball under L² norm, (T_agg, F_agg) lies within the feasible region. R_agg satisfies the constraint by construction. □',
              ],
            },
            {
              id: 'A.3',
              title: 'Confidence Calibration Property',
              theorem: 'Under reasonable model assumptions, C = 1 − R is calibrated: P(correct | C = c) ≈ c.',
              proof: [
                'The aggregated R reflects model disagreement. High disagreement (high R) occurs when:',
                '1. The response is genuinely ambiguous',
                '2. The models are uncertain',
                'In both cases, the probability of the score matching ground truth decreases.',
                'Empirical calibration (Section 6.3) confirms this property holds in practice. □',
              ],
            },
          ].map((thm) => (
            <div key={thm.id} className="rounded-xl border border-gray-200 bg-paper-off overflow-hidden">
              <div className="border-b border-gray-200 bg-white px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-2 py-0.5 font-mono text-xs font-bold text-[#3b82f6]">{thm.id}</span>
                  <h3 className="font-bold text-ink">{thm.title}</h3>
                </div>
                <p className="mt-2 text-sm text-ink-light"><strong className="text-ink">Theorem:</strong> {thm.theorem}</p>
              </div>
              <div className="px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-muted mb-2">Proof</p>
                <div className="space-y-1 font-mono text-sm text-ink bg-white rounded-lg border border-gray-200 p-4">
                  {thm.proof.map((line, i) => (
                    <p key={i} className={i === 0 ? 'text-ink-muted' : 'text-ink'}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="border-t border-gray-200 pt-8 text-center">
        <p className="text-sm text-ink-muted">
          For questions about this research or to discuss enterprise deployments, contact{' '}
          <a href="mailto:research@layersrank.com" className="font-medium text-[#3b82f6] hover:underline">
            research@layersrank.com
          </a>
        </p>
        <p className="mt-3 text-xs text-ink-muted">&copy; 2025 LayersRank by The Algorithm. All rights reserved.</p>
      </div>
    </>
  );
}
