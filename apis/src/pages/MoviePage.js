import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MoviePage() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() =>{
    const apiKey = '8931a6af013b3fe210fecb39faa7e762'
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
    axios.get(apiUrl)
    .then((response) => {
      setPeliculas(response.data.results);
    })

  },[]);
  return(
    <div>
      <h1>Películas Populares</h1>
      <ul>
        {peliculas.map((pelicula) => (
          <li key={pelicula.id}>{pelicula.title} {pelicula.popularity} <img src={'https://www.themoviedb.org/t/p/w440_and_h660_face' + pelicula.poster_path}></img></li>
        ))}
      </ul>
    </div>
  );
}

export default MoviePage