import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { TopicCluster } from '@/components/topic-cluster';
import { JsonLd } from '@/components/json-ld';

export const metadata = makeMetadata({
  title: 'Science: TR-q-ROFNs and Confidence-Weighted Hiring | LayersRank',
  description:
    'Deep technical guide to fuzzy logic hiring with TR-q-ROFNs, uncertainty modeling, and explainable AI audit trails.',
  path: '/science'
});

const cluster = [
  { href: '/resources/blog/explainable-ai-hiring-auditability', label: 'Explainable AI Hiring: Auditability Before Automation' },
  { href: '/resources/blog/fuzzy-logic-recruitment-guide', label: 'Fuzzy Logic Recruitment: Confidence Bands' },
  { href: '/resources/blog/gcc-hiring-standards-india', label: 'GCC Hiring Standards in India' },
  { href: '/resources/blog/confidence-weighted-ranking', label: 'Confidence-Weighted Candidate Ranking' },
  { href: '/resources/blog/interview-operations-at-scale', label: 'Interview Operations at Scale' },
  { href: '/resources/blog/calibration-playbook', label: 'Interviewer Calibration Playbook' }
];

const faq = [
  {
    q: 'Why is linear 0–100 scoring unreliable for hiring?',
    a: 'Linear scores collapse uncertainty into a false precision number. Two candidates with the same score can have very different evidence quality and interviewer agreement.'
  },
  {
    q: 'What are TR-q-ROFNs in practical terms?',
    a: 'They represent support, opposition, and hesitation simultaneously, allowing rank models to preserve uncertainty instead of hiding it.'
  },
  {
    q: 'How does explainability work in LayersRank?',
    a: 'Every rank is tied to source events, feature transformations, interviewer identity, and weighting assumptions that can be audited step by step.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
};

export default function SciencePage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr,1fr]">
      <JsonLd data={faqSchema} />
      <article className="space-y-8">
        <h1 className="text-4xl font-semibold text-navy">Linear 0–100 scoring is a lie. It ignores uncertainty.</h1>
        <p className="text-lg text-slate-700">LayersRank uses TR-q-ROFNs (Type-Reduced q-Rung Orthopair Fuzzy Numbers) to represent hiring evidence under ambiguity, interviewer variance, and partial signal capture.</p>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-navy">1) Problem: linear scoring hides noise</h2>
          <p>Traditional systems compress multiple interview events into one scalar value. That erases calibration drift, sample sparsity, and conflicting evidence between coding tests, behavioral rounds, and references.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-navy">2) Uncertainty in hiring is measurable</h2>
          <p>Measurement noise appears when questions differ in depth. Interviewer variance appears when panels interpret the same answer differently. Partial evidence appears when candidates have asymmetric work histories or role transitions.</p>
          <p>Our model preserves these dimensions as first-class values.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-navy">3) TR-q-ROFN model in plain English + math</h2>
          <p>A candidate signal is represented as <span className="font-mono">(μ, ν, q)</span>, where μ is support, ν is opposition, and hesitation is inferred from <span className="font-mono">1 - μ^q - ν^q</span>.</p>
          <pre className="overflow-auto rounded bg-slate-900 p-4 text-sm text-slate-100">
{`Given evidence set E={e1...en}
Aggregate support μ* = TR(Σ wi · μi)
Aggregate opposition ν* = TR(Σ wi · νi)
Constraint: (μ*)^q + (ν*)^q ≤ 1
Confidence band C = [S - λπ, S + λπ] where π = (1 - (μ*)^q - (ν*)^q)^(1/q)`}
          </pre>
          <p>This yields a rank score with visible uncertainty, instead of fake certainty.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-navy">4) Confidence Band visualization</h2>
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="font-mono text-xs uppercase tracking-wide text-slate-500">Candidate A confidence band</p>
            <div className="mt-4 h-8 rounded bg-slate-200">
              <div className="h-8 w-3/4 rounded bg-confidence/70" />
            </div>
            <p className="mt-2 text-sm text-slate-700">Band width shrinks as evidence quality and interviewer calibration improve.</p>
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-navy">5) Explainable AI and audit trail</h2>
          <p>Every shortlist includes attributable feature paths: source event, evaluation rubric, model weighting, and counterfactual what-if checks. That makes decisions defendable for compliance and global HQ reviews.</p>
          <div className="flex gap-4 text-sm">
            <Link href="/solutions/gcc" className="text-navy underline">Explore GCC implementation</Link>
            <Link href="/solutions/startups" className="text-navy underline">Explore Startup implementation</Link>
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-navy">FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-medium text-navy">{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      </article>
      <TopicCluster items={cluster} />
    </div>
  );
}
