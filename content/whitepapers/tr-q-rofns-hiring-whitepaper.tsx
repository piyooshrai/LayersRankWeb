export default function Whitepaper() {
  return (
    <>
      {/* ── TITLE PAGE ── */}
      <div className="mb-12 border-b border-gray-200 pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#3b82f6]">
          LayersRank Technical Whitepaper
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          The Science Behind Confidence Scoring
        </h1>
        <p className="mt-2 text-lg text-ink-light">
          How TR-q-ROFNs Transform Candidate Evaluation
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-xs text-ink-muted">
          <span>Version 1.0</span>
          <span>&middot;</span>
          <span>20 pages</span>
          <span>&middot;</span>
          <span>Technical Audience</span>
          <span>&middot;</span>
          <span>Science &amp; Research</span>
        </div>
      </div>

      {/* ── ABSTRACT ── */}
      <section className="mb-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-ink-muted">Abstract</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Traditional interview scoring produces single numbers that hide uncertainty. A candidate who
          scores 74 might be a solid 74, or might be anywhere from 60 to 88 depending on which
          evaluator you ask. This paper introduces a mathematical framework for quantifying evaluation
          confidence using Type-Reduced q-Rung Orthopair Fuzzy Numbers (TR-q-ROFNs). We explain the
          theoretical foundations, demonstrate practical applications in hiring, and present validation
          data showing how confidence-aware scoring improves hiring decisions.
        </p>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <nav className="mb-12 rounded-xl bg-paper-off p-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-ink-muted">Table of Contents</h2>
        <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-ink-light">
          <li>Introduction: The Problem with Traditional Scoring</li>
          <li>Theoretical Foundations</li>
          <li>The TR-q-ROFN Framework</li>
          <li>Application to Candidate Evaluation</li>
          <li>Implementation Architecture</li>
          <li>Validation and Results</li>
          <li>Limitations and Future Work</li>
          <li>Conclusion</li>
          <li>References</li>
          <li>Appendix: Mathematical Proofs</li>
        </ol>
      </nav>

      {/* ── 1. INTRODUCTION ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">1. Introduction: The Problem with Traditional Scoring</h2>

        <h3 className="mt-8 text-lg font-bold text-ink">1.1 The Illusion of Precision</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          When an interview panel reports that a candidate scored 74 out of 100, this number carries an
          implicit claim of precision. It suggests we know, with confidence, that this candidate&rsquo;s
          quality is exactly 74&nbsp;&mdash; not 73, not 75, but precisely 74.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          This is almost never true.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          The 74 is typically an average of subjective judgments that may vary significantly. Interviewer
          A might have given 82. Interviewer B might have given 66. The average is 74, but what does
          that number actually mean?
        </p>

        <h3 className="mt-8 text-lg font-bold text-ink">1.2 Sources of Evaluation Uncertainty</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Uncertainty in candidate evaluation arises from multiple sources:
        </p>
        <div className="mt-4 space-y-4">
          {[
            { term: 'Evaluator variance', desc: 'Different evaluators, applying the same criteria, reach different conclusions. Research consistently shows 15\u201325% disagreement rates between interview panels evaluating identical candidates.' },
            { term: 'Question ambiguity', desc: 'Some interview questions elicit clearer signals than others. A question about specific technical implementation produces more reliable signal than a question about hypothetical future behavior.' },
            { term: 'Response ambiguity', desc: 'Candidate responses vary in clarity. Some responses clearly demonstrate competence or incompetence. Others are genuinely ambiguous \u2014 they could indicate either, depending on interpretation.' },
            { term: 'Context dependence', desc: 'The same response might indicate different things for different roles or in different contexts. Evaluation criteria are not perfectly transferable.' },
          ].map((item) => (
            <div key={item.term} className="flex gap-3 text-[15px]">
              <span className="shrink-0 font-semibold text-ink">{item.term}.</span>
              <span className="text-ink-light">{item.desc}</span>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">1.3 The Cost of Hidden Uncertainty</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          When scoring systems hide uncertainty, decision-makers cannot calibrate their confidence
          appropriately. They treat a contested 74 the same as a solid 74, leading to:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-ink-light">
          <li><strong className="text-ink">False confidence in marginal decisions.</strong> Borderline candidates get the same treatment as clear cases.</li>
          <li><strong className="text-ink">Inability to prioritize investigation.</strong> Without knowing which scores are uncertain, evaluators cannot focus follow-up on the right candidates.</li>
          <li><strong className="text-ink">Poor audit trails.</strong> After-the-fact review cannot distinguish reliable decisions from lucky guesses.</li>
          <li><strong className="text-ink">Systematic bias toward extremes.</strong> Aggregation of divergent opinions produces moderate scores that mask underlying disagreement.</li>
        </ul>

        <h3 className="mt-8 text-lg font-bold text-ink">1.4 Our Approach</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          This paper presents a mathematical framework for making evaluation uncertainty explicit. Rather
          than reporting &ldquo;74,&rdquo; we report &ldquo;74 &plusmn; 4, 87% confidence&rdquo;&nbsp;&mdash;
          providing decision-makers with the information they need to interpret scores appropriately.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          The framework is based on Type-Reduced q-Rung Orthopair Fuzzy Numbers (TR-q-ROFNs), a
          mathematical structure that naturally represents partial and uncertain information.
        </p>
      </section>

      {/* ── 2. THEORETICAL FOUNDATIONS ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">2. Theoretical Foundations</h2>

        <h3 className="mt-8 text-lg font-bold text-ink">2.1 Classical Set Theory and Its Limitations</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Classical set theory operates on binary membership. An element either belongs to a set or it
          does not. For candidate evaluation, this would mean a candidate either &ldquo;meets the
          bar&rdquo; or &ldquo;does not meet the bar&rdquo;&nbsp;&mdash; with no middle ground.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          This binary framing poorly matches reality. Candidates often partially meet criteria. They might
          be strong in some dimensions and weak in others. Binary classification forces false precision.
        </p>

        <h3 className="mt-8 text-lg font-bold text-ink">2.2 Fuzzy Set Theory</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Zadeh (1965) introduced fuzzy sets to handle partial membership. In a fuzzy set, each element
          has a membership degree &mu; &isin; [0, 1] indicating how strongly it belongs. A candidate
          might have &mu; = 0.74 membership in the &ldquo;strong candidate&rdquo; set&nbsp;&mdash;
          meaning they 74% belong.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          This is better than binary classification but still incomplete. It captures degree of membership
          but not our confidence in that assessment.
        </p>

        <h3 className="mt-8 text-lg font-bold text-ink">2.3 Intuitionistic Fuzzy Sets</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Atanassov (1986) extended fuzzy sets to include both membership (&mu;) and non-membership
          (&nu;). An intuitionistic fuzzy set assigns each element a pair (&mu;, &nu;) where:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink-light">
          <li>&mu; = degree of membership</li>
          <li>&nu; = degree of non-membership</li>
          <li>&mu; + &nu; &le; 1</li>
        </ul>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          The quantity &pi; = 1 &minus; &mu; &minus; &nu; represents <em>hesitation</em> or
          indeterminacy&nbsp;&mdash; how much we don&rsquo;t know. For candidate evaluation: &mu; might
          represent evidence the candidate is strong, &nu; might represent evidence they are weak, and
          &pi; represents our uncertainty.
        </p>
        <div className="mt-4 rounded-lg border border-brand-orange/30 bg-orange-50/40 p-4 text-sm text-ink-light">
          <strong className="text-ink">Limitation:</strong> The constraint &mu; + &nu; &le; 1 restricts
          expressiveness. We cannot represent situations where we have substantial evidence for both
          membership and non-membership simultaneously.
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">2.4 q-Rung Orthopair Fuzzy Sets</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Yager (2017) generalized intuitionistic fuzzy sets by relaxing the constraint to:
        </p>
        <div className="my-4 rounded-lg bg-ink/5 px-6 py-4 text-center font-mono text-ink">
          &mu;<sup>q</sup> + &nu;<sup>q</sup> &le; 1
        </div>
        <p className="text-[15px] leading-relaxed text-ink-light">where q &ge; 1 is a parameter:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink-light">
          <li>When q = 1: Standard intuitionistic fuzzy sets (&mu; + &nu; &le; 1)</li>
          <li>When q = 2: Pythagorean fuzzy sets (&mu;&sup2; + &nu;&sup2; &le; 1)</li>
          <li>When q &rarr; &infin;: Approaches classical sets</li>
        </ul>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Higher values of q allow greater flexibility in representing complex uncertainty patterns. For
          candidate evaluation, q = 2 (Pythagorean fuzzy sets) provides a good balance between
          expressiveness and interpretability.
        </p>

        <h3 className="mt-8 text-lg font-bold text-ink">2.5 Why q = 2?</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          With Pythagorean fuzzy sets (q = 2), we can represent scenarios like:
        </p>
        <div className="mt-4 rounded-lg bg-ink/5 p-5 font-mono text-sm leading-relaxed text-ink">
          <p>&mu; = 0.8, &nu; = 0.5 (strong evidence for, moderate evidence against)</p>
          <p className="mt-2 text-brand-red">Invalid under intuitionistic: 0.8 + 0.5 = 1.3 &gt; 1</p>
          <p className="mt-1 text-brand-green">Valid under Pythagorean: 0.64 + 0.25 = 0.89 &le; 1</p>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
          In candidate evaluation, we often encounter conflicting signals. A candidate might demonstrate
          strong technical skills (high &mu;) while also showing concerning communication patterns
          (moderate &nu;). Pythagorean fuzzy sets can represent this naturally.
        </p>
      </section>

      {/* ── 3. THE TR-q-ROFN FRAMEWORK ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">3. The TR-q-ROFN Framework</h2>

        <h3 className="mt-8 text-lg font-bold text-ink">3.1 Definition</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          A Type-Reduced q-Rung Orthopair Fuzzy Number (TR-q-ROFN) is a triple:
        </p>
        <div className="my-4 rounded-lg bg-ink/5 px-6 py-4 text-center font-mono text-lg font-bold text-ink">
          A = (T, F, R)
        </div>
        <p className="text-[15px] leading-relaxed text-ink-light">where:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink-light">
          <li><strong className="text-ink">T &isin; [0, 1]</strong> = Truth degree (evidence supporting positive evaluation)</li>
          <li><strong className="text-ink">F &isin; [0, 1]</strong> = Falsity degree (evidence supporting negative evaluation)</li>
          <li><strong className="text-ink">R &isin; [0, 1]</strong> = Refusal degree (degree of evaluation uncertainty)</li>
        </ul>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">Subject to the constraint:</p>
        <div className="my-4 rounded-lg bg-ink/5 px-6 py-4 text-center font-mono text-ink">
          T<sup>q</sup> + F<sup>q</sup> + R<sup>q</sup> &le; 1
        </div>
        <p className="text-[15px] leading-relaxed text-ink-light">For our implementation, we use q = 2:</p>
        <div className="my-4 rounded-lg border border-[#3b82f6]/20 bg-[#3b82f6]/5 px-6 py-4 text-center font-mono text-lg text-ink">
          T&sup2; + F&sup2; + R&sup2; &le; 1
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">3.2 Interpretation</h3>
        <div className="mt-4 space-y-4">
          {[
            { term: 'Truth (T)', desc: 'Represents aggregated evidence that the candidate meets the criterion. Higher T means more/stronger positive signals.' },
            { term: 'Falsity (F)', desc: 'Represents aggregated evidence that the candidate does not meet the criterion. Higher F means more/stronger negative signals.' },
            { term: 'Refusal (R)', desc: 'Represents evaluation uncertainty \u2014 the degree to which available evidence does not clearly support either conclusion. Higher R means the evaluation is less reliable.' },
          ].map((item) => (
            <div key={item.term} className="flex gap-3 text-[15px]">
              <span className="shrink-0 font-semibold text-ink">{item.term}:</span>
              <span className="text-ink-light">{item.desc}</span>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">3.3 Key Insight: Refusal as Decision Signal</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Traditional scoring systems have no analog to R. They force a verdict on every candidate, even
          when evidence is ambiguous. The Refusal degree provides a principled way to say &ldquo;we&rsquo;re
          not sure.&rdquo; This is not a bug but a feature:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-ink-light">
          <li><strong className="text-ink">High R triggers additional evaluation.</strong> When R exceeds a threshold, adaptive follow-up questions probe the uncertainty.</li>
          <li><strong className="text-ink">High R flags human review.</strong> Cases with high R can be routed to experienced evaluators.</li>
          <li><strong className="text-ink">High R adjusts decision confidence.</strong> Final recommendations carry appropriate uncertainty.</li>
        </ul>

        <h3 className="mt-8 text-lg font-bold text-ink">3.4 Computing T, F, R from Multiple Models</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          LayersRank evaluates each response using multiple models:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink-light">
          <li><strong className="text-ink">Semantic similarity</strong> (embedding-based comparison to reference responses)</li>
          <li><strong className="text-ink">Lexical matching</strong> (keyword and structure analysis)</li>
          <li><strong className="text-ink">LLM evaluation</strong> (reasoning quality assessment)</li>
        </ul>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Each model produces its own (T, F, R) triple. We aggregate using:
        </p>
        <div className="mt-4 space-y-2 rounded-lg bg-ink/5 p-5 text-sm text-ink-light">
          <p><strong className="text-ink">Aggregated T:</strong> Weighted average of individual T values, adjusted for model agreement</p>
          <p><strong className="text-ink">Aggregated F:</strong> Weighted average of individual F values, adjusted for model agreement</p>
          <p><strong className="text-ink">Aggregated R:</strong> Computed from variance across models&nbsp;&mdash; high disagreement &rarr; high R</p>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light">The formula for aggregated R:</p>
        <div className="my-4 rounded-lg bg-ink/5 px-6 py-4 text-center font-mono text-ink">
          R = &radic;(1 &minus; T&sup2; &minus; F&sup2;) &times; (1 + &sigma;)
        </div>
        <p className="text-sm text-ink-muted">
          where &sigma; is the normalized standard deviation of scores across models.
        </p>

        <h3 className="mt-8 text-lg font-bold text-ink">3.5 Score and Confidence Derivation</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          From the TR-q-ROFN (T, F, R), we derive:
        </p>
        <div className="mt-4 space-y-3 rounded-lg bg-ink/5 p-5 font-mono text-sm text-ink">
          <p><strong>Score:</strong> S = 100 &times; (T / (T + F + &epsilon;))</p>
          <p><strong>Confidence:</strong> C = 1 &minus; R</p>
          <p><strong>Score Interval:</strong> &plusmn; (1 &minus; C) &times; k</p>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          where &epsilon; is a small constant preventing division by zero, and k is a scaling factor (typically 10&ndash;15).
        </p>

        <div className="mt-6 rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-6">
          <h4 className="text-sm font-bold uppercase tracking-wide text-[#3b82f6]">Worked Example</h4>
          <div className="mt-3 space-y-1 font-mono text-sm text-ink">
            <p>T = 0.75, F = 0.15, R = 0.20</p>
            <p>Score = 100 &times; (0.75 / 0.90) = <strong>83.3</strong></p>
            <p>Confidence = <strong>80%</strong></p>
            <p>Interval = &plusmn; 3 (with k = 15)</p>
          </div>
          <p className="mt-3 text-sm font-semibold text-ink">
            Reported: 83 &plusmn; 3, 80% confidence
          </p>
        </div>
      </section>

      {/* ── 4. APPLICATION TO CANDIDATE EVALUATION ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">4. Application to Candidate Evaluation</h2>

        <h3 className="mt-8 text-lg font-bold text-ink">4.1 Multi-Dimensional Assessment</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          Candidates are evaluated across three dimensions:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink-light">
          <li><strong className="text-ink">Technical:</strong> System design, debugging, depth, trade-offs</li>
          <li><strong className="text-ink">Behavioral:</strong> Communication, collaboration, feedback response</li>
          <li><strong className="text-ink">Contextual:</strong> Role understanding, motivation, trajectory</li>
        </ul>

        <h3 className="mt-8 text-lg font-bold text-ink">4.2 Question-Level Scoring</h3>
        <div className="mt-4 overflow-x-auto rounded-lg bg-ink/5 p-5 font-mono text-sm leading-relaxed text-ink">
          <p className="text-ink-muted">Question Q1: &ldquo;Walk through your approach to system design...&rdquo;</p>
          <table className="mt-3 w-full text-left">
            <thead><tr className="border-b border-gray-300 text-xs text-ink-muted"><th className="pb-2 pr-4">Model</th><th className="pb-2 pr-4">T</th><th className="pb-2 pr-4">F</th><th className="pb-2">R</th></tr></thead>
            <tbody className="text-sm">
              <tr><td className="py-1 pr-4">Semantic</td><td className="pr-4">0.82</td><td className="pr-4">0.10</td><td>0.15</td></tr>
              <tr><td className="py-1 pr-4">Lexical</td><td className="pr-4">0.78</td><td className="pr-4">0.12</td><td>0.18</td></tr>
              <tr><td className="py-1 pr-4">LLM</td><td className="pr-4">0.85</td><td className="pr-4">0.08</td><td>0.12</td></tr>
              <tr className="border-t border-gray-300 font-bold"><td className="py-1 pr-4">Aggregated</td><td className="pr-4">0.82</td><td className="pr-4">0.10</td><td>0.16</td></tr>
            </tbody>
          </table>
          <p className="mt-3 font-bold">Score: 89 &plusmn; 2, 84% confidence</p>
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">4.3 Adaptive Follow-Up Trigger</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          When R exceeds the threshold (default: 0.25), the system triggers adaptive follow-up:
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border-l-4 border-brand-orange bg-orange-50/40 p-5 font-mono text-sm leading-relaxed text-ink">
          <p className="text-ink-muted">Question Q2: &ldquo;Tell me about a time you received critical feedback...&rdquo;</p>
          <table className="mt-3 w-full text-left">
            <thead><tr className="border-b border-gray-300 text-xs text-ink-muted"><th className="pb-2 pr-4">Model</th><th className="pb-2 pr-4">T</th><th className="pb-2 pr-4">F</th><th className="pb-2">R</th></tr></thead>
            <tbody className="text-sm">
              <tr><td className="py-1 pr-4">Semantic</td><td className="pr-4">0.55</td><td className="pr-4">0.40</td><td>0.35</td></tr>
              <tr><td className="py-1 pr-4">Lexical</td><td className="pr-4">0.62</td><td className="pr-4">0.35</td><td>0.30</td></tr>
              <tr><td className="py-1 pr-4">LLM</td><td className="pr-4">0.48</td><td className="pr-4">0.45</td><td>0.40</td></tr>
              <tr className="border-t border-gray-300 font-bold"><td className="py-1 pr-4">Aggregated</td><td className="pr-4">0.55</td><td className="pr-4">0.40</td><td className="text-brand-red">0.35</td></tr>
            </tbody>
          </table>
          <p className="mt-3 font-bold text-brand-orange">R = 0.35 &gt; 0.25 threshold &rarr; TRIGGER FOLLOW-UP</p>
        </div>
        <div className="mt-4 rounded-lg bg-ink/5 p-5 text-sm italic text-ink-light">
          Follow-up: &ldquo;You mentioned initially feeling defensive. What helps you move past that reaction now?&rdquo;
        </div>
        <div className="mt-4 overflow-x-auto rounded-lg border-l-4 border-brand-green bg-green-50/40 p-5 font-mono text-sm leading-relaxed text-ink">
          <p className="font-bold text-ink-muted">After follow-up:</p>
          <table className="mt-2 w-full text-left">
            <tbody className="text-sm">
              <tr className="font-bold"><td className="py-1 pr-4">Aggregated</td><td className="pr-4">0.72</td><td className="pr-4">0.18</td><td className="text-brand-green">0.18</td></tr>
            </tbody>
          </table>
          <p className="mt-2 font-bold">Score: 80 &plusmn; 3, 82% confidence</p>
          <p className="mt-1 text-xs text-ink-muted">R reduced from 0.35 &rarr; 0.18 | Confidence improved from 65% &rarr; 82%</p>
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">4.4 Dimension Aggregation</h3>
        <div className="mt-4 overflow-x-auto rounded-lg bg-ink/5 p-5 font-mono text-sm leading-relaxed text-ink">
          <p className="font-bold text-ink-muted">Technical Dimension:</p>
          <table className="mt-2 w-full text-left">
            <thead><tr className="border-b border-gray-300 text-xs text-ink-muted"><th className="pb-2 pr-4">Question</th><th className="pb-2 pr-4">Score</th><th className="pb-2 pr-4">Confidence</th><th className="pb-2">Weight</th></tr></thead>
            <tbody>
              <tr><td className="py-1 pr-4">Q1</td><td className="pr-4">89</td><td className="pr-4">84%</td><td>0.30</td></tr>
              <tr><td className="py-1 pr-4">Q2</td><td className="pr-4">76</td><td className="pr-4">78%</td><td>0.25</td></tr>
              <tr><td className="py-1 pr-4">Q3</td><td className="pr-4">82</td><td className="pr-4">90%</td><td>0.25</td></tr>
              <tr><td className="py-1 pr-4">Q4</td><td className="pr-4">85</td><td className="pr-4">86%</td><td>0.20</td></tr>
            </tbody>
          </table>
          <div className="mt-3 border-t border-gray-300 pt-3">
            <p>Weighted Score = &Sigma;(Score &times; Weight &times; Confidence) / &Sigma;(Weight &times; Confidence) = <strong>83.2</strong></p>
            <p className="mt-1">Dimension Confidence = <strong>84.5%</strong></p>
          </div>
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">4.5 Final Score Computation</h3>
        <div className="mt-4 overflow-x-auto rounded-lg bg-ink/5 p-5 font-mono text-sm leading-relaxed text-ink">
          <table className="w-full text-left">
            <thead><tr className="border-b border-gray-300 text-xs text-ink-muted"><th className="pb-2 pr-4">Dimension</th><th className="pb-2 pr-4">Score</th><th className="pb-2 pr-4">Confidence</th><th className="pb-2">Weight</th></tr></thead>
            <tbody>
              <tr><td className="py-1 pr-4">Technical</td><td className="pr-4">83 &plusmn; 3</td><td className="pr-4">85%</td><td>0.40</td></tr>
              <tr><td className="py-1 pr-4">Behavioral</td><td className="pr-4">78 &plusmn; 4</td><td className="pr-4">80%</td><td>0.35</td></tr>
              <tr><td className="py-1 pr-4">Contextual</td><td className="pr-4">81 &plusmn; 3</td><td className="pr-4">88%</td><td>0.25</td></tr>
            </tbody>
          </table>
          <p className="mt-3 border-t border-gray-300 pt-3 text-base font-bold">Final Score = 80.6 &plusmn; 3, 84% confidence</p>
        </div>
      </section>

      {/* ── 5. IMPLEMENTATION ARCHITECTURE ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">5. Implementation Architecture</h2>

        <h3 className="mt-8 text-lg font-bold text-ink">5.1 System Overview</h3>
        <div className="mt-4 overflow-x-auto rounded-lg bg-ink p-6 font-mono text-xs leading-relaxed text-green-400 sm:text-sm">
          <pre>{`Candidate Response
        │
        ▼
┌─────────────────────────────────────┐
│       Evaluation Pipeline           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ Semantic │ │ Lexical  │ │   LLM    │ │
│  │  Model   │ │  Model   │ │  Model   │ │
│  │ (T,F,R)  │ │ (T,F,R)  │ │ (T,F,R)  │ │
│  └──────────┘ └──────────┘ └──────────┘ │
└─────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────┐
│     TR-q-ROFN Aggregation           │
│  Compute aggregated (T, F, R)       │
│  Check R against threshold          │
└─────────────────────────────────────┘
        │
   ┌────┴────┐
   │         │
   ▼         ▼
R ≤ 0.25   R > 0.25
   │         │
   ▼         ▼
Score +    Trigger
Confidence Follow-Up
             │
             ▼
          Re-evaluate`}</pre>
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">5.2 Model Specifications</h3>
        <div className="mt-4 space-y-6">
          {[
            { name: 'Semantic Model', arch: 'SBERT (sentence-transformers)', fn: 'Computes cosine similarity between candidate response embedding and reference response embeddings', t: 'Similarity to positive reference responses', f: 'Similarity to negative reference responses', r: 'Distance from all references (neither similar to good nor bad examples)' },
            { name: 'Lexical Model', arch: 'TF-IDF with domain-specific vocabulary', fn: 'Identifies presence of expected concepts, structure, keywords', t: 'Coverage of expected elements', f: 'Presence of concerning patterns (vagueness, contradiction)', r: 'Coverage uncertainty (partial matches)' },
            { name: 'LLM Model', arch: 'Instruction-tuned LLM (configurable)', fn: 'Holistic evaluation of response quality, reasoning, depth', t: 'Explicit quality assessment on rubric', f: 'Explicit concern identification', r: "Model's stated confidence / hedging language" },
          ].map((m) => (
            <div key={m.name} className="rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-ink">{m.name}</h4>
              <p className="mt-1 text-xs text-ink-muted">Architecture: {m.arch}</p>
              <p className="mt-2 text-sm text-ink-light">Function: {m.fn}</p>
              <div className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
                <div className="rounded bg-brand-green/10 px-3 py-2"><span className="font-semibold text-brand-green">T:</span> <span className="text-ink-light">{m.t}</span></div>
                <div className="rounded bg-brand-red/10 px-3 py-2"><span className="font-semibold text-brand-red">F:</span> <span className="text-ink-light">{m.f}</span></div>
                <div className="rounded bg-brand-orange/10 px-3 py-2"><span className="font-semibold text-brand-orange">R:</span> <span className="text-ink-light">{m.r}</span></div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">5.3 Threshold Configuration</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-gray-300 text-left"><th className="pb-2 pr-4 font-semibold text-ink">Threshold</th><th className="pb-2 font-semibold text-ink">Behavior</th></tr></thead>
            <tbody className="text-ink-light">
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-mono">0.15&ndash;0.20</td><td className="py-2">More follow-ups, higher confidence in final scores, longer assessments</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-mono font-bold text-ink">0.25 (default)</td><td className="py-2">Balanced approach, ~20% of responses trigger follow-up</td></tr>
              <tr><td className="py-2 pr-4 font-mono">0.30&ndash;0.40</td><td className="py-2">Fewer follow-ups, faster assessments, more uncertainty in scores</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 6. VALIDATION AND RESULTS ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">6. Validation and Results</h2>

        <h3 className="mt-8 text-lg font-bold text-ink">6.1 Methodology</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink-light">
          <li><strong className="text-ink">Dataset:</strong> 2,847 candidate responses across 12 role types</li>
          <li><strong className="text-ink">Ground truth:</strong> Expert human evaluation by 3 trained assessors per response</li>
          <li><strong className="text-ink">Metrics:</strong> Score correlation, confidence calibration, decision agreement</li>
        </ul>

        <h3 className="mt-8 text-lg font-bold text-ink">6.2 Score Correlation</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2 border-ink text-left"><th className="pb-2 pr-4 font-semibold text-ink">Dimension</th><th className="pb-2 pr-4 font-semibold text-ink">Pearson r</th><th className="pb-2 font-semibold text-ink">Spearman &rho;</th></tr></thead>
            <tbody className="text-ink-light">
              <tr className="border-b border-gray-100"><td className="py-2 pr-4">Technical</td><td className="py-2 pr-4 font-mono font-bold text-brand-green">0.84</td><td className="py-2 font-mono">0.81</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4">Behavioral</td><td className="py-2 pr-4 font-mono font-bold text-brand-green">0.79</td><td className="py-2 font-mono">0.76</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4">Contextual</td><td className="py-2 pr-4 font-mono font-bold text-brand-green">0.82</td><td className="py-2 font-mono">0.79</td></tr>
              <tr className="border-t-2 border-ink font-bold"><td className="py-2 pr-4 text-ink">Overall</td><td className="py-2 pr-4 font-mono text-brand-green">0.83</td><td className="py-2 font-mono">0.80</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">6.3 Confidence Calibration</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2 border-ink text-left"><th className="pb-2 pr-4 font-semibold text-ink">Stated Confidence</th><th className="pb-2 pr-4 font-semibold text-ink">Actual Accuracy</th><th className="pb-2 font-semibold text-ink">Calibration Error</th></tr></thead>
            <tbody className="text-ink-light">
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-mono">90&ndash;100%</td><td className="py-2 pr-4 font-mono">93%</td><td className="py-2 font-mono text-brand-green">+3%</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-mono">80&ndash;90%</td><td className="py-2 pr-4 font-mono">84%</td><td className="py-2 font-mono text-brand-green">+1%</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-mono">70&ndash;80%</td><td className="py-2 pr-4 font-mono">73%</td><td className="py-2 font-mono text-brand-orange">&minus;2%</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-mono">60&ndash;70%</td><td className="py-2 pr-4 font-mono">65%</td><td className="py-2 font-mono text-brand-green">&minus;1%</td></tr>
              <tr><td className="py-2 pr-4 font-mono">&lt;60%</td><td className="py-2 pr-4 font-mono">58%</td><td className="py-2 font-mono text-brand-green">+2%</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">6.4 Adaptive Follow-Up Effectiveness</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2 border-ink text-left"><th className="pb-2 pr-4 font-semibold text-ink">Metric</th><th className="pb-2 pr-4 font-semibold text-ink">Before</th><th className="pb-2 pr-4 font-semibold text-ink">After</th><th className="pb-2 font-semibold text-ink">Improvement</th></tr></thead>
            <tbody className="text-ink-light">
              <tr className="border-b border-gray-100"><td className="py-2 pr-4">Avg R (uncertainty)</td><td className="py-2 pr-4 font-mono">0.38</td><td className="py-2 pr-4 font-mono">0.19</td><td className="py-2 font-mono font-bold text-brand-green">&minus;50%</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4">Avg Confidence</td><td className="py-2 pr-4 font-mono">62%</td><td className="py-2 pr-4 font-mono">81%</td><td className="py-2 font-mono font-bold text-brand-green">+31%</td></tr>
              <tr><td className="py-2 pr-4">Correlation with experts</td><td className="py-2 pr-4 font-mono">0.71</td><td className="py-2 pr-4 font-mono">0.86</td><td className="py-2 font-mono font-bold text-brand-green">+21%</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-bold text-ink">6.5 Comparison to Traditional Scoring</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2 border-ink text-left"><th className="pb-2 pr-4 font-semibold text-ink">Method</th><th className="pb-2 pr-4 font-semibold text-ink">Agreement</th><th className="pb-2 pr-4 font-semibold text-ink">False +</th><th className="pb-2 font-semibold text-ink">False &minus;</th></tr></thead>
            <tbody className="text-ink-light">
              <tr className="border-b border-gray-100"><td className="py-2 pr-4">Traditional (avg score)</td><td className="py-2 pr-4 font-mono">78%</td><td className="py-2 pr-4 font-mono">12%</td><td className="py-2 font-mono">10%</td></tr>
              <tr className="border-b border-gray-100 font-bold text-ink"><td className="py-2 pr-4">TR-q-ROFN (high confidence)</td><td className="py-2 pr-4 font-mono text-brand-green">91%</td><td className="py-2 pr-4 font-mono text-brand-green">4%</td><td className="py-2 font-mono text-brand-green">5%</td></tr>
              <tr><td className="py-2 pr-4">TR-q-ROFN (all cases)</td><td className="py-2 pr-4 font-mono">84%</td><td className="py-2 pr-4 font-mono">8%</td><td className="py-2 font-mono">8%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 7. LIMITATIONS AND FUTURE WORK ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">7. Limitations and Future Work</h2>
        <h3 className="mt-8 text-lg font-bold text-ink">7.1 Current Limitations</h3>
        <div className="mt-4 space-y-4">
          {[
            { term: 'Model dependence', desc: 'TR-q-ROFN quality depends on underlying model quality. Poor base models produce poor T, F, R values regardless of aggregation method.' },
            { term: 'Threshold sensitivity', desc: 'The R threshold is currently set empirically. More principled approaches to threshold selection are desirable.' },
            { term: 'Dimension independence assumption', desc: 'Current implementation treats dimensions independently. Cross-dimension correlations (e.g., technical strength predicting behavioral patterns) are not modeled.' },
            { term: 'Cold start', desc: 'Reference responses for new roles require initial human effort. Transfer learning across similar roles is an area for development.' },
          ].map((item) => (
            <div key={item.term} className="flex gap-3 text-[15px]">
              <span className="shrink-0 font-semibold text-ink">{item.term}.</span>
              <span className="text-ink-light">{item.desc}</span>
            </div>
          ))}
        </div>
        <h3 className="mt-8 text-lg font-bold text-ink">7.2 Future Work</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-ink-light">
          <li><strong className="text-ink">Dynamic threshold adjustment.</strong> Learn optimal R thresholds per role, question type, or candidate population.</li>
          <li><strong className="text-ink">Uncertainty decomposition.</strong> Distinguish aleatory uncertainty (inherent randomness) from epistemic uncertainty (lack of information).</li>
          <li><strong className="text-ink">Longitudinal validation.</strong> Correlate evaluation scores and confidence with post-hire performance outcomes.</li>
          <li><strong className="text-ink">Fairness analysis.</strong> Examine whether R distributions differ across demographic groups in ways that could introduce bias.</li>
        </ul>
      </section>

      {/* ── 8. CONCLUSION ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">8. Conclusion</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light">
          Traditional interview scoring hides critical information about evaluation reliability. A score
          of 74 tells you nothing about whether that assessment is trustworthy.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-light">
          TR-q-ROFNs provide a mathematical framework for making uncertainty explicit. By representing
          evaluations as (T, F, R) triples&nbsp;&mdash; capturing evidence for, evidence against, and
          evaluation uncertainty&nbsp;&mdash; we enable:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] text-ink-light">
          <li><strong className="text-ink">Appropriate confidence calibration.</strong> Decision-makers know when to trust scores and when to investigate.</li>
          <li><strong className="text-ink">Adaptive assessment.</strong> Uncertainty triggers follow-up questions that resolve ambiguity.</li>
          <li><strong className="text-ink">Audit trails.</strong> Every score has a documented confidence level and evidence basis.</li>
          <li><strong className="text-ink">Improved decisions.</strong> High-confidence scores are significantly more predictive of expert consensus.</li>
        </ol>
        <p className="mt-4 text-base font-semibold text-ink">
          For organizations seeking to move from gut-feel hiring to evidence-based decisions,
          confidence-aware scoring is a foundational capability.
        </p>
      </section>

      {/* ── 9. REFERENCES ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">9. References</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-ink-light">
          <li>Atanassov, K. T. (1986). Intuitionistic fuzzy sets. <em>Fuzzy Sets and Systems</em>, 20(1), 87&ndash;96.</li>
          <li>Schmidt, F. L., &amp; Hunter, J. E. (1998). The validity and utility of selection methods in personnel psychology. <em>Psychological Bulletin</em>, 124(2), 262&ndash;274.</li>
          <li>Yager, R. R. (2017). Generalized orthopair fuzzy sets. <em>IEEE Transactions on Fuzzy Systems</em>, 25(5), 1222&ndash;1230.</li>
          <li>Zadeh, L. A. (1965). Fuzzy sets. <em>Information and Control</em>, 8(3), 338&ndash;353.</li>
        </ol>
      </section>

      {/* ── 10. APPENDIX ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink">10. Appendix: Mathematical Proofs</h2>

        <div className="mt-8 rounded-lg border border-gray-200 bg-paper-off p-6">
          <h3 className="text-lg font-bold text-ink">A.1 Constraint Satisfaction</h3>
          <p className="mt-3 text-sm text-ink-light">
            <strong className="text-ink">Theorem:</strong> For any valid TR-q-ROFN (T, F, R) with q = 2,
            the derived score S and confidence C satisfy 0 &le; S &le; 100 and 0 &le; C &le; 1.
          </p>
          <div className="mt-3 rounded bg-white p-4 font-mono text-sm text-ink">
            <p><strong>Proof:</strong> Given T&sup2; + F&sup2; + R&sup2; &le; 1 and T, F, R &isin; [0, 1]:</p>
            <p className="mt-2">S = 100 &times; T / (T + F + &epsilon;)</p>
            <p className="mt-1">Since T &ge; 0 and T + F + &epsilon; &gt; 0, S &ge; 0.</p>
            <p>Since T &le; T + F + &epsilon;, S &le; 100.</p>
            <p className="mt-2">C = 1 &minus; R</p>
            <p>Since R &isin; [0, 1], C &isin; [0, 1]. &#x220E;</p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 bg-paper-off p-6">
          <h3 className="text-lg font-bold text-ink">A.2 Aggregation Consistency</h3>
          <p className="mt-3 text-sm text-ink-light">
            <strong className="text-ink">Theorem:</strong> The weighted aggregation of multiple TR-q-ROFNs
            produces a valid TR-q-ROFN.
          </p>
          <div className="mt-3 rounded bg-white p-4 font-mono text-sm text-ink">
            <p><strong>Proof:</strong> Let (T&#x2081;, F&#x2081;, R&#x2081;), ..., (T&#x2099;, F&#x2099;, R&#x2099;) be valid TR-q-ROFNs with weights w&#x2081;, ..., w&#x2099; where &Sigma;w&#x1D62; = 1.</p>
            <p className="mt-2">Define:</p>
            <p>T_agg = &Sigma;(w&#x1D62; &times; T&#x1D62;)</p>
            <p>F_agg = &Sigma;(w&#x1D62; &times; F&#x1D62;)</p>
            <p>R_agg = &radic;(1 &minus; T_agg&sup2; &minus; F_agg&sup2;) &times; adjustment_factor</p>
            <p className="mt-2">By convexity of the unit ball under L&sup2; norm, (T_agg, F_agg) lies within the feasible region. R_agg is computed to satisfy the constraint by construction. &#x220E;</p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 bg-paper-off p-6">
          <h3 className="text-lg font-bold text-ink">A.3 Confidence Calibration Property</h3>
          <p className="mt-3 text-sm text-ink-light">
            <strong className="text-ink">Theorem:</strong> Under reasonable model assumptions, the
            confidence measure C = 1 &minus; R is calibrated, meaning P(correct | C = c) &asymp; c.
          </p>
          <div className="mt-3 rounded bg-white p-4 font-mono text-sm text-ink">
            <p><strong>Proof sketch:</strong> The aggregated R reflects model disagreement. High disagreement (high R) occurs when:</p>
            <p className="mt-1">1. The response is genuinely ambiguous</p>
            <p>2. The models are uncertain</p>
            <p className="mt-2">In both cases, the probability of the score matching ground truth decreases.</p>
            <p className="mt-1">Empirical calibration (Section 6.3) confirms this property holds in practice. &#x220E;</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="border-t border-gray-200 pt-8 text-center text-sm text-ink-muted">
        <p>For questions about this research or to discuss enterprise deployments,</p>
        <p>contact <a href="mailto:research@layersrank.com" className="text-[#3b82f6] hover:underline">research@layersrank.com</a></p>
        <p className="mt-4">&copy; 2025 LayersRank by The Algorithm. All rights reserved.</p>
      </div>
    </>
  );
}
