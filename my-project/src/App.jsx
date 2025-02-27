// import { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import FetchProducts from './FetchProducts';
import FecthDog from './FetchDog';
import UseFetch1 from './UseFetch1';
import Axios from './axiosFetch';

import Zustand from './Zustand';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center text-3xl">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1> */}
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <FetchProducts />
      {/* <FecthDog /> */}
      <Axios />
      {/* <UseFetch1 /> */}
      <Zustand />
    </>
  );
}

export default App;

//  using CustomHook i.e. useFetch

// import React, { useState, useEffect } from 'react';
// import useFetch from './useFetch';

// const Product = ({ product }) => {
//   // console.log(product);
//   return (
//     <>
//       <h2>{product.title}</h2>
//       <p key={product.id}>{product.category}</p>
//       <img
//         src={product.image}
//         alt="product image"
//         style={{ width: '100px', border: '1px solid red' }}
//       />
//       <p>{product.price}</p>
//       <hr />
//     </>
//   );
// };

// const App = () => {
//   const [data] = useFetch('https://fakestoreapi.com/products');

//   // console.log(data);

//   return (
//     <div className="App">
//       <h1>Fetching Data Using Hook</h1>
//       <h1>Calling API</h1>
//       <div>
//         <p>There are {data.length} products in the store</p>

//         {data.map((product) => (
//           <Product product={product} key={product.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
