import Link from 'next/link';
import StructuredData from './StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export interface BreadcrumbItem {
  name: string;
  /** Absolute path or full URL. Last item may omit (current page). */
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Whether to render the JSON-LD BreadcrumbList schema. Default true. */
  withSchema?: boolean;
  className?: string;
}

/**
 * Renders a breadcrumb navigation trail and optionally outputs the
 * BreadcrumbList JSON-LD schema for Google Rich Results.
 *
 * The last item is treated as the current page and rendered as plain
 * text, not a link.
 *
 * Usage:
 *   <Breadcrumbs items={[
 *     { name: 'Home', url: '/' },
 *     { name: 'Alternative', url: '/alternative' },
 *     { name: 'HireVue Alternative', url: '/alternative/hirevue' },
 *   ]} />
 */
export function Breadcrumbs({
  items,
  withSchema = true,
  className = '',
}: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <>
      {withSchema && <StructuredData data={generateBreadcrumbSchema(items)} />}

      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-xs text-ink-muted ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={item.url}
                className="flex items-center gap-1.5"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />

                {isLast ? (
                  <span
                    itemProp="name"
                    className="font-medium text-ink"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.url}
                      itemProp="item"
                      className="transition-colors hover:text-ink"
                    >
                      <span itemProp="name">{item.name}</span>
                    </Link>
                    {/* Separator */}
                    <svg
                      className="h-3 w-3 shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
