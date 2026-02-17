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
      { href: '/product/structured-interviews', label: 'Structured Interviews', description: 'Role-specific question frameworks' },
      { href: '/product/confidence-scoring', label: 'Confidence Scoring', description: 'Score + confidence for every dimension' },
      { href: '/product/adaptive-questioning', label: 'Adaptive Follow-Up', description: 'Uncertainty triggers clarifying questions', featured: true },
      { href: '/product/integrity-detection', label: 'Integrity Detection', description: 'Flag inconsistencies automatically' },
      { href: '/product/candidate-reports', label: 'Reports', description: 'Audit-ready candidate dossiers' },
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
          { href: '/solutions/enterprise', label: 'Enterprise', description: 'Large-scale hiring' },
          { href: '/solutions/agencies', label: 'Agencies', description: 'Staffing partners' },
        ],
      },
      {
        label: 'By Use Case',
        items: [
          { href: '/solutions/technical-hiring', label: 'Technical Hiring', description: 'Engineers & developers' },
          { href: '/solutions/campus-hiring', label: 'Campus Hiring', description: 'Graduate recruitment' },
          { href: '/solutions/india', label: 'India', description: 'Hiring across India' },
          { href: '/solutions/middle-east', label: 'Middle East', description: 'GCC region hiring' },
        ],
      },
    ],
  },
  {
    label: 'Science',
    items: [
      { href: '/science', label: 'The Science', description: 'Our research foundation' },
      { href: '/science/fuzzy-logic', label: 'Fuzzy Logic Framework', description: 'How uncertainty is quantified' },
      { href: '/science/explainability', label: 'Explainable AI', description: 'Every score has an evidence trail' },
      { href: '/science/bias-mitigation', label: 'Bias Mitigation', description: 'Pedigree-neutral evaluation' },
    ],
  },
  {
    label: 'Compare',
    items: [
      { href: '/compare/hirevue', label: 'vs HireVue', description: 'Video interview comparison' },
      { href: '/compare/hackerrank', label: 'vs HackerRank', description: 'Coding assessment comparison' },
      { href: '/compare/codility', label: 'vs Codility', description: 'Technical screening comparison' },
      { href: '/compare/traditional', label: 'vs Traditional', description: 'Replace manual screening' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { href: '/blog', label: 'Blog', description: 'Insights on hiring operations' },
      { href: '/resources/whitepapers', label: 'Whitepapers', description: 'Technical deep-dives' },
      { href: '/resources/case-studies', label: 'Case Studies', description: 'Customer success stories' },
      { href: '/resources/roi-calculator', label: 'ROI Calculator', description: 'Estimate your savings' },
      { href: '/resources/sample-report', label: 'Sample Report', description: 'See a real candidate report', featured: true },
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
