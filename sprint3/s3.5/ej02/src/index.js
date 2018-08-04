import React from 'react';
import ReactDOM from 'react-dom';
import './styles/mediacard.css';
import Mediacard from './components/Mediacard';
import registerServiceWorker from './registerServiceWorker';
import photo from './images/foto4.png';

// ---- Determina la fecha de hoy, la define en una variable (today), para pasar la variable como prop al componente Mediacard
let today = new Date();
let dd = today.getDate();
let ddd = today.getDay();
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
ddd = days[ddd];
let mm = today.getMonth();
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'noviembre', 'diciembre']
const mmm = months[mm];
const yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = `${ddd}, ${dd} de ${mmm} de ${yyyy}`;


ReactDOM.render(<Mediacard name='Anna Branco' date={today} photo={photo} text='At eu hendrerit exerci nostrud duis ut velit eum aliquip augue nulla. Ea ullamcorper vero ad ut consequat eum sed nostrud blandit esse et dignissim lobortis magna, in iriure in tation duis delenit. Suscipit, autem aliquip ut vero hendrerit commodo veniam blandit. Aliquip eros nisl eu augue ad elit eros adipiscing accumsan. Eum, nonummy crisare dolore molestie.' likes={1} heart='full' />, document.getElementById('root'));
registerServiceWorker();
