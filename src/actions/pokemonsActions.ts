export const FETCH_POKEMONS_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMONS_FAILURE = "FETCH_POKEMON_FAILURE";

export const FETCH_POKEMON_ITEM_REQUEST = "FETCH_POKEMON_ITEM_REQUEST";
export const FETCH_POKEMON_ITEM_SUCCESS = "FETCH_POKEMON_ITEM_SUCCESS";
export const FETCH_POKEMON_ITEM_FAILURE = "FETCH_POKEMON_ITEM_FAILURE";

export const FETCH_POKEMON_TYPES_REQUEST = "FETCH_POKEMON_TYPES_REQUEST";
export const FETCH_POKEMON_TYPES_SUCCESS = "FETCH_POKEMON_TYPES_SUCCESS";
export const FETCH_POKEMON_TYPES_FAILURE = "FETCH_POKEMON_TYPES_FAILURE";

export const FETCH_POKEMON_BY_TYPE_REQUEST = "FETCH_POKEMON_BY_TYPE_REQUEST";
export const FETCH_POKEMON_BY_TYPE_SUCCESS = "FETCH_POKEMON_BY_TYPE_SUCCESS";
export const FETCH_POKEMON_BY_TYPE_FAILURE = "FETCH_POKEMON_BY_TYPE_FAILURE";

export const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMONS_REQUEST,
});

export const fetchPokemonsSuccess = (data: any) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: data,
});

export const fetchPokemonsFailure = (error: any) => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: error,
});

export const fetchPokemonItemRequest = () => ({
  type: FETCH_POKEMON_ITEM_REQUEST,
});

export const fetchPokemonItemSuccess = (data: any) => ({
  type: FETCH_POKEMON_ITEM_SUCCESS,
  payload: data,
});

export const fetchPokemonItemFailure = (error: any) => ({
  type: FETCH_POKEMON_ITEM_FAILURE,
  payload: error,
});

export const fetchPokemonTypesRequest = () => ({
  type: FETCH_POKEMON_TYPES_REQUEST,
});

export const fetchPokemonTypesSuccess = (data: any) => ({
  type: FETCH_POKEMON_TYPES_SUCCESS,
  payload: data,
});

export const fetchPokemonTypesFailure = (error: any) => ({
  type: FETCH_POKEMON_TYPES_FAILURE,
  payload: error,
});

export const fetchPokemonByTypeRequest = () => ({
  type: FETCH_POKEMON_BY_TYPE_REQUEST,
});

export const fetchPokemonByTypeSuccess = (data: any) => ({
  type: FETCH_POKEMON_BY_TYPE_SUCCESS,
  payload: data,
});

export const fetchPokemonByTypeFailure = (error: any) => ({
  type: FETCH_POKEMON_BY_TYPE_FAILURE,
  payload: error,
});
