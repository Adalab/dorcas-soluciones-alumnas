import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Clock/>
      </div>
    );
  }
}

export default App;


// import React, { Component, Fragment } from 'react';

// class Clock extends Component {
//    constructor() {
//        super();
//        this.state = {
//            seconds: 0,
//            minutes: 0
//         }
//        this.updateClock = this.updateClock.bind(this)
//        setInterval(this.updateClock, 1000);
//    }
//    updateClock(){
//        if(this.state.seconds < 59){
//            this.setState({
//            seconds: this.state.seconds + 1,
//            minutes: this.state.minutes
//            })
//         } else if(this.state.seconds = 60){
//            this.setState({
//            seconds: 0,
//            minutes: this.state.minutes + 1
//            })
//         }
//    }
//    newDate() {
//    return (this.state.minutes+':'+this.state.seconds);
//    }

//    render() {
   
//    return (
//        <p>{this.newDate()} </p>
//    )
// }
// }
 
// export default Clock;