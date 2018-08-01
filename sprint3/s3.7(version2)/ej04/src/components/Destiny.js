import React, { Component, Fragment } from 'react';
import CityImage from './CityImage';

class Destiny extends Component {
    constructor (props){ 
        super(props);
        this.cityName = ""
        this.title = ""
        this.alertTrip = this.alertTrip.bind(this);
        console.log(this)
     }
    alertTrip(event){
        if(event.target.value === "Praga"){
            this.cityName = "Praga"
            this.title = `Tu destino es viajar a ${this.cityName}`
            console.log(this.cityName)
            this.forceUpdate();
        } else if (event.target.value === "Boston"){
            this.cityName = "Boston"
            this.title = `Tu destino es viajar a ${this.cityName}`
            console.log(this.cityName)
            this.forceUpdate();
        } else if (event.target.value === "Buenos Aires"){
            this.cityName = "Buenos Aires"
            this.title = `Tu destino es viajar a ${this.cityName}`
            console.log(this.cityName)
            this.forceUpdate();
        }
    }
    render() { 
        return ( 
            <Fragment>
                <select onChange={this.alertTrip} name="" id="">
                    <option value="">Selecciona un destino</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Praga">Praga</option>
                    <option value="Boston">Boston</option>
                </select>

                <h1 className="tituloDestino"> {this.title}</h1>
               
                <CityImage city={this.cityName}/>
            </Fragment>
        ); 
    }
}
 
export default Destiny;