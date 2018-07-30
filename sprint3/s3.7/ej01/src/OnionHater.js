import React, { Component } from 'react';
import './OnionHater.css';

class OnionHater extends Component{

    onChangeListener(e){

       if(e.target.value === 'cebolla'){
           alert('odio la cebolla');
       }

    }

    render(){
        return(
           <textarea onChange ={this.onChangeListener} name="" id="" cols="30" rows="5"></textarea>
        );
    }




}

export default OnionHater;