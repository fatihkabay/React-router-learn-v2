import { Link } from "react-router-dom";

function Africa() {
  return (
    <div className="page">
      <h1>Welcome Africa Page</h1>
      <p>
        Africa is the world's second largest continent in terms of area and
        population density. It covers 6% of the world's surface area and 24.4%
        of the world's land area, with an area of 30.8 million square
        kilometers, together with the islands considered adjacent to it.
      </p>
      <Link className="link" to="/">
        Home
      </Link>
    </div>
  );
}

export default Africa;
