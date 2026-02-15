export default function Post() {
  return (
    <>
      <h2>Confidence-weighted ranking changes shortlist quality</h2>
      <p>Traditional ranking assumes equal certainty for every score. Confidence-weighted ranking models uncertainty directly.</p>
      <h3>Core components</h3>
      <ul>
        <li>Base score from fuzzy aggregation.</li>
        <li>Hesitation factor from conflicting evidence.</li>
        <li>Calibration-based confidence penalties.</li>
      </ul>
      <p>Read more on <a href="/science">TR-q-ROFN foundations</a> and <a href="/solutions/gcc">GCC use cases</a>.</p>
    </>
  );
}
