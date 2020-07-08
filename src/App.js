import React from "react";
import "./App.css";
import Header from './Header/Header';
import Control from './Control/Control';
import StubList from './StubList/StubList';

function App() {
  return (
    <div className="App">
      <Header />
      <Control />
      <StubList />
    </div>
  );
}

export default App;
