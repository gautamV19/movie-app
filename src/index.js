import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import './index.css';
import { createStore } from 'redux';

import App from './Components/App';
import root from './reducers';

const store = createStore(root);
console.log(store);
console.log('before action',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   state: ['m1', 'm2'],
//   // no use of movies 
//   // movies: [{name: 'm1'}]
// })

console.log('after action',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App 
    store={store}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
