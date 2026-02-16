import Link from 'next/link';
import { ReactNode } from 'react';

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  primaryCtaHref = '/demo',
  secondaryCta,
  secondaryCtaHref,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  primaryCtaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <Link href={primaryCtaHref} className="rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange">
                {primaryCta}
              </Link>
            )}
            {secondaryCta && secondaryCtaHref && (
              <Link href={secondaryCtaHref} className="rounded-lg border border-gray-500 px-6 py-3 font-medium text-white hover:border-white hover:bg-white/5">
                {secondaryCta}
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageCTA({
  title,
  description,
  cta = 'Book a Demo',
  ctaHref = '/demo',
  secondaryCta,
  secondaryCtaHref,
  variant = 'gradient',
}: {
  title: string;
  description?: string;
  cta?: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  variant?: 'gradient' | 'dark';
}) {
  const bg = variant === 'gradient' ? 'gradient-cta' : 'bg-ink text-white';
  const btnClass = variant === 'gradient'
    ? 'bg-ink text-white hover:bg-ink-light'
    : 'bg-brand-yellow text-ink hover:bg-brand-orange';

  return (
    <section className={`${bg} py-16`}>
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="mt-2 text-ink-light">{description}</p>}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href={ctaHref} className={`rounded-lg px-8 py-4 font-semibold ${btnClass}`}>{cta}</Link>
          {secondaryCta && secondaryCtaHref && (
            <Link href={secondaryCtaHref} className="rounded-lg border-2 border-ink/20 px-8 py-4 font-medium text-ink hover:border-ink/40">
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      {icon && <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">{icon}</div>}
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-light">{description}</p>
    </div>
  );
}

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: { feature: string; them: string; us: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-paper-off">
            <th className="px-6 py-4 text-left font-semibold text-ink">{headers[0]}</th>
            <th className="px-6 py-4 text-left font-semibold text-ink-muted">{headers[1]}</th>
            <th className="px-6 py-4 text-left font-semibold text-brand-yellow">{headers[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-t border-gray-200">
              <td className="px-6 py-4 font-medium text-ink">{row.feature}</td>
              <td className="px-6 py-4 text-ink-muted">{row.them}</td>
              <td className="px-6 py-4 text-ink">
                <span className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {row.us}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
