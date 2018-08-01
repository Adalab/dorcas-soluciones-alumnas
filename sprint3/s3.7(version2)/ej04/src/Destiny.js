import React, { Component } from 'react';
import CityImage from './CityImage';
import './Destiny.css';

class Destiny extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.city = "https://colabcdn.azureedge.net/-/media/Images/Buenos-Aires/PCOM_INSIDE_ARGENTINA_1_1280X720.jpg?w=896&h=504";
  }

  handleChange(event){
    console.log(this.props.arrayImages);
    console.log(event.target.value);
  const {BuenosAires, Sydney,Praga,Boston,Tokyo} = this.props.arrayImages;
  
    if (event.target.value === "Buenos Aires"){
      this.city = BuenosAires;
    } else if (event.target.value === "Sydney") {
      this.city = Sydney;
    } else if (event.target.value === "Praga") {
      this.city = Praga;
    } else if (event.target.value === "Boston") {
      this.city = Boston;
    }  else if (event.target.value === "Tokyo") {
      this.city = Tokyo;
    }
    console.log(this.city);
    
    // alert(`Tu destino es viajar a ${event.target.value}, siendo ${event.target.value} la ciudad seleccionada`)
    this.forceUpdate();
  }

  render() {
  const ciudades = ['Buenos Aires','Sydney','Praga', 'Boston', 'Tokyo'];
    return (
      <div className="Wrapper">
        <select className="Select" onChange = {this.handleChange} name="" id="">
          {ciudades.map(function(ciudad, index){
            return (
              <option value={ciudad} key={index}> 
                {ciudad}
              </option>);
          })}
        </select>
        <CityImage city={this.city}/>
      </div>
    );
  }
}

export default Destiny;
