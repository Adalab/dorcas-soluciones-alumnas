'use strict';

import React, { Component } from 'react';
import toro from './toro.jpg';
import './App.css';

// Ejercicios de Andreina y Sofi
const MediaCard = (props) => {
    let heartType = "";
    if (props.heartType=="true"){
      heartType = "far fa-heart";
    } else {
      heartType = "fas fa-heart";
    }
    return (
    <section className="App">
      <div className="App-caja-gris">
        <div className="App-caja-blanca">
          <div className="App-header">
            <img src={props.image} className="App-toro" alt="logo" />
            <div className="App-title">
              <h1 className="App-name">{props.name}</h1>
              <p>{props.date}</p>
            </div>
          </div>
          <p className="App-text">{props.text}</p>
          <div className="App-like">
            <p className="App-read">Leer más...</p>
            <p><span className="App-number">{props.likes}</span><i className={heartType}></i></p>
          </div>
        </div>
      </div>
    </section>);
}

export default MediaCard;
