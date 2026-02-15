import Image from 'next/image';

export function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-2xl border border-slate-800/40">
      <Image src={src} alt={alt} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}
