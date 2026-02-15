import Link from 'next/link';

export function TopicCluster({ items, title = 'Topic Cluster' }: { items: { href: string; label: string }[]; title?: string }) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="font-mono text-xs uppercase tracking-wide text-slate-500">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-navy hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
