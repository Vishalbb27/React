import "./App.css";
import React from "react";
import Home from "./components/pages/Home";
import PokemonState from "./context/pokemon/PokemonState";
import Pokemon from "./components/pokemon/Pokemon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <PokemonState>
      <Router>
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </React.Fragment>
      </Router>
    </PokemonState>
  );
}

export default App;
