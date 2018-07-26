import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemList from './ItemList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ItemList />, document.getElementById('root'));
registerServiceWorker();
