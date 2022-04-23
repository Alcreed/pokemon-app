import React from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonList.css';

function PokemonList({ pokemonsData }) {
  return (
    <>
      {
        pokemonsData?.length > 0 &&
        pokemonsData.map(pokemon => {
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