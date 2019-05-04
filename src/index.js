import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './shared/routes/root/AppRouter';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from  'react-router-dom'

// ! Redux
import { Provider } from 'react-redux'; // da access al store de toda la aplicacion(nos da el store inicial)
import configureStore from './shared/Redux/configure_store.store'

const store = configureStore({})

ReactDOM.render(<Provider store={store}><Router> <AppRouter/> </Router></Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
