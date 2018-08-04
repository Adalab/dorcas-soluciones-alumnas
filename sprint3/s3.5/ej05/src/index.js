import React from 'react';
import ReactDOM from 'react-dom';
import './styles/mediacard.css';
import registerServiceWorker from './registerServiceWorker';
import MediaList from './components/MediaList';


ReactDOM.render(<MediaList />, document.getElementById('root'));
registerServiceWorker();
