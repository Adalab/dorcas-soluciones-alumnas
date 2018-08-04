

//bonus B

class Polygon{

    constructor(numberOfSides,base,height){
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }

    perimeter(){
        return this.numberOfSides * this.base;
    }

    area(){
  
        return this.base * this.height;
    }
}

class Square extends Polygon{

    constructor(side){
        super(4,side,side); 
    }

     get consultaArea(){
        return super.area();
     }

    set modificarLado(lado){
        super.base=lado;
        super.height= lado;
        
    }

}

const cuadrado = new Square(7);

const area = cuadrado.consultaArea;
console.log(area)

cuadrado.modificarLado = 47;
const area2 = cuadrado.consultaArea;
console.log(area2)