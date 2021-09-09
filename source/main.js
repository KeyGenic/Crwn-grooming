import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './main.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider>
    <BrowserRouter>
<App />
</BrowserRouter>
</Provider>
, document.getElementById('app'));