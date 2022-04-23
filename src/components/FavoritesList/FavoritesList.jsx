import React from "react";

import PokemonCard from '../PokemonCard/PokemonCard';

import './FavoritesList.css';

function FavoritesList({ pokemonsData, addToFavorite, favoritesIds, searchPokemon }) {

  const filterFavorites = (pokemon) => {
    return pokemon.NAME.toLowerCase().includes(searchPokemon.toLowerCase()) && favoritesIds.includes(pokemon.ID)
  };
  
  return (
    <>
      {
        pokemonsData?.length > 0 &&
        pokemonsData.filter(pokemon => filterFavorites(pokemon)).length > 0 ?
          pokemonsData.filter(pokemon => filterFavorites(pokemon)).map(pokemon => {
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
        <div className="FavoritesEmpty">
          <p className="FavoritesEmpty_text">No favorite pokemons selected</p>
        </div>
      }
    </>
  )
}

export default FavoritesList;