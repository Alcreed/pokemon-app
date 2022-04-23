import React from 'react';

import Star from '../../assets/images/star.png'
import StarFavorite from '../../assets/images/star_fav.png'

import './PokemonCard.css'

function PokemonCard({ pokemonData }) {
  return (
    <article className='PokemonCard'>
      <section className='PokemonCard_top'>
        <article className='PokemonCard_image_container'>
          <img 
            className='PokemonCard_image' 
            src={pokemonData.IMAGE} 
            alt={pokemonData.NAME} 
          />
        </article>
      </section>

      <section className='PokemonCard_bot'>
        <article className='PokemonCard_content'>
          <p className='PokemonCard_name'>{pokemonData.NAME}</p>
          <img 
            className='PokemonCard_favorite' 
            src={Star} 
            alt="Favorite"
          />
        </article>
        <article className='PokemonCard_information'>
          <span className='PokemonCard_information_option'>
            <h2 className='Option_title'>XP</h2>
            <p className='Option_value'>{pokemonData.EXPERIENCE}</p>
          </span>
          <span className='PokemonCard_information_option'>
            <h2 className='Option_title'>Weight</h2>
            <p className='Option_value'>{pokemonData.WEIGHT}</p>
          </span>
          <span className='PokemonCard_information_option'>
            <h2 className='Option_title'>Height</h2>
            <p className='Option_value'>{pokemonData.HEIGHT}</p>
          </span>
        </article>
      </section>
    </article>
  )
}

export default PokemonCard;