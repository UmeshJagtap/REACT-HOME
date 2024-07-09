//  FAKE STORE API ---

import React, { useState, useRef, useEffect } from 'react';
// import './style.css';
import './App.css';

export default function FetchProducts() {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  function handleFetch() {
    fetchProducts();
  }

  return (
    <div>
      <div
        style={{
          width: '800px',
          padding: '20px',
          margin: '20px',
          border: '1px solid red',
        }}
      >
        <p>Start editing to see some magic happen :)</p>
        <p>Data Fecthing via an API</p>
        <button onClick={handleFetch}>FETCH PRODUCTS</button>
      </div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p key={product.id}>{product.category}</p>
            <img
              src={product.image}
              alt="product image"
              style={{ width: '100px', border: '1px solid red' }}
            />
            <p>{product.price}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
