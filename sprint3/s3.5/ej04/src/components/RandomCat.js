import React from 'react';
import CatList from './CatList';


const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component{

    render(){
        console.dir(CatList);
      const randomCat = getRandomInteger(NUMBER_OF_CATS);
        console.log(this.props.alto);
        console.log(this.props.ancho);
      if (this.props.alto === 200 && this.props.ancho === 200) {

             return( <a href="http://lorempixel.com">
                    <img src={ `http://lorempixel.com/200/200/cats/${randomCat}` } alt="Random cat" />
                 </a>);
      } else if (this.props.alto === 400 && this.props.ancho === 200) {
             return( <a href="http://lorempixel.com">
                        <img src={ `http://lorempixel.com/200/400/cats/${randomCat}` } alt="Random cat" />
                     </a>);
      }else{

             return (
                     <a href="http://lorempixel.com">
                        <img src={ `http://lorempixel.com/400/200/cats/${randomCat}` } alt="Random cat" />
                      </a>);
      }
        
    }
}

export default RandomCat;