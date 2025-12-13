import React from 'react';
import logo from './logo.svg';
import './App.css';
import boxes from '../../box/src/components/boxes';
import Box from './components/Box';

function App() {
  const [squares, setSqares] = React.useState(boxes);

  // const styles = {
  //   backgroundColor: props.darkMode ? '#222222' : '#cccccc',
  // };

  // const dark = { backgroundColor: '#222222' };
  // const light = { backgroundColor: '#cccccc' };
  // const styles = props.darkMode ? dark : light;

  function handleToggle(id) {
    setSqares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      // id={square.id}
      showBox={square.on}
      // toggle={handleToggle}
      toggle={() => handleToggle(square.id)}
    />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>Boxes will go here</p>
      <main className="box-container">{squareElements}</main>
    </div>
  );
}

export default App;

// function handleToggle(id) {
//   // console.log('Clicked');
//   // setSqares((prevOn) => ({
//   //   ...prevOn,
//   //   on: !prevOn.on,
//   // }));
//   // setSqares((on) => !on);
//   console.log(id);
//   // setSqares((prevSquares) => ({
//   //   ...prevSquares,
//   //   on: !prevSquares.on,
//   // }));
//   setSqares((prevSquares) => {
//     // const newSquares = [];
//     // for (let i = 0; i < prevSquares.length; i++) {
//     //   const currentSquare = prevSquares[i];
//     //   if (currentSquare.id === id) {
//     //     const updatedSquare = {
//     //       ...currentSquare,
//     //       on: !currentSquare.on,
//     //     };
//     //     newSquares.push(updatedSquare);
//     //   } else {
//     //     newSquares.push(currentSquare);
//     //   }
//     // }
//     //return newSquares;

//     return prevSquares.map((square) => {
//       return square.id === id ? { ...square, on: !square.on } : square;
//     });
//   });
// }
