// PokemonList.js
import React from "react";
import PokemonCard from "./PokemonCard";
import "../App.css";
const PokemonList = ({ pokemonList, addToCart, removeFromCart, userState }) => (
  <div className="pokemon-container">
    {pokemonList.map((pokemon) => (
      <PokemonCard
        key={pokemon.name}
        pokemon={pokemon}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={userState[pokemon.name]}
      />
    ))}
  </div>
);

export default PokemonList;
