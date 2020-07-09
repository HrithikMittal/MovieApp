import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Item from './components/item';
import NavButtons from './components/navbuttons'
import {createStore} from "redux"
import { act } from 'react-dom/test-utils';

// const reducer = (state={movies:[]},action)=>{
//     switch(action.type){
//       case "ADDMOVIE":
//         state = {
//             movies:[...state.movies,action.payload]
//         }
//         // state.movies.push(action.payload)
//         break;
//       case "ADDFAV":
//         state = {
//           movies:[...state.movies,action.payload]
//         }
//         break;
//     }
//     return state;
// };

// const store = createStore(reducer,{movies:[]})

// store.subscribe(()=>{
//   console.log(store.getState())
// })

function App(props) {
  return (
    <div className="App">
      <Navbar store={props.store}/>
      <NavButtons store={props.store}/>
      <div id="main">
      <Item store={props.store}/>

      </div>

    </div>
  );
}

export default App;
