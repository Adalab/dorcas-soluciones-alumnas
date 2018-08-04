import React from 'react';

class Mediacard extends React.Component {
  render() {
let heartClassName = "fa-heart heart ";
if (this.props.heart === 'full') {
  heartClassName += "fas"
} else {
  heartClassName += "far"
}


    return (

<div className="card__container">

    <div className="card__header">

        <img src={this.props.photo} alt="Anna's mugshot" className="card__header--photo"/>

        <div className="header--text">
            <h1 className="card__header--title">{this.props.name}</h1>
            <h2 className="card__header--date">{this.props.date}</h2>
        </div>
    </div>
    <div className="card__main">
        <p className="card__main--text">
        {this.props.text}</p>
    </div>
    <div className="card__footer">
        <p className="more">Leer más...</p>
        <p className="likes">{this.props.likes} <i className={heartClassName}></i></p>
    </div>

</div>
    );
  }
}

export default Mediacard;
