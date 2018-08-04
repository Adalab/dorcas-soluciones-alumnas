import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const fr = new FileReader();

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion:'',
      genero:'',
      caratula: 'https://via.placeholder.com/100x100'
    };
    this.fileInput = React.createRef();
    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangeDescripcion = this.handleChangeDescripcion.bind(this);
    this.handleChangeGenero = this.handleChangeGenero.bind(this);
    this.handleChangeCaratula = this.handleChangeCaratula.bind(this);
    this.writeImages = this.writeImages.bind(this);

  }

    handleChangeNombre(event) {
      this.setState({nombre: event.target.value});
    }
    handleChangeDescripcion(event) {
      this.setState({descripcion: event.target.value});
    }
    handleChangeGenero(event) {
      this.setState({genero: event.target.value});
    }
    handleChangeCaratula(event) {
      const file = event.target.files[0];
      fr.addEventListener('load', this.writeImages);
      fr.readAsDataURL(file);
    }

    writeImages(){
    this.setState({caratula:fr.result});
}

  render(){
    return (
      <div className="App">
        <form action="">
        <div className="name">
          <label htmlFor="">Nombre</label>
          <input name="nombre" type="text" value={this.state.nombre} onChange={this.handleChangeNombre} />
          </div>
           <div className="description">
          <label htmlFor="">Descripción</label>
          <textarea name="descripcion" id="" cols="30" rows="10" value= {this.state.descripcion} onChange={this.handleChangeDescripcion} />
          </div>
          <div className="gender">
          <select name="genero" id="" value= {this.state.genero} onChange={this.handleChangeGenero} >
            <option>Comedia</option>
            <option>Drama</option>
            <option>Infantil</option>
          </select>
          </div>
          <div>
              <input onChange={this.handleChangeCaratula} type="file" ref={this.fileInput}/>
              <img src= {this.state.caratula}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Formulario;
