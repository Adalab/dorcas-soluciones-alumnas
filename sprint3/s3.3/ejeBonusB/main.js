'use strict';
class Polygon {
  constructor(numberOfSides,height,base) {
    this.numberOfSides=numberOfSides;
    this.height=height;
    this.base=base;
  }
  perimeter() {
    return this.numberOfSides * this.base;
    
    
  }
  area() {
    return this.base * this.height;
    

  }

}

class Square extends  Polygon{
  constructor(base,height) {
    super(4,height,base);
    this.side = base;
    this.height= base;
  }
  get gettingArea(){
    return super.area();
  }
  set newArea(newBase){
    this.base = newBase;
  }
}

const square1 = new Square(7);
square1.area();
const consultingArea= square1.gettingArea;
console.log('area1',consultingArea);
 
square1.newArea=47;
const consultingArea2= square1.gettingArea;
console.log('area2',consultingArea2);






