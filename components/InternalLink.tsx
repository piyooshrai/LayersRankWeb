import Link from 'next/link';
import type { ReactNode } from 'react';

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  /**
   * Visual style.
   * - 'inline'   — underlined link within body copy (default)
   * - 'subtle'   — no underline, color on hover
   * - 'pill'     — small pill badge link
   */
  variant?: 'inline' | 'subtle' | 'pill';
  className?: string;
}

const variants: Record<NonNullable<InternalLinkProps['variant']>, string> = {
  inline:
    'font-medium text-brand-yellow underline underline-offset-2 decoration-brand-yellow/40 hover:decoration-brand-yellow transition-colors',
  subtle:
    'text-ink-light transition-colors hover:text-brand-yellow',
  pill:
    'inline-flex items-center rounded-full border border-brand-yellow/30 bg-brand-yellow/5 px-2.5 py-0.5 text-xs font-medium text-brand-yellow transition-colors hover:bg-brand-yellow/10',
};

/**
 * Contextual internal link with consistent styling.
 *
 * Usage:
 *   <InternalLink href="/product/confidence-scoring">
 *     confidence-weighted scoring
 *   </InternalLink>
 */
export function InternalLink({
  href,
  children,
  variant = 'inline',
  className = '',
}: InternalLinkProps) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
