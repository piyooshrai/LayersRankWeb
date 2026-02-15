import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} LayersRank. Confidence-weighted hiring infrastructure.</p>
        <div className="flex gap-4">
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
