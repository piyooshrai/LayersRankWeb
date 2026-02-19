import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { AuditContent } from './audit-content';

export const metadata = makeMetadata({
  title: 'Interview Bias Audit Checklist | 12-Point Fair Hiring Check | LayersRank',
  description:
    'Free 12-point checklist to audit your hiring process for bias. Assess risk levels, get a priority matrix, and build a remediation plan for fair, defensible interviews.',
  path: '/resources/bias-audit',
});

const auditSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: 'Interview Bias Audit Checklist',
  description:
    '12-point checklist to assess if your hiring process is fair, consistent, and legally defensible. Includes risk ratings, evidence guides, and action plan templates.',
  creator: {
    '@type': 'Organization',
    name: 'LayersRank',
    url: 'https://www.layersrank.com',
  },
  encodingFormat: 'text/html',
  isAccessibleForFree: true,
  educationalUse: 'Professional Development',
};

export default function BiasAuditPage() {
  return (
    <>
      <JsonLd data={auditSchema} />
      <AuditContent />
    </>
  );
}
