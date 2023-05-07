import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PokemonContext from "../../context/pokemon/pokemonContext";

const Pokemon = () => {
  const pokemonContext = useContext(PokemonContext);
  const { getPokemon, pokemon } = pokemonContext;
  const { name, height, weight, abilities, sprites, stats, types } = pokemon;
  const { front_default } = sprites || {};
<<<<<<< HEAD
  const { hp, attack, defense, speed } = stats || {};
  
=======

>>>>>>> 9543f33b9ef74af8e0ae694e0c0fc286d816c561
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const data = params.get("data");
    getPokemon(data);
    // eslint-disable-next-line
  }, []);
  console.log(pokemon);

  return (
    <Fragment>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-white border-bottom-0">
                <h1 className="text-center text-uppercase text-primary">
                  {name}
                </h1>
                <img
                  className="mx-auto d-block mt-3"
                  src={front_default}
                  alt={name}
                  style={{ width: "200px" }}
                />
<<<<<<< HEAD
                <h5 className="text-center my-3"><strong>TYPE :</strong>{
                  types && types.map((type) => (
                    <span > {type.type.name.toUpperCase()} </span>
                  ))
                }
                </h5>
                
=======

                <h5 className="text-center my-3">
                  <strong>TYPE :</strong>
                  {types &&
                    types.map((type) => (
                      <span> {type.type.name.toUpperCase()} </span>
                    ))}
                </h5>
>>>>>>> 9543f33b9ef74af8e0ae694e0c0fc286d816c561
              </div>
              <div className="card-body">
                <h3 className="card-title text-center text-uppercase mb-4">
                  Abilities
                </h3>
                <ul className="list-unstyled text-center">
                  {abilities &&
<<<<<<< HEAD
                    abilities.map((ability) => <li>{ability.ability.name.toUpperCase()}</li>)}
=======
                    abilities.map((ability) => (
                      <li>{ability.ability.name.toUpperCase()}</li>
                    ))}
>>>>>>> 9543f33b9ef74af8e0ae694e0c0fc286d816c561
                </ul>
                <h3 className="card-title text-center text-uppercase mt-4 mb-3">
                  Stats
                </h3>

                <div className="row">
                  {stats &&
                    stats.map((stat) => (
                      <div className="col-md-4">
                        <div>
                          <p className="text-center font-weight-bold">
                            {stat.stat.name.toUpperCase()}
                          </p>

                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped bg-success"
                              style={{ width: `${stat.base_stat}%` }}
                              role="progressbar"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {stat.base_stat}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <h3 className="card-title text-center text-uppercase mt-4 mb-3">
                  Physical Characteristics
                </h3>
                <ul className="list-unstyled text-center">
                  <li>
                    <strong>Height:</strong> {height} m (1'04")
                  </li>
                  <li>
                    <strong>Weight:</strong> {weight} kg (13.2 lbs)
                  </li>
                </ul>
              </div>
              <div className="card-footer bg-white border-top-0 text-center">
                <Link
                  to="/"
                  className="btn btn-lg btn-block btn-danger text-uppercase"
                >
                  Back to all Pokemon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pokemon;

{
  /* 



   */
}
