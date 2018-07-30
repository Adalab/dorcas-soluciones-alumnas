import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ItemList from './ItemList';

ReactDOM.render(<ItemList />, document.getElementById('root'));
registerServiceWorker();
