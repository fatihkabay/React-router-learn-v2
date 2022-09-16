import Link from "react-router-dom"

function Antarctica() {
    return (
      <div className="page">
        <h1>Welcome Antarctica Page</h1>
        <p>
          Antarctica is the southernmost continent of the
          <a
            target="blank"
            href="https://tr.wikipedia.org/wiki/G%C3%BCney_yar%C4%B1mk%C3%BCre"
          >
            Southern Hemisphere
          </a>
          and includes the South Pole. It is the only continent south of Africa
          and Oceania that does not contain a country. It is the driest place in
          the world, some parts of the continent have not rained for 2 million
          years.
        </p>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    );
  }

  export default Antarctica