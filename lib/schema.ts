import { siteConfig } from './site';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LayersRank',
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo-placeholder.svg`,
  sameAs: ['https://www.linkedin.com/company/layersrank'],
  description: siteConfig.description
};

export function articleSchema({
  title,
  description,
  slug,
  datePublished
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: {
      '@type': 'Person',
      name: 'AI Infrastructure Architect'
    },
    publisher: {
      '@type': 'Organization',
      name: 'LayersRank'
    },
    mainEntityOfPage: `${siteConfig.url}/resources/blog/${slug}`
  };
}

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LayersRank Hiring Intelligence Platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Confidence-weighted hiring platform using structured scoring and explainable ranking for enterprise and GCC hiring workflows.'
};
