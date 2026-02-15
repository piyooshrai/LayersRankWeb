export default function Post() {
  return (
    <>
      <h2>Why explainability is operational, not decorative</h2>
      <p>Explainable AI hiring is a risk-control requirement. Each rank must expose source evidence, transformation logic, and reviewer context.</p>
      <h3>Evidence stack</h3>
      <ol>
        <li>Source event: coding challenge score, rubric results, references.</li>
        <li>Normalization layer: role-specific scaling and calibration factors.</li>
        <li>Weighting layer: confidence-adjusted aggregation.</li>
        <li>Decision trace: shortlist rationale and approvals.</li>
      </ol>
      <p>For GCC teams, missing any one layer creates audit blind spots for HQ governance.</p>
      <p>Continue into the <a href="/science">Science deep dive</a> and the <a href="/solutions/gcc">GCC operating model</a>.</p>
    </>
  );
}
