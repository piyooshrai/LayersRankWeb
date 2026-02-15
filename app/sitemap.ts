import type { MetadataRoute } from 'next';
import { blogPosts, whitepapers } from '@/lib/content';
import { siteConfig } from '@/lib/site';

const staticRoutes = ['','/product','/science','/solutions/gcc','/solutions/startups','/resources','/resources/blog','/resources/whitepapers','/pricing','/company','/legal/privacy','/legal/terms'];

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
