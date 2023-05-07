import React, { Component } from "react";
import PropTypes from "prop-types";
import PokemonContext from "../../context/pokemon/pokemonContext";
import axios from "axios";

const PokemonItem = ({ pokemon: { name, url } }) => {
  const pokemonContext = React.useContext(PokemonContext);
  const { clear } = pokemonContext;

  const [pokemon, setPokemon] = React.useState(null);
  React.useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    };
    getPokemon();
  }, [url]);

  const { sprites, weight, height } = pokemon || {};
  const { front_default } = sprites || {};

  const handleClick = () => {
    const data = name;
    window.location.href = `/pokemon?data=${data}`;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {
            <div className="pokemon-card">
<<<<<<< HEAD
              <img src={front_default} alt={name} />
              <h2>{name.toUpperCase()}</h2>
              <a href="#" className="btn btn-primary" onClick={handleClick}>
                More Info
              </a>
=======
              <div className="row">
                <div className="col">
                  <img src={front_default} alt={name} />
                  <h2 id="name">{name.toUpperCase()}</h2>
                  <a href="#" className="btn btn-primary" onClick={handleClick}>
                    More Info
                  </a>
                </div>
                <div className="col-2">
                  <h5>Weight : {weight}kg</h5>
                  <h5>Height : {height}m</h5>
                </div>
              </div>
>>>>>>> 9543f33b9ef74af8e0ae694e0c0fc286d816c561
            </div>
          }
        </div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonItem;
