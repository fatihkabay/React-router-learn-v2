import { Link } from "react-router-dom";
function Europa() {
  return (
    <div className="Europa-page">
      <h1>Welcome Europa Page</h1>
      <p>
        The area of Europa is approximately 10.18 million square kilometers,
        making it the smallest makes the second continent. Geographically, it
        accounts for 39% of the continent's population.
        <a target="blank" href="https://tr.wikipedia.org/wiki/Rusya">
          Russia
        </a>
        is Europe's largest and most populous country, accounting for 15%. is
        his country. As of 2021, the total population of Europe is approximately
        745 is million.The currency of most European Union countries is the
        <a target="blank" href="https://tr.wikipedia.org/wiki/Euro">
          Euro
        </a>
        .
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}
export default Europa;
