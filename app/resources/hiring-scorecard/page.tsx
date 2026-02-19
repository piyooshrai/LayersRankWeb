import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { ScorecardContent } from './scorecard-content';

export const metadata = makeMetadata({
  title: 'Engineering Hiring Scorecard | Structured Interview Rubric | LayersRank',
  description:
    'Free hiring scorecard template with 6 competencies, 5-point behavioral anchors, red flag checklist, and calibration guide for engineering interviews.',
  path: '/resources/hiring-scorecard',
});

const scorecardSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: 'Engineering Hiring Scorecard',
  description:
    'Structured evaluation rubric for engineering interviews with behavioral anchors, calibration guide, and red flag checklist.',
  creator: {
    '@type': 'Organization',
    name: 'LayersRank',
    url: 'https://www.layersrank.com',
  },
  encodingFormat: 'text/html',
  isAccessibleForFree: true,
  educationalUse: 'Professional Development',
};

export default function HiringScorecardPage() {
  return (
    <>
      <JsonLd data={scorecardSchema} />
      <ScorecardContent />
    </>
  );
}
