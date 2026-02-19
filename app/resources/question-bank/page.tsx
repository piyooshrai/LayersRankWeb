import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { QuestionBankContent } from './question-bank-content';

export const metadata = makeMetadata({
  title: '50 Behavioral Interview Questions for Engineering Roles | LayersRank',
  description:
    'Free question bank with 50 behavioral interview questions for engineering hires. Each question includes what it measures, strong answer signals, and red flags.',
  path: '/resources/question-bank',
});

const questionBankSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: '50 Behavioral Interview Questions for Engineering Roles',
  description:
    'Structured behavioral interview question bank covering problem-solving, collaboration, growth mindset, ownership, and adaptability.',
  creator: {
    '@type': 'Organization',
    name: 'LayersRank',
    url: 'https://www.layersrank.com',
  },
  encodingFormat: 'text/html',
  isAccessibleForFree: true,
  educationalUse: 'Professional Development',
};

export default function QuestionBankPage() {
  return (
    <>
      <JsonLd data={questionBankSchema} />
      <QuestionBankContent />
    </>
  );
}
