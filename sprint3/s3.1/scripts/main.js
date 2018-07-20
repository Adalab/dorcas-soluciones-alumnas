'use strict';

//EJERCICIO 7

var users = [
  {name: 'Nymphadora Tonks', time: 9},
  {name: 'Cedric Diggory', time: 28},
  {name: 'Cho Chang', time: 35},
  {name: 'Luna Lovegood', time: 45},
  {name: 'Gregory Goyle', time: 56}
  ];

const [first] = users;
const {name, time} = first;
console.log(The winner is ${first.name} with ${first.time} seconds);
