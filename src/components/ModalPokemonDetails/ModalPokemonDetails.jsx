import React from "react";

import Close from '../../assets/images/cancel.png';

import './ModalPokemonDetails.css';

function ModalPokemonDetails({ pokemonSelected, isOpen, onCloseModalDetails }) {
  
  return (
    <section className={`PokemonDetails ${isOpen ? 'open' : ''}`}>
      <article className="PokemonDetails_content">
        <article className="PokemonDetails_image">
          <img className="Details_img" src={pokemonSelected.IMAGE} alt={pokemonSelected.NAME} />
        </article>
        <article className="PokemonDetails_features">
          <div className="Details_name">
            <h1 className="Details_name_title">{pokemonSelected.NAME}</h1>
          </div>
          <div className="Features_content">
            <div className="Feature_option">
              <h2 className="Feature_option_title">HP</h2>
              <span className="Feature_option_value">{pokemonSelected.HP}</span>
            </div>
            <div className="Feature_option">
              <h2 className="Feature_option_title">ATTACK</h2>
              <span className="Feature_option_value">{pokemonSelected.ATTACK}</span>
            </div>
            <div className="Feature_option">
              <h2 className="Feature_option_title">DEFENSE</h2>
              <span className="Feature_option_value">{pokemonSelected.DEFENSE}</span>
            </div>
            <div className="Feature_option">
              <h2 className="Feature_option_title">SPEED</h2>
              <span className="Feature_option_value">{pokemonSelected.SPEED}</span>
            </div>
            <div className="Feature_option">
              <h2 className="Feature_option_title">SPECIAL ATTACK</h2>
              <span className="Feature_option_value">{pokemonSelected.SPECIAL_ATTACK}</span>
            </div>
            <div className="Feature_option">
              <h2 className="Feature_option_title">SPECIAL DEFENSE</h2>
              <span className="Feature_option_value">{pokemonSelected.SPECIAL_DEFENSE}</span>
            </div>
          </div>
        </article>
        
        <span className="PokemonDetails_close" onClick={onCloseModalDetails}>
          <img className="Close_image" src={Close} alt="Close details" />
        </span>
      </article>
    </section>
  )
}

export default ModalPokemonDetails;