'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'all' | 'operations' | 'product' | 'results' | 'science';

const categoryMeta: Record<Exclude<Category, 'all'>, { label: string; color: string; dot: string; border: string; bg: string }> = {
  operations: { label: 'Operations', color: '#e74c3c', dot: 'bg-[#e74c3c]', border: 'border-l-[#e74c3c]', bg: 'bg-[#e74c3c]/5' },
  product:    { label: 'Product',    color: '#f39c12', dot: 'bg-[#f39c12]', border: 'border-l-[#f39c12]', bg: 'bg-[#f39c12]/5' },
  results:    { label: 'Results',    color: '#2ecc71', dot: 'bg-[#2ecc71]', border: 'border-l-[#2ecc71]', bg: 'bg-[#2ecc71]/5' },
  science:    { label: 'Science',    color: '#3b82f6', dot: 'bg-[#3b82f6]', border: 'border-l-[#3b82f6]', bg: 'bg-[#3b82f6]/5' },
};

const featuredPost = {
  category: 'science' as const,
  title: 'Why Confidence Intervals Matter More Than Scores',
  excerpt:
    'Your interview process produces numbers. But a 74 you can trust is different from a 74 you can\u2019t. Here\u2019s why knowing the difference changes hiring decisions.',
  readTime: '5 min',
  href: '/blog/confidence-intervals-matter',
};

const posts = [
  {
    category: 'operations' as const,
    title: 'The Phone Screen Is Dead',
    excerpt: '45\u201360 minutes per candidate. 15\u201325% interviewer variance. There\u2019s a better way.',
    readTime: '7 min',
    href: '/blog/phone-screen-is-dead',
  },
  {
    category: 'operations' as const,
    title: 'What US Headquarters Gets Wrong About GCC Hiring',
    excerpt: 'US-designed tools don\u2019t fit India operations. Here\u2019s how to communicate your actual needs.',
    readTime: '6 min',
    href: '/blog/gcc-hiring-hq-mistakes',
  },
  {
    category: 'product' as const,
    title: 'How to Create Audit-Ready Hiring Reports',
    excerpt: 'When compliance asks how you evaluated 500 candidates, you need documentation \u2014 not interview notes.',
    readTime: '6 min',
    href: '/blog/audit-ready-hiring-reports',
  },
  {
    category: 'science' as const,
    title: 'Reduce Interviewer Bias in India Panels',
    excerpt: 'Panels disagree 15\u201325% of the time on the same candidates. Here\u2019s how to fix it.',
    readTime: '7 min',
    href: '/blog/reduce-interviewer-bias-india',
  },
  {
    category: 'operations' as const,
    title: 'Scale Bangalore Hiring Without Mis-Hires',
    excerpt: 'The scaling paradox: hire faster means hire worse. Here\u2019s how to break it.',
    readTime: '6 min',
    href: '/blog/scale-bangalore-hiring',
  },
  {
    category: 'results' as const,
    title: 'Beyond Pedigree: Finding Elite Tier-2 Talent',
    excerpt: 'IIT filtering excludes 99% of candidates. Here\u2019s how to find strong engineers without compromising your bar.',
    readTime: '7 min',
    href: '/blog/beyond-pedigree-tier-2-talent',
  },
  {
    category: 'science' as const,
    title: 'Measuring Panel Consistency Across Distributed Teams',
    excerpt: 'If two panels evaluated the same candidate, how often would they agree? Most companies can\u2019t answer this.',
    readTime: '6 min',
    href: '/blog/panel-consistency-distributed-teams',
  },
  {
    category: 'product' as const,
    title: 'How Adaptive Follow-Up Questions Reduce Variance',
    excerpt: 'When responses are ambiguous, targeted probing resolves uncertainty. Here\u2019s the science.',
    readTime: '5 min',
    href: '/blog/adaptive-follow-up-questions',
  },
  {
    category: 'product' as const,
    title: 'Deception Detection Through Behavioral Signals',
    excerpt: 'Copy-paste events, tab switches, typing patterns \u2014 what they reveal about candidate integrity.',
    readTime: '6 min',
    href: '/blog/deception-detection-behavioral-signals',
  },
];

const filterOptions: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'operations', label: 'Operations' },
  { key: 'product', label: 'Product' },
  { key: 'results', label: 'Results' },
  { key: 'science', label: 'Science' },
];

function CategoryBadge({ category }: { category: Exclude<Category, 'all'> }) {
  const meta = categoryMeta[category];
  return (
    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">
      <span className={`inline-block h-2 w-2 rounded-full ${meta.dot}`} />
      {meta.label}
    </span>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all' ? posts : posts.filter((p) => p.category === active);
  const showFeatured = active === 'all' || active === featuredPost.category;

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-ink py-12 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">Insights</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            The LayersRank Blog
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-300 md:text-lg">
            Practical thinking on structured hiring, panel consistency, and making decisions you can defend.
          </p>
        </div>
      </section>

      {/* ── FILTERS + POSTS ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => {
              const isActive = active === opt.key;
              const dotColor = opt.key !== 'all' ? categoryMeta[opt.key].dot : '';
              return (
                <button
                  key={opt.key}
                  onClick={() => setActive(opt.key)}
                  className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-ink bg-ink text-white'
                      : 'border-gray-300 bg-white text-ink-light hover:border-ink hover:text-ink'
                  }`}
                >
                  {opt.key !== 'all' && (
                    <span className={`inline-block h-2 w-2 rounded-full ${dotColor}`} />
                  )}
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Featured post */}
          {showFeatured && (
            <Link
              href={featuredPost.href}
              className="mt-10 block rounded-2xl border border-gray-200 bg-paper-off p-6 transition-shadow hover:shadow-md sm:p-8 md:p-10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <CategoryBadge category={featuredPost.category} />
                  <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{featuredPost.title}</h2>
                  <p className="mt-3 text-base text-ink-light">{featuredPost.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-yellow">
                    Read More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <span className="shrink-0 text-sm text-ink-muted">{featuredPost.readTime}</span>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => {
              const meta = categoryMeta[post.category];
              return (
                <Link
                  key={post.href}
                  href={post.href}
                  className={`group flex flex-col rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md`}
                >
                  <div className={`flex flex-1 flex-col border-l-4 p-5`} style={{ borderLeftColor: meta.color }}>
                    <div className="flex items-center justify-between">
                      <CategoryBadge category={post.category} />
                      <span className="text-xs text-ink-muted">{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-ink">{post.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-light">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-yellow group-hover:text-brand-orange">
                      Read More
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-ink-muted">No posts in this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ── */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Get Hiring Insights Monthly</h2>
          <p className="mt-3 text-ink-light">
            No spam. Just practical thinking on structured hiring, delivered once a month.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-ink placeholder:text-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow sm:w-72"
            />
            <button
              type="submit"
              className="rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: '/resources/sample-report', label: 'Sample Report', desc: 'See a real candidate evaluation' },
              { href: '/resources/roi-calculator', label: 'ROI Calculator', desc: 'Estimate your screening savings' },
              { href: '/demo', label: 'Book a Demo', desc: 'See LayersRank in action' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-ink">{link.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
