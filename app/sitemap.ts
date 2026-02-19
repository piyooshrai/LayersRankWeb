import type { MetadataRoute } from 'next';
import { blogPosts, whitepapers } from '@/lib/content';
import { siteConfig } from '@/lib/site';

/* ── Page definitions with explicit priorities ──────────── */

interface SitemapRoute {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}

const routes: SitemapRoute[] = [
  // Homepage
  { path: '', priority: 1.0, changeFrequency: 'weekly' },

  // High-value conversion pages
  { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/demo', priority: 0.9, changeFrequency: 'weekly' },

  // Product pages
  { path: '/product', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/product/structured-interviews', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/product/confidence-scoring', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/product/adaptive-questioning', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/product/integrity-detection', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/product/candidate-reports', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/product/question-bank', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/product/integrations', priority: 0.7, changeFrequency: 'monthly' },

  // Science pages
  { path: '/science', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/science/fuzzy-logic', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/science/explainability', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/science/bias-mitigation', priority: 0.7, changeFrequency: 'monthly' },

  // Solution pages — tiered by traffic intent
  { path: '/solutions/gcc', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/solutions/enterprise', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/solutions/startups', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/solutions/technical-hiring', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/solutions/agencies', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/solutions/campus-hiring', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/solutions/india', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/solutions/middle-east', priority: 0.7, changeFrequency: 'weekly' },

  // Compare pages (existing)
  { path: '/compare/hirevue', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/compare/hackerrank', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/compare/codility', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/compare/traditional', priority: 0.7, changeFrequency: 'monthly' },

  // Alternative pages (new)
  { path: '/alternative', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/alternative/hirevue', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/alternative/hackerrank', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/alternative/codility', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/alternative/mettl', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/alternative/testgorilla', priority: 0.7, changeFrequency: 'monthly' },

  // Hire / role pages (new)
  { path: '/hire', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/hire/backend-engineer', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/frontend-engineer', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/full-stack-developer', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/devops-engineer', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/data-engineer', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/data-scientist', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/machine-learning-engineer', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/product-manager', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/engineering-manager', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/hire/qa-engineer', priority: 0.6, changeFrequency: 'monthly' },

  // Resources
  { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/resources/blog', priority: 0.7, changeFrequency: 'daily' },
  { path: '/resources/whitepapers', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/resources/case-studies', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/resources/roi-calculator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources/question-bank', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/hiring-scorecard', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/bias-audit', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/sample-report', priority: 0.6, changeFrequency: 'monthly' },

  // Company & legal
  { path: '/company', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/legal/privacy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/legal/terms', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/legal/ai-ethics', priority: 0.4, changeFrequency: 'yearly' },
];

/* ── Sitemap export ─────────────────────────────────────── */

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const whitepaperEntries: MetadataRoute.Sitemap = whitepapers.map((paper) => ({
    url: `${siteConfig.url}/resources/whitepapers/${paper.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...whitepaperEntries];
}
