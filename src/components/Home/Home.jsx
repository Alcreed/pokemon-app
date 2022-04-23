import React, { useState, useEffect } from "react";
import { getAllPokemonsData } from '../../Functions';

import Loader from '../Loader/Loader';
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import PokemonList from "../PokemonList/PokemonList";

import './Home.css'

function Home() {

  const [pokemonsData, setPokemonsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewSelected, setViewSelected] = useState('home');
  const [searchPokemon, setSearchPokemon] = useState('');

  useEffect(() => {
    fetchPokemonsData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchPokemonsData = async () => {
    try {
      setLoading(true);
      
      let allPokemonsData = await getAllPokemonsData()
      
      setPokemonsData(allPokemonsData)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <main className='pokemon_app'>
      <Navbar 
        onChangeView = {(view) => setViewSelected(view)}
        viewSelected = {viewSelected}
      />

      <SearchBar
        pokemonName = {searchPokemon}
        searchPokemon = {(value) => setSearchPokemon(value)} 
      />

      <section className='pokemons_content'>
        {viewSelected === 'home' &&
          <PokemonList 
            pokemonsData = {pokemonsData}
            searchPokemon = {searchPokemon}
          />
        }
      </section>
    </main>
  )
}

export default Home;