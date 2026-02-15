import { ReactNode } from 'react';

export function MdxProse({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-slate max-w-none prose-headings:text-navy prose-a:text-navy prose-code:font-mono">
      {children}
    </article>
  );
}
