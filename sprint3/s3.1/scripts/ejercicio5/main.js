'use strict';
let adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  }
];

function countAdalabers() {
  alert(`Hay '${adalabers.length}'`);
}

countAdalabers();

function averageAge(array) {
  let contador= 0;
  for (const persona of array) {
    console.log('first', persona.age);
    contador = contador + persona.age;
     
  }
  alert(`La media es '${contador / array.length}'`);
}

averageAge(adalabers);

function youngOne (array){
  let younger = array.reduce(function(acc, adalaber){
    if (acc.age < adalaber.age){
      return acc;
    }
    else {
      return adalaber;
    }
  }, {});
  alert(`The youngest is '${younger.age}'`);
}
youngOne (adalabers);

//countdesginers
function countDesigner(array) {
  let count = 0;
  for (const persona of array) {
    if (persona.job === 'diseñadora')
      count ++; 
  }
  alert(`hay '${count}' diseñadoras`);
}
countDesigner(adalabers);

