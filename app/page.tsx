import { Hero } from '@/components/Hero';
import Image from 'next/image';
import { ProblemSection } from '@/components/ProblemSection';
import { HowItWorks } from '@/components/HowItWorks';
import { Differentiator } from '@/components/Differentiator';
import { SampleReport } from '@/components/SampleReport';
import { GCCSection } from '@/components/GCCSection';
import { ScienceTeaser } from '@/components/ScienceTeaser';
import { CTASection } from '@/components/CTASection';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'LayersRank | Stop Guessing. Start Ranking.',
  description:
    'Improve hiring quality with structured interview scoring, bias reduction, and confidence-based candidate ranking for recruiters and GCC hiring teams.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-ink px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src="/images/hero-hiring-team.png"
              alt="Indian hiring team reviewing structured interview results with LayersRank candidate ranking platform"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>
      <ProblemSection />
      <HowItWorks />
      <Differentiator />
      <SampleReport />
      <GCCSection />
      <ScienceTeaser />
      <CTASection />
    </>
  );
}
