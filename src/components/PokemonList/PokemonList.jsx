import React from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonList.css';

function PokemonList({ pokemonsData, searchPokemon }) {

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
            />
          )
        })
      }
    </>
  )
}

export default PokemonList;