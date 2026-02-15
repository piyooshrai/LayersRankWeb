export default function Post() {
  return (
    <>
      <h2>Calibration before AI</h2>
      <p>Model quality is bounded by input quality. Calibration reduces variance before automation.</p>
      <h3>Playbook</h3>
      <ol>
        <li>Define anchor behaviors.</li>
        <li>Run blind panel calibration.</li>
        <li>Monitor interviewer drift.</li>
        <li>Integrate confidence into decisions.</li>
        <li>Maintain audit artifacts.</li>
      </ol>
      <p>See the <a href="/science">Science deep dive</a> and <a href="/solutions/gcc">GCC implementation</a>.</p>
    </>
  );
}
