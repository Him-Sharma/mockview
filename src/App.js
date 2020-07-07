import React from "react";
import "./App.css";
import Header from './Header/Header';
import Control from './Control/Control';
import MockList from './MockList/MockList';

function App() {
  return (
    <div className="App">
      <Header />
      <Control />
      <MockList />
    </div>
  );
}

export default App;
