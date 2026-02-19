import Link from 'next/link';
import Image from 'next/image';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '/product' },
      { label: 'Structured Interviews', href: '/product/structured-interviews' },
      { label: 'Confidence Scoring', href: '/product/confidence-scoring' },
      { label: 'Adaptive Follow-Up', href: '/product/adaptive-questioning' },
      { label: 'Reports', href: '/product/candidate-reports' },
      { label: 'Integrations', href: '/product/integrations' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'GCC Hiring', href: '/solutions/gcc' },
      { label: 'Startups', href: '/solutions/startups' },
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'Technical Hiring', href: '/solutions/technical-hiring' },
      { label: 'India', href: '/solutions/india' },
      { label: 'Middle East', href: '/solutions/middle-east' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { label: 'vs HireVue', href: '/compare/hirevue' },
      { label: 'vs HackerRank', href: '/compare/hackerrank' },
      { label: 'vs Codility', href: '/compare/codility' },
      { label: 'vs Traditional', href: '/compare/traditional' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Whitepapers', href: '/resources/whitepapers' },
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Sample Report', href: '/resources/sample-report' },
    ],
  },
  {
    title: 'Free Resources',
    links: [
      { label: 'Hiring Cost Calculator', href: '/resources/roi-calculator' },
      { label: 'Question Bank', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard', href: '/resources/hiring-scorecard' },
      { label: 'Bias Audit Checklist', href: '/resources/bias-audit' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Science', href: '/science' },
      { label: 'Security', href: '/security' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Ethics', href: '/legal/ai-ethics' },
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'Terms', href: '/legal/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/LayersRank By The Algorithm Logo Transparent.png"
                alt="LayersRank"
                width={140}
                height={36}
                className="brightness-0 invert object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Confidence-weighted hiring infrastructure for teams that need consistent, defensible decisions.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-brand-yellow" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-brand-yellow" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 rounded-xl border border-gray-700 bg-gray-800/50 p-4 md:flex md:items-center md:justify-between md:p-6">
          <div>
            <h3 className="text-sm font-semibold text-white">Stay updated on hiring science</h3>
            <p className="mt-1 text-sm text-gray-400">
              Get research-backed insights on structured hiring, delivered monthly.
            </p>
          </div>
          <div className="mt-4 flex gap-2 md:mt-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow md:w-auto"
            />
            <button className="whitespace-nowrap rounded-md bg-brand-yellow px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} LayersRank. All rights reserved.
            </p>
            <span className="hidden text-gray-600 md:inline">&middot;</span>
            <a
              href="https://www.the-algo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors hover:text-brand-yellow"
            >
              Powered By The Algorithm
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg className="h-4 w-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              SOC 2 Compliant
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg className="h-4 w-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              GDPR Ready
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg className="h-4 w-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              ISO 27001
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
