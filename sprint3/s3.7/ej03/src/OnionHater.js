import React, { Component } from 'react';
import './OnionHater.css';

class OnionHater extends Component {
    constructor(props) {
        super(props);
        this.hateOnion = this.hateOnion.bind(this);
        this.wrapperClass = 'Container';
      }
   
    hateOnion(event) {
        if (event.target.value.includes('cebolla')) {
            this.wrapperClass = 'HateColor';
            this.forceUpdate();
        }
    }
    render() {
      return (
        <div className={this.wrapperClass}>
            <textarea className="Text-area" name="" id="" cols="30" rows="10" onChange={ this.hateOnion }></textarea>
        </div>
      );
    }
  }
  
  export default OnionHater;