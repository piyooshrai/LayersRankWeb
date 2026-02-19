'use client';

import { useState, FormEvent } from 'react';

interface LeadGateFormProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onSubmit: (data: { email: string; company: string; volume?: string; phone?: string }) => void;
}

export function LeadGateForm({
  title = 'Get Your Full Report',
  description = 'Enter your work email to see the complete breakdown.',
  ctaLabel = 'Get My Report',
  onSubmit,
}: LeadGateFormProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid work email');
      return;
    }
    if (!company.trim()) {
      setError('Please enter your company name');
      return;
    }

    onSubmit({ email, company, volume: volume || undefined, phone: phone || undefined });
  }

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
              <option value="10-25">10\u201325 hires/year</option>
              <option value="25-50">25\u201350 hires/year</option>
              <option value="50-100">50\u2013100 hires/year</option>
              <option value="100-250">100\u2013250 hires/year</option>
              <option value="250-500">250\u2013500 hires/year</option>
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
            className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange"
          >
            {ctaLabel}
          </button>

          <p className="text-center text-xs text-ink-muted">
            No spam. We&rsquo;ll only send you the report and relevant hiring insights.
          </p>
        </form>
      </div>
    </div>
  );
}
