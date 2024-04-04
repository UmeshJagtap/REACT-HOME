import React from 'react';
import logo from '../logo.svg';

export default function tjTitle() {
  return (
    <>
      <header className="tjTitle">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Travel Journal</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </>
  );
}
