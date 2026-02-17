import { ReactNode } from 'react';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title:
    'Hiring ROI Calculator | Calculate LayersRank Savings | LayersRank',
  description:
    'Calculate your potential savings with LayersRank. Estimate time saved, cost reduction, and quality improvement for your hiring process.',
  path: '/resources/roi-calculator',
});

export default function ROICalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
