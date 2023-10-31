import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JsonRandomPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error');
      });
  },[]);
  
  return (
    <div>
      <h1>Posts de JSONPlaceholder</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default JsonRandomPage;
