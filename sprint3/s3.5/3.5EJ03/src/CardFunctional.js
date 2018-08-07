import React, { Component } from 'react';

const CardFunctional = ({logo1, name, text, link, number, type}) =>(
    <div className= "Wrapper">
   <header className="Article-header">
                <img src={logo1} className="App-logo" alt="logo" />
                <h1 className="App-title">{name}</h1>
            </header>
            <article className="Article">
                <p className="App-intro">
                    {text}
            </p>
                <footer className="Footer">
                    <a href={link}>leer más...</a>
                    <span className="Heart">{number}</span>
                    <i className={type}></i>
                </footer>
            </article>
            </div>
);

export default CardFunctional;