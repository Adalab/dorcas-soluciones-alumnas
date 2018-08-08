import React, { Component } from 'react';
import './App.css';
import Reloj from './components/Reloj';

class App extends Component {
  constructor() {
    super();
    this.state = { 
        clock: true,
        text: "hola"
     }  
     this.handleClick = this.handleClick.bind(this);
}
 
handleClick(){
  if (this.state.clock === true){
    this.setState({clock: false});
  }
  else{
    this.setState({clock: true});

}
}
  render() {
    if(this.state.clock === true){
   return (
      <div>
        <Reloj />
        <button onClick= {this.handleClick}>
       clickme
       </button>
      </div>
      
   )
  }
  else {
    return (
      <div>
       <div>hola </div>
       <button onClick= {this.handleClick}>
       clickme
       </button>
       </div>
    )
  }
    }
    
  }


export default App;
