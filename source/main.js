import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './main.css';
import {BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'
import {stores,persistor} from './Redux/store'


ReactDOM.render(
    <Provider store = {stores}>
    <BrowserRouter>
    <PersistGate persistor ={persistor}>
        <App />
</PersistGate>
</BrowserRouter>
</Provider>
, document.getElementById('app'));