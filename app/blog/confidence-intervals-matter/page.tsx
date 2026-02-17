import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Why Confidence Intervals Matter More Than Interview Scores | LayersRank',
  description:
    'Your interview process produces scores. But a 74 you can trust is different from a 74 you can\'t. Learn why confidence levels change hiring decisions.',
  path: '/blog/confidence-intervals-matter',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Confidence Intervals Matter More Than Scores',
  description:
    'Your interview process produces scores. But a 74 you can trust is different from a 74 you can\'t. Learn why confidence levels change hiring decisions.',
  author: { '@type': 'Organization', name: 'LayersRank Team' },
  publisher: { '@type': 'Organization', name: 'LayersRank', url: 'https://www.layersrank.com' },
  datePublished: '2026-02-01',
  keywords: [
    'interview confidence intervals',
    'hiring score reliability',
    'assessment uncertainty',
    'interview scoring accuracy',
  ],
};

export default function ConfidenceIntervalsBlogPost() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <time dateTime="2026-02">February 2026</time>
            <span aria-hidden="true">&middot;</span>
            <span>5 min read</span>
            <span aria-hidden="true">&middot;</span>
            <span>LayersRank Team</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Why Confidence Intervals Matter More Than Scores
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
            Your interview process produces numbers. Candidate&nbsp;A scored 74. Candidate&nbsp;B scored 71.
            Easy decision, right? Candidate&nbsp;A is better.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            But what if I told you that Candidate&nbsp;A&rsquo;s 74 came from evaluators who disagreed
            significantly&nbsp;&mdash; one said 85, another said 63&nbsp;&mdash; while Candidate&nbsp;B&rsquo;s 71 came
            from evaluators who all independently landed between 69 and 73?
          </p>
          <p className="mt-3 text-lg font-semibold text-brand-yellow md:text-xl">
            Still confident about your decision?
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM WITH NAKED SCORES ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Problem With Naked Scores</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Traditional hiring tools give you scores without context. &ldquo;This candidate scored
              74%&rdquo;&nbsp;&mdash; as if that number emerged from some precise measurement device, reliable to
              several decimal places.
            </p>
            <p>It didn&rsquo;t.</p>
            <p>
              That 74 is an aggregation of subjective judgments, model outputs, or human evaluations that may or may
              not agree with each other. The number looks precise but hides enormous uncertainty.
            </p>
            <p className="font-medium text-ink">
              Two candidates can both score 74 with completely different reliability:
            </p>
          </div>

          {/* side-by-side candidate cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Candidate A */}
            <div className="rounded-xl border border-brand-red/30 bg-red-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Candidate A: 74 <span className="text-brand-red">(Contested)</span></h3>
              <ul className="mt-4 space-y-1 text-sm text-ink-light">
                <li>Evaluator 1: <strong className="text-ink">85</strong></li>
                <li>Evaluator 2: <strong className="text-ink">63</strong></li>
                <li>Evaluator 3: <strong className="text-ink">74</strong></li>
              </ul>
              <p className="mt-3 text-sm text-ink-light">Average: <strong>74</strong></p>
              <p className="mt-1 text-sm font-medium text-brand-red">
                Reality: Nobody agrees. Could be anywhere from 60 to 90.
              </p>
            </div>
            {/* Candidate B */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <h3 className="text-lg font-bold text-ink">Candidate B: 74 <span className="text-brand-green">(Solid)</span></h3>
              <ul className="mt-4 space-y-1 text-sm text-ink-light">
                <li>Evaluator 1: <strong className="text-ink">73</strong></li>
                <li>Evaluator 2: <strong className="text-ink">75</strong></li>
                <li>Evaluator 3: <strong className="text-ink">74</strong></li>
              </ul>
              <p className="mt-3 text-sm text-ink-light">Average: <strong>74</strong></p>
              <p className="mt-1 text-sm font-medium text-brand-green">
                Reality: Tight agreement. Probably 72&ndash;76.
              </p>
            </div>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            Traditional systems report both as &ldquo;74.&rdquo; You have no idea which is which.
          </p>
        </div>
      </section>

      {/* ── WHY THIS MATTERS FOR DECISIONS ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Why This Matters for Decisions</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>Let&rsquo;s say your hiring threshold is 70. Both candidates pass.</p>
            <p>But wait:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-ink">Candidate&nbsp;A</strong> might actually be a 63 (below threshold) or
                an 85 (well above)
              </li>
              <li>
                <strong className="text-ink">Candidate&nbsp;B</strong> is almost certainly between 72&ndash;76
              </li>
            </ul>
            <p>
              If you have limited final-round capacity, Candidate&nbsp;B is the safer bet&nbsp;&mdash; you know what
              you&rsquo;re getting. Candidate&nbsp;A is a gamble.
            </p>
            <p>
              Or consider this: if Candidate&nbsp;A&rsquo;s &ldquo;true&rdquo; score is anywhere in the 60&ndash;90
              range, shouldn&rsquo;t you investigate further before deciding? A clarifying question might reveal
              they&rsquo;re actually excellent (the 63 evaluator was wrong) or actually weak (the 85 evaluator was
              too generous).
            </p>
            <p className="font-medium text-ink">
              Without confidence information, you can&rsquo;t make these nuanced decisions. You&rsquo;re flying
              blind, treating every 74 as equally reliable when they&rsquo;re not.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT CONFIDENCE INTERVALS ACTUALLY TELL YOU ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Confidence Intervals Actually Tell You</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">
            When LayersRank reports &ldquo;74 &plusmn; 4, 87% confidence,&rdquo; here&rsquo;s what that means:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* High confidence */}
            <div className="rounded-xl border border-brand-green/30 bg-green-50/40 p-6">
              <p className="font-mono text-lg font-bold text-ink">74 &plusmn; 4, 87% confidence</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li><strong className="text-ink">74</strong> = Our best estimate of the candidate&rsquo;s score</li>
                <li><strong className="text-ink">&plusmn; 4</strong> = The score is almost certainly between 70 and 78</li>
                <li><strong className="text-ink">87% confidence</strong> = Our evaluation models substantially agreed</li>
              </ul>
            </div>
            {/* Low confidence */}
            <div className="rounded-xl border border-brand-orange/30 bg-orange-50/40 p-6">
              <p className="font-mono text-lg font-bold text-ink">74 &plusmn; 12, 55% confidence</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-light">
                <li><strong className="text-ink">74</strong> = Same best estimate</li>
                <li><strong className="text-ink">&plusmn; 12</strong> = Could be anywhere from 62 to 86</li>
                <li><strong className="text-ink">55% confidence</strong> = Models disagreed significantly; something&rsquo;s ambiguous</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-base font-semibold text-ink">
            Same score. Completely different information. Completely different decisions.
          </p>
        </div>
      </section>

      {/* ── HOW TO USE CONFIDENCE IN PRACTICE ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How to Use Confidence in Practice</h2>

          <div className="mt-10 space-y-10">
            {/* High */}
            <div className="border-l-4 border-brand-green pl-6">
              <h3 className="text-lg font-bold text-ink">
                High confidence (&gt;80%), tight interval (&plusmn;5 or less)
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Trust the score. Act on it. A candidate with &ldquo;82 &plusmn; 3, 91% confidence&rdquo; is reliably
                strong. A candidate with &ldquo;58 &plusmn; 4, 88% confidence&rdquo; is reliably below bar. These
                are clear decisions.
              </p>
            </div>

            {/* Moderate */}
            <div className="border-l-4 border-brand-yellow pl-6">
              <h3 className="text-lg font-bold text-ink">
                Moderate confidence (60&ndash;80%), moderate interval (&plusmn;5&ndash;10)
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-light md:text-base">
                Usable but probe further. The score is probably in the right range, but final rounds should validate.
                Pay attention to which dimensions have lower confidence&nbsp;&mdash; probe those specifically.
              </p>
            </div>

            {/* Low */}
            <div className="border-l-4 border-brand-red pl-6">
              <h3 className="text-lg font-bold text-ink">
                Low confidence (&lt;60%), wide interval (&gt;&plusmn;10)
              </h3>
              <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-ink-light md:text-base">
                <p>
                  Don&rsquo;t trust the score. Something about this candidate&rsquo;s responses was
                  ambiguous&nbsp;&mdash; different evaluation approaches see different things. This isn&rsquo;t
                  necessarily bad (the candidate might be excellent but unusual), but you need more information before
                  deciding.
                </p>
                <p>
                  LayersRank&rsquo;s adaptive follow-up triggers automatically when confidence is low, asking
                  clarifying questions to resolve ambiguity. But even with follow-up, some candidates remain genuinely
                  hard to assess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE "WE'RE NOT SURE" SIGNAL ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The &ldquo;We&rsquo;re Not Sure&rdquo; Signal</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Here&rsquo;s something counterintuitive: a &ldquo;we&rsquo;re not sure&rdquo; signal is often
              <em> more valuable</em> than a forced guess.
            </p>
            <p>
              Traditional systems force a verdict on every candidate. Thumbs up or thumbs down. Pass or fail. The
              system can&rsquo;t say &ldquo;I don&rsquo;t know.&rdquo;
            </p>
            <p>
              But sometimes &ldquo;I don&rsquo;t know&rdquo; is the honest answer. The candidate gave responses that
              could be interpreted multiple ways. The evidence genuinely points in both directions. Forcing a
              confident score would be lying.
            </p>
            <p className="font-medium text-ink">
              For risk-conscious leaders, knowing when to trust your data is as important as the data itself. A
              confident score you act on incorrectly costs you (bad hires, missed candidates). An uncertain score you
              investigate further costs you almost nothing.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY MOST TOOLS DON'T SHOW CONFIDENCE ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Why Most Tools Don&rsquo;t Show Confidence
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-light md:text-base">Three reasons:</p>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-bold text-ink">They can&rsquo;t calculate it.</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Many AI hiring tools use black-box models that produce scores without any measure of uncertainty.
                  The score is whatever the neural network outputs&nbsp;&mdash; there&rsquo;s no mathematical
                  framework for measuring reliability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-bold text-ink">It&rsquo;s complicated to explain.</h3>
                <p className="mt-1 text-sm text-ink-light">
                  &ldquo;You scored 74&rdquo; is simple. &ldquo;You scored 74 &plusmn; 6 with 78%
                  confidence&rdquo; requires explanation. Many vendors assume customers want simplicity over
                  accuracy.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-bold text-ink">It reveals limitations.</h3>
                <p className="mt-1 text-sm text-ink-light">
                  Showing low confidence on some candidates admits the system doesn&rsquo;t always know. Some vendors
                  prefer to project certainty even when it&rsquo;s not warranted.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-ink-light md:text-base">
            LayersRank takes the opposite approach. We believe honest uncertainty is more valuable than false
            precision. And we&rsquo;ve built the mathematical framework (TR-q-ROFNs) to actually quantify that
            uncertainty.
          </p>
        </div>
      </section>

      {/* ── THE BOTTOM LINE ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">The Bottom Line</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-light md:text-base">
            <p>
              Next time you see a candidate score without a confidence level, ask: &ldquo;How reliable is this
              number?&rdquo;
            </p>
            <p>
              If the vendor can&rsquo;t tell you, they either don&rsquo;t know or don&rsquo;t want to admit it.
              Either way, you&rsquo;re making decisions on data you can&rsquo;t fully trust.
            </p>
            <p className="text-base font-semibold text-ink md:text-lg">
              Confidence intervals aren&rsquo;t academic curiosities. They&rsquo;re the difference between informed
              decisions and educated guesses.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/resources/sample-report"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-center font-semibold text-ink hover:bg-brand-orange"
            >
              See a Sample Report
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
              { href: '/product/confidence-scoring', label: 'Confidence Scoring', desc: 'Deep dive into how scores are generated' },
              { href: '/science/fuzzy-logic', label: 'Fuzzy Logic Framework', desc: 'The math behind uncertainty quantification' },
              { href: '/product/adaptive-questioning', label: 'Adaptive Follow-Up', desc: 'How low confidence triggers clarifying questions' },
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
