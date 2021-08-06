import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import './index.css';
import { createStore } from 'redux';

import App from './Components/App';
import movies from './reducers';

const store = createStore(movies);
console.log(store);
console.log(store.getState());

store.dispatch(){
  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
