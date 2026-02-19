import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { HiringCostCalculator } from './hiring-cost-calculator';

export const metadata = makeMetadata({
  title: 'Hiring Cost Calculator | How Much Are Bad Hires Costing You? | LayersRank',
  description:
    'Calculate the true cost of mis-hires in your engineering team. Free interactive calculator shows direct costs, indirect costs, and ROI of structured hiring.',
  path: '/resources/roi-calculator',
});

const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Hiring Cost Calculator',
  description:
    'Interactive calculator to estimate the true cost of bad hires and ROI of structured interviews.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  provider: {
    '@type': 'Organization',
    name: 'LayersRank',
    url: 'https://www.layersrank.com',
  },
};

export default function ROICalculatorPage() {
  return (
    <>
      <JsonLd data={calculatorSchema} />
      <HiringCostCalculator />
    </>
  );
}
