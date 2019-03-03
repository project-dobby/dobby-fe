import express from 'express';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from 'src/ducks/index.ts';
import {renderToString} from "react-dom/server";
import Temp from 'src/components/Temp';

const app = express();

app.use('/dist', express.static('dist'));
app.listen(9000);

app.get('/', (req, res) => {

    const store = createStore(rootReducer);

    const html = renderToString(
        <Provider store={store}>
            <Temp/>
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end(renderFullPage(html, preloadedState));
});


export function renderFullPage(html: any, preloadedState: any) {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Dobby</title>
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
        <script src="dist/index.js"></script>
        <script>
          window.__PRELOADED_STATE__ = 
             ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
        </script>
        </html>
    `;
}

