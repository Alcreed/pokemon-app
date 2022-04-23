import React from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonList.css';

function PokemonList({ pokemonsData, searchPokemon, addToFavorite, favoritesIds, paginationValues }) {

  const pokemonSearch = (pokemon) => {
    return pokemon.NAME.toLowerCase().includes(searchPokemon.toLowerCase());
  };

  const filterPokemon = () => {
    if (searchPokemon.length > 0) {
      return pokemonsData.filter(pokemon => pokemon.NAME.toLowerCase().includes(searchPokemon.toLowerCase()));
    } else {
      if (paginationValues.counter > pokemonsData.length) {
        return pokemonsData.slice(paginationValues.offset, pokemonsData.length);
      } else {
        return pokemonsData.slice(paginationValues.offset, paginationValues.counter);
      }
    }
  };

  return (
    <>
      {
        pokemonsData?.length > 0 &&
        pokemonsData.filter(pokemon => pokemonSearch(pokemon)).length > 0 ?
          filterPokemon().map(pokemon => {
            return (
              <PokemonCard 
                key = {pokemon.ID}
                pokemonData = {pokemon}
                addToFavorite = {() => addToFavorite(pokemon.ID)}
                favorite = {favoritesIds.includes(pokemon.ID) ? true : false}
              />
            )
          })
        :
          <div className="PokemonListEmpty">
            <p className="PokemonListEmpty_text">Pokemon not found</p>
          </div>
      }
    </>
  )
}

export default PokemonList;