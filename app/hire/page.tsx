import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = makeMetadata({
  title: 'Hire Engineers & Technical Roles | AI Interview Assessment | LayersRank',
  description:
    'Role-specific AI interview frameworks for backend engineers, frontend developers, data scientists, DevOps, product managers, and more. Structured evaluation with explainable scoring.',
  path: '/hire',
});

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Hire by Role', url: '/hire' },
];

const roles = [
  {
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    description: 'System design, API architecture, database modeling, and distributed systems.',
    tags: ['Node.js', 'Java', 'Python', 'Databases', 'APIs'],
  },
  {
    slug: 'frontend-engineer',
    title: 'Frontend Engineer',
    description: 'React, UI architecture, performance optimization, and accessibility.',
    tags: ['React', 'TypeScript', 'CSS', 'Performance', 'Testing'],
  },
  {
    slug: 'full-stack-developer',
    title: 'Full-Stack Developer',
    description: 'End-to-end product ownership across frontend, backend, and deployment.',
    tags: ['React', 'Node.js', 'Databases', 'DevOps', 'APIs'],
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'CI/CD pipelines, infrastructure as code, cloud platforms, and SRE practices.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
  },
  {
    slug: 'data-engineer',
    title: 'Data Engineer',
    description: 'Data pipelines, warehouse architecture, ETL/ELT, and stream processing.',
    tags: ['Spark', 'Airflow', 'dbt', 'SQL', 'Kafka'],
  },
  {
    slug: 'data-scientist',
    title: 'Data Scientist',
    description: 'Statistical modeling, experimentation, feature engineering, and ML deployment.',
    tags: ['Python', 'Statistics', 'ML', 'SQL', 'Experimentation'],
  },
  {
    slug: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    description: 'ML system design, model training infrastructure, and production serving.',
    tags: ['PyTorch', 'MLOps', 'System Design', 'Python', 'Scalability'],
  },
  {
    slug: 'product-manager',
    title: 'Product Manager',
    description: 'Product strategy, prioritization frameworks, stakeholder management, and metrics.',
    tags: ['Strategy', 'Roadmapping', 'Analytics', 'Stakeholders', 'OKRs'],
  },
  {
    slug: 'engineering-manager',
    title: 'Engineering Manager',
    description: 'Team leadership, technical direction, delivery execution, and hiring.',
    tags: ['Leadership', 'Delivery', 'Architecture', 'Hiring', 'Culture'],
  },
  {
    slug: 'qa-engineer',
    title: 'QA Engineer',
    description: 'Test strategy, automation frameworks, quality culture, and defect management.',
    tags: ['Selenium', 'Cypress', 'Strategy', 'Automation', 'APIs'],
  },
];

export default function HireHubPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />

      {/* Breadcrumbs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <Breadcrumbs items={breadcrumbItems} withSchema={false} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-yellow">
            Hire by Role
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            AI-Structured Interviews for Every Technical Role
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            Role-specific question frameworks, competency rubrics, and adaptive follow-up
            questions — evaluated consistently by the same AI every time.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange"
            >
              Try Free &mdash; 5 Assessments
            </Link>
            <Link
              href="/resources/question-bank"
              className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400"
            >
              Free Question Bank
            </Link>
          </div>
        </div>
      </section>

      {/* Roles grid */}
      <section className="bg-paper-off py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-bold text-ink md:text-2xl">
            All Roles
          </h2>
          <p className="mt-2 text-sm text-ink-light">
            Each page includes role-specific competencies, sample interview questions, scoring rubrics, and evaluation guidance.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.slug}
                href={`/hire/${role.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-bold text-ink group-hover:text-brand-yellow">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-ink-light">{role.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-paper-off px-2 py-0.5 text-[11px] font-medium text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-yellow">
                  View framework
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-ink md:text-2xl">
            How role-specific assessment works
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Select the role',
                body: 'Choose from 50+ pre-built role frameworks or customize competencies for your specific seniority level.',
              },
              {
                step: '02',
                title: 'Candidates interview',
                body: 'Async structured interviews with adaptive follow-up questions. Same questions, same order, every time.',
              },
              {
                step: '03',
                title: 'Review scored reports',
                body: 'Confidence-weighted scores with evidence trails. Compare candidates side by side.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-gray-200 bg-paper-off p-5">
                <span className="font-mono text-xs font-bold text-brand-yellow">{item.step}</span>
                <h3 className="mt-2 text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Start evaluating candidates consistently
          </h2>
          <p className="mt-3 text-gray-300">
            5 free assessments. No credit card. No annual commitment.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-orange"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-400"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
