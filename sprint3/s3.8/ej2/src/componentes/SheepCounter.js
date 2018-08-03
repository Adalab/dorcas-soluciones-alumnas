import React, { Component } from 'react';
import './sheepcounter.css';
import Oveja from './Oveja';

class SheepCounter extends Component {
    constructor (){
        super()
        this.state = {
            counter:0,
            sheep: []
        }
    this.onClickListener= this.onClickListener.bind(this);
    }
     onClickListener (event) {
         this.setState({
            counter: this.state.counter+1
         })
         this.createArraySheep();
    }

    createArraySheep (){
        this.state.sheep.push (<Oveja />);
    }
    render() {
        return (
            <div >
                <a 
                type="button" className='oveja'
                onClick={this.onClickListener}
                > ¡Ovejas al campo! 
                </a>
                <p className="contador">{this.state.counter}</p>
                <div className="grid">
                {
                    this.state.sheep.map( function(x) {
                        return x;
                })
                }
                </div>

                <p className="margin">Oveja PURE CSS by: <a  href="https://codepen.io/ilithya/pen/rmmjNp">Codepen</a> </p>
            </div>
        );
      }
}

export default SheepCounter;
