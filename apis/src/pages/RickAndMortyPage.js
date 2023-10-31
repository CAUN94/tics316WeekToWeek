import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RickAndMortyPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://rickandmortyapi.com/api/character'

    axios.get(apiUrl)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error('Error');
      });
  },[]);

  return(
    <div>
      <h1>Personajes de Ricn and Morty</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name} {character.species} <img src={character.image}></img></li>
        ))}
      </ul>
    </div>
  );

}

export default RickAndMortyPage