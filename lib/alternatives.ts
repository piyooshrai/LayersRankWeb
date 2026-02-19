export interface ComparisonRow {
  feature: string;
  them: string;
  us: string;
}

export interface AlternativeFAQ {
  q: string;
  a: string;
}

export interface Alternative {
  slug: string;
  competitor: string;
  meta: { title: string; description: string; keywords: string };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whySwitch: {
    intro: string;
    reasons: { title: string; text: string }[];
  };
  comparison: ComparisonRow[];
  whatYouGet: { title: string; text: string }[];
  pricingComparison: {
    them: { label: string; bullets: string[] };
    us: { label: string; bullets: string[] };
    example?: { description: string; rows: { platform: string; cost: string }[] };
  };
  migration: { week: string; action: string }[];
  whoSwitches: { title: string; text: string }[];
  faq: AlternativeFAQ[];
  internalLinks: { label: string; href: string }[];
}

export const alternatives: Alternative[] = [
  /* ─── HireVue Alternative ──────────────────────────────── */
  {
    slug: 'hirevue',
    competitor: 'HireVue',
    meta: {
      title: 'Best HireVue Alternative for India | LayersRank',
      description:
        'Looking for a HireVue alternative? LayersRank offers confidence-weighted scoring, India data residency, and per-assessment pricing. No annual contracts.',
      keywords:
        'HireVue alternative, HireVue competitor, video interview software India, AI hiring platform alternative, HireVue replacement',
    },
    hero: {
      eyebrow: 'HIREVUE ALTERNATIVE',
      headline: "Everything You Need from HireVue. None of What You Don't.",
      subhead:
        'LayersRank delivers structured video interviews with AI evaluation \u2014 without the enterprise pricing, US-centric design, or black-box scoring.',
      primaryCta: 'Start Free Trial',
      secondaryCta: 'See How We Compare',
    },
    whySwitch: {
      intro:
        "HireVue pioneered video interviewing. But for many teams \u2014 especially those outside the US Fortune 500 \u2014 it\u2019s become the wrong tool:",
      reasons: [
        { title: "Pricing that doesn\u2019t scale down", text: "HireVue\u2019s enterprise contracts start at $35,000+ annually. If you\u2019re hiring 50-200 people per year, you\u2019re paying for capacity you\u2019ll never use." },
        { title: 'US-centric design', text: 'Evaluation models trained primarily on US candidates. Cultural communication patterns from India, Southeast Asia, or the Middle East may be misparsed.' },
        { title: 'Black-box scoring', text: "A number comes out. You don\u2019t know why. Can\u2019t explain it to candidates. Can\u2019t defend it in audits. Can\u2019t improve your process based on it." },
        { title: 'No confidence indicators', text: 'HireVue gives you a score. LayersRank gives you a score plus how confident we are in that score. Big difference when making hiring decisions.' },
      ],
    },
    comparison: [
      { feature: 'Video interviews', them: 'Yes', us: 'Yes' },
      { feature: 'AI evaluation', them: 'Yes', us: 'Yes' },
      { feature: 'Confidence scoring', them: 'No', us: 'Yes \u2014 every score has confidence interval' },
      { feature: 'Adaptive follow-up', them: 'No', us: 'Yes \u2014 AI asks clarifying questions' },
      { feature: 'Behavioral + technical', them: 'Limited', us: 'Full support for both' },
      { feature: 'India data residency', them: 'No', us: 'Yes (Mumbai)' },
      { feature: 'Explainable scores', them: 'Limited', us: 'Full breakdown by dimension' },
      { feature: 'Pricing model', them: 'Annual contract', us: 'Per assessment' },
      { feature: 'Starting price', them: '~$35,000/year', us: '\u20B92,500/assessment' },
      { feature: 'Free trial', them: 'Demo only', us: '5 free assessments' },
      { feature: 'Minimum commitment', them: '12 months', us: 'None' },
    ],
    whatYouGet: [
      { title: 'Confidence-Weighted Scoring', text: 'HireVue says \u201Cthis candidate scored 72.\u201D LayersRank says \u201Cthis candidate scored 72 \u00B1 4 with 89% confidence.\u201D You know exactly how much to trust the score \u2014 and when to dig deeper.' },
      { title: 'Adaptive Follow-Up', text: "When a candidate\u2019s answer is ambiguous, LayersRank doesn\u2019t guess. It asks a follow-up question to clarify. This reduces false positives and false negatives." },
      { title: 'Transparent Evaluation', text: 'Every LayersRank score breaks down into dimensions: Technical, Behavioral, Contextual. You see why the score is what it is. No black boxes.' },
      { title: 'India-First Design', text: "Data residency in Mumbai. Evaluation models trained on Indian candidates. Pricing in INR. Support in your timezone." },
    ],
    pricingComparison: {
      them: {
        label: 'HireVue',
        bullets: [
          'Starting at ~$35,000/year (~\u20B929 lakh)',
          'Annual contract required',
          'Enterprise sales process',
          'Per-seat or unlimited models',
        ],
      },
      us: {
        label: 'LayersRank',
        bullets: [
          '\u20B92,500/assessment (Starter)',
          '\u20B91,600-2,000/assessment (Growth)',
          'No annual contract',
          'Pay for what you use',
        ],
      },
      example: {
        description: '200 hires/year, 5 assessments per hire = 1,000 assessments',
        rows: [
          { platform: 'HireVue', cost: '\u20B929-40 lakh' },
          { platform: 'LayersRank', cost: '\u20B916-20 lakh' },
          { platform: 'Savings', cost: '\u20B99-24 lakh' },
        ],
      },
    },
    migration: [
      { week: 'Week 1', action: 'Set up LayersRank account, configure roles' },
      { week: 'Week 2', action: 'Run parallel with HireVue on a few candidates' },
      { week: 'Week 3', action: 'Compare results, adjust thresholds' },
      { week: 'Week 4', action: 'Full cutover' },
    ],
    whoSwitches: [
      { title: 'GCCs tired of US pricing for India hiring', text: "HireVue\u2019s enterprise model doesn\u2019t fit India\u2019s cost structure. LayersRank does." },
      { title: "Startups who outgrew HireVue\u2019s SMB offering", text: "Need real AI evaluation, not just video recording. But don\u2019t need enterprise contracts." },
      { title: 'Teams who need explainability', text: 'For compliance, for stakeholder buy-in, or just for better decisions.' },
      { title: 'Anyone paying for unused capacity', text: "If your HireVue contract covers 10,000 assessments and you use 500, you\u2019re overpaying by 95%." },
    ],
    faq: [
      { q: 'Is LayersRank as accurate as HireVue?', a: 'Our evaluation models show 0.83 correlation with expert human evaluation \u2014 comparable to or better than published benchmarks. More importantly, our confidence scoring tells you when to trust the score and when to verify.' },
      { q: 'Can I use my existing HireVue questions?', a: "Yes. You can import questions or we\u2019ll help you recreate them. Our question framework may suggest improvements based on what we\u2019ve learned works." },
      { q: "What about HireVue\u2019s game-based assessments?", a: "We don\u2019t offer game-based assessments. Research on their validity is mixed. We focus on structured interviews with proven predictive validity." },
      { q: 'How long does migration take?', a: 'Most teams are fully migrated within 2-4 weeks. Complex enterprises with custom integrations may take 4-6 weeks.' },
      { q: 'What if I have an existing HireVue contract?', a: "Start your LayersRank trial now. Run parallel until your contract ends. We\u2019ll be ready when you are." },
    ],
    internalLinks: [
      { label: 'Full Comparison: LayersRank vs HireVue', href: '/compare/hirevue' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'How Confidence Scoring Works', href: '/product/confidence-scoring' },
      { label: 'GCC Solutions', href: '/solutions/gcc' },
    ],
  },

  /* ─── HackerRank Alternative ───────────────────────────── */
  {
    slug: 'hackerrank',
    competitor: 'HackerRank',
    meta: {
      title: 'HackerRank Alternative for Complete Candidate Evaluation | LayersRank',
      description:
        'HackerRank tests coding. LayersRank evaluates engineers. Go beyond algorithmic tests to assess system design, behavioral fit, and engineering judgment.',
      keywords:
        'HackerRank alternative, HackerRank competitor, coding assessment alternative, technical hiring platform, HackerRank replacement',
    },
    hero: {
      eyebrow: 'HACKERRANK ALTERNATIVE',
      headline: "Coding Tests Tell You If They Can Code. Not If They Can Engineer.",
      subhead:
        'HackerRank tests algorithms. LayersRank evaluates the complete engineer \u2014 technical judgment, behavioral fit, and collaboration skills with confidence-weighted scoring.',
      primaryCta: 'Start Free Trial',
      secondaryCta: 'See How We Compare',
    },
    whySwitch: {
      intro:
        "HackerRank is great at what it does: testing coding ability. But coding ability is only one dimension of engineering competence:",
      reasons: [
        { title: 'Algorithms \u2260 engineering', text: "A developer who aces LeetCode might struggle with system design, code reviews, or working in a team. Algorithmic skill doesn\u2019t predict job performance." },
        { title: 'No behavioral assessment', text: "HackerRank can\u2019t tell you if a candidate communicates well, handles feedback, or collaborates with cross-functional teams." },
        { title: 'Binary pass/fail', text: 'Code either compiles and passes test cases, or it doesn\u2019t. There\u2019s no nuance, no partial credit for good thinking with a syntax error.' },
        { title: 'No confidence scoring', text: "A HackerRank score of 80 tells you they solved 80% of problems. It doesn\u2019t tell you how confident you should be in that signal." },
      ],
    },
    comparison: [
      { feature: 'Algorithmic coding tests', them: 'Yes \u2014 core strength', us: 'No \u2014 different approach' },
      { feature: 'System design assessment', them: 'Limited', us: 'Yes \u2014 structured evaluation' },
      { feature: 'Technical judgment', them: 'No', us: 'Yes \u2014 trade-off reasoning, debugging' },
      { feature: 'Behavioral assessment', them: 'No', us: 'Yes \u2014 collaboration, communication' },
      { feature: 'Confidence scoring', them: 'No', us: 'Yes \u2014 score + confidence interval' },
      { feature: 'Adaptive follow-up', them: 'No', us: 'Yes \u2014 clarifying questions on ambiguity' },
      { feature: 'Cheating detection', them: 'Plagiarism detection', us: 'Integrity scoring + consistency analysis' },
      { feature: 'Starting price', them: '$100/month', us: '\u20B92,500/assessment' },
    ],
    whatYouGet: [
      { title: 'Complete Engineer Evaluation', text: 'LayersRank assesses the full picture: technical judgment (system design, debugging, trade-offs), behavioral skills (communication, collaboration), and contextual fit (growth, domain interest).' },
      { title: 'Different Tools for Different Jobs', text: 'Use HackerRank when you need to filter 1,000 applicants on basic coding ability. Use LayersRank when you need to evaluate the top 50 on engineering judgment and team fit.' },
      { title: 'Confidence-Weighted Scoring', text: "HackerRank gives you a score. LayersRank gives you a score with confidence levels, so you know when to trust the signal and when to dig deeper." },
      { title: 'Beyond LeetCode Grinders', text: 'Some of the best engineers are bad at timed algorithmic puzzles. LayersRank evaluates how they think, not how fast they code under pressure.' },
    ],
    pricingComparison: {
      them: {
        label: 'HackerRank',
        bullets: [
          'Free tier (limited)',
          'Pro: $100/month',
          'Business: $450/month',
          'Enterprise: Custom',
        ],
      },
      us: {
        label: 'LayersRank',
        bullets: [
          '\u20B92,500/assessment (Starter)',
          '\u20B91,800/assessment (Growth)',
          'Enterprise: Custom',
          'Pay per assessment, no monthly commitment',
        ],
      },
    },
    migration: [
      { week: 'Week 1', action: 'Set up LayersRank, configure role-specific assessments' },
      { week: 'Week 2', action: 'Run LayersRank alongside HackerRank for evaluation comparison' },
      { week: 'Week 3', action: 'Compare signal quality and candidate feedback' },
      { week: 'Week 4', action: 'Decide: replace HackerRank or use both in your pipeline' },
    ],
    whoSwitches: [
      { title: 'Teams tired of LeetCode grinders', text: 'Candidates who memorize algorithms but can\u2019t design systems or work in teams.' },
      { title: 'Companies where behavioral fit matters', text: 'If your engineering culture depends on collaboration, HackerRank can\u2019t test for it.' },
      { title: 'Hiring managers who need to explain decisions', text: 'HackerRank gives you a number. LayersRank gives you an evidence trail.' },
      { title: 'Teams hiring senior engineers', text: 'Senior engineers need evaluation on judgment, not coding speed.' },
    ],
    faq: [
      { q: 'Should I stop using HackerRank entirely?', a: 'Not necessarily. HackerRank is useful for filtering large applicant pools on basic coding ability. LayersRank is better for evaluating the shortlist on complete engineering competence. Many teams use both.' },
      { q: 'Does LayersRank test coding ability?', a: 'LayersRank evaluates coding thinking (architecture, debugging, design decisions) rather than timed coding execution. We assess engineering judgment, not typing speed.' },
      { q: 'How does cheating detection work?', a: 'LayersRank uses integrity scoring that analyzes consistency across responses. It\u2019s harder to fake nuanced engineering judgment than to look up algorithm solutions.' },
      { q: 'Is this for non-technical roles too?', a: 'Yes. LayersRank evaluates product managers, engineering managers, and other roles where HackerRank wouldn\u2019t apply at all.' },
    ],
    internalLinks: [
      { label: 'Full Comparison: LayersRank vs HackerRank', href: '/compare/hackerrank' },
      { label: 'Technical Hiring Solutions', href: '/solutions/technical-hiring' },
      { label: 'How Confidence Scoring Works', href: '/product/confidence-scoring' },
      { label: 'Integrity Detection', href: '/product/integrity-detection' },
    ],
  },

  /* ─── Codility Alternative ─────────────────────────────── */
  {
    slug: 'codility',
    competitor: 'Codility',
    meta: {
      title: 'Codility Alternative for Complete Engineering Assessment | LayersRank',
      description:
        'Test coding speed or evaluate engineering talent. LayersRank goes beyond timed coding tests to assess system design, judgment, and team fit.',
      keywords:
        'Codility alternative, Codility competitor, technical assessment alternative, coding test alternative, Codility replacement',
    },
    hero: {
      eyebrow: 'CODILITY ALTERNATIVE',
      headline: 'Test Coding Speed or Evaluate Engineering Talent. Your Choice.',
      subhead:
        'Codility measures how fast candidates solve coding puzzles. LayersRank evaluates whether they can design systems, make trade-offs, and work in teams.',
      primaryCta: 'Start Free Trial',
      secondaryCta: 'See How We Compare',
    },
    whySwitch: {
      intro:
        'Codility does timed coding challenges well. But timed coding challenges have limits:',
      reasons: [
        { title: 'Speed \u2260 quality', text: "A developer who solves a problem in 15 minutes isn\u2019t necessarily better than one who takes 25 minutes but writes more maintainable code." },
        { title: 'Missing the bigger picture', text: 'Codility tests algorithms and data structures. It doesn\u2019t assess system design, debugging complex production issues, or technical communication.' },
        { title: 'No behavioral signal', text: "How a candidate collaborates, handles feedback, or communicates technical decisions is invisible in a coding test." },
        { title: 'Scores without context', text: "A Codility score doesn\u2019t tell you how confident you should be in the result, or what dimensions need further evaluation." },
      ],
    },
    comparison: [
      { feature: 'Timed coding challenges', them: 'Yes \u2014 core product', us: 'No \u2014 different approach' },
      { feature: 'System design assessment', them: 'No', us: 'Yes' },
      { feature: 'Technical judgment', them: 'Limited (code quality scoring)', us: 'Yes \u2014 trade-offs, debugging, architecture' },
      { feature: 'Behavioral assessment', them: 'No', us: 'Yes' },
      { feature: 'Confidence scoring', them: 'No', us: 'Yes' },
      { feature: 'Adaptive follow-up', them: 'No', us: 'Yes' },
      { feature: 'Starting price', them: '$5,000/year', us: '\u20B92,500/assessment' },
    ],
    whatYouGet: [
      { title: 'Engineering Judgment, Not Just Code', text: 'LayersRank evaluates how candidates think about trade-offs, design systems, debug issues, and communicate technical decisions \u2014 the things that predict real-world performance.' },
      { title: 'Know When to Use What', text: 'Keep Codility if you\u2019re screening massive volumes and need a coding gate. Switch to LayersRank when you\u2019re evaluating the shortlisted engineers on complete capability.' },
      { title: 'Confidence-Weighted Scoring', text: 'Every score includes a confidence interval. You know exactly how much to trust the assessment and where to probe further.' },
      { title: 'Engineers Who Are Bad at Timed Tests', text: 'Some excellent engineers struggle with timed coding puzzles. LayersRank evaluates thinking quality, not speed under pressure.' },
    ],
    pricingComparison: {
      them: {
        label: 'Codility',
        bullets: [
          'Starter: ~$5,000/year',
          'Business: ~$15,000/year',
          'Enterprise: Custom',
          'Annual contracts typical',
        ],
      },
      us: {
        label: 'LayersRank',
        bullets: [
          '\u20B92,500/assessment (Starter)',
          '\u20B91,800/assessment (Growth)',
          'Enterprise: Custom',
          'No annual commitment',
        ],
      },
    },
    migration: [
      { week: 'Week 1', action: 'Set up LayersRank, configure assessments for your roles' },
      { week: 'Week 2', action: 'Run parallel with Codility for a cohort of candidates' },
      { week: 'Week 3', action: 'Compare signal quality and hiring outcomes' },
      { week: 'Week 4', action: 'Decide: replace or complement Codility' },
    ],
    whoSwitches: [
      { title: 'Teams hiring for judgment-heavy roles', text: 'Senior engineers, architects, and tech leads need more than coding speed.' },
      { title: 'Companies frustrated with false positives', text: 'Candidates who ace coding tests but underperform in the actual role.' },
      { title: 'Hiring managers who need to explain decisions', text: 'Codility gives you a number. LayersRank gives you a full evaluation breakdown.' },
      { title: 'Teams that value engineering thinking', text: 'If you care about how engineers approach problems, not just whether they solve them.' },
    ],
    faq: [
      { q: 'Is LayersRank as technically rigorous as Codility?', a: 'Different kind of rigor. Codility tests coding execution. LayersRank tests engineering thinking. Both are rigorous \u2014 they measure different things.' },
      { q: 'How does cheating prevention work?', a: 'LayersRank uses integrity scoring that analyzes consistency across responses. Engineering judgment is harder to fake than coding solutions.' },
      { q: 'What about candidates who are great engineers but bad at timed tests?', a: "That\u2019s exactly who LayersRank is designed for. We evaluate thinking quality, not speed under artificial pressure." },
      { q: 'Can I use both Codility and LayersRank?', a: 'Yes. Many teams use Codility as a first-pass coding screen, then LayersRank for deeper evaluation of shortlisted candidates.' },
    ],
    internalLinks: [
      { label: 'How Confidence Scoring Works', href: '/product/confidence-scoring' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
    ],
  },

  /* ─── Mettl Alternative ────────────────────────────────── */
  {
    slug: 'mettl',
    competitor: 'Mettl',
    meta: {
      title: 'Mettl Alternative with Confidence Scoring | LayersRank',
      description:
        'Assessment without the guesswork. LayersRank replaces Mettl\u2019s dated UX and context-free scores with confidence-weighted evaluation and modern candidate experience.',
      keywords:
        'Mettl alternative, Mercer Mettl alternative, assessment platform India, Mettl competitor, Mettl replacement',
    },
    hero: {
      eyebrow: 'METTL ALTERNATIVE',
      headline: 'Assessment Without the Guesswork',
      subhead:
        'Mettl gives you scores. LayersRank gives you scores with confidence levels, explainable breakdowns, and a modern candidate experience.',
      primaryCta: 'Start Free Trial',
      secondaryCta: 'See How We Compare',
    },
    whySwitch: {
      intro:
        'Mettl (now Mercer Mettl) is a comprehensive assessment platform with broad capabilities. But teams often look beyond Mettl for specific reasons:',
      reasons: [
        { title: 'Dated UX', text: "Mettl\u2019s interface works, but it feels like enterprise software from 2015. Candidate experience matters for employer branding." },
        { title: 'Scores without context', text: "Mettl gives you a score. But what does 72 mean? How confident should you be? Where should you probe further? The score alone doesn\u2019t tell you." },
        { title: 'Configuration complexity', text: "Mettl\u2019s flexibility is also its weakness. Setting up assessments requires significant configuration, and the learning curve is steep." },
        { title: 'Assessment fatigue', text: "Long, multi-section assessments with poor UX lead to candidate drop-off, especially for in-demand engineers." },
      ],
    },
    comparison: [
      { feature: 'Assessment types', them: 'MCQ, coding, psychometric, cognitive, custom', us: 'Structured interviews (video, text, MCQ)' },
      { feature: 'AI evaluation', them: 'Basic scoring', us: 'Multi-model confidence-weighted scoring' },
      { feature: 'Confidence intervals', them: 'No', us: 'Yes \u2014 every score shows confidence' },
      { feature: 'Adaptive follow-up', them: 'No', us: 'Yes \u2014 clarifying questions on uncertainty' },
      { feature: 'Candidate UX', them: 'Functional but dated', us: 'Modern, mobile-first' },
      { feature: 'Setup time', them: 'Hours to days', us: 'Under 30 minutes' },
      { feature: 'Explainable scores', them: 'Limited', us: 'Full dimension breakdown' },
      { feature: 'India data residency', them: 'Yes', us: 'Yes (Mumbai)' },
      { feature: 'Pricing model', them: 'Per candidate + platform fee', us: 'Per assessment' },
    ],
    whatYouGet: [
      { title: 'The Confidence Difference', text: 'Mettl output: "Candidate scored 72 in technical skills." LayersRank output: "Candidate scored 72 \u00B1 4 in technical skills (89% confidence). Behavioral: 81 \u00B1 3 (94% confidence)." You see not just the score, but how much to trust it.' },
      { title: 'Modern Candidate Experience', text: 'In a market where top engineers have 5+ offers, assessment experience matters. LayersRank is designed to feel modern and respectful of candidate time.' },
      { title: 'Simpler Setup', text: "Mettl\u2019s power comes with complexity. LayersRank gets you from signup to first assessment in under 30 minutes with role-specific templates." },
      { title: 'Focused on What Matters', text: "LayersRank doesn\u2019t try to be everything. We focus on structured interview evaluation with AI \u2014 and do it exceptionally well." },
    ],
    pricingComparison: {
      them: {
        label: 'Mettl',
        bullets: [
          'Platform fee + per-candidate pricing',
          'Volume-based discounts',
          'Annual contracts typical',
          'Multiple products = multiple costs',
        ],
      },
      us: {
        label: 'LayersRank',
        bullets: [
          '\u20B92,500/assessment (Starter)',
          '\u20B91,800/assessment (Growth)',
          'Enterprise: Custom',
          'All features included in every plan',
        ],
      },
    },
    migration: [
      { week: 'Week 1', action: 'Set up LayersRank, map existing Mettl assessments to templates' },
      { week: 'Week 2', action: 'Run parallel on a cohort of candidates' },
      { week: 'Week 3', action: 'Compare evaluation quality and candidate experience feedback' },
      { week: 'Week 4', action: 'Full transition for applicable use cases' },
    ],
    whoSwitches: [
      { title: 'HR leaders frustrated with complexity', text: "Mettl is powerful but complex. If you spend more time configuring than evaluating, something\u2019s wrong." },
      { title: 'Talent teams focused on candidate experience', text: 'Modern candidates expect modern tools. A dated assessment platform hurts your employer brand.' },
      { title: 'Teams that need explainable decisions', text: 'Compliance requirements, stakeholder buy-in, and process improvement all need more than a number.' },
      { title: 'GCCs standardizing their hiring process', text: "LayersRank\u2019s structured approach works across roles and locations with less configuration." },
    ],
    faq: [
      { q: 'Is LayersRank as comprehensive as Mettl?', a: 'Mettl offers more assessment types (psychometric, cognitive, domain tests). LayersRank focuses specifically on structured interview evaluation with AI. We do one thing and do it well.' },
      { q: 'Can we migrate our existing Mettl questions?', a: "You can recreate your interview questions in LayersRank. We\u2019ll help you map them to our structured format." },
      { q: 'What about Mettl\u2019s proctoring features?', a: 'LayersRank uses integrity scoring instead of traditional proctoring. We analyze response consistency rather than monitoring via webcam.' },
      { q: 'Does LayersRank offer psychometric assessments?', a: 'No. We focus on structured interviews with AI evaluation. For psychometric needs, you may want to keep Mettl or use a specialized tool alongside LayersRank.' },
    ],
    internalLinks: [
      { label: 'How Confidence Scoring Works', href: '/product/confidence-scoring' },
      { label: 'Candidate Experience', href: '/product' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'GCC Solutions', href: '/solutions/gcc' },
    ],
  },

  /* ─── TestGorilla Alternative ──────────────────────────── */
  {
    slug: 'testgorilla',
    competitor: 'TestGorilla',
    meta: {
      title: 'TestGorilla Alternative for Technical Hiring | LayersRank',
      description:
        'TestGorilla tests skills. LayersRank evaluates people. Go beyond skills tests to assess judgment, collaboration, and contextual fit with confidence scoring.',
      keywords:
        'TestGorilla alternative, TestGorilla competitor, skills assessment alternative, pre-employment testing alternative, TestGorilla replacement',
    },
    hero: {
      eyebrow: 'TESTGORILLA ALTERNATIVE',
      headline: "Skills Tests Show What They Know. Not How They Work.",
      subhead:
        "TestGorilla\u2019s skills tests tell you if candidates have knowledge. LayersRank tells you if they can apply it \u2014 with confidence-weighted scoring and behavioral evaluation.",
      primaryCta: 'Start Free Trial',
      secondaryCta: 'See How We Compare',
    },
    whySwitch: {
      intro:
        "TestGorilla offers a library of skills tests: cognitive ability, software skills, language proficiency, personality, and role-specific knowledge. It\u2019s a solid screening tool. But screening has limits:",
      reasons: [
        { title: 'Knowledge \u2260 application', text: "Knowing Python syntax doesn\u2019t mean they can design a Python application. Skills tests measure knowledge, not judgment." },
        { title: 'No adaptive depth', text: "TestGorilla gives every candidate the same questions. There\u2019s no follow-up when answers are ambiguous or interesting." },
        { title: 'Scores without confidence', text: "A TestGorilla score of 80% means they got 80% right. It doesn\u2019t tell you how confident you should be in the signal." },
        { title: 'Generic, not role-specific', text: "TestGorilla\u2019s test library covers broad skills. It doesn\u2019t evaluate the specific judgment calls your role requires." },
      ],
    },
    comparison: [
      { feature: 'Assessment approach', them: 'Pre-built skills test library', us: 'Structured AI interview' },
      { feature: 'Test customization', them: 'Choose from test library', us: 'Role-specific templates, fully customizable' },
      { feature: 'Adaptive questioning', them: 'No \u2014 static tests', us: 'Yes \u2014 AI follows up on ambiguity' },
      { feature: 'Behavioral assessment', them: 'Personality tests', us: 'Structured behavioral interview' },
      { feature: 'Confidence scoring', them: 'No', us: 'Yes' },
      { feature: 'Technical judgment', them: 'Knowledge-based', us: 'Judgment and application-based' },
      { feature: 'Candidate experience', them: 'Test-taking', us: 'Conversational interview' },
      { feature: 'Starting price', them: '$75/month', us: '\u20B92,500/assessment' },
    ],
    whatYouGet: [
      { title: 'From Knowledge to Judgment', text: "TestGorilla tells you if they know React hooks. LayersRank tells you if they can design a component architecture, debug performance issues, and collaborate with designers." },
      { title: 'The Behavioral Assessment Gap', text: "TestGorilla offers personality tests (Big Five, DISC). Research shows personality tests have low predictive validity for job performance. Structured behavioral interviews are 2-3x more predictive." },
      { title: 'When to Use What', text: "Use TestGorilla for high-volume initial screening where you need to filter 1,000 applicants quickly. Use LayersRank for evaluating the 50-200 candidates who make it past initial screening." },
      { title: 'Confidence-Weighted Scoring', text: "Every LayersRank score includes a confidence interval. You know when the signal is strong and when you need more information." },
    ],
    pricingComparison: {
      them: {
        label: 'TestGorilla',
        bullets: [
          'Free: 5 tests/month',
          'Starter: $75/month',
          'Pro: $115/month',
          'Business: Custom',
        ],
      },
      us: {
        label: 'LayersRank',
        bullets: [
          '\u20B92,500/assessment (Starter)',
          '\u20B91,800/assessment (Growth)',
          'Enterprise: Custom',
          '5 free assessments to start',
        ],
      },
    },
    migration: [
      { week: 'Week 1', action: 'Set up LayersRank, create role-specific assessment templates' },
      { week: 'Week 2', action: 'Run LayersRank for candidates who pass TestGorilla screening' },
      { week: 'Week 3', action: 'Evaluate signal quality and decision confidence improvement' },
      { week: 'Week 4', action: 'Decide: complement or replace TestGorilla' },
    ],
    whoSwitches: [
      { title: 'Teams hiring for judgment-heavy roles', text: 'Product managers, senior engineers, engineering managers \u2014 roles where knowledge tests fall short.' },
      { title: 'Companies frustrated with false positives', text: "Candidates who score well on skills tests but underperform in the role, because knowledge didn\u2019t translate to application." },
      { title: 'Hiring managers who need to explain decisions', text: "TestGorilla gives you percentages. LayersRank gives you a narrative with evidence." },
      { title: 'Teams using TestGorilla for technical roles', text: "If you\u2019re evaluating engineers, the structured interview approach gives you much richer signal than skills tests." },
    ],
    faq: [
      { q: 'Should I replace TestGorilla entirely?', a: 'Not necessarily. TestGorilla is useful for high-volume screening. LayersRank is better for in-depth evaluation. Many teams use TestGorilla early in the funnel and LayersRank for shortlisted candidates.' },
      { q: 'Does LayersRank offer cognitive ability tests?', a: "No. We focus on structured interview evaluation. Cognitive ability tests are available through TestGorilla and other platforms if you need them." },
      { q: 'Can I use both platforms together?', a: 'Yes. Use TestGorilla for initial screening (knowledge, basic skills) and LayersRank for deeper evaluation (judgment, behavior, fit).' },
      { q: 'What about TestGorilla\u2019s large test library?', a: "TestGorilla has 400+ tests. LayersRank has role-specific assessment templates that are deeply customizable. Breadth vs. depth \u2014 choose based on your needs." },
    ],
    internalLinks: [
      { label: 'How Confidence Scoring Works', href: '/product/confidence-scoring' },
      { label: 'Structured Interviews', href: '/product/structured-interviews' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Question Bank', href: '/resources/question-bank' },
    ],
  },
];

export function getAlternative(slug: string): Alternative | undefined {
  return alternatives.find((a) => a.slug === slug);
}

export function getAllAlternativeSlugs(): string[] {
  return alternatives.map((a) => a.slug);
}
