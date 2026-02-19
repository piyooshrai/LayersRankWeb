'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const resources = [
  {
    title: 'Hiring Cost Calculator',
    description: 'Find out how much bad hires are really costing you',
    href: '/resources/roi-calculator',
  },
  {
    title: 'Interview Question Bank',
    description: 'Role-specific questions with scoring rubrics',
    href: '/resources/question-bank',
  },
  {
    title: 'Hiring Scorecard Template',
    description: 'Structured evaluation framework for your team',
    href: '/resources/hiring-scorecard',
  },
  {
    title: 'Bias Audit Checklist',
    description: 'Identify and eliminate bias in your hiring process',
    href: '/resources/bias-audit',
  },
];

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    },
    [dismissed],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      if (sessionStorage.getItem('exit-popup-dismissed')) {
        setDismissed(true);
        return;
      }
    } catch {
      // sessionStorage may not be available
    }

    // Delay attaching to avoid triggering on initial page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  function dismiss() {
    setShow(false);
    setDismissed(true);
    try {
      sessionStorage.setItem('exit-popup-dismissed', 'true');
    } catch {
      // ignore
    }
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
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              onClick={dismiss}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-brand-yellow hover:bg-brand-yellow/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10">
                <svg className="h-5 w-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{resource.title}</p>
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
