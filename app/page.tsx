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
        Identify where decision quality is leaking, where interviewer disagreement is rising, and where shortlist confidence is too weak for critical hiring approvals.
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
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">Decision system for high-stakes hiring operations</p>
          <h1 className="text-5xl font-semibold leading-tight">Stop Guessing. Start Ranking.</h1>
          <p className="max-w-xl text-lg text-slate-200">
            LayersRank helps recruiting and engineering leaders rank candidates with confidence,
            reduce panel conflict, and move from slow score debates to faster, audit-ready approvals.
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
            <h2 className="text-3xl font-semibold">Hiring decisions are inconsistent and expensive</h2>
            <p className="text-slate-200">
              Bad hires delay delivery and reduce team productivity.
              Offer dropouts disrupt workforce planning after approvals are complete.
            </p>
            <p className="text-slate-200">
              Panel disagreement slows decisions, creates extra interview loops, and burns engineering bandwidth.
              Leadership loses confidence when shortlist quality cannot be defended clearly.
            </p>
          </div>
          <HeroPhoto
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
            alt="Indian interview panel discussing candidate decisions in a corporate meeting room"
          />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <HeroPhoto
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
            alt="Recruiter and hiring manager reviewing candidate pipeline and interview scorecards"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What makes LayersRank different</h2>
            <p className="text-slate-200">
              LayersRank ranks candidates instead of relying on flat score averages.
              Each decision includes a confidence indicator that shows whether evidence is strong or noisy.
            </p>
            <p className="text-slate-200">
              The platform separates strong hiring signals from interviewer noise,
              then generates audit-ready decision summaries that leadership can review and approve faster.
            </p>
          </div>
        </div>

        <CtaBand />

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What changes when you rank with confidence</h2>
            <p className="text-slate-200">
              Every candidate is compared on the same dimensions, which improves shortlist quality and reduces subjective drift.
              Confidence indicators highlight where evidence is weak before a final decision is made.
            </p>
            <p className="text-slate-200">
              Panels align faster, interviewer conflict drops, and leadership reviews final recommendations with less back-and-forth.
              The result is more confident hiring decisions across every critical role.
            </p>
          </div>
          <HeroPhoto
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Hiring leadership team aligning on ranked candidates with confidence indicators"
          />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <HeroPhoto
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
            alt="Large Indian corporate hiring environment with engineering leaders and recruiters"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">GCC hiring at scale requires decision control</h2>
            <p className="text-slate-200">
              GCC teams hiring hundreds of engineers per quarter across Bangalore, Hyderabad, Pune, and NCR need cross-city interview consistency.
              Without it, approval cycles stall and quality variance grows.
            </p>
            <p className="text-slate-200">
              LayersRank supports faster HQ approval cycles, reduces dependency on pedigree filters,
              and helps hiring leaders scale with stronger decision confidence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              <Link href="/science" className="underline">Why traditional scores fail</Link>
              <Link href="/solutions/gcc" className="underline">Explore GCC workflows</Link>
              <Link href="/solutions/startups" className="underline">Explore startup workflows</Link>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          <h2 className="text-3xl font-semibold">Business outcomes hiring leaders track</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200">
            <li>Faster final approvals with clearer decision context.</li>
            <li>Fewer interview loops caused by conflicting panel feedback.</li>
            <li>Reduced interviewer conflict in debrief meetings.</li>
            <li>More confident hiring decisions on critical engineering roles.</li>
            <li>Better shortlist quality for recruiters and hiring managers.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
