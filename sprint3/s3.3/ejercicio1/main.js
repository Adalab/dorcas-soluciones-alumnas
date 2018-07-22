'use strict';
class Square {
  perimeter(length) {
    let perimeterREsult= 4 * length;
    console.log(perimeterREsult);
    
  }
  area(length) {
    let areaREsult= length * length;
    console.log(areaREsult);
    
  }
}

const square1 = new Square;
square1.perimeter(9);
square1.area(9);