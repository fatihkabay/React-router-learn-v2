import { Link } from "react-router-dom"

function NorthAmerica() {
    return (
      <div className="page">
        <h1>Welcome NorthAmerica Page</h1>
        <p>
          North America is a continent located in the northern hemisphere,
          surrounded by the
          <a href="https://tr.wikipedia.org/wiki/Arktik_Okyanusu">Arctic Ocean</a>
          to the north, the
          <a href="https://tr.wikipedia.org/wiki/Atlas_Okyanusu">
            Atlantic Ocean
          </a>
          to the east, the
          <a href="https://tr.wikipedia.org/wiki/Karayip_Denizi">Caribbean Sea</a>
          to the south, and the
          <a href="https://tr.wikipedia.org/wiki/B%C3%BCy%C3%BCk_Okyanus">
            Pacific Ocean
          </a>
          to the northwest.
        </p>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    );
  }

  export default NorthAmerica