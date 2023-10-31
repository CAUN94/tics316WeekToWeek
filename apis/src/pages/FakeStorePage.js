import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FakeStorePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      });
  }, []);
  return (
    <div>
      <h1>Productos de FakeStore</h1>
      <div className='product-list'>
        {products.map((product) => (
          <div key="{product.id}" className="product">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FakeStorePage;
