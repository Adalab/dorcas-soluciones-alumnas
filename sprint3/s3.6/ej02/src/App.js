import React, { Component } from 'react';
import './App.css';
import HalfPage from './HalfPage';

class App extends Component {
  render() {
    return (
      <div className="madre">
        <HalfPage className="half-page">
        <h1>título</h1>
        </HalfPage>
        <HalfPage className="half-page">
        <h1>Hola</h1>
        </HalfPage>
      </div>
     
    );
  }
}

export default App;
