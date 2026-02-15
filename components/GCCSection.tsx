import Link from 'next/link';
import Image from 'next/image';

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

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-700">
            <Image
              src="/images/gcc-bangalore-office-team.svg"
              alt="Large Indian engineering team meeting in a modern tech office in Bangalore"
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
