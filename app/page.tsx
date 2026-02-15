import Link from 'next/link';
import { HeroPhoto } from '@/components/hero-photo';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Structured Hiring Scoring for Teams | LayersRank',
  description:
    'Improve hiring quality with structured interview scoring, bias reduction, and confidence-based candidate ranking for recruiters and GCC hiring teams.',
  path: '/'
});

function CtaBand() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 text-center">
      <h3 className="text-2xl font-semibold">Need consistency across every interview panel?</h3>
      <p className="mx-auto mt-2 max-w-2xl text-slate-300">
        See where your process is leaking quality, where interviewers drift, and where scoring confidence is too weak for high-stakes hiring decisions.
      </p>
      <Link href="/company" className="mt-4 inline-block rounded-md bg-confidence px-5 py-3 font-medium text-navy">
        Book a Rigor Audit
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-navy text-white">
      <section className="quant-grid chart-line mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">Hiring quality system for recruiters and leaders</p>
          <h1 className="text-5xl font-semibold leading-tight">Stop Guessing. Start Ranking.</h1>
          <p className="max-w-xl text-lg text-slate-200">
            Build consistent interview decisions across recruiters, hiring managers, and panel members.
            Use structured scoring, reduce bias, and make shortlist calls leadership can trust.
          </p>
          <div className="flex gap-4">
            <Link href="/company" className="rounded-md bg-confidence px-5 py-3 font-medium text-navy">
              Book a Rigor Audit
            </Link>
            <Link href="/resources/whitepapers" className="rounded-md border border-slate-300 px-5 py-3 font-medium">
              Read the Whitepaper
            </Link>
          </div>
        </div>
        <HeroPhoto
          src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1400&q=80"
          alt="Indian hiring panel reviewing candidate interviews in a modern office"
        />
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-6 py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Hiring decisions are inconsistent and risky</h2>
            <p className="text-slate-200">
              Different interviewers score the same candidate differently.
              Resume screening can miss strong talent while polished profiles move ahead.
            </p>
            <p className="text-slate-200">
              Subjectivity enters through unstructured interviews, pedigree bias, and rushed debriefs.
              The outcome is decision variance right where quality matters most.
            </p>
          </div>
          <HeroPhoto
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
            alt="Indian interview panel discussing candidate evaluation in a meeting room"
          />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <HeroPhoto
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
            alt="Recruiter reviewing multiple resumes and hiring notes at a desk"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Cost of bad hiring</h2>
            <p className="text-slate-200">
              Wrong hires reduce productivity, create delivery delays, and increase manager burden.
              Rehiring repeats sourcing, interviewing, approvals, and onboarding costs.
            </p>
            <p className="text-slate-200">
              The hidden loss is interview bandwidth.
              Senior engineers spend hours in loops that do not improve decision quality.
            </p>
          </div>
        </div>

        <CtaBand />

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What companies need now</h2>
            <p className="text-slate-200">
              Teams need structured interview scoring, shared evaluation criteria, and interviewer calibration.
              Leaders need confidence that shortlisted candidates are comparable and decision-ready.
            </p>
            <p className="text-slate-200">
              Recruiters need faster debriefs with less feedback conflict.
              Leadership needs clear evidence trails for final approvals.
            </p>
          </div>
          <HeroPhoto
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Hiring team collaborating on structured candidate evaluation in an Indian corporate office"
          />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <HeroPhoto
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
            alt="Large engineering hiring environment in India with recruiters and managers reviewing pipeline"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">GCC hiring challenges</h2>
            <p className="text-slate-200">
              GCC teams in Bangalore, Hyderabad, Pune, and NCR must hire at high volume while meeting global quality expectations.
              Inconsistent scoring across cities slows approvals and increases risk.
            </p>
            <p className="text-slate-200">
              LayersRank helps teams move beyond pedigree-only filters, detect offer-drop risk earlier,
              and produce decision packs that global HQ can review quickly.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              <Link href="/science" className="underline">Why traditional scores fail</Link>
              <Link href="/solutions/gcc" className="underline">Explore GCC workflows</Link>
              <Link href="/solutions/startups" className="underline">Explore startup workflows</Link>
            </div>
          </div>
        </div>

        <CtaBand />

        <div className="rounded-2xl border border-slate-700 p-6">
          <h2 className="text-3xl font-semibold">Social proof placeholders</h2>
          <p className="mt-3 text-slate-200">“Used for high-volume engineering hiring.”</p>
          <p className="text-slate-200">“Designed for GCC-scale recruitment.”</p>
        </div>
      </section>
    </div>
  );
}
