import React, { Component } from 'react';
import './App.css';

class Movies extends Component{
  constructor(props){
    super(props);
    this.state={
      name: '',
      sinopsis: '',
      genero: ''
    };
    this.cambiosUsuario = this.cambiosUsuario.bind(this);
    this.cambiosUsuario2 = this.cambiosUsuario2.bind(this);
    this.cambiosSelect = this.cambiosSelect.bind(this);
  }
  cambiosUsuario(event){
    this.setState({name: event.currentTarget.value.toUpperCase()});
  }
  cambiosUsuario2(event){
    this.setState({sinopsis: event.currentTarget.value.toUpperCase()});
  }
  cambiosSelect(event){
    this.setState({genero: event.currentTarget.value});
  }
  render(){
    return(
      <form>
        <label htmlFor="name">Name:</label>
        <input id="tituloPeli" type="text" value={this.state.name} onChange={this.cambiosUsuario}></input>
        <textarea id="sinopsisPeli" value={this.state.sinopsis} onChange={this.cambiosUsuario2}></textarea>
        <select value={this.state.genero} onChange={this.cambiosSelect}>
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </select>

        <div className="tarjeta">
          <h1>{this.state.name}</h1>
          <p>{this.state.sinopsis}</p>
          <h5>{this.state.genero}</h5>
        </div>
      </form>
    )
  }
}

export default Movies;
