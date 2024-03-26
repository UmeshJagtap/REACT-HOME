import logo from './logo.svg';
import './App.css';
import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

function App() {
  console.log(jokesData);
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>REACT JOKES</p>
      </header>
      <section>{jokeElements}</section>
    </div>
  );
}

export default App;
