import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Audit-Ready Engineering Hiring Reports for US HQs | GCC Documentation | LayersRank',
  description:
    'GCCs need to prove hiring quality to US headquarters. Learn what audit-ready reports require and how to produce them at scale.',
  path: '/blog/audit-ready-hiring-reports',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Create Audit-Ready Hiring Reports for US Headquarters',
  description:
    'GCCs need to prove hiring quality to US headquarters. Learn what audit-ready reports require and how to produce them at scale.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'audit ready hiring reports',
    'GCC hiring documentation',
    'US HQ compliance',
    'engineering hiring audit',
    'interview documentation',
  ],
};

export default function AuditReadyHiringReportsBlogPost() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <time dateTime="2026-02">February 2026</time>
            <span aria-hidden="true">&middot;</span>
            <span>6 min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>LayersRank Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            How to Create Audit-Ready Hiring Reports for US Headquarters
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            Someone from US HQ asks for documentation on a hire. You find fragments:
            &ldquo;Strong technical.&rdquo; &ldquo;Good culture fit.&rdquo;
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            This isn&rsquo;t just embarrassing&nbsp;&mdash; it&rsquo;s a liability.
          </p>
        </div>
      </section>

      {/* ── WHAT "AUDIT-READY" ACTUALLY MEANS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            What &ldquo;Audit-Ready&rdquo; Actually Means
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Audit-ready doesn&rsquo;t mean &ldquo;looks professional.&rdquo; It means a hiring report can
              withstand scrutiny from compliance, legal, or executive review&nbsp;&mdash; and answer five
              specific questions without further investigation.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {/* Question 1 */}
            <div className="rounded-xl border border-brand-blue/30 bg-blue-50/40 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-ink">What criteria was the candidate evaluated against?</h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Defined competencies tied to the role</li>
                    <li>Clear definitions of what &ldquo;good&rdquo; looks like at each level</li>
                    <li>Relevance of each criterion to the position</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <h3 className="font-bold text-ink">How did the candidate perform on each criterion?</h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Individual scores with supporting evidence</li>
                    <li>Specific examples from the candidate&rsquo;s responses</li>
                    <li>Comparison against the defined rubric</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <h3 className="font-bold text-ink">Who evaluated the candidate and when?</h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Complete audit trail of every evaluator</li>
                    <li>Timestamps for each stage of the process</li>
                    <li>Chain of custody from application to decision</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                  4
                </span>
                <div>
                  <h3 className="font-bold text-ink">What was the decision rationale?</h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Why the candidate was advanced or rejected</li>
                    <li>How concerns were identified and addressed</li>
                    <li>Consistency with decisions on similar candidates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                  5
                </span>
                <div>
                  <h3 className="font-bold text-ink">Was the process consistently applied?</h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink-light">
                    <li>Same questions asked across all candidates for the role</li>
                    <li>Same criteria and scoring rubric applied uniformly</li>
                    <li>Minimal variance between evaluators on identical responses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            If your current reports can&rsquo;t answer all five, they&rsquo;re not audit-ready. They&rsquo;re
            just notes.
          </p>
        </div>
      </section>

      {/* ── WHY MOST INTERVIEW NOTES FAIL ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Why Most Interview Notes Fail</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Most GCCs don&rsquo;t have a documentation problem. They have a documentation <em>quality</em>{' '}
              problem. Interview notes exist, but they fail under scrutiny for five predictable reasons:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">Subjective without definition</h3>
                <p className="mt-1 text-sm text-ink-light">
                  &ldquo;Strong technical skills&rdquo; means different things to different evaluators. Without a
                  shared rubric, the same phrase can describe a candidate who solved a system design problem
                  elegantly or one who simply used correct terminology.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Incomplete</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Notes capture what the interviewer remembered to write down, not what actually happened.
                  Critical moments&nbsp;&mdash; hesitations, corrections, depth of follow-up&nbsp;&mdash; are
                  lost because no one was recording in real time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Variable</h3>
                <p className="mt-1 text-sm text-ink-light">
                  One interviewer writes three paragraphs. Another writes three words. There&rsquo;s no standard
                  format, no required fields, no minimum level of detail. Every report looks different.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Undated and unsigned</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Notes sit in a shared doc or spreadsheet with no timestamps, no attribution, and no version
                  history. When HQ asks &ldquo;who evaluated this candidate and when,&rdquo; the answer is a
                  shrug.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-ink">Opinion without evidence</h3>
                <p className="mt-1 text-sm text-ink-light">
                  &ldquo;I think this candidate would be a good fit&rdquo; is an opinion. &ldquo;The candidate
                  demonstrated proficiency in distributed systems by designing a partitioning strategy that
                  handled the stated constraints&rdquo; is evidence. Most notes are the former.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 font-medium text-ink">
            Interview notes are memory aids, not documentation. There&rsquo;s a fundamental difference, and
            most organizations conflate the two.
          </p>
        </div>
      </section>

      {/* ── WHAT AUDIT-READY REPORTS INCLUDE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Audit-Ready Reports Include</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              A report that can survive an audit has seven distinct components. Each serves a specific
              purpose and answers a specific question a reviewer might ask.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {/* Component 1 */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-brand-blue">
                1 &mdash; Candidate Identifier
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Unique candidate ID tied to the ATS record</li>
                <li>Role applied for, with job requisition number</li>
                <li>Stage in the pipeline at time of evaluation</li>
              </ul>
            </div>

            {/* Component 2 */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-brand-green">
                2 &mdash; Evaluation Framework
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Competencies assessed and their definitions</li>
                <li>Scoring rubric with level descriptors</li>
                <li>Weighting of each competency toward the overall score</li>
              </ul>
            </div>

            {/* Component 3 */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-brand-orange">
                3 &mdash; Response Documentation
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Full transcript or detailed summary of candidate responses</li>
                <li>Questions asked, including any follow-ups</li>
                <li>Time spent on each question or section</li>
              </ul>
            </div>

            {/* Component 4 */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-brand-yellow">
                4 &mdash; Scoring Detail
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Per-question and per-competency scores</li>
                <li>Evidence cited for each score</li>
                <li>Rationale for score relative to rubric level</li>
              </ul>
            </div>

            {/* Component 5 */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-brand-red">
                5 &mdash; Confidence Indicators
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Confidence level for each competency score</li>
                <li>Areas of evaluator agreement and disagreement</li>
                <li>Flags for ambiguous or insufficient evidence</li>
              </ul>
            </div>

            {/* Component 6 */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-ink">
                6 &mdash; Decision Record
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Recommendation: advance, reject, or hold for further review</li>
                <li>Justification tied to specific evaluation data</li>
                <li>Dissenting opinions or unresolved concerns</li>
              </ul>
            </div>

            {/* Component 7 */}
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-ink-muted">
                7 &mdash; Metadata
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-ink-light">
                <li>Date and time of evaluation</li>
                <li>Evaluator identity and credentials</li>
                <li>System version and assessment configuration</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            Missing any one of these and the report has a gap an auditor will find. Missing three or more and
            you don&rsquo;t have a report&nbsp;&mdash; you have an opinion with a timestamp.
          </p>
        </div>
      </section>

      {/* ── THE VOLUME PROBLEM ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Volume Problem</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Creating one audit-ready report is straightforward. Creating{' '}
              <strong className="font-mono text-ink">500</strong> per month&nbsp;&mdash; the reality for
              most mid-to-large GCCs&nbsp;&mdash; is a completely different problem. Manual detailed reports
              at that volume simply don&rsquo;t happen.
            </p>
            <p className="font-medium text-ink">Two options exist:</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Option A */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                Option A: <span className="text-brand-green">Structured Interview Tools</span>
              </h3>
              <p className="mt-3 text-sm text-ink-light">
                Use technology that produces documentation as a <em>byproduct</em> of the assessment process.
                Every interview automatically generates the seven components. No additional effort from
                evaluators.
              </p>
              <p className="mt-3 text-sm font-medium text-brand-green">
                Scales linearly. Documentation quality is consistent regardless of volume.
              </p>
            </div>

            {/* Option B */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">
                Option B: <span className="text-brand-orange">Training + Templates + Oversight</span>
              </h3>
              <p className="mt-3 text-sm text-ink-light">
                Train interviewers to write detailed notes. Provide templates. Assign someone to review every
                report for completeness. It works&nbsp;&mdash; for a while.
              </p>
              <p className="mt-3 text-sm font-medium text-brand-orange">
                Breaks under pressure. Quality degrades as volume increases and reviewers fall behind.
              </p>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            Most GCCs start with Option B. Nearly all of them abandon it within{' '}
            <strong className="font-mono text-ink">6&ndash;12</strong> months as hiring volume grows and
            interviewer fatigue sets in. The templates go unfilled, the reviews get skipped, and the reports
            revert to &ldquo;Strong technical. Good culture fit.&rdquo;
          </p>
        </div>
      </section>

      {/* ── WHAT US HQ ACTUALLY WANTS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What US HQ Actually Wants</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              When headquarters requests hiring documentation, they&rsquo;re not asking out of curiosity.
              They&rsquo;re asking because someone upstream needs an answer to one of three questions:
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-brand-red pl-6">
              <h3 className="text-lg font-bold text-ink">
                &ldquo;Did we discriminate?&rdquo;
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                The compliance question. Were candidates evaluated on job-relevant criteria? Were protected
                characteristics excluded from the decision process? Can we prove it with documentation, not
                just assertion?
              </p>
            </div>

            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">
                &ldquo;Did we get what we paid for?&rdquo;
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                The quality question. We hired <span className="font-mono">47</span> engineers last quarter.
                Were they evaluated rigorously? Do the assessment scores correlate with on-the-job
                performance? Is the GCC actually screening or just processing?
              </p>
            </div>

            <div className="border-l-4 border-brand-blue pl-6">
              <h3 className="text-lg font-bold text-ink">
                &ldquo;Can we defend this decision?&rdquo;
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                The legal question. If a rejected candidate challenges the decision, do we have enough
                documentation to show the process was fair, structured, and evidence-based? Or will our
                defense be &ldquo;the interviewer felt they weren&rsquo;t a good fit&rdquo;?
              </p>
            </div>
          </div>

          <p className="mt-8 font-medium text-ink">
            All three questions require the same thing: comprehensive, structured documentation generated
            consistently for every candidate. There&rsquo;s no shortcut.
          </p>
        </div>
      </section>

      {/* ── BUILDING THE DOCUMENTATION HABIT ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Building the Documentation Habit</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              If you&rsquo;re moving from ad-hoc notes to audit-ready reports, the transition happens in
              five phases. Skipping phases leads to adoption failure.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">Standardize Questions</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Define the question bank for each role. Every candidate for the same position gets asked
                  from the same set. This is the foundation&nbsp;&mdash; without it, nothing downstream is
                  comparable.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Create Scoring Rubrics</h3>
                <p className="mt-1 text-sm text-ink-light">
                  For each question and competency, define what a <span className="font-mono">1</span>,{' '}
                  <span className="font-mono">2</span>, <span className="font-mono">3</span>,{' '}
                  <span className="font-mono">4</span>, and <span className="font-mono">5</span> look like.
                  Use behavioral anchors, not abstract descriptions. &ldquo;Excellent&rdquo; is not a rubric
                  level&nbsp;&mdash; it&rsquo;s an opinion.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Implement Structured Capture</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Replace free-text note-taking with structured data entry. Every response is recorded
                  against the question it answers. Every score is tied to a rubric level. Every evaluator is
                  identified and timestamped.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Generate Reports Automatically</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Structured data becomes structured reports. No manual assembly required. The report is a
                  view of the data, not a separate document someone has to create after the fact.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-ink">Store and Retrieve</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Reports live in a searchable, auditable system. When HQ asks for documentation on a hire
                  from <span className="font-mono">8</span> months ago, it takes seconds&nbsp;&mdash; not
                  days of digging through email threads and shared drives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE LAYERSRANK APPROACH ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The LayersRank Approach</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Every LayersRank assessment produces audit-ready documentation as a natural output of the
              evaluation process. Documentation is built into the process, not added on top.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
              <p className="font-semibold text-ink">Full Transcript</p>
              <p className="mt-1 text-sm text-ink-light">
                Complete record of every question asked and every response given, with timestamps.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
              <p className="font-semibold text-ink">Question-by-Question Scoring</p>
              <p className="mt-1 text-sm text-ink-light">
                Individual scores with written rationale for each, tied directly to the rubric.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
              <p className="font-semibold text-ink">Competency Roll-Ups</p>
              <p className="mt-1 text-sm text-ink-light">
                Aggregated scores by competency area with weighted contribution to the overall assessment.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
              <p className="font-semibold text-ink">Confidence Levels</p>
              <p className="mt-1 text-sm text-ink-light">
                Per-competency confidence indicators showing where the assessment is reliable and where
                ambiguity exists.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
              <p className="font-semibold text-ink">Recommendation with Evidence</p>
              <p className="mt-1 text-sm text-ink-light">
                Clear advance/reject/hold recommendation backed by specific data points from the assessment.
              </p>
            </div>
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-5">
              <p className="font-semibold text-ink">Complete Metadata</p>
              <p className="mt-1 text-sm text-ink-light">
                Date, time, assessment version, evaluator identity, role configuration, and full audit trail.
              </p>
            </div>
          </div>

          <p className="mt-6 text-base font-semibold text-ink md:text-lg">
            No extra work. No templates to fill. No reports to assemble after the fact. The assessment{' '}
            <em>is</em> the documentation.
          </p>
        </div>
      </section>

      {/* ── THE COST OF INADEQUATE DOCUMENTATION ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            The Cost of Inadequate Documentation
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Poor documentation isn&rsquo;t just an inconvenience. It creates compounding problems that
              erode the GCC&rsquo;s credibility with US headquarters over time.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="font-bold text-ink">Compliance Failures</h3>
              <p className="mt-2 text-sm text-ink-light">
                Without structured documentation, proving non-discrimination is nearly impossible. You&rsquo;re
                relying on the absence of evidence rather than evidence of absence&nbsp;&mdash; and regulators
                know the difference.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="font-bold text-ink">Legal Exposure</h3>
              <p className="mt-2 text-sm text-ink-light">
                A rejected candidate challenges the decision. Your documentation is &ldquo;Good candidate but
                not the right fit.&rdquo; Try defending that in a legal proceeding. Unstructured notes are
                often worse than no notes because they create discoverable evidence of a flawed process.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="font-bold text-ink">Quality Uncertainty</h3>
              <p className="mt-2 text-sm text-ink-light">
                HQ can&rsquo;t verify that the GCC is maintaining hiring standards. Are the engineers being
                hired actually meeting the bar? Without detailed evaluation records, it&rsquo;s impossible to
                audit quality retrospectively.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="font-bold text-ink">HQ Distrust</h3>
              <p className="mt-2 text-sm text-ink-light">
                Every time HQ asks for documentation and gets fragments, trust erodes. The GCC that
                can&rsquo;t produce clean reports looks like it can&rsquo;t manage a clean process. Whether
                that&rsquo;s true or not, perception becomes reality.
              </p>
            </div>
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="font-bold text-ink">Wasted Investigations</h3>
              <p className="mt-2 text-sm text-ink-light">
                Without proper documentation, answering even simple questions requires manual investigation.
                Someone has to interview the interviewers, reconstruct timelines, and piece together decisions
                from memory&nbsp;&mdash; weeks or months after the fact.
              </p>
            </div>
          </div>

          <p className="mt-8 font-medium text-ink">
            The cost of building audit-ready documentation into your process is measured in implementation
            effort. The cost of <em>not</em> building it is measured in trust, legal risk, and operational
            drag.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">See What Audit-Ready Looks Like</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Stop assembling reports after the fact. Start generating them automatically as part of every
              assessment.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/resources/sample-report"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-center font-semibold text-ink hover:bg-brand-orange"
            >
              View Sample Report
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border border-ink px-6 py-3 text-center font-medium text-ink hover:bg-ink hover:text-white"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED READING ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-ink">Related reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/gcc-hiring-hq-mistakes', label: 'GCC HQ Mistakes', desc: 'Common mistakes GCCs make when reporting to headquarters' },
              { href: '/blog/panel-consistency-distributed-teams', label: 'Panel Consistency', desc: 'Maintaining evaluation standards across distributed teams' },
              { href: '/solutions/gcc', label: 'GCC Solutions', desc: 'How LayersRank supports global capability centers' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-ink">{link.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
