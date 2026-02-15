import Link from 'next/link';
import { navLinks } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wide text-navy">
          LayersRank 2.0
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-navy">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
