import React from 'react';

// Componente Mediacard, forma normal

class Mediacard extends React.Component {


  render() {
let heartClassName = "fa-heart heart ";
if (this.props.heart === 'full') {
  heartClassName += "fas"
} else {
  heartClassName += "far"
}

//Establece fecha de nacimiento de cada persona en cada tarjeta
  let birthDate = new Date();
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'noviembre', 'diciembre'];

  //Determina el día del nacimiento, de acuerdo con props recibido
  let dd = this.props.bday;
    console.log(dd);
  birthDate.setDate(dd);

//Determina el mes del nacimiento, de acuerdo con props recibido
  let mm = this.props.bmonth;
    console.log(mm);
    mm -= 1;
  birthDate.setMonth(mm);

  let mmm = months[mm];
    console.log(mmm);

  //Determina el año del nacimiento, de acuerdo con props recibido
  let yyyy = this.props.byear;

  //Monta la fecha completa del nacimiento
  birthDate.setFullYear(yyyy);
    console.log(yyyy);

//Retorna el día de la semana, de acuerdo con la fecha completa
  let ddd = birthDate.getDay();
      ddd = days[ddd];
      console.log(ddd);

  let birthday = `${ddd}, ${dd} de ${mmm} de ${yyyy}`;

  console.log(birthday);


    return (

<div className="card__container">

    <div className="card__header">

        <img src={this.props.photo} alt="Person's mugshot" className="card__header--photo"/>

        <div className="header--text">
            <h1 className="card__header--title">{this.props.name}</h1>
            <h2 className="card__header--date">{birthday}</h2>
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
