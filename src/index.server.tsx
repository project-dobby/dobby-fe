import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Temp from 'src/components/Temp';
import rootReducer from 'src/ducks/index.ts';

const app = express();

export function renderFullPage(html: any, preloadedState: any) {
    return `
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <title>Dobby</title>
        </head>
        <body>
            <div id='root'>${html}</div>
        </body>
        <script src='dist/index.js'></script>
        <script>
          window.__PRELOADED_STATE__ =
             ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
        </script>
        </html>`;
}

app.get('/', (req, res) => {
    const store = createStore(rootReducer);

    const html = renderToString(
        <Provider store={store}>
            <Temp />
        </Provider>,
    );

    const preloadedState = store.getState();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(renderFullPage(html, preloadedState));
});

app.use('/dist', express.static('dist'));
app.listen(9000);
