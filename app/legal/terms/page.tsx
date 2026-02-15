import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({ title: 'Terms of Service | LayersRank', description: 'Terms governing use of LayersRank website and platform content.', path: '/legal/terms' });

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Terms of Service</h1>
      <p>All platform documentation and scoring methods are provided for evaluation. Production use requires a signed master services agreement.</p>
    </div>
  );
}
