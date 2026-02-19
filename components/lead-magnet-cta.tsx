import Link from 'next/link';

/* ── Configuration ─────────────────────────────────────── */

type LeadMagnetType = 'roi' | 'questions' | 'scorecard' | 'bias';

interface LeadMagnetConfig {
  title: string;
  description: string;
  cta: string;
  href: string;
  stats?: { value: string; label: string }[];
}

const configs: Record<LeadMagnetType, LeadMagnetConfig> = {
  roi: {
    title: 'Free: Hiring Cost Calculator',
    description:
      'Calculate the true cost of bad hires at your company. Enter your numbers, get a detailed breakdown of direct costs, productivity losses, and team impact.',
    cta: 'Calculate Your Costs',
    href: '/resources/roi-calculator',
    stats: [
      { value: '$240K', label: 'avg. cost of a bad hire' },
      { value: '3\u20136 mo', label: 'to identify a mis-hire' },
    ],
  },
  questions: {
    title: 'Free: 50 Behavioral Interview Questions',
    description:
      'Role-specific questions with scoring rubrics, red flags, and follow-up prompts. Organized by competency: problem-solving, ownership, communication, growth mindset, and culture.',
    cta: 'Get the Question Bank',
    href: '/resources/question-bank',
    stats: [
      { value: '50', label: 'curated questions' },
      { value: '5', label: 'competency dimensions' },
    ],
  },
  scorecard: {
    title: 'Free: Engineering Hiring Scorecard',
    description:
      'A structured evaluation rubric with 6 core competencies, 5-point behavioral anchors, red flag checklist, and a calibration guide for hiring committees.',
    cta: 'Get the Scorecard',
    href: '/resources/hiring-scorecard',
    stats: [
      { value: '76%', label: 'less panel disagreement' },
      { value: '6', label: 'competency dimensions' },
    ],
  },
  bias: {
    title: 'Free: Interview Bias Audit Checklist',
    description:
      '12-point checklist to assess if your hiring process is fair, consistent, and legally defensible. Includes risk ratings, evidence guides, and a priority matrix.',
    cta: 'Start the Audit',
    href: '/resources/bias-audit',
    stats: [
      { value: '12', label: 'audit checkpoints' },
      { value: '3', label: 'risk categories' },
    ],
  },
};

/* ── Component ─────────────────────────────────────────── */

export function LeadMagnetCTA({ type }: { type: LeadMagnetType }) {
  const config = configs[type];

  return (
    <section className="bg-ink py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-gray-700 bg-white/5 p-6 md:flex md:items-center md:gap-8 md:p-8">
          {/* Icon */}
          <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/20 md:mb-0">
            <svg className="h-7 w-7 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-yellow">
              Free Resource
            </p>
            <h3 className="mt-1 text-lg font-bold text-white">{config.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{config.description}</p>

            {config.stats && (
              <div className="mt-4 flex gap-6">
                {config.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="font-mono text-lg font-extrabold text-brand-yellow">{stat.value}</span>
                    <span className="ml-1.5 text-xs text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-6 shrink-0 md:mt-0">
            <Link
              href={config.href}
              className="inline-block rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange"
            >
              {config.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
