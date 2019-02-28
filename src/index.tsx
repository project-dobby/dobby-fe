import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import rootStore from 'src/ducks';

import Temp from 'src/components/Temp';

const store = createStore(combineReducers(rootStore));

ReactDOM.render(
    <Provider store={store}>
        <div>
            Hello World!
        </div>
        <Temp/>
    </Provider>,
    document.getElementById('root')
);