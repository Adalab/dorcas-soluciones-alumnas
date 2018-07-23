'use strict';

// Revisa el ejercicio 6 para acceder al tiempo de los ganadores
// usando destructuring de array y de objeto.
// Ahora vamos a imprimir en la consola el nombre del ganador y su tiempo.

const users = [
  {name: 'Nymphadora Tonks', time: 9},
  {name: 'Cedric Diggory', time: 28},
  {name: 'Cho Chang', time: 35},
  {name: 'Luna Lovegood', time: 45},
  {name: 'Gregory Goyle', time: 56}
];

const [{name: nameOne, time: timeOne}, {time: timeTwo}, {time: timeThree}] = users;
console.log(`Los mejores tiempos son ${timeOne}, ${timeTwo}, ${timeThree}`);

console.log(`El ganador es ${nameOne} con ${timeOne}`);
