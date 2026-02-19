'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export function DemoForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      formType: 'demo',
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      teamSize: (form.elements.namedItem('teamSize') as HTMLSelectElement).value,
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
    <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8">
      <h2 className="text-xl font-bold">Request a demo</h2>
      <p className="mt-2 text-sm text-gray-400">
        Fill out the form and we&apos;ll schedule a personalized walkthrough.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              placeholder="Priya"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              placeholder="Sharma"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
            placeholder="priya@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300">Hiring team size</label>
          <select
            id="teamSize"
            name="teamSize"
            className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          >
            <option value="">Select team size</option>
            <option value="1-10">1-10 people</option>
            <option value="11-50">11-50 people</option>
            <option value="51-200">51-200 people</option>
            <option value="201-1000">201-1,000 people</option>
            <option value="1000+">1,000+ people</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">What are you looking to solve?</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="mt-1 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
            placeholder="Tell us about your hiring challenges..."
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
          className="w-full rounded-lg bg-brand-yellow py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-orange disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Request Demo'}
        </button>
        <p className="text-center text-xs text-gray-500">
          By submitting, you agree to our{' '}
          <Link href="/legal/privacy" className="underline">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
}
