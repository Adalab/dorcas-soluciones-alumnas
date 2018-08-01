import React, { Component } from 'react';
import './App.css';
import Destiny from './Destiny';

const imagesCity = {
    'BuenosAires': 'https://colabcdn.azureedge.net/-/media/Images/Buenos-Aires/PCOM_INSIDE_ARGENTINA_1_1280X720.jpg?w=896&h=504',
    'Sydney': 'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200', 
    'Praga': 'https://buenavibra.es/wp-content/uploads/2015/09/hostel-praga1.jpg',
    'Boston': 'https://www.dentons.com/-/media/images/website/background-images/offices/boston/boston_1.jpg',
    'Tokyo':'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?w968h681'
  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Destiny arrayImages={imagesCity}/>
      </div>
    );
  }
}

export default App;
