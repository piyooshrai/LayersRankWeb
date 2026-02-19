/* ── Rating scale ──────────────────────────────────────── */

export interface RatingLevel {
  score: number;
  label: string;
  description: string;
}

export const ratingScale: RatingLevel[] = [
  { score: 5, label: 'Exceptional', description: 'Top 5% of candidates. Exceeds bar significantly. Would advocate strongly.' },
  { score: 4, label: 'Strong', description: 'Clearly above bar. Confident they\u2019d succeed. Minor gaps acceptable.' },
  { score: 3, label: 'Meets Bar', description: 'Adequate evidence. Could succeed with support. Some uncertainty.' },
  { score: 2, label: 'Below Bar', description: 'Significant gaps. Unlikely to succeed. Concerns outweigh positives.' },
  { score: 1, label: 'Poor', description: 'Clear miss. Strong evidence of inability or misalignment.' },
];

/* ── Competencies ──────────────────────────────────────── */

export interface BehavioralAnchor {
  score: number;
  anchor: string;
}

export interface Competency {
  id: number;
  name: string;
  definition: string;
  weight: number;
  anchors: BehavioralAnchor[];
  evidence: string[];
  questionBankRef: string;
  note?: string;
}

export const competencies: Competency[] = [
  {
    id: 1,
    name: 'Technical Ability',
    definition: 'Demonstrates knowledge, skills, and judgment to perform the technical aspects of the role.',
    weight: 25,
    anchors: [
      { score: 5, anchor: 'Deep expertise in relevant technologies. Identifies edge cases interviewers missed. Explains complex concepts with clarity. Could mentor senior engineers.' },
      { score: 4, anchor: 'Solid knowledge across required areas. Solves problems correctly with good approach. Minor gaps in depth or breadth that won\u2019t impede success.' },
      { score: 3, anchor: 'Adequate knowledge for the role. Solves straightforward problems. Needs guidance on complex scenarios. Some gaps that will require ramp-up time.' },
      { score: 2, anchor: 'Significant knowledge gaps. Struggles with problems at expected difficulty. Requires substantial training.' },
      { score: 1, anchor: 'Lacks fundamental knowledge. Cannot complete expected tasks. Wrong approach to basic problems.' },
    ],
    evidence: [
      'Technical interview performance',
      'System design approach',
      'Code quality (if applicable)',
      'Domain knowledge depth',
      'Tool/technology familiarity',
    ],
    questionBankRef: 'Questions 1\u201310',
  },
  {
    id: 2,
    name: 'Problem-Solving',
    definition: 'Approaches ambiguous problems systematically, gathers information effectively, and reaches sound conclusions.',
    weight: 20,
    anchors: [
      { score: 5, anchor: 'Breaks down complex problems elegantly. Identifies non-obvious factors. Considers multiple approaches before deciding. Explains reasoning clearly.' },
      { score: 4, anchor: 'Structures approach logically. Asks good clarifying questions. Reaches correct conclusions. May miss some edge cases but self-corrects.' },
      { score: 3, anchor: 'Can solve problems with some guidance. Approach is reasonable but not always efficient. May need hints to get unstuck.' },
      { score: 2, anchor: 'Struggles to structure approach. Jumps to solutions without analysis. Misses important factors. Needs significant guidance.' },
      { score: 1, anchor: 'Cannot break down problems. Random or illogical approach. Reaches wrong conclusions despite guidance.' },
    ],
    evidence: [
      'How they approach unfamiliar problems',
      'Quality of clarifying questions',
      'Ability to recover when stuck',
      'Consideration of trade-offs',
      'Reasoning quality',
    ],
    questionBankRef: 'Questions 1\u201310',
  },
  {
    id: 3,
    name: 'Communication',
    definition: 'Expresses ideas clearly, listens actively, and adapts communication style to audience.',
    weight: 15,
    anchors: [
      { score: 5, anchor: 'Exceptionally clear and concise. Tailors perfectly to audience. Handles difficult conversations with grace. Would excel in cross-functional settings.' },
      { score: 4, anchor: 'Communicates clearly. Listens and responds appropriately. Explains technical concepts to non-technical audience. Minor areas for improvement.' },
      { score: 3, anchor: 'Adequate communication. Generally clear but occasionally verbose or unclear. Can work effectively with team but not a strength.' },
      { score: 2, anchor: 'Frequently unclear or hard to follow. Doesn\u2019t listen well. Struggles to explain concepts. Would create friction in collaboration.' },
      { score: 1, anchor: 'Cannot communicate effectively. Incoherent or inappropriate responses. Would significantly impede team function.' },
    ],
    evidence: [
      'Clarity of interview responses',
      'Listening and follow-up',
      'Explanation of past work',
      'Response to feedback during interview',
      'Written communication (if applicable)',
    ],
    questionBankRef: 'Questions 11\u201320',
  },
  {
    id: 4,
    name: 'Ownership',
    definition: 'Takes responsibility for outcomes, drives work to completion, and acts without waiting for direction.',
    weight: 15,
    anchors: [
      { score: 5, anchor: 'Exceptional ownership examples. Drove significant outcomes. Takes responsibility for team success, not just own work. Goes well beyond role boundaries appropriately.' },
      { score: 4, anchor: 'Clear ownership of past work. Drove projects to completion. Takes initiative. May need to grow into broader ownership.' },
      { score: 3, anchor: 'Adequate ownership of assigned work. Completes tasks reliably. May wait for direction more than ideal.' },
      { score: 2, anchor: 'Limited evidence of ownership. Seems to need significant direction. May blame external factors for failures.' },
      { score: 1, anchor: 'No ownership evidence. Expects to be told what to do. Avoids responsibility.' },
    ],
    evidence: [
      'Past project ownership examples',
      'How they handled obstacles',
      'Accountability for failures',
      'Initiative beyond assigned work',
      'Scope of responsibility in past roles',
    ],
    questionBankRef: 'Questions 31\u201340',
  },
  {
    id: 5,
    name: 'Growth Mindset',
    definition: 'Seeks feedback, learns from mistakes, adapts to change, and continuously improves.',
    weight: 15,
    anchors: [
      { score: 5, anchor: 'Exceptional learning orientation. Actively seeks challenging feedback. Clear examples of significant growth. Embraces change enthusiastically.' },
      { score: 4, anchor: 'Good examples of learning and adaptation. Responds well to feedback. Shows trajectory of improvement. Open to change.' },
      { score: 3, anchor: 'Some evidence of learning. Accepts feedback. Adequate adaptability. May need encouragement to seek growth opportunities.' },
      { score: 2, anchor: 'Limited evidence of growth. May be defensive about feedback. Resistant to change. Repeats past mistakes.' },
      { score: 1, anchor: 'Fixed mindset. Cannot accept feedback. Rigid and inflexible. No evidence of learning over time.' },
    ],
    evidence: [
      'Response to feedback during interview',
      'Examples of learning from failures',
      'How they\u2019ve grown over career',
      'Reaction to hypothetical feedback',
      'Openness to new ideas',
    ],
    questionBankRef: 'Questions 21\u201330',
  },
  {
    id: 6,
    name: 'Culture Alignment',
    definition: 'Fits with company values, working style, and team dynamics.',
    weight: 10,
    anchors: [
      { score: 5, anchor: 'Exceptional fit. Would strengthen culture. Shares values authentically. Energized by how we work.' },
      { score: 4, anchor: 'Good fit. Aligned with values. Would integrate well with team. Minor adjustments may be needed.' },
      { score: 3, anchor: 'Adequate fit. No red flags. May need time to adapt to culture but no fundamental misalignment.' },
      { score: 2, anchor: 'Questionable fit. Some values misalignment. May create friction. Worth discussing in debrief.' },
      { score: 1, anchor: 'Clear misfit. Fundamental values conflict. Would not thrive or would be disruptive.' },
    ],
    evidence: [
      'Motivation and career goals',
      'Working style preferences',
      'Past team environments',
      'Values demonstrated in examples',
      'Energy and enthusiasm',
    ],
    questionBankRef: 'Values alignment questions',
    note: 'Culture fit should NEVER be about demographic similarity. Focus on values and working style, not \u201Cwould I want to get a beer with them.\u201D',
  },
];

