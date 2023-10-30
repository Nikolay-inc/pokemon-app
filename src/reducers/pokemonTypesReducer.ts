import {
  FETCH_POKEMON_TYPES_REQUEST,
  FETCH_POKEMON_TYPES_SUCCESS,
  FETCH_POKEMON_TYPES_FAILURE,
} from "../actions/pokemonsActions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const pokemonTypesReducer = (state = initialState, action: any) => {
  switch (action.type) {
  case FETCH_POKEMON_TYPES_REQUEST:
    return { ...state, loading: true, error: null };
  case FETCH_POKEMON_TYPES_SUCCESS:
    return { ...state, data: action.payload, loading: false, error: null };
  case FETCH_POKEMON_TYPES_FAILURE:
    return { ...state, loading: false, error: action.payload };
  default:
    return state;
  }
};

export default pokemonTypesReducer;