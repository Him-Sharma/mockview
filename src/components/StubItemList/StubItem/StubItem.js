import React from "react";

const stubItem = (props) => {
  const style = {
    color: "white",
    font: "inherit",
    border: "2px solid grey",
    padding: "8px",
    margin: "8px 8px",
  };
  return (
    <div>
      <h1 style={style}>{props.endpointName}</h1>
    </div>
  );
};

export default stubItem;
