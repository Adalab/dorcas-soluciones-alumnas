'use strict';

let userChoice1 = prompt('¿Cuál es tu película favorita?');
let userChoice2 = prompt('¿Cuál es tu segunda película favorita?');

let movies = [userChoice1, userChoice2];

 for (const movie of movies) {
    alert(`A mi también me encantó '${movie}'! Tenemos mucho en común humano`);
};