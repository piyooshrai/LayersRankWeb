import Link from 'next/link';
import { HeroPhoto } from '@/components/hero-photo';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Structured Hiring Scoring for Teams | LayersRank',
  description:
    'Improve hiring quality with structured interview scoring, bias reduction, and confidence-based candidate ranking for recruiters and GCC hiring teams.',
  path: '/'
});

export default function HomePage() {
  return (
    <div className="bg-navy text-white">
      <section className="quant-grid chart-line mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">Hiring quality system for recruiters and leaders</p>
          <h1 className="text-5xl font-semibold leading-tight">Stop Guessing. Start Ranking.</h1>
          <p className="max-w-xl text-lg text-slate-200">
            Build consistent interview decisions across recruiters, hiring managers, and panel members. LayersRank helps teams use structured scoring,
            reduce bias, and make shortlist decisions they can defend to leadership.
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

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 text-slate-100">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Hiring decisions are inconsistent and risky</h2>
          <p>
            Most teams do not fail because they lack applicants. They fail because they lack a repeatable way to evaluate people. One interviewer rewards confidence,
            another rewards detail, and a third rewards familiarity with a preferred background. The same candidate can get very different outcomes depending on who is
            in the room, what questions get asked, and how rushed the panel is that week.
          </p>
          <p>
            Resume screening adds another layer of risk. Strong candidates who do not fit a narrow profile get filtered out early, while polished resumes can pass first
            rounds despite weak role fit. This creates rework for recruiters and hiring managers, and it slows teams that need to fill critical engineering roles.
          </p>
          <p>
            Bias also enters through unstructured conversations: school preference, previous company brand, communication style, and interviewer comfort. Without a structured
            interview scoring system, teams cannot separate signal from noise. The result is avoidable decision variance at exactly the stage where quality matters most.
          </p>
        </div>

        <div className="space-y-4 rounded-xl border border-slate-700 p-6">
          <h2 className="text-3xl font-semibold">Cost of bad hiring</h2>
          <p>
            A weak hire is not only a payroll issue. It affects delivery quality, mentoring load, sprint predictability, and team morale. By the time a mismatch becomes clear,
            the organization has already spent recruiter effort, interview hours, offer approvals, onboarding time, and management attention.
          </p>
          <p>
            Rehiring doubles operational cost. Recruiters run the same pipeline again, interviewers repeat rounds, and business leaders wait longer for execution capacity.
            In high-growth environments, this delay can block product goals and customer commitments.
          </p>
          <p>
            Interview bandwidth waste is the hidden cost. Senior engineers and managers spend hours in loops that do not improve decision quality because scorecards are not
            calibrated and evidence is not captured consistently. Teams become slower without becoming better.
          </p>
          <Link href="/company" className="inline-block rounded-md bg-confidence px-5 py-3 font-medium text-navy">
            Book a Rigor Audit
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">What companies need now</h2>
          <p>
            Hiring leaders need a system that gives the same decision quality across interviewers, roles, and locations. Recruiters need structured interview scoring that
            can be explained. Engineering managers need confidence that shortlisted candidates are ready for role demands. GCC leaders need governance visibility for local
            and global stakeholders.
          </p>
          <p>
            The required foundation is clear: consistent evaluation criteria, role-specific scorecards, calibration across interviewers, and ranking that shows decision
            confidence. When this foundation is present, teams move faster because they no longer spend cycles debating inconsistent inputs.
          </p>
          <p>
            Leadership also needs auditability. When a decision is challenged, the team should be able to show why the candidate advanced or was declined, what evidence was
            used, and where confidence was high or low. This builds trust internally and improves fairness externally.
          </p>
        </div>

        <div className="space-y-4 rounded-xl border border-slate-700 p-6">
          <h2 className="text-3xl font-semibold">How LayersRank helps</h2>
          <p>
            LayersRank brings structure into each stage of hiring decisions. Instead of relying on isolated interview opinions, it combines scorecard evidence across rounds
            and produces a ranked view of candidates that hiring teams can act on.
          </p>
          <p>
            First, teams define multi-dimensional scoring aligned to job requirements. This includes technical capability, problem-solving quality, collaboration behavior,
            and role-specific expectations. Second, interviewers are calibrated so scoring standards stay aligned even as hiring volume grows.
          </p>
          <p>
            Third, each candidate receives a confidence indicator. This helps teams understand whether a score is backed by strong evidence or if additional rounds are needed.
            Fourth, ranking and decision notes are captured in a clear trail that recruiters and leaders can review during approvals and post-hire analysis.
          </p>
          <p>
            The outcome is practical: fewer weak hires, less panel disagreement, faster decision cycles, and stronger confidence in final offers.
          </p>
          <Link href="/company" className="inline-block rounded-md bg-confidence px-5 py-3 font-medium text-navy">
            Book a Rigor Audit
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Built for GCC hiring reality</h2>
          <p>
            GCC teams in Bangalore, Hyderabad, Pune, and NCR operate under two pressures at once: local hiring volume and global quality expectations. They need to ramp fast
            without lowering standards, and they need decisions that can be explained to regional and global leadership.
          </p>
          <p>
            Common friction points include pedigree bias, interviewer inconsistency across cities, and approval bottlenecks for critical roles. LayersRank helps GCC teams move
            beyond institution-first filters and focus on role-fit evidence captured through structured interview scoring.
          </p>
          <p>
            With audit-ready reporting and clearer confidence signals, teams can support HQ approval flows, reduce offer dropouts through earlier risk detection, and improve
            decision consistency across large hiring programs.
          </p>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-700 p-6">
          <h2 className="text-3xl font-semibold">Social proof placeholders</h2>
          <p>“Used for high-volume engineering hiring.”</p>
          <p>“Designed for GCC-scale recruitment.”</p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm">
            <Link href="/science" className="underline">See how scoring quality is improved</Link>
            <Link href="/solutions/gcc" className="underline">Explore GCC hiring workflows</Link>
            <Link href="/solutions/startups" className="underline">Explore startup hiring workflows</Link>
          </div>
          <Link href="/company" className="inline-block rounded-md bg-confidence px-5 py-3 font-medium text-navy">
            Book a Rigor Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
