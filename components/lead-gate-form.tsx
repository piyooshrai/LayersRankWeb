'use client';

import { useState, FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

/* ── Personal email domains ────────────────────────────── */

const PERSONAL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.co.uk',
  'hotmail.com', 'hotmail.co.uk', 'outlook.com', 'live.com', 'msn.com',
  'aol.com', 'icloud.com', 'me.com', 'mac.com', 'mail.com',
  'protonmail.com', 'proton.me', 'tutanota.com', 'zoho.com', 'yandex.com',
  'rediffmail.com', 'gmx.com', 'gmx.net', 'fastmail.com', 'hey.com', 'inbox.com',
]);

/* ── Props ─────────────────────────────────────────────── */

export type LeadMagnetType = 'roi' | 'questions' | 'scorecard' | 'bias';

interface LeadGateFormProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  /** Which lead magnet PDF to send. If omitted the API call is skipped. */
  leadMagnetType?: LeadMagnetType;
  onSubmit: (data: { email: string; company: string; volume?: string; phone?: string }) => void;
}

export function LeadGateForm({
  title = 'Get Your Full Report',
  description = 'Enter your work email to see the complete breakdown.',
  ctaLabel = 'Get My Report',
  leadMagnetType,
  onSubmit,
}: LeadGateFormProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid work email');
      return;
    }

    const domain = email.split('@')[1]?.toLowerCase();
    if (domain && PERSONAL_DOMAINS.has(domain)) {
      setError('Please use your work email. Personal emails (Gmail, Yahoo, etc.) are not accepted.');
      return;
    }

    if (!company.trim()) {
      setError('Please enter your company name');
      return;
    }

    setLoading(true);

    try {
      // Call the API to send email + log lead (if type is provided)
      if (leadMagnetType) {
        const res = await fetch('/api/lead-magnet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            company,
            volume: volume || undefined,
            phone: phone || undefined,
            type: leadMagnetType,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || 'Something went wrong. Please try again.');
          setLoading(false);
          return;
        }
      }

      // Track conversion
      trackEvent('lead_magnet_submit', {
        type: leadMagnetType || 'unknown',
        company,
        volume: volume || 'not_provided',
      });

      setSuccess(true);
      onSubmit({ email, company, volume: volume || undefined, phone: phone || undefined });
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  /* ── Success state ───────────────────────────────────── */

  if (success) {
    return (
      <div className="rounded-2xl border-2 border-brand-green/30 bg-brand-green/5 p-6 md:p-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/20">
            <svg className="h-6 w-6 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-ink">Check Your Email</h3>
          <p className="mt-2 text-sm text-ink-light">
            We&rsquo;ve sent the PDF to <span className="font-medium text-ink">{email}</span>.
            If you don&rsquo;t see it, check your spam folder.
          </p>
          <p className="mt-4 text-xs text-ink-muted">
            The content is also available below on this page.
          </p>
        </div>
      </div>
    );
  }

  /* ── Form state ──────────────────────────────────────── */

  return (
    <div className="rounded-2xl border-2 border-brand-yellow/30 bg-brand-yellow/5 p-6 md:p-8">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow/20">
            <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <p className="mt-1 text-sm text-ink-light">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="gate-email" className="block text-sm font-medium text-ink">
              Work email <span className="text-brand-red">*</span>
            </label>
            <input
              id="gate-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
            />
          </div>

          <div>
            <label htmlFor="gate-company" className="block text-sm font-medium text-ink">
              Company <span className="text-brand-red">*</span>
            </label>
            <input
              id="gate-company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your company name"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
            />
          </div>

          <div>
            <label htmlFor="gate-volume" className="block text-sm font-medium text-ink">
              Annual hiring volume <span className="text-ink-muted">(optional)</span>
            </label>
            <select
              id="gate-volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-ink focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
            >
              <option value="">Select range</option>
              <option value="10-25">10&ndash;25 hires/year</option>
              <option value="25-50">25&ndash;50 hires/year</option>
              <option value="50-100">50&ndash;100 hires/year</option>
              <option value="100-250">100&ndash;250 hires/year</option>
              <option value="250-500">250&ndash;500 hires/year</option>
              <option value="500+">500+ hires/year</option>
            </select>
          </div>

          <div>
            <label htmlFor="gate-phone" className="block text-sm font-medium text-ink">
              Phone <span className="text-ink-muted">(optional)</span>
            </label>
            <input
              id="gate-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/20"
            />
          </div>

          {error && (
            <p className="text-sm text-brand-red">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Sending...' : ctaLabel}
          </button>

          <p className="text-center text-xs text-ink-muted">
            No spam. We&rsquo;ll only send you the report and relevant hiring insights.
          </p>
        </form>
      </div>
    </div>
  );
}
