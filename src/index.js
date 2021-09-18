import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
    timeout: 5000,
    offset: '10px',
    padding: '30px',
    position: positions.TOP_CENTER,
    transition: transitions.SCALE,
    containerStyle: {
        zIndex: 1000,
        top: '50px',
    },
};

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>,
    document.querySelector('#root')
);
