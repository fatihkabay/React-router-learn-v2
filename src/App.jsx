import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Europa from "./continents/Europa";
import Africa from "./continents/Africa"
import Antarctica from "./continents/Antarctica"
import Asia from "./continents/Asia"
import NorthAmerica from "./continents/NorthAmerica"
import SouthAmerica from "./continents/SouthAmerica";
import Australia from "./continents/Australia"

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Europa" element={<Europa />}></Route>
        <Route path="/Africa" element={<Africa />}></Route>
        <Route path="/Antarctica" element={<Antarctica />}></Route>
        <Route path="/Asia" element={<Asia />}></Route>
        <Route path="/NorthAmerica" element={<NorthAmerica />}></Route>
        <Route path="/SouthAmerica" element={<SouthAmerica />}></Route>
        <Route path="/Australia" element={<Australia />}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="Home-page">
      <h1>Welcome Home Page</h1>
      <Link className="Link" to="/Europa">
        Europa
      </Link>
      <Link className="Link" to="/Africa">
        Africa
      </Link>
      <Link className="Link" to="/Antarctica">
      Antarctica
      </Link>
      <Link className="Link" to="/Asia">
      Asia
      </Link>
      <Link className="Link" to="NorthAmerica">
      NorthAmerica
      </Link>
      <Link className="Link" to="SouthAmerica">
      SouthAmerica
      </Link>
    </div>
  );
}

export default App;
