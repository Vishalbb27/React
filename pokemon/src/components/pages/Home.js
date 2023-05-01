import React from "react";
import Pokemons from "../pokemon/Pokemons";
import Search from "../pokemon/Search";
const Home = () => {
  return (
    <div>
      <Search />
      <Pokemons />
    </div>
  );
};

export default Home;
