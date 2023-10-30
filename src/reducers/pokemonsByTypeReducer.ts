import {
  FETCH_POKEMON_BY_TYPE_REQUEST,
  FETCH_POKEMON_BY_TYPE_SUCCESS,
  FETCH_POKEMON_BY_TYPE_FAILURE,
} from "../actions/pokemonsActions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const pokemonsByTypeReducer = (state = initialState, action: any) => {
  switch (action.type) {
  case FETCH_POKEMON_BY_TYPE_REQUEST:
    return { ...state, loading: true, error: null };
  case FETCH_POKEMON_BY_TYPE_SUCCESS:
    return { ...state, data: action.payload, loading: false, error: null };
  case FETCH_POKEMON_BY_TYPE_FAILURE:
    return { ...state, loading: false, error: action.payload };
  default:
    return state;
  }
};

export default pokemonsByTypeReducer;