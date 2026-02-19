/* ── Types ──────────────────────────────────────────────── */

export type Assessment = 'yes' | 'partial' | 'no';
export type RiskLevel = 'HIGH' | 'MEDIUM' | 'LOW-MEDIUM' | 'LOW';

export interface AssessmentOption {
  value: Assessment;
  label: string;
  description: string;
  points: number;
}

export const assessmentOptions: AssessmentOption[] = [
  { value: 'yes', label: 'Yes', description: 'Fully implemented', points: 2 },
  { value: 'partial', label: 'Partial', description: 'Partially implemented', points: 1 },
  { value: 'no', label: 'No', description: 'Not implemented', points: 0 },
];

export interface ChecklistItem {
  id: number;
  section: string;
  title: string;
  question: string;
  assessmentLabels: { yes: string; partial: string; no: string };
  whyItMatters: string;
  evidence: string[];
  risk: RiskLevel;
  riskDetails: string[];
}

/* ── Sections ──────────────────────────────────────────── */

export const sections = [
  { id: 'A', title: 'Process Structure', items: [1, 2, 3, 4] },
  { id: 'B', title: 'Decision-Making', items: [5, 6, 7, 8] },
  { id: 'C', title: 'Monitoring & Accountability', items: [9, 10, 11, 12] },
];

/* ── Checklist items ───────────────────────────────────── */

