export interface Question {
  id: number;
  question: string;
  measures: string;
  strongAnswer: string;
  redFlags: string;
}

export interface Section {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  questions: Question[];
}

export const sections: Section[] = [
  {
    id: 1,
    title: 'Problem-Solving & Technical Judgment',
    subtitle: 'Questions 1\u201310',
    description: 'How they approach ambiguity, make decisions under uncertainty, and evaluate trade-offs.',
    questions: [
      {
        id: 1,
        question:
          'Tell me about a time you had to make a technical decision with incomplete information. How did you approach it?',
        measures: 'Decision-making under uncertainty, risk assessment',
        strongAnswer:
          'Describes framework for evaluating options, acknowledges trade-offs, explains how they mitigated risks',
        redFlags: 'Paralysis without data, overconfidence, no mention of trade-offs',
      },
      {
        id: 2,
        question:
          'Describe a situation where you disagreed with a technical approach your team was taking. What did you do?',
        measures: 'Technical judgment, influence without authority, collaboration',
        strongAnswer:
          'Raised concerns constructively, provided alternatives with evidence, accepted outcome gracefully if overruled',
        redFlags:
          'Passive acceptance, aggressive confrontation, inability to articulate reasoning',
      },
      {
        id: 3,
        question:
          'Walk me through a time you had to debug a particularly difficult production issue. What was your process?',
        measures: 'Systematic thinking, composure under pressure, technical depth',
        strongAnswer:
          'Structured approach (isolate, reproduce, hypothesize, test), mentions tools used, explains root cause clearly',
        redFlags: 'Random trial-and-error, blaming others, no post-mortem learning',
      },
      {
        id: 4,
        question:
          'Tell me about a project where requirements changed significantly midway through. How did you handle it?',
        measures: 'Adaptability, stakeholder management, pragmatism',
        strongAnswer:
          'Assessed impact, communicated trade-offs, proposed solutions, maintained quality',
        redFlags:
          'Rigidity, complained without solutions, scope creep acceptance without pushback',
      },
      {
        id: 5,
        question:
          'Describe a time you had to choose between shipping quickly and shipping with higher quality. What did you decide and why?',
        measures: 'Judgment, pragmatism, understanding of business context',
        strongAnswer:
          'Explains context that drove decision, articulates specific trade-offs, describes mitigation for chosen risks',
        redFlags:
          'Always chooses one extreme, no awareness of business needs, no mention of technical debt management',
      },
      {
        id: 6,
        question:
          'Tell me about a technical bet you made that didn\u2019t work out. What happened and what did you learn?',
        measures: 'Self-awareness, learning orientation, intellectual honesty',
        strongAnswer:
          'Takes ownership, explains reasoning at the time, articulates specific lessons, shows how they applied learning',
        redFlags:
          'No examples (hasn\u2019t taken risks), blames external factors, superficial lessons',
      },
      {
        id: 7,
        question:
          'Describe a situation where you had to balance multiple competing priorities. How did you decide what to work on?',
        measures: 'Prioritization, time management, stakeholder communication',
        strongAnswer:
          'Clear framework for prioritization (impact, urgency, dependencies), proactive communication with stakeholders',
        redFlags: 'Reactive mode, no system, inability to say no',
      },
      {
        id: 8,
        question:
          'Walk me through how you approach learning a new technology or domain.',
        measures: 'Learning ability, self-direction, depth vs. breadth',
        strongAnswer:
          'Structured approach (fundamentals first, then application), mentions specific resources, shows progression',
        redFlags: 'Passive learning only, surface-level engagement, no hands-on practice',
      },
      {
        id: 9,
        question:
          'Tell me about a time you identified a technical risk that others had missed. What did you do?',
        measures: 'Technical foresight, communication, influence',
        strongAnswer:
          'Explains how they spotted it, how they raised it constructively, what action resulted',
        redFlags:
          '\u201CI told you so\u201D attitude, didn\u2019t escalate appropriately, couldn\u2019t explain the risk clearly',
      },
      {
        id: 10,
        question:
          'Describe a situation where you had to make a significant technical trade-off. How did you evaluate the options?',
        measures: 'Systems thinking, decision-making rigor, communication',
        strongAnswer:
          'Clear criteria for evaluation, considered multiple stakeholders, documented decision rationale',
        redFlags:
          'Gut-only decisions, didn\u2019t consider alternatives, no documentation',
      },
    ],
  },
  {
    id: 2,
    title: 'Collaboration & Communication',
    subtitle: 'Questions 11\u201320',
    description: 'How they work with others, handle conflict, and communicate across functions.',
    questions: [
      {
        id: 11,
        question:
          'Tell me about a time you had to work with someone whose working style was very different from yours. How did you adapt?',
        measures: 'Flexibility, empathy, self-awareness',
        strongAnswer:
          'Identifies specific differences, describes intentional adaptation, focuses on outcomes not judgment',
        redFlags: 'Blames other person, no adaptation, expects others to change',
      },
      {
        id: 12,
        question:
          'Describe a situation where you had to explain a complex technical concept to a non-technical stakeholder. How did you approach it?',
        measures: 'Communication skills, empathy, simplification ability',
        strongAnswer:
          'Tailored explanation to audience, used analogies, confirmed understanding, avoided jargon',
        redFlags:
          'Condescending tone, over-simplified to point of inaccuracy, frustrated by questions',
      },
      {
        id: 13,
        question:
          'Tell me about a time when you received feedback that was hard to hear. How did you respond?',
        measures: 'Coachability, emotional regulation, growth mindset',
        strongAnswer:
          'Listened without defensiveness, asked clarifying questions, took specific action, followed up',
        redFlags:
          'Dismissive, defensive, no behavior change, attacks feedback giver',
      },
      {
        id: 14,
        question:
          'Describe a project where you had to coordinate work across multiple teams. What challenges did you face?',
        measures: 'Cross-functional collaboration, communication, project management',
        strongAnswer:
          'Proactive communication, clear interfaces, escalated blockers appropriately, maintained relationships',
        redFlags: 'Siloed thinking, blame when things went wrong, poor documentation',
      },
      {
        id: 15,
        question:
          'Tell me about a conflict you had with a colleague. How did you resolve it?',
        measures: 'Conflict resolution, emotional intelligence, professionalism',
        strongAnswer:
          'Addressed directly, sought to understand other perspective, found common ground, maintained relationship',
        redFlags:
          'Avoided conflict, escalated too quickly, held grudges, personalized the disagreement',
      },
      {
        id: 16,
        question:
          'Describe a time you had to give critical feedback to a peer. How did you approach it?',
        measures: 'Directness, empathy, delivery skills',
        strongAnswer:
          'Timely, specific, private, focused on behavior not person, offered support',
        redFlags: 'Avoided giving feedback, public criticism, vague feedback, no follow-up',
      },
      {
        id: 17,
        question:
          'Tell me about a time you had to influence a decision without having direct authority.',
        measures: 'Influence, persuasion, relationship building',
        strongAnswer:
          'Built case with data, understood stakeholders\u2019 priorities, proposed win-win solutions',
        redFlags: 'Manipulative tactics, gave up too easily, complained without action',
      },
      {
        id: 18,
        question:
          'Describe a situation where miscommunication caused a problem. What happened and how did you address it?',
        measures: 'Communication skills, ownership, problem-solving',
        strongAnswer:
          'Takes appropriate responsibility, identifies root cause, implements prevention',
        redFlags: 'Blames others entirely, no systemic fix, defensive',
      },
      {
        id: 19,
        question:
          'Tell me about a time you helped a teammate who was struggling. What did you do?',
        measures: 'Teamwork, empathy, mentoring ability',
        strongAnswer:
          'Noticed proactively, offered help without judgment, balanced support with their autonomy',
        redFlags:
          'Didn\u2019t notice, took over completely, used it to make themselves look good',
      },
      {
        id: 20,
        question:
          'Describe how you\u2019ve handled working with a difficult stakeholder or customer.',
        measures: 'Professionalism, patience, problem-solving',
        strongAnswer:
          'Sought to understand their concerns, managed expectations, found solutions, maintained composure',
        redFlags:
          'Dismissed their concerns, escalated emotionally, gave up on relationship',
      },
    ],
  },
  {
    id: 3,
    title: 'Growth Mindset & Learning',
    subtitle: 'Questions 21\u201330',
    description: 'How they respond to feedback, failure, and the need to continuously improve.',
    questions: [
      {
        id: 21,
        question:
          'Tell me about a skill you\u2019ve developed significantly in the past year. How did you approach learning it?',
        measures: 'Continuous learning, self-direction, intentionality',
        strongAnswer:
          'Specific skill with measurable improvement, structured learning approach, application in real work',
        redFlags: 'Can\u2019t name anything specific, passive learning only, no application',
      },
      {
        id: 22,
        question:
          'Describe a time you failed at something. What did you learn?',
        measures: 'Self-awareness, resilience, learning orientation',
        strongAnswer:
          'Genuine failure (not humble brag), takes ownership, specific lessons, shows how behavior changed',
        redFlags:
          'No real failures, blames others, superficial lessons, repeated same mistake',
      },
      {
        id: 23,
        question:
          'Tell me about feedback you received that changed how you work.',
        measures: 'Coachability, self-improvement, action orientation',
        strongAnswer:
          'Specific feedback, initial reaction, deliberate change, measurable improvement',
        redFlags: 'Can\u2019t recall any, dismisses feedback value, no lasting change',
      },
      {
        id: 24,
        question:
          'Describe a time you had to unlearn something you previously believed was correct.',
        measures: 'Intellectual humility, adaptability, openness',
        strongAnswer:
          'Explains original belief and why, what changed their mind, how they updated behavior',
        redFlags:
          'Can\u2019t think of example, defensive about past beliefs, resistant to change',
      },
      {
        id: 25,
        question:
          'Tell me about a time you sought out feedback proactively. What prompted it?',
        measures: 'Self-awareness, growth orientation, initiative',
        strongAnswer:
          'Specific situation, chose appropriate person, acted on feedback',
        redFlags:
          'Never does this, only accepts feedback when forced, doesn\u2019t act on it',
      },
      {
        id: 26,
        question:
          'Describe how you stay current with developments in your field.',
        measures: 'Continuous learning, curiosity, professional development',
        strongAnswer:
          'Mix of sources (reading, community, hands-on), regular habit, applies to work',
        redFlags:
          'Doesn\u2019t stay current, relies solely on job for learning, no curiosity',
      },
      {
        id: 27,
        question:
          'Tell me about a time you changed your mind about a technical approach based on new information.',
        measures: 'Intellectual flexibility, evidence-based thinking, ego management',
        strongAnswer:
          'Held position for good reason, evaluated new evidence fairly, updated publicly',
        redFlags:
          'Never changes mind, or changes too easily without reason, hides that they changed',
      },
      {
        id: 28,
        question:
          'Describe a situation where you were outside your comfort zone. How did you handle it?',
        measures: 'Growth orientation, resilience, self-management',
        strongAnswer:
          'Sought the discomfort intentionally or embraced it, specific coping strategies, learning resulted',
        redFlags:
          'Avoids discomfort, no coping strategies, didn\u2019t learn from experience',
      },
      {
        id: 29,
        question:
          'Tell me about the most useful piece of career advice you\u2019ve received. How has it influenced you?',
        measures: 'Coachability, self-reflection, relationship with mentors',
        strongAnswer:
          'Specific advice, explains why it resonated, shows lasting impact on behavior',
        redFlags: 'Can\u2019t recall any, hasn\u2019t sought advice, no lasting impact',
      },
      {
        id: 30,
        question:
          'Describe a time you made a mistake that affected others. How did you handle it?',
        measures: 'Accountability, integrity, recovery skills',
        strongAnswer:
          'Acknowledged quickly, took responsibility, fixed the problem, prevented recurrence',
        redFlags: 'Hid the mistake, blamed others, no prevention measures',
      },
    ],
  },
  {
    id: 4,
    title: 'Ownership & Accountability',
    subtitle: 'Questions 31\u201340',
    description: 'How they take responsibility, push back when needed, and drive results.',
    questions: [
      {
        id: 31,
        question:
          'Tell me about a project you owned end-to-end. What did ownership mean to you in that context?',
        measures: 'Ownership mindset, initiative, responsibility',
        strongAnswer:
          'Defined scope, drove decisions, handled obstacles, measured outcomes, learned from results',
        redFlags:
          'Waited for direction, blamed blockers, didn\u2019t measure success',
      },
      {
        id: 32,
        question:
          'Describe a time you saw a problem that wasn\u2019t your responsibility and chose to address it anyway.',
        measures: 'Initiative, ownership beyond role, judgment',
        strongAnswer:
          'Identified problem, assessed if they should act, took appropriate action, didn\u2019t overstep',
        redFlags:
          'Never does this, always oversteps, expects recognition for it',
      },
      {
        id: 33,
        question:
          'Tell me about a commitment you made that became harder to keep than you expected. What did you do?',
        measures: 'Reliability, communication, problem-solving',
        strongAnswer:
          'Communicated early, proposed alternatives, delivered on adjusted commitment',
        redFlags:
          'Quietly missed deadline, made excuses, didn\u2019t communicate',
      },
      {
        id: 34,
        question:
          'Describe a situation where you had to push back on a request from your manager or stakeholder.',
        measures: 'Professional courage, judgment, communication',
        strongAnswer:
          'Understood their intent, explained concerns with data, proposed alternatives, accepted final decision',
        redFlags: 'Never pushes back, pushes back on everything, poor delivery',
      },
      {
        id: 35,
        question:
          'Tell me about a time you went above and beyond what was expected. What motivated you?',
        measures: 'Drive, intrinsic motivation, work ethic',
        strongAnswer:
          'Genuine extra effort (not just long hours), clear motivation, didn\u2019t expect special recognition',
        redFlags:
          'Can\u2019t think of example, motivated only by recognition, unsustainable patterns',
      },
      {
        id: 36,
        question:
          'Describe how you handle a situation where you don\u2019t have the resources you need to complete a task.',
        measures: 'Resourcefulness, problem-solving, communication',
        strongAnswer:
          'Assesses what\u2019s truly needed, finds creative solutions, escalates appropriately if blocked',
        redFlags:
          'Gives up, complains without action, doesn\u2019t communicate constraints',
      },
      {
        id: 37,
        question:
          'Tell me about a time you had to deliver bad news to a stakeholder. How did you handle it?',
        measures: 'Communication, ownership, professionalism',
        strongAnswer:
          'Delivered promptly, took appropriate responsibility, came with solutions or options',
        redFlags: 'Delayed delivery, blamed others, no solutions offered',
      },
      {
        id: 38,
        question:
          'Describe a decision you made that you later regretted. What would you do differently?',
        measures: 'Self-reflection, learning, honesty',
        strongAnswer:
          'Genuine regret (not false modesty), clear on what went wrong, specific changes for future',
        redFlags:
          'No regrets ever, blames circumstances, superficial reflection',
      },
      {
        id: 39,
        question:
          'Tell me about a time you had to hold someone else accountable. How did you approach it?',
        measures: 'Leadership, directness, fairness',
        strongAnswer:
          'Addressed privately, focused on specifics, gave opportunity to improve, followed up',
        redFlags:
          'Avoided the conversation, public criticism, gave up on the person too quickly',
      },
      {
        id: 40,
        question:
          'Describe a situation where you disagreed with a company policy or decision. What did you do?',
        measures: 'Professional maturity, appropriate channels, respect for decisions',
        strongAnswer:
          'Voiced concerns through appropriate channels, ultimately supported decision, didn\u2019t undermine',
        redFlags:
          'Silent compliance with resentment, public undermining, refusal to execute',
      },
    ],
  },
  {
    id: 5,
    title: 'Adaptability & Resilience',
    subtitle: 'Questions 41\u201350',
    description: 'How they handle change, pressure, ambiguity, and setbacks.',
    questions: [
      {
        id: 41,
        question:
          'Tell me about a time you had to adapt quickly to a significant change at work.',
        measures: 'Adaptability, resilience, positive attitude',
        strongAnswer:
          'Acknowledged difficulty, focused on what they could control, found opportunities in the change',
        redFlags:
          'Prolonged resistance, negativity, inability to function during change',
      },
      {
        id: 42,
        question:
          'Describe a high-pressure situation you faced. How did you manage it?',
        measures: 'Stress management, composure, performance under pressure',
        strongAnswer:
          'Specific techniques for managing stress, maintained effectiveness, supported others',
        redFlags:
          'Falls apart under pressure, creates more stress for others, no coping strategies',
      },
      {
        id: 43,
        question:
          'Tell me about a time when you had to work with significant ambiguity. How did you create clarity?',
        measures: 'Tolerance for ambiguity, initiative, structured thinking',
        strongAnswer:
          'Identified what was known vs. unknown, made reasonable assumptions, moved forward while gathering info',
        redFlags:
          'Paralyzed by ambiguity, waited for clarity, made rash decisions',
      },
      {
        id: 44,
        question:
          'Describe a setback that affected your motivation. How did you recover?',
        measures: 'Resilience, self-management, perspective',
        strongAnswer:
          'Acknowledges impact, specific recovery strategies, returned to effectiveness',
        redFlags:
          'Denies setbacks affect them, prolonged impact, no recovery strategies',
      },
      {
        id: 45,
        question:
          'Tell me about a time you had to learn something new under time pressure.',
        measures: 'Learning agility, prioritization, stress management',
        strongAnswer:
          'Focused on essentials, used efficient learning strategies, delivered despite constraints',
        redFlags: 'Overwhelmed, tried to learn everything, poor prioritization',
      },
      {
        id: 46,
        question:
          'Describe a situation where you had to work with very limited direction.',
        measures: 'Self-direction, initiative, judgment',
        strongAnswer:
          'Created own structure, checked in appropriately, delivered results',
        redFlags:
          'Floundered without direction, didn\u2019t seek clarification when needed, went off track',
      },
      {
        id: 47,
        question:
          'Tell me about a time your role or responsibilities changed significantly. How did you adapt?',
        measures: 'Flexibility, learning orientation, positive attitude',
        strongAnswer:
          'Embraced new responsibilities, sought to understand new context, maintained performance',
        redFlags:
          'Resisted change, compared unfavorably to old role, slow to adapt',
      },
      {
        id: 48,
        question:
          'Describe how you maintain focus and productivity when working remotely or with distributed teams.',
        measures: 'Self-management, communication, discipline',
        strongAnswer:
          'Specific routines and tools, proactive communication, maintains boundaries',
        redFlags:
          'Struggles without supervision, over-works or under-works, poor communication',
      },
      {
        id: 49,
        question:
          'Tell me about a time you had to work through a period of uncertainty about your job or team\u2019s future.',
        measures: 'Resilience, professionalism, focus',
        strongAnswer:
          'Managed own anxiety, continued to perform, supported team',
        redFlags: 'Checked out, spread negativity, let performance slip',
      },
      {
        id: 50,
        question:
          'Describe a time you turned a negative situation into a positive outcome.',
        measures: 'Optimism, problem-solving, resilience',
        strongAnswer:
          'Genuine negative situation, specific actions to improve it, real positive outcome',
        redFlags:
          'Forced positivity, denies negatives exist, no agency in the turnaround',
      },
    ],
  },
];

export const scoringFramework = [
  { score: 5, label: 'Exceptional', description: 'Would use this as a training example' },
  { score: 4, label: 'Strong', description: 'Clear evidence of the competency' },
  { score: 3, label: 'Adequate', description: 'Some evidence, some gaps' },
  { score: 2, label: 'Weak', description: 'Limited evidence, concerning gaps' },
  { score: 1, label: 'Poor', description: 'No evidence or negative evidence' },
];

export const bestPractices = [
  'Choose 4\u20136 questions per interview \u2014 Don\u2019t rush through all 50',
  'Cover multiple dimensions \u2014 Pick at least one from each section',
  'Use follow-up probes \u2014 \u201CWhat happened next?\u201D \u201CHow did that feel?\u201D \u201CWhat would you do differently?\u201D',
  'Score consistently \u2014 Define what 1\u20135 looks like before you start',
  'Compare apples to apples \u2014 Ask same questions to all candidates for a role',
];
