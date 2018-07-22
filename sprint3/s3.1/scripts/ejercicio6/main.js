'use strict';
const users = [
  {name: 'Nymphadora Tonks', time: 9},
  {name: 'Cedric Diggory', time: 28},
  {name: 'Cho Chang', time: 35},
  {name: 'Luna Lovegood', time: 45},
  {name: 'Gregory Goyle', time: 56}
];

const [winner1, winner2 ,winner3] = users;
console.log(`${winner1.time} ${winner2.time} ${winner3.time}`);