'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { navDropdowns } from '@/lib/site';

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/LayersRank By The Algorithm Logo Transparent.jpg"
            alt="LayersRank"
            width={140}
            height={36}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navDropdowns.map((dropdown) => (
            <div
              key={dropdown.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(dropdown.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-light transition-colors hover:bg-paper-off hover:text-ink"
                onClick={() =>
                  setOpenDropdown(openDropdown === dropdown.label ? null : dropdown.label)
                }
              >
                {dropdown.label}
                <svg
                  className={`h-4 w-4 transition-transform ${openDropdown === dropdown.label ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              {openDropdown === dropdown.label && (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                  <div className="min-w-[280px] rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
                    {dropdown.groups ? (
                      <div className="flex gap-8">
                        {dropdown.groups.map((group) => (
                          <div key={group.label} className="min-w-[200px]">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                              {group.label}
                            </p>
                            <div className="space-y-1">
                              {group.items.map((item, i) => (
                                <Link
                                  key={`${item.label}-${i}`}
                                  href={item.href}
                                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-paper-off"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <span className="text-sm font-medium text-ink">{item.label}</span>
                                  {item.description && (
                                    <span className="block text-xs text-ink-muted">{item.description}</span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-1">
                        {dropdown.items?.map((item, i) => (
                          <Link
                            key={`${item.label}-${i}`}
                            href={item.href}
                            className={`block rounded-lg px-3 py-2 transition-colors hover:bg-paper-off ${item.featured ? 'bg-brand-yellow/10 ring-1 ring-brand-yellow/30' : ''}`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-sm font-medium text-ink">{item.label}</span>
                              {item.featured && (
                                <span className="rounded-full bg-brand-yellow px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                                  New
                                </span>
                              )}
                            </span>
                            {item.description && (
                              <span className="block text-xs text-ink-muted">{item.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/pricing"
            className="px-3 py-2 text-sm font-medium text-ink-light transition-colors hover:text-ink"
          >
            Pricing
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/demo"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-paper-off"
          >
            Log In
          </Link>
          <Link
            href="/demo"
            className="rounded-md bg-brand-yellow px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {navDropdowns.map((dropdown) => (
              <MobileDropdown key={dropdown.label} dropdown={dropdown} onNavigate={() => setMobileOpen(false)} />
            ))}
            <Link
              href="/pricing"
              className="block rounded-md px-3 py-2 text-sm font-medium text-ink-light hover:bg-paper-off"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex gap-3 pt-4">
              <Link
                href="/demo"
                className="flex-1 rounded-md border border-gray-300 py-2 text-center text-sm font-medium text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/demo"
                className="flex-1 rounded-md bg-brand-yellow py-2 text-center text-sm font-semibold text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileDropdown({
  dropdown,
  onNavigate,
}: {
  dropdown: (typeof navDropdowns)[number];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  const allItems = dropdown.groups
    ? dropdown.groups.flatMap((g) => g.items)
    : dropdown.items || [];

  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-ink-light hover:bg-paper-off"
        onClick={() => setOpen(!open)}
      >
        {dropdown.label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="ml-4 space-y-1 pb-2">
          {allItems.map((item, i) => (
            <Link
              key={`${item.label}-${i}`}
              href={item.href}
              className="block rounded-md px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
