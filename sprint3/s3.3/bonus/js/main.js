'use strict';
class Polygon {
  constructor(numberOfSides,height,base) {
    this.numberOfSides=numberOfSides;
    this.height=height;
    this.base=base;
  }
  perimeter() {
    let perimeterREsult= this.numberOfSides * this.base;
    console.log('im a poly',perimeterREsult);
    
  }
  area() {
    let areaREsult= this.base * this.height;
    console.log(areaREsult);
    
  }

}
const polygonChild = new Polygon(5,8,4);
polygonChild.perimeter();
polygonChild.area();

class Square extends  Polygon{
  constructor(base,height) {
    super(4,height,base);
    this.side = base;
    this.height= base;
  }
  
}
const square1 = new Square(7);
square1.perimeter();
square1.area();

class Triangle extends  Polygon{
  constructor(base,height) {
    super(3,height,base);
    this.side = base;
  }
  area() {
    let areaREsult= (this.base * this.height)/2;
    console.log(areaREsult);
    
  }

}
const triangle1 = new Triangle(7,9);
triangle1.perimeter();
triangle1.area();

