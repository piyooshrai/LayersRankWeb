import { HeroPhoto } from '@/components/hero-photo';
import { Section } from '@/components/section';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'GCC Hiring Solution | LayersRank',
  description: 'Global quality with local India scale for GCC hiring teams across Bangalore, Hyderabad, Pune, and NCR.',
  path: '/solutions/gcc'
});

export default function GccPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Global Quality, Local Scale.</h1>
      <HeroPhoto src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80" alt="Indian HR and engineering hiring managers calibrating interview decisions in a corporate meeting room" />
      <Section title="Built for India-first GCC hiring operations">
        <ul className="list-disc space-y-2 pl-5">
          <li>Pedigree neutrality beyond IIT-only filters with evidence-based ranking.</li>
          <li>Audit-ready PDF dossiers for global HQ and compliance reviews.</li>
          <li>Offer drop-out and ghosting risk early warning before final rounds.</li>
          <li>10,000-resume throughput with interviewer calibration monitoring.</li>
        </ul>
      </Section>
    </div>
  );
}
