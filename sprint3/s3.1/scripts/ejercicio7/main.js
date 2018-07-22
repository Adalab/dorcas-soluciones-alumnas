'use strict';
const users = [
  {name: 'Nymphadora Tonks', time: 9},
  {name: 'Cedric Diggory', time: 28},
  {name: 'Cho Chang', time: 35},
  {name: 'Luna Lovegood', time: 45},
  {name: 'Gregory Goyle', time: 56}
];

const [winner1, winner2 ,winner3] = users;
console.log(`The winner is ${winner1.name} with a time of ${winner1.time} , the second is ${winner2.name} with a time of ${winner2.time} , the third is ${winner3.name} with a time of ${winner3.time} `); 