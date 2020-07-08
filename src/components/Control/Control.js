import React from "react";
import "./Control.css";

const control = () => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid green",
    padding: "8px",
    margin: "auto 10px",
  };

  return (
    <div className="Control">
      <input style={style} type="text" data-testid="serverUrlInput"></input>
      <button style={style}>Fetch Mocks</button>
    </div>
  );
};

export default control;
