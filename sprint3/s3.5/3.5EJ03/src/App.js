import React, { Component } from 'react';
import './App.css';
import CardFunctional from './CardFunctional';
//import Card from './Card';
import {textLong} from './Card';
import logo from './img.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
       <CardFunctional name="Count Von Count" logo1= {logo} text= {textLong} number={66} type="fa fa-heart" link="https://www.google.es"/>
       
      </div>
    );
  }
}

export default App;
