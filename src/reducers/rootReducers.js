import { combineReducers } from "redux";
import { pokemonsReducer } from "../slices/pokemonsSlice";
import { uiReducer } from "../slices/uiSlice";

const rootReducer = combineReducers({
  pokemonsData: pokemonsReducer,
  ui: uiReducer
});

export default rootReducer;