import React, { Component } from 'react';


class SheepCounter extends React.Component {
    constructor (){
        super()
        this.state = {
            counter:0
        }
    this.onClickListener= this.onClickListener.bind(this);
    }
     onClickListener (event) {
         this.setState({
            counter: this.state.counter+1
         })

    }
    render() {
        return (
            <div>
                <button 
                type="button" 
                onClick={this.onClickListener}
                > ¡Toma oveja! 
                </button>
                <p>{this.state.counter}</p>
            </div>
        );
      }
}

export default SheepCounter;