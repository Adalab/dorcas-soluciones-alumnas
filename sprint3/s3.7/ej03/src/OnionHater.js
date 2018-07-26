import React, { Component } from 'react';
import './OnionHater.css';

class OnionHater extends Component{

    constructor(props){
        super(props);
        this.containerTextarea ='container-textarea-white';
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){

       if(e.target.value === 'cebolla'){
           console.log(e);
           this.containerTextarea='container-textarea-bg';
           this.forceUpdate();
           console.log(this.containerTextarea);
       }

    }

    render(){
        console.log(this.bg);
        return(
            
            <div className={this.containerTextarea}>
                <textarea className="textarea" onChange ={this.handleChange} name="" id="" cols="30" rows="5"></textarea>
            </div>
           
        );
    }




}

export default OnionHater;