export const checklistItems: ChecklistItem[] = [
  {
    id: 1,
    section: 'A',
    title: 'Standardized Questions',
    question: 'Do all candidates for the same role receive the same core interview questions?',
    assessmentLabels: {
      yes: 'Same questions for all candidates',
      partial: 'Some standard questions, some freestyle',
      no: 'Interviewers choose their own questions',
    },
    whyItMatters:
      'When interviewers ask different questions, they gather different information. You can\u2019t compare candidates fairly if you\u2019re evaluating different things. Unstructured interviews also allow unconscious bias to drive question selection.',
    evidence: [
      'Documented question bank per role',
      'Interview guides provided to all interviewers',
      'Training on using standard questions',
    ],
    risk: 'HIGH',
    riskDetails: [
      'Disparate impact claims',
      'Inconsistent hiring decisions',
      'Inter-rater reliability < 60%',
    ],
  },
  {
    id: 2,
    section: 'A',
    title: 'Scoring Rubrics',
    question: 'Do interviewers have defined criteria and rating scales for evaluating answers?',
    assessmentLabels: {
      yes: 'Clear rubrics with behavioral anchors',
      partial: 'General guidelines but not specific anchors',
      no: 'Interviewers use their own judgment',
    },
    whyItMatters:
      'Without rubrics, \u201Cgood\u201D means different things to different interviewers. This introduces variance that correlates with interviewer demographics and preferences \u2014 a form of bias.',
    evidence: [
      'Written rubrics for each competency',
      'Examples of answers at each score level',
      'Calibration sessions to align interviewers',
    ],
    risk: 'HIGH',
    riskDetails: [
      '15\u201325% variance between interviewers',
      '\u201CCulture fit\u201D becomes proxy for similarity bias',
      'No defense in discrimination claims',
    ],
  },
  {
    id: 3,
    section: 'A',
    title: 'Interviewer Training',
    question: 'Have all interviewers completed training on structured interviewing and bias awareness?',
    assessmentLabels: {
      yes: 'All interviewers trained, refresher annually',
      partial: 'Some training, not all interviewers',
      no: 'No formal interviewer training',
    },
    whyItMatters:
      'Untrained interviewers make predictable mistakes: talking too much, asking illegal questions, making snap judgments, letting biases influence evaluation.',
    evidence: [
      'Training completion records',
      'Training content covering bias types',
      'Certification before interviewing',
      'Annual refresher requirement',
    ],
    risk: 'MEDIUM',
    riskDetails: [
      'Illegal questions asked',
      'Bias patterns emerge',
      'Interviewers damage candidate experience',
    ],
  },
  {
    id: 4,
    section: 'A',
    title: 'Blind Resume Review',
    question: 'Are identifying details (name, photo, address, graduation year) hidden during initial resume screening?',
    assessmentLabels: {
      yes: 'Fully blind initial review',
      partial: 'Some details hidden',
      no: 'Full resumes with all details',
    },
    whyItMatters:
      'Studies show identical resumes get different callback rates based on names that signal gender, race, or ethnicity. Hiding this information forces evaluation on qualifications alone.',
    evidence: [
      'ATS configured for blind review',
      'Process documented',
      'Screeners trained on blind review',
    ],
    risk: 'MEDIUM',
    riskDetails: [
      'Documented bias risk (research is clear)',
      'Easy improvement to demonstrate intent',
      'First filter has outsized impact',
    ],
  },
  {
    id: 5,
    section: 'B',
    title: 'Independent Feedback',
    question: 'Do interviewers submit feedback before seeing other interviewers\u2019 assessments?',
    assessmentLabels: {
      yes: 'All feedback submitted before debrief',
      partial: 'Sometimes shared before submission',
      no: 'Feedback often shared before documentation',
    },
    whyItMatters:
      'When interviewers see others\u2019 feedback before writing their own, they anchor on existing opinions. Negative feedback from senior interviewers disproportionately influences outcomes. Independent assessment prevents groupthink.',
    evidence: [
      'ATS enforces submission before viewing',
      'Documented policy',
      'Audit of compliance',
    ],
    risk: 'HIGH',
    riskDetails: [
      'Senior/majority opinion dominates',
      'Dissenting views suppressed',
      'Legal exposure in discrimination cases',
    ],
  },
  {
    id: 6,
    section: 'B',
    title: 'Structured Debriefs',
    question: 'Do hiring debriefs follow a structured format that examines evidence by competency?',
    assessmentLabels: {
      yes: 'Structured format, evidence-based discussion',
      partial: 'Some structure, often unstructured',
      no: 'Freeform discussion',
    },
    whyItMatters:
      'Unstructured debriefs default to \u201Cwho has the strongest opinion\u201D or \u201Cwho speaks first.\u201D Structured debriefs force examination of evidence and surface disagreements.',
    evidence: [
      'Debrief template',
      'Trained facilitators',
      'Documentation of discussion',
    ],
    risk: 'MEDIUM',
    riskDetails: [
      'Loudest voice wins',
      'Red flags overlooked',
      'Decisions not defensible',
    ],
  },
  {
    id: 7,
    section: 'B',
    title: 'Diverse Interview Panels',
    question: 'Do interview panels include diversity across multiple dimensions?',
    assessmentLabels: {
      yes: 'Intentionally diverse panels',
      partial: 'Some diversity, not intentional',
      no: 'Panels reflect existing team composition',
    },
    whyItMatters:
      'Homogeneous panels have shared blind spots. They\u2019re more likely to favor candidates who are similar to them. Diverse panels catch different signals and reduce similarity bias.',
    evidence: [
      'Panel composition guidelines',
      'Tracking of panel diversity',
      'Pool of trained diverse interviewers',
    ],
    risk: 'MEDIUM',
    riskDetails: [
      'Similarity bias in evaluation',
      'Candidate experience suffers',
      'Perpetuates homogeneity',
    ],
  },
  {
    id: 8,
    section: 'B',
    title: 'Documented Rationale',
    question: 'Is the specific reason for every hire/no-hire decision documented in writing?',
    assessmentLabels: {
      yes: 'Written rationale for all decisions',
      partial: 'Sometimes documented',
      no: 'Decisions not documented',
    },
    whyItMatters:
      'If you can\u2019t explain why you hired Candidate A over Candidate B, you can\u2019t prove it wasn\u2019t discriminatory. Documentation creates accountability and supports legal defense.',
    evidence: [
      'Written rationale in ATS',
      'Rationale references specific competencies',
      'Retained per legal requirements',
    ],
    risk: 'HIGH',
    riskDetails: [
      'No defense in discrimination claims',
      'Pattern analysis impossible',
      'Inconsistent decision-making',
    ],
  },
  {
    id: 9,
    section: 'C',
    title: 'Pass-Through Rate Analysis',
    question: 'Do you track and analyze pass-through rates by demographic group at each stage?',
    assessmentLabels: {
      yes: 'Regular analysis with action thresholds',
      partial: 'Some tracking, not actionable',
      no: 'No demographic tracking',
    },
    whyItMatters:
      'Disparate impact can occur even with good intentions. If 50% of Group A candidates pass phone screens but only 30% of Group B do, something in your process is causing different outcomes.',
    evidence: [
      'Demographic data collection (voluntary)',
      'Stage-by-stage analysis',
      'Action when disparities detected',
      'Retained documentation',
    ],
    risk: 'HIGH',
    riskDetails: [
      'EEOC adverse impact liability',
      'Patterns invisible until lawsuit',
      'Can\u2019t demonstrate fairness',
    ],
  },
  {
    id: 10,
    section: 'C',
    title: 'Interviewer Calibration',
    question: 'Do you measure and address variance between interviewers evaluating the same candidates?',
    assessmentLabels: {
      yes: 'Regular calibration with metrics',
      partial: 'Occasional calibration',
      no: 'No interviewer-level tracking',
    },
    whyItMatters:
      'Some interviewers are consistently harsh; others consistently lenient. Some have patterns that correlate with candidate demographics. Without measurement, you can\u2019t address it.',
    evidence: [
      'Inter-rater reliability metrics',
      'Calibration sessions',
      'Action for outlier interviewers',
      'Training for low-reliability interviewers',
    ],
    risk: 'MEDIUM',
    riskDetails: [
      'Individual interviewers introduce bias',
      'Inconsistent candidate experience',
      'No feedback loop for improvement',
    ],
  },
  {
    id: 11,
    section: 'C',
    title: 'Offer Equity Review',
    question: 'Are compensation offers reviewed for internal equity and demographic parity?',
    assessmentLabels: {
      yes: 'All offers reviewed before extension',
      partial: 'Some review, not systematic',
      no: 'Managers set offers independently',
    },
    whyItMatters:
      'Bias in compensation compounds over careers. Even small starting salary gaps become large gaps over time. Review ensures offers are based on role, level, and qualifications \u2014 not negotiation or assumptions.',
    evidence: [
      'Compensation bands by level',
      'Offer review process',
      'Equity analysis by demographic',
      'Adjustment process for disparities',
    ],
    risk: 'HIGH',
    riskDetails: [
      'Pay equity lawsuits',
      'Regulatory violations',
      'Retention problems when disparities discovered',
    ],
  },
  {
    id: 12,
    section: 'C',
    title: 'Third-Party Audit',
    question: 'Has your hiring process been reviewed by an external party in the last 2 years?',
    assessmentLabels: {
      yes: 'Recent external audit',
      partial: 'Internal audit only',
      no: 'No audit conducted',
    },
    whyItMatters:
      'Internal review has blind spots. External auditors bring fresh perspective, benchmark against best practices, and provide documentation of compliance efforts.',
    evidence: [
      'Audit report',
      'Remediation plan',
      'Follow-up verification',
    ],
    risk: 'LOW-MEDIUM',
    riskDetails: [
      'Blind spots persist',
      'No external validation',
      'Less credible in legal defense',
    ],
  },
];

