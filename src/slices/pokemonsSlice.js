import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: []
};

export const pokemonSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = pokemonSlice.actions;

export const pokemonsReducer = pokemonSlice.reducer;