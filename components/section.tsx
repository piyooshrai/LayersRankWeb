import { ReactNode } from 'react';

export function Section({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8">
      <h2 className="text-2xl font-semibold text-navy">{title}</h2>
      <div className="space-y-4 text-slate-700">{children}</div>
    </section>
  );
}
