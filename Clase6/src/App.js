import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo'; // Importa el componente de Saludo
import RealTimeClock from './components/RealTimeClock';
import LiveText from './components/LiveText';
import NavigationMenu from './components/NavigationMenu';

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function Foooter() {
  return (
    <footer>
      <h1>Footer</h1>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Saludo nombre="Cristóbal" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with UAI
        </a>
        <LiveText />
        <RealTimeClock />
      </header>
    </div>
  );
}

export default App;
