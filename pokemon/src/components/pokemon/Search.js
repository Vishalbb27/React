import PropTypes from "prop-types";
import { useState } from "react";
import { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  const pokemonContext = useContext(PokemonContext);
  const { searchPokemons, clearPokemons, clear } = pokemonContext;
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value); //this line can be used to set the state of multiple inputs
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter something");
    } else {
      searchPokemons(text);
      setText("");
    }
  };

  const clearSearch = () => {
    clearPokemons();
  };

  return (
    <div>
      <div class="container">
        <div class="row ">
          <div class="col ">
            <div class="search-box ">
              <form onSubmit={onSubmit} className="form">
                <input
                  id="search"
                  type="text"
                  name="text"
                  value={text}
                  onChange={onChange}
                  placeholder="Search Pokemon..."
                  class="form-control search-bar mb-4"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-dark btn-block"
                ></input>
                {clear && (
                  <button
                    onClick={clearSearch}
                    className="btn btn-light btn-block m-2"
                  >
                    CLEAR
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
