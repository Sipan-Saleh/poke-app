// Cart.js
import React from "react";
import PokemonCard from "./PokemonCard";
import "../App.css";

const Cart = ({ cart, removeFromCart, userState }) => (
  <div className="pokemon-container">
    {cart.map((cartItem) => (
      <PokemonCard
        key={cartItem.name}
        pokemon={cartItem}
        removeFromCart={removeFromCart}
        isInCart={userState[cartItem.name]}
      />
    ))}
  </div>
);

export default Cart;
