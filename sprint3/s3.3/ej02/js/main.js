'use strict';

class Square {
  constructor(length) {
    this.length = length;
  }
  perimeter() {
    let perimeterREsult= 4 * this.length;
    console.log(perimeterREsult);
    
  }
  area() {
    let areaREsult= this.length * this.length;
    console.log(areaREsult);
    
  }
}

const square1 = new Square(1);
const square2 = new Square(3);
const square3 = new Square(7);

square1.perimeter();
square1.area();
square2.perimeter();
square2.area();
square3.perimeter();
square3.area();