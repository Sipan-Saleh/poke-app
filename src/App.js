// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Cart from "./components/Cart";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [cart, setCart] = useState([]);
  const [userState, setUserState] = useState({}); // Zustand für jeden Benutzer

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const data = await response.json();
        const formattedPokemonList = data.results.map((pokemon) => ({
          ...pokemon,
          isInCart: false,
        }));
        setPokemonList(formattedPokemonList);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (pokemon) => {
    if (!cart.some((item) => item.name === pokemon.name)) {
      const updatedList = { ...userState, [pokemon.name]: true };
      setCart([...cart, pokemon]);
      setPokemonList((prevList) =>
        prevList.map((item) =>
          item.name === pokemon.name ? { ...item, isInCart: true } : item
        )
      );
      setUserState(updatedList);
    }
  };

  const removeFromCart = (pokemon) => {
    const updatedCart = cart.filter((item) => item.name !== pokemon.name);
    const updatedList = { ...userState, [pokemon.name]: false };
    setCart(updatedCart);
    setPokemonList((prevList) =>
      prevList.map((item) =>
        item.name === pokemon.name ? { ...item, isInCart: false } : item
      )
    );
    setUserState(updatedList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Poke API App</h1>
      </header>
      <main>
        <h2>Pokemon List</h2>
        <PokemonList
          pokemonList={pokemonList}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          userState={userState}
        />
        <h2>Pokedex</h2>
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          userState={userState}
        />
      </main>
    </div>
  );
};

export default App;
