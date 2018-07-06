'use strict';

var parrafoS = document.querySelector('.parrafoSeg');
var parrafoM = document.querySelector('.parrafoMin');

var segundos = 0;
var minutos = 0;

function contadorSegundos(){
  segundos = segundos + 1;
  parrafoS.innerHTML = ' ' + segundos + ' segundos';
  if (segundos===60){
    segundos=0;
    contadorMinutos();
  }
}

function contadorMinutos(){
  minutos = minutos + 1;
  parrafoM.innerHTML = 'Posteado hace ' + minutos + ' minutos';
}

var tempSeg = setInterval(contadorSegundos, 1000);
