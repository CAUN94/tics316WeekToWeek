// PokeAPISearch.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokeAPISearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;

  useEffect(() => {
    if (!searchTerm) {
      setPokemon(null);
      return;
    }

    axios
      .get(`${apiUrl}${searchTerm.toLowerCase()}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error('Error al buscar Pokémon en la PokeAPI:', error);
        setPokemon(null);
      });
  }, [searchTerm]);

  return (
    <div>
      <h1>Buscar Pokémon en la PokeAPI</h1>
      <input
        type="text"
        placeholder="Nombre Pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={`Imagen de ${pokemon.name}`}
          />
          <p>Peso: {pokemon.weight} kg</p>
          <p>Altura: {pokemon.height * 10} cm</p>
        </div>
      )}
    </div>
  );
}

export default PokeAPISearch;
