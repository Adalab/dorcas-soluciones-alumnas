import React, {Component} from 'react';
import './DatosPersonas.css';
import Select from './Select';
import PersonDetail from './PersonDetail';
import {Link, Route, Switch} from 'react-router-dom';
class DatosPersonas extends Component {

    render() {

        console.log(this.props.datos)

        return (

            <div>
                <Select
                    onChangeOption = {this.props.changeCity}
                    options={this
                    .props
                    .datosSelect
                    .map(function (items) {
                        return items.location.city
                    })}></Select>
                <Select
                    onChangeOption = {this.props.changeGender}
                    options={this
                    .props
                    .datosSelect
                    .map(function (items) {
                        return items.gender
                    })}></Select>
              
                <ul className="lista">
                    {this
                        .props
                        .datosList
                        .map(function (item, index) {

                            return <li>
                                <p className="name">Nombre: {item.name.first}</p>
                                <img src={item.picture.thumbnail} alt=""/>
                                <p className="city">Ciudad: {item.location.city}</p>
                                <p className="age">Edad: {item.dob.age}</p>
                            </li>

                        })
}
                </ul>

            </div>

        );

    }

}

export default DatosPersonas;