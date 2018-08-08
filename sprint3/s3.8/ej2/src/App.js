import React, { Component } from 'react';
import './App.css';
import Contador from './Contador';
import oveja from './oveja.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      number: 0,
    }
    this.SheepCounter = this.SheepCounter.bind(this) 
}

SheepCounter(){
    this.setState({
    number: this.state.number +1
    })
}
  render() {
    return (
      <div className="App">
        <Contador
          number={this.state.number}
          img = {oveja}
          SheepCounter= {this.SheepCounter}
        />
      </div>
    );
  }
}

export default App;
