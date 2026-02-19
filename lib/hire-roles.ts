export interface EvalDimension {
  name: string;
  weight: string;
  areas: { name: string; bullets: string[] }[];
}

export interface SampleQuestion {
  question: string;
  reveals: string;
  type: 'technical' | 'behavioral';
}

export interface EvalCriteria {
  competency: string;
  great: string;
  redFlags: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface RelatedRole {
  label: string;
  href: string;
}

export interface HireRole {
  slug: string;
  meta: { title: string; description: string; keywords: string };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  challenge: { intro: string; mistakes: { title: string; text: string }[] };
  dimensions: EvalDimension[];
  questions: SampleQuestion[];
  criteria: EvalCriteria[];
  howItWorks: { step: string; detail: string }[];
  pricing: { plan: string; price: string; bestFor: string }[];
  faq: FAQ[];
  relatedRoles: RelatedRole[];
  relatedResources: { label: string; href: string }[];
}

export const hireRoles: HireRole[] = [
  /* ─── Backend Engineer ─────────────────────────────────── */
  {
    slug: 'backend-engineer',
    meta: {
      title: 'Hire Backend Engineers | Structured Assessment | LayersRank',
      description:
        'Evaluate backend engineer candidates on system design, API architecture, and debugging skills. Confidence-weighted scoring. Sample questions included.',
      keywords:
        'backend engineer interview questions, backend developer assessment, hire backend engineer, backend engineer evaluation',
    },
    hero: {
      eyebrow: 'HIRE BACKEND ENGINEERS',
      headline: 'Find Backend Engineers Who Can Actually Build Scalable Systems',
      subhead:
        'Evaluate system design thinking, API architecture decisions, and debugging approaches with structured assessments designed specifically for backend hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "Backend engineers are the foundation of your technical architecture. A great backend engineer builds systems that scale, perform, and remain maintainable. A poor one creates technical debt that compounds for years.\n\nThe problem: backend skills are hard to evaluate in traditional interviews. A candidate can discuss microservices fluently without ever having built one. They can whiteboard a system design without understanding the operational reality.",
      mistakes: [
        { title: 'Testing syntax, not judgment', text: "Fizzbuzz doesn't tell you if they can design an API." },
        { title: 'Focusing on current stack', text: 'Good engineers learn technologies. Great engineers make good decisions regardless of stack.' },
        { title: 'Ignoring debugging ability', text: 'Anyone can build greenfield. The job is often debugging, optimizing, and maintaining.' },
        { title: 'Skipping behavioral evaluation', text: 'Backend engineers work with frontend teams, product managers, and ops. Collaboration matters.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Dimension',
        weight: '45%',
        areas: [
          { name: 'System Design', bullets: ['Trade-off reasoning (consistency vs. availability, complexity vs. simplicity)', 'Scalability thinking (what breaks at 10x, 100x load?)', 'Data modeling decisions'] },
          { name: 'API Architecture', bullets: ['RESTful design principles', 'Error handling philosophy', 'Versioning and backward compatibility'] },
          { name: 'Debugging & Operations', bullets: ['Systematic troubleshooting approach', 'Production incident handling', 'Performance optimization thinking'] },
        ],
      },
      {
        name: 'Behavioral Dimension',
        weight: '35%',
        areas: [
          { name: 'Technical Communication', bullets: ['Explaining complex systems to non-technical stakeholders', 'Documentation practices', 'Code review philosophy'] },
          { name: 'Collaboration', bullets: ['Working with frontend teams on API contracts', 'Cross-functional coordination', 'Handling disagreements on technical approach'] },
          { name: 'Ownership', bullets: ['Taking responsibility for system reliability', 'Proactive problem identification', 'On-call and incident response attitude'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '20%',
        areas: [
          { name: 'Growth Trajectory', bullets: ['Learning approach for new technologies', 'Career goals alignment', 'Interest in the problem domain'] },
        ],
      },
    ],
    questions: [
      { question: 'Walk me through how you would design an API rate limiting system. What trade-offs would you consider?', reveals: 'System design thinking, awareness of distributed systems challenges, trade-off reasoning between precision and performance.', type: 'technical' },
      { question: "You're debugging a production issue where API response times have suddenly increased by 10x. Walk me through your approach.", reveals: 'Systematic debugging methodology, familiarity with observability tools, ability to stay calm under pressure.', type: 'technical' },
      { question: 'Describe a technical decision you made that you later regretted. What would you do differently?', reveals: 'Self-awareness, learning orientation, intellectual honesty about mistakes.', type: 'technical' },
      { question: 'Tell me about a time you disagreed with a frontend engineer about API design. How did you handle it?', reveals: 'Collaboration style, ability to advocate for technical positions while respecting other perspectives.', type: 'behavioral' },
      { question: "Describe a situation where you had to maintain a system you didn't build. What was challenging?", reveals: 'Attitude toward legacy code, documentation practices, empathy for future maintainers.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'System Design', great: 'Considers multiple approaches, articulates trade-offs clearly, thinks about failure modes', redFlags: 'Jumps to solution without analysis, ignores scale, no awareness of operational concerns' },
      { competency: 'Code Quality', great: 'Discusses maintainability, testing strategy, documentation', redFlags: 'Only talks about making it work, dismissive of code review' },
      { competency: 'Debugging', great: 'Systematic approach, uses data, isolates variables', redFlags: 'Random trial-and-error, blames external factors' },
      { competency: 'Collaboration', great: 'Seeks to understand other perspectives, communicates clearly', redFlags: 'Dismissive of frontend concerns, poor documentation attitude' },
      { competency: 'Ownership', great: 'Takes responsibility for reliability, proactive about issues', redFlags: '"Not my problem" attitude, avoids on-call' },
    ],
    howItWorks: [
      { step: 'Configure your backend assessment', detail: 'Use our template or customize for your stack' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (35-45 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 backend engineers' },
      { plan: 'Growth', price: '₹1,800', bestFor: 'Hiring 5-20 backend engineers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ backend engineers' },
    ],
    faq: [
      { q: 'How long does the backend assessment take candidates?', a: '35-45 minutes. Mix of video responses (system design, debugging scenarios) and written responses (technical explanations).' },
      { q: 'What if we use a specific tech stack?', a: 'The default assessment focuses on language-agnostic backend concepts. You can customize to include stack-specific questions.' },
      { q: 'How does this compare to HackerRank or Codility?', a: "Those test coding speed. LayersRank evaluates engineering judgment. Different signals \u2014 many teams use both." },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Full Stack Developer', href: '/hire/full-stack-developer' },
      { label: 'DevOps Engineer', href: '/hire/devops-engineer' },
      { label: 'Data Engineer', href: '/hire/data-engineer' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── Frontend Engineer ────────────────────────────────── */
  {
    slug: 'frontend-engineer',
    meta: {
      title: 'Hire Frontend Engineers | Structured Assessment | LayersRank',
      description:
        'Evaluate frontend engineer candidates on UI architecture, performance optimization, and design collaboration. Confidence-weighted scoring.',
      keywords:
        'frontend engineer interview questions, frontend developer assessment, hire frontend engineer, frontend engineer evaluation',
    },
    hero: {
      eyebrow: 'HIRE FRONTEND ENGINEERS',
      headline: 'Find Frontend Engineers Who Build Interfaces Users Love',
      subhead:
        'Evaluate UI architecture thinking, performance optimization instincts, and design collaboration skills with structured assessments built for frontend hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "Frontend engineers shape every user interaction with your product. A great frontend engineer builds interfaces that are fast, accessible, and delightful. A poor one creates fragile UIs that break across browsers and frustrate users.\n\nThe problem: frontend skills span a vast spectrum. A candidate can build pixel-perfect components but struggle with state management at scale. They can write clean CSS but fail to consider accessibility or performance.",
      mistakes: [
        { title: 'Testing CSS skills, not architecture', text: "Centering a div doesn't tell you if they can design a scalable component system." },
        { title: 'Ignoring performance instincts', text: 'Anyone can make it work. The question is whether it works fast.' },
        { title: 'Skipping design collaboration', text: 'Frontend engineers are the bridge between design and engineering. Communication matters.' },
        { title: 'Framework tunnel vision', text: 'React knowledge expires. Problem-solving ability compounds.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Dimension',
        weight: '40%',
        areas: [
          { name: 'UI Architecture', bullets: ['Component design and composition patterns', 'State management strategy', 'Rendering optimization'] },
          { name: 'Performance', bullets: ['Bundle size awareness', 'Core Web Vitals understanding', 'Loading strategy (lazy loading, code splitting)'] },
          { name: 'Fundamentals', bullets: ['HTML semantics and accessibility', 'CSS layout and responsive design', 'JavaScript fundamentals beyond frameworks'] },
        ],
      },
      {
        name: 'Behavioral Dimension',
        weight: '35%',
        areas: [
          { name: 'Design Collaboration', bullets: ['Translating designs to implementation', 'Pushing back on impractical designs constructively', 'Proposing UX improvements'] },
          { name: 'User Advocacy', bullets: ['Accessibility mindset', 'Performance as a user experience concern', 'Cross-browser/device thinking'] },
          { name: 'Technical Communication', bullets: ['Explaining trade-offs to designers and PMs', 'Code review quality', 'Documentation of component APIs'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '25%',
        areas: [
          { name: 'Growth Trajectory', bullets: ['Staying current with evolving frontend landscape', 'Interest in adjacent areas (design systems, performance)', 'Learning approach for new frameworks and tools'] },
        ],
      },
    ],
    questions: [
      { question: 'You need to build a complex multi-step form with validation, conditional fields, and auto-save. Walk me through your architecture decisions.', reveals: 'Component design thinking, state management approach, awareness of edge cases (network failures, browser back button).', type: 'technical' },
      { question: 'A page loads in 8 seconds on mobile. Walk me through how you would diagnose and fix the performance issues.', reveals: 'Performance debugging methodology, awareness of Core Web Vitals, understanding of network/rendering pipeline.', type: 'technical' },
      { question: 'When do you decide a component should be reusable vs. purpose-built? Give me an example of each decision.', reveals: 'Architectural judgment, awareness of premature abstraction, pragmatic thinking.', type: 'technical' },
      { question: 'Tell me about a time you disagreed with a designer about implementation. How did you handle it?', reveals: 'Collaboration style, ability to advocate for technical constraints while respecting design intent.', type: 'behavioral' },
      { question: 'Describe a situation where requirements were ambiguous. How did you move forward?', reveals: 'Comfort with uncertainty, proactive communication, product thinking.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'UI Architecture', great: 'Thinks in components, considers reusability vs. simplicity, understands rendering', redFlags: 'Monolithic components, no thought for state management, prop drilling everywhere' },
      { competency: 'Performance', great: 'Measures first, optimizes targeted areas, understands browser rendering pipeline', redFlags: 'Premature optimization or no optimization awareness at all' },
      { competency: 'Accessibility', great: 'Semantic HTML by default, keyboard navigation, screen reader testing', redFlags: 'Div soup, no ARIA awareness, dismissive of accessibility' },
      { competency: 'Collaboration', great: 'Bridges design and engineering, communicates trade-offs clearly', redFlags: 'Implements blindly or pushes back without alternatives' },
      { competency: 'Code Quality', great: 'Clean component APIs, meaningful tests, clear documentation', redFlags: 'Spaghetti code, no testing, unclear component boundaries' },
    ],
    howItWorks: [
      { step: 'Configure your frontend assessment', detail: 'Use our template or customize for your tech stack' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (35-45 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 frontend engineers' },
      { plan: 'Growth', price: '₹1,800', bestFor: 'Hiring 5-20 frontend engineers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ frontend engineers' },
    ],
    faq: [
      { q: 'How long does the frontend assessment take candidates?', a: '35-45 minutes. Mix of video responses (architecture discussions, debugging scenarios) and written responses.' },
      { q: 'Does it test React/Vue/Angular specifically?', a: 'The default assessment focuses on framework-agnostic frontend concepts. You can customize to include framework-specific questions.' },
      { q: 'How is this different from a take-home coding test?', a: 'Take-homes test execution. LayersRank evaluates judgment, communication, and problem-solving approach \u2014 the things that predict job performance.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Full Stack Developer', href: '/hire/full-stack-developer' },
      { label: 'Backend Engineer', href: '/hire/backend-engineer' },
      { label: 'Product Manager', href: '/hire/product-manager' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── Full Stack Developer ─────────────────────────────── */
  {
    slug: 'full-stack-developer',
    meta: {
      title: 'Hire Full Stack Developers | Structured Assessment | LayersRank',
      description:
        'Evaluate full stack developer candidates across frontend, backend, and integration skills. Confidence-weighted scoring for complete feature delivery.',
      keywords:
        'full stack developer interview questions, full stack assessment, hire full stack developer, full stack evaluation',
    },
    hero: {
      eyebrow: 'HIRE FULL STACK DEVELOPERS',
      headline: 'Find Full Stack Developers Who Ship Complete Features',
      subhead:
        'Evaluate end-to-end thinking, cross-stack proficiency, and product orientation with structured assessments designed for full stack hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "Full stack developers own features from database to UI. A great full stack developer ships complete, working features independently. A poor one creates half-finished work that requires constant handoffs.\n\nThe problem: \u201Cfull stack\u201D means different things everywhere. Some candidates are strong backend engineers who can copy-paste React. Others are frontend specialists who can write Express routes. Identifying true full stack capability requires evaluating both depth and breadth.",
      mistakes: [
        { title: 'Testing one side of the stack', text: 'A backend test + frontend test \u2260 full stack evaluation. Integration thinking is the skill.' },
        { title: 'Ignoring product orientation', text: 'Full stack developers need to think about user outcomes, not just code.' },
        { title: 'Overweighting depth over breadth', text: 'Full stack is about effective problem-solving across the stack, not expertise in every layer.' },
        { title: 'Skipping autonomy assessment', text: 'The value of full stack is independence. If they need constant direction, the role doesn\u2019t work.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Dimension',
        weight: '45%',
        areas: [
          { name: 'Backend Proficiency', bullets: ['API design and data modeling', 'Database query optimization', 'Authentication and security basics'] },
          { name: 'Frontend Proficiency', bullets: ['Component architecture', 'State management across views', 'Responsive and accessible UI'] },
          { name: 'Integration Thinking', bullets: ['End-to-end data flow', 'API contract design', 'Error handling across stack boundaries'] },
        ],
      },
      {
        name: 'Behavioral Dimension',
        weight: '35%',
        areas: [
          { name: 'Product Orientation', bullets: ['Understanding user needs', 'Making scope decisions independently', 'Balancing quality vs. speed'] },
          { name: 'Autonomy', bullets: ['Self-directed feature delivery', 'Handling ambiguity', 'Knowing when to ask for help vs. figure it out'] },
          { name: 'Communication', bullets: ['Explaining technical decisions to non-technical stakeholders', 'Writing clear technical specs', 'Cross-team collaboration'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '20%',
        areas: [
          { name: 'Growth Trajectory', bullets: ['Learning approach for new technologies on both sides of the stack', 'Career direction and interests', 'Comfort with technology selection decisions'] },
        ],
      },
    ],
    questions: [
      { question: 'You need to build a feature that lets users upload a CSV, process it, and display results in a dashboard. Walk me through how you would sequence the work.', reveals: 'End-to-end thinking, task decomposition, awareness of both frontend and backend concerns.', type: 'technical' },
      { question: 'A user reports that data on the dashboard doesn\u2019t match what they entered in the form. Walk me through how you debug this across the stack.', reveals: 'Cross-stack debugging methodology, understanding of data flow, systematic approach.', type: 'technical' },
      { question: 'When building a new feature, how do you decide what logic goes in the frontend vs. the backend?', reveals: 'Architectural judgment, understanding of security/performance implications, practical experience.', type: 'technical' },
      { question: 'Tell me about a time you had to learn a new technology quickly to deliver a feature. What was your approach?', reveals: 'Learning agility, pragmatism, ability to be effective without deep expertise.', type: 'behavioral' },
      { question: 'Describe a situation where product requirements were unclear. How did you decide what to build?', reveals: 'Product thinking, initiative, communication with stakeholders.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'Cross-Stack Thinking', great: 'Sees features as end-to-end flows, makes good stack boundary decisions', redFlags: 'Thinks in silos, ignores data flow across boundaries' },
      { competency: 'Code Quality', great: 'Consistent quality across frontend and backend, meaningful tests', redFlags: 'Clean on one side, messy on the other' },
      { competency: 'Autonomy', great: 'Delivers complete features independently, asks right questions early', redFlags: 'Needs constant guidance, delivers half-finished work' },
      { competency: 'Product Sense', great: 'Makes good scope decisions, considers user experience', redFlags: 'Builds exactly what\u2019s specified without thinking about users' },
      { competency: 'Learning', great: 'Quickly picks up new tools, comfortable with unfamiliar territory', redFlags: 'Only works with familiar tech, resistant to new approaches' },
    ],
    howItWorks: [
      { step: 'Configure your full stack assessment', detail: 'Use our template or customize for your stack' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (35-45 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 full stack developers' },
      { plan: 'Growth', price: '₹1,800', bestFor: 'Hiring 5-20 full stack developers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ full stack developers' },
    ],
    faq: [
      { q: 'How long does the full stack assessment take?', a: '35-45 minutes. Covers both frontend and backend scenarios plus behavioral questions.' },
      { q: 'How do you evaluate breadth vs. depth?', a: 'We assess practical problem-solving across the stack, not framework expertise. The assessment tests integration thinking and end-to-end delivery capability.' },
      { q: 'What if our full stack role is backend-heavy?', a: 'You can adjust dimension weights. Our default balances both, but you can emphasize backend or frontend.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Backend Engineer', href: '/hire/backend-engineer' },
      { label: 'Frontend Engineer', href: '/hire/frontend-engineer' },
      { label: 'DevOps Engineer', href: '/hire/devops-engineer' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── DevOps Engineer ──────────────────────────────────── */
  {
    slug: 'devops-engineer',
    meta: {
      title: 'Hire DevOps Engineers | Structured Assessment | LayersRank',
      description:
        'Evaluate DevOps engineer candidates on infrastructure design, CI/CD, and incident response. Confidence-weighted scoring for operational roles.',
      keywords:
        'devops engineer interview questions, devops assessment, hire devops engineer, devops evaluation, SRE assessment',
    },
    hero: {
      eyebrow: 'HIRE DEVOPS ENGINEERS',
      headline: 'Find DevOps Engineers Who Keep Systems Running',
      subhead:
        'Evaluate infrastructure thinking, automation instincts, and incident response capability with structured assessments for DevOps and SRE hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "DevOps engineers keep your systems running, your deployments safe, and your developers productive. A great DevOps engineer builds infrastructure that\u2019s reliable, observable, and self-healing. A poor one creates fragile pipelines that break at the worst times.\n\nThe problem: DevOps skills are notoriously hard to assess. The work is deeply contextual \u2014 what works for a 5-person startup is wrong for a 500-person enterprise. Traditional interviews test tool knowledge, not operational judgment.",
      mistakes: [
        { title: 'Testing tool knowledge, not thinking', text: 'Knowing Kubernetes commands isn\u2019t the same as knowing when to use Kubernetes.' },
        { title: 'Ignoring incident response', text: 'How someone handles a 3 AM outage matters more than how they configure Terraform.' },
        { title: 'Skipping collaboration assessment', text: 'DevOps is a bridge role. If they can\u2019t work with developers, the role fails.' },
        { title: 'Overweighting automation', text: 'Automating the wrong thing is worse than doing it manually.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Dimension',
        weight: '45%',
        areas: [
          { name: 'Infrastructure Design', bullets: ['Cloud architecture decisions', 'Scaling strategy (horizontal vs. vertical)', 'Cost optimization thinking'] },
          { name: 'CI/CD & Automation', bullets: ['Pipeline design philosophy', 'Deployment strategy (blue-green, canary, rolling)', 'Infrastructure as code approach'] },
          { name: 'Observability', bullets: ['Monitoring strategy', 'Alert design (signal vs. noise)', 'Log aggregation and analysis'] },
        ],
      },
      {
        name: 'Behavioral Dimension',
        weight: '35%',
        areas: [
          { name: 'Incident Response', bullets: ['Calm under pressure', 'Systematic root cause analysis', 'Post-mortem culture'] },
          { name: 'Collaboration', bullets: ['Working with development teams', 'Enabling developer productivity', 'Security team coordination'] },
          { name: 'Ownership', bullets: ['Proactive reliability improvements', 'Documentation of runbooks', 'Knowledge sharing'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '20%',
        areas: [
          { name: 'Security Awareness', bullets: ['Security-first infrastructure thinking', 'Compliance requirements understanding', 'Secret management practices'] },
        ],
      },
    ],
    questions: [
      { question: 'Design a CI/CD pipeline for a team of 20 developers shipping a microservices application. What stages would you include and why?', reveals: 'Pipeline design thinking, awareness of developer experience, testing strategy integration.', type: 'technical' },
      { question: 'Your monitoring shows a steady increase in memory usage on production servers over 2 weeks. Walk me through your investigation.', reveals: 'Systematic debugging approach, understanding of memory management, ability to correlate signals.', type: 'technical' },
      { question: 'How do you balance developer velocity with system stability? Give me a specific example.', reveals: 'Understanding of the core DevOps tension, pragmatic problem-solving, stakeholder management.', type: 'technical' },
      { question: 'Tell me about a production incident you handled. What went well and what would you do differently?', reveals: 'Incident response maturity, learning orientation, honesty about mistakes.', type: 'behavioral' },
      { question: 'Describe a time a developer asked you to do something you thought was risky. How did you handle it?', reveals: 'Ability to push back constructively, communication skills, risk assessment.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'Infrastructure Design', great: 'Considers cost, scale, and simplicity together; thinks about failure modes', redFlags: 'Over-engineers, ignores cost, no consideration of operational burden' },
      { competency: 'Automation', great: 'Automates for reliability and repeatability, not just convenience', redFlags: 'Automates everything without prioritization, no testing of automation' },
      { competency: 'Incident Response', great: 'Calm, systematic, documents and shares learnings', redFlags: 'Panics, blames others, no post-mortem culture' },
      { competency: 'Collaboration', great: 'Makes developers more productive, communicates clearly', redFlags: 'Gatekeeping, dismissive of developer needs' },
      { competency: 'Security', great: 'Security is integrated into design, not an afterthought', redFlags: 'Ignores security until audit time' },
    ],
    howItWorks: [
      { step: 'Configure your DevOps assessment', detail: 'Use our template or customize for your infrastructure' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (35-45 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 DevOps engineers' },
      { plan: 'Growth', price: '₹1,800', bestFor: 'Hiring 5-20 DevOps engineers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ DevOps engineers' },
    ],
    faq: [
      { q: 'How long does the DevOps assessment take?', a: '35-45 minutes. Covers infrastructure scenarios, incident response, and behavioral questions.' },
      { q: 'Does it test specific tools (Kubernetes, Terraform, AWS)?', a: 'The default assessment is tool-agnostic, focusing on infrastructure thinking. You can add tool-specific questions.' },
      { q: 'Can it assess SRE roles too?', a: 'Yes. The DevOps assessment covers SRE-relevant areas. You can adjust weights to emphasize reliability engineering.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Backend Engineer', href: '/hire/backend-engineer' },
      { label: 'Data Engineer', href: '/hire/data-engineer' },
      { label: 'Engineering Manager', href: '/hire/engineering-manager' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── Data Engineer ────────────────────────────────────── */
  {
    slug: 'data-engineer',
    meta: {
      title: 'Hire Data Engineers | Structured Assessment | LayersRank',
      description:
        'Evaluate data engineer candidates on pipeline architecture, data modeling, and data quality. Confidence-weighted scoring for data roles.',
      keywords:
        'data engineer interview questions, data engineer assessment, hire data engineer, data pipeline evaluation',
    },
    hero: {
      eyebrow: 'HIRE DATA ENGINEERS',
      headline: 'Find Data Engineers Who Build Pipelines That Scale',
      subhead:
        'Evaluate pipeline architecture thinking, data modeling decisions, and reliability mindset with structured assessments for data engineering hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "Data engineers build the infrastructure that makes data-driven decisions possible. A great data engineer builds pipelines that are reliable, scalable, and maintainable. A poor one creates data swamps that nobody trusts.\n\nThe problem: data engineering sits at the intersection of software engineering and data science. Traditional coding tests miss the data modeling and pipeline thinking. Data science interviews miss the engineering rigor.",
      mistakes: [
        { title: 'Testing SQL tricks, not data modeling', text: 'Complex queries don\u2019t tell you if they can design a data warehouse.' },
        { title: 'Ignoring reliability thinking', text: 'Pipelines that work 99% of the time are broken pipelines.' },
        { title: 'Skipping stakeholder communication', text: 'Data engineers serve analysts, scientists, and business teams. Communication matters.' },
        { title: 'Overweighting tool knowledge', text: 'Spark, Airflow, dbt are tools. Data modeling and pipeline design are skills.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Dimension',
        weight: '45%',
        areas: [
          { name: 'Pipeline Architecture', bullets: ['ETL/ELT design decisions', 'Batch vs. streaming trade-offs', 'Orchestration and scheduling strategy'] },
          { name: 'Data Modeling', bullets: ['Dimensional modeling (star, snowflake)', 'Schema design for analytical workloads', 'Handling slowly changing dimensions'] },
          { name: 'Data Quality', bullets: ['Data validation strategy', 'Testing data pipelines', 'Monitoring and alerting for data issues'] },
        ],
      },
      {
        name: 'Behavioral Dimension',
        weight: '35%',
        areas: [
          { name: 'Stakeholder Communication', bullets: ['Understanding analyst and scientist needs', 'Translating business requirements to data models', 'Managing expectations on data availability'] },
          { name: 'Reliability Mindset', bullets: ['Proactive monitoring', 'Incident response for data issues', 'Documentation of data lineage'] },
          { name: 'Collaboration', bullets: ['Working with data scientists on feature stores', 'Coordinating with backend teams on data contracts', 'Cross-team data governance'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '20%',
        areas: [
          { name: 'Domain Understanding', bullets: ['Interest in the business domain', 'Data privacy and compliance awareness', 'Cost optimization for data infrastructure'] },
        ],
      },
    ],
    questions: [
      { question: 'Design a data pipeline that ingests data from 5 different sources (2 APIs, 2 databases, 1 file upload) into a unified analytics layer. Walk me through your approach.', reveals: 'Pipeline architecture thinking, handling of heterogeneous sources, orchestration strategy.', type: 'technical' },
      { question: 'An analyst reports that yesterday\u2019s numbers don\u2019t match the source system. Walk me through how you investigate.', reveals: 'Data debugging methodology, data lineage awareness, systematic problem-solving.', type: 'technical' },
      { question: 'When would you choose batch processing over streaming? Give me a specific scenario for each.', reveals: 'Understanding of processing paradigms, practical trade-off reasoning, cost awareness.', type: 'technical' },
      { question: 'Tell me about a time an analyst or data scientist asked you to build something you thought was wrong. How did you handle it?', reveals: 'Stakeholder management, ability to push back constructively, communication skills.', type: 'behavioral' },
      { question: 'Describe a data quality issue you discovered and fixed. How did you prevent it from happening again?', reveals: 'Proactive quality mindset, systematic prevention thinking, documentation practices.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'Pipeline Design', great: 'Considers reliability, scalability, and maintainability; handles edge cases', redFlags: 'Happy-path only, no error handling, no consideration of data quality' },
      { competency: 'Data Modeling', great: 'Designs for the analytical use case, considers performance and flexibility', redFlags: 'Copy-paste from source systems, no dimensional modeling awareness' },
      { competency: 'Data Quality', great: 'Proactive validation, monitoring, and testing of data pipelines', redFlags: 'Assumes data is clean, no testing, reactive to issues' },
      { competency: 'Communication', great: 'Translates technical concepts for business users, manages expectations', redFlags: 'Builds in isolation, dismissive of analyst needs' },
      { competency: 'Reliability', great: 'Documents lineage, monitors pipelines, plans for failure', redFlags: 'No monitoring, no documentation, firefighting mode' },
    ],
    howItWorks: [
      { step: 'Configure your data engineering assessment', detail: 'Use our template or customize for your data stack' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (35-45 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 data engineers' },
      { plan: 'Growth', price: '₹1,800', bestFor: 'Hiring 5-20 data engineers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ data engineers' },
    ],
    faq: [
      { q: 'How long does the data engineering assessment take?', a: '35-45 minutes. Covers pipeline design, data modeling scenarios, and behavioral questions.' },
      { q: 'Does it test specific tools (Spark, Airflow, dbt)?', a: 'The default assessment is tool-agnostic. You can customize to include questions about your specific data stack.' },
      { q: 'Can it assess analytics engineers too?', a: 'Yes. Analytics engineering shares many competencies. Adjust weights to emphasize modeling and SQL proficiency.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Data Scientist', href: '/hire/data-scientist' },
      { label: 'Backend Engineer', href: '/hire/backend-engineer' },
      { label: 'DevOps Engineer', href: '/hire/devops-engineer' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── Data Scientist ───────────────────────────────────── */
  {
    slug: 'data-scientist',
    meta: {
      title: 'Hire Data Scientists | Structured Assessment | LayersRank',
      description:
        'Evaluate data scientist candidates on statistical foundations, ML intuition, and business impact. Confidence-weighted scoring for data science roles.',
      keywords:
        'data scientist interview questions, data science assessment, hire data scientist, data scientist evaluation',
    },
    hero: {
      eyebrow: 'HIRE DATA SCIENTISTS',
      headline: 'Find Data Scientists Who Deliver Business Impact',
      subhead:
        'Evaluate statistical thinking, ML intuition, and business translation skills with structured assessments designed for data science hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "Data scientists turn data into decisions. A great data scientist identifies the right problems, applies the right methods, and communicates findings that drive action. A poor one builds impressive models that never reach production.\n\nThe problem: data science interviews are either too theoretical or too practical. Whiteboard statistics questions don\u2019t predict job performance. Take-home Kaggle competitions don\u2019t test business judgment.",
      mistakes: [
        { title: 'Testing algorithm knowledge, not problem framing', text: 'Knowing XGBoost exists doesn\u2019t mean knowing when to use it.' },
        { title: 'Ignoring communication skills', text: 'A model that can\u2019t be explained to stakeholders won\u2019t be used.' },
        { title: 'Overweighting ML, underweighting statistics', text: 'Most data science problems are solved with good statistics, not deep learning.' },
        { title: 'Skipping business judgment', text: 'Choosing the right problem to solve matters more than solving it perfectly.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Dimension',
        weight: '40%',
        areas: [
          { name: 'Statistical Foundation', bullets: ['Experimental design and hypothesis testing', 'Understanding of distributions and sampling', 'Causal inference thinking'] },
          { name: 'ML Intuition', bullets: ['Model selection rationale', 'Feature engineering approach', 'Understanding of bias-variance trade-off'] },
          { name: 'Technical Execution', bullets: ['Data wrangling proficiency', 'Code quality and reproducibility', 'Visualization for communication'] },
        ],
      },
      {
        name: 'Behavioral Dimension',
        weight: '35%',
        areas: [
          { name: 'Business Translation', bullets: ['Framing business problems as data problems', 'Communicating results to non-technical stakeholders', 'Recommending actions, not just insights'] },
          { name: 'Collaboration', bullets: ['Working with engineers on productionization', 'Partnering with product teams on metrics', 'Cross-functional influence'] },
          { name: 'Intellectual Honesty', bullets: ['Acknowledging uncertainty in results', 'Reporting negative findings', 'Avoiding p-hacking and data dredging'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '25%',
        areas: [
          { name: 'Problem Selection', bullets: ['Identifying high-impact problems', 'Scoping work appropriately', 'Balancing quick wins with long-term projects'] },
        ],
      },
    ],
    questions: [
      { question: 'Your company wants to predict customer churn. Walk me through your approach from problem definition to model deployment.', reveals: 'End-to-end project thinking, problem framing, awareness of deployment challenges.', type: 'technical' },
      { question: 'Your model achieves 95% accuracy but stakeholders aren\u2019t satisfied. What might be wrong and how would you investigate?', reveals: 'Understanding of model evaluation beyond accuracy, business alignment, debugging approach.', type: 'technical' },
      { question: 'When would you choose a simple logistic regression over a complex ensemble model? Give me a specific scenario.', reveals: 'Model selection judgment, understanding of trade-offs, pragmatic thinking.', type: 'technical' },
      { question: 'Tell me about a time you disagreed with a business stakeholder about data analysis. How did you handle it?', reveals: 'Communication skills, ability to influence with data, stakeholder management.', type: 'behavioral' },
      { question: 'Describe a time you had to explain a complex analysis to a non-technical audience. How did you approach it?', reveals: 'Communication ability, empathy for audience, storytelling with data.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'Statistical Thinking', great: 'Thinks about assumptions, uncertainty, and causation carefully', redFlags: 'Jumps to ML without understanding the problem, no awareness of statistical assumptions' },
      { competency: 'ML Application', great: 'Chooses simple models first, escalates complexity only when justified', redFlags: 'Uses complex models by default, can\u2019t explain model choices' },
      { competency: 'Business Impact', great: 'Frames work in terms of business value, recommends actions', redFlags: 'Optimizes metrics without understanding business context' },
      { competency: 'Communication', great: 'Makes complex ideas accessible, uses effective visualizations', redFlags: 'Jargon-heavy explanations, can\u2019t simplify for non-technical audience' },
      { competency: 'Intellectual Honesty', great: 'Reports uncertainty, acknowledges limitations, shares negative results', redFlags: 'Cherry-picks results, overstates confidence, hides limitations' },
    ],
    howItWorks: [
      { step: 'Configure your data science assessment', detail: 'Use our template or customize for your domain' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (35-45 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 data scientists' },
      { plan: 'Growth', price: '₹1,800', bestFor: 'Hiring 5-20 data scientists' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ data scientists' },
    ],
    faq: [
      { q: 'How long does the data science assessment take?', a: '35-45 minutes. Covers statistical reasoning, ML scenarios, and behavioral questions.' },
      { q: 'Does it test coding (Python/R)?', a: 'The assessment focuses on reasoning and judgment, not coding syntax. You can add coding-specific questions if needed.' },
      { q: 'Can it distinguish junior from senior data scientists?', a: 'Yes. Senior candidates demonstrate deeper problem framing, stakeholder management, and technical leadership in their responses.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Data Engineer', href: '/hire/data-engineer' },
      { label: 'Machine Learning Engineer', href: '/hire/machine-learning-engineer' },
      { label: 'Product Manager', href: '/hire/product-manager' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── Product Manager ──────────────────────────────────── */
  {
    slug: 'product-manager',
    meta: {
      title: 'Hire Product Managers | Structured Assessment | LayersRank',
      description:
        'Evaluate product manager candidates on product sense, prioritization, and stakeholder management. Confidence-weighted scoring for PM roles.',
      keywords:
        'product manager interview questions, PM assessment, hire product manager, product manager evaluation',
    },
    hero: {
      eyebrow: 'HIRE PRODUCT MANAGERS',
      headline: 'Find Product Managers Who Ship What Matters',
      subhead:
        'Evaluate product sense, prioritization frameworks, and stakeholder management with structured assessments designed for PM hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "Product managers decide what gets built and why. A great PM ships the right things at the right time. A poor one ships features nobody asked for while the product stagnates.\n\nThe problem: PM interviews are famously inconsistent. Case studies test consulting skills, not product sense. \u201CDesign a product for X\u201D questions test creativity under pressure, not day-to-day PM judgment.",
      mistakes: [
        { title: 'Testing creativity, not judgment', text: '\u201CDesign an app for dogs\u201D doesn\u2019t predict PM performance.' },
        { title: 'Overweighting strategy, underweighting execution', text: 'Strategy is 10% of the job. Execution is 90%.' },
        { title: 'Ignoring stakeholder management', text: 'PMs spend most of their time aligning people, not writing PRDs.' },
        { title: 'Skipping metrics thinking', text: 'If they can\u2019t define success, they can\u2019t measure it.' },
      ],
    },
    dimensions: [
      {
        name: 'Strategic Dimension',
        weight: '35%',
        areas: [
          { name: 'Product Sense', bullets: ['Understanding user needs vs. wants', 'Market awareness and competitive positioning', 'Feature vs. platform thinking'] },
          { name: 'Prioritization', bullets: ['Framework for prioritization (RICE, ICE, etc.)', 'Saying no with rationale', 'Balancing customer requests vs. product vision'] },
          { name: 'Metrics & Measurement', bullets: ['Defining success metrics', 'Leading vs. lagging indicators', 'Data-informed vs. data-driven decision-making'] },
        ],
      },
      {
        name: 'Execution Dimension',
        weight: '35%',
        areas: [
          { name: 'Stakeholder Management', bullets: ['Managing up (executives)', 'Managing across (engineering, design, sales)', 'Managing expectations'] },
          { name: 'Delivery', bullets: ['Breaking big projects into shippable increments', 'Unblocking teams', 'Making progress visible'] },
          { name: 'Communication', bullets: ['Writing clear product specs', 'Presenting to leadership', 'Facilitating productive disagreements'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '30%',
        areas: [
          { name: 'Technical Acumen', bullets: ['Understanding technical constraints', 'Making informed build vs. buy decisions', 'Communicating with engineers effectively'] },
          { name: 'Customer Orientation', bullets: ['Customer research methodology', 'Empathy for user pain points', 'Translating feedback into requirements'] },
        ],
      },
    ],
    questions: [
      { question: 'You launched a new feature 3 months ago and usage is flat despite positive qualitative feedback. What do you do?', reveals: 'Analytical thinking, ability to reconcile contradictory signals, metrics-driven approach.', type: 'technical' },
      { question: 'You have a backlog of 20 feature requests from customers, sales, and engineering. Walk me through how you prioritize.', reveals: 'Prioritization framework, stakeholder balancing, strategic thinking.', type: 'technical' },
      { question: 'Describe a product decision where you changed your mind based on data. What changed and why?', reveals: 'Intellectual honesty, data orientation, ability to update beliefs.', type: 'technical' },
      { question: 'Tell me about a time an executive asked you to build a feature you disagreed with. How did you handle it?', reveals: 'Managing up, influencing without authority, picking battles.', type: 'behavioral' },
      { question: 'Describe a product launch that didn\u2019t go as planned. What happened and what did you learn?', reveals: 'Ownership, learning orientation, resilience.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'Product Sense', great: 'Deep empathy for users, balances business and user needs', redFlags: 'Feature factory mentality, no user empathy, only thinks about competitors' },
      { competency: 'Prioritization', great: 'Clear framework, says no with rationale, balances short and long term', redFlags: 'Says yes to everything, no framework, reactive to loudest voice' },
      { competency: 'Execution', great: 'Ships consistently, unblocks teams, manages scope', redFlags: 'Grand plans that never ship, doesn\u2019t follow through' },
      { competency: 'Communication', great: 'Clear writing, effective presentations, facilitates alignment', redFlags: 'Unclear specs, poor stakeholder communication, avoids conflict' },
      { competency: 'Metrics', great: 'Defines success upfront, measures outcomes, learns from data', redFlags: 'No success criteria, vanity metrics, ignores negative data' },
    ],
    howItWorks: [
      { step: 'Configure your PM assessment', detail: 'Use our template or customize for your product domain' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (40-50 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 product managers' },
      { plan: 'Growth', price: '₹2,000', bestFor: 'Hiring 5-20 product managers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ product managers' },
    ],
    faq: [
      { q: 'How long does the PM assessment take?', a: '40-50 minutes. Covers product sense, prioritization scenarios, and behavioral questions.' },
      { q: 'Is this for technical PMs only?', a: 'No. The assessment works for all PM types. Technical acumen is one dimension you can weight based on your needs.' },
      { q: 'How does this compare to a PM case study?', a: 'Case studies test consulting skills under pressure. LayersRank evaluates day-to-day PM judgment, communication, and decision-making quality.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Engineering Manager', href: '/hire/engineering-manager' },
      { label: 'Data Scientist', href: '/hire/data-scientist' },
      { label: 'Full Stack Developer', href: '/hire/full-stack-developer' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── Engineering Manager ──────────────────────────────── */
  {
    slug: 'engineering-manager',
    meta: {
      title: 'Hire Engineering Managers | Structured Assessment | LayersRank',
      description:
        'Evaluate engineering manager candidates on technical leadership, people management, and delivery. Confidence-weighted scoring for EM roles.',
      keywords:
        'engineering manager interview questions, EM assessment, hire engineering manager, engineering manager evaluation',
    },
    hero: {
      eyebrow: 'HIRE ENGINEERING MANAGERS',
      headline: 'Find Engineering Managers Who Grow Teams and Ship Products',
      subhead:
        'Evaluate technical leadership, people management, and delivery capability with structured assessments designed for engineering management hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "Engineering managers make or break engineering teams. A great EM grows their people, ships consistently, and maintains technical credibility. A poor one creates dysfunction that causes your best engineers to leave.\n\nThe problem: engineering management interviews often test for the wrong things. Asking system design questions tests whether they can still code, not whether they can lead. Behavioral questions without structure produce inconsistent signals.",
      mistakes: [
        { title: 'Testing coding, not leading', text: 'EMs should be technically credible, not the best coder on the team.' },
        { title: 'Ignoring people management depth', text: 'Anyone can say the right things about 1:1s. Ask about difficult conversations.' },
        { title: 'Overweighting process knowledge', text: 'Knowing Agile ceremonies is not the same as knowing how to run a productive team.' },
        { title: 'Skipping delivery assessment', text: 'EMs are accountable for output. Technical leadership without delivery is incomplete.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Leadership',
        weight: '30%',
        areas: [
          { name: 'Technical Credibility', bullets: ['Ability to evaluate technical proposals', 'Understanding of architecture trade-offs', 'Staying current without micromanaging'] },
          { name: 'Technical Strategy', bullets: ['Technical debt management', 'Build vs. buy decisions', 'Platform and tooling investments'] },
        ],
      },
      {
        name: 'People Management',
        weight: '40%',
        areas: [
          { name: 'Team Development', bullets: ['Coaching and mentoring approach', 'Giving constructive feedback', 'Performance management'] },
          { name: 'Team Health', bullets: ['Creating psychological safety', 'Managing conflict', 'Fostering inclusivity'] },
          { name: 'Hiring & Retention', bullets: ['Attracting talent', 'Onboarding effectiveness', 'Retention strategies'] },
        ],
      },
      {
        name: 'Delivery',
        weight: '30%',
        areas: [
          { name: 'Execution', bullets: ['Planning and estimation', 'Risk management', 'Removing blockers'] },
          { name: 'Process', bullets: ['Right-sized process for team maturity', 'Continuous improvement', 'Cross-team coordination'] },
        ],
      },
    ],
    questions: [
      { question: 'How do you stay technically current as a manager? Give me a specific example of how your technical knowledge helped your team recently.', reveals: 'Technical credibility approach, ability to add value without micromanaging.', type: 'technical' },
      { question: 'Your team made a technical decision you disagree with. How do you handle it?', reveals: 'Delegation style, trust vs. control balance, coaching approach.', type: 'technical' },
      { question: 'Tell me about a difficult performance conversation you had. What was the situation and how did you handle it?', reveals: 'Willingness to have hard conversations, feedback delivery skills, empathy.', type: 'behavioral' },
      { question: 'How do you approach career development for your team members? Give me a specific example.', reveals: 'Investment in people growth, individualized approach, long-term thinking.', type: 'behavioral' },
      { question: 'Your team is behind on a deadline that leadership is counting on. What do you do?', reveals: 'Communication under pressure, scope management, stakeholder management.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'Technical Leadership', great: 'Guides without micromanaging, makes good technical investments', redFlags: 'Still wants to be the best coder, or completely disengaged from tech' },
      { competency: 'People Development', great: 'Individualizes growth plans, gives regular feedback, has promoted people', redFlags: 'Treats everyone the same, avoids feedback, no development track record' },
      { competency: 'Difficult Conversations', great: 'Addresses issues directly and kindly, documents and follows up', redFlags: 'Avoids conflict, surprises people at review time' },
      { competency: 'Delivery', great: 'Ships consistently, manages scope, communicates status clearly', redFlags: 'Grand promises, missed deadlines, blames team' },
      { competency: 'Hiring', great: 'Strong hiring track record, structured interview approach', redFlags: 'Gut-feel hiring, no structured process' },
    ],
    howItWorks: [
      { step: 'Configure your EM assessment', detail: 'Use our template or customize for your management philosophy' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (40-50 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 engineering managers' },
      { plan: 'Growth', price: '₹2,000', bestFor: 'Hiring 5-20 engineering managers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ engineering managers' },
    ],
    faq: [
      { q: 'How long does the EM assessment take?', a: '40-50 minutes. Covers technical leadership, people management scenarios, and delivery questions.' },
      { q: 'Does it assess both people management and technical skills?', a: 'Yes. Both are critical for engineering management. You can adjust the weighting based on the seniority level.' },
      { q: 'Can it distinguish frontline managers from directors?', a: 'Yes. Senior candidates demonstrate strategic thinking, org design awareness, and cross-team leadership in their responses.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Backend Engineer', href: '/hire/backend-engineer' },
      { label: 'Product Manager', href: '/hire/product-manager' },
      { label: 'DevOps Engineer', href: '/hire/devops-engineer' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── QA Engineer ──────────────────────────────────────── */
  {
    slug: 'qa-engineer',
    meta: {
      title: 'Hire QA Engineers | Structured Assessment | LayersRank',
      description:
        'Evaluate QA engineer candidates on test automation, testing strategy, and quality advocacy. Confidence-weighted scoring for QA roles.',
      keywords:
        'QA engineer interview questions, QA assessment, hire QA engineer, quality assurance evaluation, SDET assessment',
    },
    hero: {
      eyebrow: 'HIRE QA ENGINEERS',
      headline: 'Find QA Engineers Who Prevent Bugs, Not Just Find Them',
      subhead:
        'Evaluate testing strategy, automation skills, and quality advocacy with structured assessments designed for QA and SDET hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "QA engineers are your quality gate. A great QA engineer prevents bugs from reaching production by building the right testing strategy. A poor one finds bugs after the fact and creates an adversarial relationship with developers.\n\nThe problem: QA interviews often test manual testing scenarios or automation tool knowledge. Neither predicts whether someone can design a testing strategy that actually improves quality.",
      mistakes: [
        { title: 'Testing tool knowledge, not strategy', text: 'Knowing Selenium doesn\u2019t mean knowing what to test.' },
        { title: 'Ignoring collaboration skills', text: 'QA engineers who can\u2019t work with developers create friction, not quality.' },
        { title: 'Overweighting bug-finding', text: 'The best QA engineers prevent bugs. Bug-finding is a trailing indicator.' },
        { title: 'Skipping process thinking', text: 'Quality is a process, not an activity. Testing strategy matters more than test execution.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Dimension',
        weight: '40%',
        areas: [
          { name: 'Test Automation', bullets: ['Automation framework design', 'Test pyramid understanding', 'CI/CD integration'] },
          { name: 'Testing Strategy', bullets: ['Risk-based testing approach', 'Test coverage analysis', 'Exploratory testing methodology'] },
          { name: 'Technical Depth', bullets: ['API testing', 'Performance testing awareness', 'Security testing basics'] },
        ],
      },
      {
        name: 'Behavioral Dimension',
        weight: '35%',
        areas: [
          { name: 'Quality Advocacy', bullets: ['Shifting quality left', 'Influencing development practices', 'Building quality culture'] },
          { name: 'Collaboration', bullets: ['Working with developers on testability', 'Cross-functional communication', 'Managing release readiness'] },
          { name: 'Problem-Solving', bullets: ['Root cause analysis', 'Reproducing intermittent issues', 'Debugging complex scenarios'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '25%',
        areas: [
          { name: 'Process Orientation', bullets: ['Testing in agile workflows', 'Continuous testing mindset', 'Metrics-driven quality improvement'] },
        ],
      },
    ],
    questions: [
      { question: 'You\u2019re joining a team that has no automated tests. Design a testing strategy for a new feature they\u2019re about to ship.', reveals: 'Testing strategy thinking, prioritization of test types, pragmatic approach to test coverage.', type: 'technical' },
      { question: 'You have 2 days before a major release and the test suite takes 8 hours to run. How do you prioritize what to test?', reveals: 'Risk-based testing thinking, prioritization under pressure, understanding of test pyramid.', type: 'technical' },
      { question: 'Walk me through how you would automate a test suite for a REST API with 50 endpoints.', reveals: 'Automation strategy, framework thinking, understanding of API testing patterns.', type: 'technical' },
      { question: 'Tell me about a time you found a critical bug close to release. How did you communicate it?', reveals: 'Communication under pressure, risk assessment, stakeholder management.', type: 'behavioral' },
      { question: 'Describe a disagreement with a developer about whether something was a bug. How did you resolve it?', reveals: 'Collaboration skills, ability to advocate for quality without creating conflict.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'Testing Strategy', great: 'Risk-based approach, appropriate test pyramid, pragmatic coverage', redFlags: 'Tests everything equally, no prioritization, only manual testing' },
      { competency: 'Automation', great: 'Maintainable frameworks, integrated with CI/CD, focused on value', redFlags: 'Brittle tests, automating for the sake of it, no CI integration' },
      { competency: 'Quality Advocacy', great: 'Shifts left, influences development practices, builds quality culture', redFlags: 'Gatekeeper mentality, adversarial with developers' },
      { competency: 'Communication', great: 'Clear bug reports, risk communication, release readiness assessment', redFlags: 'Unclear reports, doesn\u2019t communicate risk, blocks releases without rationale' },
      { competency: 'Problem-Solving', great: 'Systematic root cause analysis, reproduces complex issues', redFlags: 'Surface-level bug reporting, can\u2019t reproduce intermittent issues' },
    ],
    howItWorks: [
      { step: 'Configure your QA assessment', detail: 'Use our template or customize for your testing needs' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (35-45 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 QA engineers' },
      { plan: 'Growth', price: '₹1,800', bestFor: 'Hiring 5-20 QA engineers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ QA engineers' },
    ],
    faq: [
      { q: 'How long does the QA assessment take?', a: '35-45 minutes. Covers testing strategy, automation scenarios, and behavioral questions.' },
      { q: 'Does it assess manual and automation testing?', a: 'Yes. Both are important. You can adjust weights based on whether you need a manual QA, SDET, or hybrid role.' },
      { q: 'Can it assess SDET roles specifically?', a: 'Yes. Increase the weight on automation and technical depth dimensions for SDET hiring.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Backend Engineer', href: '/hire/backend-engineer' },
      { label: 'DevOps Engineer', href: '/hire/devops-engineer' },
      { label: 'Full Stack Developer', href: '/hire/full-stack-developer' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── Machine Learning Engineer ────────────────────────── */
  {
    slug: 'machine-learning-engineer',
    meta: {
      title: 'Hire ML Engineers | Structured Assessment | LayersRank',
      description:
        'Evaluate ML engineer candidates on ML fundamentals, software engineering, and MLOps. Confidence-weighted scoring for ML engineering roles.',
      keywords:
        'ML engineer interview questions, machine learning engineer assessment, hire ML engineer, MLOps evaluation',
    },
    hero: {
      eyebrow: 'HIRE ML ENGINEERS',
      headline: 'Find ML Engineers Who Ship Models to Production',
      subhead:
        'Evaluate ML fundamentals, software engineering rigor, and production ML thinking with structured assessments for ML engineering hiring.',
      primaryCta: 'Start Free Assessment',
      secondaryCta: 'Download Question Bank',
    },
    challenge: {
      intro:
        "ML engineers bridge the gap between data science and production systems. A great ML engineer takes models from notebook to production, reliable and monitored. A poor one creates ML systems that work in demos but fail in production.\n\nThe problem: ML engineering requires a rare combination of ML knowledge, software engineering skill, and operational thinking. Most interviews test only one of these dimensions.",
      mistakes: [
        { title: 'Testing ML theory, not engineering', text: 'Knowing the math behind transformers doesn\u2019t mean they can deploy one.' },
        { title: 'Ignoring software engineering skills', text: 'ML in production is software engineering. Code quality, testing, and reliability matter.' },
        { title: 'Skipping MLOps thinking', text: 'Model monitoring, retraining, and versioning are where ML projects succeed or fail.' },
        { title: 'Overweighting research, underweighting pragmatism', text: 'The best ML engineers ship working models, not perfect models.' },
      ],
    },
    dimensions: [
      {
        name: 'Technical Dimension',
        weight: '45%',
        areas: [
          { name: 'ML Fundamentals', bullets: ['Model selection and evaluation', 'Feature engineering approach', 'Understanding of common pitfalls (data leakage, overfitting)'] },
          { name: 'Software Engineering', bullets: ['Code quality and testing for ML code', 'API design for model serving', 'Data pipeline integration'] },
          { name: 'MLOps', bullets: ['Model monitoring and drift detection', 'Experiment tracking and versioning', 'CI/CD for ML systems'] },
        ],
      },
      {
        name: 'Behavioral Dimension',
        weight: '35%',
        areas: [
          { name: 'Collaboration', bullets: ['Working with data scientists on model handoff', 'Coordinating with backend teams on integration', 'Cross-functional communication'] },
          { name: 'Problem-Solving', bullets: ['Debugging production ML issues', 'Performance optimization', 'Handling data quality problems'] },
          { name: 'Ownership', bullets: ['End-to-end ownership of ML systems', 'Reliability mindset', 'Documentation and knowledge sharing'] },
        ],
      },
      {
        name: 'Contextual Dimension',
        weight: '20%',
        areas: [
          { name: 'Production Thinking', bullets: ['Scalability considerations', 'Cost optimization for ML workloads', 'Understanding of serving latency requirements'] },
        ],
      },
    ],
    questions: [
      { question: 'A data scientist hands you a Jupyter notebook with a trained model. Walk me through the steps to get this into production.', reveals: 'Understanding of the ML production pipeline, engineering rigor, awareness of operational concerns.', type: 'technical' },
      { question: 'Your production model\u2019s performance has degraded over 3 months. How do you diagnose and fix the issue?', reveals: 'Understanding of model drift, monitoring approach, systematic debugging.', type: 'technical' },
      { question: 'When would you choose batch prediction vs. real-time API serving? Give me specific scenarios for each.', reveals: 'Understanding of serving patterns, cost/latency trade-offs, practical experience.', type: 'technical' },
      { question: 'Tell me about a time you pushed back on deploying a model that wasn\u2019t production-ready. What were the issues?', reveals: 'Quality standards, ability to communicate risk, pragmatic judgment.', type: 'behavioral' },
      { question: 'Describe a production ML issue you debugged. How did you identify and fix the root cause?', reveals: 'Production debugging skills, systematic approach, learning from incidents.', type: 'behavioral' },
    ],
    criteria: [
      { competency: 'ML Engineering', great: 'Bridges research and production, writes production-quality ML code', redFlags: 'Only works in notebooks, no understanding of production requirements' },
      { competency: 'Software Engineering', great: 'Tests ML code, writes clean APIs, manages dependencies', redFlags: 'Spaghetti code, no testing, script-based deployment' },
      { competency: 'MLOps', great: 'Monitors models in production, automates retraining, tracks experiments', redFlags: 'Deploy and forget, no monitoring, manual processes' },
      { competency: 'Problem-Solving', great: 'Systematically debugs production issues, understands data quality impact', redFlags: 'Can\u2019t debug beyond model accuracy, ignores operational issues' },
      { competency: 'Collaboration', great: 'Effective handoff with data scientists and backend engineers', redFlags: 'Works in isolation, poor documentation, throws models over the wall' },
    ],
    howItWorks: [
      { step: 'Configure your ML engineering assessment', detail: 'Use our template or customize for your ML stack' },
      { step: 'Invite candidates', detail: 'They complete the assessment async (35-45 min)' },
      { step: 'Review reports', detail: 'See scores with confidence intervals across all dimensions' },
      { step: 'Make better decisions', detail: 'Know exactly where to probe in final rounds' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹2,500', bestFor: 'Hiring 1-5 ML engineers' },
      { plan: 'Growth', price: '₹1,800', bestFor: 'Hiring 5-20 ML engineers' },
      { plan: 'Enterprise', price: 'Custom', bestFor: 'Hiring 20+ ML engineers' },
    ],
    faq: [
      { q: 'How long does the ML engineering assessment take?', a: '35-45 minutes. Covers ML fundamentals, production engineering, and behavioral questions.' },
      { q: 'How is this different from a data science assessment?', a: 'Data science assessments focus on statistical thinking and business translation. ML engineering assessments emphasize production systems, software engineering, and MLOps.' },
      { q: 'Does it test specific ML frameworks (PyTorch, TensorFlow)?', a: 'The default assessment is framework-agnostic. You can add framework-specific questions if needed.' },
      { q: 'Can we see the questions before inviting candidates?', a: 'Yes. Full preview available after signup.' },
    ],
    relatedRoles: [
      { label: 'Data Scientist', href: '/hire/data-scientist' },
      { label: 'Data Engineer', href: '/hire/data-engineer' },
      { label: 'Backend Engineer', href: '/hire/backend-engineer' },
    ],
    relatedResources: [
      { label: '50 Behavioral Interview Questions', href: '/resources/question-bank' },
      { label: 'Hiring Scorecard Template', href: '/resources/hiring-scorecard' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },
];

export function getHireRole(slug: string): HireRole | undefined {
  return hireRoles.find((r) => r.slug === slug);
}

export function getAllHireRoleSlugs(): string[] {
  return hireRoles.map((r) => r.slug);
}
