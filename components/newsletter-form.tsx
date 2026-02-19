'use client';

import { useState, FormEvent } from 'react';

interface NewsletterFormProps {
  variant?: 'footer' | 'inline';
}

export function NewsletterForm({ variant = 'inline' }: NewsletterFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const email = (form.elements.namedItem('newsletter_email') as HTMLInputElement).value;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'newsletter', email }),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(json.message);
        form.reset();
      } else {
        setStatus('error');
        setMessage(json.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  if (variant === 'footer') {
    return (
      <div>
        {status === 'success' ? (
          <p className="text-sm font-medium text-brand-green">{message}</p>
        ) : (
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              name="newsletter_email"
              required
              placeholder="your@email.com"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow md:w-auto"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="whitespace-nowrap rounded-md bg-brand-yellow px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange disabled:opacity-50"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-2 text-xs text-brand-red">{message}</p>
        )}
      </div>
    );
  }

  // inline variant (blog page)
  return (
    <div>
      {status === 'success' ? (
        <p className="text-sm font-medium text-brand-green">{message}</p>
      ) : (
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="newsletter_email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-ink placeholder:text-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow sm:w-72"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-brand-yellow px-6 py-3 font-semibold text-ink hover:bg-brand-orange disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-center text-sm text-brand-red">{message}</p>
      )}
    </div>
  );
}
