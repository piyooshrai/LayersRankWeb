import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({ title: 'Privacy Policy | LayersRank', description: 'Privacy policy for LayersRank website and hiring intelligence platform.', path: '/legal/privacy' });

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 px-6 py-16">
      <h1 className="text-4xl font-semibold text-navy">Privacy Policy</h1>
      <p>LayersRank processes data for hiring analytics under contractual controls. We collect minimal web analytics and contact form submissions for business communication.</p>
    </div>
  );
}
