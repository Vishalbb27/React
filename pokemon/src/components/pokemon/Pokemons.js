import React, { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import PokemonItem from "./PokemonItem";

const Pokemons = () => {
  const pokemonContext = useContext(PokemonContext);
  const [page, setPage] = React.useState(1);
  const { getPokemons, pokemons, pokemon, totalPages, clear, getPokemon } =
    pokemonContext;

  React.useEffect(() => {
    getPokemons(page);
  }, [page, totalPages]);

  console.log(pokemons);
  console.log(pokemon);

  const getPageButtons = () => {
    let startPage = page - 5;
    if (startPage < 1) {
      startPage = 1;
    }
    let endPage = startPage + 9;
    if (endPage > totalPages) {
      endPage = totalPages;
    }

    const handlePageClick = (pageNumber) => {
      setPage(pageNumber);
    };
    const pageButtons = [];
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <li className="page-item">
          <button
            className="page-link"
            key={i}
            onClick={() => handlePageClick(i)}
            disabled={i === page}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageButtons;
  };

  return (
    <div>
      {!clear ? (
        pokemons.results &&
        pokemons.results.map((pokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))
      ) : (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      )}
      <div>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              {!clear && (
                <button
                  className="page-link"
                  disabled={page === 1}
                  id="previous"
                  onClick={() => setPage((page) => page - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              )}
            </li>
            {!clear && getPageButtons()}
            <li>
              {!clear && (
                <button
                  className="page-link"
                  disabled={page === totalPages && !clear}
                  id="next"
                  onClick={() => setPage((page) => page + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pokemons;
