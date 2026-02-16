import { ReactNode } from 'react';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'ROI Calculator | LayersRank',
  description:
    'Estimate time and cost savings with LayersRank. Calculate your hiring ROI based on your current volume, time-to-fill, and interview costs.',
  path: '/resources/roi-calculator',
});

export default function ROICalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
