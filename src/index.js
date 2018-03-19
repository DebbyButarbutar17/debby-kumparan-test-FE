import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import React from 'react';
// import ReactDOM from 'react-dom';
import { AppRoute } from './components/router';
import { Users } from './components/users';

ReactDOM.render(
    <AppRoute/>,
    document.getElementById('root')
);
registerServiceWorker();
