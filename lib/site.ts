export const siteConfig = {
  name: 'LayersRank',
  description:
    'Explainable AI hiring platform with confidence-weighted candidate ranking for GCCs, startups, and enterprise hiring teams.',
  url: 'https://www.layersrank.com',
};

export interface NavItem {
  href: string;
  label: string;
  description?: string;
  featured?: boolean;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export interface NavDropdown {
  label: string;
  href?: string;
  groups?: NavGroup[];
  items?: NavItem[];
}

export const navDropdowns: NavDropdown[] = [
  {
    label: 'Product',
    items: [
      { href: '/product', label: 'Overview', description: 'How LayersRank works end-to-end' },
      { href: '/product#structured-interviews', label: 'Structured Interviews', description: 'Role-specific question frameworks' },
      { href: '/product#confidence-scoring', label: 'Confidence Scoring', description: 'Score + confidence for every dimension' },
      { href: '/product#adaptive-followup', label: 'Adaptive Follow-Up', description: 'Uncertainty triggers clarifying questions', featured: true },
      { href: '/product#integrity', label: 'Integrity Detection', description: 'Flag inconsistencies automatically' },
      { href: '/product#reports', label: 'Reports', description: 'Audit-ready candidate dossiers' },
      { href: '/product#question-bank', label: 'Question Bank', description: '1,000+ vetted role-specific questions' },
      { href: '/product#integrations', label: 'Integrations', description: 'Connect with your ATS and HRIS' },
    ],
  },
  {
    label: 'Solutions',
    groups: [
      {
        label: 'By Company',
        items: [
          { href: '/solutions/gcc', label: 'GCC', description: 'Global capability centers' },
          { href: '/solutions/startups', label: 'Startups', description: 'High-growth teams' },
          { href: '/solutions/gcc', label: 'Enterprise', description: 'Large-scale hiring' },
          { href: '/solutions/gcc', label: 'Agencies', description: 'Staffing partners' },
        ],
      },
      {
        label: 'By Use Case',
        items: [
          { href: '/solutions/gcc', label: 'Technical Hiring', description: 'Engineers & developers' },
          { href: '/solutions/startups', label: 'Campus Hiring', description: 'Graduate recruitment' },
          { href: '/solutions/gcc', label: 'Leadership Hiring', description: 'Director+ roles' },
          { href: '/solutions/startups', label: 'Lateral Hiring', description: 'Mid-career moves' },
        ],
      },
    ],
  },
  {
    label: 'Science',
    items: [
      { href: '/science', label: 'The Science', description: 'Our research foundation' },
      { href: '/science#fuzzy-logic', label: 'Fuzzy Logic Framework', description: 'How uncertainty is quantified' },
      { href: '/science#explainable-ai', label: 'Explainable AI', description: 'Every score has an evidence trail' },
      { href: '/science#bias-mitigation', label: 'Bias Mitigation', description: 'Pedigree-neutral evaluation' },
    ],
  },
  {
    label: 'Compare',
    items: [
      { href: '/compare/hirevue', label: 'vs HireVue', description: 'Video interview comparison' },
      { href: '/compare/hirevue', label: 'vs HackerRank', description: 'Coding assessment comparison' },
      { href: '/compare/hirevue', label: 'vs Codility', description: 'Technical screening comparison' },
      { href: '/compare/hirevue', label: 'vs Phone Screens', description: 'Replace manual screening' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: '/resources/blog', label: 'Blog', description: 'Insights on hiring operations' },
      { href: '/resources/whitepapers', label: 'Whitepapers', description: 'Technical deep-dives' },
      { href: '/resources', label: 'Case Studies', description: 'Customer success stories' },
      { href: '/resources', label: 'Webinars', description: 'On-demand sessions' },
      { href: '/pricing', label: 'ROI Calculator', description: 'Estimate your savings' },
      { href: '/resources', label: 'Sample Report', description: 'See a real candidate report', featured: true },
      { href: '/resources', label: 'Question Library', description: 'Browse our question bank' },
      { href: '/resources', label: 'API Docs', description: 'Integration documentation' },
    ],
  },
];

export const navLinks = [
  { href: '/product', label: 'Product' },
  { href: '/science', label: 'Science' },
  { href: '/solutions/gcc', label: 'GCC' },
  { href: '/solutions/startups', label: 'Startups' },
  { href: '/resources', label: 'Resources' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
];
