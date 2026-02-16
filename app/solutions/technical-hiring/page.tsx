import Link from 'next/link';
import { PageHero, PageCTA } from '@/components/page-sections';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata({
  title: 'Technical Hiring Platform | LayersRank',
  description:
    'Evaluate engineers on problem-solving, system design, and communication — not just coding tests. LayersRank provides a structured technical hiring assessment that goes beyond algorithm puzzles.',
  path: '/solutions/technical-hiring',
});

const roles = [
  'Software Engineer',
  'Frontend Engineer',
  'Backend Engineer',
  'Full Stack Engineer',
  'DevOps / SRE',
  'Data Engineer',
  'ML Engineer',
  'QA / SDET',
];

const comparisonRows = [
  {
    dimension: 'Assessment Format',
    codingOnly: 'Timed coding challenges',
    layersrank: 'Video, text, MCQ, and scenario-based evaluation',
  },
  {
    dimension: 'What Gets Measured',
    codingOnly: 'Algorithm speed and correctness',
    layersrank: 'Technical depth, problem-solving, communication, domain knowledge',
  },
  {
    dimension: 'System Design',
    codingOnly: 'Not assessed or bolted on',
    layersrank: 'First-class assessment dimension with structured rubrics',
  },
  {
    dimension: 'Communication Clarity',
    codingOnly: 'Not measured',
    layersrank: 'Evaluated via video responses and written explanations',
  },
  {
    dimension: 'Code Review',
    codingOnly: 'Not included',
    layersrank: 'Scenario-based code review evaluation available',
  },
  {
    dimension: 'Candidate Experience',
    codingOnly: 'Stressful timed environment',
    layersrank: 'Asynchronous, respectful of candidate time',
  },
  {
    dimension: 'Bias Controls',
    codingOnly: 'Limited — favors competitive programmers',
    layersrank: 'Pedigree-neutral, structured dimensions',
  },
];

export default function TechnicalHiringPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Technical Hiring"
        title="Technical Hiring Without the Guesswork"
        description="Evaluate engineers on what actually matters: problem-solving ability, system design thinking, domain knowledge, and communication clarity — not just how fast they can solve algorithm puzzles under pressure."
        primaryCta="Assess Technical Talent Properly"
        primaryCtaHref="/demo"
        secondaryCta="See the Science"
        secondaryCtaHref="/science"
      />

      {/* What We Assess — light bg */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">What We Assess</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Great engineers are more than their LeetCode scores. LayersRank evaluates the
            dimensions that predict real-world engineering performance.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Technical Depth',
                format: 'Video',
                description:
                  'Candidates explain technical concepts, architecture decisions, and trade-offs in their own words. Evaluators see how deeply they understand the technology, not just whether they can use it.',
              },
              {
                title: 'Problem-Solving Approach',
                format: 'Text',
                description:
                  'Written responses to open-ended technical problems reveal how candidates break down complexity, consider edge cases, and structure their thinking.',
              },
              {
                title: 'Domain Knowledge',
                format: 'MCQ',
                description:
                  'Targeted multiple-choice questions assess specific technical knowledge relevant to the role — frameworks, protocols, best practices, and tooling.',
              },
              {
                title: 'Communication Clarity',
                format: 'Video',
                description:
                  'How well a candidate explains technical ideas matters for code reviews, design discussions, and cross-team collaboration. We measure this explicitly.',
              },
              {
                title: 'Code Review Scenarios',
                format: 'Scenario',
                description:
                  'Candidates review real code snippets and provide feedback on quality, correctness, and maintainability. This tests a skill engineers use daily but rarely gets assessed in interviews.',
              },
            ].map((dim) => (
              <div key={dim.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-brand-yellow/10 px-3 py-1 font-mono text-xs font-semibold text-brand-yellow">
                    {dim.format}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink">{dim.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{dim.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Coverage — paper-off bg */}
      <section className="bg-paper-off py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-ink">Role Coverage</h2>
          <p className="mt-2 max-w-3xl text-ink-light">
            Pre-built assessment templates for the most in-demand engineering roles. Customize
            dimensions and questions to match your specific requirements.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {roles.map((role) => (
              <div
                key={role}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-brand-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-semibold text-ink">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs Coding-Only Platforms — dark bg */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold">More Than a Coding Test</h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Platforms like HackerRank and Codility measure one thing well: timed coding ability.
            But engineering hiring requires evaluating far more. Here is how LayersRank compares.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-600">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-600 bg-white/5">
                  <th className="px-6 py-4 text-left font-semibold text-gray-300">Dimension</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-400">
                    Coding-Only Platforms
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-yellow">
                    LayersRank
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.dimension} className="border-t border-gray-700">
                    <td className="px-6 py-4 font-medium text-white">{row.dimension}</td>
                    <td className="px-6 py-4 text-gray-400">{row.codingOnly}</td>
                    <td className="px-6 py-4 text-white">
                      <div className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {row.layersrank}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="Assess Technical Talent Properly"
        description="See how LayersRank evaluates the full spectrum of engineering ability. 20-minute demo."
        cta="Book a Demo"
        ctaHref="/demo"
        secondaryCta="See the Science"
        secondaryCtaHref="/science"
      />
    </>
  );
}
