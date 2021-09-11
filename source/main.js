import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './main.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import stores from './Redux/store'


ReactDOM.render(
    <Provider store = {stores}>
    <BrowserRouter>
<App />
</BrowserRouter>
</Provider>
, document.getElementById('app'));