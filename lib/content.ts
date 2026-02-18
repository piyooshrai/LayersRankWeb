import type { ComponentType } from 'react';
import PostCalibration from '@/content/blog/calibration-playbook';
import PostFuzzy from '@/content/blog/fuzzy-logic-recruitment-guide';
import PostExplainable from '@/content/blog/explainable-ai-hiring-auditability';
import PostGcc from '@/content/blog/gcc-hiring-standards-india';
import PostConfidence from '@/content/blog/confidence-weighted-ranking';
import PostOps from '@/content/blog/interview-operations-at-scale';
import WhitepaperTrq from '@/content/whitepapers/tr-q-rofns-hiring-whitepaper';
import WhitepaperGcc from '@/content/whitepapers/gcc-hiring-rigor-benchmark';
import WhitepaperPedigree from '@/content/whitepapers/pedigree-bias-hiring-whitepaper';
import WhitepaperStructured from '@/content/whitepapers/structured-interviews-whitepaper';

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  category: 'Explainable Hiring' | 'Structured Scoring' | 'GCC Standards' | 'Interview Operations';
  date: string;
  readingTime: string;
  relatedSolution: '/solutions/gcc' | '/solutions/startups';
  component: ComponentType;
};

export const blogPosts: PostMeta[] = [
  {
    slug: 'explainable-ai-hiring-auditability',
    title: 'Explainable AI Hiring: Auditability Before Automation',
    description: 'A practical framework for traceable hiring decisions across panel interviews and technical assessments.',
    category: 'Explainable Hiring',
    date: '2026-01-07',
    readingTime: '8 min read',
    relatedSolution: '/solutions/gcc',
    component: PostExplainable
  },
  {
    slug: 'fuzzy-logic-recruitment-guide',
    title: 'Structured Interview Scoring: Replace Hard Cutoffs with Confidence Bands',
    description: 'How structured scoring improves hiring accuracy by modeling interviewer variance and incomplete evidence.',
    category: 'Structured Scoring',
    date: '2026-01-10',
    readingTime: '9 min read',
    relatedSolution: '/solutions/startups',
    component: PostFuzzy
  },
  {
    slug: 'gcc-hiring-standards-india',
    title: 'GCC Hiring Standards in India: From Headcount Velocity to Quality Control',
    description: 'Operational guidance for Bangalore, Hyderabad, Pune, and NCR GCC leaders scaling engineering talent.',
    category: 'GCC Standards',
    date: '2026-01-14',
    readingTime: '8 min read',
    relatedSolution: '/solutions/gcc',
    component: PostGcc
  },
  {
    slug: 'confidence-weighted-ranking',
    title: 'Confidence-Weighted Candidate Ranking for Enterprise Recruiting',
    description: 'A scoring architecture that keeps uncertainty visible so teams can rank candidates with defensible rigor.',
    category: 'Structured Scoring',
    date: '2026-01-18',
    readingTime: '10 min read',
    relatedSolution: '/solutions/gcc',
    component: PostConfidence
  },
  {
    slug: 'interview-operations-at-scale',
    title: 'Interview Operations at 10,000 Resume Scale: Calibration, Throughput, and Audit Trails',
    description: 'Blueprint for keeping interview quality consistent while hiring teams process high-volume pipelines.',
    category: 'Interview Operations',
    date: '2026-01-23',
    readingTime: '9 min read',
    relatedSolution: '/solutions/startups',
    component: PostOps
  },
  {
    slug: 'calibration-playbook',
    title: 'Interviewer Calibration Playbook: Reduce Variance Before You Add AI',
    description: 'Practical methods to standardize panel behavior and improve downstream model reliability.',
    category: 'Interview Operations',
    date: '2026-01-28',
    readingTime: '8 min read',
    relatedSolution: '/solutions/gcc',
    component: PostCalibration
  }
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const whitepapers = [
  {
    slug: 'tr-q-rofns-hiring-whitepaper',
    title: 'The Science Behind Confidence Scoring',
    description: 'How TR-q-ROFNs transform candidate evaluation. Mathematical foundations, practical applications, and validation data for confidence-aware hiring decisions.',
    component: WhitepaperTrq
  },
  {
    slug: 'pedigree-bias-hiring-whitepaper',
    title: 'Pedigree Bias in Indian Hiring',
    description: 'IIT/NIT filtering excludes 99% of engineering graduates. This paper examines what pedigree actually predicts, quantifies the cost, and presents LayersRank data showing how capability-based assessment identifies strong talent that pedigree filtering misses.',
    component: WhitepaperPedigree
  },
  {
    slug: 'structured-interviews-whitepaper',
    title: 'Structured vs. Unstructured Interviews',
    description: 'Decades of research show structured interviews outperform unstructured interviews. This paper summarizes the evidence, explains how LayersRank implements structured principles at scale, and provides ROI analysis.',
    component: WhitepaperStructured
  },
  {
    slug: 'gcc-hiring-rigor-benchmark',
    title: 'GCC Hiring Rigor Benchmark: India to Middle East Expansion',
    description: 'Benchmark model for cross-region quality controls in enterprise hiring.',
    component: WhitepaperGcc
  }
];

export function getWhitepaper(slug: string) {
  return whitepapers.find((item) => item.slug === slug);
}
