import React, { Component } from 'react';

class Clock extends React.Component {
constructor () {
    super();
    this.state={
        minutes:0,
        seconds:0
    };
    this.updateClock= this.updateClock.bind(this);
    setInterval (this.updateClock, 1000); 
}
    
    updateClock(){ 

        if (this.state.seconds<59){
        this.setState(
            { 
                seconds: this.state.seconds+1
            }
            )    
        }else {
            this.setState (
                {
                    seconds: 0,
                    minutes: this.state.minutes+1
                }
            )
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

export default Clock;