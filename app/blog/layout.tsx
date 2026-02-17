import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Blog | Hiring Insights for Engineering Leaders | LayersRank',
  description:
    'Practical insights on structured hiring, reducing interview bias, scaling engineering teams, and making data-driven hiring decisions.',
  path: '/blog',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
