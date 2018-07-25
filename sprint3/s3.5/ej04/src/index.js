import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CatList from './components/CatList';
import RandomCat from './components/RandomCat';

ReactDOM.render(<CatList width = {200}
                         heigth = {400}
/>, document.getElementById('root'));

