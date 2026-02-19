import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ExitIntentPopup } from '@/components/exit-intent-popup';
import { GoogleAnalytics } from '@/components/google-analytics';
import { JsonLd } from '@/components/json-ld';
import { organizationSchema, softwareApplicationSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareApplicationSchema} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
