import { Link } from "react-router-dom"

function Asia() {
    return (
      <div className="page">
        <h1>Welcome Asia Page</h1>
        <p>
          Asia or the Continent of Asia, the continent located to the east of
          Europe, to the west of the
          <a href="https://tr.wikipedia.org/wiki/B%C3%BCy%C3%BCk_Okyanus">
            Pacific Ocean
          </a>
          , to the north of
          <a href="https://tr.wikipedia.org/wiki/Okyanusya"> Oceania </a> and to
          the south of the Arctic Ocean, is the largest continent in the world in
          terms of surface area, but also the most populated continent in terms of
          population. Although its borders vary, it has land borders with the
          continents of Europe and Africa. Together with Europe, it forms Eurasia,
          and together with the continents of Europe and Africa, it forms the Old
          World. Asia, the first continent that humanity set foot after leaving
          Africa, is also the origin of many religions in the world. Hebrew
          religions such as Islam and Christianity originating from the Middle
          East and Dharmatic religions such as Buddhism and Hinduism originating
          from the Indian Subcontinent are examples of this. The Asian Continent,
          stretching from the Arctic Circle to the Equator, contains many
          different landforms such as the Dead Sea, the lowest point on the earth,
          and Everest, the highest point.
        </p>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    );
  }

  export default Asia