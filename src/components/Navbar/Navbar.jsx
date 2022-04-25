import React, { useState, useEffect } from "react";

import LogoPokemon from '../../assets/images/logo_pokemon.webp'
import UserAvatar from '../../assets/images/user.png';
import MenuImage from '../../assets/images/menu.png';
import BackMenu from '../../assets/images/back1.png'

import './Navbar.css';

function Navbar({ onChangeView, viewSelected }) {

  const [showSidebar, setShowSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, [])

  return (
    <>
      {showSidebar &&
        <section className="NavbarSidebar">
          <span 
            className="NavbarSidebar_back"
            onClick={() => setShowSidebar(false)}
          >
            <img 
              className="NavbarMobile_back_button" 
              src={BackMenu} 
              alt="Close menu" 
            />
          </span>
          <ul className="NavbarSidebar_options">
            <li 
              className={`NavbarSidebar_option ${viewSelected === 'home' ? 'selected' : ''}`}
              onClick={() => onChangeView('home')}
            >
              Home
            </li>
            <li 
              className={`NavbarSidebar_option ${viewSelected === 'favorites' ? 'selected' : ''}`}
              onClick={() => onChangeView('favorites')}
            >
              Favorites
            </li>
            <li className="NavbarSidebar_option">Sign out</li>
          </ul>
        </section>
      }

      {showSidebar &&
        <div className="sidebarOverlay"></div>
      }

      <header className="Pokemon_navbar">
        <nav className="Pokemon_navbar_content">
          {windowWidth <= 500 &&
            <span 
              className="Pokemon_navbarMobile"
              onClick={() => setShowSidebar(true)}
            >
              <img className="NavbarMobile_button" src={MenuImage} alt = "Menu" />
            </span>
          }
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
    </>
  )
};

export default Navbar;