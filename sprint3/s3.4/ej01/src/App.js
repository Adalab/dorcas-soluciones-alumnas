import React, { Component } from 'react';
import logo from './casiopea.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-titleandsub-container">
            <h1 className="App-title">Casiopea</h1>
            <h2 className="App-subtitle">Lunes 23 de julio de 2018</h2>
          </div>
        </header>
        <main className="App-main">
          <p className="App-intro">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
          </p>
          <div className="App-foot">
            <p className="App-readmore">
              Leer más...
            </p>
            <p className="App-likes">
              37
              <i className="fas fa-heart"></i>
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
