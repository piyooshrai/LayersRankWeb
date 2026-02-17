import type { MetadataRoute } from 'next';
import { blogPosts, whitepapers } from '@/lib/content';
import { siteConfig } from '@/lib/site';

const staticRoutes = [
  '',
  '/product',
  '/product/structured-interviews',
  '/product/confidence-scoring',
  '/product/adaptive-questioning',
  '/product/integrity-detection',
  '/product/candidate-reports',
  '/product/question-bank',
  '/product/integrations',
  '/science',
  '/science/fuzzy-logic',
  '/science/explainability',
  '/science/bias-mitigation',
  '/solutions/gcc',
  '/solutions/startups',
  '/solutions/enterprise',
  '/solutions/agencies',
  '/solutions/technical-hiring',
  '/solutions/campus-hiring',
  '/solutions/india',
  '/solutions/middle-east',
  '/compare/hirevue',
  '/compare/hackerrank',
  '/compare/codility',
  '/compare/traditional',
  '/resources',
  '/resources/blog',
  '/resources/whitepapers',
  '/resources/case-studies',
  '/resources/roi-calculator',
  '/resources/sample-report',
  '/pricing',
  '/company',
  '/about',
  '/careers',
  '/contact',
  '/demo',
  '/security',
  '/legal/privacy',
  '/legal/terms',
  '/legal/ai-ethics',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const whitepaperEntries = whitepapers.map((paper) => ({
    url: `${siteConfig.url}/resources/whitepapers/${paper.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticEntries, ...blogEntries, ...whitepaperEntries];
}
