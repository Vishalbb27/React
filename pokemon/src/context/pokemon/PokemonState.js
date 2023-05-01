import React, { useReducer } from "react";
import axios from "axios";
import PokemonContext from "./pokemonContext";
import PokemonReducer from "./pokemonReducer";

import {
  GET_POKEMON,
  GET_POKEMONS,
  SET_TOTAL_PAGES,
  SET_PAGE,
  SEARCH_POKEMON,
  CLEAR_POKEMONS
} from "../types";

const PokemonState = (props) => {
  const initialState = {
    pokemons: {},
    pokemon: {},
    totalPages: 0,
    clear : false,
  };
  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  //set page
  const setPageNext = () => {
    dispatch({
      type: SET_PAGE,
      payload: state.page + 1,
    });
  };

  const handlePageClick = (pageNumber) => {
    dispatch({ type: SET_PAGE, payload: pageNumber });
  };

  //search pokemons
  const searchPokemons = async (text) => {
    // setLoading();
    text = text.toLowerCase();
    console.log(text);

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
    
    dispatch({
      type: SEARCH_POKEMON,
      payload: res.data,
    });
  };

  const setPagePrevious = () => {
    dispatch({
      type: SET_PAGE,
      payload: state.page - 1,
    });
  };
  //set total pages
  const setTotalPages = (totalPages) => {
    dispatch({
      type: SET_TOTAL_PAGES,
      payload: totalPages,
    });
  };
  //Get Pokemons

  const getPokemons = async (page) => {
    // setLoading();

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 10}`
    );
    setTotalPages(Math.ceil(1000 / 10));
    dispatch({
      type: GET_POKEMONS,
      payload: res.data,
    });
    // dispatch({
    //   type: SET_PAGE,
    //   payload: page,
    // });
  };

  //Get Pokemon
  const getPokemon = async (name) => {
    // setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    dispatch({
      type: GET_POKEMON,
      payload: res.data,
    });
  };

  //Clear Pokemons
  const clearPokemons = () => {
    dispatch({
      type: CLEAR_POKEMONS,
    });
    getPokemons(1);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        pokemon: state.pokemon,
        clear : state.clear,
        totalPages: state.totalPages,
        getPokemons,
        getPokemon,
        setTotalPages,
        setPageNext,
        setPagePrevious,
        handlePageClick,
        searchPokemons,
        clearPokemons,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
