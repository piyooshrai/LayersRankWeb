const stats = [
  {
    value: '68%',
    label: 'of recruiter time spent on candidates who won\'t pass round one',
    color: 'text-brand-red',
  },
  {
    value: '$240K',
    label: 'average cost of a bad engineering hire',
    color: 'text-brand-orange',
  },
  {
    value: '14%',
    label: 'of interview evaluations have significant panel disagreement',
    color: 'text-brand-yellow',
  },
];

const funnelStages = [
  { label: 'Résumés Screened', count: 240, width: '100%', bg: 'bg-gray-200', text: 'text-ink-muted' },
  { label: 'Phone Screens', count: 82, width: '65%', bg: 'bg-brand-orange/20', text: 'text-brand-orange' },
  { label: 'Technical Rounds', count: 34, width: '38%', bg: 'bg-brand-yellow/20', text: 'text-brand-yellow' },
  { label: 'Final Panel', count: 12, width: '18%', bg: 'bg-brand-green/20', text: 'text-brand-green' },
  { label: 'Offers Made', count: 5, width: '9%', bg: 'bg-brand-green/30', text: 'text-brand-green' },
];

const panelScores = [
  { interviewer: 'Interviewer A', score: 82, verdict: 'Hire' },
  { interviewer: 'Interviewer B', score: 41, verdict: 'No Hire' },
  { interviewer: 'Interviewer C', score: 75, verdict: 'Hire' },
];

export function ProblemSection() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Hiring decisions are inconsistent and expensive
          </h2>
          <p className="mt-4 text-lg text-ink-light">
            Most hiring teams rely on gut feel, unstructured interviews, and score averages that
            hide critical disagreement. The result: bad hires, wasted pipeline, and leadership that
            can&apos;t trust the shortlist.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-gray-200 bg-paper-off p-8 text-center"
            >
              <p className={`text-3xl font-extrabold sm:text-4xl md:text-5xl ${stat.color}`}>{stat.value}</p>
              <p className="mt-3 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Supporting Content with Visualization */}
        <div className="mt-16 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <p className="text-lg text-ink-light">
              Panel disagreement slows decisions, creates extra interview loops, and burns
              engineering bandwidth. When interviewers score the same candidate differently and
              there&apos;s no way to reconcile, teams default to the loudest voice in the room.
            </p>
            <p className="text-lg text-ink-light">
              Bad hires delay delivery and reduce team productivity. Offer dropouts disrupt
              workforce planning after approvals are complete. Leadership loses confidence when
              shortlist quality cannot be defended clearly.
            </p>
          </div>

          {/* Hiring Funnel + Disagreement Mockup */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Header */}
            <div className="border-b border-gray-200 bg-paper-off px-5 py-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">Hiring Pipeline &middot; Q4 2024</p>
                <span className="rounded-full bg-brand-red/10 px-2.5 py-0.5 text-xs font-medium text-brand-red">
                  68% wasted
                </span>
              </div>
            </div>

            {/* Funnel */}
            <div className="px-5 py-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-muted">Pipeline Funnel</p>
              <div className="space-y-2">
                {funnelStages.map((stage) => (
                  <div key={stage.label} className="flex items-center gap-3">
                    <span className="w-24 shrink-0 text-xs text-ink-muted">{stage.label}</span>
                    <div className="flex-1">
                      <div
                        className={`h-5 rounded ${stage.bg} flex items-center justify-end pr-2 transition-all`}
                        style={{ width: stage.width }}
                      >
                        <span className={`text-xs font-bold ${stage.text}`}>{stage.count}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-ink-muted">
                <span className="font-semibold text-brand-red">163 candidates</span> dropped between screen and technical &mdash; recruiter hours lost
              </p>
            </div>

            {/* Panel Disagreement */}
            <div className="border-t border-gray-200 px-5 py-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">Panel Disagreement</p>
                <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-xs font-medium text-brand-orange">
                  Split verdict
                </span>
              </div>
              <div className="space-y-2">
                {panelScores.map((p) => (
                  <div key={p.interviewer} className="flex items-center gap-3">
                    <span className="w-24 shrink-0 text-xs text-ink-muted">{p.interviewer}</span>
                    <div className="flex flex-1 items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full ${p.score >= 70 ? 'bg-brand-green' : 'bg-brand-red'}`}
                          style={{ width: `${p.score}%` }}
                        />
                      </div>
                      <span className="w-6 text-right text-xs font-bold text-ink">{p.score}</span>
                    </div>
                    <span className={`w-14 text-right text-xs font-semibold ${p.verdict === 'Hire' ? 'text-brand-green' : 'text-brand-red'}`}>
                      {p.verdict}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-ink-muted">
                Average: 66 &mdash; but the <span className="font-semibold text-brand-orange">41-point spread</span> tells the real story
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
