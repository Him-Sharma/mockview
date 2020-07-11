import React from "react";
import "./StubListItem.css";

const stubItem = (props) => {
  return (
    <div className="StubListItem" onClick={props.clicked} id={props.id}>
      <h1>{props.method}</h1>
      <h1>{props.endpointName}</h1>
    </div>
  );
};

export default stubItem;
