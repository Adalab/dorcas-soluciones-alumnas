import React from 'react';

// Componente Mediacard convertido en componente funcional


const Mediacard = (props) => {

  let heartClassName = "fa-heart heart ";
  if (props.heart === 'full') {
    heartClassName += "fas"
  } else {
    heartClassName += "far"
  }

  return (
    <div className="card__container">

        <div className="card__header">

            <img src={props.photo} alt="Anna's mugshot" className="card__header--photo"/>

            <div className="header--text">
                <h1 className="card__header--title">{props.name}</h1>
                <h2 className="card__header--date">{props.date}</h2>
            </div>
        </div>
        <div className="card__main">
            <p className="card__main--text">
            {props.text}</p>
        </div>
        <div className="card__footer">
            <p className="more">Leer más...</p>
            <p className="likes">{props.likes} <i className={heartClassName}></i></p>
        </div>

    </div>
  );
}

export default Mediacard;
