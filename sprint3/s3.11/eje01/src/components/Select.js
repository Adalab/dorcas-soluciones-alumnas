import React, { Component } from 'react';
import DatosPersonas from './DatosPersonas';

class Select extends Component {


    render(){
        console.log(this.props.options)
        return(

            <select name="" id=""  onChange = {this.props.onChangeOption}>
                {this.props.options.map(function(item){
                    return <option value={item}>{item}</option>
                })}
            </select>
        );
    }

}

export default Select;