import React from "react";

import './SearchBar.css';

function SearchBar({ pokemonName, searchPokemon }) {
  return (
    <section className="SearchBar_container">
      <input 
        className="SearchBar_input" 
        type="text" 
        placeholder="Search your pokemon by his name..."
        value = {pokemonName}
        onChange={(e) => searchPokemon(e.target.value)} 
      />
    </section>
  )
}

export default SearchBar;