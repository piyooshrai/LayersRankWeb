/**
 * Structured data (JSON-LD) generators for LayersRank.
 *
 * All schemas follow Schema.org v24+ conventions and are validated
 * against Google's Rich Results Test requirements.
 */

import { siteConfig } from './site';

/* ── Re-export existing schemas so callers have one import ── */

export {
  organizationSchema,
  softwareApplicationSchema,
  articleSchema,
} from './schema';

/* ── Organization (full, used in layout) ─────────────────── */

export const fullOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: 'LayersRank',
  alternateName: 'LayersRank by The Algorithm',
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/images/LayersRank By The Algorithm Logo Transparent.png`,
    width: 280,
    height: 72,
  },
  description:
    'Explainable AI hiring platform with confidence-weighted candidate ranking for GCCs, startups, and enterprise hiring teams.',
  email: 'info@the-algo.com',
  sameAs: [
    'https://www.linkedin.com/showcase/layersrank/',
    'https://www.the-algo.com',
  ],
  location: [
    {
      '@type': 'Place',
      name: 'Indore Office',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
      telephone: '+918962412726',
    },
    {
      '@type': 'Place',
      name: 'London Office',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      telephone: '+447477204642',
    },
    {
      '@type': 'Place',
      name: 'Denver Office',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Denver',
        addressRegion: 'CO',
        addressCountry: 'US',
      },
      telephone: '+17203347249',
    },
  ],
};

/* ── Website (homepage only) ─────────────────────────────── */

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: 'LayersRank',
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

/* ── Software application ────────────────────────────────── */

export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${siteConfig.url}/#software`,
  name: 'LayersRank',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'HumanResourcesApplication',
  operatingSystem: 'Web',
  url: siteConfig.url,
  description:
    'Confidence-weighted AI hiring platform. Structured interviews, explainable scoring, and bias-neutral candidate evaluation for engineering and technical roles.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: '5 free assessments. No credit card required.',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
};

/* ── FAQ ─────────────────────────────────────────────────── */

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/* ── Article ─────────────────────────────────────────────── */

export interface ArticleData {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
  section?: string;
}

export function generateArticleSchema(post: ArticleData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.url}/resources/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: {
      '@type': 'Person',
      name: post.authorName ?? 'LayersRank Team',
    },
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/resources/blog/${post.slug}`,
    },
    ...(post.imageUrl
      ? {
          image: {
            '@type': 'ImageObject',
            url: post.imageUrl,
          },
        }
      : {}),
    ...(post.section ? { articleSection: post.section } : {}),
  };
}

/* ── Breadcrumb ──────────────────────────────────────────── */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

/* ── WebPage ─────────────────────────────────────────────── */

export interface WebPageData {
  name: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function generateWebPageSchema(page: WebPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}${page.path}#webpage`,
    name: page.name,
    description: page.description,
    url: `${siteConfig.url}${page.path}`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    ...(page.breadcrumbs
      ? { breadcrumb: generateBreadcrumbSchema(page.breadcrumbs) }
      : {}),
  };
}

/* ── HowTo ───────────────────────────────────────────────── */

export interface HowToStep {
  name: string;
  text: string;
}

export function generateHowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/* ── Review / Aggregate Rating ───────────────────────────── */

export function generateAggregateRatingSchema({
  itemName,
  ratingValue,
  reviewCount,
}: {
  itemName: string;
  ratingValue: number;
  reviewCount: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
