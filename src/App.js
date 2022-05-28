import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import PokeItem from "./components/PokeItem";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Settings from "./components/Settings";

function App() {
  return (
    <HashRouter>
      <div className="pokeball"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokeItem />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Link className="btn-settings" to="/settings">
        <i className="bx bxs-cog"></i>
      </Link>
    </HashRouter>
  );
}

export default App;
