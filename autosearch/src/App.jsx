import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const [cache, setCache] = useState({});

  const fetchData = async () => {
    // https://dummyjson.com/recipes
    // https://dummyjson.com/recipes/search?q=Va
    const data = await fetch('https://dummyjson.com/recipes/search?q=' + input);
    const json = await data.json();
    setResults(json?.recipes);
  };

  useEffect(() => {
    // fetchData();

    const timer = setTimeout(fetchData, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      {/* <div className="header-container">
        <div className="head-logo">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="head-logo">
          <h4>Vite + React</h4>
        </div>
      </div> */}

      <div className="card">
        <h2>Autocomplete Search Bar</h2>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>
      {showResults && (
        <div className="results-container">
          {results.map((r) => (
            <span className="results" key={r.id}>
              {r.name}{' '}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default App;

//
// Default App
//
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
