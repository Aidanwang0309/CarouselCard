import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CarouselList from './CarouselList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CarouselList />, document.getElementById('root'));
registerServiceWorker();
