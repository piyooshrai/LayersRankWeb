import Link from 'next/link';
import { HeroPhoto } from '@/components/hero-photo';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Stop Guessing. Start Ranking. | LayersRank',
  description:
    'Confidence-weighted hiring for high-stakes engineering and GCC hiring teams. Rank candidates with auditable certainty.',
  path: '/'
});

export default function HomePage() {
  return (
    <div className="quant-grid chart-line bg-navy text-white">
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">Explainable AI Hiring Infrastructure</p>
          <h1 className="text-5xl font-semibold leading-tight">Stop Guessing. Start Ranking.</h1>
          <p className="max-w-xl text-lg text-slate-200">
            Confidence-weighted hiring. Replace binary scores with multi-dimensional fuzzy logic that ranks candidates with
            auditable certainty.
          </p>
          <div className="flex gap-4">
            <Link href="/company" className="rounded-md bg-confidence px-5 py-3 font-medium text-navy">
              Book a Rigor Audit
            </Link>
            <Link href="/resources/whitepapers" className="rounded-md border border-slate-300 px-5 py-3 font-medium">
              Read the Whitepaper
            </Link>
          </div>
        </div>
        <HeroPhoto
          src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1400&q=80"
          alt="Indian engineering hiring panel in a glass office room reviewing candidate assessments"
        />
      </section>
    </div>
  );
}
