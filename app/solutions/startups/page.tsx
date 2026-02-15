import { HeroPhoto } from '@/components/hero-photo';
import { Section } from '@/components/section';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Startup Hiring Solution | LayersRank',
  description: 'Move fast without losing hiring rigor using lightweight confidence-weighted workflows.',
  path: '/solutions/startups'
});

export default function StartupsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Speed without losing rigor.</h1>
      <HeroPhoto src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" alt="Startup founder and engineering team in India reviewing interview scorecards and candidate pipeline" />
      <Section title="High-signal hiring for startup teams">
        <ul className="list-disc space-y-2 pl-5">
          <li>Rapid calibration in less than two hiring sprints.</li>
          <li>Lightweight workflow templates that avoid process bloat.</li>
          <li>Strong signal capture across coding, system design, and behavioral rounds.</li>
        </ul>
      </Section>
    </div>
  );
}