/* ── Red flags ─────────────────────────────────────────── */

export interface RedFlagCategory {
  category: string;
  flags: string[];
}

export const redFlagCategories: RedFlagCategory[] = [
  {
    category: 'Integrity',
    flags: [
      'Inconsistent story across interviews',
      'Claimed credit for team work without acknowledgment',
      'Blamed others for every failure',
      'Resume claims that don\u2019t match interview evidence',
    ],
  },
  {
    category: 'Technical',
    flags: [
      'Cannot explain own past work in depth',
      'Fundamental gaps in claimed expertise areas',
      'Unable to complete problems at expected level',
      'No curiosity or interest in our technical challenges',
    ],
  },
  {
    category: 'Behavioral',
    flags: [
      'Dismissive of feedback during interview',
      'Spoke negatively of all past employers',
      'No examples of collaboration or teamwork',
      'Unable to describe any failures or learnings',
    ],
  },
  {
    category: 'Culture',
    flags: [
      'Values clearly misaligned',
      'Concerning comments about colleagues, groups, or working styles',
      'Expectations don\u2019t match role reality',
      'Motivation seems purely financial',
    ],
  },
  {
    category: 'Process',
    flags: [
      'Late or unprepared for interview',
      'Rude to coordinator or other staff',
      'Dishonest about other offers or timeline',
      'Withdrew, then returned, then wavered',
    ],
  },
];

