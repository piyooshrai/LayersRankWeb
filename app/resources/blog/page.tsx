import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { makeMetadata } from '@/lib/seo';
import { TopicCluster } from '@/components/topic-cluster';

export const metadata = makeMetadata({
  title: 'Hiring Science Blog | LayersRank',
  description: 'Explainable hiring, structured scoring, GCC standards, and interview operations articles.',
  path: '/resources/blog'
});

const categoryOrder = ['Explainable Hiring', 'Structured Scoring', 'GCC Standards', 'Interview Operations'];

export default function BlogListingPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr,1fr]">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold text-navy">Blog</h1>
        {categoryOrder.map((category) => (
          <div key={category} className="space-y-3">
            <h2 className="text-xl font-semibold text-navy">{category}</h2>
            {blogPosts
              .filter((post) => post.category === category)
              .map((post) => (
                <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="block rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold text-navy">{post.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{post.description}</p>
                  <p className="mt-2 font-mono text-xs text-slate-500">{post.readingTime}</p>
                </Link>
              ))}
          </div>
        ))}
      </section>
      <TopicCluster
        title="Topic Cluster"
        items={blogPosts.map((post) => ({ href: `/resources/blog/${post.slug}`, label: post.title }))}
      />
    </div>
  );
}
