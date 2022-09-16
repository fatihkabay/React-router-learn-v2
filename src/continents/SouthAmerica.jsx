import { Link } from "react-router-dom"

function SouthAmerica() {
    return (
      <div className="page">
        <h1>Welcome SouthAmerica Page</h1>
        <p>
          South America is a continent located in the south of America. Although
          located in the Southern Hemisphere, a small part of its territory is
          located in the Northern Hemisphere.East of the Pacific Ocean, Atlas
          Ocean, south of North America and Antarctica is located in the north.
        </p>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    );
  }

  export default SouthAmerica