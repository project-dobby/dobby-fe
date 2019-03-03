import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'src/ducks';

import Temp from 'src/components/Temp';

const isClient = process.env.PROJECTION_ENV === 'client';
const render = isClient ? ReactDOM.render : hydrate;

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

function getTemplate() {
    const store = createStore(rootReducer, preloadedState);
    return (
        <Provider store={store}>
            <Temp />
        </Provider>
    );
}

console.log(`${isClient ? 'Client' : 'Server'} Rendering`);
render(
    getTemplate(),
    document.getElementById('root'),
);
