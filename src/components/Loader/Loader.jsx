import React from 'react';

import PokeballImage from '../../assets/images/pokeball.webp'

import './Loader.css'

function Loader() {
  return (
    <div className='Loader_pokeball'>
      <div className='Loader_pokeball_content'>
        <img className='pokeball' src={PokeballImage} alt="Pokeball" />
        <img className='pokeball' src={PokeballImage} alt="Pokeball" />
        <img className='pokeball' src={PokeballImage} alt="Pokeball" />
      </div>
    </div>
  )
}

export default Loader;