export function TrustBar() {
  const companies = [
    'TechCorp GCC',
    'ScaleUp India',
    'GlobalHire',
    'Infosys BPM',
    'TalentFirst',
    'HireRight India',
  ];

  return (
    <section className="bg-ink/95 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-400">
          Trusted by hiring teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6 md:gap-x-12 md:gap-y-4">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-10 items-center rounded-md border border-gray-700 bg-gray-800/50 px-3 sm:px-5"
            >
              <span className="font-mono text-sm font-medium text-gray-400">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
