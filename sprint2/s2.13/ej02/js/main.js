'use strict';

var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
var saludos = names.map(function(saludar){
  return ('Bienvenida  ' + saludar );
});
alert (saludos);

