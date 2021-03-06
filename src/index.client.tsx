import React, {ReactElement} from 'react';
import ReactDOM, {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from 'src/ducks';

import App from 'src/components/App';

const isClient = process.env.PROJECTION_ENV === 'client';
const render = isClient ? ReactDOM.render : hydrate;

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

function getTemplate(): ReactElement {

    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk),
            // @ts-ignore
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

console.log(`${isClient ? 'Client' : 'Server'} Rendering`);
render(
    getTemplate(),
    document.getElementById('root'),
);
