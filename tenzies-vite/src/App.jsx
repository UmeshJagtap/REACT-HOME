import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Die from './components/Die1';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    console.log(id);
  }

  // console.log(dice);
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={holdDice()}
    />
    // {/* <Die
    //   key={die.id}
    //   value={die.value}
    //   isHeld={die.isHeld}
    //   holdDice={() => holdDice(die.id)}
    // /> */}
  ));

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <p>+</p>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2 className="tenzies-banner">** TENZIES **</h2>
      <main>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-dice" onClick={rollDice}>
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
