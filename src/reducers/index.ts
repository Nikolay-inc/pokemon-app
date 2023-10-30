import { combineReducers } from "redux";
import pokemonsReducer from "./pokemonsReducer";
import pokemonItemReducer from "./pokemonItemReducer";
import pokemonTypesReducer from "./pokemonTypesReducer";
import pokemonsByTypeReducer from "./pokemonsByTypeReducer";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonItem: pokemonItemReducer,
  pokemonTypes: pokemonTypesReducer,
  pokemonsByType: pokemonsByTypeReducer,
});

export default rootReducer;