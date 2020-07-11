import React from "react";
import "./StubItemInfo.css";

const stubItemInfo = (props) => {
  if (props.selectedStubItem) {
    return (
      <div className="StubItemInfo" data-testid="messageText">
        <h1>Method: {props.selectedStubItem.predicates[0].equals.method}</h1>
        <h1>Path: {props.selectedStubItem.predicates[0].equals.path}</h1>
        <h1>Responses: </h1>
        <p>StatusCode: {props.selectedStubItem.responses[0].is.statusCode}</p>
        <p>body: {props.selectedStubItem.responses[0].is.body}</p>
      </div>
    );
  } else {
    return <h1>No Stub items to display</h1>;
  }
};
export default stubItemInfo;
