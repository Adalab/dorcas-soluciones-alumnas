import React, { Component } from 'react';
import './App.css';
import HalfPage from './HalfPage';

class App extends Component {
  render() {
    return (
      <div className="app">
     <HalfPage>
     <h1> hola, qué tal?</h1>
     </HalfPage> 
     <HalfPage>
     <h1> hola, qué tal?</h1>
     </HalfPage>
      </div>
    );
  }
}

export default App;
