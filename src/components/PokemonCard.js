// PokemonCard.js
import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, addToCart, removeFromCart, isInCart }) => (
  <div className={`pokemon-card ${isInCart ? "in-cart" : ""}`}>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pokemon.url.split("/")[6]
      }.png`}
      alt={pokemon.name}
    />
    <p>{pokemon.name}</p>
    {!isInCart && (
      <button className="addBtnCustom" onClick={() => addToCart(pokemon)}>
        Add to Pokedex
      </button>
    )}
    {isInCart && (
      <button
        className="removeBtnCustom"
        onClick={() => removeFromCart(pokemon)}
      >
        Remove from Pokedex
      </button>
    )}
  </div>
);

export default PokemonCard;
