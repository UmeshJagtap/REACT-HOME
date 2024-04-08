import logo from './logo.svg';
import './App.css';
// import Form from './components/Form';
// import FromSimplified from './components/FromSimplified';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Forms</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Form /> */}
      {/* <FromSimplified /> */}
      <SignUpForm />
    </div>
  );
}

export default App;
