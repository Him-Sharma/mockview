import React from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Control from "../components/Control/Control";
import StubList from "../components/StubList/StubList";

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
