import type { ComponentType } from 'react';
import PostCalibration from '@/content/blog/calibration-playbook';
import PostFuzzy from '@/content/blog/fuzzy-logic-recruitment-guide';
import PostExplainable from '@/content/blog/explainable-ai-hiring-auditability';
import PostGcc from '@/content/blog/gcc-hiring-standards-india';
import PostConfidence from '@/content/blog/confidence-weighted-ranking';
import PostOps from '@/content/blog/interview-operations-at-scale';
import WhitepaperTrq from '@/content/whitepapers/tr-q-rofns-hiring-whitepaper';
import WhitepaperGcc from '@/content/whitepapers/gcc-hiring-rigor-benchmark';

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  category: 'Explainable Hiring' | 'Fuzzy Logic & Scoring' | 'GCC Standards' | 'Interview Operations';
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
    title: 'Fuzzy Logic Recruitment: Replacing Hard Cutoffs with Confidence Bands',
    description: 'How fuzzy logic improves hiring accuracy by modeling interviewer variance and partial evidence.',
    category: 'Fuzzy Logic & Scoring',
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
    category: 'Fuzzy Logic & Scoring',
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
    title: 'TR-q-ROFNs for Explainable Candidate Ranking',
    description: 'Mathematical foundations and implementation notes for confidence-weighted hiring pipelines.',
    component: WhitepaperTrq
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
