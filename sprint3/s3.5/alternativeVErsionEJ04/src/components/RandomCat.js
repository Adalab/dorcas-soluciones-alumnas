import React from 'react';

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    const heightCat = this.props.height;
    const widthCat = this.props.width;
    return (
      heightCat === undefined && widthCat === undefined ? 
      <a href="http://lorempixel.com">
        <img src={ `http://lorempixel.com/${200}/${400}/cats/${randomCat}` } alt="Random cat" />
      </a>
      :
          <a href="http://lorempixel.com">
          <img src={ `http://lorempixel.com/${heightCat}/${widthCat}/cats/${randomCat}`} alt="Random cat" />
        </a>
      
    );} 
  }


export default RandomCat;