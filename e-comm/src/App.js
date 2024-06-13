import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <br />
        <br />
        <br />
        <br />
        <h1
          className="text-center p-5"
          style={{ fontSize: '70px', fontWeight: 'bold' }}
        >
          Build a <span className="text-p">Ecomm Website</span>
          <br /> <br /> By
          <span className="text-danger"> @rinkuverma / @umeshagtap</span>
        </h1>
      </div> */}
      <Header />
    </>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