/* ── Scoring tiers ─────────────────────────────────────── */

export interface ScoreTier {
  min: number;
  max: number;
  label: string;
  color: string;
  description: string;
}

export const scoreTiers: ScoreTier[] = [
  { min: 20, max: 24, label: 'Strong', color: 'brand-green', description: 'You have mature practices. Focus on continuous improvement.' },
  { min: 14, max: 19, label: 'Moderate', color: 'brand-yellow', description: 'Good foundation with gaps. Prioritize high-risk items.' },
  { min: 8, max: 13, label: 'Weak', color: 'brand-orange', description: 'Significant exposure. Immediate action needed on multiple fronts.' },
  { min: 0, max: 7, label: 'Critical', color: 'brand-red', description: 'Major overhaul required. Consider external help.' },
];

/* ── Priority matrix ───────────────────────────────────── */

export const priorityMatrix = [
  { priority: 'Address Immediately', description: 'High Risk + No', itemIds: [1, 2, 5, 8, 9, 11] },
  { priority: 'Address Soon', description: 'Medium Risk + No', itemIds: [3, 4, 6, 7, 10] },
  { priority: 'Address When Possible', description: 'Low Risk + No', itemIds: [12] },
];

/* ── LayersRank solutions mapping ──────────────────────── */

export const layersRankSolutions = [
  { item: 1, solution: 'Same questions for every candidate', label: 'Item 1, solved' },
  { item: 2, solution: 'AI scoring with defined rubrics', label: 'Item 2, solved' },
  { item: 4, solution: 'No human sees demographics', label: 'Item 4, solved' },
  { item: 5, solution: 'Independent, consistent evaluation', label: 'Items 5 & 10, solved' },
  { item: 8, solution: 'Full documentation of rationale', label: 'Item 8, solved' },
];
