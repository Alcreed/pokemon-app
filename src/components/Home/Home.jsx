import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemons, setLoading } from "../../actions";
import { getAllPokemonsData } from '../../Functions';

import Loader from '../Loader/Loader';
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import PokemonList from "../PokemonList/PokemonList";
import FavoritesList from "../FavoritesList/FavoritesList";
import ModalPokemonDetails from "../ModalPokemonDetails/ModalPokemonDetails";

import './Home.css'

function Home() {

  // Hooks redux
  const pokemonsData = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  //
  const [viewSelected, setViewSelected] = useState('home');
  const [searchPokemon, setSearchPokemon] = useState('');
  const [favoritesIds, setFavoritesIds] = useState([]);
  const [paginationValues, setPaginationValues] = useState({
    offset: 0,
    limit: 20,
    counter: 20
  });
  const [isModalDetailsOpen, setIsModalDetailsOpen] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState({})

  useEffect(() => {
    fetchPokemonsData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Función con la cual se obtienen los diferentes pokemón y se guardan en un hook
   * Además, se habilita un loader mientras se realiza esta petición
   */
  const fetchPokemonsData = async () => {
    try {
      dispatch(setLoading(true))
      
      let allPokemonsData = await getAllPokemonsData()
      
      dispatch(setPokemons(allPokemonsData));
      dispatch(setLoading(false))
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false))
    }
  };

  /**
   * Función que se utiliza para guardar una lista de ids para mostrarlos en el componente favoritos
   * Se realiza una validación para agregar o eliminar el id del pokemón seleccionado del arreglo
   * @param {Number} id 
   */
  const favoritePokemonsList = (id) => {
    let newFavorites = [...favoritesIds];

    if (newFavorites.includes(id)) {
      let idIndex = newFavorites.findIndex(item => item === id);
      newFavorites.splice(idIndex, 1)
    } else {
      newFavorites.push(id);
    }
    
    setFavoritesIds(newFavorites);
  };

  /**
   * Función que se utiliza para realizar la paginación y cambio de los elementos mostrados
   * Se muestran 20 elementos simultaneamente
   * @param {String} type 
   */
  const pagination = (type) => {
    if (type === 'next') {
      if (paginationValues.counter > pokemonsData.length) {
        setPaginationValues({ ...paginationValues,
          offset: paginationValues.offset + 20,
          counter: paginationValues.counter + 20,
          limit: paginationValues.counter - pokemonsData.length
        });
      } else {
        setPaginationValues({ ...paginationValues,
          offset: paginationValues.offset + 20,
          counter: paginationValues.counter + 20
        });
      }
    } else {
      if (paginationValues.offset > 0) {
        setPaginationValues({ ...paginationValues,
          offset: paginationValues.offset - 20,
          counter: paginationValues.counter - 20
        });
      }
      if (paginationValues.limit === 10) {
        setPaginationValues({ ...paginationValues,
          offset: paginationValues.offset - 20,
          limit: 20,
          counter: paginationValues.counter - 20
        });
      }
    }
  };

  /**
   * Función donde se obtiene el pokemón seleccionado para guardar su información en un hook
   * La información de este pokemón se muestra en un pop-up
   * @param {Number} id 
   */
  const openModalDetails = (id) => {
    let pokemonDetails = pokemonsData.find(pokemon => pokemon.ID === id);
    
    setPokemonSelected(pokemonDetails);
    setIsModalDetailsOpen(true);
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
            addToFavorite = {(id) => favoritePokemonsList(id)}
            favoritesIds = {favoritesIds}
            paginationValues = {paginationValues}
            openModalDetails = {(id) => openModalDetails(id)}
          />
        }

        {viewSelected === 'favorites' &&
          <FavoritesList 
            pokemonsData = {pokemonsData}
            searchPokemon = {searchPokemon}
            addToFavorite = {(id) => favoritePokemonsList(id)}
            favoritesIds = {favoritesIds}
          />
        }
      </section>

      {
        viewSelected === 'home' &&
        <section className='Pagination_buttons'>
          <button 
            className={`Pagination_button ${paginationValues.offset === 0 ? 'disabled' : ''}`}
            onClick={paginationValues.offset !== 0 ? () => pagination('preview') : null}
          >
            Preview
          </button>
          <button 
            className={`Pagination_button ${paginationValues.counter > pokemonsData.length ? 'disabled' : ''}`}
            onClick={paginationValues.counter < pokemonsData.length ? () => pagination('next') : null}
          >
            Next
          </button>
        </section>
      }

      <ModalPokemonDetails
        isOpen = {isModalDetailsOpen}
        pokemonSelected = {pokemonSelected}
        onCloseModalDetails = {() => setIsModalDetailsOpen(false)}
      />
    </main>
  )
}

export default Home;