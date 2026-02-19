import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Company | LayersRank',
  description: 'About LayersRank and contact details for rigor audits and enterprise hiring transformations.',
  path: '/company'
});

export default function CompanyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Company</h1>
      <p>LayersRank builds explainable AI hiring infrastructure for high-volume engineering and GCC hiring programs. Team includes AI infrastructure architects, industrial-organizational researchers, and hiring operations specialists.</p>
      <h2 className="text-2xl font-semibold text-navy">Contact</h2>
      <p>Email: rigor@layersrank.com</p>
      <p>Serving teams across India with expansion support for KSA and UAE.</p>
    </div>
  );
}
