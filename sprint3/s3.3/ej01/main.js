'use strict';

class Square {
 
  perimeter(side) {
    let perimeterREsult= 4 * side;
    console.log(perimeterREsult);
    
  }
  area(side) {
    let areaREsult= side * side;
    console.log(areaREsult);
    
  }
}

const square1 = new Square();

square1.perimeter(9);
square1.area(9);
