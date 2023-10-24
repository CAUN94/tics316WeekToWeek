import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import ListaSecreta from './components/ListaSecreta';


function App() {

  const datos = ['Hola','uno','Cris','jaja']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaSecreta datos={datos}/>
      </header>
    </div>
  );
}

export default App;
