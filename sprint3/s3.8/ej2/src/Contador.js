import React, { Component } from 'react';

class Contador extends Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div className="wrapper" >
        <span className="number">{this.props.number}</span>
        <button onClick= {this.props.SheepCounter}>
            Add 
        </button>
        <img src={this.props.img}/>
        </div>
    );
}
}

export default Contador;