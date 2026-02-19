/**
 * StructuredData — renders a JSON-LD script tag.
 *
 * Mirrors the existing <JsonLd /> component but uses the interface
 * specified in the SEO infrastructure spec so callers can use either.
 *
 * Usage:
 *   import StructuredData from '@/components/StructuredData';
 *   <StructuredData data={generateFAQSchema(faqs)} />
 */
export default function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
