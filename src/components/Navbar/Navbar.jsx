import React from "react";

import LogoPokemon from '../../assets/images/logo_pokemon.webp'
import UserAvatar from '../../assets/images/user.png'

import './Navbar.css';

function Navbar({ onChangeView, viewSelected }) {
  return (
    <header className="Pokemon_navbar">
      <nav className="Pokemon_navbar_content">
        <img className="Pokemon_navbar_logo" src={LogoPokemon} alt="Pokemon logo" />
        <ul className="Pokemon_navbar_options">
          <li 
            className={`Navbar_option ${viewSelected === 'home' ? 'selected' : ''}`}
            onClick={() => onChangeView('home')}
          >
              Home
          </li>
          <li 
            className={`Navbar_option ${viewSelected === 'favorites' ? 'selected' : ''}`}
            onClick={() => onChangeView('favorites')}
          >
            Favorites
          </li>
        </ul>
        {/* The image is just for the design */}
        <div className="Pokemon_navbar_profile">
          <img 
            className="Navbar_profile_image" 
            src={UserAvatar} 
            alt="Avatar" 
          />
        </div>
      </nav>
    </header>
  )
};

export default Navbar;