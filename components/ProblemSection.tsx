import Image from 'next/image';

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
              <p className={`text-5xl font-extrabold ${stat.color}`}>{stat.value}</p>
              <p className="mt-3 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Supporting Content with Image */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200">
            <Image
              src="/images/problem-recruiter-screening.svg"
              alt="Recruiter reviewing applications on laptop in modern office"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
