import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MdxProse } from '@/components/mdx-prose';
import { blogPosts, getPost } from '@/lib/content';
import { makeMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { articleSchema } from '@/lib/schema';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return makeMetadata({ title: `${post.title} | LayersRank Blog`, description: post.description, path: `/resources/blog/${post.slug}` });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const PostBody = post.component;
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <JsonLd data={articleSchema({ title: post.title, description: post.description, slug: post.slug, datePublished: post.date })} />
      <h1 className="text-4xl font-semibold text-navy">{post.title}</h1>
      <p className="font-mono text-xs text-slate-500">{post.date} · {post.readingTime} · Author: AI Infrastructure Architect</p>
      <MdxProse>
        <PostBody />
      </MdxProse>
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm">
        <p>Continue reading:</p>
        <ul className="mt-2 list-disc pl-5">
          <li><Link href="/science" className="text-navy underline">Science deep dive on TR-q-ROFNs</Link></li>
          <li><Link href={post.relatedSolution} className="text-navy underline">Relevant solution page</Link></li>
        </ul>
      </div>
    </div>
  );
}
