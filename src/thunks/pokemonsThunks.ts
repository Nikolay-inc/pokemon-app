import axios from "axios";
import { Dispatch } from 'redux';
import {
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
  fetchPokemonItemRequest,
  fetchPokemonItemSuccess,
  fetchPokemonItemFailure,
  fetchPokemonTypesRequest,
  fetchPokemonTypesSuccess,
  fetchPokemonTypesFailure,
  fetchPokemonByTypeRequest,
  fetchPokemonByTypeSuccess,
  fetchPokemonByTypeFailure,
} from "../actions/pokemonsActions";

export const fetchPokemons = (offset: number = 0, itemsPerPage: number = 30) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPokemonsRequest());
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
      );
      dispatch(fetchPokemonsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPokemonsFailure(error));
    }
  };
};

export const fetchPokemonItem = (pokemon: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPokemonItemRequest());
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      dispatch(fetchPokemonItemSuccess(response.data));
    } catch (error) {
      dispatch(fetchPokemonItemFailure(error));
    }
  };
};

export const fetchPokemonTypes = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPokemonTypesRequest());
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type`
      );
      dispatch(fetchPokemonTypesSuccess(response.data));
    } catch (error) {
      dispatch(fetchPokemonTypesFailure(error));
    }
  };
};

export const fetchPokemonsByType = (type: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPokemonByTypeRequest());
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/${type}`
      );
      dispatch(fetchPokemonByTypeSuccess(response.data));
    } catch (error) {
      dispatch(fetchPokemonByTypeFailure(error));
    }
  };
};
