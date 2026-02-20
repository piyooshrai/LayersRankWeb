function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-gray-400">
          app.layersrank.com
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-xs text-gray-500">{label}</span>
      <div className="flex-1 rounded-full bg-gray-100 h-2">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <span className="font-mono text-xs font-bold text-gray-700 w-8 text-right">{score}</span>
    </div>
  );
}

function CandidateReportMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <p className="text-xs text-gray-400">Candidate Report</p>
            <p className="text-lg font-bold text-gray-900">Priya Sharma — Senior Backend Engineer</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-extrabold text-amber-500">82</p>
            <p className="text-xs text-gray-400">91% confidence</p>
          </div>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-xs font-semibold text-gray-500">Technical</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">85 <span className="text-xs font-normal text-gray-400">&plusmn; 3</span></p>
            <div className="mt-3 space-y-2">
              <ScoreBar label="System Design" score={88} color="bg-green-400" />
              <ScoreBar label="Algorithm" score={78} color="bg-amber-400" />
              <ScoreBar label="Code Review" score={84} color="bg-green-400" />
            </div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-xs font-semibold text-gray-500">Behavioral</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">79 <span className="text-xs font-normal text-gray-400">&plusmn; 5</span></p>
            <div className="mt-3 space-y-2">
              <ScoreBar label="Collaboration" score={82} color="bg-green-400" />
              <ScoreBar label="Communication" score={75} color="bg-amber-400" />
              <ScoreBar label="Feedback" score={80} color="bg-green-400" />
            </div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-xs font-semibold text-gray-500">Contextual</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">83 <span className="text-xs font-normal text-gray-400">&plusmn; 4</span></p>
            <div className="mt-3 space-y-2">
              <ScoreBar label="Role Fit" score={86} color="bg-green-400" />
              <ScoreBar label="Motivation" score={80} color="bg-green-400" />
              <ScoreBar label="Trajectory" score={78} color="bg-amber-400" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Advance to Final Round</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">Models agree: 4/4</span>
        </div>
      </div>
    </BrowserChrome>
  );
}

function ConfidenceScoringMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <p className="text-xs text-gray-400">Confidence-Weighted Scoring</p>
        <p className="text-lg font-bold text-gray-900">Candidate Comparison — Backend Engineer (Senior)</p>
        <div className="mt-4 overflow-hidden rounded-lg border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500">
                <th className="px-4 py-2.5 font-medium">Candidate</th>
                <th className="px-4 py-2.5 font-medium text-center">Score</th>
                <th className="px-4 py-2.5 font-medium text-center">Confidence</th>
                <th className="px-4 py-2.5 font-medium text-center">Interval</th>
                <th className="px-4 py-2.5 font-medium text-center">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Priya S.', score: 82, conf: '91%', interval: '± 3', verdict: 'Advance', vColor: 'text-green-600 bg-green-50' },
                { name: 'Arjun M.', score: 78, conf: '84%', interval: '± 6', verdict: 'Advance', vColor: 'text-green-600 bg-green-50' },
                { name: 'Kavitha R.', score: 74, conf: '72%', interval: '± 9', verdict: 'Review', vColor: 'text-amber-600 bg-amber-50' },
                { name: 'Rahul D.', score: 61, conf: '88%', interval: '± 4', verdict: 'Decline', vColor: 'text-red-600 bg-red-50' },
              ].map((c) => (
                <tr key={c.name} className="border-t border-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{c.name}</td>
                  <td className="px-4 py-3 text-center font-mono font-bold text-gray-900">{c.score}</td>
                  <td className="px-4 py-3 text-center font-mono text-gray-600">{c.conf}</td>
                  <td className="px-4 py-3 text-center font-mono text-gray-400">{c.interval}</td>
                  <td className="px-4 py-3 text-center"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.vColor}`}>{c.verdict}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-400">Kavitha flagged for review — model disagreement on system design question (R = 0.31)</p>
      </div>
    </BrowserChrome>
  );
}

function InterviewInterfaceMockup() {
  return (
    <BrowserChrome>
      <div className="grid md:grid-cols-2">
        <div className="border-r border-gray-100 p-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-xs font-semibold text-gray-500">Recording — Question 3 of 8</p>
          </div>
          <div className="mt-4 aspect-video rounded-lg bg-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center">
                <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" /></svg>
              </div>
              <p className="mt-2 text-xs text-gray-500">Candidate video feed</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 flex-1 rounded-full bg-gray-200"><div className="h-1.5 w-1/3 rounded-full bg-amber-400" /></div>
            <span className="font-mono text-xs text-gray-400">1:24 / 4:00</span>
          </div>
        </div>
        <div className="p-6">
          <p className="text-xs font-semibold text-amber-500">System Design — Video Response</p>
          <p className="mt-2 text-sm font-medium text-gray-900">
            &ldquo;Walk through how you&apos;d design a notification service handling 10 million daily users.&rdquo;
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-3">
            <p className="text-xs text-amber-700">Tip: Consider different notification types, delivery guarantees, and scale requirements.</p>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Q1: Problem Decomposition — Complete
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Q2: Debugging Scenario — Complete
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500">
              <div className="h-3.5 w-3.5 rounded-full border-2 border-amber-400" />
              Q3: System Design — In Progress
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <div className="h-3.5 w-3.5 rounded-full border border-gray-200" />
              Q4: Technical Trade-offs
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function MobileInterviewMockup() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="overflow-hidden rounded-[2rem] border-4 border-gray-800 bg-white shadow-2xl">
        <div className="bg-gray-800 px-6 py-2 text-center">
          <div className="mx-auto h-4 w-20 rounded-full bg-gray-700" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-500">Question 5 of 8</p>
            <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-600">Text</span>
          </div>
          <p className="mt-3 text-sm font-medium text-gray-900">
            &ldquo;Explain eventual consistency to a non-technical stakeholder.&rdquo;
          </p>
          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs text-gray-500">Type your answer...</p>
            <div className="mt-2 space-y-1">
              <div className="h-2 w-full rounded bg-gray-200" />
              <div className="h-2 w-4/5 rounded bg-gray-200" />
              <div className="h-2 w-3/5 rounded bg-gray-200" />
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="flex-1 rounded-lg bg-amber-400 py-2 text-center text-xs font-semibold text-gray-900">Submit</div>
            <div className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-400">Skip</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionBankMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900">Question Library</p>
            <p className="text-xs text-gray-400">1,247 questions across 12 categories</p>
          </div>
          <div className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-400">Search questions...</div>
        </div>
        <div className="mt-4 flex gap-2">
          {['All', 'System Design', 'Behavioral', 'Technical', 'Contextual'].map((t) => (
            <span key={t} className={`rounded-full px-3 py-1 text-xs ${t === 'System Design' ? 'bg-amber-400 font-semibold text-gray-900' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          {[
            { q: 'Design a rate limiting service for 100K rps', type: 'Video', diff: '8/10', cat: 'System Design' },
            { q: 'Walk through your approach to a production outage', type: 'Video', diff: '7/10', cat: 'System Design' },
            { q: 'Compare microservices vs monolith for an early-stage startup', type: 'Text', diff: '6/10', cat: 'System Design' },
            { q: 'Design a notification system for 10M daily users', type: 'Video', diff: '8/10', cat: 'System Design' },
          ].map((item) => (
            <div key={item.q} className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{item.q}</p>
                <div className="mt-1 flex gap-2">
                  <span className="text-xs text-gray-400">{item.cat}</span>
                  <span className="text-xs text-gray-300">|</span>
                  <span className="text-xs text-gray-400">{item.type}</span>
                </div>
              </div>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">{item.diff}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function IntegrationFlowMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <p className="text-center text-lg font-bold text-gray-900">ATS Integration Flow</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-center">
            <p className="text-xs font-semibold text-gray-500">Your ATS</p>
            <p className="mt-0.5 text-sm font-bold text-gray-900">Greenhouse</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="h-4 w-8 text-amber-400" fill="none" viewBox="0 0 32 16"><path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
            <p className="text-[10px] text-gray-400">Push candidate</p>
          </div>
          <div className="rounded-lg border-2 border-amber-300 bg-amber-50 px-4 py-3 text-center">
            <p className="text-xs font-semibold text-amber-600">LayersRank</p>
            <p className="mt-0.5 text-sm font-bold text-gray-900">Evaluate</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="h-4 w-8 text-green-400" fill="none" viewBox="0 0 32 16"><path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
            <p className="text-[10px] text-gray-400">Return report</p>
          </div>
          <div className="rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-center">
            <p className="text-xs font-semibold text-gray-500">Your ATS</p>
            <p className="mt-0.5 text-sm font-bold text-gray-900">Decision</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-3">
          {[
            { name: 'Greenhouse', status: 'Live' },
            { name: 'Lever', status: 'Live' },
            { name: 'Workday', status: 'Live' },
            { name: 'SAP SF', status: 'Live' },
          ].map((i) => (
            <div key={i.name} className="rounded-lg border border-gray-100 bg-gray-50 p-3 text-center">
              <p className="text-sm font-semibold text-gray-700">{i.name}</p>
              <span className="mt-1 inline-block rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-600">{i.status}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function AdaptiveQuestioningMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <p className="text-xs text-gray-400">Adaptive Follow-Up — Triggered by model disagreement</p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-xs font-semibold text-gray-500">Original Question</p>
            <p className="mt-1 text-sm text-gray-900">&ldquo;Explain the difference between optimistic and pessimistic locking.&rdquo;</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4">
            <p className="text-xs font-semibold text-blue-600">Candidate Response</p>
            <p className="mt-1 text-sm text-gray-700">&ldquo;Optimistic locking assumes conflicts are rare and checks at commit time. Pessimistic locking prevents conflicts by locking upfront...&rdquo;</p>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-white">!</div>
            <div>
              <p className="text-xs font-semibold text-amber-700">Model Disagreement Detected (R = 0.31)</p>
              <p className="text-xs text-amber-600">Semantic model scores high, reasoning model flags lack of depth</p>
            </div>
          </div>
          <div className="rounded-lg border-2 border-amber-300 bg-white p-4">
            <p className="text-xs font-semibold text-amber-500">Adaptive Follow-Up Generated</p>
            <p className="mt-1 text-sm font-medium text-gray-900">&ldquo;Can you describe a specific scenario where you chose one over the other, and what trade-offs you considered?&rdquo;</p>
          </div>
          <div className="flex gap-2 text-xs text-gray-400">
            <span className="rounded-full bg-green-50 px-2 py-0.5 text-green-600">After follow-up: R = 0.12</span>
            <span>Disagreement resolved</span>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function IntegrityDetectionMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Integrity Monitor</p>
            <p className="text-lg font-bold text-gray-900">Session Integrity — Candidate #4829</p>
          </div>
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">All Clear</span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { signal: 'Tab Focus', status: 'No switches detected', ok: true },
            { signal: 'Response Timing', status: 'Consistent with thinking', ok: true },
            { signal: 'Copy-Paste', status: 'No external paste events', ok: true },
            { signal: 'Answer Coherence', status: 'Style consistent across Qs', ok: true },
            { signal: 'Video Presence', status: 'Single person, on-camera', ok: true },
            { signal: 'AI Generation', status: 'No LLM patterns detected', ok: true },
          ].map((s) => (
            <div key={s.signal} className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${s.ok ? 'bg-green-50' : 'bg-red-50'}`}>
                <svg className={`h-4 w-4 ${s.ok ? 'text-green-500' : 'text-red-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700">{s.signal}</p>
                <p className="text-[10px] text-gray-400">{s.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function DashboardMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900">Hiring Dashboard</p>
            <p className="text-xs text-gray-400">Backend Engineer (Senior) — 12 candidates</p>
          </div>
          <div className="flex gap-2">
            <span className="rounded-lg bg-amber-400 px-3 py-1.5 text-xs font-semibold text-gray-900">+ New Interview</span>
            <span className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500">Export</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {[
            { label: 'Pending', count: 3, color: 'text-gray-600' },
            { label: 'In Progress', count: 4, color: 'text-amber-500' },
            { label: 'Scored', count: 8, color: 'text-green-600' },
            { label: 'Declined', count: 2, color: 'text-red-500' },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-gray-50 p-3 text-center">
              <p className={`text-2xl font-bold ${s.color}`}>{s.count}</p>
              <p className="text-xs text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500">
                <th className="px-4 py-2 font-medium">Candidate</th>
                <th className="px-4 py-2 font-medium text-center">Score</th>
                <th className="px-4 py-2 font-medium text-center">Conf.</th>
                <th className="px-4 py-2 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: 'Priya S.', s: 82, c: '91%', st: 'Advance', sc: 'text-green-600 bg-green-50' },
                { n: 'Arjun M.', s: 78, c: '84%', st: 'Advance', sc: 'text-green-600 bg-green-50' },
                { n: 'Kavitha R.', s: 74, c: '72%', st: 'Review', sc: 'text-amber-600 bg-amber-50' },
              ].map((r) => (
                <tr key={r.n} className="border-t border-gray-50">
                  <td className="px-4 py-2.5 font-medium text-gray-900">{r.n}</td>
                  <td className="px-4 py-2.5 text-center font-mono font-bold">{r.s}</td>
                  <td className="px-4 py-2.5 text-center font-mono text-gray-500">{r.c}</td>
                  <td className="px-4 py-2.5 text-center"><span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${r.sc}`}>{r.st}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserChrome>
  );
}

function PlatformFlowMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <p className="text-center text-lg font-bold text-gray-900">How LayersRank Works</p>
        <div className="mt-6 grid grid-cols-4 gap-2">
          {[
            { step: '1', title: 'Configure', desc: 'Set role, questions, weights', color: 'border-gray-300 bg-gray-50' },
            { step: '2', title: 'Invite', desc: 'Send candidate links', color: 'border-amber-300 bg-amber-50' },
            { step: '3', title: 'Evaluate', desc: 'AI scores with confidence', color: 'border-amber-400 bg-amber-100' },
            { step: '4', title: 'Decide', desc: 'Review ranked reports', color: 'border-green-300 bg-green-50' },
          ].map((s) => (
            <div key={s.step} className={`rounded-lg border-2 ${s.color} p-4 text-center`}>
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white font-mono text-sm font-bold text-gray-700">{s.step}</div>
              <p className="mt-2 text-sm font-bold text-gray-900">{s.title}</p>
              <p className="mt-0.5 text-xs text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg bg-gray-50 p-4">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-500">82</p>
              <p className="text-[10px] text-gray-400">Avg Score</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">91%</p>
              <p className="text-[10px] text-gray-400">Confidence</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-700">3/4</p>
              <p className="text-[10px] text-gray-400">Advance</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-700">24h</p>
              <p className="text-[10px] text-gray-400">Turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function DemoPreviewMockup() {
  return (
    <BrowserChrome>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 font-bold text-white">LR</div>
          <div>
            <p className="text-lg font-bold text-gray-900">LayersRank Platform</p>
            <p className="text-xs text-gray-400">Structured Hiring Intelligence</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg bg-amber-50 p-4">
            <p className="text-xs text-amber-600">Active Interviews</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">24</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4">
            <p className="text-xs text-green-600">Completed This Week</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">18</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-xs text-gray-500">Avg. Confidence</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">87%</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-gray-100 p-3">
          <p className="text-xs font-semibold text-gray-500">Recent Activity</p>
          <div className="mt-2 space-y-2">
            {[
              'Priya S. scored 82 (91% confidence) — Backend Engineer',
              'Arjun M. completed interview — Frontend Engineer',
              'New role configured: DevOps Lead',
            ].map((a) => (
              <p key={a} className="text-xs text-gray-600">• {a}</p>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

export type MockupType =
  | 'candidate-report'
  | 'confidence-scoring'
  | 'interview-interface'
  | 'mobile-interview'
  | 'question-bank'
  | 'integration-flow'
  | 'adaptive-questioning'
  | 'integrity-detection'
  | 'dashboard'
  | 'platform-flow'
  | 'demo-preview';

const mockups: Record<MockupType, () => JSX.Element> = {
  'candidate-report': CandidateReportMockup,
  'confidence-scoring': ConfidenceScoringMockup,
  'interview-interface': InterviewInterfaceMockup,
  'mobile-interview': MobileInterviewMockup,
  'question-bank': QuestionBankMockup,
  'integration-flow': IntegrationFlowMockup,
  'adaptive-questioning': AdaptiveQuestioningMockup,
  'integrity-detection': IntegrityDetectionMockup,
  'dashboard': DashboardMockup,
  'platform-flow': PlatformFlowMockup,
  'demo-preview': DemoPreviewMockup,
};

export function ProductMockup({ type }: { type: MockupType }) {
  const Component = mockups[type];
  return <Component />;
}
