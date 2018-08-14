import React from 'react';
import ReactDOM from 'react-dom';
import { EventEmitter } from 'fbemitter';
import Root from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

global.eventHub = new EventEmitter();

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
