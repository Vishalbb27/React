import {
  SEARCH_POKEMON,
  GET_POKEMON,
  GET_POKEMONS,
  SET_TOTAL_PAGES,
  SET_PAGE,
  CLEAR_POKEMONS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case CLEAR_POKEMONS:
      return {
        ...state,
        pokemons: {},
        clear: false,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        clear: true,
      };
    default:
      return state;
  }
};
