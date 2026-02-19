'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

/* ── Resource definitions ──────────────────────────────── */

interface Resource {
  title: string;
  description: string;
  href: string;
  pages: string[];
}

const resources: Resource[] = [
  {
    title: 'Hiring Cost Calculator',
    description: 'Find out how much bad hires are really costing you',
    href: '/resources/roi-calculator',
    pages: ['/pricing', '/solutions/startups', '/solutions/enterprise'],
  },
  {
    title: 'Interview Question Bank',
    description: '50 behavioral questions with scoring rubrics',
    href: '/resources/question-bank',
    pages: ['/product/structured-interviews', '/product', '/product/adaptive-questioning'],
  },
  {
    title: 'Hiring Scorecard Template',
    description: 'Structured evaluation framework for your team',
    href: '/resources/hiring-scorecard',
    pages: ['/solutions/gcc', '/solutions/agencies'],
  },
  {
    title: 'Bias Audit Checklist',
    description: '12-point check for fair, defensible hiring',
    href: '/resources/bias-audit',
    pages: ['/science/bias-mitigation', '/science', '/solutions/campus-hiring'],
  },
];

/* ── Cookie helpers ────────────────────────────────────── */

const DISMISS_COOKIE = 'lr_exit_dismiss';
const CONVERT_COOKIE = 'lr_exit_convert';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

/* ── Component ─────────────────────────────────────────── */

export function ExitIntentPopup() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [suppressed, setSuppressed] = useState(false);
  const maxScrollRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const hasFiredRef = useRef(false);

  // Check cookies on mount
  useEffect(() => {
    if (getCookie(DISMISS_COOKIE) || getCookie(CONVERT_COOKIE)) {
      setSuppressed(true);
    }
  }, []);

  // Select the most relevant resource for the current page
  const sortedResources = (() => {
    const matched = resources.find((r) =>
      r.pages.some((p) => pathname.startsWith(p)),
    );
    if (!matched) return resources;
    return [matched, ...resources.filter((r) => r !== matched)];
  })();

  // Desktop: mouse leave viewport
  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !suppressed && !hasFiredRef.current) {
        hasFiredRef.current = true;
        setShow(true);
        trackEvent('exit_intent_popup', { trigger: 'mouse_leave', page: pathname });
      }
    },
    [suppressed, pathname],
  );

  // Mobile: scroll-up after 50% page depth
  const handleScroll = useCallback(() => {
    if (suppressed || hasFiredRef.current) return;

    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pctScrolled = docHeight > 0 ? scrollY / docHeight : 0;

    if (pctScrolled > maxScrollRef.current) {
      maxScrollRef.current = pctScrolled;
    }

    // Trigger if user scrolled past 50% and is now scrolling up significantly
    if (maxScrollRef.current >= 0.5 && scrollY < lastScrollYRef.current - 100) {
      hasFiredRef.current = true;
      setShow(true);
      trackEvent('exit_intent_popup', { trigger: 'scroll_up', page: pathname });
    }

    lastScrollYRef.current = scrollY;
  }, [suppressed, pathname]);

  // Don't show on resource pages themselves
  const isResourcePage = pathname.startsWith('/resources/roi-calculator')
    || pathname.startsWith('/resources/question-bank')
    || pathname.startsWith('/resources/hiring-scorecard')
    || pathname.startsWith('/resources/bias-audit');

  useEffect(() => {
    if (typeof window === 'undefined' || suppressed || isResourcePage) return;

    // Delay attaching to avoid triggering on initial page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseLeave, handleScroll, suppressed, isResourcePage]);

  function dismiss() {
    setShow(false);
    setSuppressed(true);
    setCookie(DISMISS_COOKIE, '1', 7);
    trackEvent('exit_intent_dismiss', { page: pathname });
  }

  function handleConvert(href: string) {
    setShow(false);
    setSuppressed(true);
    setCookie(CONVERT_COOKIE, '1', 365);
    trackEvent('exit_intent_click', { resource: href, page: pathname });
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl md:p-8">
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 rounded-full p-1 text-ink-muted hover:bg-paper-off hover:text-ink"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Before you go
          </p>
          <h3 className="mt-3 text-xl font-bold text-ink md:text-2xl">
            Download Free Hiring Tools
          </h3>
          <p className="mt-2 text-sm text-ink-light">
            Get our free resources to improve your hiring process. No credit card required.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {sortedResources.map((resource, i) => (
            <Link
              key={resource.href}
              href={resource.href}
              onClick={() => handleConvert(resource.href)}
              className={`flex items-center gap-3 rounded-xl border p-4 transition-colors hover:border-brand-yellow hover:bg-brand-yellow/5 ${
                i === 0
                  ? 'border-brand-yellow/40 bg-brand-yellow/5'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">
                  {resource.title}
                  {i === 0 && (
                    <span className="ml-2 rounded-full bg-brand-yellow/20 px-2 py-0.5 text-[10px] font-bold text-brand-yellow">
                      Recommended
                    </span>
                  )}
                </p>
                <p className="text-xs text-ink-muted">{resource.description}</p>
              </div>
              <svg className="ml-auto h-4 w-4 shrink-0 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={dismiss}
            className="text-sm text-ink-muted underline hover:text-ink"
          >
            No thanks, I&rsquo;m good
          </button>
        </div>
      </div>
    </div>
  );
}
