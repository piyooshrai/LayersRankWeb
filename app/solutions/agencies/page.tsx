import Link from 'next/link';
import Image from 'next/image';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Recruitment Agency Software | Quantified Candidate Submissions | LayersRank',
  description:
    'Submit scored, ranked candidates your clients will actually interview. Stand out from every other agency with confidence-weighted assessments and audit-ready reports.',
  path: '/solutions/agencies',
});

const faqs = [
  {
    q: 'Will clients accept AI-scored assessments?',
    a: 'Clients care about outcomes, not methods. If your submissions are consistently higher quality and your reports provide useful signal, clients won\'t object to how you produced them. We recommend framing it as "structured assessment with AI-assisted scoring" rather than leading with "AI." The emphasis is on the structure and consistency, with AI as the enabler.',
  },
  {
    q: 'What if a client wants to use LayersRank directly?',
    a: 'Some will. That\'s fine — they become LayersRank customers directly. Your role evolves from "assessment provider" to "sourcing partner who submits candidates for LayersRank assessment." You still add value. Alternatively, position your LayersRank capability as part of a bundled service: your sourcing + your assessment + your candidate management = a package that\'s more valuable than the sum of parts.',
  },
  {
    q: 'How do I train my recruiters to use this?',
    a: 'LayersRank is simple to use: send a link to the candidate, wait for completion, review the report. We provide training materials and can conduct sessions for your team. The bigger learning curve is interpreting reports and translating them into client conversations. We provide guidance on this, including talk tracks for common client objections.',
  },
  {
    q: 'Can candidates tell this comes from an agency vs. a direct employer?',
    a: 'You can configure the candidate experience with your agency branding, the client\'s branding, or neutral LayersRank branding. Most agencies use either their own branding (emphasizing their role) or white-label client branding (emphasizing client relationship).',
  },
  {
    q: 'What about candidates I\'ve already screened through other methods?',
    a: 'You can use LayersRank for all candidates or just for certain stages/clients. Some agencies use it for final-stage validation before submission. Others use it as their primary first-round screen. The platform is flexible.',
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

export default function AgenciesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <PageHero
        eyebrow="Solutions / Agencies"
        title="Submit Candidates Your Clients Will Actually Interview"
        description="Every agency sends resumes with &ldquo;highly recommended&rdquo; notes. You can send scored assessments with confidence levels, dimension breakdowns, and specific evidence. When clients see the difference, they stop treating you like a resume forwarder."
        primaryCta="See Agency Plans"
        primaryCtaHref="/pricing"
        secondaryCta="Book a Demo"
        secondaryCtaHref="/demo"
      />

      <section className="bg-paper py-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src="/images/solutions-agencies-screening.png"
              alt="Recruitment agency professionals screening candidates with scored assessment reports and confidence-weighted rankings"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* ── THE AGENCY CREDIBILITY PROBLEM ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">The agency credibility problem</h2>
          <p className="mt-2 max-w-3xl text-lg font-medium text-ink">You know the client perception problem.</p>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink-light">
            <p>
              In their mind, agencies are resume mills. You source candidates, do a quick screen,
              slap &ldquo;strongly recommended&rdquo; on everything that looks plausible, and hope something sticks.
              They&apos;re paying for volume, not judgment.
            </p>
            <p>
              This perception exists because, honestly, it&apos;s often true. Most agency submissions include
              a resume and a few sentences of commentary: &ldquo;Strong communication skills. 7 years of
              relevant experience. Would be a good fit for the team.&rdquo;
            </p>
            <p>
              That&apos;s not evaluation. That&apos;s covering your bases so you&apos;re not blamed if the candidate fails.
            </p>
            <p>
              The client still has to do all the real assessment. Your &ldquo;screening&rdquo; didn&apos;t screen out
              anything meaningful. You&apos;re a sourcing function, not an evaluation function. And sourcing
              is increasingly commoditized — clients can use LinkedIn Recruiter themselves.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-brand-green/20 bg-brand-green/5 p-6">
            <p className="text-sm font-semibold text-ink">The agencies that command premium fees and long-term relationships</p>
            <p className="mt-1 text-sm text-ink-light">
              are the ones who deliver genuine evaluation. When their &ldquo;strong recommendation&rdquo; means
              something, clients trust it. When they say &ldquo;don&apos;t bother with this one,&rdquo; clients listen.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-yellow">
              LayersRank lets you become that agency.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT CHANGES WITH STRUCTURED ASSESSMENT ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What changes with structured assessment</h2>

          <div className="mt-10 space-y-8">
            {/* From Subjective Notes to Quantified Evaluation */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">From Subjective Notes to Quantified Evaluation</h3>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-red">Instead of</p>
                  <p className="mt-3 text-sm italic text-ink-light">
                    &ldquo;Spoke with candidate for 30 minutes. Strong technical background, good communication,
                    seems motivated.&rdquo;
                  </p>
                </div>
                <div className="rounded-lg border border-brand-green/20 bg-brand-green/5 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green">You submit</p>
                  <p className="mt-3 text-sm text-ink-light">
                    &ldquo;Structured assessment completed. Overall score: 79 &plusmn; 4, 87% confidence.
                    Technical dimension: 82 (strong system design thinking, clear debugging methodology).
                    Behavioral dimension: 76 (good collaboration examples, stakeholder management experience limited).
                    Contextual dimension: 78 (genuine interest in client&apos;s domain, salary expectations aligned).
                    Recommended for client interview with focus on stakeholder management experience.&rdquo;
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-ink">The first is an opinion. The second is evidence.</p>
            </div>

            {/* From "Trust Me" to "See for Yourself" */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">From &ldquo;Trust Me&rdquo; to &ldquo;See for Yourself&rdquo;</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  Your submissions now include full reports that clients can review. They can see the
                  questions asked, the candidate&apos;s responses (or summaries), the scores and confidence
                  levels, and the specific strengths and concerns identified.
                </p>
                <p>
                  This transparency changes the relationship. You&apos;re not asking them to trust your
                  judgment sight unseen. You&apos;re showing your work.
                </p>
                <p className="font-medium text-ink">
                  Clients who initially use LayersRank reports as a supplement to their own screening
                  eventually realize your first-round evaluation is more rigorous than their own.
                  They start advancing your recommended candidates directly to final rounds.
                </p>
              </div>
            </div>

            {/* From Cost Center to Value Add */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-ink">From Cost Center to Value Add</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-light">
                <p>
                  When you&apos;re just forwarding resumes, you&apos;re a variable cost clients try to minimize.
                  They negotiate your fees down, split work across multiple agencies, and drop you when
                  hiring slows.
                </p>
                <p>
                  When you&apos;re providing structured evaluation that improves their hiring quality,
                  you&apos;re a strategic partner. They consolidate volume with you, engage you earlier
                  in the process, and pay premium rates for premium value.
                </p>
                <p className="font-medium text-ink">
                  The agencies that thrive long-term are the ones who deliver demonstrable value
                  beyond sourcing. LayersRank is how you demonstrate that value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AGENCY WORKFLOWS WITH LAYERSRANK ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Agency workflows with LayersRank</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                num: '01',
                title: 'Pre-Screening Before Submission',
                process:
                  'Source candidates through your normal channels. Before submitting to the client, send them through LayersRank assessment. Candidates who score below your threshold don\'t get submitted. Candidates above threshold get submitted with full reports.',
                result: 'Higher submission-to-interview conversion. Clients learn that your submissions are worth their time.',
              },
              {
                num: '02',
                title: 'Assessment as a Service',
                process:
                  'Some clients want to handle their own sourcing but lack structured evaluation capability. They send you candidates they\'ve sourced. You run them through structured assessment. You return scored reports. Client uses reports to make shortlisting decisions.',
                result: 'New revenue stream. Value delivered even when you\'re not the sourcing partner.',
              },
              {
                num: '03',
                title: 'White-Label Evaluation',
                process:
                  'For clients who want evaluation capability but prefer it under their own brand, reports show the client\'s logo and branding. Candidates experience the assessment as coming from the client, not from your agency. You operate the process behind the scenes.',
                result: 'Deeper integration with client\'s process. Harder for them to replace you.',
              },
              {
                num: '04',
                title: 'RPO Enhancement',
                process:
                  'For Recruitment Process Outsourcing engagements, LayersRank becomes part of your delivery model. You\'re not just managing the process — you\'re improving it. Structured first-round evaluation becomes a differentiator in RPO bids.',
                result: 'Win more RPO deals. Deliver measurably better outcomes.',
              },
            ].map((wf) => (
              <div key={wf.num} className="rounded-xl border border-gray-200 bg-paper-off p-6">
                <p className="font-mono text-sm font-bold text-brand-yellow">{wf.num}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{wf.title}</h3>
                <p className="mt-3 text-sm text-ink-light">{wf.process}</p>
                <div className="mt-4 rounded-lg bg-brand-green/5 px-4 py-3">
                  <p className="text-xs font-semibold text-brand-green">Result</p>
                  <p className="mt-1 text-sm text-ink-light">{wf.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CLIENT CONVERSATION ── */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Talk Tracks</p>
          <h2 className="mt-4 text-2xl font-bold">The client conversation</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Here&apos;s how to introduce LayersRank to different types of clients.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                type: 'For Skeptical Clients',
                script:
                  '"I know you\'re used to agencies sending resumes with \'strongly recommended\' and hoping for the best. We do something different. Before we submit any candidate, they complete a structured assessment — same questions, same evaluation criteria, scored by AI that doesn\'t have good days and bad days. You get a full report with confidence scores and specific evidence."',
              },
              {
                type: 'For Quality-Focused Clients',
                script:
                  '"You\'ve mentioned that too many candidates make it to your final rounds and then disappoint. Our structured assessment catches a lot of those earlier. The confidence scoring tells us when our evaluation is solid versus when we\'re guessing. Candidates who pass our screen with high confidence almost always perform well in your final rounds."',
              },
              {
                type: 'For Time-Pressed Clients',
                script:
                  '"I know your hiring managers are swamped. What if our submissions came with enough evaluation that you could skip first-round screens for our top candidates and go straight to finals? The assessment is rigorous — same questions, quantified scores, detailed reports. Your team reviews the report instead of conducting another interview."',
              },
              {
                type: 'For Cost-Conscious Clients',
                script:
                  '"You\'re paying us for every submission, but a lot of those submissions don\'t convert. That\'s waste on both sides. What if we only submitted candidates who passed a meaningful screen, and you could trust that screen because you can see exactly how it was conducted?"',
              },
            ].map((track) => (
              <div key={track.type} className="rounded-xl border border-gray-600 bg-white/5 p-6">
                <p className="font-mono text-xs font-bold text-brand-yellow">{track.type}</p>
                <p className="mt-3 text-sm italic leading-relaxed text-gray-300">{track.script}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENCY PRICING ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Agency pricing</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            LayersRank for agencies is priced to fit the agency business model.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Per-Assessment */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">Per-Assessment</p>
              <p className="mt-4 text-sm text-ink-light">
                Most agencies prefer per-assessment pricing that maps directly to their cost of doing business.
                For each candidate assessed, you pay a fee and factor that into your placement economics.
              </p>
              <p className="mt-3 text-sm font-medium text-ink">
                If you&apos;re making &#x20B9;2-5 lakh per placement, a few thousand per assessment is easily
                justified if it improves placement rates.
              </p>
            </div>

            {/* Volume Discounts */}
            <div className="rounded-xl border-2 border-brand-yellow bg-white p-8 relative">
              <div className="absolute -top-3 left-6 rounded-full bg-brand-yellow px-3 py-0.5 text-xs font-bold text-ink">Best Value</div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Volume Discounts</p>
              <p className="mt-4 text-sm text-ink-light">
                Higher volume = lower per-assessment cost. Agencies running 100+ assessments per
                month receive significant discounts.
              </p>
              <p className="mt-3 text-sm font-medium text-ink">
                Scale your assessment practice without scaling your costs linearly.
              </p>
            </div>

            {/* White-Label */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">White-Label Premium</p>
              <p className="mt-4 text-sm text-ink-light">
                White-labeling with client branding is available for an additional fee. Worth it for
                deep client relationships where you want to be embedded in their process.
              </p>
              <p className="mt-3 text-sm font-medium text-ink">
                Reports show client logo. Candidates see their brand. You operate behind the scenes.
              </p>
            </div>
          </div>

          {/* Economics Breakdown */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-paper-off p-8">
            <h3 className="text-lg font-bold text-ink">Typical agency economics</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Placement fee', value: '&#x20B9;3 lakh avg' },
                { label: 'Candidates per placement', value: '5 submitted' },
                { label: 'LayersRank cost/assessment', value: '&#x20B9;2,000' },
                { label: 'Total cost per placement', value: '&#x20B9;10,000' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-extrabold text-brand-yellow" dangerouslySetInnerHTML={{ __html: stat.value }} />
                  <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-brand-green/5 p-4">
              <p className="text-sm text-ink-light">
                If LayersRank improves your placement rate by even 10% — by reducing &ldquo;submitted but
                not interviewed&rdquo; and increasing &ldquo;interviewed and placed&rdquo; — the ROI is immediate.
                More likely: LayersRank <span className="font-semibold text-ink">significantly improves placement rates</span> for
                agencies who use it consistently, because clients learn to trust their submissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILDING AGENCY DIFFERENTIATION ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Building agency differentiation</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            In a crowded agency market, differentiation is survival.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Differentiation Through Process</h3>
              <p className="mt-2 text-sm text-ink-light">
                &ldquo;We&apos;re the agency that uses structured assessment&rdquo; is a differentiation story.
                Include LayersRank reports in your pitch materials. Show prospects what a
                &ldquo;submission from us&rdquo; looks like compared to typical agency submissions.
                Let the contrast speak for itself.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Differentiation Through Data</h3>
              <p className="mt-2 text-sm text-ink-light">
                Over time, you accumulate data on what predicts success at specific clients.
                Which question scores correlate with successful placements? Which concerns predict
                failed hires? This data becomes proprietary insight competitors can&apos;t claim.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ink">Differentiation Through Relationships</h3>
              <p className="mt-2 text-sm text-ink-light">
                When clients trust your evaluation, the relationship deepens. They bring you into
                hiring discussions earlier. They give you exclusive roles. They pay premium rates
                without negotiation. LayersRank is the foundation for that trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT AGENCIES ASK (FAQ) ── */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What agencies ask</h2>
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

      {/* ── GETTING STARTED ── */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Getting started</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Minimal investment, maximum learning. See if LayersRank changes your submissions.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                n: '1',
                title: 'Free Trial',
                desc: 'Start with 5 free assessments. Send some current candidates through. See the reports. Judge whether this changes your submissions.',
              },
              {
                n: '2',
                title: 'Pilot With One Client',
                desc: 'Pick a client relationship you want to elevate. Submit your next batch of candidates with LayersRank reports attached. Get their feedback.',
              },
              {
                n: '3',
                title: 'Expand or Stop',
                desc: 'If the pilot improves your client relationship — if they start trusting your submissions more, interviewing more of your candidates — expand to other clients. If not, you\'ve learned something with minimal investment.',
              },
            ].map((step) => (
              <div key={step.n} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow/10 font-mono text-sm font-bold text-brand-yellow">
                  {step.n}
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{step.desc}</p>
              </div>
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
              { href: '/solutions/enterprise', title: 'Enterprise Solutions', desc: 'For agencies serving large enterprises' },
              { href: '/solutions/technical-hiring', title: 'Technical Hiring', desc: 'Deep dive on engineering assessment' },
              { href: '/pricing', title: 'Pricing', desc: 'Full pricing details' },
              { href: '/product/reports', title: 'Reports', desc: 'What reports look like' },
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
        title="Elevate Your Submissions"
        description="Stop being treated like a resume mill. Start submitting candidates with evidence that earns client trust."
        cta="Start Free Trial"
        ctaHref="/signup"
        secondaryCta="Book an Agency Demo"
        secondaryCtaHref="/demo"
        variant="gradient"
      />
    </>
  );
}
