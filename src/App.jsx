import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Europa from "./continents/Europa";

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Europa" element={<Europa />}></Route>
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
    </div>
  );
}

export default App;
