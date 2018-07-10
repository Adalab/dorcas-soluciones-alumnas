'use strict';

var button = document.querySelector('button');
var input = document.querySelector('input');
var body = document.querySelector('body');
var url = 'https://swapi.co/api/people/?search=';


function searchUser() {
  var inputValue = input.value;
  console.log(inputValue);

  fetch(url + input.value)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
      var arrayResultados=[];

      for (var i = 0; i < json.results.length; i++) {
        var list = document.createElement('ul');
        var element = document.createElement('li');
        body.appendChild(list);
        list.appendChild(element);
        element.innerHTML = 'Name: ' + json.results[i].name + ',  Gender: ' + json.results[i].gender;
        var people = {
          name: json.results[i].name,
          gender: json.results[i].gender,
        };
        arrayResultados[i]=people;

      }
      localStorage.setItem('people', JSON.stringify(arrayResultados));
    });
}

button.addEventListener('click', searchUser);

