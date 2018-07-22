'use strict';
var dogs = [
    {
      image: 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg',
      name: 'Dina'
    },
    {
      image: 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg',
      name: 'Bobby'
    },
    {
      image: 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg',
      name: 'Lana'
    }
  ];


  let ul = document.createElement('ul');
  let li = document.createElement('li');
  let body = document.querySelector('body');
const [element1, element2, element3] = dogs;

console.log(element1.image);
body.appendChild(ul);
ul.innerHTML =  `
  <li>
  <img src="${element1.image}"/>
  ${element1.name}
  </li>
  <li>
  <img src="${element2.image}"/>
  ${element2.name}
  </li>
  <li>
  <img src="${element3.image}"/>
  ${element3.name}
  </li>
  `