/* ── Calibration ───────────────────────────────────────── */

export const calibrationQuestions = [
  '\u201CWhat specific evidence supports that score?\u201D',
  '\u201CDid anyone see evidence that contradicts this?\u201D',
  '\u201CIs this a skill gap or a will gap?\u201D',
  '\u201CCan we develop this, or is it foundational?\u201D',
  '\u201CAre we comparing to an ideal or to our actual bar?\u201D',
];

export const calibrationFailures = [
  'Averaging scores (doesn\u2019t surface disagreement)',
  'Letting loudest voice dominate',
  'Ignoring red flags because of strong positives',
  'Lowering bar because of time pressure',
  'Raising bar because of good pipeline',
];

/* ── Implementation ────────────────────────────────────── */

export interface ImplementationWeek {
  week: string;
  title: string;
  steps: string[];
}

export const implementationPlan: ImplementationWeek[] = [
  {
    week: 'Week 1',
    title: 'Customize',
    steps: [
      'Adjust competencies for your roles',
      'Modify weights based on priorities',
      'Add role-specific behavioral anchors',
      'Create interview assignment matrix (who evaluates what)',
    ],
  },
  {
    week: 'Week 2',
    title: 'Train',
    steps: [
      'Walk interviewers through scorecard',
      'Practice scoring on past candidates',
      'Calibrate on what \u201C3\u201D means',
      'Role-play debrief conversations',
    ],
  },
  {
    week: 'Week 3',
    title: 'Pilot',
    steps: [
      'Use on next 3\u20135 candidates',
      'Gather interviewer feedback',
      'Review debrief quality',
      'Adjust based on learnings',
    ],
  },
  {
    week: 'Week 4+',
    title: 'Scale',
    steps: [
      'Make scorecard required for all hires',
      'Track score distributions',
      'Correlate scores with post-hire performance',
      'Refine continuously',
    ],
  },
];

export const recommendations = [
  { value: 'strong-hire', label: 'Strong Hire', description: 'Would advocate to hire' },
  { value: 'hire', label: 'Hire', description: 'Meets bar, support hiring' },
  { value: 'lean-no', label: 'Lean No Hire', description: 'Concerns outweigh positives' },
  { value: 'no-hire', label: 'No Hire', description: 'Does not meet bar' },
  { value: 'strong-no', label: 'Strong No Hire', description: 'Significant concerns' },
];
