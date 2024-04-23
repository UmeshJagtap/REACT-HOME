import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Die from './components/Die';

function App() {
  // const [count, setCount] = useState(0);
  const [dice, setDice] = React.useState(allNewDice());
  function random() {
    var randomNum = Math.ceil(Math.random() * 6);
    return randomNum;
  }
  console.log(random());

  function allNewDice() {
    const newDice = [
      {key:1, fv: random(), isHeld: true},
      {key:2, fv: random(), isHeld: false},
      {key:3, fv: random(), isHeld: true},
    ];

    for (let i = 4; i < 10; i++) {
      // newDice.push(Math.ceil(Math.random() * 6));
      newDice.push(
        {key:[i], fv: random(), isHeld: true}
      )
      };
    }
    return newDice;
  }
  console.log(allNewDice());

  // --------------------------------- REF --
  var alerts = [
    {num : 1, app:'helloworld',message:'message'},
    {num : 2, app:'helloagain',message:'another message'}
    ]

    alerts.push({num : 3, app:'helloagain_again',message:'yet another message'});
  // ------------------------------ REF END --

  // function allNewDice() {
  //   const newDice = [];
  //   for (let i = 0; i < 10; i++) {
  //     newDice.push(Math.ceil(Math.random() * 6));
  //   }
  //   return newDice;
  // }
  // console.log(allNewDice());

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2 className="tenzies-banner">** TENZIES **</h2>
      <main>
        <div className="dice-container">
          {/* <Die value="1" />
          <Die value="2" />
          <Die value="3" />
          <Die value="4" />
          <Die value="5" />
          <Die value="6" />
          <Die value="7" />
          <Die value="8" />
          <Die value="9" />
          <Die value="10 " /> */}
          {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>
          Roll
        </button>
      </main>
    </>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
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
