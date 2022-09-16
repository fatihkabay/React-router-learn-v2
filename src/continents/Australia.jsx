import { Link } from "react-router-dom"

function Australia() {
    return (
      <div className="page">
        <h1>Welcome Australia Page</h1>
        <p>
          Australia, or officially the Commonwealth of Australia, is a continental
          country located in the Southern Hemisphere. It lies between the
          <a href="https://tr.wikipedia.org/wiki/Hint_Okyanusu"> Indian Ocean </a>
          and the Pacific Ocean. It is located in the continent of Oceania and
          occupies a very large part of the continent. Its neighbors are
          Indonesia, East Timor, Papua New Guinea, the Solomon Islands, Vanuatu,
          New Caledonia and New Zealand. Its capital is Canberra and its largest
          city is <a href="https://tr.wikipedia.org/wiki/Sidney"> Sydney </a>.
        </p>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    );
  }

  export default Australia