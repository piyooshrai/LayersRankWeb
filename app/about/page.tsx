import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { fullOrganizationSchema } from '@/lib/structured-data';

export const metadata = makeMetadata({
  title: 'About LayersRank | The Story Behind Confidence-Weighted Hiring',
  description:
    'LayersRank was built because we were tired of hiring decisions based on gut feelings and inconsistent interviews. Learn why we created an AI hiring platform that tells you not just the score, but how much to trust it.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={fullOrganizationSchema} />

      {/* ── HERO ── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl lg:text-6xl">
            We Built LayersRank Because We Kept Getting Hiring Wrong
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-light md:text-xl">
            And we realized the problem wasn&apos;t our judgment — it was that we had no idea how much to trust our own assessments.
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM WE FACED ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">The Problem We Faced</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">Every Founder Knows This Feeling</h2>
          <div className="mt-8 space-y-5 text-ink-light leading-relaxed">
            <p>
              You interview a candidate. They seem great. Smart answers, good energy, says all the
              right things.
            </p>
            <p>You hire them.</p>
            <p>Three months later, you&apos;re wondering what went wrong.</p>
            <p>
              We&apos;ve been there. Multiple times. As founders building teams across India and
              working with startups globally, we watched the same pattern repeat:
            </p>
            <p className="border-l-4 border-brand-yellow pl-4 text-lg font-medium text-ink">
              The interview felt good. The data said nothing.
            </p>
            <p>
              We&apos;d walk out of interviews with a &ldquo;feeling&rdquo; about someone. Maybe they
              reminded us of a past colleague. Maybe they used the right buzzwords. Maybe we were just
              tired that day and anyone competent seemed like a relief.
            </p>
            <p>
              When it worked, we called it &ldquo;good instincts.&rdquo; When it failed, we blamed the
              candidate for &ldquo;not being a culture fit.&rdquo;
            </p>
            <p>
              But here&apos;s what we never had: a way to know how confident we should actually be in
              our assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE INSIGHT ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">The Insight</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">
            The Problem Isn&apos;t Bad Judgment. It&apos;s Hidden Uncertainty.
          </h2>
          <div className="mt-8 space-y-5 text-ink-light leading-relaxed">
            <p>
              We started asking ourselves a different question. Not &ldquo;What score should this
              candidate get?&rdquo; but &ldquo;How much should we trust any score we give them?&rdquo;
            </p>
            <p>Think about it:</p>
            <ul className="ml-4 space-y-2">
              <li className="flex gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                A score of 75 from a clear, detailed, consistent response is very different from&hellip;
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                A score of 75 from a vague, rambling answer where you&apos;re basically guessing
              </li>
            </ul>
            <p>
              Traditional hiring tools treat both the same. They give you a number and expect you to
              act on it.
            </p>
            <p>
              But experienced hiring managers know the difference. They just can&apos;t articulate it —
              and they definitely can&apos;t scale it across a team of interviewers.
            </p>
            <p>
              That&apos;s when we found our answer in an unexpected place: fuzzy mathematics.
              Specifically, a framework called{' '}
              <Link href="/science/tr-q-rofns" className="font-medium text-brand-yellow hover:text-brand-orange">
                TR-q-ROFNs
              </Link>{' '}
              (Type-Reduced q-Rung Orthopair Fuzzy Numbers) that was designed for complex
              decision-making in supply chain evaluation — situations where you need to make
              high-stakes decisions with incomplete information.
            </p>
            <p>Sound familiar?</p>
            <p>
              We adapted this framework for hiring. Not to make scores more &ldquo;accurate&rdquo; —
              but to quantify the uncertainty that&apos;s always been there, hiding in plain sight.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">The Solution</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">
            LayersRank: Scores That Tell You What They Mean
          </h2>
          <div className="mt-8 space-y-5 text-ink-light leading-relaxed">
            <p>
              LayersRank is an AI-powered interview platform that evaluates candidates across three
              dimensions — technical ability, behavioral signals, and contextual fit.
            </p>
            <p>But here&apos;s what makes it different:</p>
            <p className="border-l-4 border-brand-yellow pl-4 text-lg font-medium text-ink">
              Every score comes with a{' '}
              <Link href="/product/confidence-scoring" className="text-brand-yellow hover:text-brand-orange">
                confidence level
              </Link>.
            </p>
            <p>When we tell you a candidate scored 78, we also tell you:</p>
            <ul className="ml-4 space-y-2">
              <li className="flex gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                The confidence interval (&plusmn; 4 points)
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                How certain we are (91% confidence)
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                Which dimensions are solid and which need verification
              </li>
            </ul>
            <p>
              When confidence is low, we don&apos;t just shrug and give you a number anyway. The
              system triggers adaptive follow-up questions to dig deeper — automatically clarifying
              vague responses until we have enough signal to give you a score you can actually trust.
            </p>
            <p className="font-medium text-ink">
              The result: You know when to move fast, and you know when to slow down and verify.
            </p>
            <p>
              No more treating every assessment as equally reliable. No more gut decisions dressed up
              as data.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY "LAYERSRANK"? ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">Why &ldquo;LayersRank&rdquo;?</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">The Name</h2>
          <div className="mt-8 space-y-5 text-ink-light leading-relaxed">
            <p>
              <strong className="text-ink">Layers</strong> because we evaluate candidates across
              multiple dimensions — not just technical skills, but how they think, how they
              communicate, and how they&apos;d fit your specific context.
            </p>
            <p>
              <strong className="text-ink">Rank</strong> because ultimately, you need to make a
              decision. Who moves forward? Who doesn&apos;t? We give you defensible rankings backed by
              transparent logic.
            </p>
            <p>
              The acronym works too:{' '}
              <strong className="text-ink">
                Logic-Assisted Yield Evaluation &amp; Ranking System
              </strong>.
            </p>
            <p>
              But mostly, we liked that it captures what we actually do: add layers of rigor to a
              process that&apos;s been running on intuition for too long.
            </p>
          </div>
        </div>
      </section>

      {/* ── BUILT BY THE ALGORITHM ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">Why The Algorithm?</p>
          <h2 className="mt-2 text-3xl font-bold">Built by The Algorithm</h2>
          <div className="mt-8 space-y-5 text-gray-300 leading-relaxed">
            <p>
              LayersRank is a product of{' '}
              <a
                href="https://www.the-algo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-yellow hover:text-brand-orange"
              >
                The Algorithm
              </a>
              , a company focused on applying structured decision-making to messy human problems.
            </p>
            <p>
              We&apos;re not an HR tech company that stumbled into AI. We&apos;re a team that&apos;s
              spent years thinking about how to make better decisions under uncertainty — and hiring is
              one of the most consequential, uncertain decisions a company makes.
            </p>
            <div className="rounded-xl border border-gray-600 bg-white/5 p-6">
              <p className="text-sm font-semibold text-brand-yellow">Our background:</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  Founded in India, serving teams globally
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  Research published on SSRN: &ldquo;Evaluating Recruitment Robustness: A Multi-Dimensional
                  Ranking Framework Using Type-Reduced q-Rung Orthopair Fuzzy Sets&rdquo;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  Built for the realities of high-growth hiring: speed matters, but so does getting it right
                </li>
              </ul>
            </div>
            <p>
              We built LayersRank because we needed it ourselves. Now we&apos;re sharing it with teams
              who feel the same frustration we did.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR PRINCIPLES ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">What We Believe</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">Our Principles</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Uncertainty Isn\u2019t a Bug \u2014 It\u2019s Information',
                body: 'Most tools hide uncertainty to seem more confident. We surface it because knowing what you don\u2019t know is half the battle.',
              },
              {
                title: 'AI Should Support Judgment, Not Replace It',
                body: 'We don\u2019t make hiring decisions. You do. Our job is to give you better information, faster \u2014 and be honest about where the gaps are.',
              },
              {
                title: 'Bias Hides in \u201CGut Feelings\u201D',
                body: 'Structured evaluation isn\u2019t about removing humanity from hiring. It\u2019s about making sure the human decision is based on signal, not noise.',
              },
              {
                title: 'Speed and Quality Aren\u2019t Trade-offs',
                body: 'The companies that win talent aren\u2019t choosing between moving fast and hiring well. They\u2019re doing both. That requires better tools, not more process.',
              },
              {
                title: 'Hiring Affects Livelihoods',
                body: 'We take this seriously. Every candidate is a person making career decisions. We build with that weight in mind \u2014 no \u201Cmove fast and break things\u201D when people\u2019s futures are involved.',
              },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-light leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink">The Team</h2>
          <div className="mt-8 rounded-xl border border-gray-200 bg-paper-off p-6">
            <p className="font-semibold text-ink">Piyoosh Rai</p>
            <p className="text-sm text-ink-muted">Founder</p>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="bg-paper-off py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-4 text-center md:grid-cols-3">
            {[
              { city: 'Indore, India', label: 'HQ' },
              { city: 'London, UK', label: '' },
              { city: 'Denver, USA', label: '' },
            ].map((loc) => (
              <div key={loc.city} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="font-semibold text-ink">{loc.city}</p>
                {loc.label && <p className="text-xs text-ink-muted">{loc.label}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="gradient-cta py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Ready to Stop Guessing?</h2>
          <p className="mt-4 text-lg text-ink-light">
            See how LayersRank evaluates candidates — with scores you can actually trust.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pricing"
              className="rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
            >
              Start Free Assessment
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
