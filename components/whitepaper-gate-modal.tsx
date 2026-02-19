'use client';

import { useState, useEffect, useRef } from 'react';

interface WhitepaperGateModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  pageCount: number;
  downloadUrl: string;
}

const roles = [
  'Engineering Leader',
  'HR / Talent Acquisition',
  'Recruiter',
  'Founder / Executive',
  'Other',
];

const hiringVolumes = ['<50', '50–200', '200–500', '500–1,000', '1,000+'];

export function WhitepaperGateModal({
  open,
  onClose,
  title,
  subtitle,
  pageCount,
  downloadUrl,
}: WhitepaperGateModalProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [volume, setVolume] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  // Close on backdrop click
  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    const dialog = dialogRef.current;
    if (dialog && e.target === dialog) onClose();
  }

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Open whitepaper in new tab for reading / print-to-PDF
      window.open(downloadUrl, '_blank');

      // Reset after delay
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        setCompany('');
        setRole('');
        setVolume('');
        setNewsletter(false);
        onClose();
      }, 2000);
    }, 800);
  }

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 m-auto w-full max-w-lg rounded-2xl border-none bg-white p-0 shadow-2xl backdrop:bg-black/50"
    >
      <div className="p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-ink-muted hover:text-ink"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink/5">
            <svg className="h-6 w-6 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9l-5-5H7a2 2 0 00-2 2v13a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 4v5h5" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">{title}</h2>
            <p className="text-sm text-ink-muted">{subtitle}</p>
          </div>
        </div>

        <hr className="my-5 border-gray-200" />

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10">
              <svg className="h-7 w-7 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-4 text-lg font-semibold text-ink">Your download is starting</p>
            <p className="mt-1 text-sm text-ink-muted">We&rsquo;ll also send a copy to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-ink-light">
              Get the full {pageCount}-page research paper.
            </p>

            {/* Work Email */}
            <div>
              <label htmlFor="gate-email" className="block text-sm font-medium text-ink">
                Work Email <span className="text-brand-red">*</span>
              </label>
              <input
                id="gate-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              />
            </div>

            {/* Company */}
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
                placeholder="Your company"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="gate-role" className="block text-sm font-medium text-ink">
                Role <span className="text-brand-red">*</span>
              </label>
              <select
                id="gate-role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-ink focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              >
                <option value="" disabled>Select your role...</option>
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Hiring Volume (optional) */}
            <div>
              <label htmlFor="gate-volume" className="block text-sm font-medium text-ink">
                Hiring volume (annual) <span className="text-xs font-normal text-ink-muted">— Optional</span>
              </label>
              <select
                id="gate-volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="mt-1 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-ink focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              >
                <option value="">Select range...</option>
                {hiringVolumes.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink transition-colors hover:bg-brand-orange disabled:opacity-60"
            >
              {submitting ? 'Processing...' : 'Download PDF \u2192'}
            </button>

            {/* Newsletter opt-in */}
            <label className="flex items-start gap-2.5 text-sm text-ink-light">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-brand-yellow"
              />
              Send me monthly research updates
            </label>

            <p className="text-xs text-ink-muted">
              By downloading, you agree to our{' '}
              <a href="/legal/privacy" className="underline hover:text-ink">Privacy Policy</a>.
            </p>
          </form>
        )}
      </div>
    </dialog>
  );
}
