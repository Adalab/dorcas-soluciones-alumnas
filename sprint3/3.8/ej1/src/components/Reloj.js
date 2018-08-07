import React, { Component, Fragment } from 'react';

class Reloj extends Component {
    constructor() {
        super();
        this.state = { 
            seconds: 0,
            minutes: 0
         }
        this.updateClock = this.updateClock.bind(this)
        
    }
    componentDidMount(){
        console.log("estoy montado")
        this.intervalId=setInterval(this.updateClock, 1000);
    }
    componentWillUnmount(){
        console.log("estoy desmontado")
        clearInterval(this.intervalId);
    }
    updateClock(){
        console.log("estoy contando")
        if(this.state.seconds < 59){
            this.setState({
            seconds: this.state.seconds + 1,
            minutes: this.state.minutes
            })
         } else if(this.state.seconds = 60){
            this.setState({
            seconds: 0,
            minutes: this.state.minutes + 1
        })
    }
    }
    newDate() {
    return (this.state.minutes+':'+this.state.seconds);
    }

    render() {
    
    return (
        <p>{this.newDate()} </p>
    )
}
}
   
export default Reloj;