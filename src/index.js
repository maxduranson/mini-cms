import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {LoginForm} from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<LoginForm />, document.getElementById('root'));
