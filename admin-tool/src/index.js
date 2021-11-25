
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App/App';
import reducers from './state/index';
import storeRegistry from './state/storeRegistry';

import 'normalize.css';

const store = createStore( reducers, undefined, applyMiddleware( thunk ) );

storeRegistry.register( store );

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById( 'root' ),
);
