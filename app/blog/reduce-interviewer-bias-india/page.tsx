import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Reduce Interviewer Bias in India Technical Panels | Fair Hiring | LayersRank',
  description:
    'Interview panels in India show 15-25% variance on the same candidates. Here\u2019s how to reduce bias and improve consistency in technical hiring.',
  path: '/blog/reduce-interviewer-bias-india',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Reduce Interviewer Bias in India-Based Technical Panels',
  description:
    'Interview panels in India show 15-25% variance on the same candidates. Here\u2019s how to reduce bias and improve consistency in technical hiring.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'interviewer bias India',
    'technical panel consistency',
    'reduce hiring bias',
    'fair technical interviews',
    'panel interview variance',
  ],
};

export default function ReduceInterviewerBiasBlogPost() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <time dateTime="2026-02">February 2026</time>
            <span aria-hidden="true">&middot;</span>
            <span>7 min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>LayersRank Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            How to Reduce Interviewer Bias in India-Based Technical Panels
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            Try an uncomfortable experiment. Have two independent panels evaluate the same candidate
            without comparing notes. They&rsquo;ll disagree 15&ndash;25% of the time&nbsp;&mdash; on
            the <em>same person</em>, answering the <em>same questions</em>.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            That variance isn&rsquo;t measuring candidate quality. It&rsquo;s measuring interviewer
            inconsistency. Your process is evaluating the interaction, not the engineer.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            India&rsquo;s hiring landscape has unique factors that make this problem worse. Scale
            pressure, regional diversity, pedigree culture, and timezone constraints all compound to
            create panels that are more variable than they need to be.
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            Here&rsquo;s how to fix it.
          </p>
        </div>
      </section>

      {/* ── WHY INDIA PANELS ARE PARTICULARLY VARIABLE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Why India Panels Are Particularly Variable
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Every hiring market has bias. But India&rsquo;s technical hiring ecosystem has six
              compounding factors that make panel variance especially acute.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Scale Pressure */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Scale Pressure</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-orange">
                50+ interviews/week per panel
              </p>
              <p className="mt-2 text-sm text-ink-light">
                India&rsquo;s top IT firms run massive hiring drives. Interviewers conducting
                50&nbsp;interviews a week experience decision fatigue. By Friday afternoon, their
                standards drift&nbsp;&mdash; candidates get harsher or more lenient scores depending
                on when they&rsquo;re evaluated, not how they perform.
              </p>
            </div>

            {/* Junior Interviewers */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Junior Interviewers</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-orange">
                Volume requires uncalibrated evaluators
              </p>
              <p className="mt-2 text-sm text-ink-light">
                Scale demands bodies. Engineers with 2&ndash;3 years of experience get drafted into
                interview panels. They haven&rsquo;t developed stable evaluation frameworks.
                They&rsquo;re pattern-matching against their own limited experience, not against a
                calibrated standard.
              </p>
            </div>

            {/* Regional Variation */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Regional Variation</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-orange">
                Bangalore / Hyderabad / Pune / NCR drift
              </p>
              <p className="mt-2 text-sm text-ink-light">
                Each tech hub develops its own interviewing culture. Bangalore panels may emphasize
                system design; Hyderabad panels may lean toward coding speed; Pune panels may weight
                communication differently. The same candidate gets different scores in different
                cities&nbsp;&mdash; for the same role.
              </p>
            </div>

            {/* Communication Style Bias */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Communication Style Bias</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-orange">
                Indian English varies by region &amp; education
              </p>
              <p className="mt-2 text-sm text-ink-light">
                India has enormous linguistic diversity. A candidate from Tamil Nadu communicates
                differently from one from Punjab&nbsp;&mdash; accent, idiom, directness. Interviewers
                unconsciously penalize unfamiliar communication patterns, confusing &ldquo;speaks
                differently from me&rdquo; with &ldquo;communicates poorly.&rdquo;
              </p>
            </div>

            {/* Pedigree Bias */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Pedigree Bias</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-orange">
                IIT / NIT&nbsp;&mdash; explicit or implicit
              </p>
              <p className="mt-2 text-sm text-ink-light">
                India&rsquo;s tiered college system creates deep-rooted assumptions. IIT graduates
                get the benefit of the doubt. Tier-3 college graduates have to prove themselves twice
                over. Even interviewers who believe they&rsquo;re objective carry these associations.
                The data consistently shows score inflation for premium-pedigree candidates.
              </p>
            </div>

            {/* Time Zone Pressure */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Time Zone Pressure</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-orange">
                US coordination forces quick decisions
              </p>
              <p className="mt-2 text-sm text-ink-light">
                India panels often serve US-based hiring managers who need results by their morning.
                That creates pressure to evaluate quickly, compress deliberation, and ship a verdict
                before the overlap window closes. Speed and accuracy rarely coexist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE THREE TYPES OF INTERVIEW BIAS ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            The Three Types of Interview Bias
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Not all bias looks the same. Understanding the mechanism helps you design the right
              countermeasure.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Similarity Bias */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <div className="flex items-baseline gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  1
                </span>
                <h3 className="text-lg font-bold text-ink">Similarity Bias</h3>
              </div>
              <p className="mt-3 text-sm font-medium text-ink">
                &ldquo;I prefer candidates who are like me.&rdquo;
              </p>
              <p className="mt-2 text-sm text-ink-light">
                Interviewers unconsciously favour candidates who share their background&nbsp;&mdash;
                same college, same previous employer, same communication style, same personality type.
                An IIT alumnus interviewing an IIT candidate feels an instant rapport that a Tier-2
                college candidate never gets. A quiet interviewer penalizes an extroverted candidate
                for &ldquo;talking too much.&rdquo; None of this correlates with job performance.
              </p>
            </div>

            {/* Halo/Horn Effects */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <div className="flex items-baseline gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  2
                </span>
                <h3 className="text-lg font-bold text-ink">Halo / Horn Effects</h3>
              </div>
              <p className="mt-3 text-sm font-medium text-ink">
                &ldquo;One signal colours everything.&rdquo;
              </p>
              <p className="mt-2 text-sm text-ink-light">
                A single strong or weak signal distorts the entire evaluation. IIT on the
                resume?&nbsp;Assume strong across the board. Poor spoken English?&nbsp;Assume weak
                technical skills. Nervous in the first five minutes?&nbsp;Assume incompetent for the
                remaining fifty-five. The halo effect inflates; the horn effect deflates. Both
                override the actual evidence.
              </p>
            </div>

            {/* Contrast Effects */}
            <div className="rounded-xl border border-brand-yellow/30 bg-yellow-50/40 p-6">
              <div className="flex items-baseline gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  3
                </span>
                <h3 className="text-lg font-bold text-ink">Contrast Effects</h3>
              </div>
              <p className="mt-3 text-sm font-medium text-ink">
                &ldquo;Compared to who came before.&rdquo;
              </p>
              <p className="mt-2 text-sm text-ink-light">
                Candidates aren&rsquo;t evaluated in isolation&nbsp;&mdash; they&rsquo;re compared to
                whoever the interviewer just spoke with. A strong candidate makes the next one look
                weak. A weak candidate makes the next one look strong. The order of interviews
                changes outcomes. That&rsquo;s not a measurement system; that&rsquo;s a coin flip
                with extra steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRUCTURAL SOLUTIONS (WHAT ACTUALLY WORKS) ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Structural Solutions That Actually Work
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              &ldquo;Try to be less biased&rdquo; doesn&rsquo;t work. Awareness training has
              negligible long-term impact. What works is changing the <em>structure</em> so that bias
              has fewer places to hide.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {/* 1. Standardized Questions */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">Standardized Questions</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Every candidate for a given role answers the same core questions. No freestyling, no
                  &ldquo;I like to ask my own thing.&rdquo; When questions vary, you&rsquo;re measuring
                  question difficulty, not candidate ability. Standardization removes this variable
                  entirely.
                </p>
              </div>
            </div>

            {/* 2. Scoring Rubrics */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Scoring Rubrics</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Define what a 1, 2, 3, 4, and 5 look like with concrete, observable examples.
                  &ldquo;Strong problem-solving&rdquo; is vague. &ldquo;Identified the edge case
                  without prompting and proposed a solution within 2&nbsp;minutes&rdquo; is a rubric.
                  When interviewers share the same ruler, measurements converge.
                </p>
              </div>
            </div>

            {/* 3. Blind Evaluation */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Blind Evaluation</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Hide candidate identity in the first round. No name, no college, no previous
                  employer. Evaluate the work, not the pedigree. This single change eliminates
                  halo/horn effects from resume signals and forces evaluators to judge on actual
                  performance.
                </p>
              </div>
            </div>

            {/* 4. Multiple Independent Evaluators */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Multiple Independent Evaluators</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Have 2&ndash;3 evaluators assess each candidate independently&nbsp;&mdash; no
                  discussion before scoring. Compare results. When evaluators disagree significantly,
                  flag it for review. Agreement builds confidence; disagreement signals ambiguity that
                  deserves investigation, not a forced average.
                </p>
              </div>
            </div>

            {/* 5. Structured Feedback Forms */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                5
              </span>
              <div>
                <h3 className="font-bold text-ink">Structured Feedback Forms</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Require numeric scores <em>before</em> written notes. When interviewers write their
                  narrative first, the score follows the story. When they score first, the narrative
                  follows the evidence. This simple ordering change reduces rationalization bias
                  significantly.
                </p>
              </div>
            </div>

            {/* 6. Calibration Sessions */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                6
              </span>
              <div>
                <h3 className="font-bold text-ink">Calibration Sessions</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Monthly, have your entire panel evaluate the same recorded candidate independently,
                  then discuss differences. Where did scores diverge? Why? What did one evaluator see
                  that another missed? These sessions don&rsquo;t just reduce bias&nbsp;&mdash; they
                  build a shared evaluation language across your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY SOLUTIONS ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Technology Solutions</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Structure helps. But technology can enforce consistency at a level humans
              can&rsquo;t&nbsp;&mdash; every time, every candidate, no exceptions.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {/* Async Assessment */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Async Assessment</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                When candidates complete assessments asynchronously, you eliminate the interviewer&rsquo;s
                mood, fatigue, and in-the-moment reactions. The candidate&rsquo;s 9&nbsp;AM response is
                evaluated with the same rigour as their 4&nbsp;PM response. No Friday-afternoon fatigue.
                No post-lunch slump. The evaluation happens on the work itself, not on the moment.
              </p>
            </div>

            {/* AI-Assisted Scoring */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">AI-Assisted Scoring</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                An AI model applies the same rubric every single time. It doesn&rsquo;t care if the
                candidate went to IIT or a Tier-3 college. It doesn&rsquo;t get tired. It doesn&rsquo;t
                have similarity bias. It evaluates what&rsquo;s in front of it against a consistent
                standard. Not perfect&nbsp;&mdash; but consistently imperfect in measurable, correctable
                ways.
              </p>
            </div>

            {/* Aggregate Evaluation */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Aggregate Evaluation</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Use multiple evaluation models and surface disagreement explicitly. When three
                independent AI assessments agree, confidence is high. When they diverge, the system
                flags it&nbsp;&mdash; just like well-calibrated human panels should. Disagreement
                isn&rsquo;t hidden in an average; it&rsquo;s surfaced as a signal that more
                investigation is needed.
              </p>
            </div>

            {/* Audit Trails */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">Audit Trails</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Technology creates records. Every score, every rubric application, every decision
                point is logged. Over time, you can detect bias patterns retroactively&nbsp;&mdash;
                does Interviewer&nbsp;X consistently score IIT candidates higher? Does Panel&nbsp;Y
                show contrast effects on Monday mornings? You can&rsquo;t fix what you can&rsquo;t
                see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEASURING YOUR BIAS PROBLEM ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Measuring Your Bias Problem</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              You can&rsquo;t reduce what you don&rsquo;t measure. Here are five metrics that tell
              you how much bias your panels actually carry.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Inter-Rater Agreement */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Inter-Rater Agreement</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-green">
                Cohen&rsquo;s &kappa; or ICC
              </p>
              <p className="mt-2 text-sm text-ink-light">
                Have two interviewers independently score the same candidate. Calculate agreement
                rate. Below 0.6 means your interviewers are essentially rolling dice. Above 0.8
                means your rubrics and calibration are working.
              </p>
            </div>

            {/* Score Distribution by Demographic */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Score Distribution by Demographic</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-green">
                Segment &amp; compare
              </p>
              <p className="mt-2 text-sm text-ink-light">
                Slice scores by college tier, region, gender, and years of experience. If IIT
                candidates consistently score 10&nbsp;points higher, is that skill or bias?
                Statistical tests can distinguish real differences from systematic inflation.
              </p>
            </div>

            {/* Interviewer Variance */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Interviewer Variance</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-green">
                Per-interviewer &sigma;
              </p>
              <p className="mt-2 text-sm text-ink-light">
                Some interviewers are hawks; some are doves. Calculate each interviewer&rsquo;s
                average score and standard deviation. High-variance interviewers are inconsistent.
                Interviewers whose mean deviates significantly from the panel mean need recalibration.
              </p>
            </div>

            {/* Contrast Effects */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Contrast Effects</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-green">
                Sequential score correlation
              </p>
              <p className="mt-2 text-sm text-ink-light">
                Check if a candidate&rsquo;s score correlates with the previous candidate&rsquo;s
                score. A negative correlation (high score followed by low score, repeatedly) signals
                contrast bias. Randomizing interview order helps; measuring it proves the fix works.
              </p>
            </div>

            {/* Decision Reversal Rate */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6 sm:col-span-2">
              <h3 className="text-lg font-bold text-ink">Decision Reversal Rate</h3>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-green">
                Panel A vs. Panel B disagreement %
              </p>
              <p className="mt-2 text-sm text-ink-light">
                The ultimate test: if two independent panels evaluated the same candidates, how often
                would they make different hire/no-hire decisions? A reversal rate above 15% means your
                process is unreliable. Candidates are being accepted or rejected based on which panel
                they happened to draw&nbsp;&mdash; not on their actual ability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK WINS FOR TOMORROW ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Quick Wins for Tomorrow</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              You don&rsquo;t need new technology to start reducing bias. These five changes can be
              implemented immediately&nbsp;&mdash; before your next interview.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">Write down your questions in advance</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Before you start an interview, have your questions ready. Same questions for every
                  candidate at that level. Resist the urge to improvise. Improvisation feels natural
                  but introduces variance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">Create a simple scoring rubric</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Even a basic one helps. For each question, define what a &ldquo;strong,&rdquo;
                  &ldquo;acceptable,&rdquo; and &ldquo;weak&rdquo; answer looks like. Write it down.
                  Share it with co-interviewers. A shared rubric&nbsp;&mdash; even an imperfect
                  one&nbsp;&mdash; beats individual judgment every time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">Hide the resume during evaluation</h3>
                <p className="mt-1 text-sm text-ink-light">
                  If you&rsquo;re scoring a coding exercise or system design, don&rsquo;t look at
                  the candidate&rsquo;s resume while you score. Evaluate the work first, then check
                  the background. This one habit eliminates pedigree bias from the scoring step.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
                4
              </span>
              <div>
                <h3 className="font-bold text-ink">Track disagreement between interviewers</h3>
                <p className="mt-1 text-sm text-ink-light">
                  When two interviewers disagree on a candidate, don&rsquo;t just average and move
                  on. Write down the disagreement. Over time, patterns emerge&nbsp;&mdash; certain
                  interviewers always clash, certain question types produce inconsistent results. The
                  data tells you where to focus your calibration effort.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-ink">
                5
              </span>
              <div>
                <h3 className="font-bold text-ink">Discuss calibration cases monthly</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Pick one past interview per month. Have the entire panel re-evaluate independently,
                  then discuss. Where did you agree? Where did you disagree? Why? Thirty minutes a
                  month of calibration discussion does more for consistency than any amount of bias
                  training.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-base font-semibold text-ink md:text-lg">
            No new technology required. Just discipline and structure.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Bottom Line</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Interviewer bias isn&rsquo;t a character flaw&nbsp;&mdash; it&rsquo;s a system design
              problem. India&rsquo;s unique hiring pressures amplify the variance, but structural
              and technological solutions can bring it under control.
            </p>
            <p>
              The question isn&rsquo;t whether your panels have bias. They do. The question is
              whether you&rsquo;re measuring it and designing around it.
            </p>
            <p className="text-base font-semibold text-ink md:text-lg">
              Fair hiring isn&rsquo;t about perfect interviewers. It&rsquo;s about imperfect
              interviewers inside a system that corrects for their imperfections.
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
              See How It Works
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
              { href: '/blog/panel-consistency-distributed-teams', label: 'Panel Consistency', desc: 'Keeping distributed teams aligned on standards' },
              { href: '/blog/confidence-intervals-matter', label: 'Confidence Intervals', desc: 'Why score reliability changes hiring decisions' },
              { href: '/science/bias-mitigation', label: 'Bias Mitigation Science', desc: 'The research behind fair evaluation systems' },
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
