import Link from 'next/link';

const features = [
  {
    title: 'Pedigree Neutrality',
    description: 'Evaluate candidates on demonstrated ability, not college brand or past employer name.',
  },
  {
    title: 'HQ Approval Support',
    description: 'Generate audit-ready reports that global leadership can review and approve faster.',
  },
  {
    title: 'Offer Dropout Prediction',
    description: 'Identify candidates at risk of declining offers before the approval cycle completes.',
  },
  {
    title: 'Cross-City Consistency',
    description: 'Same evaluation standards across Bangalore, Hyderabad, Pune, and NCR.',
  },
];

const cities = [
  {
    name: 'Bangalore',
    roles: 128,
    avgScore: 74,
    consistency: 92,
    topRole: 'Backend Engineer',
  },
  {
    name: 'Hyderabad',
    roles: 96,
    avgScore: 71,
    consistency: 89,
    topRole: 'Full-Stack Dev',
  },
  {
    name: 'Pune',
    roles: 64,
    avgScore: 73,
    consistency: 91,
    topRole: 'DevOps Engineer',
  },
  {
    name: 'NCR',
    roles: 52,
    avgScore: 70,
    consistency: 87,
    topRole: 'Data Engineer',
  },
];

export function GCCSection() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
              Enterprise & GCC
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for GCC scale
            </h2>
            <p className="text-lg text-gray-300">
              Hiring 500+ engineers per quarter across Bangalore, Hyderabad, Pune? You need
              cross-panel consistency and audit-ready decisions that global HQ can trust.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
                  <h3 className="text-sm font-bold text-brand-yellow">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/solutions/gcc"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange"
            >
              Explore GCC Solutions
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Cross-City Hiring Dashboard Mockup */}
          <div className="overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl">
            {/* Dashboard Header */}
            <div className="border-b border-gray-700 bg-gray-800/80 px-5 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-green" />
                  <p className="text-sm font-semibold text-white">Cross-City Hiring Dashboard</p>
                </div>
                <span className="font-mono text-xs text-gray-500">Q4 2024</span>
              </div>
            </div>

            {/* Summary Row */}
            <div className="grid grid-cols-3 border-b border-gray-700/50 px-5 py-3">
              <div>
                <p className="text-xs text-gray-500">Total Open Roles</p>
                <p className="text-lg font-bold text-white">340</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Avg. Consistency</p>
                <p className="text-lg font-bold text-brand-green">90%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">HQ Audit Status</p>
                <p className="text-xs mt-1 font-semibold text-brand-green">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-green mr-1 align-middle" />
                  Ready
                </p>
              </div>
            </div>

            {/* City Rows */}
            <div className="divide-y divide-gray-700/50">
              {cities.map((city) => (
                <div key={city.name} className="px-5 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-yellow/10">
                        <span className="text-xs font-bold text-brand-yellow">{city.name.slice(0, 2).toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{city.name}</p>
                        <p className="text-xs text-gray-500">{city.topRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-right">
                      <div>
                        <p className="text-xs text-gray-500">Roles</p>
                        <p className="text-sm font-bold text-white">{city.roles}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Avg</p>
                        <p className="text-sm font-bold text-white">{city.avgScore}</p>
                      </div>
                      <div className="w-16">
                        <p className="text-xs text-gray-500">Consistency</p>
                        <div className="mt-0.5 flex items-center gap-1.5">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-700">
                            <div
                              className={`h-full rounded-full ${city.consistency >= 90 ? 'bg-brand-green' : 'bg-brand-yellow'}`}
                              style={{ width: `${city.consistency}%` }}
                            />
                          </div>
                          <span className={`text-xs font-bold ${city.consistency >= 90 ? 'text-brand-green' : 'text-brand-yellow'}`}>
                            {city.consistency}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-700 bg-gray-800/50 px-5 py-2.5">
              <p className="text-xs text-gray-500">
                Powered by LayersRank &middot; Panel scores normalized across locations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
