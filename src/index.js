import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import './index.css';
import { createStore, applyMiddleware } from 'redux';

import App from './Components/App';
import root from './reducers';


//** OLD Way of middleWare */
// const logger = () => {
//   return function (next) {
//     return function (action) {
//       console.log("ACTION TYPE :", action.type);
//       next(action);
//     }
//   }
// }
//** New way to MiddleWare */
const logger = () => (next) => (action) => {
  //logger code 
  console.log("ACTION TYPE :", action.type);
  next(action);
}

const store = createStore(root, applyMiddleware(logger));
console.log(store);
console.log('before action', store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   state: ['m1', 'm2'],
//   // no use of movies 
//   // movies: [{name: 'm1'}]
// })


console.log('after action', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App
      store={store}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
