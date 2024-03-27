// import './App.css';
// import logo from './logo.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }

// import { useState } from 'react';
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div className="App">
//       <hr />
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
//         -
//       </button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
//         +
//       </button>
//     </div>
//   );
// };

// import { useEffect, useState } from 'react';
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert('Reloaded to ' + counter);
//     // setCounter(100);
//   }, [counter]);
//   return (
//     <div className="CounterApp">
//       <br />
//       <br />
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
//         -
//       </button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
//         +
//       </button>
//     </div>
//   );
// };

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=2cd3d96c
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=2cd3d96c';

// const movie1 = {
//   Title: 'Amazing Spider Syndrome',
//   Year: '2012',
//   imdbID: 'tt2586634',
//   Type: 'movie',
//   Poster: 'N/A',
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movies[0]} /> */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
