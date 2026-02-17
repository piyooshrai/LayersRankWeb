import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { PageHero, PageCTA } from '@/components/page-sections';
import { WhitepaperCards, type WhitepaperDef } from '@/components/whitepaper-cards';

export const metadata = makeMetadata({
  title: 'Whitepapers | Technical Research on Hiring Science | LayersRank',
  description:
    'Deep-dive research on confidence scoring, pedigree bias in Indian hiring, and structured interview methodology. Download free PDFs.',
  path: '/resources/whitepapers',
});

const papers: WhitepaperDef[] = [
  {
    category: 'science',
    categoryLabel: 'Science',
    status: 'Available',
    title: 'The Science Behind Confidence Scoring',
    subtitle: 'TR-q-ROFNs for Candidate Evaluation',
    description:
      'Traditional scoring hides uncertainty. This paper explains how Type-Reduced q-Rung Orthopair Fuzzy Numbers quantify evaluation confidence \u2014 and why it matters for hiring decisions. Includes mathematical foundations, worked examples, and validation methodology.',
    pages: 20,
    audience: 'Technical',
    format: 'PDF',
    slug: 'tr-q-rofns-hiring-whitepaper',
    secondaryLabel: 'View on SSRN',
    secondaryHref: '#',
  },
  {
    category: 'results',
    categoryLabel: 'Results',
    status: 'Available',
    title: 'Pedigree Bias in Indian Hiring',
    subtitle: 'The Hidden Cost of College-Based Filtering',
    description:
      'IIT/NIT filtering is default in Indian tech hiring. But what does it actually predict? This paper examines the evidence on pedigree-based hiring, presents LayersRank comparison data, and offers practical recommendations for reducing bias without lowering standards.',
    pages: 15,
    audience: 'HR & Leadership',
    format: 'PDF',
    slug: 'gcc-hiring-rigor-benchmark',
    secondaryLabel: null,
    secondaryHref: null,
  },
  {
    category: 'science',
    categoryLabel: 'Science',
    status: 'Available',
    title: 'Structured vs. Unstructured Interviews',
    subtitle: 'What Actually Predicts Job Performance',
    description:
      'Decades of research show structured interviews outperform unstructured interviews. This paper summarizes the evidence (including Schmidt & Hunter meta-analyses), explains how LayersRank implements structured principles at scale, and provides ROI analysis.',
    pages: 12,
    audience: 'General',
    format: 'PDF',
    slug: 'structured-interviews',
    secondaryLabel: null,
    secondaryHref: null,
  },
];

export default function WhitepapersPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources / Whitepapers"
        title="Research That Changes How You Hire"
        description="Technical deep-dives on the science behind structured hiring. Peer-reviewed methodology, practical applications, real data."
      />

      {/* ── WHITEPAPER CARDS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <WhitepaperCards papers={papers} />
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <PageCTA
        title="Want Custom Research?"
        description="We can analyze your specific hiring data and provide tailored recommendations. Talk to our team about custom research engagements."
        cta="Contact Research Team"
        ctaHref="/demo"
      />

      {/* ── INTERNAL LINKS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: '/science', label: 'The Science', desc: 'Our research foundation' },
              { href: '/resources/sample-report', label: 'Sample Report', desc: 'See a real candidate evaluation' },
              { href: '/blog', label: 'Blog', desc: 'Practical hiring insights' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-ink">{link.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
