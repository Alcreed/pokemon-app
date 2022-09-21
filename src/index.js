import React from 'react';
import ReactDOM from 'react-dom';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import App from './App';

import './index.css';

const store = createStore(
  pokemonsReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

