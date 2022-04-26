import React from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonList.css';

function PokemonList({ pokemonsData, searchPokemon, addToFavorite, favoritesIds, paginationValues, openModalDetails }) {

  /**
   * Función para filtrar la lista de pokemón de acuerdo al valor escrito en la barra de búsqueda
   * @param {Object} pokemon 
   * @returns {Object}
   */
  const pokemonSearch = (pokemon) => {
    return pokemon.NAME.toLowerCase().includes(searchPokemon.toLowerCase());
  };

  /**
   * Función para filtrar la lista de pokemón de acuerdo a los valores de paginación
   * Se realiza una validación para saber si se usa la barra de búsqueda, la cual realiza el filtro teniendo en cuenta toda la lista
   * La paginación realiza el filtro dependiendo de la posición de los elementos en el array
   * @returns {Array}
   */
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
                openModalDetails = {() => openModalDetails(pokemon.ID)}
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