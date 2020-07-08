import React from "react";
import "./StubItemList.css";

const stubItemList = () => {
  const style = {
    color: "white",
    font: "inherit",
    border: "2px solid green",
    padding: "8px",
  };
  return (
    <div className="StubItemList">
      <h1 style={style}>/items</h1>
    </div>
  );
};

export default stubItemList;
