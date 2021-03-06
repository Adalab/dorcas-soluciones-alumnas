import React, { Component } from 'react';
import DatosPersonas from './components/DatosPersonas';
import logo from './logo.svg';
import './App.css';

const ENDPOINT = 'https://randomuser.me/api/?results=50';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reasonsStore: [],
      tempData: [],
      value: null
    }
    console.log(this.state)
    this.fetchNewReasons = this.fetchNewReasons.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.fetchNewReasons();
  }

  handleChangeCity(event){
    
    const ciudad = event.target.value;
    console.log(ciudad)
    let item = this.state.reasonsStore.filter(item => item.location.city === ciudad);
    console.log(item)
     this.setState({
      tempData: item,
      value: ciudad,
    })

  }
  handleChangeGender(event) {

      const gender = event.target.value;
      console.log("gender",gender)
      let item = this.state.reasonsStore.filter(item => item.gender === gender);
      console.log(item)
      this.setState({
        tempData: item,
        value: gender,
       
      })

  }



  fetchNewReasons() {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        
        this.setState({
          reasonsStore: data.results,
          tempData : data.results
        });
      });
  }
  render() {

    const { reasonsStore } = this.state;
    console.log("aaaa",reasonsStore)
    console.log(this.state.reasonsStore)
    
    return (
      <div className="App">
          <div className="location">
    
          </div>
          <DatosPersonas  datosSelect = {this.state.reasonsStore}
           datosList = {this.state.tempData}
           changeCity={this.handleChangeCity} 
           changeGender={this.handleChangeGender} 
          
          />
      </div>
    );
  }
}

export default App;
