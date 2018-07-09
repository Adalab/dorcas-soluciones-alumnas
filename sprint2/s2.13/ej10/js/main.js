'use strict';
var users = [
  {name: 'María', isPremium: false, pin: 2389},
  {name: 'Lucía', isPremium: true, pin: 2384},
  {name: 'Susana', isPremium: true, pin: 2837},
  {name: 'Rocío', isPremium: false, pin: 5232},
  {name: 'Inmaculada', isPremium: false, pin: 8998}
];
var nombres = users.name;
var result = nombres.sort(a, b);


console.log(result);