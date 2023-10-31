// RandomUser.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomUserPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/')
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error('Error');
      });

  },[]);
  return (
    <div>
      <h1>Datos de Usuario Aleatorio</h1>
      {user && (
        <div>
          <h2>{user.name.first} {user.name.last}</h2>
          <img src={user.picture.large}></img>
          <p>Edad: {user.dob.age}</p>
          <p>País: {user.location.country}</p>
          <p>Correo: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default RandomUserPage;
