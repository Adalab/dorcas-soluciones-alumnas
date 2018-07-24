import React from "react";
import logo from "./img_yo.png";
import "./App.css";

class MediaCard extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Div_img">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Div_text">
            <h1 className="MyName"> Aylén Ortiz</h1>
            <p className="Myday">Lunes, 23 de Julio de 2018</p>
          </div>
        </header>
        <p className="App-intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eius sequi explicabo impedit ratione tempora atque. Quae quo ratione
          cumque perspiciatis quos temporibus, sunt rerum, itaque quam,
          explicabo corrupti assumenda.
        </p>
        <footer className="Footer_1">
          <p className="footer_text">Leer más...</p>
          <div className="footer_2">
            <p className="footer_number">37</p>
            <i className="fas fa-heart icon" />
          </div>
        </footer>
      </div>
    );
  }
}

export default MediaCard;
