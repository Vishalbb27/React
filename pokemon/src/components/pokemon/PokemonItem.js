import React, { Component } from "react";
import PropTypes from "prop-types";
import PokemonContext from "../../context/pokemon/pokemonContext";

const PokemonItem = ({ pokemon: { name, url } }) => {
  const pokemonContext = React.useContext(PokemonContext);
  const { clear } = pokemonContext;

  const [pokemon, setPokemon] = React.useState(null);
  React.useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPokemon(data);
    };
    getPokemon();
  }, [url]);

  const { sprites } = pokemon || {};
  const { front_default } = sprites || {};

  const handleClick = () => {
    const data = name;
    window.location.href = `/pokemon?data=${data}`;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          { (
            <div className="pokemon-card">
              <img src={front_default} alt={name} />
              <h2>{name}</h2>
              <a href="#" className="btn btn-primary" onClick={handleClick}>
                More Info
              </a>
            </div>
          ) }
        </div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonItem;
