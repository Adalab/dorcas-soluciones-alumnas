import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CatList from './components/CatList';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<CatList />, document.getElementById('root'));
registerServiceWorker();
