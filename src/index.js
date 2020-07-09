import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers} from "redux"
import {Provider  } from 'react-redux';
const onereducer = (state={movies:[]},action)=>{
  switch(action.type){
    case "ADDMOVIE":
      state = {
          movies:[...state.movies,action.payload],
      }
      
      // state.movies.push(action.payload)
      break;
  }
  return state;
};
const tworeducer = (state={fav:[]},action)=>{
  switch(action.type){
    case "ADDFAV":
      state = {
        fav:[...state.fav,action.payload]
      }
      break;
      case "REMFAV":
      state = {
        fav:[...action.payload]
      }
      break;
  }
  return state;
};


const store = createStore(combineReducers({movies:onereducer,fav:tworeducer}))

store.subscribe(()=>{
console.log("State")
console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App  store={store}/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
