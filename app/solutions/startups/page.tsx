import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Startup Hiring Platform | Fast Engineering Recruitment | LayersRank',
  description:
    'Hire fast without hiring wrong. Structured first-round interviews with 24-hour turnaround, priced for startups. Scale from 20 to 200 engineers with confidence.',
  path: '/solutions/startups',
});

const faqs = [
  {
    q: 'Can I use this for non-engineering roles?',
    a: 'Yes. We have question libraries for Product, Design, Sales, Marketing, and Operations. Same structured approach, different competencies.',
  },
  {
    q: 'What if a candidate needs accommodations?',
    a: 'Contact us before they begin. We can extend time limits, adjust formats, or make other accommodations.',
  },
  {
    q: 'Can candidates cheat?',
    a: 'We track paste events, tab switches, and typing patterns. Suspicious behavior flags the report for your review. Can determined candidates still cheat? Possibly. But we make it risky enough that most won\'t try.',
  },
  {
    q: 'Do I need to integrate with an ATS?',
    a: 'No. You can use LayersRank standalone — just send links and review reports. ATS integration is available when you\'re ready for it.',
  },
  {
    q: 'How is this different from HackerRank?',
    a: 'HackerRank tests if candidates can code. LayersRank evaluates if they can think, communicate, and solve real problems. We assess the whole engineer, not just syntax. See our comparison page for details.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function StartupsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Solutions / Startups"
        title="Hire Fast Without Hiring Wrong"
        description="You're scaling from 20 to 100 engineers. Every hire matters. One bad senior engineer can set your roadmap back six months. LayersRank helps you move fast with confidence — structured first-rounds in 48 hours, not 2 weeks."
        primaryCta="Start Free Trial"
        primaryCtaHref="/signup"
        secondaryCta="See Pricing"
        secondaryCtaHref="/pricing"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <ImagePlaceholder label="Startup team reviewing engineering candidates quickly" search="startup team small office engineering hiring" />
        </div>
      </section>

      {/* ── THE STARTUP HIRING TRAP ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The startup hiring trap</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              You close your Series A. The board wants headcount growth. You post five engineering roles.
              Applications flood in. Now you&apos;re spending 12 hours a week on phone screens instead of
              building product.
            </p>
            <p>
              You make offers based on gut feel. Some work out. Some don&apos;t. The ones that don&apos;t
              are catastrophic.
            </p>
            <p>
              At a 50-person startup, one bad senior engineer isn&apos;t just a salary cost.
              It&apos;s a team drag. Engineers around them slow down. The manager spends 30% of their time
              on performance management. Morale drops. Good people start asking if the company can execute.
              Some leave.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-brand-red/20 bg-brand-red/5 p-6">
            <p className="text-sm font-semibold text-ink">The trap:</p>
            <p className="mt-1 text-sm text-ink-light">
              You need to move fast, but moving fast means quick decisions with limited information,
              which means some decisions will be wrong, which means moving slow overall because
              you&apos;re cleaning up mistakes.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-yellow">
              LayersRank breaks this trap. Speed and rigor are not opposites.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY STARTUP HIRING IS DIFFERENT ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Why startup hiring is different</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            It&apos;s not &ldquo;hiring with less resources.&rdquo; It&apos;s a fundamentally different problem.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Every hire is high-impact',
                desc: 'At a 30-person company, one mediocre engineer is 3% of your workforce. They\'re in every Slack channel, every planning meeting. Their judgment shapes technical decisions that compound for years. The margin for error is near zero.',
              },
              {
                title: 'Founders are the bottleneck',
                desc: 'You\'re the technical filter, the culture screen, and the closer. Every hour on a candidate who won\'t work out is an hour not spent on product, customers, or fundraising. But you can\'t delegate to someone without technical judgment.',
              },
              {
                title: 'You\'re competing against Big Tech',
                desc: 'The same candidates are getting recruiter spam from Google, Meta, Amazon. Your advantage is speed and mission. But if your process takes three weeks while Google extends an offer in ten days, your advantage disappears.',
              },
              {
                title: 'You don\'t have hiring infrastructure',
                desc: 'No ATS. No recruiting coordinator. No interview training. No calibration sessions. No standardized rubrics. You\'re making enterprise-level hiring decisions with seed-stage resources.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW LAYERSRANK HELPS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">How LayersRank helps startups</h2>

          <div className="mt-10 space-y-8">
            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Async interviews that don&apos;t require your time</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Candidates complete structured interviews on their own schedule. You&apos;re not blocking
                    calendar time for phone screens that may or may not happen. You wake up to completed
                    interviews. You review scored reports during focused work time. You make decisions based
                    on documented evidence, not hazy recollections of a 30-minute call.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">24-hour turnaround</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Candidate completes interview today. You have a scored report tomorrow morning.
                    Monday: send interview links. Tuesday: candidates complete. Wednesday morning:
                    review reports, shortlist. Wednesday afternoon: schedule final rounds with your top 3.
                    Friday: extend offer. One week from application to offer.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Founder-friendly reports</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    Reports lead with a clear verdict: Strong Candidate, Worth Interviewing, Borderline,
                    Below Bar. You know the recommendation in one second. Detail is there when you need it —
                    dimension scores, key strengths, suggested probes for your final round. But you don&apos;t
                    have to wade through it for routine decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-paper-off p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                  <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Priced for startups</h3>
                  <p className="mt-2 text-sm text-ink-light">
                    No enterprise contracts. No annual commitments. No per-seat licensing. Pay per completed
                    interview. Start with 10. Scale to 100. Your cost scales with your hiring, not with
                    arbitrary vendor pricing tiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE SPEED ADVANTAGE ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">The Speed Advantage</p>
          <h2 className="mt-4 text-2xl font-bold">Time kills deals</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            The best candidates have multiple processes running. The startup that moves fastest usually wins.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Traditional */}
            <div className="rounded-xl border border-gray-700 bg-white/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-red">Traditional Timeline</p>
              <div className="mt-4 space-y-2 font-mono text-xs text-gray-400">
                <p><span className="text-gray-300">Day 1:</span> Review resume, decide to screen</p>
                <p><span className="text-gray-300">Day 2-4:</span> Exchange emails to schedule</p>
                <p><span className="text-gray-300">Day 5:</span> Phone screen (if they show up)</p>
                <p><span className="text-gray-300">Day 6-8:</span> Decide, schedule technical</p>
                <p><span className="text-gray-300">Day 9-12:</span> Technical interview happens</p>
                <p><span className="text-gray-300">Day 13-15:</span> Schedule founder conversation</p>
                <p><span className="text-gray-300">Day 16-18:</span> Founder conversation</p>
                <p><span className="text-gray-300">Day 19-21:</span> References, deliberation</p>
                <p><span className="text-gray-300">Day 22-25:</span> Extend offer</p>
              </div>
              <div className="mt-4 rounded-lg bg-brand-red/10 p-3">
                <p className="text-sm font-bold text-brand-red">3-4 weeks</p>
                <p className="text-xs text-gray-400">Candidate has two other offers by now</p>
              </div>
            </div>

            {/* LayersRank */}
            <div className="rounded-xl border border-brand-green/30 bg-white/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green">LayersRank Timeline</p>
              <div className="mt-4 space-y-2 font-mono text-xs text-gray-400">
                <p><span className="text-white">Day 1:</span> Review resume, send interview link</p>
                <p><span className="text-white">Day 1-2:</span> Candidate completes async (their schedule)</p>
                <p><span className="text-white">Day 3:</span> Review report, decide to advance</p>
                <p><span className="text-white">Day 3-4:</span> Final round (conversation + deep-dive)</p>
                <p><span className="text-white">Day 5:</span> Reference check</p>
                <p><span className="text-white">Day 5-6:</span> Extend offer</p>
              </div>
              <div className="mt-4 rounded-lg bg-brand-green/10 p-3">
                <p className="text-sm font-bold text-brand-green">Less than 1 week</p>
                <p className="text-xs text-gray-400">You&apos;re their first offer</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            That speed difference isn&apos;t just efficiency — it&apos;s competitive advantage. You get first choice.
            You close before competing offers. You build a reputation as a company that moves decisively.
          </p>
        </div>
      </section>

      {/* ── WHAT FOUNDERS WORRY ABOUT ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What founders worry about</h2>

          <div className="mt-10 space-y-6">
            {[
              {
                worry: '"Will candidates actually complete async interviews?"',
                answer: 'Completion rates average 78% — higher than phone screen show rates at most startups. Candidates appreciate the flexibility. And candidates who don\'t complete have self-selected out, saving you time.',
              },
              {
                worry: '"Can AI really evaluate technical skills?"',
                answer: 'Our models evaluate reasoning depth, trade-off consideration, structured thinking, and communication clarity — not just syntax or keyword matching. We\'re not replacing your technical judgment. We\'re giving you a rigorous first filter so your time is spent on candidates who\'ve already demonstrated baseline competency.',
              },
              {
                worry: '"What about culture fit?"',
                answer: '"Culture fit" is often where bias hides. We evaluate communication clarity, collaboration signals, motivation authenticity, and role understanding — behavioral competencies that predict team success without the bias risk. Your final round is where you assess chemistry.',
              },
              {
                worry: '"We\'re too small to need software for this."',
                answer: 'You\'re too small to waste founder time on candidates who won\'t work out. If you\'re making 5+ hires this year, the time savings alone justify the cost. One bad hire avoided pays for years of LayersRank usage.',
              },
              {
                worry: '"What if a great candidate just had a bad day?"',
                answer: 'Async interviews reduce "bad day" effects. Candidates complete when they\'re ready, not when your calendar happened to have an opening. Our confidence scoring also helps — ambiguous responses show lower confidence, prompting you to probe rather than reject outright.',
              },
            ].map((item) => (
              <div key={item.worry} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="text-lg font-bold text-ink">{item.worry}</p>
                <p className="mt-2 text-sm text-ink-light">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDING THE HABIT EARLY ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Building the habit early</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              One underrated benefit of implementing structured hiring early: you&apos;re building
              organizational muscle for scale.
            </p>
            <p>
              At 30 people, your hiring process is whatever the founders do. At 100 people, you need
              an actual system. Companies that grow fast often scramble to build hiring infrastructure
              while simultaneously trying to double headcount.
            </p>
            <p>
              LayersRank is that infrastructure from day one. Your question library grows with you.
              Early hires inform what questions predict success at your company specifically.
              Reports create institutional memory. When you reach 100 people and hire a recruiting leader,
              they inherit a functioning system instead of starting from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Startup pricing</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Simple, predictable pricing that scales with your hiring.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Starter */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Starter</p>
              <div className="mt-4 flex items-baseline gap-1">
                <p className="text-3xl font-extrabold text-ink">&#x20B9;2,500</p>
                <p className="text-sm text-ink-muted">/ interview</p>
              </div>
              <p className="mt-1 text-xs text-ink-muted">Pre-seed to Seed &middot; 1-3 hires/month</p>
              <ul className="mt-6 space-y-2">
                {[
                  'Up to 25 interviews/month',
                  'Standard question library (50+ roles)',
                  '24-hour report turnaround',
                  'Basic ATS integration',
                  'Email support',
                  'Up to 3 team members',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth */}
            <div className="rounded-xl border-2 border-brand-yellow bg-white p-8 relative">
              <div className="absolute -top-3 left-6 rounded-full bg-brand-yellow px-3 py-0.5 text-xs font-bold text-ink">Most Popular</div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Growth</p>
              <div className="mt-4 flex items-baseline gap-1">
                <p className="text-3xl font-extrabold text-ink">&#x20B9;2,000</p>
                <p className="text-sm text-ink-muted">/ interview</p>
              </div>
              <p className="mt-1 text-xs text-ink-muted">Series A &middot; 3-10 hires/month</p>
              <ul className="mt-6 space-y-2">
                {[
                  'Up to 100 interviews/month',
                  'Full library + custom questions',
                  '12-hour report turnaround',
                  'All ATS integrations',
                  'Slack + email support',
                  'Up to 10 team members',
                  'Basic analytics dashboard',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scale */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Scale</p>
              <div className="mt-4 flex items-baseline gap-1">
                <p className="text-3xl font-extrabold text-ink">&#x20B9;1,500</p>
                <p className="text-sm text-ink-muted">/ interview</p>
              </div>
              <p className="mt-1 text-xs text-ink-muted">Series B+ &middot; 10+ hires/month</p>
              <ul className="mt-6 space-y-2">
                {[
                  'Unlimited interviews',
                  'Full library + unlimited custom',
                  'Priority turnaround (same-day)',
                  'All integrations + custom API',
                  'Dedicated success manager',
                  'Unlimited team members',
                  'Advanced analytics',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-light">
                    <svg className="h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 mx-auto max-w-lg rounded-xl border border-brand-green/20 bg-brand-green/5 p-6 text-center">
            <p className="text-lg font-bold text-ink">Free trial</p>
            <p className="mt-1 text-sm text-ink-light">
              Your first 5 interviews are free. No credit card required.
              See the reports. Experience the speed. Then decide.
            </p>
          </div>
        </div>
      </section>

      {/* ── GETTING STARTED ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Live in 30 minutes</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            No implementation project. No sales calls required. No IT involvement. Just start.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '1', title: 'Sign up and choose your first role', desc: 'Select from our library or describe the role you\'re hiring for.' },
              { n: '2', title: 'Review or customize questions', desc: 'Default question sets work for most roles. Customize for specific technical coverage.' },
              { n: '3', title: 'Send your first interview link', desc: 'Copy the link. Paste into your email to the candidate. Done.' },
              { n: '4', title: 'Review your first report', desc: 'Within 24 hours, you\'ll have a scored assessment. See what confident hiring feels like.' },
            ].map((step) => (
              <div key={step.n} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">
                  {step.n}
                </div>
                <h3 className="mt-3 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-xs text-ink-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">From startups like yours</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: 'I was doing 15 phone screens a week and hating my life. Now I review 15 reports in an hour. The time savings alone changed my relationship with recruiting.',
                role: 'CTO, Series A Fintech',
                detail: 'Went from 25 to 60 engineers in 12 months',
              },
              {
                quote: 'Our first three engineering hires were rough. Really rough. We tried LayersRank as an experiment. Our next eight hires have all been strong. Something\'s working.',
                role: 'Founder, Seed-stage Developer Tools',
                detail: '',
              },
              {
                quote: 'The confidence scoring is what sold me. Knowing when to trust a signal versus when to probe deeper has completely changed how I run final rounds.',
                role: 'Engineering Lead, Series B B2B SaaS',
                detail: '',
              },
            ].map((t) => (
              <div key={t.role} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="text-sm italic leading-relaxed text-ink-light">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-ink">— {t.role}</p>
                  {t.detail && <p className="text-xs text-ink-muted">{t.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Frequently asked questions</h2>
          <div className="mt-12 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-ink">
                  {faq.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-light">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Related</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/compare/hackerrank', title: 'Compare vs. HackerRank', desc: 'Beyond coding tests' },
              { href: '/compare/hirevue', title: 'Compare vs. HireVue', desc: 'Confidence scoring vs. flat scores' },
              { href: '/pricing', title: 'Pricing', desc: 'Full pricing details' },
              { href: '/solutions/technical-hiring', title: 'Technical Hiring', desc: 'Deep dive on engineering assessment' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-ink group-hover:text-brand-yellow">{link.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{link.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <PageCTA
        title="Stop trading speed for quality"
        description="Start your free trial. 5 interviews included. See what confident, fast hiring feels like."
        cta="Start Free Trial"
        ctaHref="/signup"
        secondaryCta="Book a 15-Minute Demo"
        secondaryCtaHref="/demo"
        variant="gradient"
      />
    </>
  );
}
