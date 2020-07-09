import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Item from './components/item';
import NavButtons from './components/navbuttons'


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
