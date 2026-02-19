'use client';

import { useState, FormEvent } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      formType: 'contact',
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Work Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
        >
          <option value="">Select a subject</option>
          <option value="Sales Inquiry">Sales Inquiry</option>
          <option value="Support">Support</option>
          <option value="Partnership">Partnership</option>
          <option value="Press">Press</option>
          <option value="General">General</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder-ink-muted focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          placeholder="Tell us how we can help..."
        />
      </div>

      {status === 'success' && (
        <p className="rounded-lg bg-brand-green/10 px-4 py-3 text-sm font-medium text-brand-green">
          {message}
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-lg bg-brand-red/10 px-4 py-3 text-sm font-medium text-brand-red">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
