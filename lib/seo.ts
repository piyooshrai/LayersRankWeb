import { Metadata } from 'next';
import { siteConfig } from './site';

export function makeMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  const ogImage = `${siteConfig.url}/images/OG Default.JPG`;
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    }
  };
}
