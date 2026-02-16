export function ImagePlaceholder({
  label,
  aspect = '16/9',
  search,
}: {
  label: string;
  aspect?: string;
  search?: string;
}) {
  return (
    <div
      className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-paper-off"
      style={{ aspectRatio: aspect }}
    >
      <div className="px-6 text-center">
        <svg
          className="mx-auto h-10 w-10 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <p className="mt-2 text-sm font-medium text-gray-400">{label}</p>
        {search && (
          <p className="mt-1 text-xs text-gray-300">Unsplash: &ldquo;{search}&rdquo;</p>
        )}
      </div>
    </div>
  );
}
