import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { pokemonsReducer } from "./pokemons";

const rootReducer = combineReducers({
  pokemonsReducer,
  globalReducer
});

export default rootReducer;