import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
} from "../actions/pokemonsActions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const pokemonsReducer = (state = initialState, action: any) => {
  switch (action.type) {
  case FETCH_POKEMONS_REQUEST:
    return { ...state, loading: true, error: null };
  case FETCH_POKEMONS_SUCCESS:
    return { ...state, data: action.payload, loading: false, error: null };
  case FETCH_POKEMONS_FAILURE:
    return { ...state, loading: false, error: action.payload };
  default:
    return state;
  }
};

export default pokemonsReducer;
