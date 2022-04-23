import React from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonList.css';

function PokemonList({ pokemonsData, searchPokemon, addToFavorite, favoritesIds }) {

  const pokemonSearch = (pokemon) => {
    return pokemon.NAME.toLowerCase().includes(searchPokemon.toLowerCase());
  };

  return (
    <>
      {
        pokemonsData?.length > 0 &&
        pokemonsData.filter(pokemon => pokemonSearch(pokemon)).map(pokemon => {
          return (
            <PokemonCard 
              key = {pokemon.ID}
              pokemonData = {pokemon}
              addToFavorite = {() => addToFavorite(pokemon.ID)}
              favorite = {favoritesIds.includes(pokemon.ID) ? true : false}
            />
          )
        })
      }
    </>
  )
}

export default PokemonList;