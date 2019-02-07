import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './css/index.scss';
import App from "./components/App";
import {Provider} from 'react-redux';
import { store} from "./store/configureStore";

ReactDOM.render((
    <Provider store={store}>
        <HashRouter >
            <App />
        </HashRouter>
    </Provider>
), document.getElementById('root'));


